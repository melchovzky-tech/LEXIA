const estadosMexico = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
];

const preguntaEstado = {
  id: "estado",
  texto: "¿En qué estado de la República ocurre el asunto?",
  tipo: "select",
  opciones: estadosMexico
};

const casos = {
  despido: {
    titulo: "Despido injustificado",
    descripcion:
      "Responde estas preguntas para que LEX-IA identifique si existe un posible conflicto laboral, terminación voluntaria o falta de pago de prestaciones.",
    materia: "Derecho laboral",
    expediente: "Expediente laboral inicial",
    normativa: "Ley Federal del Trabajo y criterios laborales aplicables.",
    documentosBase: [
      "Identificación oficial",
      "Contrato de trabajo, si existe",
      "Recibos de nómina",
      "Mensajes, correos o pruebas de comunicación con el patrón",
      "Comprobantes de pago",
      "Datos de testigos"
    ],
    preguntas: [
      preguntaEstado,
      {
        id: "tiempo",
        texto: "¿Cuánto tiempo trabajaste?",
        tipo: "text",
        placeholder: "Ejemplo: 2 años y 6 meses"
      },
      {
        id: "salario",
        texto: "¿Cuál era tu salario mensual aproximado?",
        tipo: "text",
        placeholder: "Ejemplo: $15,000 MXN"
      },
      {
        id: "formaTerminacion",
        texto: "¿Cómo terminó la relación laboral?",
        tipo: "select",
        opciones: [
          "Me despidieron verbalmente",
          "Me dieron aviso por escrito",
          "Me impidieron entrar a trabajar",
          "Me dejaron de llamar",
          "Renuncié voluntariamente",
          "Firmé renuncia, pero me presionaron",
          "Aún trabajo ahí"
        ]
      },
      {
        id: "pago",
        texto: "¿Te pagaron finiquito o liquidación?",
        tipo: "select",
        opciones: [
          "Sí, me pagaron completo",
          "No me pagaron nada",
          "Solo me pagaron una parte",
          "No sé si fue finiquito o liquidación",
          "Aún no termina la relación laboral"
        ]
      },
      {
        id: "pruebas",
        texto: "¿Qué pruebas tienes?",
        tipo: "select",
        opciones: [
          "Contrato",
          "Recibos de nómina",
          "Mensajes o correos",
          "Testigos",
          "Transferencias bancarias",
          "No tengo pruebas"
        ]
      }
    ]
  },

  divorcio: {
    titulo: "Divorcio",
    descripcion:
      "Responde estas preguntas para identificar si el asunto parece un divorcio voluntario, contencioso o con temas familiares adicionales.",
    materia: "Derecho familiar",
    expediente: "Expediente familiar de divorcio",
    normativa:
      "Código Civil, Código Familiar y legislación procesal aplicable según el estado.",
    documentosBase: [
      "Acta de matrimonio",
      "Identificaciones oficiales",
      "Actas de nacimiento de hijos, si existen",
      "Comprobantes de domicilio",
      "Documentos de bienes en común",
      "Convenio propuesto, si ambas partes están de acuerdo"
    ],
    preguntas: [
      preguntaEstado,
      {
        id: "matrimonio",
        texto: "¿Existe matrimonio civil?",
        tipo: "select",
        opciones: ["Sí", "No", "No estoy seguro"]
      },
      {
        id: "hijos",
        texto: "¿Tienen hijos menores de edad?",
        tipo: "select",
        opciones: ["Sí", "No"]
      },
      {
        id: "bienes",
        texto: "¿Existen bienes en común?",
        tipo: "select",
        opciones: ["Sí", "No", "No estoy seguro"]
      },
      {
        id: "acuerdo",
        texto: "¿Ambas partes están de acuerdo en divorciarse?",
        tipo: "select",
        opciones: ["Sí", "No", "Parcialmente"]
      },
      {
        id: "conflicto",
        texto: "¿Existe violencia, abandono o conflicto grave?",
        tipo: "select",
        opciones: ["Sí", "No", "Prefiero no decirlo"]
      }
    ]
  },

  pension: {
    titulo: "Pensión alimenticia",
    descripcion:
      "Responde estas preguntas para identificar si se trata de solicitud, modificación o incumplimiento de pensión alimenticia.",
    materia: "Derecho familiar",
    expediente: "Expediente de alimentos",
    normativa:
      "Código Civil, Código Familiar y legislación procesal aplicable según el estado.",
    documentosBase: [
      "Actas de nacimiento de los hijos",
      "Identificación oficial",
      "Comprobantes de gastos",
      "Comprobantes de ingresos",
      "Mensajes o acuerdos previos",
      "Sentencia o convenio, si ya existe"
    ],
    preguntas: [
      preguntaEstado,
      {
        id: "beneficiario",
        texto: "¿La pensión es para hijos menores de edad?",
        tipo: "select",
        opciones: ["Sí", "No", "También para cónyuge"]
      },
      {
        id: "trabajo",
        texto: "¿La persona obligada trabaja formalmente?",
        tipo: "select",
        opciones: ["Sí", "No", "No lo sé"]
      },
      {
        id: "convenio",
        texto: "¿Ya existe convenio o sentencia de pensión?",
        tipo: "select",
        opciones: ["Sí", "No", "Está en trámite"]
      },
      {
        id: "incumplimiento",
        texto: "¿Ha dejado de pagar o paga incompleto?",
        tipo: "select",
        opciones: ["Sí", "No", "Paga irregularmente"]
      },
      {
        id: "gastos",
        texto: "¿Tienes comprobantes de gastos?",
        tipo: "select",
        opciones: ["Sí", "No", "Algunos"]
      }
    ]
  },

  sucesion: {
    titulo: "Sucesión",
    descripcion:
      "Responde estas preguntas para identificar si el asunto puede ser una sucesión testamentaria o intestamentaria.",
    materia: "Derecho sucesorio / familiar",
    expediente: "Expediente sucesorio inicial",
    normativa:
      "Código Civil, Código Familiar y legislación procesal aplicable según el estado.",
    documentosBase: [
      "Acta de defunción",
      "Testamento, si existe",
      "Actas de nacimiento de posibles herederos",
      "Identificaciones oficiales",
      "Escrituras o documentos de propiedad",
      "Acta de matrimonio, si aplica"
    ],
    preguntas: [
      preguntaEstado,
      {
        id: "testamento",
        texto: "¿La persona fallecida dejó testamento?",
        tipo: "select",
        opciones: ["Sí", "No", "No lo sé"]
      },
      {
        id: "bienes",
        texto: "¿Existen bienes, casa, terreno, vehículo o cuentas?",
        tipo: "select",
        opciones: ["Sí", "No", "No estoy seguro"]
      },
      {
        id: "herederos",
        texto: "¿Hay varios posibles herederos?",
        tipo: "select",
        opciones: ["Sí", "No", "No lo sé"]
      },
      {
        id: "conflicto",
        texto: "¿Existe conflicto familiar por los bienes?",
        tipo: "select",
        opciones: ["Sí", "No", "Puede existir"]
      },
      {
        id: "documentos",
        texto: "¿Tienes acta de defunción o documentos de propiedad?",
        tipo: "select",
        opciones: ["Sí", "No", "Tengo algunos documentos"]
      }
    ]
  }
};

