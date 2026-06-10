# Arquitectura Técnica de la Fase 2 – LEX-IA CASE

## 1. Nombre del documento

**Arquitectura técnica de la Fase 2: LEX-IA CASE**

## 2. Propósito

Este documento define la arquitectura técnica preliminar para desarrollar la Fase 2 de LEX-IA, correspondiente al módulo privado de expedientes, folios, usuarios, abogados, documentos y seguimiento jurídico.

La finalidad es establecer una base clara antes de iniciar la programación del backend, base de datos, sistema de usuarios y paneles internos.

## 3. Relación con la Fase 1

La Fase 1 corresponde a la interfaz pública de orientación inicial.

La Fase 2 inicia cuando el usuario decide continuar con revisión profesional, asesoría formal o representación legal.

La Fase 1 permite:

* Identificar el problema jurídico.
* Clasificar la materia.
* Registrar jurisdicción preliminar.
* Generar diagnóstico inicial.
* Cargar documentos de forma demostrativa.
* Descargar un expediente preliminar.

La Fase 2 permitirá:

* Registrar al cliente.
* Generar folio único.
* Crear expediente privado.
* Subir documentos de forma segura.
* Asignar abogado.
* Dar seguimiento por etapas.
* Registrar actuaciones.
* Mantener continuidad del caso.

## 4. Objetivo técnico de la Fase 2

El objetivo técnico es construir una aplicación privada que permita administrar expedientes jurídicos mediante usuarios, roles, documentos, folios y bitácoras.

El sistema deberá estar diseñado para separar claramente:

* Interfaz del cliente.
* Interfaz del abogado.
* Panel administrador.
* Backend.
* Base de datos.
* Almacenamiento documental.
* Módulo de IA documental.

## 5. Componentes principales

La arquitectura de LEX-IA CASE deberá considerar los siguientes componentes:

1. **Frontend**
2. **Backend**
3. **Base de datos**
4. **Sistema de autenticación**
5. **Gestión de expedientes**
6. **Generador de folios**
7. **Carga y almacenamiento documental**
8. **Panel del cliente**
9. **Panel del abogado**
10. **Panel administrador**
11. **Bitácora de actuaciones**
12. **Sistema de notificaciones**
13. **Módulo de IA documental**
14. **Módulo de pagos en fase posterior**

## 6. Frontend

El frontend será la parte visual de la aplicación.

Deberá permitir que cada usuario acceda a una interfaz diferente según su rol.

Roles principales:

* Cliente.
* Abogado.
* Administrador.

El frontend podrá desarrollarse posteriormente con tecnologías como:

* HTML, CSS y JavaScript en etapa inicial.
* React, Next.js o similar en una etapa más avanzada.

Funciones principales del frontend:

* Mostrar formularios de registro.
* Mostrar login.
* Mostrar panel del cliente.
* Mostrar panel del abogado.
* Mostrar panel administrador.
* Permitir carga de documentos.
* Mostrar estado del expediente.
* Mostrar bitácora.
* Mostrar notificaciones.
* Mostrar documentos disponibles.
* Permitir descarga de documentos autorizados.

## 7. Backend

El backend será el núcleo operativo de la plataforma.

Sus funciones principales serán:

* Recibir solicitudes del frontend.
* Crear usuarios.
* Autenticar accesos.
* Generar folios.
* Crear expedientes.
* Guardar datos en base de datos.
* Controlar permisos.
* Procesar documentos.
* Conectar con módulos de IA.
* Registrar actuaciones.
* Enviar notificaciones.
* Administrar expedientes.
* Proteger información sensible.

El backend no deberá exponer claves privadas ni credenciales al navegador.

## 8. Base de datos

La base de datos almacenará la información principal del sistema.

Deberá contener, como mínimo:

* Usuarios.
* Roles.
* Expedientes.
* Documentos.
* Folios.
* Abogados.
* Bitácoras.
* Estados del expediente.
* Mensajes.
* Notificaciones.
* Pagos, en fase posterior.

La base de datos deberá diseñarse pensando en seguridad, trazabilidad y crecimiento.

## 9. Sistema de usuarios

El sistema deberá permitir registrar diferentes tipos de usuarios.

### 9.1 Cliente

El cliente será la persona que solicita orientación, asesoría o representación jurídica.

Datos básicos:

* Nombre completo.
* Correo electrónico.
* Teléfono.
* Contraseña.
* Estado.
* Municipio o ciudad.
* Fecha de registro.
* Expedientes asociados.

