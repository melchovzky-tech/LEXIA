const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const apiRoutes = require("./routes");

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const ALLOWED_ORIGINS = [
  FRONTEND_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];

app.use(helmet());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origen no permitido por CORS"));
    },
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

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada"
  });
});

app.listen(PORT, () => {
  console.log(`LEX-IA CASE Backend funcionando en http://localhost:${PORT}`);
});
