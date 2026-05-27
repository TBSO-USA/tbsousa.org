/**
 * TBSO Main JavaScript
 * Handles mobile menu, scroll animations, and interactive enhancements
 */

document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // Mobile Menu Toggle
  // ========================================

  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded attribute
      this.setAttribute('aria-expanded', !isExpanded);

      // Toggle menu visibility
      menu.classList.toggle('is-open');

      // Trap focus in menu when open
      if (!isExpanded) {
        const firstLink = menu.querySelector('a');
        if (firstLink) {
          firstLink.focus();
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
        if (menu.classList.contains('is-open')) {
          menuToggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('is-open');
        }
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        menuToggle.focus();
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#" or empty
      if (!href || href === '#') {
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Get header height for offset
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });

  // ========================================
  // Scroll Animations (Fade Up Effect)
  // ========================================

  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element enters viewport
          entry.target.classList.add('tbso-fade-up');

          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Auto-animate cards on home page
    const cards = document.querySelectorAll('.card, .event-card, .qr-card');
    cards.forEach(card => {
      observer.observe(card);
    });
  }

  // ========================================
  // Form Validation Enhancement
  // ========================================

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Browser native validation handles required fields
      // This is just for additional client-side enhancements

      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.setAttribute('aria-invalid', 'false');
        }
      });

      // If form is invalid, prevent submission and focus first invalid field
      if (!isValid) {
        e.preventDefault();
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });

    // Remove aria-invalid on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value.trim()) {
          this.setAttribute('aria-invalid', 'false');
        }
      });
    });
  });

  // ========================================
  // Lazy Loading Images (Fallback)
  // ========================================

  // Native lazy loading is preferred (loading="lazy" attribute)
  // This is a fallback for older browsers

  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if (lazyImages.length > 0 && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.removeAttribute('loading');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ========================================
  // External Links - Open in New Tab
  // ========================================

  const externalLinks = document.querySelectorAll('a[href^="http"]');

  externalLinks.forEach(link => {
    // Skip if it's an internal link to the same domain
    if (link.hostname !== window.location.hostname) {
      // Add target="_blank" if not already set
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });

  // ========================================
  // Accessibility: Focus Outline on Tab
  // ========================================

  // Add .using-mouse class when mouse is used
  // Remove it when Tab key is pressed

  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });

  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });

  // ========================================
  // Carousel Functionality
  // ========================================

  const carousel = document.getElementById('eventCarousel');

  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const dotsNav = carousel.querySelector('.carousel-nav');
    const dots = dotsNav ? Array.from(dotsNav.querySelectorAll('.carousel-dot')) : [];

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel(index) {
      track.style.transform = `translateX(-${index * 100}%)`;

      if (dots.length > 0) {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel(currentIndex);
    }

    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
      });
    });

    // Auto-advance carousel every 5 seconds
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    if (prevButton || nextButton) {
      carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
        }
      });
    }
  }

  // ========================================
  // Image Lightbox for Calendar
  // ========================================

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const calendarImages = document.querySelectorAll('.calendar-month img');

  if (lightbox && lightboxImg && calendarImages.length > 0) {
    calendarImages.forEach(img => {
      img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close on click of close button
    const closeButton = lightbox.querySelector('.lightbox-close');
    if (closeButton) {
      closeButton.addEventListener('click', closeLightbox);
    }

    // Close on click outside image
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ========================================
  // Console Message
  // ========================================

  console.log('%c🪷 TBSO Website', 'color: #D4AF37; font-size: 18px; font-weight: bold;');
  console.log('%cMay all beings be happy and free from suffering.', 'color: #4A3728; font-size: 14px;');
  console.log('%cSādhu Sādhu Sādhu', 'color: #8B6F47; font-style: italic;');

});

// ========================================
// Utility: Debounce Function
// ========================================

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

// ========================================
// Handle Window Resize Events
// ========================================

let windowWidth = window.innerWidth;

window.addEventListener('resize', debounce(function() {
  const newWidth = window.innerWidth;

  // Only trigger on width change (not height, which changes on mobile scroll)
  if (newWidth !== windowWidth) {
    windowWidth = newWidth;

    // Close mobile menu if resizing to desktop view
    if (windowWidth >= 1025) {
      const menu = document.querySelector('.menu');
      const menuToggle = document.querySelector('.menu-toggle');

      if (menu && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }
}, 250));
