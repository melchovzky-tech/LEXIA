const express = require("express");

const {
  create,
  getByCase,
  getById,
  updateStatus,
  release
} = require("../controllers/payments.controller");

const router = express.Router();

router.post("/cases/:caseId/payments", create);
router.get("/cases/:caseId/payments", getByCase);
router.get("/payments/:paymentId", getById);
router.patch("/payments/:paymentId/status", updateStatus);
router.post("/payments/:paymentId/release", release);

module.exports = router;