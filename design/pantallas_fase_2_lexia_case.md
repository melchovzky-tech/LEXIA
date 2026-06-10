# Pantallas de Fase 2 – LEX-IA CASE

## 1. Nombre del documento

**Diseño funcional de pantallas para la Fase 2: LEX-IA CASE**

## 2. Propósito

Este documento define las pantallas principales que deberá tener LEX-IA CASE en su Fase 2.

La finalidad es establecer una guía clara antes de programar el sistema privado de usuarios, expedientes, documentos, folios, abogados, bitácoras, mensajes y paneles administrativos.

## 3. Relación con Fase 1

La Fase 1 corresponde a la interfaz pública de orientación inicial.

La Fase 2 inicia cuando el usuario decide continuar con revisión profesional, registro formal y creación de expediente privado.

La Fase 1 permite:

* Seleccionar problema jurídico.
* Contestar preguntas.
* Generar diagnóstico preliminar.
* Cargar documentos de forma demostrativa.
* Descargar expediente inicial.

La Fase 2 permitirá:

* Crear cuenta.
* Iniciar sesión.
* Generar folio.
* Consultar expediente privado.
* Subir documentos de forma segura.
* Comunicarse con abogado.
* Ver avances.
* Revisar bitácora.
* Consultar estado del caso.
* Solicitar cambio de abogado.
* Gestionar pagos en fase posterior.

## 4. Principio de diseño

Las pantallas de LEX-IA CASE deberán seguir un principio básico:

**El usuario debe entender el estado de su caso sin sentirse perdido, y el abogado debe poder trabajar el expediente sin perder documentos, fechas ni contexto.**

## 5. Usuarios principales

Las pantallas deberán contemplar tres tipos principales de usuario:

1. Cliente.
2. Abogado.
3. Administrador LEX-IA.

También podrán existir accesos limitados para:

* Revisor jurídico interno.
* Soporte técnico.
* IA de apoyo.

## 6. Pantallas principales

Las pantallas iniciales de Fase 2 serán:

1. Login.
2. Registro de usuario.
3. Recuperación de contraseña.
4. Panel del cliente.
5. Panel del abogado.
6. Panel administrador.
7. Vista del expediente.
8. Vista de documentos.
9. Carga documental.
10. Análisis documental.
11. Bitácora del expediente.
12. Mensajes.
13. Notificaciones.
14. Estado del caso.
15. Perfil del usuario.
16. Perfil del abogado.
17. Solicitud de cambio de abogado.
18. Pagos futuros.
19. Configuración y seguridad.
20. Avisos legales.

## 7. Pantalla de login

### 7.1 Propósito

Permitir que clientes, abogados y administradores ingresen a LEX-IA CASE.

### 7.2 Elementos principales

La pantalla deberá contener:

* Logotipo LEX-IA.
* Subtítulo: Asistente Jurídico Inteligente.
* Campo de correo electrónico.
* Campo de contraseña.
* Botón de iniciar sesión.
* Enlace para recuperar contraseña.
* Enlace para crear cuenta.
* Aviso breve de privacidad.
* Enlace a términos y condiciones.

### 7.3 Texto sugerido

**Bienvenido a LEX-IA CASE**
Accede a tu expediente jurídico digital de forma segura.

### 7.4 Reglas

* El usuario no debe acceder sin autenticación.
* El sistema debe identificar el rol del usuario.
* Después del login, debe redirigir al panel correspondiente.
* Si el usuario es cliente, entra al panel del cliente.
* Si es abogado, entra al panel del abogado.
* Si es administrador, entra al panel administrador.

## 8. Pantalla de registro

### 8.1 Propósito

Permitir que un usuario cree una cuenta para continuar con expediente privado.

### 8.2 Elementos principales

Campos sugeridos:

* Nombre completo.
* Correo electrónico.
* Teléfono.
* Estado de la República.
* Contraseña.
* Confirmar contraseña.
* Tipo de usuario.
* Aceptación de aviso de privacidad.
* Aceptación de términos y condiciones.
* Botón de crear cuenta.

### 8.3 Tipos de usuario

En una primera etapa, el registro público deberá ser solo para clientes.

El registro de abogados deberá pasar por un proceso separado de validación.

### 8.4 Reglas

* El correo debe ser único.
* La contraseña debe ser segura.
* El usuario debe aceptar aviso de privacidad.
* El usuario debe aceptar términos y condiciones.
* No debe permitir registro de abogado sin validación.

## 9. Pantalla de recuperación de contraseña

### 9.1 Propósito

Permitir que el usuario recupere acceso a su cuenta.

