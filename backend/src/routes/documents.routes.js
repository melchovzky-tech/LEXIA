const express = require("express");

const {
  create,
  getByCase,
  getById,
  updateStatus,
  analyze,
  getCertificate
} = require("../controllers/documents.controller");

const router = express.Router();

router.post("/cases/:id/documents", create);
router.get("/cases/:id/documents", getByCase);
router.get("/documents/:documentId", getById);
router.patch("/documents/:documentId/status", updateStatus);
router.post("/documents/:documentId/analyze", analyze);
router.get("/documents/:documentId/analysis-certificate", getCertificate);

module.exports = router;