let casoActual = null;
let tipoCasoActual = null;
let ultimoAnalisis = null;
let ultimasRespuestas = null;
let documentosCargados = [];
let ultimoAnalisisDocumental = null;

function cargarCaso(tipo) {
  casoActual = casos[tipo];
  tipoCasoActual = tipo;
  ultimoAnalisis = null;
  ultimasRespuestas = null;
  documentosCargados = [];
  ultimoAnalisisDocumental = null;

  const entrevista = document.getElementById("entrevista");
  const titulo = document.getElementById("titulo-caso");
  const descripcion = document.getElementById("descripcion-caso");
  const formulario = document.getElementById("formulario-caso");
  const diagnostico = document.getElementById("diagnostico");
  const expediente = document.getElementById("expediente");

  titulo.textContent = casoActual.titulo;
  descripcion.textContent = casoActual.descripcion;

  formulario.innerHTML = "";
  diagnostico.innerHTML = "";
  expediente.innerHTML = "";

  diagnostico.style.display = "none";
  expediente.style.display = "none";

  casoActual.preguntas.forEach((pregunta) => {
    const label = document.createElement("label");
    label.textContent = pregunta.texto;

    let campo;

    if (pregunta.tipo === "select") {
      campo = document.createElement("select");

      const opcionInicial = document.createElement("option");
      opcionInicial.textContent = "Selecciona una opción";
      opcionInicial.value = "";
      campo.appendChild(opcionInicial);

      pregunta.opciones.forEach((opcion) => {
        const option = document.createElement("option");
        option.textContent = opcion;
        option.value = opcion;
        campo.appendChild(option);
      });
    } else {
      campo = document.createElement("input");
      campo.type = "text";
      campo.placeholder = pregunta.placeholder || "";
    }

    campo.name = pregunta.id;
    label.appendChild(campo);
    formulario.appendChild(label);
  });

  const botonDiagnostico = document.createElement("button");
  botonDiagnostico.type = "button";
  botonDiagnostico.className = "btn primary";
  botonDiagnostico.textContent = "Generar diagnóstico preliminar";
  botonDiagnostico.onclick = generarDiagnostico;

  formulario.appendChild(botonDiagnostico);

  entrevista.style.display = "block";
  entrevista.scrollIntoView({ behavior: "smooth" });
}

function obtenerRespuestas() {
  const formulario = document.getElementById("formulario-caso");
  const datos = new FormData(formulario);
  const respuestas = {};

  for (const [clave, valor] of datos.entries()) {
    respuestas[clave] = valor;
  }

  return respuestas;
}

function contarRespuestasVacias(respuestas) {
  let vacias = 0;

  casoActual.preguntas.forEach((pregunta) => {
    if (!respuestas[pregunta.id]) {
      vacias++;
    }
  });

  return vacias;
}

function generarDiagnostico() {
  if (!casoActual || !tipoCasoActual) return;

  const respuestas = obtenerRespuestas();
  const vacias = contarRespuestasVacias(respuestas);

  if (vacias > 0) {
    alert("Por favor responde todas las preguntas para generar una orientación preliminar.");
    return;
  }

  let analisis;

  if (tipoCasoActual === "despido") {
    analisis = analizarDespido(respuestas);
  }

  if (tipoCasoActual === "divorcio") {
    analisis = analizarDivorcio(respuestas);
  }

  if (tipoCasoActual === "pension") {
    analisis = analizarPension(respuestas);
  }

  if (tipoCasoActual === "sucesion") {
    analisis = analizarSucesion(respuestas);
  }

  ultimoAnalisis = analisis;
  ultimasRespuestas = respuestas;

  mostrarDiagnostico(analisis);
}

