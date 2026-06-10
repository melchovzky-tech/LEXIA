# Fase 1: Interfaz Pública de LEX-IA

## 1. Nombre del módulo

**LEX-IA – Interfaz pública de orientación jurídica inicial**

## 2. Propósito de la Fase 1

La Fase 1 de LEX-IA tiene como finalidad ofrecer al usuario una primera orientación jurídica mediante una interfaz pública, sencilla y guiada, sin necesidad de registro previo.

Esta fase funciona como una puerta de entrada al sistema, donde el usuario puede describir su problema, seleccionar el tipo de asunto, responder preguntas básicas y recibir una lectura preliminar del caso.

El objetivo principal no es sustituir a un abogado, sino ayudar a clasificar el problema jurídico, identificar la posible rama del derecho aplicable, conocer la jurisdicción preliminar y organizar la información inicial del usuario.

## 3. Alcance de la Fase 1

En esta primera fase, LEX-IA permite:

* Seleccionar un tipo de problema jurídico.
* Responder un cuestionario guiado.
* Identificar la materia jurídica del caso.
* Registrar el estado de la República donde ocurre el asunto.
* Generar un diagnóstico jurídico preliminar.
* Crear un expediente inicial.
* Cargar documentos en PDF o imagen.
* Simular un análisis preliminar documental.
* Descargar un resumen del expediente inicial en archivo de texto.

Esta fase se encuentra orientada a la recepción inicial del caso, no al seguimiento formal del proceso jurídico.

## 4. Materias incluidas en la versión inicial

La interfaz pública de LEX-IA contempla, en esta etapa, cuatro tipos de asuntos:

### 4.1 Despido injustificado

Permite identificar si el usuario puede encontrarse ante un posible despido injustificado, terminación laboral controvertida, renuncia voluntaria, falta de pago o conflicto laboral vigente.

### 4.2 Divorcio

Permite distinguir si el asunto puede tratarse de un divorcio voluntario, divorcio contencioso o asunto familiar relacionado con hijos, bienes, acuerdos o conflicto entre las partes.

### 4.3 Pensión alimenticia

Permite identificar si el asunto corresponde a solicitud inicial, modificación, seguimiento o incumplimiento de pensión alimenticia.

### 4.4 Sucesión

Permite identificar si el asunto puede corresponder a una sucesión testamentaria, intestamentaria o a una situación patrimonial familiar pendiente de clasificación.

## 5. Flujo general de la interfaz pública

El flujo actual de la Fase 1 es el siguiente:

1. El usuario ingresa a la página pública de LEX-IA.
2. Selecciona el tipo de problema jurídico.
3. Responde preguntas guiadas.
4. El sistema identifica la materia jurídica.
5. El sistema registra la jurisdicción preliminar.
6. LEX-IA genera un diagnóstico preliminar.
7. El usuario puede crear un expediente inicial.
8. El usuario puede cargar documentos en PDF o imagen.
9. LEX-IA realiza una lectura documental preliminar simulada.
10. El usuario puede descargar el expediente inicial.

## 6. Diagnóstico preliminar

El diagnóstico preliminar se genera con base en las respuestas proporcionadas por el usuario.

El sistema analiza elementos como:

* Tipo de asunto.
* Forma en que ocurrió el problema.
* Existencia de documentos o pruebas.
* Estado de la República donde ocurre el caso.
* Nivel de atención requerido.
* Documentos sugeridos.
* Advertencias relevantes.
* Recomendación inicial.

El diagnóstico puede clasificar el nivel de atención como bajo, medio o alto, dependiendo de las respuestas del usuario.

## 7. Jurisdicción preliminar

LEX-IA solicita al usuario indicar el estado de la República donde ocurre el asunto.

Esto es importante porque algunas materias, como divorcio, pensión alimenticia y sucesión, dependen de la legislación civil, familiar y procesal de cada estado.

En materia laboral, aunque la regulación principal es federal, también es importante identificar la ubicación del asunto para efectos de competencia y autoridad aplicable.

La jurisdicción registrada en esta fase es preliminar y debe ser confirmada posteriormente mediante revisión profesional.

## 8. Expediente inicial

El expediente inicial de LEX-IA reúne la información básica generada durante la consulta pública.

Incluye:

* Tipo de expediente.
* Jurisdicción preliminar.
* Materia jurídica.
* Normativa a revisar.
* Problema identificado.
* Nivel de atención.
* Respuestas del usuario.
* Documentos sugeridos.
* Documentos integrados.
* Análisis preliminar documental.
* Recomendación inicial.
* Estado del expediente.

Este expediente no constituye todavía un expediente jurídico formal, sino un resumen organizado para facilitar la revisión posterior.

## 9. Estados activos del expediente

La interfaz muestra estados visuales del expediente, entre ellos:

* Diagnóstico generado.
* Jurisdicción registrada.
* Documentos pendientes.
* Documentos integrados.
* Análisis documental pendiente.
* Documentos analizados.
* Expediente inicial creado.
* Revisión profesional pendiente.

Estos estados permiten que el usuario visualice el avance inicial de su caso dentro de la plataforma.

## 10. Carga de documentos

La Fase 1 permite cargar documentos en formato PDF o imagen.

Los documentos pueden ser, entre otros:

* Contratos.
* Recibos de nómina.
* Renuncias.
* Avisos laborales.
* Actas de matrimonio.
* Actas de nacimiento.
* Sentencias.
* Convenios.
* Actas de defunción.
* Testamentos.
* Escrituras.
* Documentos de propiedad.

