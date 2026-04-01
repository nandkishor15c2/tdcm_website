// ═══════════════════════════════════════════════════════════
// TDCM — Navbar Component
// ═══════════════════════════════════════════════════════════

import { icon } from './icons.js';

export function renderNavbar() {
  const el = document.getElementById('navbar');
  el.innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="#/" class="nav-logo">
          <svg viewBox="0 0 40 40" width="36" height="36">
            <rect width="40" height="40" rx="8" fill="#1A4A4F"/>
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">TCM</text>
          </svg>
          <span>TDCM COMPANY</span>
        </a>

        <!-- Navigation links removed -->

        <div class="nav-actions">
          <a href="#/login" class="nav-sign">Sign In</a>
          <a href="#/book-slot" class="btn btn-primary btn-sm">Book a Slot</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#/" class="nav-link">Home</a>
      <a href="#/services" class="nav-link">Services</a>
      <a href="#/services/recruitment" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Recruitment</a>
      <a href="#/services/marketing" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Marketing</a>
      <a href="#/services/crm" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Business Solutions</a>
      <a href="#/consultancy" class="nav-link">Consultancy</a>
      <a href="#/community" class="nav-link">Community</a>
      <a href="#/articles" class="nav-link">Articles</a>
      <a href="#/pricing" class="nav-link">Pricing</a>
      <a href="#/about" class="nav-link">About</a>
      <a href="#/contact" class="nav-link">Contact</a>
      <a href="#/login" class="btn btn-secondary" style="margin-top:16px">Sign In</a>
      <a href="#/book-slot" class="btn btn-primary">Book a Slot</a>
    </div>
  `;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    el.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile toggle
  document.getElementById('mobile-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });

  // Close mobile menu on nav link click
  document.querySelectorAll('#mobile-menu .nav-link, #mobile-menu .btn').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('open');
    });
  });
}