function analizarDespido(r) {
  let puntos = 0;
  const hallazgos = [];
  const advertencias = [];
  const documentos = [...casoActual.documentosBase];

  hallazgos.push(`Jurisdicción preliminar indicada por el usuario: ${r.estado}.`);
  hallazgos.push("La materia laboral se rige principalmente por legislación federal, sin perjuicio de la competencia y autoridades aplicables según la ubicación del asunto.");

  if (
    r.formaTerminacion === "Me despidieron verbalmente" ||
    r.formaTerminacion === "Me impidieron entrar a trabajar" ||
    r.formaTerminacion === "Me dejaron de llamar"
  ) {
    puntos += 3;
    hallazgos.push("La forma de terminación reportada puede ser compatible con un posible despido.");
  }

  if (r.formaTerminacion === "Me dieron aviso por escrito") {
    puntos += 2;
    hallazgos.push("Existe un aviso por escrito que debe revisarse para determinar su validez y contenido.");
    documentos.push("Aviso, carta o documento entregado por el patrón");
  }

  if (r.formaTerminacion === "Firmé renuncia, pero me presionaron") {
    puntos += 3;
    hallazgos.push("La renuncia firmada bajo presión requiere revisión especial, porque podría existir controversia sobre la voluntad del trabajador.");
    documentos.push("Renuncia firmada");
    documentos.push("Mensajes, audios o testigos sobre la presión recibida");
  }

  if (r.formaTerminacion === "Renuncié voluntariamente") {
    puntos -= 3;
    hallazgos.push("La respuesta indica una posible terminación voluntaria, por lo que no debe presumirse automáticamente un despido injustificado.");
    documentos.push("Renuncia firmada");
    documentos.push("Comprobante de finiquito");
  }

  if (r.formaTerminacion === "Aún trabajo ahí") {
    puntos -= 4;
    hallazgos.push("Si la relación laboral continúa vigente, no se configura inicialmente un despido; podría tratarse de otro conflicto laboral.");
  }

  if (r.pago === "No me pagaron nada") {
    puntos += 3;
    hallazgos.push("La falta total de pago al terminar la relación aumenta el nivel de atención.");
  }

  if (r.pago === "Solo me pagaron una parte") {
    puntos += 2;
    hallazgos.push("El pago parcial requiere revisar si corresponde a finiquito, liquidación o prestaciones pendientes.");
  }

  if (r.pago === "No sé si fue finiquito o liquidación") {
    puntos += 1;
    hallazgos.push("Existe incertidumbre sobre el tipo de pago recibido; se recomienda revisar recibos o documentos firmados.");
  }

  if (r.pago === "Sí, me pagaron completo") {
    puntos -= 1;
    hallazgos.push("El pago completo reduce el nivel inicial de riesgo, aunque debe revisarse qué conceptos fueron cubiertos.");
  }

  if (r.pruebas === "No tengo pruebas") {
    puntos += 1;
    advertencias.push("La falta de pruebas puede dificultar la estrategia, pero no impide iniciar una revisión preliminar.");
  } else {
    puntos += 1;
    hallazgos.push("El usuario refiere contar con algún elemento probatorio que puede ayudar a integrar el expediente.");
  }

  let problema = "";
  let recomendacion = "";
  let nivel = "";

  if (r.formaTerminacion === "Aún trabajo ahí") {
    problema = "No se advierte inicialmente despido; podría existir un conflicto laboral vigente.";
    recomendacion = "Identificar si el problema es falta de pago, hostigamiento, modificación de condiciones laborales o riesgo de despido.";
    nivel = "Bajo / Medio";
  } else if (r.formaTerminacion === "Renuncié voluntariamente" && r.pago === "Sí, me pagaron completo") {
    problema = "No se advierte inicialmente un despido injustificado; podría tratarse de una terminación voluntaria.";
    recomendacion = "Revisar documentos firmados, conceptos pagados y verificar que no existan prestaciones pendientes.";
    nivel = "Bajo";
  } else if (puntos >= 5) {
    problema = "Posible despido injustificado o terminación laboral controvertida.";
    recomendacion = "Integrar expediente laboral, revisar pruebas, pagos recibidos y documentos firmados antes de definir estrategia.";
    nivel = "Alto";
  } else if (puntos >= 2) {
    problema = "Posible conflicto laboral que requiere revisión documental.";
    recomendacion = "Revisar comprobantes de pago, comunicaciones y documentos laborales para confirmar si procede reclamo.";
    nivel = "Medio";
  } else {
    problema = "Con los datos proporcionados, no se advierte de forma clara un despido injustificado.";
    recomendacion = "Revisar si existen prestaciones pendientes, documentos firmados o algún acto patronal irregular.";
    nivel = "Bajo / Medio";
  }

  return crearAnalisisBase(r.estado, problema, nivel, recomendacion, hallazgos, advertencias, documentos);
}

function analizarDivorcio(r) {
  let puntos = 0;
  const hallazgos = [];
  const advertencias = [];
  const documentos = [...casoActual.documentosBase];

  hallazgos.push(`Jurisdicción preliminar indicada por el usuario: ${r.estado}.`);
  advertencias.push("En materia familiar, los requisitos y procedimientos pueden variar según el estado. Debe revisarse legislación civil, familiar y procesal local.");

  if (r.matrimonio === "No") {
    return crearAnalisisBase(
      r.estado,
      "No se advierte inicialmente un divorcio, porque el usuario indica que no existe matrimonio civil.",
      "Bajo",
      "Revisar si el asunto corresponde a separación de hecho, concubinato, custodia, alimentos o liquidación de bienes.",
      [
        "Para que exista divorcio debe revisarse primero la existencia de matrimonio civil.",
        `Jurisdicción preliminar indicada por el usuario: ${r.estado}.`
      ],
      [
        "Podría tratarse de un asunto familiar distinto al divorcio.",
        "Debe revisarse la legislación familiar aplicable en el estado indicado."
      ],
      ["Identificación oficial", "Documentos que acrediten la relación familiar o patrimonial"]
    );
  }

  if (r.matrimonio === "No estoy seguro") {
    puntos += 1;
    advertencias.push("Debe confirmarse si existe acta de matrimonio civil.");
  }

  if (r.hijos === "Sí") {
    puntos += 2;
    hallazgos.push("La existencia de hijos menores eleva la necesidad de definir custodia, convivencia y alimentos.");
    documentos.push("Actas de nacimiento de los hijos");
  }

  if (r.bienes === "Sí") {
    puntos += 1;
    hallazgos.push("La existencia de bienes en común requiere revisar régimen patrimonial y documentos de propiedad.");
  }

  if (r.acuerdo === "Sí") {
    puntos -= 1;
    hallazgos.push("Si ambas partes están de acuerdo, podría explorarse una vía de divorcio voluntario o convenio.");
  }

  if (r.acuerdo === "No") {
    puntos += 2;
    hallazgos.push("La falta de acuerdo puede orientar el asunto hacia un divorcio contencioso.");
  }

  if (r.acuerdo === "Parcialmente") {
    puntos += 1;
    hallazgos.push("Existe acuerdo parcial; se deben identificar los puntos de conflicto.");
  }

  if (r.conflicto === "Sí") {
    puntos += 3;
    hallazgos.push("La existencia de violencia, abandono o conflicto grave eleva el nivel de atención.");
    advertencias.push("Si existe riesgo para alguna persona, debe priorizarse protección y asesoría inmediata.");
  }

  if (r.conflicto === "Prefiero no decirlo") {
    puntos += 2;
    advertencias.push("Hay información sensible no precisada; se recomienda revisión profesional cuidadosa.");
  }

  let problema = "";
  let recomendacion = "";
  let nivel = "";

  if (puntos >= 5) {
    problema = "Posible divorcio contencioso con temas familiares sensibles.";
    recomendacion = "Integrar expediente familiar, revisar hijos menores, bienes, posibles medidas de protección y convenio.";
    nivel = "Alto";
  } else if (r.acuerdo === "Sí" && r.conflicto === "No") {
    problema = "Posible divorcio voluntario o de común acuerdo.";
    recomendacion = "Preparar documentación básica y revisar convenio sobre bienes, hijos, alimentos y convivencia.";
    nivel = "Medio";
  } else {
    problema = "Posible divorcio con puntos pendientes de acuerdo.";
    recomendacion = "Identificar los puntos de conflicto y reunir actas, identificaciones y documentos patrimoniales.";
    nivel = "Medio";
  }

  return crearAnalisisBase(r.estado, problema, nivel, recomendacion, hallazgos, advertencias, documentos);
}

