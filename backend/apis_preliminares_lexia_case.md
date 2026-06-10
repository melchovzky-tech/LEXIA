# APIs Preliminares del Backend – LEX-IA CASE

## 1. Nombre del documento

**Diseño preliminar de APIs para el backend de LEX-IA CASE**

## 2. Propósito

Este documento define las rutas preliminares que deberá tener el backend de LEX-IA CASE.

La finalidad es establecer una guía inicial para conectar el frontend, los paneles de usuario, la base de datos, los expedientes, los folios, los documentos, los abogados, la bitácora, las notificaciones y la inteligencia artificial documental.

Este documento no representa código final, sino una estructura funcional para preparar el desarrollo real del backend.

## 3. Principio general del backend

El backend de LEX-IA CASE deberá operar bajo el siguiente principio:

**Toda acción importante debe pasar por el backend, validarse por permisos, registrarse en base de datos y generar trazabilidad cuando corresponda.**

El frontend no debe manejar información sensible sin control, ni generar folios, ni decidir permisos, ni exponer claves privadas.

## 4. Funciones principales del backend

El backend deberá encargarse de:

* Registrar usuarios.
* Iniciar sesión.
* Validar roles.
* Crear expedientes.
* Generar folios.
* Consultar expedientes.
* Subir documentos.
* Registrar bitácoras.
* Enviar notificaciones.
* Validar abogados.
* Controlar permisos.
* Ejecutar análisis documental.
* Administrar estados de expediente.
* Registrar pagos en fase posterior.
* Proteger datos personales.
* Conectar con servicios de IA.
* Conectar con almacenamiento documental.

## 5. Estructura general de rutas

Las rutas preliminares se organizarán por módulos:

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

---

# MÓDULO AUTH

## 6. Registro de cliente

### Ruta

```text
POST /api/auth/register
```

### Propósito

Crear una cuenta de cliente dentro de LEX-IA CASE.

### Datos de entrada

```json
{
  "fullName": "Nombre completo",
  "email": "usuario@correo.com",
  "phone": "7440000000",
  "state": "GRO",
  "password": "contraseña_segura",
  "acceptPrivacyNotice": true,
  "acceptTerms": true
}
```

### Validaciones

* El correo no debe existir previamente.
* La contraseña debe cumplir requisitos mínimos.
* El usuario debe aceptar aviso de privacidad.
* El usuario debe aceptar términos y condiciones.
* El registro público debe crear rol `client`.

### Respuesta esperada

```json
{
  "success": true,
  "message": "Cuenta creada correctamente",
  "userId": "user_001",
  "role": "client"
}
```

## 7. Inicio de sesión

### Ruta

```text
POST /api/auth/login
```

### Propósito

Permitir que clientes, abogados y administradores accedan a su panel correspondiente.

### Datos de entrada

```json
{
  "email": "usuario@correo.com",
  "password": "contraseña"
}
```

### Validaciones

* Verificar correo.
* Verificar contraseña.
* Revisar estado de cuenta.
* Identificar rol.
* Crear sesión o token seguro.

### Respuesta esperada

```json
{
  "success": true,
  "token": "token_seguro",
  "user": {
    "id": "user_001",
    "fullName": "Nombre completo",
    "role": "client"
  }
}
```

## 8. Cierre de sesión

### Ruta

```text
POST /api/auth/logout
```

### Propósito

Cerrar la sesión activa del usuario.

### Reglas

* Invalidar sesión o token.
* Registrar evento de seguridad si procede.

## 9. Recuperación de contraseña

### Ruta

```text
POST /api/auth/forgot-password
```

### Propósito

Iniciar proceso de recuperación de contraseña.

### Datos de entrada

```json
{
  "email": "usuario@correo.com"
}
```

### Reglas

* No revelar si el correo existe o no.
* Enviar instrucciones si existe cuenta.
* Registrar intentos sospechosos.

## 10. Restablecimiento de contraseña

### Ruta

```text
POST /api/auth/reset-password
```

### Propósito

Permitir que el usuario establezca una nueva contraseña mediante token seguro.

### Datos de entrada

```json
{
  "resetToken": "token",
  "newPassword": "nueva_contraseña"
}
```

---

# MÓDULO USERS

## 11. Obtener usuario autenticado

### Ruta

```text
GET /api/users/me
```

### Propósito

Obtener información básica del usuario que inició sesión.

### Respuesta esperada

```json
{
  "id": "user_001",
  "fullName": "Nombre completo",
  "email": "usuario@correo.com",
  "phone": "7440000000",
  "role": "client",
  "status": "active"
}
```

