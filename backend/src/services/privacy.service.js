const privacyRequestsMemory = [];

const createPrivacyRequest = (data) => {
  const {
    userId,
    requestType,
    title,
    description,
    contactEmail,
    relatedCaseId,
    relatedDocumentId,
    metadata
  } = data;

  if (!userId || !requestType || !title || !description || !contactEmail) {
    return {
      success: false,
      statusCode: 400,
      message:
        "El usuario, tipo de solicitud, título, descripción y correo de contacto son obligatorios"
    };
  }

  const newRequest = {
    id: `privacy_request_${privacyRequestsMemory.length + 1}`,
    userId,
    requestType,
    title,
    description,
    contactEmail,
    status: "recibida",
    priority: data.priority || "media",
    relatedCaseId: relatedCaseId || null,
    relatedDocumentId: relatedDocumentId || null,
    metadata: metadata || null,
    responseNotes: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    closedAt: null
  };

  privacyRequestsMemory.push(newRequest);

  return {
    success: true,
    statusCode: 201,
    message: "Solicitud de privacidad registrada correctamente",
    privacyRequest: newRequest
  };
};

const getPrivacyRequests = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Solicitudes de privacidad obtenidas correctamente",
    total: privacyRequestsMemory.length,
    privacyRequests: privacyRequestsMemory
  };
};

const getPrivacyRequestById = (requestId) => {
  const foundRequest = privacyRequestsMemory.find(
    (request) => request.id === requestId
  );

  if (!foundRequest) {
    return {
      success: false,
      statusCode: 404,
      message: "Solicitud de privacidad no encontrada"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Solicitud de privacidad encontrada correctamente",
    privacyRequest: foundRequest
  };
};

const updatePrivacyRequestStatus = (requestId, data) => {
  const foundRequest = privacyRequestsMemory.find(
    (request) => request.id === requestId
  );

  if (!foundRequest) {
    return {
      success: false,
      statusCode: 404,
      message: "Solicitud de privacidad no encontrada"
    };
  }

  if (!data.newStatus) {
    return {
      success: false,
      statusCode: 400,
      message: "El nuevo estado de la solicitud es obligatorio"
    };
  }

  foundRequest.status = data.newStatus;
  foundRequest.responseNotes =
    data.responseNotes || "Actualización sin notas de respuesta";
  foundRequest.updatedAt = new Date().toISOString();

  if (
    data.newStatus === "cerrada" ||
    data.newStatus === "resuelta" ||
    data.newStatus === "rechazada"
  ) {
    foundRequest.closedAt = new Date().toISOString();
  }

  return {
    success: true,
    statusCode: 200,
    message: "Estado de la solicitud de privacidad actualizado correctamente",
    privacyRequest: foundRequest
  };
};

module.exports = {
  createPrivacyRequest,
  getPrivacyRequests,
  getPrivacyRequestById,
  updatePrivacyRequestStatus
};