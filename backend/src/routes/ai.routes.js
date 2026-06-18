const express = require("express");

const {
  createDiagnosis,
  getDiagnosis,
  createSummary
} = require("../controllers/ai.controller");

const router = express.Router();

router.post("/ai/preliminary-diagnosis", createDiagnosis);
router.get("/ai/diagnosis/:diagnosisId", getDiagnosis);
router.post("/cases/:caseId/ai-summary", createSummary);

module.exports = router;