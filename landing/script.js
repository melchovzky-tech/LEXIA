const loginBtn = document.getElementById("loginBtn");
const createAccountBtn = document.getElementById("createAccountBtn");
const heroCreateAccountBtn = document.getElementById("heroCreateAccountBtn");
const heroSearchForm = document.getElementById("heroSearchForm");
const heroCaseSearch = document.getElementById("heroCaseSearch");
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
const registerFields = document.getElementById("registerFields");
const fullNameInput = document.getElementById("fullNameInput");
const phoneInput = document.getElementById("phoneInput");
const registerStateInput = document.getElementById("registerStateInput");
const confirmPasswordField = document.getElementById("confirmPasswordField");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const termsField = document.getElementById("termsField");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const switchAuthModeBtn = document.getElementById("switchAuthModeBtn");
const demoBox = document.getElementById("demoBox");
const accountTypeHelp = document.getElementById("accountTypeHelp");
const userAccountTypeBtn = document.getElementById("userAccountTypeBtn");
const partnerAccountTypeBtn = document.getElementById("partnerAccountTypeBtn");
const loginAccountTypeField = document.getElementById("loginAccountTypeField");
const loginAccountTypeHelp = document.getElementById("loginAccountTypeHelp");
const loginUserTypeBtn = document.getElementById("loginUserTypeBtn");
const loginPartnerTypeBtn = document.getElementById("loginPartnerTypeBtn");
const partnerFields = document.getElementById("partnerFields");
const licenseInput = document.getElementById("licenseInput");
const specialtyInput = document.getElementById("specialtyInput");
const mainHeader = document.getElementById("mainHeader");
const landingView = document.getElementById("landingView");
const dashboardView = document.getElementById("dashboardView");
const partnerDashboardView = document.getElementById("partnerDashboardView");
const clientWorkspace = document.getElementById("clientWorkspace");
const partnerWorkspace = document.getElementById("partnerWorkspace");
const logoutBtn = document.getElementById("logoutBtn");
const partnerLogoutBtn = document.getElementById("partnerLogoutBtn");
const partnerPhotoInput = document.getElementById("partnerPhotoInput");
const partnerPhotoPreview = document.getElementById("partnerPhotoPreview");
const partnerDisplayNameInput = document.getElementById("partnerDisplayNameInput");
const partnerRoleInput = document.getElementById("partnerRoleInput");

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
const DEMO_PASSWORD = "LexiaDemo2026";
const PARTNER_DEMO_EMAIL = "socio@lexia.test";
const PARTNER_DEMO_PASSWORD = "SocioDemo2026";
const cryptoAssets = [
  { id: "BTC", label: "Bitcoin", note: "BTC" },
  { id: "USDT", label: "Tether", note: "USDT" },
  { id: "XRP", label: "Ripple", note: "XRP" },
  { id: "TRX", label: "Tron", note: "TRX" }
];
const caseChatData = {
  "LEX-IA-LAB-GRO-2026-000001": {
    client: "Mariana Lopez - Despido injustificado",
    clientMessage: "Ya subi mis recibos de nomina y la carta que me entregaron.",
    lawyerMessage: "Perfecto, revisare documentos y confirmare plazo de reclamacion."
  },
  "LEX-IA-FAM-CDMX-2026-000014": {
    client: "Raul Perez - Convenio de custodia",
    clientMessage: "Necesito saber que documentos debo entregar para el convenio.",
    lawyerMessage: "Voy a revisar el expediente familiar y te respondere dentro del chat de este folio."
  },
  "LEX-IA-CIV-MEX-2026-000021": {
    client: "Laura Torres - Incumplimiento de contrato",
    clientMessage: "Ya adjunte el contrato y los comprobantes de pago.",
    lawyerMessage: "Gracias, revisare clausulas y pagos antes de sugerir la estrategia."
  }
};
const caseRecords = {
  "LEX-IA-LAB-GRO-2026-000001": {
    folio: "LEX-IA-LAB-GRO-2026-000001",
    client: "Mariana Lopez",
    matter: "Despido injustificado",
    area: "Laboral",
    state: "Guerrero",
    risk: "Alto",
    status: "Revision urgente",
    progress: "68%",
    documents: ["Contrato laboral.pdf", "Recibos de nomina.zip", "Carta de terminacion.jpg"],
    nextStep: "Confirmar fecha de despido, salario diario y pagos pendientes."
  },
  "LEX-IA-FAM-CDMX-2026-000014": {
    folio: "LEX-IA-FAM-CDMX-2026-000014",
    client: "Raul Perez",
    matter: "Convenio de custodia",
    area: "Familiar",
    state: "Ciudad de Mexico",
    risk: "Medio",
    status: "Documentos pendientes",
    progress: "42%",
    documents: ["Acta de nacimiento.pdf", "Comprobantes de gastos.pdf"],
    nextStep: "Solicitar convenio previo, datos de menores y propuesta de visitas."
  },
  "LEX-IA-CIV-MEX-2026-000021": {
    folio: "LEX-IA-CIV-MEX-2026-000021",
    client: "Laura Torres",
    matter: "Incumplimiento de contrato",
    area: "Civil",
    state: "Estado de Mexico",
    risk: "Bajo",
    status: "Analisis preliminar",
    progress: "35%",
    documents: ["Contrato firmado.pdf", "Comprobantes de pago.pdf"],
    nextStep: "Revisar clausulas de cumplimiento, penalizaciones y comunicaciones."
  }
};
let activeCaseFolio = "LEX-IA-LAB-GRO-2026-000001";
let lexiaPayState = {
  method: "marketplace",
  status: "pending",
  amount: 25000,
  platformFeeRate: 0.1,
  currency: "MXN",
  provider: "Marketplace",
  cryptoAsset: "BTC",
  txId: "",
  paymentId: "",
  checkoutUrl: "",
  demoMode: false,
  releasedMilestones: []
};
const API_BASE_URL = window.LEXIA_API_BASE_URL || (
  ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:4000/api"
    : `${window.location.origin}/api`
);
let authMode = "login";
let accountType = "user";