### 9.2 Abogado

El abogado será el profesionista que atiende expedientes dentro de LEX-IA.

Datos básicos:

* Nombre completo.
* Correo electrónico.
* Teléfono.
* Cédula profesional.
* Materias que atiende.
* Estados donde presta servicio.
* Experiencia.
* Disponibilidad.
* Expedientes asignados.
* Evaluación o reputación interna.

### 9.3 Administrador

El administrador será el usuario interno de LEX-IA encargado de supervisar el sistema.

Funciones:

* Validar abogados.
* Revisar expedientes.
* Atender reportes.
* Supervisar actividad.
* Administrar usuarios.
* Controlar permisos.
* Auditar movimientos.

## 10. Roles y permisos

Cada usuario deberá tener permisos específicos.

### Cliente

Puede:

* Ver sus expedientes.
* Subir documentos.
* Descargar documentos autorizados.
* Ver avances.
* Ver mensajes.
* Solicitar revisión profesional.
* Solicitar cambio de abogado.

No puede:

* Ver expedientes de otros clientes.
* Modificar bitácoras profesionales.
* Acceder al panel del abogado.
* Acceder al panel administrador.

### Abogado

Puede:

* Ver expedientes asignados.
* Revisar documentos del cliente.
* Subir documentos jurídicos.
* Registrar avances.
* Solicitar documentos faltantes.
* Actualizar etapas.
* Enviar observaciones.

No puede:

* Ver expedientes no asignados.
* Alterar folios.
* Eliminar historial sin autorización.
* Acceder a datos administrativos completos.

### Administrador

Puede:

* Supervisar expedientes.
* Administrar usuarios.
* Validar abogados.
* Revisar reportes.
* Auditar actividad.
* Aplicar reglas internas.

Debe tener restricciones para evitar manipulación indebida del contenido jurídico.

## 11. Expediente digital

El expediente digital será el centro de LEX-IA CASE.

Cada expediente deberá contener:

* Folio único.
* Cliente asociado.
* Materia jurídica.
* Jurisdicción.
* Estado procesal o etapa.
* Diagnóstico inicial.
* Documentos cargados.
* Abogado asignado.
* Bitácora de actuaciones.
* Mensajes.
* Fechas importantes.
* Recomendaciones.
* Historial de cambios.
* Estado actual.

## 12. Folio único

Cada expediente deberá contar con un folio único generado automáticamente.

Ejemplo:

**LEX-IA-LAB-GRO-2026-000014**

Elementos del folio:

* **LEX-IA:** plataforma.
* **LAB:** materia laboral.
* **GRO:** jurisdicción.
* **2026:** año.
* **000014:** consecutivo.

El folio permitirá consultar y dar seguimiento al expediente.

## 13. Materias jurídicas iniciales

En la primera versión de Fase 2 se recomienda iniciar con las materias ya trabajadas en la Fase 1:

* Laboral.
* Familiar.
* Sucesorio.

Posteriormente podrán agregarse:

* Civil.
* Mercantil.
* Administrativo.
* Penal.
* Amparo.
* Fiscal.
* Propiedad intelectual.
* Arrendamiento.
* Migratorio.

## 14. Estructura de estados del expediente

Cada expediente podrá tener un estado.

Estados sugeridos:

* Consulta inicial.
* Expediente creado.
* Documentación pendiente.
* Documentos integrados.
* En revisión profesional.
* Abogado asignado.
* En integración.
* En trámite.
* En audiencia.
* Pendiente de resolución.
* En seguimiento.
* Transferido a otro abogado.
* Suspendido.
* Cerrado.
* Cancelado.

## 15. Carga segura de documentos

En la Fase 2 los documentos ya no serán únicamente simulados.

Deberán almacenarse de forma segura.

Cada documento deberá registrar:

* Nombre del archivo.
* Tipo de archivo.
* Tamaño.
* Fecha de carga.
* Usuario que lo cargó.
* Expediente asociado.
* Categoría documental.
* Permisos de acceso.
* Historial de descarga o revisión.

Tipos de documentos permitidos inicialmente:

* PDF.
* JPG.
* PNG.
* Imágenes escaneadas.
* Documentos de texto, en fase posterior.

## 16. Categorías documentales

Los documentos podrán clasificarse por categoría.

Ejemplos:

* Identificación oficial.
* Contrato.
* Recibo.
* Acta.
* Sentencia.
* Convenio.
* Testamento.
* Escritura.
* Comprobante de pago.
* Prueba documental.
* Escrito jurídico.
* Promoción.
* Acuse.
* Notificación.

