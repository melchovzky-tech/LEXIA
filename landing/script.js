const loginBtn = document.getElementById("loginBtn");
const heroLoginBtn = document.getElementById("heroLoginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const heroCreateAccountBtn = document.getElementById("heroCreateAccountBtn");
const continueCreateAccountBtn = document.getElementById("continueCreateAccountBtn");
const continueLoginBtn = document.getElementById("continueLoginBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const landingView = document.getElementById("landingView");
const dashboardView = document.getElementById("dashboardView");
const logoutBtn = document.getElementById("logoutBtn");

const generateGuideBtn = document.getElementById("generateGuideBtn");
const clearGuideBtn = document.getElementById("clearGuideBtn");
const legalArea = document.getElementById("legalArea");
const stateSelect = document.getElementById("stateSelect");
const caseDescription = document.getElementById("caseDescription");
const guideResult = document.getElementById("guideResult");
const resultArea = document.getElementById("resultArea");
const resultState = document.getElementById("resultState");
const resultFolio = document.getElementById("resultFolio");
const riskBadge = document.getElementById("riskBadge");
const documentsList = document.getElementById("documentsList");
const nextStepText = document.getElementById("nextStepText");

const openPrivacyBtn = document.getElementById("openPrivacyBtn");
const openTermsBtn = document.getElementById("openTermsBtn");
const privacyModal = document.getElementById("privacyModal");
const termsModal = document.getElementById("termsModal");
const footerLoginBtn = document.getElementById("footerLoginBtn");
const footerCreateBtn = document.getElementById("footerCreateBtn");
const termsCheck = document.getElementById("termsCheck");

const DEMO_EMAIL = "cliente@lexia.test";
const DEMO_PASSWORD = "123456";

const areaLabels = {
  laboral: "Derecho laboral",
  familiar: "Derecho familiar",
  sucesiones: "Sucesiones",
  civil: "Derecho civil",
  militar: "Derecho militar informativo",
  general: "Orientación general"
};

const stateLabels = {
  AGU: "Aguascalientes",
  BCN: "Baja California",
  BCS: "Baja California Sur",
  CAM: "Campeche",
  CHP: "Chiapas",
  CHH: "Chihuahua",
  CDMX: "Ciudad de México",
  COA: "Coahuila",
  COL: "Colima",
  DUR: "Durango",
  GTO: "Guanajuato",
  GRO: "Guerrero",
  HGO: "Hidalgo",
  JAL: "Jalisco",
  MEX: "Estado de México",
  MIC: "Michoacán",
  MOR: "Morelos",
  NAY: "Nayarit",
  NLE: "Nuevo León",
  OAX: "Oaxaca",
  PUE: "Puebla",
  QRO: "Querétaro",
  ROO: "Quintana Roo",
  SLP: "San Luis Potosí",
  SIN: "Sinaloa",
  SON: "Sonora",
  TAB: "Tabasco",
  TAM: "Tamaulipas",
  TLA: "Tlaxcala",
  VER: "Veracruz",
  YUC: "Yucatán",
  ZAC: "Zacatecas"
};

const documentsByArea = {
  laboral: [
    "Identificación oficial",
    "Contrato laboral, si existe",
    "Recibos de nómina",
    "Comprobantes de pago",
    "Mensajes o documentos relacionados con el despido"
  ],
  familiar: [
    "Acta de matrimonio, si aplica",
    "Actas de nacimiento de hijas o hijos",
    "Comprobantes de ingresos",
    "Documentos relacionados con gastos familiares"
  ],
  sucesiones: [
    "Acta de defunción",
    "Actas de nacimiento de posibles herederos",
    "Testamento, si existe",
    "Documentos de bienes"
  ],
  civil: [
    "Contrato relacionado",
    "Identificación oficial",
    "Comprobantes de pago",
    "Mensajes, recibos o fotografías"
  ],
  militar: [
    "Identificación oficial",
    "Documento o acto administrativo relacionado",
    "Fechas relevantes",
    "Datos de la autoridad o mando que intervino"
  ],
  general: [
    "Identificación oficial",
    "Documentos relacionados con el caso",
    "Fechas relevantes",
    "Datos de las personas involucradas"
  ]
};

const nextStepsByArea = {
  laboral:
    "Reúne documentos laborales y verifica fechas de despido, pagos pendientes y posibles plazos de reclamación.",
  familiar:
    "Organiza documentos familiares, ingresos, gastos y datos de las partes para una revisión inicial.",
  sucesiones:
    "Identifica herederos, bienes, existencia de testamento y documentos civiles indispensables.",
  civil:
    "Revisa el contrato, comprobantes de pago y comunicaciones relacionadas con el asunto.",
  militar:
    "Ordena cronológicamente los hechos y conserva documentos oficiales relacionados con el acto o trámite.",
  general:
    "Organiza los hechos en orden cronológico y reúne documentos que permitan una revisión inicial."
};

const openModal = (mode = "login") => {
  loginModal.classList.remove("hidden");
  loginError.classList.add("hidden");
  loginError.textContent = "Usuario o contraseña incorrectos.";

  emailInput.value = mode === "login" ? DEMO_EMAIL : "";
  passwordInput.value = "";

  if (termsCheck) {
    termsCheck.checked = false;
  }

  if (mode === "create") {
    modalTitle.textContent = "Crear cuenta LEX-IA";
    modalSubtitle.textContent =
      "Registra tus datos para guardar tu expediente y continuar el seguimiento.";
  } else {
    modalTitle.textContent = "Acceso LEX-IA";
    modalSubtitle.textContent = "Ingresa con tus datos para abrir el panel.";
  }

  setTimeout(() => emailInput.focus(), 100);
};

const closeModal = () => {
  loginModal.classList.add("hidden");
};

const showDashboard = () => {
  landingView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
  closeModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showLanding = () => {
  dashboardView.classList.add("hidden");
  landingView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const getRiskLevel = (area, description) => {
  const text = description.toLowerCase();

  if (
    text.includes("urgente") ||
    text.includes("plazo") ||
    text.includes("demanda") ||
    text.includes("audiencia") ||
    text.includes("despido") ||
    text.includes("amenaza")
  ) {
    return "alto";
  }

  if (area === "laboral" || area === "familiar" || area === "militar") {
    return "medio";
  }

  return "bajo";
};

const renderDocuments = (area) => {
  documentsList.innerHTML = "";

  const docs = documentsByArea[area] || documentsByArea.general;

  docs.forEach((documentName) => {
    const item = document.createElement("li");
    item.textContent = documentName;
    documentsList.appendChild(item);
  });
};

const generateGuide = () => {
  const selectedArea = legalArea.value;
  const selectedState = stateSelect.value;
  const description = caseDescription.value.trim();

  if (!selectedArea || !selectedState || !description) {
    alert("Completa la rama del derecho, el Estado y la descripción del caso.");
    return;
  }

  const risk = getRiskLevel(selectedArea, description);

  resultArea.textContent = areaLabels[selectedArea] || "Orientación general";
  resultState.textContent = stateLabels[selectedState] || "No especificado";
  resultFolio.textContent = `LEX-IA-${selectedArea.toUpperCase()}-${selectedState}-DEMO-0001`;

  riskBadge.textContent = `Riesgo ${risk}`;
  riskBadge.className = "risk-badge";

  if (risk === "alto") {
    riskBadge.style.color = "#ff5b68";
    riskBadge.style.background = "rgba(255, 91, 104, 0.12)";
  } else if (risk === "medio") {
    riskBadge.style.color = "#b7791f";
    riskBadge.style.background = "#fff7dc";
  } else {
    riskBadge.style.color = "#07885f";
    riskBadge.style.background = "rgba(32, 201, 151, 0.13)";
  }

  renderDocuments(selectedArea);
  nextStepText.textContent = nextStepsByArea[selectedArea] || nextStepsByArea.general;

  guideResult.classList.remove("hidden");
  guideResult.scrollIntoView({ behavior: "smooth", block: "start" });
};

const clearGuide = () => {
  legalArea.value = "";
  stateSelect.value = "";
  caseDescription.value = "";
  guideResult.classList.add("hidden");
};

const openLegalModal = (modal) => {
  if (modal) {
    modal.classList.remove("hidden");
  }
};

const closeLegalModal = (modal) => {
  if (modal) {
    modal.classList.add("hidden");
  }
};

loginBtn.addEventListener("click", () => openModal("login"));
heroLoginBtn.addEventListener("click", () => openModal("login"));
createAccountBtn.addEventListener("click", () => openModal("create"));
heroCreateAccountBtn.addEventListener("click", () => openModal("create"));
continueCreateAccountBtn.addEventListener("click", () => openModal("create"));
continueLoginBtn.addEventListener("click", () => openModal("login"));
closeModalBtn.addEventListener("click", closeModal);
logoutBtn.addEventListener("click", showLanding);
generateGuideBtn.addEventListener("click", generateGuide);
clearGuideBtn.addEventListener("click", clearGuide);

if (footerLoginBtn) {
  footerLoginBtn.addEventListener("click", () => openModal("login"));
}

if (footerCreateBtn) {
  footerCreateBtn.addEventListener("click", () => openModal("create"));
}

if (openPrivacyBtn) {
  openPrivacyBtn.addEventListener("click", () => openLegalModal(privacyModal));
}

if (openTermsBtn) {
  openTermsBtn.addEventListener("click", () => openLegalModal(termsModal));
}

loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeModal();
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  if (!termsCheck || !termsCheck.checked) {
    loginError.textContent =
      "Debes aceptar el Aviso de privacidad y los Términos y condiciones para continuar.";
    loginError.classList.remove("hidden");
    return;
  }

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    showDashboard();
    return;
  }

  if (email && password && modalTitle.textContent.includes("Crear cuenta")) {
    showDashboard();
    return;
  }

  loginError.textContent = "Usuario o contraseña incorrectos.";
  loginError.classList.remove("hidden");
});

document.querySelectorAll("[data-close-legal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-close-legal");
    const modal = document.getElementById(modalId);
    closeLegalModal(modal);
  });
});

[privacyModal, termsModal].forEach((modal) => {
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeLegalModal(modal);
      }
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!loginModal.classList.contains("hidden")) {
      closeModal();
    }

    if (privacyModal && !privacyModal.classList.contains("hidden")) {
      closeLegalModal(privacyModal);
    }

    if (termsModal && !termsModal.classList.contains("hidden")) {
      closeLegalModal(termsModal);
    }
  }
});