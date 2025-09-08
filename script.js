// Toggle theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
navToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
});

// Modal functionality
document.querySelectorAll('[data-modal]').forEach(button => {
  const modalId = button.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.showModal();
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

