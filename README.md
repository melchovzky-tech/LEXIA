# LEX-IA

## Asistente Jurídico Inteligente

**LEX-IA** es una plataforma jurídica digital mexicana diseñada para brindar orientación, organización, representación y seguimiento jurídico mediante inteligencia artificial, expedientes digitales y conexión con abogados profesionales.

Su objetivo principal es transformar la manera en que las personas acceden a servicios jurídicos, reduciendo la desconfianza, la pérdida de información y la falta de seguimiento entre cliente y abogado.

---

## Frase central

**Orientación, representación y seguimiento jurídico en un solo lugar.**

---

## Propósito del proyecto

LEX-IA busca resolver un problema común en el sector jurídico: muchas personas no saben qué tipo de problema legal tienen, qué documentos necesitan, ante qué autoridad acudir, cuánto puede costar su asunto o cómo dar seguimiento a su caso una vez que contratan a un abogado.

La plataforma pretende ofrecer una entrada clara, ordenada y accesible para que el usuario pueda:

* Explicar su problema.
* Identificar la rama del derecho aplicable.
* Recibir orientación preliminar.
* Integrar documentos.
* Obtener una primera lectura documental.
* Decidir si desea continuar con revisión profesional.
* Dar seguimiento a su caso mediante expediente digital.
* Conservar continuidad del asunto aun si cambia de abogado.

---

## Visión general

LEX-IA no se limita a ser un chatbot jurídico. El proyecto se estructura como una plataforma integral compuesta por distintos módulos:

* **LEX-IA IA:** orientación inicial, clasificación del asunto, preguntas guiadas y apoyo documental.
* **LEX-IA CASE:** expediente digital, folios, seguimiento, bitácora, documentos y continuidad del caso.
* **LEX-IA PAY:** pagos por etapas, control de hitos, comisiones y transparencia económica.
* **Red de abogados:** profesionistas validados para revisión, asesoría y representación.
* **Panel administrativo:** supervisión de calidad, cumplimiento, expedientes y usuarios.

---

## Estado actual del proyecto

Actualmente el proyecto se encuentra en etapa de prototipo inicial y documentación estratégica.

La primera versión funcional se encuentra en:

```text
landing/
```

Archivos principales:

```text
landing/index.html
landing/styles.css
landing/script.js
```

Esta versión permite ejecutar una interfaz pública local con diagnóstico preliminar, expediente inicial, carga documental y análisis documental simulado.

---

## Fase 1: Interfaz pública de orientación inicial

La **Fase 1** corresponde a la entrada pública de LEX-IA.

En esta fase el usuario todavía no necesita registrarse formalmente. El objetivo es recibir, ordenar y clasificar su problema jurídico.

Funciones implementadas en la Fase 1:

* Selección del tipo de problema jurídico.
* Cuestionario guiado.
* Identificación de materia jurídica.
* Registro de jurisdicción por estado.
* Diagnóstico preliminar.
* Nivel de atención.
* Documentos sugeridos.
* Expediente inicial.
* Carga de documentos PDF o imagen.
* Análisis preliminar documental simulado.
* Descarga del expediente inicial en archivo de texto.

Materias contempladas actualmente:

* Despido injustificado.
* Divorcio.
* Pensión alimenticia.
* Sucesión.

Documento relacionado:

```text
mvp/fase_1_interfaz_publica.md
```

---

## Fase 2: LEX-IA CASE

La **Fase 2** corresponde al interior de la aplicación.

Esta fase iniciará cuando el usuario decida continuar con revisión profesional o representación legal.

LEX-IA CASE incluirá:

* Registro de cliente.
* Folio único de expediente.
* Acceso seguro.
* Panel privado del cliente.
* Panel privado del abogado.
* Carga segura de documentos.
* Bitácora de actuaciones.
* Historial del caso.
* Estados del expediente.
* Abogado asignado.
* Cambio de abogado sin pérdida del expediente.
* Seguimiento por etapas.
* Revisión profesional.
* Control documental.
* Posible integración con pagos por avance.

Documento relacionado:

```text
mvp/fase_2_lexia_case.md
```

---

## Modelo de doble interfaz

LEX-IA se proyecta como una plataforma de doble interfaz, similar a modelos digitales donde existe un espacio para quien solicita el servicio y otro para quien lo presta.

En LEX-IA existirán:

```text
Interfaz pública
Panel privado del cliente
Panel privado del abogado
Panel administrador de LEX-IA
```

Este modelo permitirá que:

* El cliente consulte su expediente.
* El abogado administre sus casos.
* LEX-IA supervise calidad, tiempos y cumplimiento.
* El expediente conserve continuidad aunque cambie el abogado.
* Se reduzca la pérdida de documentos e información.
* Se fortalezca la confianza entre cliente, abogado y plataforma.

Documento relacionado:

```text
business/modelo_plataforma_doble_interfaz.md
```

---

## Folio único de expediente

En una fase posterior, cada expediente contará con un folio único.

Ejemplo:

```text
LEX-IA-LAB-GRO-2026-000014
```

Donde:

* **LEX-IA** identifica la plataforma.
* **LAB** identifica la materia laboral.
* **GRO** identifica la jurisdicción.
* **2026** identifica el año.
* **000014** identifica el número consecutivo del expediente.

El folio permitirá consultar, retomar y dar seguimiento al expediente dentro del sistema.

---

## Continuidad del caso

Uno de los valores centrales de LEX-IA es evitar que el usuario pierda el control de su asunto si el abogado abandona el caso, deja de responder o no puede continuar.