### 9.2 Elementos principales

* Campo de correo electrónico.
* Botón de enviar instrucciones.
* Mensaje de seguridad.
* Enlace para volver al login.

### 9.3 Reglas

* No revelar si un correo existe o no de forma insegura.
* Enviar instrucciones solo al correo registrado.
* Registrar intentos relevantes.
* Permitir restablecimiento seguro.

## 10. Panel del cliente

### 10.1 Propósito

Mostrar al cliente sus expedientes, estado de caso, documentos, abogado asignado y acciones pendientes.

### 10.2 Elementos principales

El panel del cliente deberá mostrar:

* Nombre del cliente.
* Lista de expedientes.
* Folio de cada expediente.
* Materia jurídica.
* Jurisdicción.
* Estado del caso.
* Abogado asignado.
* Documentos pendientes.
* Últimos avances.
* Notificaciones.
* Botón para abrir expediente.
* Botón para subir documentos.
* Botón para solicitar revisión profesional.
* Botón para solicitar cambio de abogado.

### 10.3 Tarjeta de expediente

Cada expediente podrá mostrarse en una tarjeta con:

```text
Folio: LEX-IA-LAB-GRO-2026-000014
Materia: Laboral
Estado: En revisión profesional
Abogado: Pendiente de asignación
Documentos: 3 cargados / 2 pendientes
Última actualización: 10/06/2026
```

### 10.4 Reglas

* El cliente solo puede ver sus expedientes.
* No puede ver expedientes de otros usuarios.
* Debe poder identificar rápidamente qué está pendiente.
* El estado del caso debe ser claro.

## 11. Panel del abogado

### 11.1 Propósito

Permitir que el abogado consulte, organice y atienda los expedientes asignados.

### 11.2 Elementos principales

El panel del abogado deberá mostrar:

* Nombre del abogado.
* Estado de disponibilidad.
* Expedientes asignados.
* Folios.
* Materias.
* Jurisdicciones.
* Estados de expediente.
* Tareas pendientes.
* Documentos nuevos.
* Mensajes del cliente.
* Próximas fechas.
* Alertas de riesgo.
* Botón para abrir expediente.
* Botón para registrar avance.
* Botón para solicitar documentos.
* Botón para marcar etapa.

### 11.3 Filtros sugeridos

* Por materia.
* Por estado.
* Por urgencia.
* Por jurisdicción.
* Por fecha de actualización.
* Por documentos pendientes.
* Por mensajes sin responder.

### 11.4 Reglas

* El abogado solo puede ver expedientes asignados.
* No puede consultar expedientes ajenos.
* Toda acción relevante debe registrarse en bitácora.
* No debe poder alterar folios.
* No debe poder borrar historial.

## 12. Panel administrador

### 12.1 Propósito

Permitir a LEX-IA supervisar usuarios, abogados, expedientes, incidentes, validaciones y operación general.

### 12.2 Elementos principales

El panel administrador deberá mostrar:

* Expedientes activos.
* Expedientes sin abogado.
* Expedientes con retraso.
* Expedientes reportados.
* Abogados pendientes de validación.
* Quejas.
* Incidentes de seguridad.
* Usuarios activos.
* Documentos bloqueados.
* Métricas generales.
* Alertas de abandono.
* Cambios de abogado.
* Bitácora general.

### 12.3 Reglas

* El acceso administrativo debe estar restringido.
* Toda acción administrativa relevante debe registrarse.
* El administrador no debe modificar estrategia jurídica.
* El acceso a documentos sensibles debe estar justificado.
* Debe existir control de permisos internos.

## 13. Vista del expediente

### 13.1 Propósito

Mostrar la información completa de un expediente específico.

### 13.2 Elementos principales

La vista del expediente deberá mostrar:

* Folio.
* Materia.
* Jurisdicción.
* Cliente.
* Abogado asignado.
* Estado actual.
* Fecha de apertura.
* Descripción del caso.
* Diagnóstico preliminar.
* Riesgo inicial.
* Documentos cargados.
* Documentos pendientes.
* Bitácora.
* Mensajes.
* Tareas.
* Próximas acciones.
* Pagos, cuando aplique.

### 13.3 Estructura visual sugerida

Se recomienda dividir la pantalla en secciones:

1. Encabezado del expediente.
2. Resumen del caso.
3. Estado actual.
4. Documentos.
5. Bitácora.
6. Mensajes.
7. Acciones.

### 13.4 Reglas

* El folio debe estar visible.
* El estado debe ser claro.
* Los documentos deben estar organizados.
* La bitácora no debe poder borrarse fácilmente.
* Las acciones deben depender del rol del usuario.