## 17. IA documental

La IA documental deberá operar como apoyo para clasificar y resumir documentos.

Funciones futuras:

* Leer PDFs.
* Leer imágenes mediante OCR.
* Extraer texto.
* Identificar fechas.
* Identificar nombres.
* Identificar partes.
* Identificar obligaciones.
* Detectar documentos faltantes.
* Resumir contenido.
* Alertar inconsistencias.
* Sugerir documentos complementarios.

Esta función deberá estar siempre limitada por advertencias y revisión profesional.

## 18. Bitácora de actuaciones

Cada expediente deberá tener una bitácora.

La bitácora permitirá registrar eventos como:

* Expediente creado.
* Cliente registrado.
* Documento cargado.
* Documento analizado.
* Abogado asignado.
* Abogado cambió estado del caso.
* Se solicitó documento faltante.
* Se subió escrito.
* Se programó audiencia.
* Se registró pago.
* Se cambió abogado.
* Se cerró expediente.

La bitácora deberá registrar:

* Fecha.
* Hora.
* Usuario que realizó la acción.
* Tipo de acción.
* Descripción.
* Expediente relacionado.

## 19. Panel del cliente

El panel del cliente deberá ser sencillo.

Debe mostrar:

* Folio.
* Estado del caso.
* Abogado asignado.
* Documentos cargados.
* Documentos pendientes.
* Últimos avances.
* Próximas acciones.
* Mensajes.
* Botón para subir documentos.
* Botón para descargar documentos autorizados.
* Botón para solicitar revisión profesional.
* Botón para solicitar cambio de abogado.

## 20. Panel del abogado

El panel del abogado deberá estar orientado al trabajo profesional.

Debe mostrar:

* Expedientes asignados.
* Folio de cada expediente.
* Materia.
* Estado.
* Cliente.
* Documentos cargados.
* Documentos pendientes.
* Diagnóstico preliminar.
* Bitácora.
* Acciones pendientes.
* Botón para subir documento.
* Botón para registrar avance.
* Botón para solicitar información.
* Botón para marcar etapa cumplida.

## 21. Panel administrador

El panel administrador permitirá supervisar el sistema.

Debe incluir:

* Usuarios registrados.
* Abogados pendientes de validación.
* Expedientes activos.
* Expedientes sin abogado.
* Reportes de clientes.
* Cambios de abogado.
* Tiempos de respuesta.
* Estados de casos.
* Bitácora general.
* Alertas de abandono.
* Control de permisos.

## 22. Seguridad

La seguridad será esencial en la Fase 2.

Controles mínimos:

* Contraseñas seguras.
* Autenticación.
* Control de sesiones.
* Roles y permisos.
* Protección de documentos.
* Validación de archivos.
* Restricción de acceso.
* Bitácora de movimientos.
* Respaldo de información.
* Prevención de acceso no autorizado.
* Separación entre datos de clientes.

## 23. Protección de datos personales

LEX-IA CASE manejará datos personales y posiblemente información sensible.

Por ello deberá contemplar:

* Aviso de privacidad.
* Consentimiento informado.
* Finalidad del tratamiento.
* Medidas de seguridad.
* Limitación de acceso.
* Derechos ARCO.
* Resguardo documental.
* Política de eliminación o conservación.
* Términos y condiciones.

## 24. Notificaciones

El sistema podrá incluir notificaciones.

Ejemplos:

* Documento cargado.
* Documento faltante.
* Nuevo avance registrado.
* Abogado asignado.
* Cambio de estado.
* Pago pendiente.
* Audiencia próxima.
* Expediente transferido.
* Solicitud de información.

Las notificaciones podrán ser internas en la plataforma, por correo o por mensaje en fases posteriores.

## 25. Módulo de pagos

El módulo de pagos corresponde a una fase posterior vinculada con LEX-IA PAY.

Podrá incluir:

* Pago por revisión inicial.
* Pago por integración documental.
* Pago por elaboración de escrito.
* Pago por etapa cumplida.
* Comisión de plataforma.
* Liberación de pago por hito.
* Historial de pagos.
* Facturación o comprobantes.

## 26. Estructura técnica sugerida del proyecto

En una fase posterior, el repositorio podría incorporar nuevas carpetas:

```text
frontend/
backend/
database/
storage/
ai/
legal-data/
admin/
```

### frontend/

Aplicación visual para clientes, abogados y administradores.

### backend/

