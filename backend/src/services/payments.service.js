const paymentsMemory = [];

const createPayment = (caseId, data) => {
  const {
    amount,
    currency,
    concept,
    payerId,
    lawyerId,
    paymentMethod,
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

  const newPayment = {
    id: `payment_${paymentsMemory.length + 1}`,
    caseId,
    payerId: payerId || "user_test_001",
    lawyerId: lawyerId || "lawyer_1",
    amount,
    currency: currency || "MXN",
    concept,
    paymentMethod: paymentMethod || "lexia_pay_simulado",
    notes: notes || "Sin observaciones",
    status: "retenido_en_garantia",
    releaseStatus: "pendiente",
    platformCommissionPercent: 5,
    platformCommissionAmount: Number((amount * 0.05).toFixed(2)),
    lawyerNetAmount: Number((amount * 0.95).toFixed(2)),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  paymentsMemory.push(newPayment);

  return {
    success: true,
    statusCode: 201,
    message: "Pago registrado correctamente en LEX-IA PAY",
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

  if (foundPayment.status !== "retenido_en_garantia") {
    return {
      success: false,
      statusCode: 400,
      message:
        "El pago no puede liberarse porque no se encuentra retenido en garantía"
    };
  }

  foundPayment.status = "liberado_al_abogado";
  foundPayment.releaseStatus = "liberado";
  foundPayment.releaseReason =
    data.reason || "Liberación simulada autorizada por avance validado";
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
    releasedAt: foundPayment.releasedAt,
    legalWarning:
      "Esta liberación es una simulación preliminar de LEX-IA PAY. No representa una transacción bancaria real."
  };

  return {
    success: true,
    statusCode: 200,
    message: "Pago liberado correctamente al abogado en modo simulado",
    payment: foundPayment,
    releaseReceipt
  };
};

module.exports = {
  createPayment,
  getPaymentsByCaseId,
  getPaymentById,
  updatePaymentStatus,
  releasePayment
};