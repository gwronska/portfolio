document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');

  function updateButton() {
    if (document.body.classList.contains('dark')) {
      themeBtn.textContent = '🌞 Light mode';
    } else {
      themeBtn.textContent = '🌙 Dark mode';
    }
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateButton();
  });

  updateButton(); // ustawienie przycisku przy załadowaniu

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
  });

  // Close button w modalu
  document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const dialog = btn.closest('dialog');
      if (dialog) dialog.close();
    });
  });
});

