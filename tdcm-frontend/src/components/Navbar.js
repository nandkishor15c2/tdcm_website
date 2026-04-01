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
          <img src="/tdcm-logo.webp" alt="TDCM Logo" width="40" height="40" style="display: block; border-radius: 8px;">
          <span>TDCM COMPANY</span>
        </a>

        <!-- Navigation links removed -->

        <div class="nav-actions">
          <a href="#/book-slot" class="btn btn-primary btn-sm">Book a Slot</a>
        </div>
      </div>
    </div>
  `;

  // Scroll shadow
  window.addEventListener('scroll', () => {
    el.classList.toggle('scrolled', window.scrollY > 10);
  });
}
