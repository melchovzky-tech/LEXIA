# LEX-IA PAY: activación de cobro real

LEX-IA PAY ya tiene un flujo funcional con fallback demo. El backend intenta crear un checkout real y, si no hay credenciales configuradas, conserva el modo demo para presentaciones.

## Marketplace

Proveedor recomendado para México: Mercado Pago Marketplace / Checkout Pro.

Variables necesarias en `backend/.env`:

```env
PAYMENT_PROVIDER=mercado_pago
MERCADO_PAGO_ACCESS_TOKEN=APP_USR_xxx
FRONTEND_URL=http://127.0.0.1:3000
API_PUBLIC_URL=https://tu-dominio-o-ngrok
LEXIA_PAY_PLATFORM_FEE_RATE=0.10
```

Flujo:

1. Cliente acepta cotización.
2. LEX-IA crea checkout en Mercado Pago.
3. Cliente paga con tarjeta, SPEI o método disponible.
4. Mercado Pago notifica a `POST /api/payments/webhooks/mercado-pago`.
5. LEX-IA registra pago y libera avances conforme al expediente.

## Cripto

Proveedor inicial soportado: Coinbase Commerce. También se puede conectar cualquier proveedor propio que regrese `checkoutUrl`, `paymentUrl`, `hostedUrl` o `url`.

Variables Coinbase Commerce:

```env
COINBASE_COMMERCE_API_KEY=xxx
COINBASE_COMMERCE_VERSION=2018-03-22
```

Variables proveedor genérico:

```env
CRYPTO_CHECKOUT_API_URL=https://proveedor.com/api/checkout
CRYPTO_CHECKOUT_API_KEY=xxx
CRYPTO_CHECKOUT_ASSET=BTC
```

Activos visibles en la interfaz:

- BTC: Bitcoin.
- USDT: Tether.
- XRP: Ripple.
- TRX: Tron.

## Importante

- No guardar llaves reales en Git.
- En producción usar dominio HTTPS para `API_PUBLIC_URL`.
- Para retener y liberar dinero real se debe validar contrato, KYC/KYB, facturación y reglas fiscales aplicables.