function analizarPension(r) {
  let puntos = 0;
  const hallazgos = [];
  const advertencias = [];
  const documentos = [...casoActual.documentosBase];

  hallazgos.push(`Jurisdicción preliminar indicada por el usuario: ${r.estado}.`);
  advertencias.push("La pensión alimenticia puede variar en trámite, criterios y autoridad competente según el estado.");

  if (r.beneficiario === "Sí") {
    puntos += 2;
    hallazgos.push("La pensión para hijos menores suele requerir atención prioritaria.");
  }

  if (r.beneficiario === "También para cónyuge") {
    puntos += 1;
    hallazgos.push("Podría existir solicitud de alimentos para hijos y cónyuge, lo cual requiere revisión específica.");
  }

  if (r.trabajo === "Sí") {
    hallazgos.push("Si la persona obligada trabaja formalmente, puede ser posible acreditar ingresos con mayor facilidad.");
    documentos.push("Datos del centro de trabajo de la persona obligada");
  }

  if (r.trabajo === "No lo sé") {
    puntos += 1;
    advertencias.push("Debe investigarse la fuente de ingresos de la persona obligada.");
  }

  if (r.convenio === "Sí") {
    hallazgos.push("Ya existe una base previa que debe revisarse: convenio o sentencia.");
    documentos.push("Copia de convenio o sentencia de pensión");
  }

  if (r.convenio === "No") {
    puntos += 1;
    hallazgos.push("Podría tratarse de una solicitud inicial de pensión alimenticia.");
  }

  if (r.convenio === "Está en trámite") {
    puntos += 1;
    hallazgos.push("El asunto ya se encuentra en trámite y debe revisarse el estado procesal.");
  }

  if (r.incumplimiento === "Sí") {
    puntos += 3;
    hallazgos.push("El incumplimiento de pago aumenta el nivel de atención.");
    documentos.push("Registro de pagos incumplidos");
  }

  if (r.incumplimiento === "Paga irregularmente") {
    puntos += 2;
    hallazgos.push("El pago irregular puede justificar revisión, ajuste o ejecución de obligaciones.");
    documentos.push("Registro de depósitos o pagos parciales");
  }

  if (r.gastos === "Sí") {
    hallazgos.push("Los comprobantes de gastos fortalecen la integración del expediente.");
  }

  if (r.gastos === "No") {
    puntos += 1;
    advertencias.push("La falta de comprobantes puede dificultar cuantificar necesidades, pero pueden recopilarse posteriormente.");
  }

  let problema = "";
  let recomendacion = "";
  let nivel = "";

  if (puntos >= 6) {
    problema = "Posible incumplimiento o necesidad urgente de pensión alimenticia.";
    recomendacion = "Integrar comprobantes, actas de nacimiento, gastos, ingresos y revisar si ya existe convenio o sentencia.";
    nivel = "Alto";
  } else if (r.convenio === "No") {
    problema = "Posible solicitud inicial de pensión alimenticia.";
    recomendacion = "Preparar actas, comprobantes de gastos y datos de ingresos de la persona obligada.";
    nivel = "Medio";
  } else {
    problema = "Posible revisión, modificación o seguimiento de pensión alimenticia.";
    recomendacion = "Revisar convenio, pagos, necesidades actuales y documentación de gastos.";
    nivel = "Medio";
  }

  return crearAnalisisBase(r.estado, problema, nivel, recomendacion, hallazgos, advertencias, documentos);
}