En esta versión local, los archivos no se envían a un servidor. Únicamente se enlistan dentro de la página y se registran en el expediente descargado.

## 11. Análisis preliminar documental

LEX-IA realiza una simulación de lectura documental preliminar.

Actualmente, el sistema identifica posibles tipos de documentos con base en:

* Nombre del archivo.
* Tipo de archivo.
* Extensión del archivo.
* Relación probable con la materia seleccionada.

Por ejemplo, si el usuario carga un archivo llamado “contrato_trabajo.pdf”, el sistema puede identificarlo como posible contrato y sugerir revisar firmas, fechas, partes involucradas y cláusulas relevantes.

Si el usuario carga un archivo llamado “acta_matrimonio.pdf”, el sistema puede identificarlo como posible acta de matrimonio y relacionarlo con un asunto familiar.

Esta lectura todavía no interpreta el contenido real del documento.

## 12. Límites de la Fase 1

La Fase 1 tiene límites importantes:

* No sustituye la asesoría jurídica profesional.
* No genera una opinión jurídica definitiva.
* No interpreta todavía el contenido real de PDFs o imágenes.
* No almacena documentos en servidor.
* No crea usuarios registrados.
* No genera folios privados.
* No maneja claves de acceso.
* No permite seguimiento formal del expediente.
* No asigna abogado real.
* No permite pagos ni contratación formal.
* No reemplaza la revisión documental de un abogado.

La finalidad de esta fase es orientar, clasificar y organizar información inicial.

## 13. Diferencia entre Fase 1 y Fase 2

La Fase 1 corresponde a la interfaz pública de orientación inicial.

La Fase 2 corresponderá al interior de la aplicación, una vez que el usuario haya decidido continuar y se registre formalmente.

En la Fase 2 se desarrollará el módulo **LEX-IA CASE**, que incluirá:

* Registro del cliente.
* Folio único de expediente.
* Clave de acceso.
* Panel privado del cliente.
* Panel privado del abogado.
* Carga real y segura de documentos.
* Historial del expediente.
* Bitácora de actuaciones.
* Seguimiento por etapas.
* Abogado asignado.
* Cambio de abogado sin pérdida del expediente.
* Control de acceso.
* Notificaciones.
* Seguimiento de pagos.
* Revisión profesional formal.

## 14. Folio único en fase posterior

El folio único no se implementa todavía en la interfaz pública porque corresponde a una etapa posterior.

El folio será necesario cuando el cliente ya esté registrado y el asunto haya sido aceptado para seguimiento profesional.

Un ejemplo de folio futuro podría ser:

**LEX-IA-LAB-GRO-2026-000014**

Donde:

* **LEX-IA** identifica la plataforma.
* **LAB** identifica la materia laboral.
* **GRO** identifica la jurisdicción de Guerrero.
* **2026** identifica el año.
* **000014** identifica el número consecutivo del expediente.

El folio permitirá que el cliente consulte su expediente, suba documentos, descargue actuaciones y dé seguimiento a su caso de manera segura.

## 15. Continuidad del expediente ante cambio de abogado

Uno de los objetivos principales de LEX-IA CASE será evitar que el cliente pierda el control de su asunto si el abogado abandona el caso, deja de responder o no continúa con la representación.

Mediante el folio, la bitácora y el expediente digital, otro abogado podrá revisar el historial del caso y retomarlo con mayor facilidad.

Esto permitirá:

* Mayor transparencia.
* Continuidad del servicio.
* Protección del cliente.
* Control documental.
* Reducción de pérdida de información.
* Mejor supervisión del avance jurídico.

## 16. Valor estratégico de la Fase 1

La Fase 1 es importante porque permite validar la experiencia inicial del usuario.

También permite demostrar que LEX-IA puede:

* Recibir problemas jurídicos.
* Clasificar asuntos.
* Hacer preguntas relevantes.
* Generar diagnóstico preliminar.
* Ordenar información.
* Simular expediente.
* Recibir documentos.
* Producir una primera lectura documental.
* Preparar el camino hacia una revisión profesional.

Esta fase sirve como prototipo funcional para presentar la idea, probar el flujo y avanzar hacia el desarrollo de una aplicación más robusta.

## 17. Estado actual de desarrollo

La Fase 1 se encuentra implementada como prototipo local en la carpeta:

**landing/**

Los archivos principales son:

* **index.html**
* **styles.css**
* **script.js**

Actualmente funciona en navegador mediante archivos locales o servidor de desarrollo como Live Server.

## 18. Siguiente etapa recomendada

Después de consolidar esta fase, el siguiente paso será diseñar formalmente la Fase 2:

**LEX-IA CASE – Expediente privado con folio, acceso seguro y seguimiento profesional.**

Esta fase requerirá:

* Backend.
* Base de datos.
* Sistema de usuarios.
* Seguridad.
* Almacenamiento documental.
* Panel de cliente.
* Panel de abogado.
* Control de permisos.
* Integración de IA documental real.
* Protección de datos personales.
* Aviso de privacidad.
* Registro de actuaciones.
* Trazabilidad del expediente.

## 19. Conclusión

La Fase 1 de LEX-IA representa la entrada pública del sistema y permite transformar una consulta jurídica desordenada en una orientación preliminar estructurada.

Su propósito es guiar al usuario, identificar la materia jurídica, organizar información básica, sugerir documentos y preparar el camino para una revisión profesional.

Esta fase no pretende resolver de manera definitiva el asunto jurídico, sino establecer una base clara para decidir si el usuario debe continuar hacia una etapa formal de representación, seguimiento y expediente privado dentro de LEX-IA CASE.
