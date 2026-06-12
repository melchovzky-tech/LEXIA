const {
  createDocument,
  getDocumentsByCaseId,
  getDocumentById,
  updateDocumentStatus,
  analyzeDocument,
  getAnalysisCertificate
} = require("../services/documents.service");

const create = (req, res) => {
  const { id } = req.params;

  const result = createDocument(id, req.body);

  return res.status(result.statusCode).json(result);
};

const getByCase = (req, res) => {
  const { id } = req.params;

  const result = getDocumentsByCaseId(id);

  return res.status(result.statusCode).json(result);
};

const getById = (req, res) => {
  const { documentId } = req.params;

  const result = getDocumentById(documentId);

  return res.status(result.statusCode).json(result);
};

const updateStatus = (req, res) => {
  const { documentId } = req.params;

  const result = updateDocumentStatus(documentId, req.body);

  return res.status(result.statusCode).json(result);
};

const analyze = (req, res) => {
  const { documentId } = req.params;

  const result = analyzeDocument(documentId);

  return res.status(result.statusCode).json(result);
};

const getCertificate = (req, res) => {
  const { documentId } = req.params;

  const result = getAnalysisCertificate(documentId);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  create,
  getByCase,
  getById,
  updateStatus,
  analyze,
  getCertificate
};