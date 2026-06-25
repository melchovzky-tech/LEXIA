# Backend LEX-IA CASE

## Autenticación con Supabase

1. Crea un proyecto en Supabase.
2. Abre el SQL Editor y ejecuta `supabase/migrations/001_create_profiles.sql`.
3. Copia `.env.example` como `.env` y completa `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY`.
4. En **Authentication > URL Configuration**, agrega la URL indicada en `AUTH_EMAIL_REDIRECT_URL`.
5. Mantén activada la confirmación de correo en **Authentication > Providers > Email**.
6. Ejecuta `npm install` y `npm run dev`.

Sin variables de Supabase, el backend usa memoria temporal para desarrollo. Ese modo no persiste cuentas ni envía correos.

La clave `service_role` nunca debe colocarse en el frontend ni es necesaria para este flujo.