## 14. Vista de documentos

### 14.1 Propósito

Mostrar los documentos asociados a un expediente.

### 14.2 Elementos principales

Cada documento deberá mostrar:

* Nombre del archivo.
* Categoría.
* Fecha de carga.
* Usuario que lo cargó.
* Estado del documento.
* Tamaño.
* Tipo de archivo.
* Resultado de análisis, si existe.
* Botón de ver.
* Botón de descargar, si tiene permiso.
* Botón de solicitar aclaración, para abogado.
* Botón de marcar como revisado.

### 14.3 Estados del documento

Estados sugeridos:

* Cargado.
* Pendiente de revisión.
* Analizado por IA.
* Revisado por abogado.
* Ilegible.
* Duplicado.
* Requiere aclaración.
* Aceptado.
* Rechazado.
* Restringido.

### 14.4 Reglas

* Todo documento debe pertenecer a un expediente.
* No debe existir documento sin folio.
* Toda descarga debe registrarse.
* Soporte técnico no debe ver contenido salvo autorización.
* La IA solo analiza documentos autorizados.

## 15. Pantalla de carga documental

### 15.1 Propósito

Permitir al cliente o abogado subir documentos al expediente.

### 15.2 Elementos principales

La pantalla deberá incluir:

* Folio del expediente.
* Zona para arrastrar o seleccionar archivos.
* Lista de formatos permitidos.
* Límite de tamaño.
* Categoría documental.
* Descripción opcional.
* Advertencia legal.
* Casilla de aceptación.
* Botón de subir documento.
* Estado de carga.

### 15.3 Advertencia sugerida

**Al cargar documentos en LEX-IA, usted declara que cuenta con autorización o justificación legal para utilizarlos dentro de su expediente. No cargue documentos falsos, alterados, obtenidos ilícitamente o pertenecientes a terceros sin autorización.**

### 15.4 Reglas

* Validar formato.
* Validar tamaño.
* Asociar archivo al folio.
* Registrar usuario que carga.
* Registrar fecha y hora.
* Registrar acción en bitácora.
* Bloquear archivos sospechosos.

## 16. Pantalla de análisis documental

### 16.1 Propósito

Mostrar el análisis preliminar realizado por IA o revisión profesional.

### 16.2 Elementos principales

La pantalla podrá mostrar:

* Documento analizado.
* Tipo de análisis.
* Categoría detectada.
* Resumen preliminar.
* Fechas detectadas.
* Personas o partes detectadas.
* Advertencias.
* Documentos faltantes sugeridos.
* Estado de revisión profesional.
* Botón para enviar a abogado.
* Botón para solicitar nuevo análisis.

### 16.3 Advertencia sugerida

**El análisis documental automatizado es preliminar y no sustituye la revisión profesional de un abogado.**

### 16.4 Reglas

* El usuario debe saber que se usó IA.
* El resultado debe marcarse como preliminar.
* El abogado debe poder validar o corregir.
* El análisis debe quedar asociado al expediente.
* Debe registrarse en bitácora.

## 17. Bitácora del expediente

### 17.1 Propósito

Mostrar todas las acciones relevantes realizadas dentro del expediente.

### 17.2 Eventos posibles

La bitácora podrá registrar:

* Expediente creado.
* Folio generado.
* Documento cargado.
* Documento descargado.
* Documento analizado.
* Abogado asignado.
* Cambio de abogado.
* Estado actualizado.
* Mensaje enviado.
* Pago registrado.
* Documento faltante solicitado.
* Avance registrado.
* Expediente cerrado.
* Incidente reportado.

### 17.3 Elementos visibles

Cada evento deberá mostrar:

* Fecha.
* Hora.
* Usuario.
* Rol.
* Acción.
* Descripción.
* Estado resultante.

### 17.4 Reglas

* La bitácora debe ser trazable.
* No debe poder editarse libremente.
* No debe eliminarse sin justificación.
* Debe permitir reconstruir la historia del caso.

## 18. Mensajes

### 18.1 Propósito

Permitir comunicación entre cliente, abogado y plataforma dentro del expediente.

### 18.2 Elementos principales

* Lista de mensajes.
* Caja de texto.
* Adjuntar documento, si procede.
* Enviar mensaje.
* Fecha y hora.
* Estado de lectura.
* Usuario remitente.
* Rol.

### 18.3 Reglas