const setActiveCaseChat = (folio) => {
  const chatData = caseChatData[folio];

  if (!chatData) {
    return;
  }

  const activeFolio = document.getElementById("activeCaseChatFolio");
  const activeClient = document.getElementById("activeCaseChatClient");
  const clientMessage = document.getElementById("activeCaseClientMessage");
  const lawyerMessage = document.getElementById("activeCaseLawyerMessage");

  if (activeFolio) activeFolio.textContent = folio;
  if (activeClient) activeClient.textContent = chatData.client;
  if (clientMessage) clientMessage.textContent = chatData.clientMessage;
  if (lawyerMessage) lawyerMessage.textContent = chatData.lawyerMessage;

  document.querySelectorAll("[data-case-chat]").forEach((button) => {
    button.classList.toggle("active", button.dataset.caseChat === folio);
  });
};

const getCaseRecord = (folio = activeCaseFolio) => caseRecords[folio] || caseRecords[activeCaseFolio];

const renderCaseRows = () => Object.values(caseRecords).map((record) => `
  <article class="case-row ${record.risk === "Alto" ? "urgent" : ""}">
    <div class="case-row-main">
      <strong>${record.folio}</strong>
      <p>${record.matter} - ${record.state} - Cliente: ${record.client}</p>
    </div>
    <div class="case-row-actions">
      <span>${record.risk}</span>
      <button class="case-file-btn" type="button" data-case-file="${record.folio}">Expediente</button>
      <button class="case-chat-btn ${record.folio === activeCaseFolio ? "active" : ""}" type="button" data-case-chat="${record.folio}">Chat</button>
    </div>
  </article>
`).join("");

const renderPartnerCases = () => {
  partnerWorkspace.innerHTML = `
    <section class="panel-card large">
      <div class="panel-title">
        <h3>Casos asignados</h3>
        <span class="status-pill">${Object.keys(caseRecords).length} activos</span>
      </div>
      <div class="case-list">${renderCaseRows()}</div>
    </section>
    ${renderPartnerExpediente(activeCaseFolio, true)}
    ${renderPartnerChat(activeCaseFolio)}
  `;
};

const renderPartnerExpediente = (folio = activeCaseFolio, compact = false) => {
  const record = getCaseRecord(folio);
  const documents = record.documents.map((documentName) => `<li>${documentName}</li>`).join("");

  return `
    <section class="panel-card ${compact ? "" : "large"}">
      <div class="panel-title">
        <h3>Expediente</h3>
        <span class="status-pill">${record.status}</span>
      </div>
      <div class="file-detail-grid">
        <div><span>Folio</span><strong>${record.folio}</strong></div>
        <div><span>Cliente</span><strong>${record.client}</strong></div>
        <div><span>Area</span><strong>${record.area}</strong></div>
        <div><span>Riesgo</span><strong>${record.risk}</strong></div>
      </div>
      <div class="case-progress">
        <div><strong>Avance del expediente</strong><span>${record.progress}</span></div>
        <div class="progress-track"><span style="width: ${record.progress}"></span></div>
      </div>
      <p>${record.nextStep}</p>
      <ul class="workspace-list">${documents}</ul>
      <button class="mini-btn" type="button" data-case-chat="${record.folio}">Abrir chat de este expediente</button>
    </section>
  `;
};

const renderPartnerChat = (folio = activeCaseFolio) => {
  const record = getCaseRecord(folio);
  const chat = caseChatData[record.folio];

  return `
    <section class="panel-card case-chat-panel">
      <div class="panel-title">
        <h3>Chat del expediente</h3>
        <span class="status-pill">Folio activo</span>
      </div>
      <div class="case-chat-header">
        <strong id="activeCaseChatFolio">${record.folio}</strong>
        <small id="activeCaseChatClient">${chat.client}</small>
      </div>
      <div class="case-chat-thread">
        <div class="chat-bubble client"><span>Cliente</span><p id="activeCaseClientMessage">${chat.clientMessage}</p></div>
        <div class="chat-bubble lawyer"><span>Abogado</span><p id="activeCaseLawyerMessage">${chat.lawyerMessage}</p></div>
      </div>
      <button class="mini-btn">Responder en este expediente</button>
    </section>
  `;
};

const formatMoney = (amount, currency = "MXN") => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(amount);
};

const getLexiaPayTotals = () => {
  const fee = Math.round(lexiaPayState.amount * lexiaPayState.platformFeeRate);
  return {
    fee,
    net: lexiaPayState.amount - fee,
    released: lexiaPayState.releasedMilestones.reduce((total, milestone) => total + milestone.amount, 0)
  };
};

