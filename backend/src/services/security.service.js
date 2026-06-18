const securityIncidentsMemory = [];

const createSecurityIncident = (data) => {
  const {
    reportedBy,
    reporterRole,
    incidentType,
    severity,
    title,
    description,
    relatedCaseId,
    relatedUserId,
    relatedDocumentId,
    metadata
  } = data;

  if (!reportedBy || !incidentType || !title || !description) {
    return {
      success: false,
      statusCode: 400,
      message:
        "El reportante, tipo de incidente, título y descripción son obligatorios"
    };
  }

  const newIncident = {
    id: `security_incident_${securityIncidentsMemory.length + 1}`,
    reportedBy,
    reporterRole: reporterRole || "system",
    incidentType,
    severity: severity || "media",
    title,
    description,
    status: "abierto",
    relatedCaseId: relatedCaseId || null,
    relatedUserId: relatedUserId || null,
    relatedDocumentId: relatedDocumentId || null,
    metadata: metadata || null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    closedAt: null
  };

  securityIncidentsMemory.push(newIncident);

  return {
    success: true,
    statusCode: 201,
    message: "Incidente de seguridad registrado correctamente",
    incident: newIncident
  };
};

const getSecurityIncidents = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Incidentes de seguridad obtenidos correctamente",
    total: securityIncidentsMemory.length,
    incidents: securityIncidentsMemory
  };
};

const getSecurityIncidentById = (incidentId) => {
  const foundIncident = securityIncidentsMemory.find(
    (incident) => incident.id === incidentId
  );

  if (!foundIncident) {
    return {
      success: false,
      statusCode: 404,
      message: "Incidente de seguridad no encontrado"
    };
  }

  return {
    success: true,
    statusCode: 200,
    message: "Incidente de seguridad encontrado correctamente",
    incident: foundIncident
  };
};

const updateSecurityIncidentStatus = (incidentId, data) => {
  const foundIncident = securityIncidentsMemory.find(
    (incident) => incident.id === incidentId
  );

  if (!foundIncident) {
    return {
      success: false,
      statusCode: 404,
      message: "Incidente de seguridad no encontrado"
    };
  }

  if (!data.newStatus) {
    return {
      success: false,
      statusCode: 400,
      message: "El nuevo estado del incidente es obligatorio"
    };
  }

  foundIncident.status = data.newStatus;
  foundIncident.resolutionNotes =
    data.resolutionNotes || "Actualización sin notas de resolución";
  foundIncident.updatedAt = new Date().toISOString();

  if (data.newStatus === "cerrado" || data.newStatus === "resuelto") {
    foundIncident.closedAt = new Date().toISOString();
  }

  return {
    success: true,
    statusCode: 200,
    message: "Estado del incidente de seguridad actualizado correctamente",
    incident: foundIncident
  };
};

module.exports = {
  createSecurityIncident,
  getSecurityIncidents,
  getSecurityIncidentById,
  updateSecurityIncidentStatus
};