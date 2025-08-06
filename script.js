// Import Lucide icons library
import lucide from "lucide"

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize all functionality
    initNavigation();
    initHeroVideo();
    initFlavorCarousel();
    initFAQ();
    initScrollAnimations();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const nav = document.getElementById('navigation');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');

    // Handle scroll effect on navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        const isOpen = !mobileMenu?.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu?.classList.add('hidden');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        } else {
            mobileMenu?.classList.remove('hidden');
            menuIcon?.classList.add('hidden');
            closeIcon?.classList.remove('hidden');
        }
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (nav && !nav.contains(event.target) && !mobileMenu?.classList.contains('hidden')) {
            mobileMenu?.classList.add('hidden');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        }
    });
}

// Hero video functionality
function initHeroVideo() {
    const playBtn = document.getElementById('play-video-btn');
    const heroImage = document.getElementById('hero-image');
    const heroVideo = document.getElementById('hero-video');
    const videoOverlay = document.querySelector('.video-overlay');

    if (!playBtn || !heroImage || !heroVideo) return;

    playBtn.addEventListener('click', () => {
        heroImage.classList.add('hidden');
        heroVideo.classList.remove('hidden');
        videoOverlay.style.display = 'none';
        heroVideo.play();
    });

    // Handle video events
    heroVideo.addEventListener('ended', () => {
        heroImage.classList.remove('hidden');
        heroVideo.classList.add('hidden');
        videoOverlay.style.display = 'flex';
    });
}

// Flavor carousel functionality
function initFlavorCarousel() {
    const carousel = document.getElementById('flavor-carousel');
    const prevBtn = document.getElementById('prev-flavor');
    const nextBtn = document.getElementById('next-flavor');
    const dotsContainer = document.getElementById('flavor-dots');

    if (!carousel) return;

    const flavors = [
        {
            name: "Chocolate Chip Cookie Dough Explosion",
            description: "Loaded with premium cookie dough chunks and Belgian chocolate chips - it's like eating raw cookie dough but better! 🍪",
            image: "/placeholder.svg?height=400&width=600",
            month: "January",
            emoji: "🍫"
        },
        {
            name: "Strawberry Cheesecake Dream",
            description: "Creamy cheesecake filling swirled with fresh strawberry goodness - summer vibes in every bite! 🍓",
            image: "/placeholder.svg?height=400&width=600",
            month: "February",
            emoji: "🍓"
        },
        {
            name: "Salted Caramel Pretzel Crunch",
            description: "Sweet meets salty perfection with gooey caramel and crunchy pretzel pieces - absolutely addictive! 🥨",
            image: "/placeholder.svg?height=400&width=600",
            month: "March",
            emoji: "🥨"
        },
        {
            name: "Birthday Cake Bonanza",
            description: "It's a party in your mouth! Funfetti cookie with vanilla buttercream and rainbow sprinkles! 🎂",
            image: "/placeholder.svg?height=400&width=600",
            month: "April",
            emoji: "🎂"
        }
    ];

    let currentIndex = 0;
    let autoPlayInterval;

    // Create flavor cards
    function createFlavorCards() {
        carousel.innerHTML = '';
        flavors.forEach((flavor, index) => {
            const card = document.createElement('div');
            card.className = 'flavor-card';
            card.style.transform = `translateX(${index * 100}%)`;
            
            card.innerHTML = `
                <div class="flavor-image">
                    <img src="${flavor.image}" alt="${flavor.name}" class="flavor-img">
                    <div class="flavor-emoji">${flavor.emoji}</div>
                </div>
                <div class="flavor-content">
                    <div class="flavor-badge">
                        <div style="width: 0.75rem; height: 0.75rem; background: var(--primary); border-radius: 50%;"></div>
                        <span>${flavor.month} Special</span>
                    </div>
                    <h3 class="flavor-title">${flavor.name}</h3>
                    <p class="flavor-description">${flavor.description}</p>
                    <button class="btn-primary flavor-btn sweet-bounce">Pre-Order This Flavor! 🎉</button>
                </div>
            `;
            
            carousel.appendChild(card);
        });
    }

    // Create dots
    function createDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        flavors.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        updateDots();
        resetAutoPlay();
    }

    // Update carousel position
    function updateCarousel() {
        const cards = carousel.querySelectorAll('.flavor-card');
        cards.forEach((card, index) => {
            card.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    // Update dots
    function updateDots() {
        if (!dotsContainer) return;
        
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % flavors.length;
        updateCarousel();
        updateDots();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + flavors.length) % flavors.length;
        updateCarousel();
        updateDots();
    }

    // Auto play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    nextBtn?.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    // Initialize
    createFlavorCards();
    createDots();
    startAutoPlay();

    // Pause auto play on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// FAQ functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqId = question.getAttribute('data-faq');
            const answer = document.getElementById(`faq-${faqId}`);
            const icon = question.querySelector('.faq-icon');
            
            // Close all other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    const otherId = otherQuestion.getAttribute('data-faq');
                    const otherAnswer = document.getElementById(`faq-${otherId}`);
                    otherAnswer?.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle('active');
            answer?.classList.toggle('active');
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.step-card, .testimonial-card, .size-card, .value-card, .contact-method-card, .story-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle external links
function handleExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add analytics tracking here if needed
            console.log('External link clicked:', this.href);
        });
    });
}

// Handle form submissions (if any forms are added later)
function handleFormSubmissions() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form handling logic here
            console.log('Form submitted:', this);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! We\'ll get back to you soon! 🍪';
            successMessage.style.cssText = `
                background: var(--secondary);
                color: var(--gray-900);
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 1rem;
                text-align: center;
                font-weight: 600;
            `;
            
            this.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    });
}

// Error handling for images
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with a fallback image
            this.src = '/placeholder.svg?height=300&width=300';
            this.alt = 'Cookie placeholder image';
        });
    });
}

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize additional functionality
document.addEventListener('DOMContentLoaded', () => {
    handleExternalLinks();
    handleFormSubmissions();
    handleImageErrors();
    initLazyLoading();
});

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
    }
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize components that need resize handling
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        const autoPlayElements = document.querySelectorAll('[data-autoplay]');
        autoPlayElements.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page becomes visible
        const autoPlayElements = document.querySelectorAll('[data-autoplay]');
        autoPlayElements.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Console welcome message
console.log(`
🍪 Welcome to Frobandy Cakes! 🍪
Stuffed with Awesomeness since 2024
Made with 💕 in Wichita, Kansas
`);
