const logsMemory = [];

const createLog = (caseId, data) => {
  const { actionType, description, role, userId } = data;

  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  if (!actionType || !description) {
    return {
      success: false,
      statusCode: 400,
      message: "El tipo de acción y la descripción son obligatorios"
    };
  }

  const newLog = {
    id: `log_${logsMemory.length + 1}`,
    caseId,
    userId: userId || "user_test_001",
    role: role || "client",
    actionType,
    description,
    metadata: data.metadata || null,
    createdAt: new Date().toISOString()
  };

  logsMemory.push(newLog);

  return {
    success: true,
    statusCode: 201,
    message: "Evento registrado correctamente en la bitácora",
    log: newLog
  };
};

const getLogsByCaseId = (caseId) => {
  if (!caseId) {
    return {
      success: false,
      statusCode: 400,
      message: "El ID del expediente es obligatorio"
    };
  }

  const caseLogs = logsMemory.filter((log) => log.caseId === caseId);

  return {
    success: true,
    statusCode: 200,
    message: "Bitácora del expediente obtenida correctamente",
    caseId,
    total: caseLogs.length,
    logs: caseLogs
  };
};

const createSystemLog = ({
  caseId,
  actionType,
  description,
  userId = "system",
  role = "system",
  metadata = null
}) => {
  const newLog = {
    id: `log_${logsMemory.length + 1}`,
    caseId,
    userId,
    role,
    actionType,
    description,
    metadata,
    createdAt: new Date().toISOString()
  };

  logsMemory.push(newLog);

  return newLog;
};

module.exports = {
  createLog,
  getLogsByCaseId,
  createSystemLog
};