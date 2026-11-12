/* ===================================================
   Diş Hekimi Barış Berkay GÜLDAMLASI – Main Script
   =================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Menu Toggle ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');

      // Toggle hamburger / close icon
      const hamburgerIcon = menuToggle.querySelector('.icon-menu');
      const closeIcon = menuToggle.querySelector('.icon-close');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menüyü aç');
        const hamburgerIcon = menuToggle.querySelector('.icon-menu');
        const closeIcon = menuToggle.querySelector('.icon-close');
        if (hamburgerIcon && closeIcon) {
          hamburgerIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }
})();
