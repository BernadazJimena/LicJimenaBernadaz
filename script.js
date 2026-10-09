const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');
const menuLinks = document.querySelectorAll('#main-menu a');
const whatsappLink = document.querySelector('.whatsapp-link');
const floatingWhatsapp = document.querySelector('.floating-whatsapp');
const contactSection = document.querySelector('#contacto');

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

// Sitio de muestra: el botón de WhatsApp no abre ningún chat, solo muestra una aclaración.
// (El botón flotante lleva a la sección de contacto.)
const demoNote = document.querySelector('.demo-note');

if (whatsappLink && demoNote) {
    whatsappLink.addEventListener('click', () => {
        demoNote.hidden = false;
    });
}

if (floatingWhatsapp && contactSection && 'IntersectionObserver' in window) {
    const contactObserver = new IntersectionObserver(([entry]) => {
        floatingWhatsapp.classList.toggle('is-hidden', entry.isIntersecting);
    }, { threshold: 0.15 });

    contactObserver.observe(contactSection);
}

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();