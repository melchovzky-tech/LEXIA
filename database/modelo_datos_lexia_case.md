# Modelo de Datos – LEX-IA CASE

## 1. Nombre del documento

**Modelo de datos preliminar para LEX-IA CASE**

## 2. Propósito

Este documento define la estructura preliminar de datos que deberá utilizar LEX-IA CASE en la Fase 2 del proyecto.

El objetivo es establecer qué información deberá almacenarse, cómo se relacionarán los usuarios, expedientes, documentos, abogados, bitácoras y pagos, así como preparar la base para desarrollar posteriormente el backend y la base de datos.

## 3. Importancia del modelo de datos

LEX-IA CASE no puede funcionar únicamente con pantallas visuales. Para operar como plataforma real necesita una base de datos ordenada y segura.

El modelo de datos permitirá:

* Registrar clientes.
* Registrar abogados.
* Crear expedientes.
* Generar folios.
* Asociar documentos a expedientes.
* Registrar avances.
* Controlar estados.
* Mantener bitácora.
* Consultar información por rol.
* Proteger documentos.
* Conservar continuidad del caso.

## 4. Entidades principales

Las entidades principales del sistema serán:

1. Usuarios.
2. Clientes.
3. Abogados.
4. Administradores.
5. Expedientes.
6. Documentos.
7. Bitácora de actuaciones.
8. Mensajes.
9. Notificaciones.
10. Pagos.
11. Estados del expediente.
12. Materias jurídicas.
13. Jurisdicciones.
14. Revisiones documentales.

## 5. Tabla: users

La tabla **users** almacenará la información básica de acceso de todos los usuarios del sistema.

Aquí podrán existir clientes, abogados, administradores, revisores internos o soporte técnico.

### Campos sugeridos

| Campo         | Tipo sugerido | Descripción                              |
| ------------- | ------------- | ---------------------------------------- |
| id            | UUID / entero | Identificador único del usuario          |
| full_name     | texto         | Nombre completo                          |
| email         | texto         | Correo electrónico                       |
| phone         | texto         | Teléfono                                 |
| password_hash | texto         | Contraseña cifrada                       |
| role          | texto         | Rol principal del usuario                |
| status        | texto         | Activo, suspendido, pendiente, eliminado |
| created_at    | fecha         | Fecha de creación                        |
| updated_at    | fecha         | Última actualización                     |
| last_login    | fecha         | Último inicio de sesión                  |

### Roles posibles

* client
* lawyer
* admin
* legal_reviewer
* support

## 6. Tabla: clients

La tabla **clients** almacenará información específica de los clientes.

Un cliente es la persona que solicita orientación, revisión o representación jurídica.

### Campos sugeridos

| Campo             | Tipo sugerido  | Descripción                             |
| ----------------- | -------------- | --------------------------------------- |
| id                | UUID / entero  | Identificador del cliente               |
| user_id           | UUID / entero  | Relación con tabla users                |
| curp              | texto opcional | CURP, si se requiere en etapa posterior |
| address           | texto opcional | Domicilio                               |
| city              | texto          | Ciudad o municipio                      |
| state             | texto          | Estado de la República                  |
| preferred_contact | texto          | Correo, teléfono, WhatsApp, plataforma  |
| created_at        | fecha          | Fecha de creación                       |
| updated_at        | fecha          | Última actualización                    |

## 7. Tabla: lawyers

La tabla **lawyers** almacenará información profesional de los abogados.

### Campos sugeridos

| Campo                | Tipo sugerido   | Descripción                      |
| -------------------- | --------------- | -------------------------------- |
| id                   | UUID / entero   | Identificador del abogado        |
| user_id              | UUID / entero   | Relación con tabla users         |
| professional_license | texto           | Cédula profesional               |
| specialties          | arreglo / texto | Materias que atiende             |
| states_covered       | arreglo / texto | Estados donde presta servicio    |
| years_experience     | número          | Años de experiencia              |
| bio                  | texto           | Perfil profesional               |
| verification_status  | texto           | Pendiente, verificado, rechazado |
| availability_status  | texto           | Disponible, ocupado, inactivo    |
| rating               | número          | Evaluación promedio interna      |
| created_at           | fecha           | Fecha de creación                |
| updated_at           | fecha           | Última actualización             |

### Estados de verificación

