# Estructura Técnica Inicial del Backend – LEX-IA CASE

## 1. Nombre del documento

**Estructura técnica inicial del backend para LEX-IA CASE**

## 2. Propósito

Este documento define la estructura inicial recomendada para organizar el backend de LEX-IA CASE.

La finalidad es preparar el proyecto para una futura implementación con servidor, rutas, controladores, servicios, modelos, middlewares, autenticación, base de datos, carga documental, generación de folios e integración con inteligencia artificial.

Este documento no contiene todavía código funcional, sino una guía de organización técnica para evitar que el backend se construya de forma desordenada.

## 3. Principio rector del backend

El backend de LEX-IA CASE deberá operar bajo el siguiente principio:

**El backend valida, protege, registra y ejecuta; el frontend solo muestra la información y envía solicitudes controladas.**

Esto significa que el frontend no debe:

* Generar folios.
* Decidir permisos.
* Guardar claves privadas.
* Validar roles por sí solo.
* Acceder directamente a documentos privados.
* Conectarse directamente a servicios sensibles.
* Manipular base de datos.
* Procesar pagos directamente.
* Ejecutar análisis de IA con claves expuestas.

## 4. Función del backend dentro de LEX-IA CASE

El backend será el núcleo operativo de la plataforma.

Sus funciones principales serán:

* Registrar usuarios.
* Iniciar sesión.
* Validar autenticación.
* Validar roles y permisos.
* Crear expedientes.
* Generar folios.
* Consultar expedientes.
* Subir documentos.
* Proteger archivos.
* Registrar bitácoras.
* Enviar notificaciones.
* Validar abogados.
* Administrar estados del caso.
* Procesar solicitudes de privacidad.
* Registrar incidentes de seguridad.
* Conectar con IA documental.
* Conectar con pagos en fase posterior.
* Conectar con base de datos.

## 5. Tecnología sugerida inicialmente

Para una primera versión real del backend se recomienda usar:

```text
Node.js
Express.js
Base de datos: PostgreSQL, MySQL, MongoDB, Supabase o Firebase
Autenticación: JWT o sesiones seguras
Almacenamiento documental: servicio protegido
Variables de entorno: .env
```

La tecnología final podrá ajustarse conforme a presupuesto, capacidad técnica, seguridad, escalabilidad y facilidad de mantenimiento.

## 6. Carpeta principal del backend

La carpeta principal será:

```text
backend/
```

Dentro de esta carpeta se organizarán todos los archivos del servidor.

## 7. Estructura general sugerida

La estructura inicial recomendada será:

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── models/
│   ├── utils/
│   ├── validators/
│   ├── jobs/
│   ├── docs/
│   └── app.js
├── uploads/
├── tests/
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

## 8. Carpeta src

La carpeta `src/` contendrá el código principal del backend.

```text
backend/src/
```

Aquí vivirán las rutas, controladores, servicios, modelos, configuraciones y utilidades.

## 9. Carpeta config

Ruta:

```text
backend/src/config/
```

Propósito:

Guardar archivos de configuración del backend.

Contenido futuro sugerido:

```text
config/
├── database.js
├── env.js
├── storage.js
├── security.js
├── cors.js
└── ai.js
```

### 9.1 database.js

Archivo destinado a configurar la conexión con la base de datos.

Podrá incluir:

* Host.
* Usuario.
* Contraseña.
* Nombre de base de datos.
* Puerto.
* Configuración de conexión segura.
* Pool de conexiones.

### 9.2 env.js

Archivo para cargar y validar variables de entorno.

Ejemplos:

* Puerto del servidor.
* URL de base de datos.
* Clave JWT.
* Claves de servicios externos.
* Modo de ejecución.
* URL del frontend.

### 9.3 storage.js

Archivo para configurar almacenamiento documental.

Podrá definir:

* Ruta local en desarrollo.
* Servicio en nube en producción.
* Límites de tamaño.
* Tipos de archivo permitidos.
* Reglas de acceso.

