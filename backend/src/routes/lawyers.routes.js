const express = require("express");

const {
  create,
  getAvailable,
  getById,
  updateAvailability,
  assignToCase
} = require("../controllers/lawyers.controller");

const router = express.Router();

router.post("/lawyers", create);
router.get("/lawyers/available", getAvailable);
router.get("/lawyers/:lawyerId", getById);
router.patch("/lawyers/:lawyerId/availability", updateAvailability);
router.post("/cases/:caseId/assign-lawyer", assignToCase);

module.exports = router;