// ==== Year in footer ====
document.getElementById("year").textContent = new Date().getFullYear();

// ==== Theme Toggle ====
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(dark) {
  if (dark) {
    root.classList.add("dark");
    themeBtn.textContent = "🌞 Light mode";
    themeBtn.setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    themeBtn.textContent = "🌙 Dark mode";
    themeBtn.setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", "light");
  }
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme !== "light");

themeBtn.addEventListener("click", () => {
  const dark = !root.classList.contains("dark");
  setTheme(dark);
});

// ==== Mobile Menu ====
const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("open");
});

// ==== Modals ====
const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-btn");

modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.modal;
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dialog = e.target.closest("dialog");
    if (dialog) dialog.close();
  });
});

// Close modal on ESC
modals.forEach((modal) => {
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.close();
  });
});

// ==== Contact Form ====
const form = document.getElementById("contact-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      alert("Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! There was a problem.");
    }
  } catch (err) {
    alert("Error sending message.");
  }
});
