(function () {
  'use strict';

  /* ---------- Mobile Menu Toggle ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    const syncMenuState = (isOpen) => {
      mainNav.classList.toggle('is-open', isOpen);
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
    };

    menuToggle.addEventListener('click', () => {
      syncMenuState(!menuToggle.classList.contains('is-open'));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        syncMenuState(false);
      });
    });
  }

  /* ---------- Clinic Gallery ---------- */
  const gallery = document.querySelector('.gallery-grid');
  const lightbox = document.querySelector('.gallery-lightbox');

  if (gallery && lightbox instanceof HTMLDialogElement) {
    const images = Array.from(gallery.querySelectorAll('img'));
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxFigure = lightbox.querySelector('.lightbox-figure');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const previousButton = lightbox.querySelector('.lightbox-previous');
    const nextButton = lightbox.querySelector('.lightbox-next');
    let activeIndex = 0;
    let swipeStart = null;

    const showImage = (index) => {
      activeIndex = (index + images.length) % images.length;
      const image = images[activeIndex];
      if (lightboxImage instanceof HTMLImageElement && lightboxCaption) {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.closest('figure')?.querySelector('figcaption')?.textContent || '';
      }
    };

    images.forEach((image, index) => {
      const figure = image.closest('figure');
      if (!figure) return;

      figure.tabIndex = 0;
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `Fotoğrafı büyüt: ${figure.querySelector('figcaption')?.textContent || image.alt}`);

      const openLightbox = () => {
        showImage(index);
        lightbox.showModal();
        lightbox.focus();
      };

      figure.addEventListener('click', openLightbox);
      figure.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox();
        }
      });
    });

    closeButton?.addEventListener('click', () => lightbox.close());
    previousButton?.addEventListener('click', () => showImage(activeIndex - 1));
    nextButton?.addEventListener('click', () => showImage(activeIndex + 1));

    lightboxFigure?.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      swipeStart = { x: event.clientX, y: event.clientY };
    });

    lightboxFigure?.addEventListener('pointerup', (event) => {
      if (!swipeStart) return;
      const deltaX = event.clientX - swipeStart.x;
      const deltaY = event.clientY - swipeStart.y;
      swipeStart = null;

      if (Math.abs(deltaX) >= 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
        showImage(activeIndex + (deltaX < 0 ? 1 : -1));
      }
    });

    lightboxFigure?.addEventListener('pointercancel', () => {
      swipeStart = null;
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });

    lightbox.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') lightbox.close();
      if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
      if (event.key === 'ArrowRight') showImage(activeIndex + 1);
    });
  }
})();