### 9.4 security.js

Archivo para parámetros de seguridad.

Podrá incluir:

* Configuración de contraseñas.
* Tiempo de expiración de tokens.
* Reglas de sesión.
* Intentos máximos de login.
* Configuración de CORS.
* Encabezados de seguridad.

### 9.5 ai.js

Archivo para configurar servicios de inteligencia artificial.

No debe exponer claves al frontend.

## 10. Carpeta controllers

Ruta:

```text
backend/src/controllers/
```

Propósito:

Los controladores reciben las solicitudes de las rutas, llaman a los servicios necesarios y devuelven respuestas al frontend.

Contenido futuro sugerido:

```text
controllers/
├── auth.controller.js
├── users.controller.js
├── cases.controller.js
├── documents.controller.js
├── logs.controller.js
├── messages.controller.js
├── notifications.controller.js
├── lawyers.controller.js
├── admin.controller.js
├── ai.controller.js
├── payments.controller.js
├── privacy.controller.js
└── security.controller.js
```

### 10.1 auth.controller.js

Responsable de:

* Registro.
* Login.
* Logout.
* Recuperación de contraseña.
* Restablecimiento de contraseña.

### 10.2 users.controller.js

Responsable de:

* Consultar perfil.
* Actualizar perfil.
* Cambiar contraseña.
* Consultar usuario autenticado.

### 10.3 cases.controller.js

Responsable de:

* Crear expediente.
* Consultar expediente.
* Listar expedientes.
* Cambiar estado.
* Solicitar revisión profesional.
* Solicitar cambio de abogado.

### 10.4 documents.controller.js

Responsable de:

* Subir documentos.
* Listar documentos.
* Descargar documentos.
* Cambiar estado documental.
* Bloquear documentos.
* Eliminar o solicitar eliminación.

### 10.5 logs.controller.js

Responsable de:

* Registrar eventos.
* Consultar bitácora.
* Mostrar historial del expediente.

### 10.6 lawyers.controller.js

Responsable de:

* Solicitud de registro de abogado.
* Validación.
* Suspensión.
* Perfil profesional.
* Asignación a expedientes.

### 10.7 admin.controller.js

Responsable de:

* Gestión administrativa.
* Validaciones.
* Expedientes reportados.
* Usuarios.
* Incidentes.
* Métricas.

### 10.8 ai.controller.js

Responsable de:

* Solicitar análisis documental.
* Obtener análisis.
* Resumir expediente.
* Generar apoyo preliminar.

### 10.9 privacy.controller.js

Responsable de:

* Solicitudes ARCO.
* Solicitudes de eliminación.
* Revocación de consentimiento.
* Limitación de uso.

### 10.10 security.controller.js

Responsable de:

* Registro de incidentes.
* Actualización de incidentes.
* Cierre de incidentes.
* Consulta administrativa de incidentes.

## 11. Carpeta routes

Ruta:

```text
backend/src/routes/
```

Propósito:

Definir las rutas del backend y conectarlas con los controladores.

Contenido futuro sugerido:

```text
routes/
├── auth.routes.js
├── users.routes.js
├── cases.routes.js
├── documents.routes.js
├── logs.routes.js
├── messages.routes.js
├── notifications.routes.js
├── lawyers.routes.js
├── admin.routes.js
├── ai.routes.js
├── payments.routes.js
├── privacy.routes.js
├── security.routes.js
└── index.js
```

### 11.1 index.js

Archivo central para agrupar todas las rutas.

Ejemplo conceptual:

```text
/api/auth
/api/users
/api/cases
/api/documents
/api/logs
/api/messages
/api/notifications
/api/lawyers
/api/admin
/api/ai
/api/payments
/api/privacy
/api/security
```

## 12. Carpeta middlewares

Ruta:

```text
backend/src/middlewares/
```

Propósito:

Los middlewares son funciones que se ejecutan antes de llegar al controlador.

Sirven para validar autenticación, permisos, archivos, errores y seguridad.

