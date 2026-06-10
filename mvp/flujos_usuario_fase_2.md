# Flujos de Usuario de Fase 2 – LEX-IA CASE

## 1. Nombre del documento

**Flujos de usuario para la Fase 2: LEX-IA CASE**

## 2. Propósito

Este documento define los recorridos principales que realizarán los usuarios dentro de LEX-IA CASE.

Su finalidad es explicar qué ocurre desde que un cliente decide continuar después del diagnóstico preliminar, hasta que se crea un expediente formal, se asigna abogado, se cargan documentos, se registran avances y se cierra el caso.

Este documento servirá como guía para el diseño de pantallas, programación del backend, base de datos, permisos y experiencia de usuario.

## 3. Usuarios contemplados

Los flujos principales consideran los siguientes usuarios:

1. Cliente.
2. Abogado.
3. Administrador LEX-IA.
4. Revisor jurídico interno.
5. Soporte técnico.
6. IA de apoyo.

## 4. Principio general del flujo

LEX-IA CASE deberá operar bajo el siguiente principio:

**Cada acción importante del usuario debe generar claridad, trazabilidad y avance dentro del expediente.**

Esto significa que las acciones relevantes deberán:

* Vincularse a un folio.
* Guardarse en base de datos.
* Respetar permisos.
* Registrar bitácora.
* Notificar cuando sea necesario.
* Mantener continuidad del caso.

---

# FLUJO 1: Del diagnóstico preliminar a expediente formal

## 5. Objetivo

Convertir una consulta inicial de Fase 1 en un expediente privado dentro de LEX-IA CASE.

## 6. Participantes

* Cliente.
* Sistema LEX-IA.
* IA de apoyo.
* Administrador, si se requiere revisión.
* Abogado, en etapa posterior.

## 7. Recorrido

1. El usuario entra a la interfaz pública.
2. Selecciona el tipo de problema jurídico.
3. Responde el cuestionario inicial.
4. Selecciona estado de la República.
5. El sistema genera diagnóstico preliminar.
6. El sistema sugiere documentos.
7. El usuario revisa el expediente inicial.
8. El usuario decide continuar con revisión profesional.
9. El sistema solicita crear cuenta o iniciar sesión.
10. El usuario acepta aviso de privacidad y términos.
11. El sistema crea cuenta de cliente.
12. El sistema crea expediente privado.
13. El sistema genera folio único.
14. El sistema muestra el panel del cliente.
15. El expediente queda en estado: **Expediente creado**.

## 8. Resultado esperado

El usuario deja de estar en una consulta pública y pasa a tener un expediente privado con folio.

## 9. Bitácora generada

Eventos sugeridos:

* Cuenta creada.
* Expediente creado.
* Folio generado.
* Diagnóstico preliminar asociado.
* Usuario aceptó aviso de privacidad.
* Usuario aceptó términos y condiciones.

---

# FLUJO 2: Cliente crea cuenta

## 10. Objetivo

Permitir que el usuario se registre como cliente.

## 11. Participantes

* Cliente.
* Sistema LEX-IA.

## 12. Recorrido

1. El usuario selecciona “Crear cuenta”.
2. Ingresa nombre completo.
3. Ingresa correo electrónico.
4. Ingresa teléfono.
5. Selecciona estado.
6. Crea contraseña.
7. Confirma contraseña.
8. Acepta aviso de privacidad.
9. Acepta términos y condiciones.
10. El sistema valida los datos.
11. El sistema crea usuario con rol de cliente.
12. El sistema muestra confirmación.
13. El sistema redirige al panel del cliente.

## 13. Reglas

* El correo no debe estar registrado previamente.
* La contraseña debe cumplir requisitos mínimos.
* El usuario debe aceptar documentos legales.
* El registro público debe ser solo para clientes.
* El registro de abogados debe estar separado y validado.

## 14. Resultado esperado

El cliente cuenta con acceso privado a LEX-IA CASE.

---

# FLUJO 3: Cliente inicia sesión

## 15. Objetivo

Permitir que el cliente acceda a su panel privado.

## 16. Participantes

* Cliente.
* Sistema LEX-IA.

## 17. Recorrido