function analizarSucesion(r) {
  let puntos = 0;
  const hallazgos = [];
  const advertencias = [];
  const documentos = [...casoActual.documentosBase];

  hallazgos.push(`Jurisdicción preliminar indicada por el usuario: ${r.estado}.`);
  advertencias.push("La sucesión debe revisarse conforme a la legislación civil, familiar y procesal aplicable en el estado indicado.");

  if (r.testamento === "Sí") {
    hallazgos.push("La existencia de testamento puede orientar el asunto hacia una sucesión testamentaria.");
    documentos.push("Copia certificada o datos del testamento");
  }

  if (r.testamento === "No") {
    puntos += 1;
    hallazgos.push("La falta de testamento puede orientar el asunto hacia una sucesión intestamentaria.");
  }

  if (r.testamento === "No lo sé") {
    puntos += 1;
    advertencias.push("Debe verificarse si existe testamento mediante búsqueda correspondiente.");
  }

  if (r.bienes === "Sí") {
    puntos += 1;
    hallazgos.push("La existencia de bienes justifica integrar expediente sucesorio.");
  }

  if (r.bienes === "No") {
    advertencias.push("Si no existen bienes, debe revisarse si realmente se requiere tramitar sucesión.");
  }

  if (r.herederos === "Sí") {
    puntos += 1;
    hallazgos.push("La existencia de varios posibles herederos requiere identificar parentesco y derechos.");
  }

  if (r.conflicto === "Sí") {
    puntos += 3;
    hallazgos.push("El conflicto familiar por bienes eleva el nivel de atención.");
  }

  if (r.conflicto === "Puede existir") {
    puntos += 2;
    hallazgos.push("Existe riesgo de conflicto familiar, por lo que conviene ordenar documentos desde el inicio.");
  }

  if (r.documentos === "Sí") {
    hallazgos.push("Contar con acta de defunción o documentos de propiedad facilita el inicio del expediente.");
  }

  if (r.documentos === "No") {
    puntos += 1;
    advertencias.push("Será necesario obtener documentos básicos antes de iniciar una ruta formal.");
  }

  let problema = "";
  let recomendacion = "";
  let nivel = "";

  if (r.bienes === "No") {
    problema = "No se advierte inicialmente necesidad clara de sucesión patrimonial.";
    recomendacion = "Confirmar si existen bienes, cuentas, derechos o trámites pendientes a nombre de la persona fallecida.";
    nivel = "Bajo / Medio";
  } else if (r.testamento === "Sí" && r.conflicto === "No") {
    problema = "Posible sucesión testamentaria sin conflicto aparente.";
    recomendacion = "Reunir acta de defunción, testamento, identificaciones y documentos de propiedad.";
    nivel = "Medio";
  } else if (puntos >= 5) {
    problema = "Posible sucesión con conflicto familiar o falta de documentación completa.";
    recomendacion = "Integrar documentos, identificar herederos, verificar testamento y revisar bienes.";
    nivel = "Alto";
  } else {
    problema = "Posible sucesión testamentaria o intestamentaria pendiente de clasificación final.";
    recomendacion = "Reunir documentos básicos y confirmar existencia de testamento, bienes y herederos.";
    nivel = "Medio";
  }

  return crearAnalisisBase(r.estado, problema, nivel, recomendacion, hallazgos, advertencias, documentos);
}

function crearAnalisisBase(estado, problema, nivel, recomendacion, hallazgos, advertencias, documentos) {
  return {
    estado,
    materia: casoActual.materia,
    normativa: casoActual.normativa,
    problema,
    nivel,
    recomendacion,
    hallazgos: limpiarDuplicados(hallazgos),
    advertencias: limpiarDuplicados(advertencias),
    documentos: limpiarDuplicados(documentos),
    expediente: casoActual.expediente
  };
}

function limpiarDuplicados(lista) {
  return [...new Set(lista)];
}

function claseRiesgo(nivel) {
  const texto = nivel.toLowerCase();

  if (texto.includes("alto")) {
    return "risk-badge risk-high";
  }

  if (texto.includes("medio")) {
    return "risk-badge risk-medium";
  }

  return "risk-badge risk-low";
}

