const express = require("express");
const systemRoutes = require("./system.routes");
const authRoutes = require("./auth.routes");
const usersRoutes = require("./users.routes");

const router = express.Router();

router.use("/", systemRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

module.exports = router;