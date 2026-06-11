const casesMemory = [];

const generateFolio = ({ matterCode, jurisdictionCode }) => {
  const year = new Date().getFullYear();
  const sequence = String(casesMemory.length + 1).padStart(6, "0");

  return `LEX-IA-${matterCode}-${jurisdictionCode}-${year}-${sequence}`;
};

const createCase = (data) => {
  const {
    matterCode,
    jurisdictionCode,
    title,
    description,
    preliminaryDiagnosis,
    riskLevel
  } = data;

  if (!matterCode || !jurisdictionCode || !title || !description) {
    return {
      success: false,
      statusCode: 400,
      message: "Faltan datos obligatorios para crear el expediente"
    };
  }

  const folio = generateFolio({
    matterCode,
    jurisdictionCode
  });

  const newCase = {
    id: `case_${casesMemory.length + 1}`,
    folio,
    clientId: "user_test_001",
    matterCode,
    jurisdictionCode,
    title,
    description,
    preliminaryDiagnosis:
      preliminaryDiagnosis || "Diagnóstico preliminar pendiente de revisión profesional",
    riskLevel: riskLevel || "medio",
    currentStatus: "expediente_creado",
    lawyerId: null,
    lawyerName: "Pendiente de asignación",
    documentsCount: 0,
    pendingDocumentsCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  casesMemory.push(newCase);

  return {
    success: true,
    statusCode: 201,
    message: "Expediente creado correctamente",
    case: newCase
  };
};

const getClientCases = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Expedientes del cliente obtenidos correctamente",
    cases: casesMemory
  };
};

const getCaseByFolio = (folio) => {
  const foundCase = casesMemory.find((item) => item.folio === folio);

  if (!foundCase) {
    return {
      success: false,
      statusCode: 404,
      message: "Expediente no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Expediente encontrado correctamente",
    case: foundCase
  };
};

const updateCaseStatus = (id, data) => {
  const foundCase = casesMemory.find((item) => item.id === id);

  if (!foundCase) {
    return {
      success: false,
      statusCode: 404,
      message: "Expediente no encontrado"
    };
  }

  if (!data.newStatus) {
    return {
      success: false,
      statusCode: 400,
      message: "El nuevo estado del expediente es obligatorio"
    };
  }

  foundCase.currentStatus = data.newStatus;
  foundCase.statusReason = data.reason || "Cambio de estado sin motivo especificado";
  foundCase.updatedAt = new Date().toISOString();

  return {
    success: true,
    statusCode: 200,
    message: "Estado del expediente actualizado correctamente",
    case: foundCase
  };
};

module.exports = {
  createCase,
  getClientCases,
  getCaseByFolio,
  updateCaseStatus
};