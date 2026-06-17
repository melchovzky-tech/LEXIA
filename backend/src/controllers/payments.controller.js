const {
  createPayment,
  getPaymentsByCaseId,
  getPaymentById,
  updatePaymentStatus,
  releasePayment
} = require("../services/payments.service");

const create = (req, res) => {
  const { caseId } = req.params;

  const result = createPayment(caseId, req.body);

  return res.status(result.statusCode).json(result);
};

const getByCase = (req, res) => {
  const { caseId } = req.params;

  const result = getPaymentsByCaseId(caseId);

  return res.status(result.statusCode).json(result);
};

const getById = (req, res) => {
  const { paymentId } = req.params;

  const result = getPaymentById(paymentId);

  return res.status(result.statusCode).json(result);
};

const updateStatus = (req, res) => {
  const { paymentId } = req.params;

  const result = updatePaymentStatus(paymentId, req.body);

  return res.status(result.statusCode).json(result);
};

const release = (req, res) => {
  const { paymentId } = req.params;

  const result = releasePayment(paymentId, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByCase,
  getById,
  updateStatus,
  release
};