const getLexiaPayProviderLabel = () => {
  return lexiaPayState.method === "crypto"
    ? `Cripto estable - ${lexiaPayState.cryptoAsset}`
    : "Marketplace - SPEI / tarjeta";
};

const createLexiaPayment = async () => {
  const response = await fetch(`${API_BASE_URL}/cases/${activeCaseFolio}/payments`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: lexiaPayState.amount,
      currency: lexiaPayState.currency,
      concept: `Honorarios legales ${activeCaseFolio}`,
      payerId: "client_demo_001",
      payerEmail: DEMO_EMAIL,
      lawyerId: "lawyer_demo_001",
      paymentMethod: lexiaPayState.method,
      cryptoAsset: lexiaPayState.cryptoAsset,
      notes: "Checkout generado desde LEX-IA PAY"
    })
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "No fue posible generar el pago.");
  }

  return result.payment;
};

const renderLexiaPayClient = () => {
  const totals = getLexiaPayTotals();
  const record = getCaseRecord("LEX-IA-LAB-GRO-2026-000001");
  const statusLabel = lexiaPayState.status === "paid" ? "Pago retenido" : "Pendiente de pago";

  return `
    <section class="panel-card large lexia-pay-card">
      <div class="panel-title">
        <h3>LEX-IA PAY</h3>
        <span class="status-pill">${statusLabel}</span>
      </div>

      <div class="pay-summary">
        <div><span>Expediente</span><strong>${record.folio}</strong></div>
        <div><span>Abogada</span><strong>Lic. Andrea Morales</strong></div>
        <div><span>CotizaciÃ³n</span><strong>${formatMoney(lexiaPayState.amount)}</strong></div>
        <div><span>Metodo</span><strong id="lexiaPayMethodLabel">${getLexiaPayProviderLabel()}</strong></div>
      </div>

      <div class="pay-methods">
        <button class="pay-method ${lexiaPayState.method === "marketplace" ? "active" : ""}" type="button" data-pay-method="marketplace">
          <span class="line-icon icon-pay"></span>
          Marketplace
          <small>Tarjeta, SPEI o pago referenciado con proveedor externo.</small>
        </button>
        <button class="pay-method ${lexiaPayState.method === "crypto" ? "active" : ""}" type="button" data-pay-method="crypto">
          <span class="line-icon icon-crypto"></span>
          Cripto
          <small>BTC, USDT, XRP o TRX con verificación del proveedor.</small>
        </button>
      </div>

      ${lexiaPayState.method === "crypto" ? `
        <div class="crypto-asset-grid" aria-label="Selecciona criptomoneda">
          ${cryptoAssets.map((asset) => `
            <button class="crypto-asset ${lexiaPayState.cryptoAsset === asset.id ? "active" : ""}" type="button" data-crypto-asset="${asset.id}">
              <strong>${asset.note}</strong>
              <span>${asset.label}</span>
            </button>
          `).join("")}
        </div>
      ` : ""}

      <div class="pay-checkout">
        <div class="payment-line"><span>Total cliente</span><strong>${formatMoney(lexiaPayState.amount)}</strong></div>
        <div class="payment-line"><span>ComisiÃ³n plataforma 10%</span><strong>${formatMoney(totals.fee)}</strong></div>
        <div class="payment-line"><span>Neto abogado</span><strong>${formatMoney(totals.net)}</strong></div>
        <div class="payment-line"><span>Estado del dinero</span><strong>${lexiaPayState.status === "paid" ? "Retenido por proveedor" : "Aun no pagado"}</strong></div>
      </div>

      <div class="pay-actions">
        <button class="mini-btn" type="button" data-start-payment>Generar pago seguro</button>
        <button class="mini-btn secondary" type="button" data-copy-payment-link>Copiar enlace de pago</button>
      </div>

      <p class="pay-note">
        Demo operativo: en producción se conectaría a Mercado Pago Marketplace o proveedor cripto.
        LEX-IA no recibe efectivo ni custodia manualmente el dinero.
      </p>
    </section>

    ${renderLexiaPayMilestones()}
  `;
};

const renderLexiaPayMilestones = () => {
  const totals = getLexiaPayTotals();
  const milestones = [
    { id: "acceptance", label: "Aceptacion del caso", percent: 30, amount: 6750 },
    { id: "filing", label: "Primer escrito / estrategia", percent: 30, amount: 6750 },
    { id: "hearing", label: "Audiencia o avance validado", percent: 30, amount: 6750 },
    { id: "closure", label: "Cierre administrativo", percent: 10, amount: 2250 }
  ];

  return `
    <section class="panel-card">
      <div class="panel-title">
        <h3>LiberaciÃ³n por avances</h3>
        <span class="status-pill">${formatMoney(totals.released)} liberado</span>
      </div>
      <div class="milestone-list">
        ${milestones.map((milestone) => {
          const released = lexiaPayState.releasedMilestones.some((item) => item.id === milestone.id);
          return `
            <div class="milestone-item ${released ? "released" : ""}">
              <div>
                <strong>${milestone.label}</strong>
                <small>${milestone.percent}% del neto abogado - ${formatMoney(milestone.amount)}</small>
              </div>
              <span>${released ? "Liberado" : "Pendiente"}</span>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
};

