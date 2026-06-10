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

function cargarCaso(tipo) {
  casoActual = casos[tipo];
  tipoCasoActual = tipo;
  ultimoAnalisis = null;

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
      ["Para que exista divorcio debe revisarse primero la existencia de matrimonio civil.", `Jurisdicción preliminar indicada por el usuario: ${r.estado}.`],
      ["Podría tratarse de un asunto familiar distinto al divorcio.", "Debe revisarse la legislación familiar aplicable en el estado indicado."],
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
    <p><strong>Estado:</strong> Diagnóstico preliminar generado.</p>
    <p><strong>Siguiente acción:</strong> Integrar documentos y solicitar revisión profesional.</p>

    <div class="file-status">
      <span>Diagnóstico generado</span>
      <span>Jurisdicción registrada</span>
      <span>Documentos pendientes</span>
      <span>Revisión profesional pendiente</span>
      <span>Expediente inicial creado</span>
    </div>
  `;

  expediente.style.display = "block";
  expediente.scrollIntoView({ behavior: "smooth" });
}