* Los mensajes deben estar vinculados al expediente.
* Deben conservarse en historial.
* Deben protegerse por permisos.
* No deben usarse para amenazas, fraude o abuso.
* Mensajes relevantes deben poder consultarse en el expediente.

## 19. Notificaciones

### 19.1 Propósito

Informar al usuario sobre eventos importantes.

### 19.2 Tipos de notificación

* Documento cargado.
* Documento faltante.
* Nuevo avance.
* Abogado asignado.
* Cambio de estado.
* Mensaje nuevo.
* Pago pendiente.
* Expediente transferido.
* Audiencia próxima.
* Incidente de seguridad.
* Cambio de política.

### 19.3 Reglas

* Las notificaciones deben ser claras.
* Deben llevar al expediente correspondiente.
* Deben diferenciar prioridad.
* Deben permitir marcar como leídas.
* Las notificaciones críticas deben destacarse.

## 20. Pantalla de estado del caso

### 20.1 Propósito

Mostrar al cliente en qué etapa se encuentra su expediente.

### 20.2 Estados sugeridos

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
* Transferido.
* Suspendido.
* Cerrado.
* Cancelado.

### 20.3 Visualización sugerida

Se puede mostrar como línea de progreso:

```text
Consulta inicial → Expediente creado → Documentación pendiente → Revisión profesional → Abogado asignado → En trámite
```

### 20.4 Reglas

* El estado debe ser entendible para el cliente.
* Cada cambio debe registrarse.
* El abogado puede actualizar estado según permisos.
* El administrador puede supervisar cambios.

## 21. Perfil del cliente

### 21.1 Propósito

Permitir al cliente revisar y actualizar información básica.

### 21.2 Elementos principales

* Nombre completo.
* Correo electrónico.
* Teléfono.
* Estado.
* Ciudad.
* Medio preferente de contacto.
* Contraseña.
* Expedientes asociados.
* Seguridad de cuenta.
* Avisos legales aceptados.

### 21.3 Reglas

* Cambios sensibles deben registrarse.
* No debe permitir suplantación.
* Cambios de correo o teléfono pueden requerir verificación.
* La eliminación de cuenta debe seguir política de conservación.

## 22. Perfil del abogado

### 22.1 Propósito

Mostrar y administrar datos profesionales del abogado.

### 22.2 Elementos principales

* Nombre.
* Correo.
* Teléfono profesional.
* Cédula profesional.
* Materias que atiende.
* Estados donde presta servicio.
* Estado de validación.
* Disponibilidad.
* Evaluación.
* Expedientes asignados.
* Historial de desempeño.
* Documentos de validación.

### 22.3 Reglas

* La cédula debe validarse.
* Los cambios de especialidad pueden requerir revisión.
* El abogado no debe activar materias no autorizadas.
* El administrador debe poder suspender o validar.

## 23. Solicitud de cambio de abogado

### 23.1 Propósito

Permitir al cliente solicitar sustitución de abogado sin perder expediente.

### 23.2 Elementos principales

* Folio.
* Abogado actual.
* Motivo de solicitud.
* Descripción.
* Documentos o evidencia opcional.
* Botón de enviar solicitud.
* Estado de la solicitud.

### 23.3 Motivos sugeridos

* Falta de respuesta.
* Abandono del caso.
* Conflicto.
* Falta de claridad.
* Incumplimiento.
* Solicitud personal.
* Otro.

### 23.4 Reglas

* La solicitud debe registrarse.
* El administrador debe revisar.
* El expediente no debe perder folio.
* Debe conservarse bitácora.
* El abogado saliente debe quedar en historial.

## 24. Pantalla de pagos futuros

### 24.1 Propósito

Mostrar pagos relacionados con el expediente cuando se implemente LEX-IA PAY.

### 24.2 Elementos principales

* Folio.
* Concepto.
* Monto.
* Estado del pago.
* Fecha.
* Etapa.
* Comprobante.
* Comisión de plataforma.
* Abogado relacionado.
* Botón de pagar.
* Historial de pagos.

### 24.3 Estados de pago

* Pendiente.
* Pagado.
* Fallido.
* Reembolsado.
* Cancelado.

### 24.4 Reglas

* Todo pago debe vincularse a folio.
* El usuario debe conocer el concepto antes de pagar.
* Los pagos deben registrarse.
* Los reembolsos deben tener política clara.

## 25. Configuración y seguridad

### 25.1 Propósito

Permitir al usuario administrar seguridad de cuenta.

### 25.2 Elementos principales

* Cambiar contraseña.
* Ver sesiones activas.
* Cerrar sesión en dispositivos.
* Ver actividad reciente.
* Configurar autenticación de dos factores en fase posterior.
* Descargar datos, si procede.
* Solicitar eliminación de cuenta.
* Consultar aviso de privacidad.
* Consultar términos.

