document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Funkce pro plynulé rolování
    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Přidáme event listenery na navigační odkazy
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Zabráníme výchozímu chování odkazu
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });

    // Změna barvy navigace při rolování
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