Contenido futuro sugerido:

```text
middlewares/
├── auth.middleware.js
├── role.middleware.js
├── permission.middleware.js
├── upload.middleware.js
├── validate.middleware.js
├── error.middleware.js
├── security.middleware.js
└── audit.middleware.js
```

### 12.1 auth.middleware.js

Verifica que el usuario esté autenticado.

### 12.2 role.middleware.js

Verifica si el usuario tiene un rol permitido.

Ejemplo:

* client
* lawyer
* admin
* support
* legal_reviewer

### 12.3 permission.middleware.js

Verifica si el usuario tiene permiso sobre un expediente, documento o acción específica.

### 12.4 upload.middleware.js

Valida carga de archivos.

Puede revisar:

* Formato.
* Tamaño.
* Tipo MIME.
* Extensión.
* Seguridad básica.

### 12.5 validate.middleware.js

Valida datos de entrada enviados por el frontend.

### 12.6 error.middleware.js

Maneja errores de forma segura y evita exponer información interna.

### 12.7 audit.middleware.js

Permite registrar acciones sensibles.

Ejemplos:

* Descarga documental.
* Cambio de estado.
* Acceso administrativo.
* Análisis de IA.
* Cambio de abogado.

## 13. Carpeta services

Ruta:

```text
backend/src/services/
```

Propósito:

Los servicios contienen la lógica principal del negocio.

Aquí se ejecutan operaciones como generar folios, crear expedientes, validar abogados, analizar documentos o registrar bitácoras.

Contenido futuro sugerido:

```text
services/
├── auth.service.js
├── users.service.js
├── cases.service.js
├── folios.service.js
├── documents.service.js
├── logs.service.js
├── messages.service.js
├── notifications.service.js
├── lawyers.service.js
├── admin.service.js
├── ai.service.js
├── payments.service.js
├── privacy.service.js
└── security.service.js
```

### 13.1 auth.service.js

Lógica de:

* Registro.
* Login.
* Hash de contraseñas.
* Validación de credenciales.
* Generación de token.

### 13.2 cases.service.js

Lógica de:

* Crear expediente.
* Asociar cliente.
* Asociar abogado.
* Cambiar estado.
* Consultar expedientes.

### 13.3 folios.service.js

Lógica de generación de folios.

Ejemplo:

```text
LEX-IA-LAB-GRO-2026-000014
```

Debe:

* Leer materia.
* Leer jurisdicción.
* Leer año.
* Obtener consecutivo.
* Generar folio.
* Validar que no exista.
* Guardar consecutivo.
* No reutilizar folios.

### 13.4 documents.service.js

Lógica de:

* Guardar archivo.
* Registrar metadatos.
* Asociar documento a expediente.
* Bloquear documento.
* Cambiar estado.
* Controlar descarga.

### 13.5 ai.service.js

Lógica de:

* Preparar documento para análisis.
* Enviar texto a IA.
* Recibir resultado.
* Guardar análisis.
* Registrar advertencias.
* Marcar resultado como preliminar.

### 13.6 lawyers.service.js

Lógica de:

* Registrar solicitud de abogado.
* Validar abogado.
* Suspender abogado.
* Asignar abogado.
* Revisar disponibilidad.
* Revisar especialidad.

### 13.7 security.service.js

Lógica de:

* Registrar incidentes.
* Clasificar riesgo.
* Contener incidentes.
* Cerrar incidentes.
* Registrar evidencia.

## 14. Carpeta models

Ruta:

```text
backend/src/models/
```

Propósito:

Definir modelos o esquemas de datos según la base de datos elegida.

Contenido futuro sugerido:

```text
models/
├── user.model.js
├── client.model.js
├── lawyer.model.js
├── case.model.js
├── document.model.js
├── documentAnalysis.model.js
├── caseLog.model.js
├── message.model.js
├── notification.model.js
├── payment.model.js
├── caseSequence.model.js
├── lawyerAssignment.model.js
├── privacyRequest.model.js
└── securityIncident.model.js
```

