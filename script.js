// Login protection and page interactions
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    const hidden = password.type === "password";
    password.type = hidden ? "text" : "password";
    togglePassword.textContent = hidden ? "Hide" : "Show";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const pass = password.value;

    if (pass !== "1234") {
      loginMessage.textContent = "Incorrect password. Demo password is 1234.";
      loginMessage.style.color = "#ff8b8b";
      return;
    }

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("visitorName", username || "Friend");
    window.location.href = "home.html";
  });
}

const onHome = document.getElementById("visitorName");
if (onHome) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  } else {
    onHome.textContent = localStorage.getItem("visitorName") || "Friend";
  }
}

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("visitorName");
    window.location.href = "index.html";
  });
}

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
if (menuBtn) menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
const counterEl = document.getElementById("counter");
let count = 0;
function updateCounter() { if (counterEl) counterEl.textContent = count; }
if (plusBtn) plusBtn.addEventListener("click", () => { count++; updateCounter(); });
if (minusBtn) minusBtn.addEventListener("click", () => { count--; updateCounter(); });
if (resetBtn) resetBtn.addEventListener("click", () => { count = 0; updateCounter(); });

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });
}

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (topBtn) topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});
if (topBtn) topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contactMessage").textContent =
      "Message received! This demo form is ready to connect to a backend.";
    contactForm.reset();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