Servidor, APIs, autenticación, lógica de negocio y conexión con IA.

### database/

Modelos de datos, esquemas, migraciones y relaciones.

### storage/

Almacenamiento documental seguro.

### ai/

Módulos de IA documental, clasificación, resumen y asistencia.

### legal-data/

Bases jurídicas, legislación, criterios y documentos normativos.

### admin/

Herramientas internas de administración.

## 27. API preliminar sugerida

El backend podría incluir rutas como:

```text
POST /api/auth/register
POST /api/auth/login
GET /api/users/me

POST /api/cases
GET /api/cases/:folio
GET /api/cases/client/:clientId
GET /api/cases/lawyer/:lawyerId
PATCH /api/cases/:id/status

POST /api/documents/upload
GET /api/documents/:caseId
DELETE /api/documents/:id

POST /api/cases/:id/log
GET /api/cases/:id/log

POST /api/ai/analyze-document
POST /api/ai/summarize-case
```

Estas rutas son preliminares y deberán ajustarse al diseño final.

## 28. Base de datos preliminar

Tablas o colecciones sugeridas:

```text
users
roles
clients
lawyers
cases
case_status
documents
case_logs
messages
notifications
payments
lawyer_reviews
```

## 29. Relaciones básicas

Relaciones sugeridas:

* Un cliente puede tener varios expedientes.
* Un expediente pertenece a un cliente.
* Un expediente puede tener un abogado asignado.
* Un abogado puede tener varios expedientes.
* Un expediente puede tener muchos documentos.
* Un expediente puede tener muchas actuaciones.
* Un usuario puede generar muchas acciones en bitácora.
* Un expediente puede tener varios estados históricos.

## 30. Reglas iniciales

Reglas básicas del sistema:

* Ningún cliente puede ver expedientes ajenos.
* Ningún abogado puede ver expedientes no asignados.
* Todo expediente debe tener folio.
* Todo documento debe pertenecer a un expediente.
* Toda acción relevante debe registrarse en bitácora.
* El cambio de abogado debe quedar registrado.
* La IA no debe reemplazar revisión profesional.
* Los documentos sensibles deben estar protegidos.
* El administrador debe tener acceso controlado.

## 31. Flujo general Fase 2

Flujo sugerido:

1. Usuario genera diagnóstico en Fase 1.
2. Usuario decide continuar.
3. Usuario se registra.
4. Sistema crea expediente privado.
5. Sistema genera folio.
6. Usuario accede al panel del cliente.
7. Usuario sube documentos.
8. IA clasifica documentos.
9. Abogado revisa expediente.
10. Abogado confirma diagnóstico profesional.
11. Cliente acepta servicio.
12. Se registran avances.
13. El cliente consulta el expediente por folio.
14. Si cambia el abogado, el caso continúa con el historial conservado.

## 32. Prioridad de construcción

Orden recomendado para programar:

1. Backend básico.
2. Registro e inicio de sesión.
3. Modelo de usuarios y roles.
4. Creación de expedientes.
5. Generador de folios.
6. Panel básico del cliente.
7. Carga de documentos.
8. Panel básico del abogado.
9. Bitácora.
10. Estados del expediente.
11. Panel administrador.
12. IA documental.
13. Pagos.

## 33. Riesgos técnicos

Riesgos principales:

* Almacenamiento inseguro de documentos.
* Acceso indebido a expedientes.
* Pérdida de archivos.
* Fallas en autenticación.
* Errores en asignación de abogados.
* Exposición de datos personales.
* Uso incorrecto de IA.
* Falta de bitácora.
* Falta de respaldo.
* Dificultad para escalar.

## 34. Medidas preventivas

Medidas recomendadas:

* Diseñar roles desde el inicio.
* Separar frontend y backend.
* No guardar claves en el navegador.
* Validar archivos.
* Registrar bitácora.
* Usar HTTPS en producción.
* Proteger rutas privadas.
* Respaldar documentos.
* Limitar permisos.
* Auditar actividad.
* Crear políticas de privacidad y uso.

## 35. Conclusión

La arquitectura técnica de la Fase 2 permitirá convertir a LEX-IA en una plataforma jurídica privada, organizada y escalable.

El objetivo no es solo crear formularios o pantallas, sino construir un sistema capaz de conservar expedientes, proteger documentos, asignar abogados y mantener continuidad del caso mediante folios, roles y bitácoras.

Esta arquitectura será la base para desarrollar LEX-IA CASE como el núcleo operativo de la plataforma.
