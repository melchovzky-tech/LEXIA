const express = require("express");

const {
  create,
  getByUser,
  markAsRead
} = require("../controllers/notifications.controller");

const router = express.Router();

router.post("/notifications", create);
router.get("/users/:userId/notifications", getByUser);
router.patch("/notifications/:notificationId/read", markAsRead);

module.exports = router;