1. El cliente entra a login.
2. Ingresa correo.
3. Ingresa contraseña.
4. El sistema valida credenciales.
5. El sistema identifica rol.
6. El sistema redirige al panel del cliente.
7. El cliente visualiza sus expedientes.

## 18. Reglas

* Si las credenciales son incorrectas, mostrar error genérico.
* No revelar información sensible.
* Registrar intentos fallidos relevantes.
* Bloquear temporalmente ante intentos repetidos.

## 19. Resultado esperado

El cliente accede solo a sus expedientes.

---

# FLUJO 4: Cliente abre expediente desde su panel

## 20. Objetivo

Permitir que el cliente consulte un expediente específico.

## 21. Participantes

* Cliente.
* Sistema LEX-IA.

## 22. Recorrido

1. El cliente entra a su panel.
2. Visualiza la lista de expedientes.
3. Selecciona un expediente por folio.
4. El sistema valida que el expediente pertenezca al cliente.
5. El sistema abre la vista del expediente.
6. El cliente visualiza estado, documentos, abogado, bitácora y acciones disponibles.

## 23. Reglas

* El cliente solo puede abrir expedientes propios.
* El folio no debe permitir acceso sin autenticación.
* El sistema debe validar permisos antes de mostrar información.

## 24. Resultado esperado

El cliente consulta de forma segura su expediente.

---

# FLUJO 5: Cliente sube documentos

## 25. Objetivo

Permitir que el cliente cargue documentos al expediente.

## 26. Participantes

* Cliente.
* Sistema LEX-IA.
* IA de apoyo, si se autoriza análisis.
* Abogado, en revisión posterior.

## 27. Recorrido

1. El cliente abre su expediente.
2. Selecciona “Subir documento”.
3. El sistema muestra advertencia de carga documental.
4. El cliente selecciona archivo.
5. El cliente selecciona categoría documental.
6. El cliente acepta responsabilidad sobre el documento.
7. El sistema valida formato y tamaño.
8. El sistema asocia el documento al folio.
9. El sistema guarda metadatos.
10. El sistema registra la acción en bitácora.
11. El sistema actualiza estado documental.
12. El sistema muestra confirmación.

## 28. Reglas

* Solo se permiten formatos autorizados.
* Todo documento debe asociarse a expediente y folio.
* El documento debe registrar usuario que lo cargó.
* Toda carga debe registrarse.
* Los documentos sospechosos pueden bloquearse.

## 29. Resultado esperado

El documento queda integrado al expediente con trazabilidad.

## 30. Bitácora generada

* Documento cargado.
* Categoría seleccionada.
* Usuario que cargó.
* Fecha y hora.
* Estado inicial del documento.

---

# FLUJO 6: Cliente solicita análisis documental

## 31. Objetivo

Permitir que el cliente solicite análisis preliminar de documentos mediante IA.

## 32. Participantes

* Cliente.
* Sistema LEX-IA.
* IA de apoyo.
* Abogado, en revisión posterior.

## 33. Recorrido

1. El cliente abre documentos del expediente.
2. Selecciona “Analizar documento”.
3. El sistema muestra advertencia sobre IA.
4. El cliente acepta el análisis.
5. El sistema procesa el documento.
6. La IA genera resultado preliminar.
7. El sistema muestra categoría, resumen y advertencias.
8. El resultado queda marcado como preliminar.
9. El sistema registra análisis en bitácora.
10. El documento queda en estado: **Analizado por IA**.

## 34. Reglas

* El análisis por IA requiere autorización.
* Debe mostrarse advertencia visible.
* El resultado no sustituye revisión profesional.
* El abogado debe poder validar o corregir el análisis.

## 35. Resultado esperado

El cliente obtiene una lectura preliminar y el abogado cuenta con apoyo documental.

---

# FLUJO 7: Cliente solicita revisión profesional

## 36. Objetivo

Permitir que el cliente pida que un abogado revise su expediente.

## 37. Participantes

* Cliente.
* Sistema LEX-IA.
* Administrador.
* Abogado.

## 38. Recorrido

