/**
 * Main JavaScript
 * Queen Blvd Financial Wellness Platform
 */

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections when they're added
document.addEventListener('DOMContentLoaded', () => {
  // Observe sections for scroll animations
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (!section.classList.contains('hero')) {
      observer.observe(section);
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add parallax effect to hero background
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
          const rays = hero.querySelector('.hero__rays');
          const images = hero.querySelector('.hero__images');

          if (rays) {
            rays.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.05}deg)`;
          }
          if (images) {
            images.style.transform = `translateY(${scrolled * 0.3}px)`;
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  });
});

// Export for module use
export { observer };
