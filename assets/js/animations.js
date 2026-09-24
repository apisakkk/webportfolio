/**
 * ANIMATIONS & INTERACTIVE EFFECTS
 * Typing Effect, Scroll Reveal Observer, Skill Progress Trigger, Scroll To Top, Preloader
 */

(function () {
  'use strict';

  // 1. PRELOADER
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 300);
    }
  });

  // 2. HERO TYPING ANIMATION
  const typingElement = document.getElementById('typingRole');
  if (typingElement) {
    const roles = [
      'Creative Media Student',
      'UI/UX & Web Designer',
      'Motion Graphic Artist',
      'Visual Storyteller',
      'Creative Technologist'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Pause before next word
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // 3. SCROLL REVEAL OBSERVER
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // If it contains skill progress bars, animate their fill width
          const progressBars = entry.target.querySelectorAll('.skill-progress-fill');
          progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute('data-width') || '80%';
            bar.style.width = targetWidth;
          });

          // Unobserve once revealed for performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // 4. SCROLL TO TOP BUTTON
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();