## 12. Actualizar perfil

### Ruta

```text
PATCH /api/users/me
```

### Propósito

Permitir que el usuario actualice datos básicos.

### Datos modificables

* Teléfono.
* Medio de contacto.
* Ciudad.
* Estado.
* Contraseña, mediante ruta separada.

### Reglas

* No permitir cambio de rol desde esta ruta.
* Registrar cambios sensibles.
* Validar permisos.

## 13. Cambiar contraseña

### Ruta

```text
PATCH /api/users/me/password
```

### Propósito

Permitir cambio de contraseña desde sesión activa.

### Datos de entrada

```json
{
  "currentPassword": "contraseña_actual",
  "newPassword": "nueva_contraseña"
}
```

---

# MÓDULO CASES

## 14. Crear expediente

### Ruta

```text
POST /api/cases
```

### Propósito

Crear un expediente formal en LEX-IA CASE.

### Datos de entrada

```json
{
  "matterCode": "LAB",
  "jurisdictionCode": "GRO",
  "title": "Posible despido injustificado",
  "description": "El cliente refiere que fue despedido verbalmente.",
  "preliminaryDiagnosis": "Existe posible despido injustificado.",
  "riskLevel": "alto"
}
```

### Acciones del backend

* Validar usuario autenticado.
* Confirmar rol de cliente.
* Crear expediente.
* Generar folio.
* Asociar expediente al cliente.
* Registrar bitácora.
* Crear notificación.
* Devolver folio.

### Respuesta esperada

```json
{
  "success": true,
  "case": {
    "id": "case_001",
    "folio": "LEX-IA-LAB-GRO-2026-000014",
    "currentStatus": "expediente_creado"
  }
}
```

## 15. Obtener expediente por folio

### Ruta

```text
GET /api/cases/:folio
```

### Propósito

Consultar un expediente específico.

### Reglas

* El cliente solo puede ver sus propios expedientes.
* El abogado solo puede ver expedientes asignados.
* El administrador puede ver expedientes conforme a permisos.
* El folio no permite acceso público sin autenticación.

## 16. Obtener expedientes del cliente

### Ruta

```text
GET /api/cases/client/me
```

### Propósito

Mostrar al cliente todos sus expedientes.

### Respuesta esperada

```json
{
  "cases": [
    {
      "folio": "LEX-IA-LAB-GRO-2026-000014",
      "matterCode": "LAB",
      "jurisdictionCode": "GRO",
      "currentStatus": "revision_profesional",
      "lawyerName": "Pendiente de asignación",
      "updatedAt": "2026-06-10"
    }
  ]
}
```

## 17. Obtener expedientes asignados al abogado

### Ruta

```text
GET /api/cases/lawyer/me
```

### Propósito

Mostrar al abogado sus expedientes asignados.

### Reglas

* Solo usuarios con rol `lawyer`.
* Solo expedientes activos asignados.
* Permitir filtros por materia, estado o urgencia.

## 18. Actualizar estado del expediente

### Ruta

```text
PATCH /api/cases/:id/status
```

### Propósito

Actualizar el estado del expediente.

### Datos de entrada

```json
{
  "newStatus": "documentos_integrados",
  "reason": "El cliente cargó los documentos solicitados."
}
```

### Reglas

* Solo abogado asignado o administrador autorizado.
* Registrar cambio en `case_status_history`.
* Registrar evento en bitácora.
* Notificar al cliente.

## 19. Solicitar revisión profesional

### Ruta

```text
POST /api/cases/:id/request-review
```

### Propósito

Permitir que el cliente solicite revisión profesional.

### Acciones

* Cambiar estado a `revision_profesional`.
* Notificar al administrador.
* Iniciar flujo de asignación de abogado.

## 20. Solicitar cambio de abogado

### Ruta

```text
POST /api/cases/:id/request-lawyer-change
```

### Datos de entrada

```json
{
  "reason": "Falta de respuesta",
  "description": "El abogado no ha respondido mensajes recientes."
}
```

### Acciones

* Registrar solicitud.
* Notificar administrador.
* Registrar bitácora.
* Mantener expediente activo.

---

# MÓDULO FOLIOS

## 21. Generar folio

### Ruta interna

```text
POST /api/internal/folios/generate
```

### Propósito

Generar folio único para un expediente.

### Nota

Esta ruta debe ser interna. El usuario no debe generar folios manualmente desde frontend.

### Lógica

```text
materia + jurisdicción + año + consecutivo
```

### Ejemplo

```text
LEX-IA-LAB-GRO-2026-000014
```

