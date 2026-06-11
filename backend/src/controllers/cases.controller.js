const {
  createCase,
  getClientCases,
  getCaseByFolio,
  updateCaseStatus
} = require("../services/cases.service");

const create = (req, res) => {
  const result = createCase(req.body);

  return res.status(result.statusCode).json(result);
};

const getMyCases = (req, res) => {
  const result = getClientCases();

  return res.status(result.statusCode).json(result);
};

const getByFolio = (req, res) => {
  const { folio } = req.params;

  const result = getCaseByFolio(folio);

  return res.status(result.statusCode).json(result);
};

const updateStatus = (req, res) => {
  const { id } = req.params;

  const result = updateCaseStatus(id, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getMyCases,
  getByFolio,
  updateStatus
};