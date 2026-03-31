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

        <div class="nav-links">
          <a href="#/" class="nav-link" data-path="/">Home</a>

          <div class="has-mega">
            <span class="nav-link nav-link-has-menu" data-path="/services">
              Services ${icon('chevronDown', 14)}
            </span>
            <div class="mega-menu">
              <a href="#/services/recruitment" class="mega-item">
                <div class="mega-icon">${icon('users', 20)}</div>
                <div><div class="mega-label">Recruitment</div><div class="mega-desc">Find top talent 3× faster</div></div>
              </a>
              <a href="#/services/marketing" class="mega-item">
                <div class="mega-icon">${icon('trendingUp', 20)}</div>
                <div><div class="mega-label">Marketing</div><div class="mega-desc">Growth-driven performance</div></div>
              </a>
              <a href="#/services/crm" class="mega-item">
                <div class="mega-icon">${icon('layers', 20)}</div>
                <div><div class="mega-label">Business Solutions</div><div class="mega-desc">CRM & ops at scale</div></div>
              </a>
              <a href="#/services" class="mega-item">
                <div class="mega-icon">${icon('arrowRight', 20)}</div>
                <div><div class="mega-label">View All Services</div><div class="mega-desc">Explore everything we offer</div></div>
              </a>
            </div>
          </div>

          <div class="has-mega">
            <span class="nav-link nav-link-has-menu" data-path="/consultancy">
              Consultancy ${icon('chevronDown', 14)}
            </span>
            <div class="mega-menu">
              <a href="#/consultancy/go-to-market" class="mega-item">
                <div class="mega-icon">${icon('rocket', 20)}</div>
                <div><div class="mega-label">Go-To-Market</div><div class="mega-desc">Launch strategy</div></div>
              </a>
              <a href="#/consultancy/product-launch" class="mega-item">
                <div class="mega-icon">${icon('zap', 20)}</div>
                <div><div class="mega-label">Product Launch</div><div class="mega-desc">Full-service launch</div></div>
              </a>
              <a href="#/consultancy/0-to-90-plan" class="mega-item">
                <div class="mega-icon">${icon('target', 20)}</div>
                <div><div class="mega-label">0 to 90 Plan</div><div class="mega-desc">From zero to revenue</div></div>
              </a>
              <a href="#/consultancy/0-to-90-training" class="mega-item">
                <div class="mega-icon">${icon('award', 20)}</div>
                <div><div class="mega-label">0 to 90 Training</div><div class="mega-desc">Founder training</div></div>
              </a>
              <a href="#/consultancy/quarterly-health-analysis" class="mega-item">
                <div class="mega-icon">${icon('barChart', 20)}</div>
                <div><div class="mega-label">Quarterly Health</div><div class="mega-desc">Business diagnostics</div></div>
              </a>
              <a href="#/consultancy" class="mega-item">
                <div class="mega-icon">${icon('arrowRight', 20)}</div>
                <div><div class="mega-label">All Programs</div><div class="mega-desc">View consultancy portfolio</div></div>
              </a>
            </div>
          </div>

          <a href="#/community" class="nav-link" data-path="/community">Community</a>
          <a href="#/articles" class="nav-link" data-path="/articles">Articles</a>
          <a href="#/pricing" class="nav-link" data-path="/pricing">Pricing</a>
          <a href="#/about" class="nav-link" data-path="/about">About</a>
        </div>

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
