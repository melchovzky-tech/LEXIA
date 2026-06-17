const {
  createLawyer,
  getAvailableLawyers,
  getLawyerById,
  updateLawyerAvailability,
  assignLawyerToCase
} = require("../services/lawyers.service");

const create = (req, res) => {
  const result = createLawyer(req.body);

  return res.status(result.statusCode).json(result);
};

const getAvailable = (req, res) => {
  const result = getAvailableLawyers();

  return res.status(result.statusCode).json(result);
};

const getById = (req, res) => {
  const { lawyerId } = req.params;

  const result = getLawyerById(lawyerId);

  return res.status(result.statusCode).json(result);
};

const updateAvailability = (req, res) => {
  const { lawyerId } = req.params;

  const result = updateLawyerAvailability(lawyerId, req.body);

  return res.status(result.statusCode).json(result);
};

const assignToCase = (req, res) => {
  const { caseId } = req.params;

  const result = assignLawyerToCase(caseId, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getAvailable,
  getById,
  updateAvailability,
  assignToCase
};