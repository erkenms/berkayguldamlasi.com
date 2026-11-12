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

  /* ---------- Cookie Banner ---------- */
  const COOKIE_KEY = 'cc_cookie';
  const COOKIE_MAX_AGE = 15724800; // ~6 months

  function getCookieConsent() {
    const prefix = COOKIE_KEY + '=';
    const match = document.cookie.split('; ').find(c => c.startsWith(prefix));
    if (!match) return null;
    try {
      const data = JSON.parse(decodeURIComponent(match.slice(prefix.length)));
      return Array.isArray(data.categories) ? data.categories : null;
    } catch {
      return null;
    }
  }

  function hasConsented() {
    return getCookieConsent() !== null;
  }

  function setConsent({ analytics, marketing, platformAnalytics }) {
    const categories = ['necessary'];
    if (analytics) categories.push('analytics');
    if (marketing) categories.push('marketing');
    if (platformAnalytics) categories.push('platformAnalytics');
    const value = encodeURIComponent(JSON.stringify({
      categories,
      consentTimestamp: new Date().toISOString()
    }));
    document.cookie = COOKIE_KEY + '=' + value + '; max-age=' + COOKIE_MAX_AGE + '; path=/; SameSite=Lax';
  }

  const cookieBanner = document.getElementById('cookie-banner');
  const cookieMain = document.getElementById('cookie-main');
  const cookiePrefs = document.getElementById('cookie-prefs');

  if (cookieBanner) {
    // Show banner if no consent yet
    if (hasConsented()) {
      cookieBanner.classList.add('hidden');
    }

    // "Tümünü kabul et"
    const btnAcceptAll = document.getElementById('cookie-accept-all');
    if (btnAcceptAll) {
      btnAcceptAll.addEventListener('click', () => {
        setConsent({ analytics: true, marketing: true, platformAnalytics: true });
        cookieBanner.classList.add('hidden');
      });
    }

    // "Reddet"
    const btnReject = document.getElementById('cookie-reject');
    if (btnReject) {
      btnReject.addEventListener('click', () => {
        setConsent({ analytics: false, marketing: false, platformAnalytics: false });
        cookieBanner.classList.add('hidden');
      });
    }

    // "Tercihler"
    const btnShowPrefs = document.getElementById('cookie-show-prefs');
    if (btnShowPrefs) {
      btnShowPrefs.addEventListener('click', () => {
        if (cookieMain) cookieMain.style.display = 'none';
        if (cookiePrefs) cookiePrefs.style.display = 'flex';
      });
    }

    // "Geri"
    const btnBack = document.getElementById('cookie-back');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (cookiePrefs) cookiePrefs.style.display = 'none';
        if (cookieMain) cookieMain.style.display = 'flex';
      });
    }

    // "Seçimi kaydet"
    const btnSavePrefs = document.getElementById('cookie-save-prefs');
    if (btnSavePrefs) {
      btnSavePrefs.addEventListener('click', () => {
        const cbAnalytics = document.getElementById('pref-analytics');
        const cbMarketing = document.getElementById('pref-marketing');
        const cbPlatform = document.getElementById('pref-platform');
        setConsent({
          analytics: cbAnalytics ? cbAnalytics.checked : false,
          marketing: cbMarketing ? cbMarketing.checked : false,
          platformAnalytics: cbPlatform ? cbPlatform.checked : false
        });
        cookieBanner.classList.add('hidden');
      });
    }

    // Footer "Çerez ayarları" button
    const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
    if (cookieSettingsBtn) {
      cookieSettingsBtn.addEventListener('click', () => {
        cookieBanner.classList.remove('hidden');
        if (cookiePrefs) cookiePrefs.style.display = 'none';
        if (cookieMain) cookieMain.style.display = 'flex';
      });
    }
  }
})();
