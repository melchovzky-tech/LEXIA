const {
  createPayment,
  getPaymentsByCaseId,
  getPaymentById,
  updatePaymentStatus,
  registerPaymentWebhook,
  releasePayment,
  getPaymentReceipt
} = require("../services/payments.service");

const create = async (req, res) => {
  const { caseId } = req.params;

  const result = await createPayment(caseId, req.body);

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

const webhook = (req, res) => {
  const { provider } = req.params;

  const result = registerPaymentWebhook(provider, {
    ...req.query,
    ...req.body
  });

  return res.status(result.statusCode).json(result);
};

const release = (req, res) => {
  const { paymentId } = req.params;

  const result = releasePayment(paymentId, req.body);

  return res.status(result.statusCode).json(result);
};

const getReceipt = (req, res) => {
  const { paymentId } = req.params;

  const result = getPaymentReceipt(paymentId);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByCase,
  getById,
  updateStatus,
  webhook,
  release,
  getReceipt
};
