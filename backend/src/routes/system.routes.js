const express = require("express");

const {
  getRoot,
  getHealth,
  getInfo
} = require("../controllers/system.controller");

const router = express.Router();

router.get("/", getRoot);
router.get("/health", getHealth);
router.get("/info", getInfo);

module.exports = router;