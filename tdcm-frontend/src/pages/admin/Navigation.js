// ═══════════════════════════════════════════════════════════
// Admin — Navigation Editor
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';

const headerNav = [
    { label: 'Home', href: '/', isActive: true },
    {
        label: 'Services', href: '/services', isActive: true, children: [
            { label: 'Recruitment', href: '/services/recruitment' },
            { label: 'Marketing', href: '/services/marketing' },
            { label: 'Business Solutions', href: '/services/crm' },
        ]
    },
    {
        label: 'Consultancy', href: '/consultancy', isActive: true, children: [
            { label: 'Go To Market', href: '/consultancy/go-to-market' },
            { label: 'Product Launch', href: '/consultancy/product-launch' },
            { label: '0 to 90 Plan', href: '/consultancy/0-to-90-plan' },
        ]
    },
    { label: 'Community', href: '/community', isActive: true },
    { label: 'Articles', href: '/articles', isActive: true },
    { label: 'Pricing', href: '/pricing', isActive: true },
    { label: 'About', href: '/about', isActive: true },
    { label: 'Contact', href: '/contact', isActive: true },
];

export function AdminNavigationPage() {
    setCurrentPage('navigation');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Navigation</h1>
        <p class="admin-page-subtitle">Manage header and footer navigation links</p>
      </div>
      <button class="admin-btn admin-btn-primary">${icon('plus', 16)} Add Item</button>
    </div>

    <div class="admin-card" style="margin-bottom:20px">
      <div class="admin-card-title">Header Navigation</div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>URL</th>
            <th>Children</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          ${headerNav.map(n => `
            <tr>
              <td style="font-weight:600;color:#1E293B">${n.label}</td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">${n.href}</td>
              <td>${n.children ? `<span style="background:#F1F5F9;padding:3px 8px;border-radius:8px;font-size:12px;font-weight:600;color:#475569">${n.children.length} items</span>` : '—'}</td>
              <td><div class="admin-toggle ${n.isActive ? 'on' : ''}"></div></td>
            </tr>
            ${n.children ? n.children.map(c => `
              <tr style="background:#F8FAFC">
                <td style="padding-left:40px;color:#64748B">↳ ${c.label}</td>
                <td style="font-family:monospace;font-size:13px;color:#94A3B8">${c.href}</td>
                <td>—</td>
                <td><div class="admin-toggle on"></div></td>
              </tr>
            `).join('') : ''}
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="admin-card">
      <div class="admin-card-title">Footer Navigation</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:12px">
        ${['Solutions', 'Company', 'Resources', 'Legal'].map(col => `
          <div style="background:#F8FAFC;border-radius:8px;padding:16px">
            <div style="font-weight:700;font-size:13px;color:#334155;margin-bottom:12px">${col}</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${['Link 1', 'Link 2', 'Link 3'].map(l => `
                <div style="font-size:13px;color:#64748B;display:flex;justify-content:space-between;align-items:center">
                  <span>${l}</span>
                  <span style="cursor:pointer;color:#94A3B8">${icon('edit', 12)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    return AdminLayout(content, 'Navigation');
}

export function initAdminNavigation() {
    initAdminLayout();
    document.querySelectorAll('.admin-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => toggle.classList.toggle('on'));
    });
}