const renderPartnerHonorarios = (folio = activeCaseFolio) => {
  const totals = getLexiaPayTotals();
  const record = getCaseRecord(folio);

  return `
    <section class="panel-card large lexia-pay-card">
      <div class="panel-title">
        <h3>Honorarios LEX-IA PAY</h3>
        <span class="status-pill">${lexiaPayState.status === "paid" ? "Cliente pagÃ³" : "CotizaciÃ³n enviada"}</span>
      </div>
      <div class="pay-summary">
        <div><span>Folio</span><strong>${record.folio}</strong></div>
        <div><span>Cliente</span><strong>${record.client}</strong></div>
        <div><span>CotizaciÃ³n</span><strong>${formatMoney(lexiaPayState.amount)}</strong></div>
        <div><span>DepÃ³sito abogado</span><strong>CLABE terminaciÃ³n 0421</strong></div>
      </div>
      <div class="payment-line"><span>ComisiÃ³n LEX-IA</span><strong>${formatMoney(totals.fee)}</strong></div>
      <div class="payment-line"><span>Neto abogado</span><strong>${formatMoney(totals.net)}</strong></div>
      <div class="payment-line"><span>Liberado a la fecha</span><strong>${formatMoney(totals.released)}</strong></div>
      <div class="payment-line"><span>Metodo pagado por cliente</span><strong>${getLexiaPayProviderLabel()}</strong></div>
      <button class="mini-btn" type="button" data-release-next ${lexiaPayState.status !== "paid" ? "disabled" : ""}>Liberar siguiente avance</button>
    </section>
    ${renderLexiaPayMilestones()}
  `;
};

const setSidebarActive = (selector, activeValue) => {
  document.querySelectorAll(selector).forEach((button) => {
    const value = button.dataset.partnerSection || button.dataset.clientSection;
    button.classList.toggle("active", value === activeValue);
  });
};

const renderPartnerSection = (section, folio = activeCaseFolio) => {
  if (!partnerWorkspace) return;
  activeCaseFolio = folio;
  setSidebarActive("[data-partner-section]", section);

  if (section === "cases") {
    renderPartnerCases();
  } else if (section === "expedientes") {
    partnerWorkspace.innerHTML = renderPartnerExpediente(folio) + renderPartnerChat(folio);
  } else if (section === "documentos") {
    const record = getCaseRecord(folio);
    partnerWorkspace.innerHTML = `
      <section class="panel-card large">
        <div class="panel-title"><h3>Documentos del expediente</h3><span class="status-pill">${record.documents.length} archivos</span></div>
        <div class="document-list">${record.documents.map((doc) => `<div><span class="line-icon icon-doc"></span><div><strong>${doc}</strong><small>${record.folio}</small></div></div>`).join("")}</div>
        <button class="mini-btn">Solicitar documento al cliente</button>
      </section>
      ${renderPartnerChat(folio)}
    `;
  } else if (section === "mensajes") {
    partnerWorkspace.innerHTML = renderPartnerChat(folio) + renderPartnerExpediente(folio, true);
  } else if (section === "honorarios") {
    partnerWorkspace.innerHTML = renderPartnerHonorarios(folio);
  } else if (section === "rendimiento") {
    partnerWorkspace.innerHTML = `
      <section class="panel-card large">
        <div class="panel-title"><h3>Rendimiento</h3><span class="status-pill">Demo</span></div>
        <div class="file-detail-grid">
          <div><span>Respuesta promedio</span><strong>18 min</strong></div>
          <div><span>Casos resueltos</span><strong>14</strong></div>
          <div><span>Satisfaccion</span><strong>96%</strong></div>
          <div><span>Prioridad alta</span><strong>3</strong></div>
        </div>
      </section>
      <section class="panel-card"><div class="panel-title"><h3>Resumen</h3><span class="status-pill">6 casos</span></div><p>Tu actividad se alimenta de casos asignados, tiempos de respuesta y avances validados.</p></section>
    `;
  } else if (section === "validacion") {
    partnerWorkspace.innerHTML = `
      <section class="panel-card large">
        <div class="panel-title"><h3>Validacion profesional</h3><span class="status-pill">Verificado demo</span></div>
        <div class="file-detail-grid">
          <div><span>Cedula</span><strong>12345678</strong></div>
          <div><span>Especialidad</span><strong>Laboral</strong></div>
          <div><span>Estado base</span><strong>Guerrero</strong></div>
          <div><span>Estatus</span><strong>Activo</strong></div>
        </div>
        <button class="mini-btn">Actualizar documentacion</button>
      </section>
    `;
  }

  setActiveCaseChat(activeCaseFolio);
};

