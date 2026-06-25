const {
  registerUser,
  loginUser,
  getProfileTest
} = require("../services/auth.service");

const sendAuthResult = (res, result) => {
  if (result.success && result.token) {
    res.cookie("lexia_access_token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 1000
    });
  }

  const { token, ...responseBody } = result;

  return res.status(result.statusCode).json(responseBody);
};

const register = async (req, res) => {
  try {
    const result = await registerUser(req.body);

    return sendAuthResult(res, result);
  } catch (error) {
    return res.status(503).json({
      success: false,
      message: "El servicio de registro no está disponible temporalmente"
    });
  }
};

const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);

    return sendAuthResult(res, result);
  } catch (error) {
    return res.status(503).json({
      success: false,
      message: "El servicio de inicio de sesión no está disponible temporalmente"
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("lexia_access_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });

  return res.status(200).json({
    success: true,
    message: "Sesión cerrada correctamente"
  });
};

const profileTest = (req, res) => {
  const result = getProfileTest();

  return res.status(result.statusCode).json(result);
};

module.exports = {
  register,
  login,
  logout,
  profileTest
};
