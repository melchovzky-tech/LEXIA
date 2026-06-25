const crypto = require("crypto");

const paymentsMemory = [];

const PAYMENT_PROVIDER = (process.env.PAYMENT_PROVIDER || "demo").toLowerCase();
const PLATFORM_FEE_RATE = Number(process.env.LEXIA_PAY_PLATFORM_FEE_RATE || 0.1);
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const API_PUBLIC_URL = process.env.API_PUBLIC_URL || `http://localhost:${process.env.PORT || 4000}`;

const isConfigured = (value) => Boolean(value && !value.includes("your_") && value !== "demo");

const toMoney = (amount) => Number(Number(amount || 0).toFixed(2));

const buildPaymentLink = (path) => `${FRONTEND_URL}${path}`;

const postJson = async (url, { headers = {}, body }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(body)
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = result.message || result.error || result.error_description || response.statusText;
    throw new Error(detail);
  }

  return result;
};

const createMercadoPagoPreference = async ({ payment, payerEmail }) => {
  const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || process.env.PAYMENT_SECRET_KEY;

  if (!isConfigured(accessToken)) {
    return null;
  }

  const preference = await postJson("https://api.mercadopago.com/checkout/preferences", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    body: {
      items: [
        {
          id: payment.caseId,
          title: payment.concept,
          quantity: 1,
          unit_price: payment.amount,
          currency_id: payment.currency
        }
      ],
      payer: payerEmail ? { email: payerEmail } : undefined,
      external_reference: payment.id,
      marketplace_fee: payment.platformCommissionAmount,
      back_urls: {
        success: buildPaymentLink(`/?lexia-pay=success&payment=${payment.id}`),
        failure: buildPaymentLink(`/?lexia-pay=failure&payment=${payment.id}`),
        pending: buildPaymentLink(`/?lexia-pay=pending&payment=${payment.id}`)
      },
      notification_url: `${API_PUBLIC_URL}/api/payments/webhooks/mercado-pago`,
      metadata: {
        case_id: payment.caseId,
        payment_id: payment.id,
        lawyer_id: payment.lawyerId,
        platform: "LEX-IA PAY"
      }
    }
  });

  return {
    provider: "mercado_pago",
    providerPaymentId: preference.id,
    checkoutUrl: preference.init_point || preference.sandbox_init_point,
    rawStatus: "preference_created"
  };
};

const createCoinbaseCommerceCharge = async ({ payment, payerEmail }) => {
  const apiKey = process.env.COINBASE_COMMERCE_API_KEY || process.env.CRYPTO_CHECKOUT_API_KEY;

  if (!isConfigured(apiKey)) {
    return null;
  }

  const charge = await postJson("https://api.commerce.coinbase.com/charges", {
    headers: {
      "X-CC-Api-Key": apiKey,
      "X-CC-Version": process.env.COINBASE_COMMERCE_VERSION || "2018-03-22"
    },
    body: {
      name: payment.concept,
      description: `Pago retenido por LEX-IA PAY para expediente ${payment.caseId}`,
      pricing_type: "fixed_price",
      local_price: {
        amount: String(payment.amount),
        currency: payment.currency
      },
      redirect_url: buildPaymentLink(`/?lexia-pay=crypto-success&payment=${payment.id}`),
      cancel_url: buildPaymentLink(`/?lexia-pay=crypto-cancel&payment=${payment.id}`),
      metadata: {
        case_id: payment.caseId,
        payment_id: payment.id,
        crypto_asset: payment.cryptoAsset || "BTC",
        payer_email: payerEmail || "",
        lawyer_id: payment.lawyerId
      }
    }
  });

  return {
    provider: "coinbase_commerce",
    providerPaymentId: charge.data?.id || charge.id,
    checkoutUrl: charge.data?.hosted_url || charge.hosted_url,
    rawStatus: charge.data?.timeline?.[0]?.status || "charge_created"
  };
};

const createGenericCryptoCheckout = async ({ payment, payerEmail }) => {
  const apiUrl = process.env.CRYPTO_CHECKOUT_API_URL;
  const apiKey = process.env.CRYPTO_CHECKOUT_API_KEY;

  if (!isConfigured(apiUrl) || !isConfigured(apiKey)) {
    return null;
  }

  const checkout = await postJson(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    body: {
      amount: payment.amount,
      currency: payment.currency,
      asset: payment.cryptoAsset || process.env.CRYPTO_CHECKOUT_ASSET || "BTC",
      reference: payment.id,
      caseId: payment.caseId,
      payerEmail,
      successUrl: buildPaymentLink(`/?lexia-pay=crypto-success&payment=${payment.id}`),
      cancelUrl: buildPaymentLink(`/?lexia-pay=crypto-cancel&payment=${payment.id}`)
    }
  });

  return {
    provider: "crypto_checkout",
    providerPaymentId: checkout.id || checkout.paymentId || checkout.reference,
    checkoutUrl: checkout.checkoutUrl || checkout.paymentUrl || checkout.hostedUrl || checkout.url,
    rawStatus: checkout.status || "checkout_created"
  };
};

