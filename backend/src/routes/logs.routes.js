const express = require("express");

const {
  create,
  getByCase
} = require("../controllers/logs.controller");

const router = express.Router();

router.post("/cases/:id/log", create);
router.get("/cases/:id/log", getByCase);

module.exports = router;