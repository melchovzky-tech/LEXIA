const express = require("express");
const systemRoutes = require("./system.routes");

const router = express.Router();

router.use("/", systemRoutes);

module.exports = router;