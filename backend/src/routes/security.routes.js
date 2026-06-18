const express = require("express");

const {
  createIncident,
  getIncidents,
  getIncidentById,
  updateIncidentStatus
} = require("../controllers/security.controller");

const router = express.Router();

router.post("/security/incidents", createIncident);
router.get("/security/incidents", getIncidents);
router.get("/security/incidents/:incidentId", getIncidentById);
router.patch("/security/incidents/:incidentId/status", updateIncidentStatus);

module.exports = router;