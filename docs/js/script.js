document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('header nav ul');

    // Toggle para el menú de hamburguesa
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Cerrar el menú cuando se hace clic en un enlace (en móvil)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Añadir efecto de scroll para el header (opcional)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)'; // Color con opacidad
            } else {
                header.style.backgroundColor = 'var(--secondary-color)';
            }
        });
    }
});