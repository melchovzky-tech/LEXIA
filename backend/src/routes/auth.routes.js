const express = require("express");

const {
  register,
  login,
  profileTest
} = require("../controllers/auth.controller");

const {
  validateRegister,
  validateLogin
} = require("../validators/auth.validator");

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/profile-test", profileTest);

module.exports = router;