const createProviderCheckout = async ({ payment, payerEmail, paymentMethod }) => {
  if (paymentMethod === "crypto") {
    return (
      await createCoinbaseCommerceCharge({ payment, payerEmail })
      || await createGenericCryptoCheckout({ payment, payerEmail })
    );
  }

  if (PAYMENT_PROVIDER === "mercado_pago" || PAYMENT_PROVIDER === "marketplace" || PAYMENT_PROVIDER === "demo") {
    return createMercadoPagoPreference({ payment, payerEmail });
  }

  return null;
};

const createPayment = async (caseId, data) => {
  const {
    amount,
    currency,
    concept,
    payerId,
    payerEmail,
    lawyerId,
    paymentMethod,
    cryptoAsset,
    notes
  } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!amount || amount <= 0) {
    return {
      success: false,
      statusCode: 400,
      message: "El monto del pago es obligatorio y debe ser mayor a cero"
    };
  }

  if (!concept) {
    return {
      success: false,
      statusCode: 400,
      message: "El concepto del pago es obligatorio"
    };
  }

  const platformCommissionPercent = toMoney(PLATFORM_FEE_RATE * 100);
  const platformCommissionAmount = toMoney(amount * PLATFORM_FEE_RATE);
  const lawyerNetAmount = toMoney(amount - platformCommissionAmount);

  const newPayment = {
    id: `payment_${crypto.randomUUID()}`,
    caseId,
    payerId: payerId || "user_test_001",
    payerEmail: payerEmail || null,
    lawyerId: lawyerId || "lawyer_1",
    amount: toMoney(amount),
    currency: currency || "MXN",
    concept,
    paymentMethod: paymentMethod || "marketplace",
    cryptoAsset: cryptoAsset || "BTC",
    notes: notes || "Sin observaciones",
    status: "checkout_pendiente",
    releaseStatus: "pendiente",
    provider: "demo",
    providerPaymentId: null,
    checkoutUrl: null,
    platformCommissionPercent,
    platformCommissionAmount,
    lawyerNetAmount,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  let providerCheckout = null;

  try {
    providerCheckout = await createProviderCheckout({
      payment: newPayment,
      payerEmail,
      paymentMethod: newPayment.paymentMethod
    });
  } catch (error) {
    newPayment.providerError = error.message;
  }

  if (providerCheckout?.checkoutUrl) {
    newPayment.provider = providerCheckout.provider;
    newPayment.providerPaymentId = providerCheckout.providerPaymentId || null;
    newPayment.checkoutUrl = providerCheckout.checkoutUrl;
    newPayment.providerRawStatus = providerCheckout.rawStatus;
    newPayment.status = "checkout_generado";
  } else {
    newPayment.checkoutUrl = buildPaymentLink(`/lexia-pay/${caseId}?method=${newPayment.paymentMethod}`);
    newPayment.providerRawStatus = "demo_checkout_created";
    newPayment.status = "retenido_en_garantia";
    newPayment.demoMode = true;
  }

  paymentsMemory.push(newPayment);

  return {
    success: true,
    statusCode: 201,
    message: newPayment.demoMode
      ? "Pago registrado en modo demo LEX-IA PAY"
      : "Checkout real generado correctamente",
    payment: newPayment
  };
};

const getPaymentsByCaseId = (caseId) => {
  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  const casePayments = paymentsMemory.filter(
    (payment) => payment.caseId === caseId
  );

  return {
    success: true,
    statusCode: 200,
    message: "Pagos del expediente obtenidos correctamente",
    caseId,
    total: casePayments.length,
    payments: casePayments
  };
};

const getPaymentById = (paymentId) => {
  const foundPayment = paymentsMemory.find(
    (payment) => payment.id === paymentId
  );

  if (!foundPayment) {
    return {
      success: false,
      statusCode: 404,
      message: "Pago no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Pago encontrado correctamente",
    payment: foundPayment
  };
};

const updatePaymentStatus = (paymentId, data) => {
  const foundPayment = paymentsMemory.find(
    (payment) => payment.id === paymentId
  );

  if (!foundPayment) {
    return {
      success: false,
      statusCode: 404,
      message: "Pago no encontrado"
    };
  }

  if (!data.newStatus) {
    return {
      success: false,
      statusCode: 400,
      message: "El nuevo estado del pago es obligatorio"
    };
  }

  foundPayment.status = data.newStatus;
  foundPayment.statusReason =
    data.reason || "Cambio de estado sin motivo especificado";
  foundPayment.updatedAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Estado del pago actualizado correctamente",
    payment: foundPayment
  };
};

