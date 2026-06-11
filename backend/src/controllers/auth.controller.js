const {
  registerUser,
  loginUser,
  getProfileTest
} = require("../services/auth.service");

const register = (req, res) => {
  const result = registerUser(req.body);

  return res.status(result.statusCode).json(result);
};

const login = (req, res) => {
  const result = loginUser(req.body);

  return res.status(result.statusCode).json(result);
};

const profileTest = (req, res) => {
  const result = getProfileTest();

  return res.status(result.statusCode).json(result);
};

module.exports = {
  register,
  login,
  profileTest
};