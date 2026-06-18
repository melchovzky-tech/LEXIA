const openLoginBtn = document.getElementById("openLoginBtn");
const heroLoginBtn = document.getElementById("heroLoginBtn");
const closeLoginBtn = document.getElementById("closeLoginBtn");
const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginError = document.getElementById("loginError");
const publicLanding = document.getElementById("publicLanding");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");

const DEMO_EMAIL = "cliente@lexia.test";
const DEMO_PASSWORD = "123456";

const openLoginModal = () => {
  loginModal.classList.remove("hidden");
  loginError.classList.add("hidden");
  emailInput.value = DEMO_EMAIL;
  passwordInput.value = "";
  setTimeout(() => passwordInput.focus(), 100);
};

const closeLoginModal = () => {
  loginModal.classList.add("hidden");
};

const showDashboard = () => {
  publicLanding.classList.add("hidden");
  dashboard.classList.remove("hidden");
  loginModal.classList.add("hidden");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const showLanding = () => {
  dashboard.classList.add("hidden");
  publicLanding.classList.remove("hidden");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

openLoginBtn.addEventListener("click", openLoginModal);
heroLoginBtn.addEventListener("click", openLoginModal);
closeLoginBtn.addEventListener("click", closeLoginModal);

loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeLoginModal();
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    showDashboard();
    return;
  }

  loginError.classList.remove("hidden");
});

logoutBtn.addEventListener("click", showLanding);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !loginModal.classList.contains("hidden")) {
    closeLoginModal();
  }
});