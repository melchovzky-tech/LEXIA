const getRoot = (req, res) => {
  res.json({
    success: true,
    message: "Backend inicial de LEX-IA CASE funcionando correctamente",
    project: "LEX-IA CASE",
    version: "1.0.0"
  });
};

const getHealth = (req, res) => {
  res.json({
    success: true,
    status: "ok",
    service: "LEX-IA CASE Backend",
    timestamp: new Date().toISOString()
  });
};

const getInfo = (req, res) => {
  res.json({
    success: true,
    name: "LEX-IA CASE",
    description: "Backend preliminar para expedientes juridicos digitales",
    modules: [
      "auth",
      "users",
      "cases",
      "documents",
      "logs",
      "lawyers",
      "ai",
      "privacy",
      "security",
      "payments"
    ],
    warning:
      "Este backend es una version inicial de desarrollo. No usar en produccion sin seguridad, base de datos y autenticacion completas."
  });
};

module.exports = {
  getRoot,
  getHealth,
  getInfo
};