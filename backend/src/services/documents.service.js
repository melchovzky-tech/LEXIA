const documentsMemory = [];

const createDocument = (caseId, data) => {
  const {
    documentType,
    fileName,
    fileUrl,
    mimeType,
    uploadedBy,
    notes
  } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!documentType || !fileName) {
    return {
      success: false,
      statusCode: 400,
      message: "El tipo de documento y el nombre del archivo son obligatorios"
    };
  }

  const newDocument = {
    id: `document_${documentsMemory.length + 1}`,
    caseId,
    documentType,
    fileName,
    fileUrl: fileUrl || "archivo_pendiente_de_integracion",
    mimeType: mimeType || "application/pdf",
    uploadedBy: uploadedBy || "user_test_001",
    uploadRole: data.uploadRole || "client",
    notes: notes || "Sin observaciones",
    status: "cargado",
    analysisStatus: "pendiente",
    preliminaryAnalysis: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  documentsMemory.push(newDocument);

  return {
    success: true,
    statusCode: 201,
    message: "Documento registrado correctamente en el expediente",
    document: newDocument
  };
};

const getDocumentsByCaseId = (caseId) => {
  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  const caseDocuments = documentsMemory.filter(
    (document) => document.caseId === caseId
  );

  return {
    success: true,
    statusCode: 200,
    message: "Documentos del expediente obtenidos correctamente",
    caseId,
    total: caseDocuments.length,
    documents: caseDocuments
  };
};

const getDocumentById = (documentId) => {
  const foundDocument = documentsMemory.find(
    (document) => document.id === documentId
  );

  if (!foundDocument) {
    return {
      success: false,
      statusCode: 404,
      message: "Documento no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Documento encontrado correctamente",
    document: foundDocument
  };
};

const updateDocumentStatus = (documentId, data) => {
  const foundDocument = documentsMemory.find(
    (document) => document.id === documentId
  );

  if (!foundDocument) {
    return {
      success: false,
      statusCode: 404,
      message: "Documento no encontrado"
    };
  }

  if (!data.newStatus) {
    return {
      success: false,
      statusCode: 400,
      message: "El nuevo estado del documento es obligatorio"
    };
  }

  foundDocument.status = data.newStatus;
  foundDocument.statusReason =
    data.reason || "Cambio de estado sin motivo especificado";
  foundDocument.updatedAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Estado del documento actualizado correctamente",
    document: foundDocument
  };
};

const analyzeDocument = (documentId) => {
  const foundDocument = documentsMemory.find(
    (document) => document.id === documentId
  );

  if (!foundDocument) {
    return {
      success: false,
      statusCode: 404,
      message: "Documento no encontrado"
    };
  }

  const simulatedAnalysis = {
    summary:
      "El documento fue analizado de forma preliminar. Se identificaron datos relevantes para el expediente, pero requiere revisión profesional.",
    detectedElements: [
      "Nombre del posible promovente o interesado",
      "Referencia al asunto jurídico",
      "Fechas relevantes",
      "Posibles hechos materia de análisis",
      "Necesidad de validación por abogado"
    ],
    legalWarning:
      "Este análisis es preliminar y no sustituye la revisión de un abogado autorizado.",
    riskLevel: "medio"
  };

  foundDocument.analysisStatus = "analizado";
  foundDocument.preliminaryAnalysis = simulatedAnalysis;
  foundDocument.analysisCompletedAt = new Date().toISOString();
  foundDocument.updatedAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Análisis preliminar del documento generado correctamente",
    document: foundDocument
  };
};

const getAnalysisCertificate = (documentId) => {
  const foundDocument = documentsMemory.find(
    (document) => document.id === documentId
  );

  if (!foundDocument) {
    return {
      success: false,
      statusCode: 404,
      message: "Documento no encontrado"
    };
  }

  if (foundDocument.analysisStatus !== "analizado") {
    return {
      success: false,
      statusCode: 400,
      message:
        "El documento aún no cuenta con análisis preliminar. Primero debe ejecutarse el análisis documental."
    };
  }

  const certificate = {
    certificateId: `CERT-${foundDocument.id.toUpperCase()}-${Date.now()}`,
    certificateType: "Certificado preliminar de análisis documental",
    platform: "LEX-IA CASE",
    caseId: foundDocument.caseId,
    documentId: foundDocument.id,
    documentType: foundDocument.documentType,
    fileName: foundDocument.fileName,
    analysisStatus: foundDocument.analysisStatus,
    documentStatus: foundDocument.status,
    resultSummary: foundDocument.preliminaryAnalysis.summary,
    detectedElements: foundDocument.preliminaryAnalysis.detectedElements,
    riskLevel: foundDocument.preliminaryAnalysis.riskLevel,
    legalWarning: foundDocument.preliminaryAnalysis.legalWarning,
    issuedAt: new Date().toISOString(),
    analysisCompletedAt:
      foundDocument.analysisCompletedAt || foundDocument.updatedAt,
    validationCode: `LEXIA-${foundDocument.id}-${foundDocument.caseId}`.toUpperCase(),
    disclaimer:
      "Este certificado es una constancia preliminar generada por LEX-IA CASE. No constituye dictamen jurídico definitivo, resolución judicial, asesoría legal personalizada ni sustituye la revisión de un abogado autorizado."
  };

  return {
    success: true,
    statusCode: 200,
    message: "Certificado preliminar de análisis documental generado correctamente",
    certificate
  };
};

module.exports = {
  createDocument,
  getDocumentsByCaseId,
  getDocumentById,
  updateDocumentStatus,
  analyzeDocument,
  getAnalysisCertificate
};