1. El cliente abre expediente.
2. Selecciona “Solicitar revisión profesional”.
3. El sistema muestra alcance del servicio.
4. El cliente confirma solicitud.
5. El sistema cambia estado a **En revisión profesional**.
6. El sistema notifica al administrador.
7. El sistema busca abogado compatible.
8. El administrador o sistema propone abogado.
9. El abogado recibe solicitud.
10. El abogado acepta o rechaza.
11. Si acepta, queda asignado al expediente.
12. El cliente recibe notificación.

## 39. Reglas

* El cliente debe haber aceptado términos y aviso de privacidad.
* El expediente debe tener folio.
* El abogado debe estar validado.
* La asignación debe registrarse.
* El cliente debe ver quién fue asignado.

## 40. Resultado esperado

El expediente pasa de orientación preliminar a revisión profesional.

---

# FLUJO 8: Administrador valida abogado

## 41. Objetivo

Permitir que LEX-IA valide a un abogado antes de asignarle expedientes.

## 42. Participantes

* Abogado.
* Administrador.
* Sistema LEX-IA.

## 43. Recorrido

1. El abogado solicita registro.
2. El abogado proporciona datos profesionales.
3. El abogado carga identificación y cédula.
4. El sistema marca estado como **Pendiente de validación**.
5. El administrador revisa documentos.
6. El administrador verifica identidad.
7. El administrador verifica cédula profesional.
8. El administrador revisa materias declaradas.
9. El administrador aprueba, rechaza o solicita corrección.
10. Si aprueba, el abogado queda como **Validado básico**.
11. Si requiere más revisión, queda como **Pendiente de información**.
12. Si rechaza, queda como **Rechazado**.

## 44. Reglas

* Ningún abogado no validado debe recibir expedientes.
* La validación debe quedar registrada.
* La información profesional debe actualizarse periódicamente.
* El administrador no debe publicar datos privados innecesarios.

## 45. Resultado esperado

LEX-IA cuenta con abogados identificados y controlados.

---

# FLUJO 9: Abogado recibe expediente asignado

## 46. Objetivo

Permitir que un abogado validado revise un expediente asignado.

## 47. Participantes

* Abogado.
* Sistema LEX-IA.
* Cliente.

## 48. Recorrido

1. El abogado inicia sesión.
2. Entra al panel del abogado.
3. Visualiza expedientes asignados.
4. Selecciona expediente por folio.
5. El sistema valida que el expediente esté asignado a ese abogado.
6. El abogado revisa diagnóstico preliminar.
7. El abogado revisa documentos cargados.
8. El abogado revisa bitácora.
9. El abogado registra recepción del caso.
10. El abogado define siguiente acción.

## 49. Reglas

* El abogado solo ve expedientes asignados.
* No puede alterar folio.
* No puede borrar bitácora.
* Toda revisión relevante debe registrarse.

## 50. Resultado esperado

El abogado cuenta con la información inicial para atender el caso.

---

# FLUJO 10: Abogado solicita documentos faltantes

## 51. Objetivo

Permitir que el abogado solicite información o documentos adicionales al cliente.

## 52. Participantes

* Abogado.
* Cliente.
* Sistema LEX-IA.

## 53. Recorrido

1. El abogado abre expediente.
2. Revisa documentos cargados.
3. Identifica documentos faltantes.
4. Selecciona “Solicitar documento”.
5. Escribe nombre del documento solicitado.
6. Agrega explicación.
7. El sistema registra solicitud.
8. El sistema notifica al cliente.
9. El cliente visualiza documentos pendientes.
10. El cliente carga el documento solicitado.
11. El sistema notifica al abogado.

## 54. Reglas

* La solicitud debe quedar en bitácora.
* El cliente debe verla como tarea pendiente.
* El documento cargado debe asociarse al folio.
* La carga debe notificar al abogado.

## 55. Resultado esperado

El expediente avanza hacia integración documental completa.

---

# FLUJO 11: Abogado registra avance

## 56. Objetivo

Permitir que el abogado registre avances del caso.

## 57. Participantes

* Abogado.
* Cliente.
* Sistema LEX-IA.

## 58. Recorrido

1. El abogado abre expediente.
2. Selecciona “Registrar avance”.
3. Captura descripción del avance.
4. Selecciona tipo de avance.
5. Adjunta documento, si aplica.
6. Actualiza estado del expediente, si procede.
7. El sistema guarda el avance.
8. El sistema registra bitácora.
9. El sistema notifica al cliente.

