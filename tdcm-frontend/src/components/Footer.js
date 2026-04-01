// ═══════════════════════════════════════════════════════════
// TDCM — Footer Component
// ═══════════════════════════════════════════════════════════

import { icon } from './icons.js';

export function renderFooter() {
    document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-simple">
        <div class="footer-company">
          <span style="font-size: 18px; font-weight: 600; color: var(--white);">TDCM COMPANY</span>
        </div>
        <div class="footer-linkedin">
          <a href="https://www.linkedin.com/in/tarun-dadlani-a393aa131/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display: inline-flex; align-items: center; gap: 8px; color: var(--white); text-decoration: none; transition: all 0.3s ease;">
            ${icon('linkedin', 24)}
          </a>
        </div>
      </div>
    </div>
  `;
}