* pending
* verified
* rejected
* suspended

## 8. Tabla: admins

La tabla **admins** puede utilizarse para información adicional de usuarios administradores.

### Campos sugeridos

| Campo            | Tipo sugerido | Descripción                     |
| ---------------- | ------------- | ------------------------------- |
| id               | UUID / entero | Identificador del administrador |
| user_id          | UUID / entero | Relación con tabla users        |
| department       | texto         | Área interna                    |
| permission_level | texto         | Nivel de permisos               |
| created_at       | fecha         | Fecha de creación               |

## 9. Tabla: cases

La tabla **cases** será una de las más importantes del sistema.

Cada registro representa un expediente jurídico.

### Campos sugeridos

| Campo                 | Tipo sugerido          | Descripción                          |
| --------------------- | ---------------------- | ------------------------------------ |
| id                    | UUID / entero          | Identificador interno del expediente |
| folio                 | texto                  | Folio único del expediente           |
| client_id             | UUID / entero          | Cliente titular del expediente       |
| lawyer_id             | UUID / entero opcional | Abogado asignado                     |
| matter_code           | texto                  | Materia jurídica                     |
| jurisdiction_code     | texto                  | Estado o jurisdicción                |
| title                 | texto                  | Título breve del caso                |
| description           | texto                  | Descripción inicial                  |
| preliminary_diagnosis | texto                  | Diagnóstico preliminar               |
| risk_level            | texto                  | Bajo, medio, alto                    |
| current_status        | texto                  | Estado actual del expediente         |
| opened_at             | fecha                  | Fecha de apertura                    |
| closed_at             | fecha opcional         | Fecha de cierre                      |
| created_at            | fecha                  | Fecha de creación                    |
| updated_at            | fecha                  | Última actualización                 |

### Ejemplo de folio

**LEX-IA-LAB-GRO-2026-000014**

## 10. Tabla: matter_types

La tabla **matter_types** almacenará las materias jurídicas disponibles.

### Campos sugeridos

| Campo       | Tipo sugerido | Descripción       |
| ----------- | ------------- | ----------------- |
| id          | UUID / entero | Identificador     |
| code        | texto         | Código de materia |
| name        | texto         | Nombre de materia |
| description | texto         | Descripción       |
| active      | booleano      | Disponible o no   |

### Códigos sugeridos

| Código | Materia        |
| ------ | -------------- |
| LAB    | Laboral        |
| FAM    | Familiar       |
| SUC    | Sucesorio      |
| CIV    | Civil          |
| MER    | Mercantil      |
| ADM    | Administrativo |
| PEN    | Penal          |
| AMP    | Amparo         |
| FIS    | Fiscal         |

## 11. Tabla: jurisdictions

La tabla **jurisdictions** almacenará estados o jurisdicciones aplicables.

### Campos sugeridos

| Campo   | Tipo sugerido | Descripción            |
| ------- | ------------- | ---------------------- |
| id      | UUID / entero | Identificador          |
| code    | texto         | Código de jurisdicción |
| name    | texto         | Nombre del estado      |
| country | texto         | País                   |
| active  | booleano      | Disponible o no        |

### Ejemplos

| Código | Estado              |
| ------ | ------------------- |
| GRO    | Guerrero            |
| CDMX   | Ciudad de México    |
| BCS    | Baja California Sur |
| VER    | Veracruz            |
| QROO   | Quintana Roo        |
| MEX    | Estado de México    |

## 12. Tabla: case_status_history

Esta tabla permitirá guardar el historial de cambios de estado del expediente.

### Campos sugeridos

| Campo           | Tipo sugerido | Descripción                   |
| --------------- | ------------- | ----------------------------- |
| id              | UUID / entero | Identificador                 |
| case_id         | UUID / entero | Expediente relacionado        |
| previous_status | texto         | Estado anterior               |
| new_status      | texto         | Nuevo estado                  |
| changed_by      | UUID / entero | Usuario que realizó el cambio |
| reason          | texto         | Motivo del cambio             |
| created_at      | fecha         | Fecha del cambio              |

### Estados sugeridos

* consulta_inicial
* expediente_creado
* documentacion_pendiente
* documentos_integrados
* revision_profesional
* abogado_asignado
* en_integracion
* en_tramite
* en_audiencia
* pendiente_resolucion
* seguimiento
* transferido
* suspendido
* cerrado
* cancelado