function mostrarDiagnostico(analisis) {
  const diagnostico = document.getElementById("diagnostico");
  const expediente = document.getElementById("expediente");

  expediente.innerHTML = "";
  expediente.style.display = "none";

  diagnostico.innerHTML = `
    <h3>Diagnóstico preliminar LEX-IA</h3>

    <p><strong>Jurisdicción preliminar:</strong> ${analisis.estado}.</p>
    <p><strong>Materia:</strong> ${analisis.materia}.</p>
    <p><strong>Normativa a revisar:</strong> ${analisis.normativa}</p>
    <p><strong>Problema identificado:</strong> ${analisis.problema}</p>

    <span class="${claseRiesgo(analisis.nivel)}">
      Nivel de atención: ${analisis.nivel}
    </span>

    <h4>Lectura preliminar</h4>
    <ul>
      ${analisis.hallazgos.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    ${
      analisis.advertencias.length > 0
        ? `
          <h4>Advertencias relevantes</h4>
          <ul>
            ${analisis.advertencias.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `
        : ""
    }

    <h4>Documentos sugeridos</h4>
    <ul>
      ${analisis.documentos.map((doc) => `<li>${doc}</li>`).join("")}
    </ul>

    <h4>Recomendación inicial</h4>
    <p>${analisis.recomendacion}</p>

    <p class="note">
      Este diagnóstico es preliminar, se basa únicamente en las respuestas proporcionadas y no sustituye la revisión profesional de un abogado.
      Para una opinión jurídica formal será necesario revisar documentos, jurisdicción aplicable y legislación vigente.
    </p>

    <button class="btn primary" onclick="crearExpediente()">
      Crear expediente inicial LEX-IA
    </button>
  `;

  diagnostico.style.display = "block";
  diagnostico.scrollIntoView({ behavior: "smooth" });
}

function crearExpediente() {
  if (!ultimoAnalisis) return;

  const expediente = document.getElementById("expediente");

  expediente.innerHTML = `
    <h3>Expediente inicial LEX-IA</h3>

    <p><strong>Tipo de expediente:</strong> ${ultimoAnalisis.expediente}.</p>
    <p><strong>Jurisdicción preliminar:</strong> ${ultimoAnalisis.estado}.</p>
    <p><strong>Materia:</strong> ${ultimoAnalisis.materia}.</p>
    <p><strong>Normativa a revisar:</strong> ${ultimoAnalisis.normativa}</p>
    <p><strong>Problema identificado:</strong> ${ultimoAnalisis.problema}</p>
    <p><strong>Nivel de atención:</strong> ${ultimoAnalisis.nivel}.</p>
    <p><strong>Estado:</strong> Expediente inicial creado.</p>
    <p><strong>Siguiente acción:</strong> Integrar documentos y solicitar revisión profesional.</p>

    <div class="file-status">
      <button class="status-chip active" type="button">
        <span>✓</span> Diagnóstico generado
      </button>

      <button class="status-chip active" type="button">
        <span>✓</span> Jurisdicción registrada
      </button>

      <button id="chip-documentos" class="status-chip pending" type="button" onclick="enfocarCargaDocumentos()">
        <span>!</span> Documentos pendientes
      </button>

      <button id="chip-analisis-documental" class="status-chip pending" type="button" onclick="enfocarAnalisisDocumental()">
        <span>!</span> Análisis documental pendiente
      </button>

      <button class="status-chip active" type="button">
        <span>✓</span> Expediente inicial creado
      </button>

      <button class="status-chip pending" type="button">
        <span>!</span> Revisión profesional pendiente
      </button>
    </div>

    <div class="upload-panel" id="panel-documentos">
      <h4>Integrar documentos al expediente</h4>
      <p>
        Sube documentos en formato PDF o imagen para simular su integración al expediente inicial.
        En esta versión local los archivos no se envían a un servidor; solo se enlistan en la página.
      </p>

      <label class="upload-box">
        <span>Seleccionar documentos</span>
        <input 
          type="file" 
          id="documentosInput" 
          accept=".pdf,image/*" 
          multiple 
          onchange="manejarDocumentos(event)"
        />
      </label>

      <div id="lista-documentos" class="document-list">
        <p class="empty-docs">Aún no se han cargado documentos.</p>
      </div>

      <div class="analysis-actions">
        <button id="btn-analizar-documentos" class="btn primary" onclick="analizarDocumentosCargados()" disabled>
          Analizar documentos cargados
        </button>
      </div>
    </div>

    <div id="analisis-documental" class="document-analysis"></div>

    <div class="expediente-actions">
      <button class="btn primary" onclick="descargarExpediente()">
        Descargar expediente inicial
      </button>
    </div>
  `;

  renderizarDocumentos();
  actualizarEstadoDocumentos();

  expediente.style.display = "block";
  expediente.scrollIntoView({ behavior: "smooth" });
}

function enfocarCargaDocumentos() {
  const panel = document.getElementById("panel-documentos");
  if (panel) {
    panel.scrollIntoView({ behavior: "smooth" });
  }
}

function enfocarAnalisisDocumental() {
  const panel = document.getElementById("analisis-documental");

  if (panel && panel.style.display === "block") {
    panel.scrollIntoView({ behavior: "smooth" });
    return;
  }

  enfocarCargaDocumentos();
}

function manejarDocumentos(event) {
  const archivos = Array.from(event.target.files || []);

  archivos.forEach((archivo) => {
    const yaExiste = documentosCargados.some(
      (doc) => doc.nombre === archivo.name && doc.tamano === archivo.size
    );

    if (!yaExiste) {
      documentosCargados.push({
        nombre: archivo.name,
        tipo: archivo.type || "Tipo no identificado",
        tamano: archivo.size,
        fecha: new Date().toLocaleString("es-MX")
      });
    }
  });

  ultimoAnalisisDocumental = null;
  limpiarAnalisisDocumental();
  renderizarDocumentos();
  actualizarEstadoDocumentos();
}

function renderizarDocumentos() {
  const lista = document.getElementById("lista-documentos");

  if (!lista) return;

  if (documentosCargados.length === 0) {
    lista.innerHTML = `<p class="empty-docs">Aún no se han cargado documentos.</p>`;
    return;
  }

  lista.innerHTML = documentosCargados
    .map((doc, index) => {
      return `
        <div class="document-item">
          <div>
            <strong>${doc.nombre}</strong>
            <p>${formatearTamano(doc.tamano)} · ${doc.tipo}</p>
            <small>Cargado: ${doc.fecha}</small>
          </div>

          <button type="button" onclick="eliminarDocumento(${index})">
            Eliminar
          </button>
        </div>
      `;
    })
    .join("");
}

function eliminarDocumento(index) {
  documentosCargados.splice(index, 1);
  ultimoAnalisisDocumental = null;
  limpiarAnalisisDocumental();
  renderizarDocumentos();
  actualizarEstadoDocumentos();
}

function actualizarEstadoDocumentos() {
  const chipDocumentos = document.getElementById("chip-documentos");
  const chipAnalisis = document.getElementById("chip-analisis-documental");
  const botonAnalisis = document.getElementById("btn-analizar-documentos");

  if (chipDocumentos) {
    if (documentosCargados.length > 0) {
      chipDocumentos.className = "status-chip active";
      chipDocumentos.innerHTML = `<span>✓</span> Documentos integrados`;
    } else {
      chipDocumentos.className = "status-chip pending";
      chipDocumentos.innerHTML = `<span>!</span> Documentos pendientes`;
    }
  }

  if (chipAnalisis) {
    if (ultimoAnalisisDocumental) {
      chipAnalisis.className = "status-chip active";
      chipAnalisis.innerHTML = `<span>✓</span> Documentos analizados`;
    } else {
      chipAnalisis.className = "status-chip pending";
      chipAnalisis.innerHTML = `<span>!</span> Análisis documental pendiente`;
    }
  }

  if (botonAnalisis) {
    botonAnalisis.disabled = documentosCargados.length === 0;
  }
}

function limpiarAnalisisDocumental() {
  const panel = document.getElementById("analisis-documental");

  if (panel) {
    panel.innerHTML = "";
    panel.style.display = "none";
  }
}

function analizarDocumentosCargados() {
  if (documentosCargados.length === 0) {
    alert("Primero sube al menos un documento para analizar.");
    return;
  }

  const documentosDetectados = documentosCargados.map((doc) => inferirDocumento(doc));
  const fortalezas = [];
  const advertencias = [];
  const recomendaciones = [];

  documentosDetectados.forEach((resultado) => {
    fortalezas.push(resultado.lectura);
    resultado.advertencias.forEach((item) => advertencias.push(item));
    resultado.recomendaciones.forEach((item) => recomendaciones.push(item));
  });

  if (tipoCasoActual === "despido") {
    recomendaciones.push("Revisar si los documentos permiten acreditar relación laboral, salario, antigüedad y forma de terminación.");
  }

  if (tipoCasoActual === "divorcio") {
    recomendaciones.push("Revisar acta de matrimonio, actas de nacimiento, bienes y posible convenio entre las partes.");
  }

  if (tipoCasoActual === "pension") {
    recomendaciones.push("Revisar actas de nacimiento, comprobantes de gastos, ingresos, sentencia o convenio previo.");
  }

  if (tipoCasoActual === "sucesion") {
    recomendaciones.push("Revisar acta de defunción, testamento, documentos de propiedad y parentesco de posibles herederos.");
  }

  advertencias.push("Esta lectura documental es preliminar y se basa en nombre, tipo y extensión del archivo.");
  advertencias.push("Para lectura real del contenido se requerirá IA documental, OCR, backend seguro y revisión profesional.");

  ultimoAnalisisDocumental = {
    documentosDetectados,
    fortalezas: limpiarDuplicados(fortalezas),
    advertencias: limpiarDuplicados(advertencias),
    recomendaciones: limpiarDuplicados(recomendaciones)
  };

  mostrarAnalisisDocumental();
  actualizarEstadoDocumentos();
}

function inferirDocumento(doc) {
  const nombre = doc.nombre.toLowerCase();
  const advertencias = [];
  const recomendaciones = [];

  let categoria = "Documento general";
  let lectura = "El archivo fue integrado al expediente como documento de apoyo para revisión posterior.";

  if (nombre.includes("contrato")) {
    categoria = "Contrato";
    lectura = "El sistema detecta un posible contrato. Puede servir para identificar obligaciones, partes, fechas y condiciones relevantes.";
    recomendaciones.push("Verificar firmas, fechas, partes involucradas y cláusulas principales.");
  }

  if (nombre.includes("nomina") || nombre.includes("nómina") || nombre.includes("recibo")) {
    categoria = "Recibo o comprobante de pago";
    lectura = "El sistema detecta un posible recibo o comprobante de pago. Puede ayudar a acreditar salario, pagos o relación económica.";
    recomendaciones.push("Comparar montos, fechas de pago y datos del emisor.");
  }

  if (nombre.includes("renuncia")) {
    categoria = "Renuncia";
    lectura = "El sistema detecta un posible documento de renuncia. Debe revisarse con cuidado para identificar si fue voluntaria o controvertida.";
    recomendaciones.push("Revisar fecha, firma, redacción y circunstancias en que fue firmada.");
  }

  if (nombre.includes("despido") || nombre.includes("aviso")) {
    categoria = "Aviso laboral";
    lectura = "El sistema detecta un posible aviso laboral. Puede ser relevante para analizar la forma de terminación.";
    recomendaciones.push("Revisar si contiene fecha, motivo, firma y datos del patrón.");
  }

  if (nombre.includes("matrimonio")) {
    categoria = "Acta de matrimonio";
    lectura = "El sistema detecta un posible acta de matrimonio. Puede acreditar la existencia del vínculo civil.";
    recomendaciones.push("Confirmar que el acta esté legible y actualizada.");
  }

  if (nombre.includes("nacimiento") || nombre.includes("hijo") || nombre.includes("hija")) {
    categoria = "Acta de nacimiento";
    lectura = "El sistema detecta un posible acta de nacimiento. Puede acreditar filiación, parentesco o derecho alimentario.";
    recomendaciones.push("Verificar nombres completos, fechas y datos de registro.");
  }

  if (nombre.includes("pension") || nombre.includes("pensión") || nombre.includes("alimentos")) {
    categoria = "Documento de alimentos";
    lectura = "El sistema detecta un documento posiblemente relacionado con pensión alimenticia.";
    recomendaciones.push("Revisar montos, periodicidad, obligado alimentario y beneficiarios.");
  }

  if (nombre.includes("sentencia") || nombre.includes("convenio")) {
    categoria = "Sentencia o convenio";
    lectura = "El sistema detecta una posible sentencia o convenio. Puede contener obligaciones vigentes.";
    recomendaciones.push("Identificar autoridad, fecha, partes obligadas y puntos resolutivos.");
  }

  if (nombre.includes("defuncion") || nombre.includes("defunción")) {
    categoria = "Acta de defunción";
    lectura = "El sistema detecta un posible acta de defunción. Es documento base para asuntos sucesorios.";
    recomendaciones.push("Verificar datos de la persona fallecida y fecha de defunción.");
  }

  if (nombre.includes("testamento")) {
    categoria = "Testamento";
    lectura = "El sistema detecta un posible testamento. Puede definir herederos, legatarios y voluntad sucesoria.";
    recomendaciones.push("Verificar notaría, fecha, número de instrumento y datos del testador.");
  }

  if (
    nombre.includes("escritura") ||
    nombre.includes("propiedad") ||
    nombre.includes("predial") ||
    nombre.includes("casa") ||
    nombre.includes("terreno")
  ) {
    categoria = "Documento de propiedad";
    lectura = "El sistema detecta un posible documento de propiedad. Puede ayudar a identificar bienes objeto del asunto.";
    recomendaciones.push("Revisar propietario, ubicación del inmueble, folio, escritura o clave catastral.");
  }

  if (doc.tipo.includes("pdf")) {
    recomendaciones.push("El archivo está en PDF; en una fase posterior podría leerse con IA documental.");
  }

  if (doc.tipo.includes("image")) {
    recomendaciones.push("El archivo es imagen; en una fase posterior requerirá OCR para extraer texto.");
  }

  if (!doc.tipo.includes("pdf") && !doc.tipo.includes("image")) {
    advertencias.push(`El archivo ${doc.nombre} tiene un tipo no identificado plenamente.`);
  }

  return {
    nombre: doc.nombre,
    categoria,
    lectura,
    advertencias,
    recomendaciones
  };
}

function mostrarAnalisisDocumental() {
  const panel = document.getElementById("analisis-documental");

  if (!panel || !ultimoAnalisisDocumental) return;

  panel.innerHTML = `
    <h4>Análisis preliminar de documentos</h4>

    <p>
      LEX-IA realizó una lectura inicial simulada de los documentos cargados.
      Esta versión todavía no interpreta el contenido interno del archivo, pero identifica posibles tipos documentales.
    </p>

    <h4>Documentos detectados</h4>
    <ul>
      ${ultimoAnalisisDocumental.documentosDetectados
        .map((doc) => `<li><strong>${doc.nombre}</strong> — ${doc.categoria}</li>`)
        .join("")}
    </ul>

    <h4>Lectura preliminar</h4>
    <ul>
      ${ultimoAnalisisDocumental.fortalezas.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h4>Recomendaciones documentales</h4>
    <ul>
      ${ultimoAnalisisDocumental.recomendaciones.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <h4>Advertencias</h4>
    <ul>
      ${ultimoAnalisisDocumental.advertencias.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  panel.style.display = "block";
  panel.scrollIntoView({ behavior: "smooth" });
}

function formatearTamano(bytes) {
  if (bytes < 1024) return `${bytes} bytes`;

  const kb = bytes / 1024;

  if (kb < 1024) return `${kb.toFixed(1)} KB`;

  const mb = kb / 1024;

  return `${mb.toFixed(1)} MB`;
}

function descargarExpediente() {
  if (!ultimoAnalisis || !ultimasRespuestas || !casoActual) return;

  const fecha = new Date().toLocaleString("es-MX");

  const preguntasYRespuestas = casoActual.preguntas
    .map((pregunta) => {
      const respuesta = ultimasRespuestas[pregunta.id] || "Sin respuesta";
      return `${pregunta.texto}\nRespuesta: ${respuesta}`;
    })
    .join("\n\n");

  const documentos = ultimoAnalisis.documentos
    .map((doc) => `- ${doc}`)
    .join("\n");

  const documentosIntegrados =
    documentosCargados.length > 0
      ? documentosCargados
          .map((doc) => `- ${doc.nombre} (${formatearTamano(doc.tamano)})`)
          .join("\n")
      : "- No se integraron documentos en esta versión local.";

  const analisisDocumentalTexto = ultimoAnalisisDocumental
    ? `
DOCUMENTOS DETECTADOS:
${ultimoAnalisisDocumental.documentosDetectados
  .map((doc) => `- ${doc.nombre} — ${doc.categoria}`)
  .join("\n")}

LECTURA PRELIMINAR DOCUMENTAL:
${ultimoAnalisisDocumental.fortalezas.map((item) => `- ${item}`).join("\n")}

RECOMENDACIONES DOCUMENTALES:
${ultimoAnalisisDocumental.recomendaciones.map((item) => `- ${item}`).join("\n")}

ADVERTENCIAS DOCUMENTALES:
${ultimoAnalisisDocumental.advertencias.map((item) => `- ${item}`).join("\n")}
`
    : "No se realizó análisis documental preliminar.";

  const hallazgos = ultimoAnalisis.hallazgos
    .map((item) => `- ${item}`)
    .join("\n");

  const advertencias =
    ultimoAnalisis.advertencias.length > 0
      ? ultimoAnalisis.advertencias.map((item) => `- ${item}`).join("\n")
      : "- Sin advertencias adicionales registradas.";

  const contenido = `
EXPEDIENTE INICIAL LEX-IA
Asistente Jurídico Inteligente

Fecha de generación:
${fecha}

----------------------------------------
DATOS GENERALES DEL ASUNTO
----------------------------------------

Tipo de expediente:
${ultimoAnalisis.expediente}

Jurisdicción preliminar:
${ultimoAnalisis.estado}

Materia:
${ultimoAnalisis.materia}

Normativa a revisar:
${ultimoAnalisis.normativa}

Problema identificado:
${ultimoAnalisis.problema}

Nivel de atención:
${ultimoAnalisis.nivel}

----------------------------------------
RESPUESTAS DEL USUARIO
----------------------------------------

${preguntasYRespuestas}

----------------------------------------
LECTURA PRELIMINAR
----------------------------------------

${hallazgos}

----------------------------------------
ADVERTENCIAS RELEVANTES
----------------------------------------

${advertencias}

----------------------------------------
DOCUMENTOS SUGERIDOS
----------------------------------------

${documentos}

----------------------------------------
DOCUMENTOS INTEGRADOS POR EL USUARIO
----------------------------------------

${documentosIntegrados}

----------------------------------------
ANÁLISIS PRELIMINAR DE DOCUMENTOS
----------------------------------------

${analisisDocumentalTexto}

----------------------------------------
RECOMENDACIÓN INICIAL
----------------------------------------

${ultimoAnalisis.recomendacion}

----------------------------------------
ESTADO DEL EXPEDIENTE
----------------------------------------

- Diagnóstico generado
- Jurisdicción registrada
- Expediente inicial creado
- Documentos integrados: ${documentosCargados.length}
- Análisis documental: ${ultimoAnalisisDocumental ? "realizado" : "pendiente"}
- Revisión profesional pendiente

----------------------------------------
AVISO IMPORTANTE
----------------------------------------

Este expediente es preliminar y fue generado con base únicamente en las respuestas proporcionadas por el usuario.

No sustituye la revisión profesional de un abogado.

Para una opinión jurídica formal será necesario revisar documentos, jurisdicción aplicable, legislación vigente y circunstancias específicas del caso.

En esta versión local, los archivos cargados no se envían a un servidor. Únicamente se registran sus nombres dentro del expediente descargado.

La lectura documental actual es una simulación basada en el nombre, tipo y extensión del archivo. Para leer el contenido real de PDFs o imágenes se requerirá backend seguro, OCR, IA documental y revisión profesional.

LEX-IA
Orientación, representación y seguimiento jurídico en un solo lugar.
`;

  const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = `expediente_lexia_${tipoCasoActual}.txt`;
  document.body.appendChild(enlace);
  enlace.click();

  document.body.removeChild(enlace);
  URL.revokeObjectURL(url);
}