## 15. Carpeta utils

Ruta:

```text
backend/src/utils/
```

Propósito:

Guardar funciones auxiliares reutilizables.

Contenido futuro sugerido:

```text
utils/
├── generateId.js
├── formatFolio.js
├── dateUtils.js
├── fileUtils.js
├── sanitizeInput.js
├── response.js
├── logger.js
└── constants.js
```

### 15.1 formatFolio.js

Función para dar formato al folio.

Ejemplo:

```text
LEX-IA-LAB-GRO-2026-000014
```

### 15.2 response.js

Función para estandarizar respuestas del backend.

Ejemplo conceptual:

```json
{
  "success": true,
  "message": "Operación realizada correctamente",
  "data": {}
}
```

### 15.3 logger.js

Función para registrar eventos del sistema.

## 16. Carpeta validators

Ruta:

```text
backend/src/validators/
```

Propósito:

Contener reglas para validar datos de entrada.

Contenido futuro sugerido:

```text
validators/
├── auth.validator.js
├── case.validator.js
├── document.validator.js
├── lawyer.validator.js
├── payment.validator.js
├── privacy.validator.js
└── security.validator.js
```

Validaciones necesarias:

* Email válido.
* Contraseña segura.
* Materia jurídica válida.
* Jurisdicción válida.
* Folio válido.
* Archivo permitido.
* Monto válido.
* Motivo de incidente.
* Solicitud ARCO válida.

## 17. Carpeta jobs

Ruta:

```text
backend/src/jobs/
```

Propósito:

Guardar tareas programadas o automáticas.

Contenido futuro sugerido:

```text
jobs/
├── cleanTempFiles.job.js
├── notifyPendingDocuments.job.js
├── checkInactiveCases.job.js
├── backupReminder.job.js
└── closeExpiredSessions.job.js
```

Ejemplos de tareas:

* Eliminar archivos temporales.
* Notificar documentos pendientes.
* Alertar expedientes sin actividad.
* Revisar abogados inactivos.
* Cerrar sesiones vencidas.

## 18. Carpeta docs

Ruta:

```text
backend/src/docs/
```

Propósito:

Guardar documentación técnica interna del backend.

Contenido futuro sugerido:

```text
docs/
├── api_reference.md
├── auth_flow.md
├── permissions_matrix.md
├── error_codes.md
└── deployment_notes.md
```

## 19. Archivo app.js

Ruta:

```text
backend/src/app.js
```

Propósito:

Será el archivo principal de la aplicación.

En una versión futura podrá encargarse de:

* Crear servidor Express.
* Cargar middlewares globales.
* Configurar CORS.
* Registrar rutas.
* Manejar errores.
* Levantar servidor.
* Conectar con base de datos.
* Cargar variables de entorno.

## 20. Carpeta uploads

Ruta:

```text
backend/uploads/
```

Propósito:

Almacenamiento temporal o local de archivos en etapa de desarrollo.

Advertencia:

En producción, los documentos jurídicos no deben quedar expuestos públicamente ni guardarse sin control.

La carpeta `uploads/` deberá estar protegida y posiblemente excluida de Git.

Regla:

```text
Los documentos cargados por usuarios no deben subirse al repositorio.
```

## 21. Carpeta tests

Ruta:

```text
backend/tests/
```

Propósito:

Guardar pruebas del backend.

Contenido futuro sugerido:

```text
tests/
├── auth.test.js
├── cases.test.js
├── documents.test.js
├── folios.test.js
├── permissions.test.js
└── security.test.js
```

Pruebas mínimas recomendadas:

* Registro de usuario.
* Login.
* Creación de expediente.
* Generación de folio.
* Permisos por rol.
* Carga documental.
* Bloqueo de acceso no autorizado.
* Consulta de expedientes propios.
* Rechazo de expedientes ajenos.

## 22. Archivo package.json

Ruta:

```text
backend/package.json
```

Propósito:

Definir dependencias, scripts y configuración del proyecto Node.js.

Scripts futuros sugeridos:

```json
{
  "scripts": {
    "dev": "node src/app.js",
    "start": "node src/app.js",
    "test": "node --test"
  }
}
```

Dependencias futuras posibles:

```text
express
dotenv
cors
helmet
bcrypt
jsonwebtoken
multer
zod
pg / mongoose / prisma
```

La selección final dependerá de la base de datos elegida.

## 23. Archivo .env.example

Ruta:

```text
backend/.env.example
```

Propósito:

Mostrar qué variables de entorno necesita el backend sin exponer datos reales.

Contenido sugerido:

```text
PORT=4000
NODE_ENV=development

FRONTEND_URL=http://localhost:3000

DATABASE_URL=your_database_url_here

JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d

UPLOAD_MAX_SIZE_MB=25
UPLOAD_ALLOWED_TYPES=pdf,jpg,jpeg,png

AI_PROVIDER=your_ai_provider_here
AI_API_KEY=your_ai_api_key_here

PAYMENT_PROVIDER=your_payment_provider_here
PAYMENT_SECRET_KEY=your_payment_secret_key_here
```

Regla importante:

```text
El archivo .env real nunca debe subirse a GitHub.
```

## 24. Archivo .gitignore

Ruta:

```text
backend/.gitignore
```

Propósito:

Evitar subir archivos sensibles o innecesarios.

Contenido sugerido:

```text
node_modules/
.env
uploads/
logs/
dist/
coverage/
.DS_Store
```

## 25. Archivo README.md del backend

Ruta:

```text
backend/README.md
```

Propósito:

Explicar cómo instalar, configurar y ejecutar el backend.

Contenido futuro sugerido:

* Descripción.
* Requisitos.
* Instalación.
* Variables de entorno.
* Comandos.
* Estructura.
* Rutas principales.
* Seguridad.
* Estado del desarrollo.

## 26. Flujo técnico general del backend

Flujo esperado:

```text
Frontend envía solicitud
        ↓
Ruta recibe solicitud
        ↓
Middleware valida autenticación
        ↓
Middleware valida rol/permisos
        ↓
Controlador recibe datos
        ↓
Validador revisa datos
        ↓
Servicio ejecuta lógica
        ↓
Modelo consulta o guarda en base de datos
        ↓
Servicio registra bitácora si aplica
        ↓
Controlador devuelve respuesta
        ↓
Frontend muestra resultado
```

## 27. Reglas de seguridad para el backend

El backend deberá cumplir reglas mínimas:

* No confiar en datos enviados por frontend.
* Validar siempre el usuario autenticado.
* Validar permisos por expediente.
* No exponer rutas internas.
* No exponer claves.
* No guardar contraseñas en texto plano.
* No mostrar errores técnicos al usuario.
* Registrar acciones sensibles.
* Proteger documentos.
* Validar archivos.
* Controlar descargas.
* Usar variables de entorno.
* Separar desarrollo y producción.
* Aplicar CORS correctamente.
* Implementar protección contra solicitudes indebidas.

## 28. Separación de responsabilidades

La estructura deberá separar responsabilidades.

### Routes

Definen la URL.

### Controllers

Reciben la solicitud y responden.

### Services

Ejecutan la lógica de negocio.

### Models

Representan los datos.

### Middlewares

Protegen y validan antes de ejecutar.

### Utils

Apoyan con funciones reutilizables.

### Validators

Revisan que los datos sean correctos.

## 29. Módulos prioritarios para construir

Orden recomendado de construcción:

1. Configuración inicial.
2. Servidor Express.
3. Rutas base.
4. Registro y login.
5. Middleware de autenticación.
6. Modelo de usuarios.
7. Modelo de expedientes.
8. Generador de folios.
9. Control de permisos.
10. Carga documental.
11. Bitácora.
12. Panel cliente.
13. Panel abogado.
14. Validación de abogados.
15. IA documental.
16. Pagos.
17. Seguridad avanzada.

