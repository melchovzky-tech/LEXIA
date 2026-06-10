# Protocolo de Incidentes de Seguridad – LEX-IA

## 1. Nombre del documento

**Protocolo de Atención, Registro y Respuesta ante Incidentes de Seguridad en LEX-IA**

## 2. Propósito

El presente protocolo establece las reglas internas para identificar, registrar, contener, investigar, corregir y dar seguimiento a incidentes de seguridad relacionados con datos personales, expedientes jurídicos, documentos, cuentas de usuario, accesos, sistemas, folios, bitácoras y demás información tratada dentro de LEX-IA.

Su finalidad es proteger al usuario, preservar la confidencialidad del expediente, reducir daños, conservar evidencia, corregir fallas y evitar que los incidentes se repitan.

## 3. Principio rector

LEX-IA deberá operar bajo el siguiente principio:

**Todo incidente de seguridad debe atenderse con rapidez, trazabilidad, confidencialidad, documentación y medidas correctivas.**

## 4. Alcance del protocolo

Este protocolo aplica a incidentes relacionados con:

* Datos personales.
* Datos sensibles.
* Documentos cargados.
* Expedientes jurídicos.
* Folios.
* Bitácoras.
* Cuentas de usuario.
* Cuentas de abogado.
* Cuentas administrativas.
* Accesos no autorizados.
* Descargas indebidas.
* Errores de permisos.
* Uso indebido de inteligencia artificial.
* Pérdida de información.
* Alteración de documentos.
* Fallas de almacenamiento.
* Ataques informáticos.
* Archivos maliciosos.
* Errores humanos.
* Proveedores tecnológicos.

## 5. Qué se considera incidente de seguridad

Se entenderá por incidente de seguridad cualquier evento que comprometa o pueda comprometer la confidencialidad, integridad, disponibilidad, trazabilidad o uso correcto de la información tratada por LEX-IA.

Ejemplos:

* Acceso no autorizado a una cuenta.
* Acceso a expediente ajeno.
* Filtración de documentos.
* Descarga no autorizada.
* Robo de contraseña.
* Suplantación de identidad.
* Modificación indebida de documentos.
* Eliminación no autorizada.
* Error de permisos.
* Exposición pública accidental de archivos.
* Envío de documentos al usuario incorrecto.
* Pérdida de información.
* Carga de malware.
* Uso indebido de datos personales.
* Uso indebido de IA.
* Abogado accediendo a casos no asignados.
* Administrador accediendo sin justificación.
* Soporte técnico consultando documentos sin autorización.
* Falla en el almacenamiento documental.
* Ataque al sistema.
* Error de configuración.
* Fuga de información por proveedor externo.

## 6. Clasificación de incidentes

Los incidentes deberán clasificarse por nivel de riesgo.

### 6.1 Incidente bajo

Ejemplos:

* Error menor de visualización.
* Documento duplicado.
* Notificación enviada con retraso.
* Archivo ilegible sin exposición de datos.
* Error técnico sin acceso indebido.

### 6.2 Incidente medio

Ejemplos:

* Usuario visualiza información limitada que no le correspondía.
* Documento enviado por error a usuario autorizado dentro del mismo expediente.
* Error temporal de permisos.
* Pérdida parcial recuperable.
* Intento fallido de acceso no autorizado.
* Descarga indebida sin datos sensibles.

### 6.3 Incidente alto

Ejemplos:

* Acceso a expediente ajeno.
* Filtración de documentos.
* Exposición de datos sensibles.
* Compromiso de cuenta de abogado.
* Descarga no autorizada de documentos relevantes.
* Eliminación de documentos sin respaldo.
* Error de permisos que afecta múltiples usuarios.
* Uso indebido de datos de menores de edad.

### 6.4 Incidente crítico

Ejemplos:

* Fuga masiva de datos.
* Exposición pública de expedientes.
* Ataque informático con extracción de información.
* Robo de credenciales administrativas.
* Pérdida severa de documentos.
* Alteración maliciosa de expedientes.
* Compromiso de datos sensibles de múltiples usuarios.
* Incidente con posibles consecuencias jurídicas graves para titulares.

## 7. Fuentes de detección

Un incidente podrá detectarse mediante:

* Reporte del usuario.
* Reporte del abogado.
* Reporte del administrador.
* Reporte de soporte técnico.
* Alertas automáticas del sistema.
* Bitácoras.
* Monitoreo de accesos.
* Notificaciones de proveedores.
* Revisión interna.
* Quejas.
* Solicitudes ARCO.
* Auditorías.
* Análisis de comportamiento sospechoso.
* Detección de malware.
* Fallas técnicas.

## 8. Obligación de reportar

