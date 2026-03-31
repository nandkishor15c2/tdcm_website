// ═══════════════════════════════════════════════════════════
// Admin — Services Editor
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';

const servicesList = [
    { title: 'Recruitment Solutions', category: 'Service', slug: 'recruitment', isActive: true, sortOrder: 1 },
    { title: 'Performance Marketing', category: 'Service', slug: 'marketing', isActive: true, sortOrder: 2 },
    { title: 'Business Solutions (CRM)', category: 'Service', slug: 'crm', isActive: true, sortOrder: 3 },
    { title: 'Go To Market Strategy', category: 'Consultancy', slug: 'go-to-market', isActive: true, sortOrder: 1 },
    { title: 'Product Launch', category: 'Consultancy', slug: 'product-launch', isActive: true, sortOrder: 2 },
    { title: '0 to 90 Plan', category: 'Consultancy', slug: '0-to-90-plan', isActive: true, sortOrder: 3 },
    { title: '0 to 90 Training', category: 'Consultancy', slug: '0-to-90-training', isActive: true, sortOrder: 4 },
    { title: 'Quarterly Health Analysis', category: 'Consultancy', slug: 'quarterly-health-analysis', isActive: false, sortOrder: 5 },
];

export function AdminServicesPage() {
    setCurrentPage('services');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Services</h1>
        <p class="admin-page-subtitle">Manage service and consultancy program pages</p>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Services & Programs</div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Slug</th>
            <th>Order</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          ${servicesList.map(s => `
            <tr style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B">${s.title}</td>
              <td><span style="background:${s.category === 'Service' ? '#DBEAFE' : '#EDE9FE'};color:${s.category === 'Service' ? '#1D4ED8' : '#7C3AED'};padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600">${s.category}</span></td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">/${s.category === 'Service' ? 'services' : 'consultancy'}/${s.slug}</td>
              <td style="text-align:center">${s.sortOrder}</td>
              <td>
                <div class="admin-toggle ${s.isActive ? 'on' : ''}"></div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

    return AdminLayout(content, 'Services');
}

export function initAdminServices() {
    initAdminLayout();
    document.querySelectorAll('.admin-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => toggle.classList.toggle('on'));
    });
}
