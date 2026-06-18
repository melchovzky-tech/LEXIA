const express = require("express");
const systemRoutes = require("./system.routes");
const authRoutes = require("./auth.routes");
const usersRoutes = require("./users.routes");
const casesRoutes = require("./cases.routes");
const logsRoutes = require("./logs.routes");
const documentsRoutes = require("./documents.routes");
const lawyersRoutes = require("./lawyers.routes");
const paymentsRoutes = require("./payments.routes");
const notificationsRoutes = require("./notifications.routes");
const messagesRoutes = require("./messages.routes");
const securityRoutes = require("./security.routes");

const router = express.Router();

router.use("/", systemRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/cases", casesRoutes);
router.use("/", logsRoutes);
router.use("/", documentsRoutes);
router.use("/", lawyersRoutes);
router.use("/", paymentsRoutes);
router.use("/", notificationsRoutes);
router.use("/", messagesRoutes);
router.use("/", securityRoutes);

module.exports = router;