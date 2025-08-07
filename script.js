// Import Lucide icons library
import lucide from "lucide"

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHeroVideo();
    initializeFlavorCarousel();
    initializeFAQ();
    initializeScrollAnimations();
    initializeExternalLinks();
    initializeLazyLoading();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('show');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('show');
        }, 10);
        
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
        
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                closeMobileMenu();
            }
        });
    });
    
    // Navigation scroll effect
    let lastScrollY = window.scrollY;
    const navigation = document.getElementById('navigation');
    
    window.addEventListener('scroll', debounce(function() {
        const currentScrollY = window.scrollY;
        
        if (navigation) {
            if (currentScrollY > 100) {
                navigation.style.background = 'rgba(255, 255, 255, 0.98)';
                navigation.style.backdropFilter = 'blur(20px)';
                navigation.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navigation.style.background = 'rgba(255, 255, 255, 0.95)';
                navigation.style.backdropFilter = 'blur(10px)';
                navigation.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }
        }
        
        lastScrollY = currentScrollY;
    }, 10));
}

// Hero video functionality
function initializeHeroVideo() {
    const heroImage = document.getElementById('hero-image');
    const heroVideo = document.getElementById('hero-video');
    const playBtn = document.getElementById('play-video-btn');
    const videoContainer = document.getElementById('hero-video-container');
    
    if (!heroImage || !heroVideo || !playBtn) return;
    
    playBtn.addEventListener('click', function() {
        // Hide image and show video
        heroImage.style.display = 'none';
        heroVideo.classList.remove('hidden');
        playBtn.style.display = 'none';
        
        // Play video
        heroVideo.play().catch(error => {
            console.log('Video play failed:', error);
            // Fallback: show image again
            heroImage.style.display = 'block';
            heroVideo.classList.add('hidden');
            playBtn.style.display = 'flex';
        });
    });
    
    // Video ended event
    heroVideo.addEventListener('ended', function() {
        // Show image and hide video
        heroImage.style.display = 'block';
        heroVideo.classList.add('hidden');
        playBtn.style.display = 'flex';
    });
    
    // Video error handling
    heroVideo.addEventListener('error', function() {
        console.log('Video loading error');
        heroImage.style.display = 'block';
        heroVideo.classList.add('hidden');
        playBtn.style.display = 'flex';
    });
}