const renderClientSection = (section) => {
  if (!clientWorkspace) return;
  setSidebarActive("[data-client-section]", section);
  const record = getCaseRecord("LEX-IA-LAB-GRO-2026-000001");

  const templates = {
    inicio: `
      <section class="panel-card large"><div class="panel-title"><h3>Expediente activo</h3><span class="status-pill">En revision</span></div><p>${record.folio}</p><p>${record.matter} - ${record.state}</p><button class="mini-btn" data-client-section-jump="expediente">Ver expediente</button></section>
      <section class="panel-card"><div class="panel-title"><h3>Chat del expediente</h3><span class="status-pill">Nuevo</span></div><p>Tu chat esta ligado al folio ${record.folio}.</p><button class="mini-btn" data-client-section-jump="mensajes">Abrir chat</button></section>
    `,
    expediente: renderPartnerExpediente(record.folio).replace("<h3>Expediente</h3>", "<h3>Mi expediente</h3>"),
    documentos: `<section class="panel-card large"><div class="panel-title"><h3>Mis documentos</h3><span class="status-pill">3 archivos</span></div><ul class="workspace-list">${record.documents.map((doc) => `<li>${doc}</li>`).join("")}</ul><button class="mini-btn">Subir documento</button></section>`,
    diagnostico: `<section class="panel-card large"><div class="panel-title"><h3>Diagnostico IA</h3><span class="risk-pill">Alto</span></div><p>Posible despido injustificado. Se recomienda revision prioritaria por abogado.</p></section>`,
    abogado: `<section class="panel-card large"><div class="panel-title"><h3>Abogado asignado</h3><span class="status-pill">Disponible</span></div><div class="lawyer-card"><div class="avatar">AM</div><div><strong>Abogada Marcela Rios</strong><p>Especialista laboral - Guerrero</p><small>Chat vinculado a ${record.folio}</small></div></div></section>`,
    pay: renderLexiaPayClient(),
    mensajes: renderPartnerChat(record.folio),
    notificaciones: `<section class="panel-card large"><div class="panel-title"><h3>Notificaciones</h3><span class="status-pill">2 nuevas</span></div><ul class="workspace-list"><li>Tu abogado solicito confirmar fecha de despido.</li><li>Documento analizado correctamente.</li></ul></section>`,
    privacidad: `<section class="panel-card large"><div class="panel-title"><h3>Privacidad</h3><span class="status-pill">Controlado</span></div><p>Gestiona permisos, datos personales y solicitudes ARCO desde aqui.</p></section>`
  };

  clientWorkspace.innerHTML = templates[section] || templates.inicio;
};

const areaLabels = {
  laboral: "Derecho laboral",
  familiar: "Derecho familiar",
  sucesiones: "Sucesiones",
  civil: "Derecho civil",
  militar: "Derecho militar informativo",
  general: "OrientaciÃ³n general"
};

const stateLabels = {
  AGU: "Aguascalientes",
  BCN: "Baja California",
  BCS: "Baja California Sur",
  CAM: "Campeche",
  CHP: "Chiapas",
  CHH: "Chihuahua",
  CDMX: "Ciudad de MÃ©xico",
  COA: "Coahuila",
  COL: "Colima",
  DUR: "Durango",
  GTO: "Guanajuato",
  GRO: "Guerrero",
  HGO: "Hidalgo",
  JAL: "Jalisco",
  MEX: "Estado de MÃ©xico",
  MIC: "MichoacÃ¡n",
  MOR: "Morelos",
  NAY: "Nayarit",
  NLE: "Nuevo LeÃ³n",
  OAX: "Oaxaca",
  PUE: "Puebla",
  QRO: "QuerÃ©taro",
  ROO: "Quintana Roo",
  SLP: "San Luis PotosÃ­",
  SIN: "Sinaloa",
  SON: "Sonora",
  TAB: "Tabasco",
  TAM: "Tamaulipas",
  TLA: "Tlaxcala",
  VER: "Veracruz",
  YUC: "YucatÃ¡n",
  ZAC: "Zacatecas"
};

registerStateInput.innerHTML = [
  '<option value="">Selecciona tu Estado</option>',
  ...Object.entries(stateLabels).map(
    ([stateCode, stateName]) => `<option value="${stateCode}">${stateName}</option>`
  )
].join("");

const documentsByArea = {
  laboral: [
    "IdentificaciÃ³n oficial",
    "Contrato laboral, si existe",
    "Recibos de nÃ³mina",
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
    "Acta de defunciÃ³n",
    "Actas de nacimiento de posibles herederos",
    "Testamento, si existe",
    "Documentos de bienes"
  ],
  civil: [
    "Contrato relacionado",
    "IdentificaciÃ³n oficial",
    "Comprobantes de pago",
    "Mensajes, recibos o fotografÃ­as"
  ],
  militar: [
    "IdentificaciÃ³n oficial",
    "Documento o acto administrativo relacionado",
    "Fechas relevantes",
    "Datos de la autoridad o mando que intervino"
  ],
  general: [
    "IdentificaciÃ³n oficial",
    "Documentos relacionados con el caso",
    "Fechas relevantes",
    "Datos de las personas involucradas"
  ]
};

const nextStepsByArea = {
  laboral:
    "ReÃºne documentos laborales y verifica fechas de despido, pagos pendientes y posibles plazos de reclamaciÃ³n.",
  familiar:
    "Organiza documentos familiares, ingresos, gastos y datos de las partes para una revisiÃ³n inicial.",
  sucesiones:
    "Identifica herederos, bienes, existencia de testamento y documentos civiles indispensables.",
  civil:
    "Revisa el contrato, comprobantes de pago y comunicaciones relacionadas con el asunto.",
  militar:
    "Ordena cronolÃ³gicamente los hechos y conserva documentos oficiales relacionados con el acto o trÃ¡mite.",
  general:
    "Organiza los hechos en orden cronolÃ³gico y reÃºne documentos que permitan una revisiÃ³n inicial."
};

