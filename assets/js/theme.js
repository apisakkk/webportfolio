/**
 * THEME CONTROLLER
 * Manages Dark Mode & Light Mode switching with localStorage persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme-preference';
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Detect initial theme: stored preference or system preference (default dark)
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
    // Default to dark theme for creative media feel
    return 'dark';
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        themeToggleBtn?.setAttribute('aria-label', 'Switch to light mode');
      } else {
        themeIcon.className = 'fas fa-moon';
        themeToggleBtn?.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }

  // Toggle theme on button click
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  // Initialize
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
})();
