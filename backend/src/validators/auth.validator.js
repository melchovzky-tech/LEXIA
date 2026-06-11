const validateRegister = (req, res, next) => {
  const {
    fullName,
    email,
    phone,
    state,
    password,
    acceptPrivacyNotice,
    acceptTerms
  } = req.body;

  if (!fullName || !email || !phone || !state || !password) {
    return res.status(400).json({
      success: false,
      message: "Faltan datos obligatorios para el registro"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "El correo electrónico no tiene un formato válido"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "La contraseña debe tener al menos 6 caracteres"
    });
  }

  if (acceptPrivacyNotice !== true) {
    return res.status(400).json({
      success: false,
      message: "Debes aceptar el aviso de privacidad"
    });
  }

  if (acceptTerms !== true) {
    return res.status(400).json({
      success: false,
      message: "Debes aceptar los términos y condiciones"
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Correo y contraseña son obligatorios"
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin
};