## 13. Tabla: documents

La tabla **documents** almacenará información sobre documentos cargados al expediente.

### Campos sugeridos

| Campo             | Tipo sugerido | Descripción                    |
| ----------------- | ------------- | ------------------------------ |
| id                | UUID / entero | Identificador del documento    |
| case_id           | UUID / entero | Expediente relacionado         |
| uploaded_by       | UUID / entero | Usuario que cargó el documento |
| file_name         | texto         | Nombre original                |
| file_type         | texto         | PDF, JPG, PNG, etc.            |
| file_size         | número        | Tamaño del archivo             |
| storage_path      | texto         | Ruta o ubicación segura        |
| document_category | texto         | Categoría documental           |
| visibility        | texto         | Cliente, abogado, restringido  |
| analysis_status   | texto         | Pendiente, analizado, error    |
| created_at        | fecha         | Fecha de carga                 |
| updated_at        | fecha         | Última actualización           |

### Categorías documentales

* identificacion
* contrato
* recibo
* acta
* sentencia
* convenio
* testamento
* escritura
* comprobante_pago
* prueba_documental
* escrito_juridico
* acuse
* notificacion
* otro

## 14. Tabla: document_analysis

La tabla **document_analysis** almacenará resultados del análisis documental realizado por IA o por revisión profesional.

### Campos sugeridos

| Campo             | Tipo sugerido          | Descripción                  |
| ----------------- | ---------------------- | ---------------------------- |
| id                | UUID / entero          | Identificador                |
| document_id       | UUID / entero          | Documento analizado          |
| case_id           | UUID / entero          | Expediente relacionado       |
| analysis_type     | texto                  | IA, abogado, revisor         |
| detected_category | texto                  | Categoría detectada          |
| summary           | texto                  | Resumen del documento        |
| extracted_text    | texto opcional         | Texto extraído por OCR o PDF |
| detected_dates    | texto / JSON           | Fechas detectadas            |
| detected_parties  | texto / JSON           | Personas o partes detectadas |
| warnings          | texto / JSON           | Advertencias                 |
| recommendations   | texto / JSON           | Recomendaciones              |
| reviewed_by       | UUID / entero opcional | Usuario que revisó           |
| created_at        | fecha                  | Fecha de análisis            |

## 15. Tabla: case_logs

La tabla **case_logs** será la bitácora de actuaciones.

Cada acción importante dentro del expediente deberá quedar registrada.

### Campos sugeridos

| Campo       | Tipo sugerido | Descripción                   |
| ----------- | ------------- | ----------------------------- |
| id          | UUID / entero | Identificador                 |
| case_id     | UUID / entero | Expediente relacionado        |
| user_id     | UUID / entero | Usuario que realizó la acción |
| role        | texto         | Rol del usuario               |
| action_type | texto         | Tipo de acción                |
| description | texto         | Descripción de la acción      |
| metadata    | JSON opcional | Datos adicionales             |
| created_at  | fecha         | Fecha y hora                  |

### Tipos de acción

* expediente_creado
* documento_cargado
* documento_descargado
* documento_analizado
* abogado_asignado
* abogado_cambiado
* estado_actualizado
* avance_registrado
* mensaje_enviado
* pago_registrado
* revision_solicitada
* expediente_cerrado

## 16. Tabla: messages

La tabla **messages** almacenará comunicaciones dentro del expediente.

### Campos sugeridos

| Campo       | Tipo sugerido  | Descripción            |
| ----------- | -------------- | ---------------------- |
| id          | UUID / entero  | Identificador          |
| case_id     | UUID / entero  | Expediente relacionado |
| sender_id   | UUID / entero  | Usuario que envía      |
| receiver_id | UUID / entero  | Usuario que recibe     |
| message     | texto          | Contenido del mensaje  |
| read_at     | fecha opcional | Fecha de lectura       |
| created_at  | fecha          | Fecha de envío         |

## 17. Tabla: notifications

La tabla **notifications** almacenará avisos internos al usuario.

### Campos sugeridos