## 59. Tipos de avance

* Revisión documental.
* Solicitud de documentos.
* Elaboración de escrito.
* Presentación de promoción.
* Audiencia.
* Acuerdo recibido.
* Sentencia.
* Negociación.
* Cierre de etapa.
* Observación general.

## 60. Reglas

* Todo avance debe asociarse al folio.
* El cliente debe poder verlo.
* No debe permitirse borrar avances sin control.
* Cambios de estado deben quedar registrados.

## 61. Resultado esperado

El cliente puede dar seguimiento real al caso.

---

# FLUJO 12: Cliente revisa avance

## 62. Objetivo

Permitir que el cliente conozca el estado actualizado del expediente.

## 63. Participantes

* Cliente.
* Sistema LEX-IA.

## 64. Recorrido

1. El cliente recibe notificación.
2. Inicia sesión.
3. Abre expediente.
4. Revisa el avance registrado.
5. Revisa documentos adjuntos, si los hay.
6. Revisa próximas acciones.
7. Responde mensaje o sube documento, si aplica.

## 65. Reglas

* El cliente solo ve avances de sus expedientes.
* Las acciones deben ser claras.
* El avance debe tener fecha y responsable.

## 66. Resultado esperado

El cliente entiende qué ocurrió y qué sigue.

---

# FLUJO 13: Cliente solicita cambio de abogado

## 67. Objetivo

Permitir que el cliente solicite cambio de abogado sin perder expediente.

## 68. Participantes

* Cliente.
* Administrador.
* Abogado saliente.
* Abogado entrante.
* Sistema LEX-IA.

## 69. Recorrido

1. El cliente abre expediente.
2. Selecciona “Solicitar cambio de abogado”.
3. Selecciona motivo.
4. Escribe explicación.
5. Envía solicitud.
6. El sistema registra solicitud.
7. El administrador recibe alerta.
8. El administrador revisa expediente, bitácora y mensajes.
9. El administrador solicita aclaración, si procede.
10. El administrador aprueba o rechaza cambio.
11. Si aprueba, se desactiva abogado saliente.
12. El sistema busca abogado entrante.
13. Se asigna nuevo abogado.
14. Se conserva folio, documentos y bitácora.
15. El cliente recibe notificación.

## 70. Motivos posibles

* Falta de respuesta.
* Abandono.
* Conflicto.
* Trato inadecuado.
* Falta de claridad.
* Incumplimiento.
* Solicitud personal.
* Otro.

## 71. Reglas

* El folio no cambia.
* El expediente no se elimina.
* Debe conservarse historial.
* El abogado saliente queda registrado.
* El nuevo abogado debe ver la bitácora previa.
* El cambio debe notificarse.

## 72. Resultado esperado

El caso conserva continuidad aunque cambie el abogado.

---

# FLUJO 14: Administrador reasigna expediente

## 73. Objetivo

Permitir que LEX-IA reasigne un expediente a otro abogado.

## 74. Participantes

* Administrador.
* Abogado saliente.
* Abogado entrante.
* Cliente.
* Sistema LEX-IA.

## 75. Recorrido

1. El administrador entra al panel.
2. Revisa expedientes reportados o sin atención.
3. Selecciona expediente.
4. Revisa motivo de reasignación.
5. Suspende o libera abogado actual, si procede.
6. Busca abogado compatible.
7. Asigna nuevo abogado.
8. Registra motivo de reasignación.
9. El sistema actualiza historial de asignaciones.
10. El sistema notifica al cliente.
11. El sistema notifica al nuevo abogado.

## 76. Reglas

* La reasignación debe tener motivo.
* Debe quedar en bitácora.
* El expediente conserva folio.
* Los documentos permanecen.
* El cliente debe ser informado.

## 77. Resultado esperado

El expediente continúa sin pérdida de información.

---

# FLUJO 15: Administrador atiende incidente de seguridad

## 78. Objetivo

Permitir que LEX-IA gestione incidentes relacionados con seguridad o datos personales.

## 79. Participantes

* Administrador.
* Soporte técnico.
* Responsable de seguridad.
* Usuario afectado.
* Sistema LEX-IA.

