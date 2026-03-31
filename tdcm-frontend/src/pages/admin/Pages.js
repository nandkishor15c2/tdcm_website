// ═══════════════════════════════════════════════════════════
// Admin — Pages / CMS
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { adminPages } from '../../data/adminData.js';

export function AdminPagesPage() {
    setCurrentPage('pages');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Pages</h1>
        <p class="admin-page-subtitle">Manage CMS page content and sections</p>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Pages</div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Page</th>
            <th>Slug</th>
            <th>Sections</th>
            <th>Last Updated</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          ${adminPages.map(p => `
            <tr style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B">${p.title}</td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">/${p.slug}</td>
              <td>${p.sections} sections</td>
              <td style="font-size:13px;color:#64748B">${p.lastUpdated}</td>
              <td>
                <div class="admin-toggle ${p.isPublished ? 'on' : ''}" data-slug="${p.slug}"></div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

    return AdminLayout(content, 'Pages');
}

export function initAdminPages() {
    initAdminLayout();
    document.querySelectorAll('.admin-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('on');
        });
    });
}
