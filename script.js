// =======================================================================
// VERSIÓN FINAL Y DEPURADA DE TU ARCHIVO SCRIPT.JS
// =======================================================================

// Función de utilidad que usas en varias partes
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// --- FUNCIONES DE INICIALIZACIÓN ---

function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenuBtn || !mobileMenu) return;

    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.add('show'), 10);
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
        document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.contains('show') ? closeMobileMenu() : openMobileMenu();
    });

    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}

function initializeHeroVideo() {
    const heroImage = document.getElementById('hero-image');
    const heroVideo = document.getElementById('hero-video');
    const playBtn = document.getElementById('play-video-btn');
    if (!heroImage || !heroVideo || !playBtn) return;

    playBtn.addEventListener('click', () => {
        heroImage.style.display = 'none';
        heroVideo.classList.remove('hidden');
        playBtn.style.display = 'none';
        heroVideo.play().catch(() => { /* Fallback en caso de error */ });
    });
}

function initializeFlavorCarousel() {
    const carouselElement = document.getElementById('flavor-carousel');
    if (!carouselElement) return;

    if (typeof Swiper !== 'undefined') {
        new Swiper('#flavor-carousel', {
            speed: 4000,
            loop: true,
            autoplay: { delay: 0, disableOnInteraction: false },
            slidesPerView: 'auto',
            spaceBetween: 24,
            freeMode: true,
        });
    } else {
        console.error("Error: La librería SwiperJS no se ha cargado.");
    }
}

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqId = this.getAttribute('data-faq');
            const answer = document.getElementById(`faq-${faqId}`);
            if (!answer) return;
            
            const isActive = this.classList.contains('active');

            // Cierra todas las demás
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    const otherAnswer = document.getElementById(`faq-${q.getAttribute('data-faq')}`);
                    if (otherAnswer) otherAnswer.classList.remove('show');
                }
            });

            // Abre o cierra la actual
            if (isActive) {
                this.classList.remove('active');
                answer.classList.remove('show');
            } else {
                this.classList.add('active');
                answer.classList.add('show');
            }
        });
    });
}

function initializeScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animateElements = document.querySelectorAll('.step-card, .size-card, .flavor-card, .testimonial-card, .value-card, .contact-method-card, .story-card, .faq-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}


// --- PUNTO DE ENTRADA PRINCIPAL ---

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHeroVideo();
    initializeFlavorCarousel();
    initializeFAQ();
    initializeScrollAnimations();
    // No llamamos a funciones que no hemos definido para evitar errores.
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});