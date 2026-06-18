const {
  createSecurityIncident,
  getSecurityIncidents,
  getSecurityIncidentById,
  updateSecurityIncidentStatus
} = require("../services/security.service");

const createIncident = (req, res) => {
  const result = createSecurityIncident(req.body);

  return res.status(result.statusCode).json(result);
};

const getIncidents = (req, res) => {
  const result = getSecurityIncidents();

  return res.status(result.statusCode).json(result);
};

const getIncidentById = (req, res) => {
  const { incidentId } = req.params;

  const result = getSecurityIncidentById(incidentId);

  return res.status(result.statusCode).json(result);
};

const updateIncidentStatus = (req, res) => {
  const { incidentId } = req.params;

  const result = updateSecurityIncidentStatus(incidentId, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  createIncident,
  getIncidents,
  getIncidentById,
  updateIncidentStatus
};