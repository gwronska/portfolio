/* Rok w stopce */
document.getElementById('year').textContent = new Date().getFullYear();

/* Prosty toggle motywu (dark tylko wizualnie, ale baza już jest) */
const toggle = document.getElementById('theme-toggle');
if (toggle){
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
  });
}

/* Mobile menu */
const btn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (btn && menu){
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.style.display = open ? 'none' : 'flex';
  });
}

/* Modals (native <dialog>) */
document.querySelectorAll('[data-modal]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const id = el.getAttribute('data-modal');
    const dlg = document.getElementById(id);
    if (dlg){ dlg.showModal(); }
  });
});
