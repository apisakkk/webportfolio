/**
 * NAVIGATION CONTROLLER (Multi-Page & Smooth Experience)
 * Handles Sticky Navbar, Active Page Detection, and Mobile Menu Management
 */

(function () {
  'use strict';

  const navbar = document.querySelector('.main-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  // Sticky Navbar on Scroll
  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  // Active Nav Detection based on current file URL
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;

      // Check if matches the current HTML file
      if (linkHref === pageName || (pageName === '' && linkHref === 'index.html')) {
        link.classList.add('active');
      } else if (linkHref.startsWith('#')) {
        // In-page hash link fallback
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Auto-close mobile menu on click
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Event Listeners
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  window.addEventListener('DOMContentLoaded', () => {
    handleNavbarScroll();
    setActiveNavLink();
  });
})();