| Campo             | Tipo sugerido          | Descripción               |
| ----------------- | ---------------------- | ------------------------- |
| id                | UUID / entero          | Identificador             |
| user_id           | UUID / entero          | Usuario destinatario      |
| case_id           | UUID / entero opcional | Expediente relacionado    |
| title             | texto                  | Título de la notificación |
| message           | texto                  | Mensaje                   |
| notification_type | texto                  | Tipo de aviso             |
| read              | booleano               | Leída o no                |
| created_at        | fecha                  | Fecha de creación         |

### Tipos de notificación

* documento_cargado
* documento_faltante
* nuevo_avance
* abogado_asignado
* cambio_estado
* pago_pendiente
* audiencia_proxima
* expediente_transferido
* mensaje_nuevo

## 18. Tabla: lawyer_assignments

La tabla **lawyer_assignments** permitirá conservar historial de abogados asignados.

### Campos sugeridos

| Campo       | Tipo sugerido  | Descripción           |
| ----------- | -------------- | --------------------- |
| id          | UUID / entero  | Identificador         |
| case_id     | UUID / entero  | Expediente            |
| lawyer_id   | UUID / entero  | Abogado asignado      |
| assigned_by | UUID / entero  | Usuario que asignó    |
| assigned_at | fecha          | Fecha de asignación   |
| ended_at    | fecha opcional | Fecha de finalización |
| reason_end  | texto opcional | Motivo de cambio      |
| active      | booleano       | Si sigue activo o no  |

Esto permitirá que el expediente conserve continuidad aunque cambie de abogado.

## 19. Tabla: payments

La tabla **payments** se implementará en una fase posterior, vinculada con LEX-IA PAY.

### Campos sugeridos

| Campo          | Tipo sugerido          | Descripción                    |
| -------------- | ---------------------- | ------------------------------ |
| id             | UUID / entero          | Identificador                  |
| case_id        | UUID / entero          | Expediente relacionado         |
| client_id      | UUID / entero          | Cliente que paga               |
| lawyer_id      | UUID / entero opcional | Abogado relacionado            |
| amount         | número                 | Monto                          |
| currency       | texto                  | MXN                            |
| payment_status | texto                  | Pendiente, pagado, reembolsado |
| payment_stage  | texto                  | Etapa o hito                   |
| platform_fee   | número                 | Comisión de plataforma         |
| paid_at        | fecha opcional         | Fecha de pago                  |
| created_at     | fecha                  | Fecha de creación              |

### Estados de pago

* pending
* paid
* failed
* refunded
* cancelled

## 20. Tabla: case_tasks

La tabla **case_tasks** permitirá registrar tareas pendientes dentro del expediente.

### Campos sugeridos

| Campo       | Tipo sugerido  | Descripción                       |
| ----------- | -------------- | --------------------------------- |
| id          | UUID / entero  | Identificador                     |
| case_id     | UUID / entero  | Expediente relacionado            |
| assigned_to | UUID / entero  | Usuario responsable               |
| title       | texto          | Título de la tarea                |
| description | texto          | Descripción                       |
| status      | texto          | Pendiente, en proceso, completada |
| due_date    | fecha opcional | Fecha límite                      |
| created_at  | fecha          | Fecha de creación                 |
| updated_at  | fecha          | Última actualización              |

### Ejemplos de tareas

* Subir identificación oficial.
* Revisar contrato.
* Presentar recibos de nómina.
* Elaborar escrito.
* Confirmar audiencia.
* Revisar sentencia.
* Solicitar documento faltante.

## 21. Tabla: lawyer_reviews

La tabla **lawyer_reviews** permitirá evaluar el servicio de abogados.

### Campos sugeridos

| Campo      | Tipo sugerido | Descripción            |
| ---------- | ------------- | ---------------------- |
| id         | UUID / entero | Identificador          |
| lawyer_id  | UUID / entero | Abogado evaluado       |
| client_id  | UUID / entero | Cliente que evalúa     |
| case_id    | UUID / entero | Expediente relacionado |
| rating     | número        | Calificación           |
| comment    | texto         | Comentario             |
| created_at | fecha         | Fecha de evaluación    |

## 22. Relaciones principales

Las relaciones principales del sistema serán:

* Un usuario puede ser cliente, abogado, administrador o soporte.
* Un cliente puede tener muchos expedientes.
* Un expediente pertenece a un cliente.
* Un expediente puede tener un abogado activo.
* Un abogado puede tener muchos expedientes asignados.
* Un expediente puede tener muchos documentos.
* Un documento pertenece a un expediente.
* Un expediente puede tener muchos mensajes.
* Un expediente puede tener muchas actuaciones en bitácora.
* Un expediente puede tener muchos cambios de estado.
* Un expediente puede tener historial de abogados asignados.
* Un expediente puede tener pagos asociados.
* Un expediente puede tener tareas pendientes.

## 23. Ejemplo de expediente

Ejemplo:

```json
{
  "folio": "LEX-IA-LAB-GRO-2026-000014",
  "client_id": "client_001",
  "lawyer_id": "lawyer_003",
  "matter_code": "LAB",
  "jurisdiction_code": "GRO",
  "title": "Posible despido injustificado",
  "description": "El cliente refiere que fue despedido verbalmente y no recibió liquidación.",
  "risk_level": "Alto",
  "current_status": "revision_profesional"
}
```

## 24. Ejemplo de documento

```json
{
  "case_id": "case_014",
  "uploaded_by": "client_001",
  "file_name": "contrato_trabajo.pdf",
  "file_type": "application/pdf",
  "file_size": 245000,
  "document_category": "contrato",
  "visibility": "cliente_abogado",
  "analysis_status": "pendiente"
}
```

## 25. Ejemplo de bitácora

```json
{
  "case_id": "case_014",
  "user_id": "lawyer_003",
  "role": "lawyer",
  "action_type": "avance_registrado",
  "description": "Se revisaron documentos laborales y se solicitó recibo de nómina adicional.",
  "created_at": "2026-06-10T12:00:00"
}
```

## 26. Reglas de integridad

El modelo de datos deberá respetar reglas básicas:

* Todo expediente debe tener cliente.
* Todo expediente formal debe tener folio.
* Todo documento debe pertenecer a un expediente.
* Todo documento debe indicar quién lo cargó.
* Todo cambio de estado debe quedar registrado.
* Todo cambio de abogado debe conservar historial.
* Ningún usuario debe acceder a expedientes ajenos.
* Toda actuación relevante debe registrarse en bitácora.
* Los documentos no deben eliminarse sin trazabilidad.
* Los folios no deben repetirse.

## 27. Reglas de seguridad

Reglas mínimas:

* Las contraseñas nunca deben guardarse en texto plano.
* Los documentos deben almacenarse con acceso protegido.
* El acceso por folio debe requerir autenticación.
* La IA solo debe analizar documentos autorizados.
* El administrador debe tener permisos controlados.
* El soporte técnico no debe acceder al contenido jurídico salvo autorización.
* Las descargas deben registrarse.
* Los accesos sensibles deben auditarse.

## 28. Escalabilidad

El modelo debe permitir crecer hacia nuevas funciones.

Funciones futuras:

* Nuevas materias jurídicas.
* Nuevas jurisdicciones.
* Pagos por etapa.
* Reputación de abogados.
* Auditorías internas.
* IA documental avanzada.
* Panel de despachos.
* Firma electrónica.
* Notificaciones externas.
* Integración con calendarios.
* Gestión de audiencias.
* Métricas de desempeño.

## 29. Implementación técnica futura

La base de datos podría implementarse con tecnologías como:

* PostgreSQL.
* MySQL.
* MongoDB.
* Supabase.
* Firebase.
* Otra solución segura y escalable.

La decisión dependerá de:

* Costo.
* Seguridad.
* Escalabilidad.
* Facilidad de desarrollo.
* Integración con autenticación.
* Almacenamiento documental.
* Requerimientos legales.

## 30. Prioridad inicial de tablas

Para una primera versión privada, las tablas mínimas serían:

1. users
2. clients
3. lawyers
4. cases
5. documents
6. case_logs
7. lawyer_assignments
8. notifications

Posteriormente se agregarían:

9. messages
10. payments
11. case_tasks
12. lawyer_reviews
13. document_analysis

## 31. Conclusión

El modelo de datos de LEX-IA CASE será la base para construir una plataforma jurídica organizada, segura y escalable.

Su función principal será garantizar que cada expediente tenga folio, cliente, documentos, historial, abogado asignado y trazabilidad.

Este modelo permitirá que LEX-IA conserve continuidad del caso, proteja documentos, supervise avances y facilite el cambio de abogado sin pérdida de información.