### 25.3 Reglas

* Acciones sensibles deben requerir confirmación.
* Cambios de contraseña deben registrarse.
* Actividad sospechosa debe alertarse.
* Eliminación de cuenta debe seguir política de conservación.

## 26. Avisos legales

### 26.1 Propósito

Mostrar documentos legales al usuario.

### 26.2 Documentos visibles

* Aviso de privacidad integral.
* Términos y condiciones.
* Política de uso de IA.
* Política de carga documental.
* Política de conservación y eliminación.
* Política de validación de abogados.
* Advertencias sobre IA.
* Derechos ARCO.

### 26.3 Reglas

* El usuario debe poder consultar los documentos.
* Aceptaciones importantes deben registrarse.
* Cambios relevantes deben notificarse.
* Documentos deben estar actualizados.

## 27. Jerarquía de navegación del cliente

Propuesta:

```text
Panel cliente
├── Mis expedientes
│   ├── Vista del expediente
│   ├── Documentos
│   ├── Bitácora
│   ├── Mensajes
│   ├── Estado del caso
│   └── Pagos
├── Notificaciones
├── Perfil
├── Seguridad
└── Avisos legales
```

## 28. Jerarquía de navegación del abogado

Propuesta:

```text
Panel abogado
├── Expedientes asignados
│   ├── Vista del expediente
│   ├── Documentos
│   ├── Análisis documental
│   ├── Bitácora
│   ├── Mensajes
│   └── Tareas
├── Notificaciones
├── Perfil profesional
├── Disponibilidad
└── Políticas internas
```

## 29. Jerarquía de navegación del administrador

Propuesta:

```text
Panel administrador
├── Expedientes
├── Usuarios
├── Abogados
├── Validaciones
├── Quejas
├── Incidentes
├── Documentos bloqueados
├── Métricas
├── Configuración
└── Bitácora general
```

## 30. Diseño visual sugerido

LEX-IA deberá mantener una identidad seria, profesional y tecnológica.

Colores sugeridos:

* Azul marino.
* Blanco.
* Gris acero.
* Azul tecnológico.
* Verde para estados positivos.
* Amarillo para advertencias.
* Rojo para riesgos o incidentes.

El diseño debe transmitir:

* Confianza.
* Seguridad.
* Orden.
* Seriedad jurídica.
* Tecnología.
* Claridad.

## 31. Prioridad de implementación

Orden recomendado para programar pantallas:

1. Login.
2. Registro de cliente.
3. Panel del cliente.
4. Vista de expediente.
5. Carga documental.
6. Vista de documentos.
7. Bitácora.
8. Panel del abogado.
9. Mensajes.
10. Notificaciones.
11. Panel administrador.
12. Perfil de abogado.
13. Validación de abogados.
14. Pagos futuros.
15. Seguridad de cuenta.

## 32. Reglas generales de interfaz

La interfaz deberá cumplir estas reglas:

* Mostrar siempre el folio en pantallas de expediente.
* Mostrar estado actual del caso.
* No mostrar datos innecesarios.
* Evitar lenguaje técnico excesivo para clientes.
* Registrar acciones importantes.
* Mostrar advertencias cuando se use IA.
* Diferenciar acciones del cliente y del abogado.
* Bloquear acciones no permitidas por rol.
* Confirmar acciones sensibles.
* Mantener trazabilidad.

## 33. Advertencias visibles obligatorias

LEX-IA deberá mostrar advertencias en momentos clave.

### 33.1 Antes de usar IA

**La información generada por IA es preliminar y no sustituye la revisión profesional de un abogado.**

### 33.2 Antes de cargar documentos

**No cargue documentos falsos, alterados, obtenidos ilícitamente o pertenecientes a terceros sin autorización.**

### 33.3 Antes de continuar con revisión profesional

**La revisión profesional será realizada por un abogado autorizado conforme al alcance del servicio contratado.**

### 33.4 Antes de pagar

**Revise cuidadosamente el concepto, monto y etapa del servicio antes de confirmar el pago.**

## 34. Conclusión

Las pantallas de Fase 2 deberán convertir a LEX-IA CASE en una plataforma privada, segura y organizada.

El objetivo principal será que el cliente pueda dar seguimiento a su expediente y que el abogado pueda trabajar con documentos, bitácora y comunicación clara.

La regla principal será:

**Cada pantalla debe ayudar a entender, proteger y avanzar el expediente.**