## 30. Relación con APIs preliminares

Este documento se relaciona directamente con:

```text
backend/apis_preliminares_lexia_case.md
```

Las APIs preliminares definen qué rutas existirán.

La estructura backend define dónde vivirá cada parte del código.

## 31. Relación con modelo de datos

Este documento también se relaciona con:

```text
database/modelo_datos_lexia_case.md
database/generador_folios_lexia.md
```

El backend deberá implementar técnicamente el modelo de datos y la generación de folios.

## 32. Relación con documentos legales

El backend deberá respetar los documentos legales del proyecto:

```text
legal/aviso_privacidad_integral.md
legal/terminos_condiciones.md
legal/politica_uso_ia.md
legal/politica_carga_documental.md
legal/politica_conservacion_eliminacion_datos.md
legal/protocolo_incidentes_seguridad.md
legal/politica_validacion_abogados.md
```

La seguridad y privacidad no deben quedar solo en documentos; deberán traducirse en código, permisos, validaciones y bitácoras.

## 33. Reglas sobre documentos cargados

Cuando se implemente carga documental, el backend deberá:

* Validar archivo.
* Asociarlo a expediente.
* Asociarlo a folio.
* Registrar usuario que lo cargó.
* Registrar fecha y hora.
* Definir permisos.
* Evitar rutas públicas.
* Registrar descargas.
* Permitir bloqueo.
* Preparar análisis por IA, cuando proceda.

## 34. Reglas sobre folios

El backend será el único responsable de generar folios.

El frontend no debe crear folios.

Reglas:

* Folio único.
* Generado automáticamente.
* No editable manualmente.
* No reutilizable.
* Sin datos personales.
* Asociado a expediente.
* Asociado a materia y jurisdicción.
* Protegido por autenticación.

## 35. Reglas sobre IA

La integración con IA deberá hacerse desde backend.

El frontend no debe tener claves de IA.

El backend deberá:

* Validar consentimiento.
* Validar permisos.
* Preparar datos.
* Enviar solicitud al proveedor de IA.
* Recibir respuesta.
* Guardar análisis.
* Marcar resultado como preliminar.
* Registrar bitácora.
* Mostrar advertencias.

## 36. Reglas sobre pagos

Los pagos serán una fase posterior.

Cuando se implementen, el backend deberá:

* Crear intención de pago.
* Vincular pago a folio.
* Registrar monto y concepto.
* Confirmar estado con proveedor.
* Registrar pago.
* Notificar usuario.
* No guardar datos bancarios completos si usa pasarela externa.
* Registrar comisiones, si aplica.

## 37. Ambiente de desarrollo

En etapa inicial, el backend podrá correr localmente.

Ejemplo:

```text
http://localhost:4000
```

El frontend podrá consumir APIs desde:

```text
http://localhost:4000/api
```

En producción, se deberá usar HTTPS y servidor seguro.

## 38. Variables de entorno obligatorias

Variables mínimas:

```text
PORT
NODE_ENV
DATABASE_URL
JWT_SECRET
FRONTEND_URL
```

Variables futuras:

```text
AI_API_KEY
PAYMENT_SECRET_KEY
STORAGE_BUCKET
EMAIL_SERVICE_KEY
```

## 39. Estado actual

Estado del backend:

```text
Documentación: En desarrollo
Estructura: Documentada
Código funcional: Pendiente
Servidor: Pendiente
Base de datos: Pendiente
Autenticación: Pendiente
Folios reales: Pendiente
Carga documental real: Pendiente
IA documental real: Pendiente
Pagos: Pendiente
```

## 40. Conclusión

La estructura técnica inicial del backend permitirá que LEX-IA CASE avance de una documentación sólida hacia una implementación real.

La organización por rutas, controladores, servicios, modelos, middlewares y utilidades permitirá construir un backend ordenado, escalable y seguro.

La regla principal será:

**Primero orden, luego código; primero seguridad, luego automatización.**
