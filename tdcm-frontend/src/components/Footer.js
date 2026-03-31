// ═══════════════════════════════════════════════════════════
// TDCM — Footer Component
// ═══════════════════════════════════════════════════════════

import { icon } from './icons.js';

export function renderFooter() {
    document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo" style="color:var(--white)">
            <svg viewBox="0 0 40 40" width="36" height="36">
              <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.15)"/>
              <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">TCM</text>
            </svg>
            <span>TDCM COMPANY</span>
          </div>
          <p>Dream Bold. Plan Smart. Hustle Hard & Celebrate Achievements. We help businesses grow through expert recruitment, marketing, and technology solutions.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">${icon('linkedin', 16)}</a>
            <a href="#" aria-label="Twitter">${icon('twitter', 16)}</a>
            <a href="#" aria-label="Instagram">${icon('instagram', 16)}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <a href="#/services/recruitment">Recruitment</a>
          <a href="#/services/marketing">Marketing</a>
          <a href="#/services/crm">Business Solutions</a>
          <a href="#/pricing">Pricing</a>
        </div>

        <div class="footer-col">
          <h4>Consultancy</h4>
          <a href="#/consultancy/go-to-market">Go-To-Market</a>
          <a href="#/consultancy/product-launch">Product Launch</a>
          <a href="#/consultancy/0-to-90-plan">0 to 90 Plan</a>
          <a href="#/consultancy/0-to-90-training">0 to 90 Training</a>
          <a href="#/consultancy/quarterly-health-analysis">Quarterly Health</a>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <a href="#/about">About Us</a>
          <a href="#/articles">Articles</a>
          <a href="#/community">Community</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 TDCM Company. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  `;
}
