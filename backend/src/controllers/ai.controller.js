const {
  createPreliminaryDiagnosis,
  getDiagnosisById,
  createCaseAiSummary
} = require("../services/ai.service");

const createDiagnosis = (req, res) => {
  const result = createPreliminaryDiagnosis(req.body);

  return res.status(result.statusCode).json(result);
};

const getDiagnosis = (req, res) => {
  const { diagnosisId } = req.params;

  const result = getDiagnosisById(diagnosisId);

  return res.status(result.statusCode).json(result);
};

const createSummary = (req, res) => {
  const { caseId } = req.params;

  const result = createCaseAiSummary(caseId, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  createDiagnosis,
  getDiagnosis,
  createSummary
};