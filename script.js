document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  function updateButton() {
    if (htmlEl.classList.contains('dark')) {
      themeBtn.textContent = '🌞 Light mode';
    } else {
      themeBtn.textContent = '🌙 Dark mode';
    }
  }

  themeBtn.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    updateButton();
  });

  updateButton();

  // Menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'flex';
  });

  // Modale
  const modalLinks = document.querySelectorAll('.card .btn.primary');
  modalLinks.forEach(link => {
    const modalId = link.dataset.modal;
    const modal = document.getElementById(modalId);
    link.addEventListener('click', e => {
      e.preventDefault();
      if (modal) {
        modal.showModal();
        modal.scrollTop = 0;
      }
    });
  });

  // Klik poza modal zamyka go
  document.querySelectorAll('dialog.modal').forEach(dialog => {
    dialog.addEventListener('click', e => {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientY < rect.top ||
        e.clientY > rect.bottom ||
        e.clientX < rect.left ||
        e.clientX > rect.right
      ) {
        dialog.close();
      }
    });

    // Close button w modalu
    const closeBtn = dialog.querySelector('.btn.ghost');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => dialog.close());
    }
  });
});


