const IAJUR_API_URL = "http://127.0.0.1:8001/consultar";

document.addEventListener("DOMContentLoaded", () => {
  const analyzeCaseButton = document.getElementById("analyzeCaseButton");
  const clearCaseButton = document.getElementById("clearCaseButton");
  const caseText = document.getElementById("caseText");
  const caseState = document.getElementById("caseState");
  const iajurStatus = document.getElementById("iajurStatus");
  const iajurResult = document.getElementById("iajurResult");
  const resultSection = document.getElementById("iajur-result-section");

  const loginModal = document.getElementById("loginModal");
  const privacyModal = document.getElementById("privacyModal");
  const termsModal = document.getElementById("termsModal");

  const openLoginButtons = document.querySelectorAll("[data-open-login]");
  const openPrivacyButtons = document.querySelectorAll("[data-open-privacy]");
  const openTermsButtons = document.querySelectorAll("[data-open-terms]");
  const closeModalButtons = document.querySelectorAll("[data-close-modal]");
  const scrollCaseButtons = document.querySelectorAll("[data-scroll-case]");

  scrollCaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById("cuentame");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  openLoginButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(loginModal));
  });

  openPrivacyButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(privacyModal));
  });

  openTermsButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(termsModal));
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal").forEach((modal) => closeModal(modal));
    }
  });

  if (clearCaseButton) {
    clearCaseButton.addEventListener("click", () => {
      if (caseText) caseText.value = "";
      if (caseState) caseState.value = "";
      if (iajurStatus) iajurStatus.textContent = "";
      if (iajurResult) iajurResult.textContent = "";
      if (resultSection) resultSection.classList.add("hidden");
    });
  }

  if (analyzeCaseButton) {
    analyzeCaseButton.addEventListener("click", async () => {
      const text = caseText.value.trim();
      const state = caseState.value.trim();

      if (!state) {
        iajurStatus.textContent = "Selecciona el Estado de la República.";
        return;
      }

      if (!text) {
        iajurStatus.textContent = "Describe brevemente tu caso antes de analizarlo.";
        return;
      }

      const ramaDetectada = detectLegalBranch(text);
      const pregunta = buildQuestionForIAJUR(text, state, ramaDetectada);

      iajurStatus.textContent = "LEX-IA está consultando IAJUR Engine...";
      resultSection.classList.add("hidden");
      iajurResult.textContent = "";

      try {
        const response = await fetch(IAJUR_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            pregunta: pregunta,
            rama: ramaDetectada,
            top_k: 5,
            incluir_doctrina: false
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();

        iajurStatus.textContent = "Consulta completada.";
        iajurResult.textContent = formatClientResponse(data, text, state, ramaDetectada);
        resultSection.classList.remove("hidden");

        resultSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } catch (error) {
        iajurStatus.textContent = "No se pudo conectar con IAJUR Engine.";

        iajurResult.textContent =
          "LEX-IA no pudo consultar el motor documental en este momento.\n\n" +
          "Verifica lo siguiente:\n" +
          "1. Que IAJUR esté encendido en http://127.0.0.1:8001\n" +
          "2. Que el archivo api.py tenga CORS habilitado.\n" +
          "3. Que el navegador haya sido recargado con Ctrl + F5.\n\n" +
          "Detalle técnico:\n" +
          error.message;

        resultSection.classList.remove("hidden");

        resultSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
});

function detectLegalBranch(text) {
  const value = normalizeText(text);

  const laboralKeywords = [
    "despido",
    "despidieron",
    "trabajo",
    "trabajador",
    "patron",
    "patrón",
    "salario",
    "liquidacion",
    "liquidación",
    "finiquito",
    "renuncia",
    "imss",
    "incapacidad",
    "aguinaldo",
    "vacaciones",
    "jornada",
    "contrato laboral",
    "nómina",
    "nomina",
    "prestaciones"
  ];

  const federalKeywords = [
    "amparo",
    "constitucion",
    "constitución",
    "autoridad",
    "acto de autoridad",
    "procedimiento administrativo",
    "multa",
    "derechos humanos",
    "datos personales",
    "responsabilidad administrativa",
    "federal",
    "penal federal"
  ];

  if (laboralKeywords.some((word) => value.includes(normalizeText(word)))) {
    return "laboral";
  }

  if (federalKeywords.some((word) => value.includes(normalizeText(word)))) {
    return "federal";
  }

  return "federal";
}

function buildQuestionForIAJUR(text, state, branch) {
  return `Caso planteado por usuario en ${state}. Materia probable: ${branch}. Hechos: ${text}`;
}

function formatClientResponse(data, originalText, state, branch) {
  const respuestaIAJUR = data && data.respuesta
    ? data.respuesta
    : JSON.stringify(data, null, 2);

  return `Orientación preliminar LEX-IA

Estado seleccionado:
${state}

Materia probable detectada:
${capitalize(branch)}

Caso descrito:
${originalText}

Resultado documental localizado por IAJUR:
${respuestaIAJUR}

Siguiente paso sugerido:
Reúne documentos relacionados con tu caso, fechas, mensajes, comprobantes, contratos, recibos, identificaciones, pruebas de pago o cualquier evidencia disponible. Un abogado deberá revisar la información para confirmar la estrategia jurídica adecuada.

Nota:
Esta orientación es preliminar, informativa y no sustituye la asesoría personalizada de un abogado autorizado.`;
}

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
}