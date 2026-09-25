const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');
const menuLinks = document.querySelectorAll('#main-menu a');
const whatsappLink = document.querySelector('.whatsapp-link');
const floatingWhatsapp = document.querySelector('.floating-whatsapp');
const contactSection = document.querySelector('#contacto');

const whatsappNumber = '5491132283816';
const whatsappMessage = 'Hola Jimena, quisiera consultar por un procedimiento';

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

if (floatingWhatsapp) {
    floatingWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

if (floatingWhatsapp && contactSection && 'IntersectionObserver' in window) {
    const contactObserver = new IntersectionObserver(([entry]) => {
        floatingWhatsapp.classList.toggle('is-hidden', entry.isIntersecting);
    }, { threshold: 0.15 });

    contactObserver.observe(contactSection);
}

const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = new Date().getFullYear();