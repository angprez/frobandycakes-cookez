// Import Lucide icons library
import lucide from "lucide"

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()

  // Initialize all functionality
  initNavigation()
  initVideoControls()
  initProducts()
  initScrollAnimations()
  initSmoothScrolling()
})

// Navigation functionality
function initNavigation() {
  const nav = document.getElementById("navigation")
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = mobileMenuBtn.querySelector(".menu-icon")
  const closeIcon = mobileMenuBtn.querySelector(".close-icon")

  // Handle scroll effect on navigation
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden")

    if (isOpen) {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    } else {
      mobileMenu.classList.remove("hidden")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
    }
  })

  // Close mobile menu when clicking on links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })
}

// Video controls functionality
function initVideoControls() {
  const video = document.getElementById("hero-video")
  const videoToggle = document.getElementById("video-toggle")
  const videoIcon = videoToggle?.querySelector(".video-icon")

  if (!video || !videoToggle) return

  videoToggle.addEventListener("click", () => {
    if (video.paused) {
      video.play()
      videoIcon.setAttribute("data-lucide", "pause")
    } else {
      video.pause()
      videoIcon.setAttribute("data-lucide", "play")
    }
    lucide.createIcons()
  })

  // Handle video events
  video.addEventListener("play", () => {
    videoIcon.setAttribute("data-lucide", "pause")
    lucide.createIcons()
  })

  video.addEventListener("pause", () => {
    videoIcon.setAttribute("data-lucide", "play")
    lucide.createIcons()
  })
}

// Products data and functionality
function initProducts() {
  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  const products = [
    {
      name: "Boy Howdy",
      badge: "Chocolate Lover",
      base: "Chocolate cookie",
      mixins: "Crushed Butterfingers & white chocolate chips",
      filling: "Cookie butter",
      topping: "Biscoff cookie",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Is it THICC yet?",
      badge: "Banana Bliss",
      base: "Banana pudding cookie",
      mixins: "Bananas, caramel candies & crushed pecans",
      filling: "Cookie butter",
      topping: "More pecans",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Venmo Stalker",
      badge: "Fruity Fun",
      base: "Lemon pudding cookie",
      mixins: "Crushed Fruity Pebbles candy",
      filling: "Raspberry jelly",
      topping: "Melted Fruity Pebbles white chocolate",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Get Down Sonni",
      badge: "Oreo Obsession",
      base: "Chocolate & Oreo cookie",
      mixins: "Crushed Oreos, cookies & cream PopTarts",
      stuffed: "Hershey's cookies & cream chocolate",
      topping: "Melted white chocolate & Oreo crumbs",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "I Luv You Berry Much",
      badge: "Berry Sweet",
      base: "Chocolate base",
      mixins: "Dark chocolate chips",
      stuffed: "Strawberry Creme Hershey's hearts",
      filling: "Berry pie filling",
      topping: "Strawberry Ghirardelli chocolate",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Snatched",
      badge: "Cinnamon Spice",
      base: "Cinnamon base cookie",
      mixins: "Hershey's cinnamon chips",
      stuffed: "Cookie butter",
      topping: "Biscoff cookie",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bo Bandy",
      badge: "Birthday Bash",
      base: "Oreo cookie",
      mixins: "Crushed Hershey's birthday kisses, crushed birthday cake Oreos & sprinkles",
      filling: "Almond buttercream",
      topping: "Melted Hershey's birthday kisses & birthday cake Oreo",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Generate product cards
  products.forEach((product, index) => {
    const productCard = createProductCard(product, index)
    productsGrid.appendChild(productCard)
  })

  // Add stagger animation class
  productsGrid.classList.add("stagger-animation")
}

function createProductCard(product, index) {
  const card = document.createElement("div")
  card.className = "product-card fade-in-up"
  card.style.animationDelay = `${index * 0.1}s`

  const badgeColors = [
    "var(--primary)",
    "var(--secondary)",
    "var(--accent)",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#10b981",
  ]

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name} cookie" class="product-img">
            <div class="product-badge" style="background: ${badgeColors[index % badgeColors.length]}">
                ${product.badge}
            </div>
        </div>
        <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-details">
                <div class="product-detail">
                    <div class="detail-bullet base"></div>
                    <span class="detail-label">Base:</span>
                    <span class="detail-text">${product.base}</span>
                </div>
                <div class="product-detail">
                    <div class="detail-bullet mixins"></div>
                    <span class="detail-label">Mix-ins:</span>
                    <span class="detail-text">${product.mixins}</span>
                </div>
                ${
                  product.stuffed
                    ? `
                    <div class="product-detail">
                        <div class="detail-bullet filling"></div>
                        <span class="detail-label">Stuffed:</span>
                        <span class="detail-text">${product.stuffed}</span>
                    </div>
                `
                    : ""
                }
                ${
                  product.filling
                    ? `
                    <div class="product-detail">
                        <div class="detail-bullet filling"></div>
                        <span class="detail-label">Filled:</span>
                        <span class="detail-text">${product.filling}</span>
                    </div>
                `
                    : ""
                }
                <div class="product-detail">
                    <div class="detail-bullet topping"></div>
                    <span class="detail-label">Topped:</span>
                    <span class="detail-text">${product.topping}</span>
                </div>
            </div>
            <a href="https://www.instagram.com/frobandycakes/" target="_blank" rel="noopener noreferrer" class="product-btn">
                Pre-Order Now!
                <i data-lucide="external-link" class="external-link-icon"></i>
            </a>
        </div>
    `

  return card
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll(
    ".step-card, .testimonial-card, .size-card, .faq-item, .contact-method-card",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // Skip if it's just "#"
      if (href === "#") return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()

        const offsetTop = target.offsetTop - 80 // Account for fixed header

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Utility function to handle external links
function handleExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]')

  externalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Add analytics tracking here if needed
      console.log("External link clicked:", this.href)
    })
  })
}

// Initialize external links handling
document.addEventListener("DOMContentLoaded", handleExternalLinks)

// Handle form submissions (if any forms are added later)
function handleFormSubmissions() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      // Add form handling logic here
      console.log("Form submitted:", this)

      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className = "success-message"
      successMessage.textContent = "Thank you! We'll get back to you soon! 🍪"
      successMessage.style.cssText = `
                background: var(--secondary);
                color: var(--gray-900);
                padding: 1rem;
                border-radius: 0.5rem;
                margin-top: 1rem;
                text-align: center;
                font-weight: 600;
            `

      this.appendChild(successMessage)

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove()
      }, 5000)
    })
  })
}

// Error handling for images
function handleImageErrors() {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Replace with a fallback image
      this.src = "/placeholder.svg?height=300&width=300"
      this.alt = "Cookie placeholder image"
    })
  })
}

// Initialize image error handling
document.addEventListener("DOMContentLoaded", handleImageErrors)

// Performance optimization: Lazy loading for images
function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", initLazyLoading)
