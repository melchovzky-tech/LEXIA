const {
  createPrivacyRequest,
  getPrivacyRequests,
  getPrivacyRequestById,
  updatePrivacyRequestStatus
} = require("../services/privacy.service");

const createRequest = (req, res) => {
  const result = createPrivacyRequest(req.body);

  return res.status(result.statusCode).json(result);
};

const getRequests = (req, res) => {
  const result = getPrivacyRequests();

  return res.status(result.statusCode).json(result);
};

const getRequestById = (req, res) => {
  const { requestId } = req.params;

  const result = getPrivacyRequestById(requestId);

  return res.status(result.statusCode).json(result);
};

const updateRequestStatus = (req, res) => {
  const { requestId } = req.params;

  const result = updatePrivacyRequestStatus(requestId, req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  createRequest,
  getRequests,
  getRequestById,
  updateRequestStatus
};