Todo usuario interno, abogado, revisor, soporte técnico o administrador que detecte un posible incidente deberá reportarlo inmediatamente al área responsable de seguridad o administración de LEX-IA.

El reporte deberá realizarse aunque no exista certeza plena del incidente.

La regla será:

**Ante la duda, se reporta y se investiga.**

## 9. Registro inicial del incidente

Todo incidente deberá registrarse en un formato interno.

Datos mínimos del registro:

* Número interno de incidente.
* Fecha y hora de detección.
* Persona que reporta.
* Rol de quien reporta.
* Medio de detección.
* Tipo de incidente.
* Expediente o folio relacionado.
* Usuario afectado.
* Datos o documentos posiblemente afectados.
* Descripción inicial.
* Nivel preliminar de riesgo.
* Medidas inmediatas tomadas.
* Responsable asignado.
* Estado del incidente.

## 10. Número interno de incidente

Cada incidente deberá tener un identificador único.

Formato sugerido:

**INC-LEXIA-2026-0001**

Ejemplo:

**INC-LEXIA-2026-0045**

Este número permitirá dar seguimiento interno sin exponer datos personales.

## 11. Contención inmediata

Al detectar un incidente, LEX-IA deberá aplicar medidas de contención.

Medidas posibles:

* Bloquear acceso afectado.
* Suspender sesión.
* Cambiar contraseña.
* Revocar permisos.
* Desactivar enlaces.
* Bloquear documento.
* Congelar expediente.
* Suspender descarga.
* Desactivar cuenta sospechosa.
* Separar archivos comprometidos.
* Detener procesamiento por IA.
* Revocar acceso de abogado.
* Suspender proveedor o integración.
* Activar respaldo.
* Aislar sistema afectado.

La contención busca evitar que el daño continúe.

## 12. Preservación de evidencia

LEX-IA deberá conservar evidencia del incidente.

Evidencia posible:

* Bitácoras.
* Registros de acceso.
* Direcciones IP, cuando proceda.
* Fechas y horas.
* Usuario involucrado.
* Rol.
* Archivos afectados.
* Historial de descargas.
* Mensajes.
* Capturas internas.
* Registros técnicos.
* Cambios de permisos.
* Notificaciones del sistema.
* Reportes de usuarios.
* Acciones realizadas.

La evidencia no deberá alterarse indebidamente.

## 13. Investigación

Después de contener el incidente, se deberá investigar.

La investigación deberá determinar:

* Qué ocurrió.
* Cuándo ocurrió.
* Cómo ocurrió.
* Quién detectó el incidente.
* Qué usuarios participaron.
* Qué datos fueron afectados.
* Qué documentos fueron afectados.
* Qué expedientes fueron afectados.
* Si hubo acceso no autorizado.
* Si hubo descarga.
* Si hubo modificación o eliminación.
* Si hubo datos sensibles.
* Si hubo menores de edad involucrados.
* Si fue error humano, técnico o ataque.
* Si intervino un proveedor externo.
* Qué medidas correctivas se requieren.

## 14. Evaluación de impacto

LEX-IA deberá evaluar el impacto del incidente.

Aspectos a revisar:

* Número de usuarios afectados.
* Tipo de datos involucrados.
* Sensibilidad de los documentos.
* Riesgo para el usuario.
* Riesgo jurídico.
* Riesgo patrimonial.
* Riesgo reputacional.
* Riesgo para menores de edad.
* Riesgo de suplantación.
* Riesgo de daño moral.
* Riesgo de discriminación.
* Posibilidad de recuperación.
* Posibilidad de repetición.

## 15. Datos especialmente relevantes

Se considerará de mayor riesgo cualquier incidente que involucre:

* Identificaciones oficiales.
* Datos de menores.
* Documentos familiares.
* Información de violencia.
* Información de salud.
* Información penal.
* Datos patrimoniales.
* Estados de cuenta.
* Contraseñas.
* Datos de pago.
* Documentos probatorios.
* Estrategia jurídica.
* Comunicaciones abogado-cliente.
* Expedientes completos.

## 16. Notificación interna

Los incidentes medios, altos o críticos deberán notificarse internamente a los responsables correspondientes.

Podrán ser notificados:

* Dirección de LEX-IA.
* Responsable de privacidad.
* Responsable técnico.
* Administrador del sistema.
* Abogado interno o asesor legal.
* Responsable de atención al usuario.
* Responsable de proveedores.
* Responsable de seguridad.

La notificación interna deberá ser reservada y limitada a quienes necesiten conocer el incidente.

## 17. Notificación al usuario

Cuando el incidente pueda afectar significativamente los derechos, privacidad, seguridad o intereses del usuario, LEX-IA deberá evaluar la notificación al titular afectado.

La notificación podrá incluir:

