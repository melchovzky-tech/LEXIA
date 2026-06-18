const {
  createMessage,
  getMessagesByCaseId,
  markMessageAsRead
} = require("../services/messages.service");

const create = (req, res) => {
  const { caseId } = req.params;

  const result = createMessage(caseId, req.body);

  return res.status(result.statusCode).json(result);
};

const getByCase = (req, res) => {
  const { caseId } = req.params;

  const result = getMessagesByCaseId(caseId);

  return res.status(result.statusCode).json(result);
};

const markAsRead = (req, res) => {
  const { messageId } = req.params;

  const result = markMessageAsRead(messageId);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByCase,
  markAsRead
};