// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark/light toggle
const themeToggle = document.getElementById('theme-toggle');
if(themeToggle){
  const updateButton = () => {
    themeToggle.textContent = document.documentElement.classList.contains('dark') 
      ? '🌞 Light mode' 
      : '🌙 Dark mode';
  };
  updateButton();
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateButton();
  });
}

// Mobile menu toggle
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if(btn && menu){
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.style.display = open ? 'none' : 'flex';
  });
}

// Modals
document.querySelectorAll('.card .btn.primary').forEach(btn => {
  btn.addEventListener('click', e => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if(modal){
      modal.scrollTop = 0;
      modal.showModal();
    }
  });
});

document.querySelectorAll('dialog.modal').forEach(modal => {
  // Close on clicking close button
  modal.querySelector('button').addEventListener('click', () => modal.close());
  // Close on clicking outside
  modal.addEventListener('click', e => {
    const rect = modal.getBoundingClientRect();
    if(e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right){
      modal.close();
    }
  });
});