## 80. Recorrido

1. Se detecta incidente.
2. Se registra número interno.
3. Se clasifica nivel de riesgo.
4. Se aplican medidas de contención.
5. Se preserva evidencia.
6. Se investiga causa.
7. Se identifican datos afectados.
8. Se corrige falla.
9. Se notifica internamente.
10. Se notifica al usuario, si procede.
11. Se cierra incidente.
12. Se documentan medidas preventivas.

## 81. Reglas

* No borrar evidencia.
* No ocultar incidente.
* Limitar acceso.
* Registrar todo.
* Notificar según gravedad.
* Corregir causa raíz.

## 82. Resultado esperado

El incidente se atiende de forma ordenada, trazable y segura.

---

# FLUJO 16: Cliente realiza pago futuro

## 83. Objetivo

Permitir que el cliente pague un servicio relacionado con el expediente.

## 84. Participantes

* Cliente.
* Sistema LEX-IA.
* Abogado.
* Pasarela de pago.
* Administrador, si aplica.

## 85. Recorrido

1. El cliente abre expediente.
2. Revisa concepto de pago.
3. Revisa monto y etapa.
4. Acepta condiciones.
5. Selecciona método de pago.
6. El sistema redirige o procesa pago.
7. La pasarela confirma resultado.
8. El sistema registra pago.
9. El sistema relaciona pago con folio.
10. El abogado recibe notificación.
11. El expediente actualiza estado de pago.

## 86. Reglas

* Todo pago debe tener concepto claro.
* Todo pago debe vincularse a folio.
* No debe procesarse pago sin aceptación del usuario.
* El comprobante debe estar disponible.
* Los reembolsos siguen política aplicable.

## 87. Resultado esperado

El pago queda registrado y trazable.

---

# FLUJO 17: Expediente se cierra

## 88. Objetivo

Cerrar un expediente cuando el asunto concluye o se cancela.

## 89. Participantes

* Cliente.
* Abogado.
* Administrador.
* Sistema LEX-IA.

## 90. Recorrido

1. El abogado propone cierre.
2. El sistema muestra motivo de cierre.
3. El cliente recibe notificación.
4. El administrador revisa, si aplica.
5. Se confirma cierre.
6. El expediente cambia a estado **Cerrado**.
7. Se bloquean ediciones ordinarias.
8. Se conservan documentos y bitácora según política.
9. El cliente puede descargar documentos autorizados.
10. Se registra cierre en bitácora.

## 91. Motivos de cierre

* Asunto concluido.
* Servicio terminado.
* Cliente desistió.
* Acuerdo alcanzado.
* Representación finalizada.
* Expediente duplicado.
* Falta de documentos.
* Incumplimiento de pago.
* Cancelación administrativa.

## 92. Reglas

* El folio no se reutiliza.
* La bitácora se conserva.
* No debe eliminarse información esencial automáticamente.
* El cliente debe conocer estado final.
* Los pagos pendientes deben revisarse.

## 93. Resultado esperado

El expediente queda cerrado con trazabilidad y conservación adecuada.

---

# FLUJO 18: Usuario solicita eliminación de datos

## 94. Objetivo

Permitir que el usuario solicite eliminación, cancelación o limitación de datos.

## 95. Participantes

* Usuario.
* Sistema LEX-IA.
* Administrador.
* Responsable de privacidad.

## 96. Recorrido

1. El usuario entra a configuración.
2. Selecciona solicitud de privacidad.
3. Elige tipo de solicitud.
4. Describe qué datos desea eliminar.
5. Acredita identidad, si procede.
6. El sistema registra solicitud.
7. El responsable revisa procedencia.
8. Se revisa si existen expedientes activos.
9. Se determina eliminación, bloqueo o negativa justificada.
10. Se informa respuesta al usuario.
11. Se registra resultado.

## 97. Reglas

* No eliminar expedientes activos sin revisión.
* Conservar información mínima cuando proceda.
* Atender derechos ARCO.
* Registrar solicitud.
* Proteger datos de terceros.

## 98. Resultado esperado

La solicitud se atiende conforme a privacidad y trazabilidad.

---

# FLUJO 19: Soporte técnico atiende problema de usuario

