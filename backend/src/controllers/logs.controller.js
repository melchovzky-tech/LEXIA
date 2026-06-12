const {
  createLog,
  getLogsByCaseId
} = require("../services/logs.service");

const create = (req, res) => {
  const { id } = req.params;

  const result = createLog(id, req.body);

  return res.status(result.statusCode).json(result);
};

const getByCase = (req, res) => {
  const { id } = req.params;

  const result = getLogsByCaseId(id);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByCase
};