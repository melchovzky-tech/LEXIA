const diagnosesMemory = [];

const detectLegalArea = (text) => {
  const normalizedText = text.toLowerCase();

  if (
    normalizedText.includes("despido") ||
    normalizedText.includes("liquidación") ||
    normalizedText.includes("salario") ||
    normalizedText.includes("trabajo") ||
    normalizedText.includes("patrón")
  ) {
    return "laboral";
  }

  if (
    normalizedText.includes("divorcio") ||
    normalizedText.includes("custodia") ||
    normalizedText.includes("convivencia") ||
    normalizedText.includes("pensión alimenticia") ||
    normalizedText.includes("alimentos")
  ) {
    return "familiar";
  }

  if (
    normalizedText.includes("herencia") ||
    normalizedText.includes("testamento") ||
    normalizedText.includes("sucesión") ||
    normalizedText.includes("intestado")
  ) {
    return "sucesiones";
  }

  if (
    normalizedText.includes("arrendamiento") ||
    normalizedText.includes("renta") ||
    normalizedText.includes("inquilino") ||
    normalizedText.includes("contrato")
  ) {
    return "civil";
  }

  return "general";
};

const determineRiskLevel = (text) => {
  const normalizedText = text.toLowerCase();

  if (
    normalizedText.includes("demanda") ||
    normalizedText.includes("audiencia") ||
    normalizedText.includes("embargo") ||
    normalizedText.includes("amenaza") ||
    normalizedText.includes("urgente") ||
    normalizedText.includes("plazo")
  ) {
    return "alto";
  }

  if (
    normalizedText.includes("documento") ||
    normalizedText.includes("contrato") ||
    normalizedText.includes("cita") ||
    normalizedText.includes("notificación")
  ) {
    return "medio";
  }

  return "bajo";
};

const getRecommendedDocuments = (legalArea) => {
  const documentsByArea = {
    laboral: [
      "Identificación oficial",
      "Contrato laboral, si existe",
      "Recibos de nómina",
      "Comprobantes de pago",
      "Mensajes o documentos relacionados con el despido",
      "Datos del patrón o empresa"
    ],
    familiar: [
      "Acta de matrimonio, si aplica",
      "Actas de nacimiento de hijas o hijos",
      "Comprobantes de ingresos",
      "Domicilio de las partes",
      "Documentos relacionados con gastos familiares"
    ],
    sucesiones: [
      "Acta de defunción",
      "Actas de nacimiento de posibles herederos",
      "Testamento, si existe",
      "Documentos de bienes",
      "Identificaciones oficiales"
    ],
    civil: [
      "Contrato relacionado",
      "Identificación oficial",
      "Comprobantes de pago",
      "Mensajes, recibos o fotografías",
      "Documentos que acrediten la relación jurídica"
    ],
    general: [
      "Identificación oficial",
      "Documentos relacionados con el caso",
      "Comprobantes, mensajes o fotografías",
      "Fechas relevantes",
      "Datos de las personas involucradas"
    ]
  };

  return documentsByArea[legalArea] || documentsByArea.general;
};

const getSuggestedNextStep = (legalArea, riskLevel) => {
  if (riskLevel === "alto") {
    return "Se recomienda revisión prioritaria por un abogado antes de tomar decisiones o dejar vencer algún plazo.";
  }

  const nextStepsByArea = {
    laboral:
      "Reunir documentos laborales y verificar fechas de despido, pagos pendientes y posibles plazos de reclamación.",
    familiar:
      "Organizar documentos familiares, ingresos, gastos y datos de las partes para una revisión inicial.",
    sucesiones:
      "Identificar herederos, bienes, existencia de testamento y documentos civiles indispensables.",
    civil:
      "Revisar el contrato, comprobantes de pago y comunicaciones relacionadas con el asunto.",
    general:
      "Organizar los hechos en orden cronológico y reunir documentos que permitan una revisión inicial."
  };

  return nextStepsByArea[legalArea] || nextStepsByArea.general;
};

const createPreliminaryDiagnosis = (data) => {
  const { userId, caseId, facts, state, requestedArea } = data;

  if (!userId || !facts) {
    return {
      success: false,
      statusCode: 400,
      message: "El usuario y la descripción de hechos son obligatorios"
    };
  }

  const detectedArea = requestedArea || detectLegalArea(facts);
  const riskLevel = determineRiskLevel(facts);
  const recommendedDocuments = getRecommendedDocuments(detectedArea);
  const suggestedNextStep = getSuggestedNextStep(detectedArea, riskLevel);

  const newDiagnosis = {
    id: `diagnosis_${diagnosesMemory.length + 1}`,
    userId,
    caseId: caseId || null,
    state: state || "No especificado",
    detectedArea,
    riskLevel,
    factsSummary:
      "Con base en los hechos proporcionados, LEX-IA generó un diagnóstico preliminar orientativo.",
    originalFacts: facts,
    recommendedDocuments,
    suggestedNextStep,
    warning:
      "Este diagnóstico es preliminar, automatizado y no sustituye la asesoría jurídica personalizada de un abogado autorizado.",
    status: "generado",
    createdAt: new Date().toISOString()
  };

  diagnosesMemory.push(newDiagnosis);

  return {
    success: true,
    statusCode: 201,
    message: "Diagnóstico preliminar generado correctamente",
    diagnosis: newDiagnosis
  };
};

const getDiagnosisById = (diagnosisId) => {
  const foundDiagnosis = diagnosesMemory.find(
    (diagnosis) => diagnosis.id === diagnosisId
  );

  if (!foundDiagnosis) {
    return {
      success: false,
      statusCode: 404,
      message: "Diagnóstico no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Diagnóstico encontrado correctamente",
    diagnosis: foundDiagnosis
  };
};

const createCaseAiSummary = (caseId, data) => {
  const { facts, documentsCount, messagesCount, paymentsCount } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!facts) {
    return {
      success: false,
      statusCode: 400,
      message: "Los hechos del expediente son obligatorios"
    };
  }

  const detectedArea = detectLegalArea(facts);
  const riskLevel = determineRiskLevel(facts);

  const summary = {
    id: `case_ai_summary_${Date.now()}`,
    caseId,
    detectedArea,
    riskLevel,
    summary:
      "Resumen preliminar del expediente generado por LEX-IA con base en los datos disponibles.",
    relevantPoints: [
      "Hechos proporcionados por el usuario",
      "Área jurídica estimada",
      "Nivel de riesgo preliminar",
      "Necesidad de revisión profesional"
    ],
    caseMetrics: {
      documentsCount: documentsCount || 0,
      messagesCount: messagesCount || 0,
      paymentsCount: paymentsCount || 0
    },
    suggestedNextStep: getSuggestedNextStep(detectedArea, riskLevel),
    warning:
      "Este resumen es preliminar y no constituye dictamen jurídico definitivo.",
    generatedAt: new Date().toISOString()
  };

  return {
    success: true,
    statusCode: 201,
    message: "Resumen preliminar del expediente generado correctamente",
    summary
  };
};

module.exports = {
  createPreliminaryDiagnosis,
  getDiagnosisById,
  createCaseAiSummary
};