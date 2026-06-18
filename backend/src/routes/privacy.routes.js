const express = require("express");

const {
  createRequest,
  getRequests,
  getRequestById,
  updateRequestStatus
} = require("../controllers/privacy.controller");

const router = express.Router();

router.post("/privacy/requests", createRequest);
router.get("/privacy/requests", getRequests);
router.get("/privacy/requests/:requestId", getRequestById);
router.patch("/privacy/requests/:requestId/status", updateRequestStatus);

module.exports = router;