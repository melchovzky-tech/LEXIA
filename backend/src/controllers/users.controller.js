const {
  getCurrentUser,
  updateCurrentUser,
  changeCurrentUserPassword
} = require("../services/users.service");

const getMe = (req, res) => {
  const result = getCurrentUser();

  return res.status(result.statusCode).json(result);
};

const updateMe = (req, res) => {
  const result = updateCurrentUser(req.body);

  return res.status(result.statusCode).json(result);
};

const changePassword = (req, res) => {
  const result = changeCurrentUserPassword(req.body);

  return res.status(result.statusCode).json(result);
};

module.exports = {
  getMe,
  updateMe,
  changePassword
};