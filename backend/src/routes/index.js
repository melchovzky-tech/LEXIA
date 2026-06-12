const express = require("express");
const systemRoutes = require("./system.routes");
const authRoutes = require("./auth.routes");
const usersRoutes = require("./users.routes");
const casesRoutes = require("./cases.routes");
const logsRoutes = require("./logs.routes");
const documentsRoutes = require("./documents.routes");

const router = express.Router();

router.use("/", systemRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/cases", casesRoutes);
router.use("/", logsRoutes);
router.use("/", documentsRoutes);

module.exports = router;