### Reglas

* Generar solo desde backend.
* Validar unicidad.
* No reutilizar folios.
* No incluir datos personales.
* Registrar error si hay conflicto.

---

# MÓDULO DOCUMENTS

## 22. Subir documento

### Ruta

```text
POST /api/documents/upload
```

### Propósito

Permitir carga segura de documentos al expediente.

### Datos esperados

* Archivo.
* Case ID o folio.
* Categoría documental.
* Descripción opcional.
* Aceptación de política documental.

### Acciones del backend

* Validar usuario.
* Validar permiso sobre expediente.
* Validar formato.
* Validar tamaño.
* Guardar archivo en almacenamiento seguro.
* Guardar metadatos en base de datos.
* Registrar bitácora.
* Notificar abogado, si existe.

### Respuesta esperada

```json
{
  "success": true,
  "document": {
    "id": "doc_001",
    "fileName": "contrato_trabajo.pdf",
    "category": "contrato",
    "status": "pendiente_revision"
  }
}
```

## 23. Obtener documentos de expediente

### Ruta

```text
GET /api/documents/case/:caseId
```

### Propósito

Listar documentos asociados a un expediente.

### Reglas

* Validar permiso.
* No exponer rutas públicas.
* Mostrar metadatos.
* Controlar descarga según rol.

## 24. Descargar documento

### Ruta

```text
GET /api/documents/:documentId/download
```

### Propósito

Permitir descarga controlada de documentos.

### Reglas

* Validar permiso.
* Registrar descarga.
* Usar enlace seguro o temporal.
* Bloquear descargas no autorizadas.

## 25. Cambiar estado de documento

### Ruta

```text
PATCH /api/documents/:documentId/status
```

### Datos de entrada

```json
{
  "status": "revisado_por_abogado",
  "comment": "Documento revisado correctamente."
}
```

### Reglas

* Solo abogado asignado o administrador.
* Registrar bitácora.
* Notificar cliente si procede.

## 26. Bloquear documento

### Ruta

```text
PATCH /api/documents/:documentId/block
```

### Propósito

Bloquear documento sospechoso o indebido.

### Reglas

* Solo administrador o usuario autorizado.
* Registrar motivo.
* Registrar bitácora.
* Notificar si procede.

---

# MÓDULO DOCUMENT ANALYSIS / IA

## 27. Solicitar análisis documental

### Ruta

```text
POST /api/ai/analyze-document
```

### Propósito

Analizar preliminarmente un documento mediante IA.

### Datos de entrada

```json
{
  "documentId": "doc_001",
  "caseId": "case_001",
  "acceptedAiPolicy": true
}
```

### Acciones

* Validar consentimiento.
* Validar permisos.
* Extraer texto, si procede.
* Ejecutar análisis.
* Guardar resultado.
* Marcar como preliminar.
* Registrar bitácora.

### Respuesta esperada

```json
{
  "success": true,
  "analysis": {
    "documentId": "doc_001",
    "detectedCategory": "contrato_laboral",
    "summary": "El documento parece corresponder a un contrato individual de trabajo.",
    "warnings": [
      "El análisis es preliminar y requiere revisión profesional."
    ]
  }
}
```

## 28. Obtener análisis documental

### Ruta

```text
GET /api/ai/document-analysis/:documentId
```

### Propósito

Consultar análisis preliminar de un documento.

### Reglas

* Validar permisos.
* Mostrar advertencia de IA.
* Indicar si fue revisado por abogado.

## 29. Resumir expediente

### Ruta

```text
POST /api/ai/summarize-case
```

### Propósito

Generar resumen preliminar del expediente para cliente, abogado o administrador.

### Datos de entrada

```json
{
  "caseId": "case_001",
  "summaryType": "professional_review"
}
```

### Reglas

* No sustituye revisión profesional.
* Registrar generación.
* Validar permisos.

---

# MÓDULO LOGS / BITÁCORA

## 30. Registrar evento en bitácora

### Ruta

```text
POST /api/cases/:id/log
```

### Propósito

Registrar una actuación dentro del expediente.

### Datos de entrada

```json
{
  "actionType": "avance_registrado",
  "description": "Se revisaron documentos laborales iniciales."
}
```

### Reglas

* Validar rol.
* Asociar evento a expediente.
* Registrar usuario.
* Registrar fecha y hora.
* No permitir manipulación libre.

## 31. Obtener bitácora del expediente

### Ruta

```text
GET /api/cases/:id/log
```

### Propósito

Consultar la bitácora del expediente.

### Reglas