* Descripción general del incidente.
* Fecha aproximada.
* Datos posiblemente afectados.
* Medidas adoptadas.
* Recomendaciones al usuario.
* Medio de contacto.
* Medidas para proteger su cuenta.
* Información sobre seguimiento.
* Derechos que puede ejercer.

La notificación no deberá revelar información que comprometa la seguridad de otros usuarios o de la investigación.

## 18. Notificación a autoridades

Cuando exista obligación legal o riesgo relevante, LEX-IA deberá evaluar la procedencia de notificar a la autoridad competente.

Esto podrá depender de:

* Tipo de datos afectados.
* Gravedad del incidente.
* Alcance.
* Legislación aplicable.
* Obligaciones contractuales.
* Participación de proveedores.
* Existencia de delitos.
* Requerimiento oficial.
* Posible afectación a titulares.

La decisión deberá documentarse.

## 19. Comunicación con abogados asignados

Si el incidente afecta un expediente con abogado asignado, LEX-IA deberá evaluar si informa al abogado responsable.

Esto puede ser necesario cuando:

* Se afectaron documentos del caso.
* Se alteró la bitácora.
* Se comprometió estrategia jurídica.
* Se perdieron documentos.
* Se requiere reconstruir expediente.
* Se requiere avisar al cliente.
* Se requiere ajustar acciones jurídicas.

La comunicación deberá ser limitada y confidencial.

## 20. Corrección técnica

Después de identificar la causa del incidente, LEX-IA deberá aplicar medidas correctivas.

Ejemplos:

* Corregir permisos.
* Cambiar configuración.
* Cerrar vulnerabilidad.
* Mejorar autenticación.
* Actualizar sistema.
* Eliminar enlace público.
* Corregir lógica de acceso.
* Reforzar validación de archivos.
* Mejorar registros.
* Restaurar respaldos.
* Revocar credenciales.
* Rotar claves.
* Actualizar políticas.
* Capacitar personal.
* Cambiar proveedor, si procede.

## 21. Restauración de información

Si hubo pérdida o alteración de datos, LEX-IA deberá evaluar restauración.

Fuentes posibles:

* Respaldos.
* Versiones anteriores.
* Bitácoras.
* Archivos cargados por usuario.
* Copias autorizadas.
* Registros técnicos.
* Documentos del abogado.
* Historial del expediente.

La restauración debe quedar registrada.

## 22. Bloqueo temporal de funciones

Durante un incidente, LEX-IA podrá bloquear temporalmente ciertas funciones.

Ejemplos:

* Carga documental.
* Descarga de documentos.
* Acceso a expedientes.
* Análisis por IA.
* Panel de abogado.
* Panel administrador.
* Mensajería.
* Pagos.
* Creación de expedientes.

El bloqueo deberá durar solo el tiempo necesario para proteger la información.

## 23. Manejo de incidentes con IA

Si el incidente involucra IA, se deberá revisar:

* Qué datos analizó la IA.
* Quién solicitó el análisis.
* Qué documentos fueron procesados.
* Si hubo autorización.
* Si el resultado fue compartido.
* Si el análisis fue incorrecto o riesgoso.
* Si se usaron datos para finalidad no autorizada.
* Si se generó contenido sensible indebidamente.
* Si se requiere borrar o bloquear el resultado.

La IA no deberá utilizarse para ocultar, alterar o borrar evidencia del incidente.

## 24. Incidentes con documentos

Cuando el incidente involucre documentos, se deberá revisar:

* Documento afectado.
* Expediente relacionado.
* Folio.
* Usuario que lo cargó.
* Usuario que accedió.
* Si fue visualizado.
* Si fue descargado.
* Si fue modificado.
* Si fue eliminado.
* Si contenía datos sensibles.
* Si existía respaldo.
* Si requiere bloqueo.

## 25. Incidentes con cuentas

Cuando el incidente involucre cuentas de usuario, se deberá revisar:

* Usuario afectado.
* Rol.
* Fecha de acceso sospechoso.
* Cambios realizados.
* Expedientes consultados.
* Documentos visualizados.
* Documentos descargados.
* Mensajes enviados.
* Pagos modificados.
* Datos actualizados.
* Necesidad de cambio de contraseña.
* Necesidad de bloqueo temporal.

## 26. Incidentes con abogados

Si el incidente involucra a un abogado, se deberá revisar:

* Expedientes asignados.
* Accesos recientes.
* Documentos descargados.
* Mensajes enviados.
* Cambios de estado.
* Relación con clientes.
* Posible incumplimiento profesional.
* Necesidad de suspensión.
* Necesidad de reasignar expedientes.
* Necesidad de notificar al cliente.

## 27. Incidentes con administradores

Si el incidente involucra una cuenta administrativa, se considerará de alto riesgo.

Medidas posibles:

* Bloqueo inmediato.
* Cambio de credenciales.
* Revisión de permisos.
* Auditoría completa.
* Revisión de accesos.
* Revisión de cambios realizados.
* Notificación interna prioritaria.
* Rotación de claves.
* Revisión de expedientes afectados.
* Evaluación de daño.

## 28. Cierre del incidente

Un incidente solo deberá cerrarse cuando:

* Se haya contenido.
* Se haya investigado.
* Se haya evaluado impacto.
* Se hayan aplicado correcciones.
* Se haya notificado cuando proceda.
* Se haya restaurado información, si aplica.
* Se hayan documentado acciones.
* Se hayan definido medidas preventivas.
* Se haya aprobado el cierre por responsable autorizado.

## 29. Informe final del incidente

Todo incidente medio, alto o crítico deberá contar con informe final.

El informe deberá incluir:

* Número de incidente.
* Fecha de detección.
* Fecha de cierre.
* Tipo de incidente.
* Nivel de riesgo.
* Descripción.
* Causa raíz.
* Datos afectados.
* Usuarios afectados.
* Expedientes afectados.
* Medidas de contención.
* Medidas correctivas.
* Notificaciones realizadas.
* Evidencia conservada.
* Recomendaciones.
* Responsable del cierre.

## 30. Medidas preventivas posteriores

Después de cerrar el incidente, LEX-IA deberá aplicar medidas para evitar repetición.

Ejemplos:

* Ajustar permisos.
* Mejorar controles.
* Actualizar políticas.
* Capacitar usuarios internos.
* Mejorar advertencias.
* Reforzar autenticación.
* Auditar accesos.
* Revisar proveedores.
* Agregar validaciones.
* Mejorar respaldos.
* Revisar código.
* Implementar alertas.

## 31. Capacitación interna

LEX-IA deberá capacitar a personal interno, abogados y soporte sobre:

* Protección de datos.
* Manejo de documentos.
* Uso de contraseñas.
* Reporte de incidentes.
* Confidencialidad.
* Permisos por rol.
* Riesgos de IA.
* Manejo de expedientes.
* Atención de usuarios.
* Protocolo de seguridad.

## 32. Simulacros

LEX-IA podrá realizar simulacros de incidentes.

Ejemplos:

* Cuenta comprometida.
* Error de permisos.
* Fuga documental.
* Pérdida de archivo.
* Ataque de malware.
* Descarga indebida.
* Acceso administrativo sospechoso.

Los simulacros permitirán probar tiempos de respuesta y mejorar el protocolo.

## 33. Registro histórico de incidentes

LEX-IA deberá conservar un registro histórico de incidentes.

El registro podrá incluir:

* Número de incidente.
* Tipo.
* Fecha.
* Nivel.
* Estado.
* Área responsable.
* Acciones aplicadas.
* Fecha de cierre.
* Medidas preventivas.

Este registro servirá para auditorías internas y mejora continua.

## 34. Confidencialidad del incidente

La información sobre incidentes deberá manejarse con confidencialidad.

No deberá compartirse con personas no autorizadas.

La comunicación deberá ser proporcional, necesaria y controlada.

## 35. Prohibiciones internas

Queda prohibido:

* Ocultar incidentes.
* Borrar evidencia.
* Alterar bitácoras.
* Culpar sin investigar.
* Notificar de forma irresponsable.
* Descargar documentos afectados sin autorización.
* Compartir información del incidente fuera de LEX-IA.
* Dejar incidentes sin cierre.
* Ignorar reportes de usuarios.
* Continuar usando credenciales comprometidas.
* Reactivar cuentas sin revisión.

## 36. Relación con otros documentos

Este protocolo se relaciona con:

* Aviso de Privacidad Integral.
* Términos y Condiciones de Uso.
* Política de Uso de Inteligencia Artificial.
* Política de Carga Documental.
* Política de Conservación y Eliminación de Datos.
* Seguridad y Protección de Datos Personales.
* Roles y Permisos.
* Modelo de Datos.
* Generador de Folios.
* Arquitectura Técnica.
* LEX-IA CASE.

## 37. Revisión del protocolo

Este protocolo deberá revisarse periódicamente.

La revisión deberá considerar:

* Nuevos riesgos.
* Nuevos módulos.
* IA documental real.
* Pagos.
* Cambios legales.
* Cambios técnicos.
* Incidentes ocurridos.
* Auditorías.
* Nuevos proveedores.
* Cambios en roles y permisos.

## 38. Conclusión

El protocolo de incidentes de seguridad es indispensable para LEX-IA.

Una plataforma jurídica no solo debe prevenir riesgos, también debe saber reaccionar cuando algo falla.

El principio rector será:

**Detectar rápido, contener de inmediato, investigar con orden, corregir con evidencia y prevenir la repetición.**
