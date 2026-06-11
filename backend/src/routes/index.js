const express = require("express");
const systemRoutes = require("./system.routes");
const authRoutes = require("./auth.routes");

const router = express.Router();

router.use("/", systemRoutes);
router.use("/auth", authRoutes);

module.exports = router;