const setAccountType = (type) => {
  accountType = type;
  const isPartner = type === "partner";

  if (userAccountTypeBtn && partnerAccountTypeBtn) {
    userAccountTypeBtn.classList.toggle("active", !isPartner);
    partnerAccountTypeBtn.classList.toggle("active", isPartner);
  }

  if (loginUserTypeBtn && loginPartnerTypeBtn) {
    loginUserTypeBtn.classList.toggle("active", !isPartner);
    loginPartnerTypeBtn.classList.toggle("active", isPartner);
  }

  if (partnerFields) {
    partnerFields.classList.toggle("hidden", !isPartner);
  }

  if (licenseInput && specialtyInput) {
    licenseInput.required = authMode === "create" && isPartner;
    specialtyInput.required = authMode === "create" && isPartner;
  }

  if (accountTypeHelp) {
    accountTypeHelp.textContent = isPartner
      ? "Socio abogado: registro profesional para recibir, revisar y gestionar casos asignados."
      : "Usuario: persona que busca contratar y dar seguimiento a un abogado.";
  }

  if (loginAccountTypeHelp) {
    loginAccountTypeHelp.textContent = isPartner
      ? "Socio abogado: entra para ver tus casos asignados, chats por folio y honorarios."
      : "Usuario: entra para ver tu expediente, abogado asignado y chat del caso.";
  }

  if (authMode === "login") {
    emailInput.value = isPartner ? PARTNER_DEMO_EMAIL : DEMO_EMAIL;
    passwordInput.value = isPartner ? PARTNER_DEMO_PASSWORD : DEMO_PASSWORD;
  }

  if (modalSubtitle && authMode === "create") {
    modalSubtitle.textContent = isPartner
      ? "Registra tu perfil profesional para recibir casos asignados dentro de LEX-IA."
      : "Abre tu cuenta de cliente para guardar expedientes y continuar el seguimiento.";
  }

  if (authSubmitBtn && authMode === "create") {
    authSubmitBtn.textContent = isPartner ? "Crear cuenta de socio" : "Crear mi cuenta";
  }
};

const openModal = (mode = "login") => {
  authMode = mode;
  loginModal.classList.remove("hidden");
  loginError.classList.add("hidden");
  loginError.classList.remove("success-message");
  loginError.classList.add("error-message");
  loginError.textContent = "Usuario o contraseÃ±a incorrectos.";

  loginForm.reset();
  emailInput.value = mode === "login" ? DEMO_EMAIL : "";
  passwordInput.value = mode === "login" ? DEMO_PASSWORD : "";

  if (termsCheck) {
    termsCheck.checked = false;
  }

  if (mode === "create") {
    modalTitle.textContent = "Crear cuenta LEX-IA";
    modalSubtitle.textContent =
      "Abre tu cuenta de cliente para guardar expedientes y continuar el seguimiento.";
    registerFields.classList.remove("hidden");
    if (loginAccountTypeField) {
      loginAccountTypeField.classList.add("hidden");
    }
    confirmPasswordField.classList.remove("hidden");
    termsField.classList.remove("hidden");
    demoBox.classList.add("hidden");
    fullNameInput.required = true;
    phoneInput.required = true;
    registerStateInput.required = true;
    confirmPasswordInput.required = true;
    passwordInput.autocomplete = "new-password";
    passwordInput.minLength = 8;
    passwordInput.placeholder = "MÃ­nimo 8 caracteres";
    authSubmitBtn.textContent = "Crear mi cuenta";
    setAccountType(accountType);
    switchAuthModeBtn.textContent = "Â¿Ya tienes cuenta? Iniciar sesiÃ³n";
  } else {
    modalTitle.textContent = "Acceso LEX-IA";
    modalSubtitle.textContent = "Ingresa con tus datos para abrir el panel.";
    registerFields.classList.add("hidden");
    if (loginAccountTypeField) {
      loginAccountTypeField.classList.remove("hidden");
    }
    confirmPasswordField.classList.add("hidden");
    termsField.classList.add("hidden");
    demoBox.classList.remove("hidden");
    fullNameInput.required = false;
    phoneInput.required = false;
    registerStateInput.required = false;
    confirmPasswordInput.required = false;
    passwordInput.autocomplete = "current-password";
    passwordInput.minLength = 6;
    passwordInput.placeholder = "Ingresa tu contraseÃ±a";
    authSubmitBtn.textContent = "Iniciar sesiÃ³n";
    setAccountType("user");
    switchAuthModeBtn.textContent = "Â¿No tienes cuenta? Crear cuenta";
  }

  setTimeout(() => emailInput.focus(), 100);
};

const closeModal = () => {
  loginModal.classList.add("hidden");
};

