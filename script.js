const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');
const menuLinks = document.querySelectorAll('#main-menu a');
const whatsappLink = document.querySelector('.whatsapp-link');

// Replace this number with the WhatsApp number, including country code.
const whatsappNumber = '5491127663667';
const whatsappMessage = 'Hola Jmena, quisiera consultar por un procedimiento';

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    mainMenu.classList.toggle('is-open', !isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
      mainMenu.classList.remove('is-open');
    });
  });
}

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();