const registerPaymentWebhook = (provider, data) => ({
  success: true,
  statusCode: 200,
  message: "Webhook recibido por LEX-IA PAY",
  provider,
  receivedAt: new Date().toISOString(),
  reference: data.external_reference || data.id || data.event || data.type || null
});

const releasePayment = (paymentId, data) => {
  const foundPayment = paymentsMemory.find(
    (payment) => payment.id === paymentId
  );

  if (!foundPayment) {
    return {
      success: false,
      statusCode: 404,
      message: "Pago no encontrado"
    };
  }

  if (!["retenido_en_garantia", "checkout_generado", "pagado"].includes(foundPayment.status)) {
    return {
      success: false,
      statusCode: 400,
      message: "El pago no puede liberarse porque no está disponible para liberación"
    };
  }

  foundPayment.status = "liberado_al_abogado";
  foundPayment.releaseStatus = "liberado";
  foundPayment.releaseReason =
    data.reason || "Liberación autorizada por avance validado";
  foundPayment.releasedAt = new Date().toISOString();
  foundPayment.updatedAt = new Date().toISOString();

  const releaseReceipt = {
    receiptId: `RELEASE-${foundPayment.id.toUpperCase()}-${Date.now()}`,
    paymentId: foundPayment.id,
    caseId: foundPayment.caseId,
    lawyerId: foundPayment.lawyerId,
    grossAmount: foundPayment.amount,
    currency: foundPayment.currency,
    platformCommissionPercent: foundPayment.platformCommissionPercent,
    platformCommissionAmount: foundPayment.platformCommissionAmount,
    lawyerNetAmount: foundPayment.lawyerNetAmount,
    provider: foundPayment.provider,
    providerPaymentId: foundPayment.providerPaymentId,
    releasedAt: foundPayment.releasedAt,
    legalWarning:
      "La liberación queda registrada en LEX-IA PAY. En producción debe ejecutarse mediante el proveedor de marketplace/payout configurado."
  };

  return {
    success: true,
    statusCode: 200,
    message: "Pago liberado correctamente al abogado",
    payment: foundPayment,
    releaseReceipt
  };
};

const getPaymentReceipt = (paymentId) => {
  const foundPayment = paymentsMemory.find(
    (payment) => payment.id === paymentId
  );

  if (!foundPayment) {
    return {
      success: false,
      statusCode: 404,
      message: "Pago no encontrado"
    };
  }

  const receipt = {
    receiptId: `PAY-${foundPayment.id.toUpperCase()}-${Date.now()}`,
    receiptType: "Recibo LEX-IA PAY",
    platform: "LEX-IA PAY",
    paymentId: foundPayment.id,
    caseId: foundPayment.caseId,
    payerId: foundPayment.payerId,
    lawyerId: foundPayment.lawyerId,
    concept: foundPayment.concept,
    paymentMethod: foundPayment.paymentMethod,
    provider: foundPayment.provider,
    providerPaymentId: foundPayment.providerPaymentId,
    checkoutUrl: foundPayment.checkoutUrl,
    grossAmount: foundPayment.amount,
    currency: foundPayment.currency,
    platformCommissionPercent: foundPayment.platformCommissionPercent,
    platformCommissionAmount: foundPayment.platformCommissionAmount,
    lawyerNetAmount: foundPayment.lawyerNetAmount,
    paymentStatus: foundPayment.status,
    releaseStatus: foundPayment.releaseStatus,
    createdAt: foundPayment.createdAt,
    issuedAt: new Date().toISOString(),
    validationCode: `LEXIAPAY-${foundPayment.id}-${foundPayment.caseId}`.toUpperCase(),
    notes: foundPayment.notes,
    legalWarning:
      "Este recibo es una constancia operativa de LEX-IA PAY. Para efectos fiscales se deberá emitir el comprobante correspondiente conforme al régimen aplicable."
  };

  return {
    success: true,
    statusCode: 200,
    message: "Recibo de pago generado correctamente",
    receipt
  };
};

module.exports = {
  createPayment,
  getPaymentsByCaseId,
  getPaymentById,
  updatePaymentStatus,
  registerPaymentWebhook,
  releasePayment,
  getPaymentReceipt
};