const showDashboard = (user = {}) => {
  const dashboardName = document.getElementById("dashboardClientName");
  const dashboardEmail = document.getElementById("dashboardClientEmail");

  if (dashboardName) {
    dashboardName.textContent = user.fullName || "Cliente LEX-IA";
  }

  if (dashboardEmail) {
    dashboardEmail.textContent = user.email || DEMO_EMAIL;
  }

  landingView.classList.add("hidden");
  if (mainHeader) {
    mainHeader.classList.add("hidden");
  }
  dashboardView.classList.remove("hidden");
  if (partnerDashboardView) {
    partnerDashboardView.classList.add("hidden");
  }
  closeModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showPartnerDashboard = (user = {}) => {
  const partnerName = document.getElementById("partnerName");
  const partnerEmail = document.getElementById("partnerEmail");

  if (partnerName) {
    partnerName.textContent = user.fullName || "Lic. Andrea Morales";
  }

  if (partnerDisplayNameInput) {
    partnerDisplayNameInput.value = user.fullName || "Lic. Andrea Morales";
  }

  if (partnerRoleInput) {
    partnerRoleInput.value = user.role || "Abogada laboral";
  }

  if (partnerEmail) {
    partnerEmail.textContent = user.email || PARTNER_DEMO_EMAIL;
  }

  landingView.classList.add("hidden");
  if (mainHeader) {
    mainHeader.classList.add("hidden");
  }
  dashboardView.classList.add("hidden");
  if (partnerDashboardView) {
    partnerDashboardView.classList.remove("hidden");
  }
  closeModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showLanding = () => {
  dashboardView.classList.add("hidden");
  if (partnerDashboardView) {
    partnerDashboardView.classList.add("hidden");
  }
  if (mainHeader) {
    mainHeader.classList.remove("hidden");
  }
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
    alert("Completa la rama del derecho, el Estado y la descripciÃ³n del caso.");
    return;
  }

  const risk = getRiskLevel(selectedArea, description);

  resultArea.textContent = areaLabels[selectedArea] || "OrientaciÃ³n general";
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
createAccountBtn.addEventListener("click", () => openModal("create"));
if (heroCreateAccountBtn) {
  heroCreateAccountBtn.addEventListener("click", () => openModal("create"));
}
continueCreateAccountBtn.addEventListener("click", () => openModal("create"));
continueLoginBtn.addEventListener("click", () => openModal("login"));
closeModalBtn.addEventListener("click", closeModal);
logoutBtn.addEventListener("click", async () => {
  try {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include"
    });
  } finally {
    showLanding();
  }
});

if (partnerLogoutBtn) {
  partnerLogoutBtn.addEventListener("click", async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include"
      });
    } finally {
      showLanding();
    }
  });
}

if (partnerPhotoInput && partnerPhotoPreview) {
  partnerPhotoInput.addEventListener("change", () => {
    const file = partnerPhotoInput.files && partnerPhotoInput.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      partnerPhotoPreview.src = reader.result;
      partnerPhotoPreview.parentElement.classList.add("has-photo");
    });
    reader.readAsDataURL(file);
  });
}

generateGuideBtn.addEventListener("click", generateGuide);
clearGuideBtn.addEventListener("click", clearGuide);

if (heroSearchForm) {
  heroSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = heroCaseSearch.value.trim();

    if (searchText) {
      caseDescription.value = searchText;
    }

    document.getElementById("consulta").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    caseDescription.focus();
  });
}

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