// Flavor carousel functionality
function initializeFlavorCarousel() {
    const carousel = document.getElementById('flavor-carousel');
    const prevBtn = document.getElementById('prev-flavor');
    const nextBtn = document.getElementById('next-flavor');
    const dotsContainer = document.getElementById('flavor-dots');
    
    if (!carousel) return;
    
    // Sample flavor data
    const flavors = [
        {
            title: "Chocolate Chip Cookie Dough",
            description: "Classic cookie dough stuffed with premium chocolate chips and topped with cookie crumbles.",
            tags: ["Chocolate", "Cookie Dough", "Classic"],
            image: "/placeholder.svg?height=200&width=300&text=Cookie+Dough"
        },
        {
            title: "Strawberry Cheesecake Bliss",
            description: "Creamy cheesecake filling with fresh strawberries and graham cracker crust pieces.",
            tags: ["Strawberry", "Cheesecake", "Fruity"],
            image: "/placeholder.svg?height=200&width=300&text=Strawberry+Cheesecake"
        },
        {
            title: "Salted Caramel Pretzel",
            description: "Rich caramel center with crushed pretzels and a sprinkle of sea salt.",
            tags: ["Caramel", "Salty", "Pretzel"],
            image: "/placeholder.svg?height=200&width=300&text=Salted+Caramel"
        },
        {
            title: "Birthday Cake Explosion",
            description: "Funfetti cake batter with rainbow sprinkles and vanilla buttercream frosting.",
            tags: ["Birthday", "Funfetti", "Vanilla"],
            image: "/placeholder.svg?height=200&width=300&text=Birthday+Cake"
        },
        {
            title: "Peanut Butter Cup Paradise",
            description: "Creamy peanut butter filling with chocolate chunks and peanut butter cup pieces.",
            tags: ["Peanut Butter", "Chocolate", "Nutty"],
            image: "/placeholder.svg?height=200&width=300&text=Peanut+Butter"
        },
        {
            title: "Lemon Raspberry Tart",
            description: "Tangy lemon curd with fresh raspberries and shortbread cookie crumbles.",
            tags: ["Lemon", "Raspberry", "Tart"],
            image: "/placeholder.svg?height=200&width=300&text=Lemon+Raspberry"
        }
    ];
    
    let currentIndex = 0;
    let autoPlayInterval;
    
    // Generate flavor cards
    function generateFlavorCards() {
        carousel.innerHTML = '';
        flavors.forEach((flavor, index) => {
            const card = document.createElement('div');
            card.className = 'flavor-card';
            card.innerHTML = `
                <img src="${flavor.image}" alt="${flavor.title}" class="flavor-image" loading="lazy">
                <div class="flavor-content">
                    <h3 class="flavor-title">${flavor.title}</h3>
                    <p class="flavor-description">${flavor.description}</p>
                    <div class="flavor-tags">
                        ${flavor.tags.map(tag => `<span class="flavor-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            carousel.appendChild(card);
        });
    }
    
    // Generate dots
    function generateDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        flavors.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        const scrollAmount = carousel.children[0]?.offsetWidth || 300;
        carousel.scrollTo({
            left: scrollAmount * index,
            behavior: 'smooth'
        });
        updateDots();
        resetAutoPlay();
    }
    
    // Update dots
    function updateDots() {
        if (!dotsContainer) return;
        
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % flavors.length;
        goToSlide(currentIndex);
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + flavors.length) % flavors.length;
        goToSlide(currentIndex);
    }
    
    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Pause auto play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // Touch/swipe support
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;
    
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        stopAutoPlay();
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        startAutoPlay();
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        startAutoPlay();
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        stopAutoPlay();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX;
        const diff = startX - x;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            startX = 0;
        }
    });
    
    carousel.addEventListener('touchend', () => {
        startX = 0;
        startAutoPlay();
    });
    
    // Initialize
    generateFlavorCards();
    generateDots();
    startAutoPlay();
    
    // Update current slide based on scroll position
    carousel.addEventListener('scroll', debounce(() => {
        const scrollAmount = carousel.children[0]?.offsetWidth || 300;
        const newIndex = Math.round(carousel.scrollLeft / scrollAmount);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    }, 100));
}

// FAQ functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqId = this.getAttribute('data-faq');
            const answer = document.getElementById(`faq-${faqId}`);
            const isActive = this.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    const otherId = q.getAttribute('data-faq');
                    const otherAnswer = document.getElementById(`faq-${otherId}`);
                    if (otherAnswer) {
                        otherAnswer.classList.remove('show');
                    }
                }
            });
            
            // Toggle current FAQ
            if (isActive) {
                this.classList.remove('active');
                answer?.classList.remove('show');
            } else {
                this.classList.add('active');
                answer?.classList.add('show');
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .step-card,
        .size-card,
        .flavor-card,
        .testimonial-card,
        .value-card,
        .contact-method-card,
        .story-card,
        .faq-item
    `);
    
    animateElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// External link tracking
function initializeExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Track external link clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'external_link',
                    event_label: href
                });
            }
            
            // Add loading state for Instagram links
            if (href.includes('instagram.com')) {
                const originalText = this.textContent;
                this.textContent = 'Opening Instagram...';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            }
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src || img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});

// Service worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Console welcome message
console.log(`
🍪 Welcome to Frobandy Cakes Cookez! 🍪
Stuffed with Awesomeness since 2024
Made with 💕 in Wichita, Kansas
`);