Mediante expediente digital, folio, bitácora y documentos cargados, otro abogado podrá retomar el asunto con mayor facilidad.

Esto permitirá:

* Mayor transparencia.
* Mejor control documental.
* Continuidad del expediente.
* Protección del cliente.
* Seguimiento verificable.
* Reducción de pérdida de información.
* Mejor supervisión de la plataforma.

---

## Estructura del repositorio

```text
LEXIA/
├── assets/
│   └── branding/
├── business/
├── design/
├── docs/
├── landing/
├── legal/
├── mvp/
├── research/
└── README.md
```

---

## Carpetas principales

### assets/

Contiene recursos visuales, logotipos, imágenes de marca y elementos gráficos del proyecto.

### business/

Contiene documentos relacionados con modelo de negocio, propuesta de valor, estructura de plataforma, inversionistas, operación y estrategia.

Documentos destacados:

```text
business/modelo_negocio.md
business/plan_negocio.md
business/lexia_case.md
business/lexia_pay.md
business/modelo_plataforma_doble_interfaz.md
```

### design/

Contiene documentos de identidad visual, concepto gráfico, lineamientos de marca y diseño de interfaz.

Documentos destacados:

```text
design/identidad_visual.md
design/concepto_logo_final.md
```

### docs/

Contiene documentos generales del proyecto, visión, objetivos y explicación institucional.

Documentos destacados:

```text
docs/vision.md
docs/objetivos.md
```

### landing/

Contiene el prototipo funcional de la interfaz pública.

Archivos principales:

```text
landing/index.html
landing/styles.css
landing/script.js
```

### legal/

Contiene documentos relacionados con marco jurídico, privacidad, marca, dominio, cumplimiento y soporte legal del proyecto.

Documentos destacados:

```text
legal/marco_juridico.md
legal/registro_marca_dominio.md
```

### mvp/

Contiene documentos funcionales del producto mínimo viable.

Documentos destacados:

```text
mvp/fase_1_interfaz_publica.md
mvp/fase_2_lexia_case.md
mvp/casos_uso.md
mvp/flujo_usuario.md
mvp/requisitos_funcionales.md
mvp/pantallas_app.md
```

### research/

Contiene investigación, árboles de decisión, motor de reglas, base de conocimiento y lógica preliminar del sistema.

Documentos destacados:

```text
research/arboles_decision.md
research/motor_decisiones.md
research/base_conocimiento_lexia.md
research/calculadora_indemnizacion.md
```

---

## Funciones actuales del prototipo

La interfaz pública actual permite:

1. Seleccionar un problema jurídico.
2. Responder preguntas iniciales.
3. Registrar estado de la República.
4. Generar diagnóstico preliminar.
5. Crear expediente inicial.
6. Cargar documentos en PDF o imagen.
7. Simular análisis preliminar documental.
8. Visualizar estados del expediente.
9. Descargar resumen del expediente inicial.

---

## Límites actuales

La versión actual es un prototipo local.

Todavía no incluye:

* Backend.
* Base de datos.
* Login.
* Registro de usuarios.
* Folio real.
* Almacenamiento seguro de documentos.
* Lectura real de PDFs o imágenes.
* OCR.
* IA documental real.
* Panel privado del cliente.
* Panel privado del abogado.
* Panel administrador.
* Pagos.
* Asignación real de abogados.

---

## Principio de responsabilidad

LEX-IA debe operar bajo un principio claro:

**La inteligencia artificial orienta, organiza y apoya; la revisión profesional valida, interpreta y representa.**

La plataforma no debe prometer resultados jurídicos ni sustituir la responsabilidad profesional del abogado.

---

## Valor estratégico

LEX-IA busca diferenciarse por:

* Orientación jurídica accesible.
* Organización del caso desde el primer contacto.
* Expediente digital.
* Folio único.
* Continuidad del asunto.
* Control documental.
* Seguimiento por etapas.
* Transparencia entre cliente y abogado.
* Red de profesionistas.
* Apoyo de inteligencia artificial.
* Posible modelo de pagos por avance.

---

## Próximos pasos

Los siguientes pasos recomendados son:

1. Consolidar documentación de Fase 1.
2. Consolidar documentación de Fase 2.
3. Diseñar panel privado del cliente.
4. Diseñar panel privado del abogado.
5. Crear arquitectura técnica para backend.
6. Definir base de datos de expedientes.
7. Diseñar folio único.
8. Crear sistema de usuarios.
9. Implementar carga documental segura.
10. Integrar IA documental real.
11. Crear panel administrador.
12. Diseñar LEX-IA PAY.

---

## Estado del desarrollo

```text
Fase 1: Prototipo funcional local
Fase 2: Documentación funcional iniciada
Backend: Pendiente
Base de datos: Pendiente
Usuarios: Pendiente
IA documental real: Pendiente
Panel abogado: Pendiente
Panel cliente: Pendiente
Panel administrador: Pendiente
Pagos: Pendiente
```

---

## Conclusión

LEX-IA es un proyecto orientado a construir una plataforma jurídica digital capaz de guiar al usuario desde una primera consulta hasta el seguimiento organizado de un expediente.

La visión del proyecto es resolver la falta de claridad, confianza y continuidad en la relación entre cliente y abogado.

La Fase 1 permite recibir y clasificar el problema.

La Fase 2 permitirá dar seguimiento formal mediante folios, usuarios, documentos, abogados y control de etapas.

El objetivo final es que LEX-IA funcione como una plataforma confiable, ordenada y transparente para acceder a servicios jurídicos en México.
