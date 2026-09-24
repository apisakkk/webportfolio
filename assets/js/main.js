/**
 * MAIN CONTROLLER
 * Creative Media Portfolio Core Initializer
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Creative Console Badge
  console.log(
    '%c ✦ CREATIVE MEDIA PORTFOLIO ✦ \n%c Designed & Developed with Passion for Digital Arts ',
    'background: #0284c7; color: #ffffff; font-weight: bold; font-size: 14px; padding: 6px 12px; border-radius: 6px 6px 0 0;',
    'background: #f59e0b; color: #0f172a; font-weight: bold; font-size: 12px; padding: 6px 12px; border-radius: 0 0 6px 6px;'
  );

  // Initialize all Bootstrap tooltips if any
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
