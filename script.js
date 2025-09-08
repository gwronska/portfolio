document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  function updateButton() {
    if (!themeBtn) return;
    if (htmlEl.classList.contains('dark')) {
      themeBtn.textContent = '🌞 Light mode';
      themeBtn.setAttribute('aria-pressed', 'true');
    } else {
      themeBtn.textContent = '🌙 Dark mode';
      themeBtn.setAttribute('aria-pressed', 'false');
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      htmlEl.classList.toggle('dark');
      updateButton();
    });
  }

  updateButton();

  // Menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
      // use class toggle rather than inline styles for better CSS control
      menu.classList.toggle('open', !expanded);
    });
  }

  // Modal opening
  const modalLinks = document.querySelectorAll('[data-modal]');
  modalLinks.forEach(link => {
    const modalId = link.dataset.modal;
    const modal = document.getElementById(modalId);

    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (!modal) return;

      // prefer showModal if available (centered + modal)
      if (typeof modal.showModal === 'function') {
        try {
          modal.showModal();
        } catch (err) {
          // if already open or other error, fallback to setting open attribute
          modal.setAttribute('open', '');
        }
      } else if (typeof modal.show === 'function') {
        modal.show(); // older implementations
      } else {
        // fallback: set open attribute so CSS/dialog[open] can be used
        modal.setAttribute('open', '');
      }
      // ensure scrolled to top of modal content
      modal.scrollTop = 0;
      // move focus to close button for accessibility
      const closeBtn = modal.querySelector('.close-btn');
      if (closeBtn) closeBtn.focus();
    });
  });

  // Close buttons + click-outside + Esc handling for dialogs
  document.querySelectorAll('dialog.modal').forEach(dialog => {
    const closeBtn = dialog.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (typeof dialog.close === 'function') {
          dialog.close();
        } else {
          dialog.removeAttribute('open');
        }
      });
    }

    // click outside the dialog content -> close
    dialog.addEventListener('click', e => {
      // If the click target is the dialog itself (backdrop area) -> close
      if (e.target === dialog) {
        if (typeof dialog.close === 'function') {
          dialog.close();
        } else {
          dialog.removeAttribute('open');
        }
      }
    });

    // close on Escape key
    dialog.addEventListener('cancel', (e) => {
      // allow default close behavior for native dialogs
    });
  });

  // Also close any fallback-opened dialog when pressing Escape (for non-native)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('dialog.modal[open]').forEach(d => {
        if (typeof d.close === 'function') d.close(); else d.removeAttribute('open');
      });
    }
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});


