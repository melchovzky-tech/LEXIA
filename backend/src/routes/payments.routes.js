const express = require("express");

const {
  create,
  getByCase,
  getById,
  updateStatus,
  webhook,
  release,
  getReceipt
} = require("../controllers/payments.controller");

const router = express.Router();

router.post("/cases/:caseId/payments", create);
router.get("/cases/:caseId/payments", getByCase);
router.get("/payments/:paymentId", getById);
router.patch("/payments/:paymentId/status", updateStatus);
router.post("/payments/webhooks/:provider", webhook);
router.get("/payments/webhooks/:provider", webhook);
router.post("/payments/:paymentId/release", release);
router.get("/payments/:paymentId/receipt", getReceipt);

module.exports = router;