* Cliente ve bitácora de sus expedientes.
* Abogado ve bitácora de expedientes asignados.
* Administrador ve conforme a permisos.
* No permitir edición directa de eventos históricos.

---

# MÓDULO MESSAGES

## 32. Enviar mensaje

### Ruta

```text
POST /api/messages
```

### Datos de entrada

```json
{
  "caseId": "case_001",
  "receiverId": "user_002",
  "message": "Favor de cargar su recibo de nómina más reciente."
}
```

### Reglas

* Mensaje asociado a expediente.
* Validar que remitente y receptor estén autorizados.
* Registrar fecha.
* Notificar receptor.

## 33. Obtener mensajes de expediente

### Ruta

```text
GET /api/messages/case/:caseId
```

### Propósito

Mostrar conversación del expediente.

### Reglas

* Validar permisos.
* Ordenar por fecha.
* Proteger contenido.

---

# MÓDULO NOTIFICATIONS

## 34. Obtener notificaciones del usuario

### Ruta

```text
GET /api/notifications/me
```

### Propósito

Mostrar notificaciones del usuario autenticado.

## 35. Marcar notificación como leída

### Ruta

```text
PATCH /api/notifications/:id/read
```

### Propósito

Actualizar estado de una notificación.

## 36. Crear notificación interna

### Ruta interna

```text
POST /api/internal/notifications
```

### Propósito

Crear notificación derivada de una acción del sistema.

---

# MÓDULO LAWYERS

## 37. Solicitud de registro de abogado

### Ruta

```text
POST /api/lawyers/apply
```

### Propósito

Permitir que un abogado solicite registro en LEX-IA.

### Datos de entrada

```json
{
  "fullName": "Nombre del abogado",
  "email": "abogado@correo.com",
  "phone": "7440000000",
  "professionalLicense": "12345678",
  "specialties": ["LAB", "FAM"],
  "statesCovered": ["GRO", "CDMX"]
}
```

### Reglas

* Estado inicial: `pending`.
* No puede recibir casos hasta validación.
* Debe aceptar políticas internas.

## 38. Validar abogado

### Ruta

```text
POST /api/lawyers/:id/validate
```

### Propósito

Permitir que administrador valide abogado.

### Datos de entrada

```json
{
  "validationStatus": "verified",
  "comments": "Cédula e identidad revisadas."
}
```

### Reglas

* Solo administrador.
* Registrar evidencia.
* Registrar bitácora administrativa.
* Notificar abogado.

## 39. Suspender abogado

### Ruta

```text
PATCH /api/lawyers/:id/suspend
```

### Propósito

Suspender temporalmente a un abogado.

### Datos de entrada

```json
{
  "reason": "Quejas reiteradas por falta de respuesta."
}
```

### Reglas

* Bloquear nuevas asignaciones.
* Revisar expedientes activos.
* Registrar acción.
* Notificar internamente.

## 40. Asignar abogado a expediente

### Ruta

```text
POST /api/cases/:id/assign-lawyer
```

### Propósito

Asignar abogado validado a expediente.

### Datos de entrada

```json
{
  "lawyerId": "lawyer_001"
}
```

### Reglas

* Solo administrador o sistema autorizado.
* Abogado debe estar validado.
* Registrar en `lawyer_assignments`.
* Cambiar estado del expediente.
* Notificar cliente y abogado.

---

# MÓDULO ADMIN

## 41. Obtener expedientes activos

### Ruta

```text
GET /api/admin/cases
```

### Propósito

Permitir al administrador ver expedientes conforme a permisos.

### Filtros

* Estado.
* Materia.
* Jurisdicción.
* Abogado.
* Fecha.
* Riesgo.
* Documentos pendientes.

## 42. Obtener usuarios

### Ruta

```text
GET /api/admin/users
```

### Propósito

Administrar usuarios registrados.

## 43. Obtener abogados pendientes

### Ruta

```text
GET /api/admin/lawyers/pending
```

### Propósito

Consultar abogados en proceso de validación.

## 44. Obtener incidentes de seguridad

### Ruta

```text
GET /api/admin/security-incidents
```

### Propósito

Consultar incidentes registrados.

---

# MÓDULO PRIVACY

## 45. Solicitud ARCO o privacidad

### Ruta

```text
POST /api/privacy/request
```

### Propósito

Permitir que el usuario solicite acceso, rectificación, cancelación, oposición, revocación o eliminación.

### Datos de entrada

```json
{
  "requestType": "cancelacion",
  "description": "Solicito eliminar documentos cargados por error.",
  "caseFolio": "LEX-IA-LAB-GRO-2026-000014"
}
```

