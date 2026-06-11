const express = require("express");

const {
  create,
  getMyCases,
  getByFolio,
  updateStatus
} = require("../controllers/cases.controller");

const router = express.Router();

router.post("/", create);
router.get("/client/me", getMyCases);
router.get("/:folio", getByFolio);
router.patch("/:id/status", updateStatus);

module.exports = router;