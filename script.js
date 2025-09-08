document.addEventListener('DOMContentLoaded', () => {
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

  updateButton(); // ustawienie przycisku przy załadowaniu strony
});

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
  });

  // Project modals
  const modalLinks = document.querySelectorAll('[data-modal]');
  modalLinks.forEach(link => {
    const modalId = link.dataset.modal;
    const modal = document.getElementById(modalId);
    link.addEventListener('click', e => {
      e.preventDefault();
      if (modal) modal.showModal();
    });
  });

  // Close modals via button inside <form method="dialog">
  const closeButtons = document.querySelectorAll('.modal form button');
  closeButtons.forEach(btn => btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  }));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});