## 99. Objetivo

Permitir que soporte técnico resuelva incidencias sin acceder indebidamente a documentos jurídicos.

## 100. Participantes

* Usuario.
* Soporte técnico.
* Sistema LEX-IA.
* Administrador, si procede.

## 101. Recorrido

1. El usuario reporta problema.
2. Soporte recibe ticket.
3. Soporte identifica tipo de problema.
4. Revisa datos técnicos mínimos.
5. Si requiere acceso sensible, solicita autorización o escalamiento.
6. Resuelve incidencia.
7. Registra acción.
8. Informa al usuario.
9. Cierra ticket.

## 102. Reglas

* Soporte no debe leer documentos jurídicos sin autorización.
* Debe tener permisos limitados.
* Toda intervención relevante debe registrarse.
* Incidentes de seguridad deben escalarse.

## 103. Resultado esperado

El problema técnico se resuelve sin comprometer privacidad.

---

# FLUJO 20: Abogado se da de baja o queda suspendido

## 104. Objetivo

Evitar que la baja o suspensión de un abogado afecte la continuidad de expedientes.

## 105. Participantes

* Abogado.
* Administrador.
* Cliente.
* Sistema LEX-IA.

## 106. Recorrido

1. El abogado solicita baja o el administrador detecta causa de suspensión.
2. El sistema identifica expedientes activos.
3. El administrador revisa pendientes.
4. Se bloquean nuevas asignaciones.
5. Se reasignan expedientes activos.
6. Se conserva historial del abogado saliente.
7. Se notifica al cliente.
8. Se notifica al nuevo abogado.
9. Se registra evento en bitácora.

## 107. Reglas

* El abogado suspendido no debe conservar acceso.
* No se elimina su historial.
* El folio no cambia.
* Se debe proteger continuidad del caso.
* Pagos y documentos deben revisarse.

## 108. Resultado esperado

La salida del abogado no afecta el expediente.

---

# 109. Resumen general de estados del expediente

Estados sugeridos:

```text
consulta_inicial
expediente_creado
documentacion_pendiente
documentos_integrados
revision_profesional
abogado_asignado
en_integracion
en_tramite
en_audiencia
pendiente_resolucion
seguimiento
transferido
suspendido
cerrado
cancelado
```

## 110. Acciones que siempre deben generar bitácora

* Crear cuenta.
* Crear expediente.
* Generar folio.
* Subir documento.
* Descargar documento.
* Analizar documento.
* Asignar abogado.
* Cambiar abogado.
* Registrar avance.
* Cambiar estado.
* Enviar mensaje relevante.
* Registrar pago.
* Cerrar expediente.
* Reportar incidente.
* Solicitar eliminación de datos.
* Validar abogado.
* Suspender abogado.

## 111. Notificaciones principales

LEX-IA deberá notificar cuando:

* Se crea expediente.
* Se genera folio.
* Se carga documento.
* Falta documento.
* Se asigna abogado.
* Cambia el estado.
* Hay nuevo avance.
* Hay mensaje nuevo.
* Se solicita pago.
* Se acepta pago.
* Se solicita cambio de abogado.
* Se reasigna expediente.
* Se cierra expediente.
* Hay incidente de seguridad.

## 112. Reglas generales

Reglas centrales de todos los flujos:

* El cliente solo ve sus expedientes.
* El abogado solo ve expedientes asignados.
* El administrador actúa con acceso controlado.
* El soporte técnico no debe acceder a contenido jurídico sin autorización.
* La IA solo apoya y no decide definitivamente.
* Todo expediente formal debe tener folio.
* Todo documento debe asociarse a expediente.
* Toda acción relevante debe registrarse.
* Ningún folio debe reutilizarse.
* La privacidad debe respetarse desde el diseño.

## 113. Conclusión

Los flujos de usuario de Fase 2 permiten entender cómo operará LEX-IA CASE desde la perspectiva de clientes, abogados y administradores.

Estos recorridos muestran que la plataforma no solo debe crear pantallas, sino coordinar acciones, permisos, documentos, folios, bitácoras y notificaciones.

La regla principal será:

**Cada flujo debe proteger el expediente, orientar al usuario y dejar evidencia clara de lo ocurrido.**
