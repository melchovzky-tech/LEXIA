const express = require("express");

const {
  create,
  getByCase,
  markAsRead
} = require("../controllers/messages.controller");

const router = express.Router();

router.post("/cases/:caseId/messages", create);
router.get("/cases/:caseId/messages", getByCase);
router.patch("/messages/:messageId/read", markAsRead);

module.exports = router;