### Reglas

* Registrar solicitud.
* Validar identidad.
* Escalar a responsable.
* Responder conforme a política.

## 46. Obtener solicitudes de privacidad

### Ruta

```text
GET /api/admin/privacy-requests
```

### Propósito

Permitir al administrador o responsable consultar solicitudes pendientes.

---

# MÓDULO SECURITY

## 47. Registrar incidente de seguridad

### Ruta

```text
POST /api/security/incidents
```

### Propósito

Registrar incidente de seguridad.

### Datos de entrada

```json
{
  "incidentType": "acceso_no_autorizado",
  "riskLevel": "alto",
  "description": "Usuario reporta acceso sospechoso.",
  "caseId": "case_001"
}
```

### Reglas

* Generar número interno.
* Clasificar riesgo.
* Registrar evidencia inicial.
* Notificar responsables.

## 48. Actualizar incidente

### Ruta

```text
PATCH /api/security/incidents/:id
```

### Propósito

Actualizar estado o medidas aplicadas en un incidente.

## 49. Cerrar incidente

### Ruta

```text
PATCH /api/security/incidents/:id/close
```

### Propósito

Cerrar incidente después de investigación y corrección.

---

# MÓDULO PAYMENTS

## 50. Crear intención de pago

### Ruta

```text
POST /api/payments/create
```

### Propósito

Crear pago asociado a expediente.

### Datos de entrada

```json
{
  "caseId": "case_001",
  "amount": 1500,
  "currency": "MXN",
  "concept": "Revisión profesional inicial"
}
```

### Reglas

* Asociar pago a folio.
* Informar concepto.
* Registrar estado pendiente.
* Conectar con pasarela en fase posterior.

## 51. Confirmar pago

### Ruta

```text
POST /api/payments/confirm
```

### Propósito

Confirmar resultado de pago.

## 52. Obtener pagos del expediente

### Ruta

```text
GET /api/payments/case/:caseId
```

---

# REGLAS GENERALES DE SEGURIDAD

## 53. Reglas obligatorias para todas las rutas

Todas las rutas privadas deberán:

* Requerir autenticación.
* Validar rol.
* Validar permisos sobre expediente.
* Evitar exposición de datos innecesarios.
* Registrar acciones sensibles.
* Proteger documentos.
* No exponer claves.
* No confiar en datos del frontend.
* Validar entradas.
* Manejar errores de forma segura.

## 54. Respuestas de error

Las respuestas de error deberán ser claras pero seguras.

Ejemplo:

```json
{
  "success": false,
  "message": "No tienes autorización para realizar esta acción."
}
```

No se debe revelar información sensible como:

* Si un correo existe.
* Detalles internos del servidor.
* Rutas reales de archivos.
* Claves.
* Información de otros usuarios.
* Estructura interna sensible.

## 55. Rutas públicas y privadas

### Rutas públicas

* Registro de cliente.
* Login.
* Recuperación de contraseña.
* Consulta de documentos legales.
* Solicitud de registro de abogado.

### Rutas privadas

* Expedientes.
* Documentos.
* Bitácoras.
* Mensajes.
* Notificaciones.
* Pagos.
* Perfil.
* Análisis documental.
* Solicitudes de privacidad.

### Rutas administrativas

* Validación de abogados.
* Gestión de usuarios.
* Incidentes.
* Reasignación de expedientes.
* Documentos bloqueados.
* Métricas.
* Auditorías.

## 56. Relación con documentos anteriores

Este documento se relaciona con:

* Arquitectura Técnica de Fase 2.
* Modelo de Datos.
* Generador de Folios.
* Roles y Permisos.
* Flujos de Usuario de Fase 2.
* Pantallas de Fase 2.
* Política de Carga Documental.
* Política de Uso de IA.
* Política de Validación de Abogados.
* Protocolo de Incidentes de Seguridad.
* Aviso de Privacidad Integral.
* Términos y Condiciones.

## 57. Prioridad de implementación

Orden recomendado:

1. Auth.
2. Users.
3. Cases.
4. Folios.
5. Documents.
6. Logs.
7. Notifications.
8. Lawyers.
9. Admin.
10. AI.
11. Privacy.
12. Security.
13. Payments.

## 58. Conclusión

Las APIs preliminares de LEX-IA CASE permitirán convertir la documentación funcional en una estructura técnica programable.

El backend será el núcleo de seguridad, permisos, expedientes, folios, documentos, bitácoras y conexión con IA.

La regla principal será:

**El frontend muestra; el backend valida, protege, registra y ejecuta.**