const requestAuth = async (endpoint, payload) => {
  const response = await fetch(`${API_BASE_URL}/auth/${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "No fue posible completar la solicitud.");
  }

  return result;
};

const showAuthMessage = (message, type = "error") => {
  loginError.textContent = message;
  loginError.classList.toggle("error-message", type === "error");
  loginError.classList.toggle("success-message", type === "success");
  loginError.classList.remove("hidden");
};

switchAuthModeBtn.addEventListener("click", () => {
  openModal(authMode === "login" ? "create" : "login");
});

if (userAccountTypeBtn) {
  userAccountTypeBtn.addEventListener("click", () => setAccountType("user"));
}

if (partnerAccountTypeBtn) {
  partnerAccountTypeBtn.addEventListener("click", () => setAccountType("partner"));
}

if (loginUserTypeBtn) {
  loginUserTypeBtn.addEventListener("click", () => setAccountType("user"));
}

if (loginPartnerTypeBtn) {
  loginPartnerTypeBtn.addEventListener("click", () => setAccountType("partner"));
}

document.querySelectorAll("[data-case-chat]").forEach((button) => {
  button.addEventListener("click", () => setActiveCaseChat(button.dataset.caseChat));
});

document.addEventListener("click", async (event) => {
  const payMethodButton = event.target.closest("[data-pay-method]");
  if (payMethodButton) {
    lexiaPayState.method = payMethodButton.dataset.payMethod;
    lexiaPayState.provider = lexiaPayState.method === "crypto" ? "Crypto Checkout" : "Marketplace";
    renderClientSection("pay");
    return;
  }

  const cryptoAssetButton = event.target.closest("[data-crypto-asset]");
  if (cryptoAssetButton) {
    lexiaPayState.method = "crypto";
    lexiaPayState.provider = "Crypto Checkout";
    lexiaPayState.cryptoAsset = cryptoAssetButton.dataset.cryptoAsset;
    renderClientSection("pay");
    return;
  }

  const startPaymentButton = event.target.closest("[data-start-payment]");
  if (startPaymentButton) {
    startPaymentButton.disabled = true;
    startPaymentButton.textContent = "Generando checkout...";

    try {
      const payment = await createLexiaPayment();
      lexiaPayState.status = payment.status === "checkout_generado" ? "pending" : "paid";
      lexiaPayState.paymentId = payment.id || "";
      lexiaPayState.checkoutUrl = payment.checkoutUrl || "";
      lexiaPayState.demoMode = Boolean(payment.demoMode);
      lexiaPayState.provider = payment.provider || lexiaPayState.provider;
      lexiaPayState.txId = payment.providerPaymentId || (
        lexiaPayState.method === "crypto"
          ? `CRYPTO-USDC-${Date.now().toString().slice(-6)}`
          : `MKT-SPEI-${Date.now().toString().slice(-6)}`
      );

      if (payment.checkoutUrl && !payment.demoMode) {
        window.open(payment.checkoutUrl, "_blank", "noopener");
      }
    } catch (error) {
      lexiaPayState.status = "paid";
      lexiaPayState.txId = lexiaPayState.method === "crypto"
        ? `CRYPTO-USDC-${Date.now().toString().slice(-6)}`
        : `MKT-SPEI-${Date.now().toString().slice(-6)}`;
      lexiaPayState.demoMode = true;
      alert(`No se pudo conectar con el proveedor real. Se conserva modo demo.\\n${error.message}`);
    }

    renderClientSection("pay");
    return;
  }

  if (event.target.closest("[data-copy-payment-link]")) {
    const paymentLink = lexiaPayState.checkoutUrl || `${window.location.origin}/lexia-pay/${activeCaseFolio}?method=${lexiaPayState.method}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(paymentLink).catch(() => {});
    }
    alert(`Enlace demo de pago:\\n${paymentLink}`);
    return;
  }

  if (event.target.closest("[data-release-next]")) {
    const milestones = [
      { id: "acceptance", amount: 6750 },
      { id: "filing", amount: 6750 },
      { id: "hearing", amount: 6750 },
      { id: "closure", amount: 2250 }
    ];
    const nextMilestone = milestones.find((milestone) => (
      !lexiaPayState.releasedMilestones.some((released) => released.id === milestone.id)
    ));

    if (nextMilestone) {
      lexiaPayState.releasedMilestones.push(nextMilestone);
    }

    renderPartnerSection("honorarios", activeCaseFolio);
    return;
  }

  const partnerSectionButton = event.target.closest("[data-partner-section]");
  if (partnerSectionButton) {
    renderPartnerSection(partnerSectionButton.dataset.partnerSection);
    return;
  }

  const clientSectionButton = event.target.closest("[data-client-section]");
  if (clientSectionButton) {
    renderClientSection(clientSectionButton.dataset.clientSection);
    return;
  }

  const clientJumpButton = event.target.closest("[data-client-section-jump]");
  if (clientJumpButton) {
    renderClientSection(clientJumpButton.dataset.clientSectionJump);
    return;
  }

  const fileButton = event.target.closest("[data-case-file]");
  if (fileButton) {
    activeCaseFolio = fileButton.dataset.caseFile;
    renderPartnerSection("expedientes", activeCaseFolio);
    return;
  }

  const chatButton = event.target.closest("[data-case-chat]");
  if (chatButton) {
    activeCaseFolio = chatButton.dataset.caseChat;
    setActiveCaseChat(activeCaseFolio);
    if (partnerWorkspace && partnerDashboardView && !partnerDashboardView.classList.contains("hidden")) {
      const activeSection = document.querySelector("[data-partner-section].active")?.dataset.partnerSection;
      if (activeSection === "mensajes") {
        renderPartnerSection("mensajes", activeCaseFolio);
      }
    }
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  loginError.classList.add("hidden");

  if (authMode === "create" && (!termsCheck || !termsCheck.checked)) {
    showAuthMessage(
      "Debes aceptar el Aviso de privacidad y los TÃ©rminos y condiciones para continuar."
    );
    return;
  }

  if (authMode === "create" && password !== confirmPasswordInput.value) {
    showAuthMessage("Las contraseÃ±as no coinciden.");
    return;
  }

  if (authMode === "login" && email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    showDashboard({ fullName: "Cliente de prueba LEX-IA", email });
    return;
  }

  if (authMode === "login" && email === PARTNER_DEMO_EMAIL && password === PARTNER_DEMO_PASSWORD) {
    showPartnerDashboard({ fullName: "Lic. Andrea Morales", role: "Abogada laboral", email });
    return;
  }

  authSubmitBtn.disabled = true;
  authSubmitBtn.textContent = authMode === "create" ? "Creando cuenta..." : "Ingresando...";

  try {
    if (authMode === "create") {
      const result = await requestAuth("register", {
        fullName: fullNameInput.value.trim(),
        email,
        phone: phoneInput.value.trim(),
        state: registerStateInput.value,
        accountType,
        licenseNumber: accountType === "partner" ? licenseInput.value.trim() : "",
        specialty: accountType === "partner" ? specialtyInput.value : "",
        password,
        acceptPrivacyNotice: true,
        acceptTerms: true
      });
      if (result.requiresEmailVerification) {
        showAuthMessage(result.message, "success");
        passwordInput.value = "";
        confirmPasswordInput.value = "";
      } else {
        if (accountType === "partner") {
          showPartnerDashboard(result.user);
        } else {
          showDashboard(result.user);
        }
      }
    } else {
      const result = await requestAuth("login", { email, password });
      showDashboard(result.user);
    }
  } catch (error) {
    showAuthMessage(error.message.includes("fetch")
      ? "No pudimos conectar con el servidor. Inicia el backend de LEX-IA e intenta nuevamente."
      : error.message);
  } finally {
    authSubmitBtn.disabled = false;
    authSubmitBtn.textContent = authMode === "create"
      ? (accountType === "partner" ? "Crear cuenta de socio" : "Crear mi cuenta")
      : "Iniciar sesiÃ³n";
  }
});

if (new URLSearchParams(window.location.search).get("verified") === "true") {
  openModal("login");
  showAuthMessage("Correo verificado correctamente. Ya puedes iniciar sesiÃ³n.", "success");
}

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




