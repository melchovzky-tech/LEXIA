const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(helmet());

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend inicial de LEX-IA CASE funcionando correctamente",
    project: "LEX-IA CASE",
    version: "1.0.0"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    service: "LEX-IA CASE Backend",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/info", (req, res) => {
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
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada"
  });
});

app.listen(PORT, () => {
  console.log(`LEX-IA CASE Backend funcionando en http://localhost:${PORT}`);
});