// ═══════════════════════════════════════════════════════════
// Admin — Team Management
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { adminUsers } from '../../data/adminData.js';

export function AdminTeamPage() {
    setCurrentPage('team');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Team Management</h1>
        <p class="admin-page-subtitle">${adminUsers.length} admin users</p>
      </div>
      <button class="admin-btn admin-btn-primary">${icon('userPlus', 16)} Invite Admin</button>
    </div>

    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Admin</th>
            <th>Email</th>
            <th>Role</th>
            <th>Last Login</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${adminUsers.map(u => {
        const roleBg = u.role === 'super_admin' ? '#FEF3C7' : u.role === 'editor' ? '#DBEAFE' : '#EDE9FE';
        const roleColor = u.role === 'super_admin' ? '#92400E' : u.role === 'editor' ? '#1D4ED8' : '#7C3AED';
        return `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--primary)">${u.initials}</div>
                    <span style="font-weight:600;color:#1E293B">${u.name}</span>
                  </div>
                </td>
                <td style="font-size:13px;color:#64748B">${u.email}</td>
                <td><span style="background:${roleBg};color:${roleColor};padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;text-transform:capitalize">${u.role.replace('_', ' ')}</span></td>
                <td style="font-size:13px;color:#64748B">${u.lastLogin}</td>
                <td><span class="status-badge status-${u.isActive ? 'active' : 'banned'}">${u.isActive ? 'Active' : 'Inactive'}</span></td>
                <td>
                  <div style="display:flex;gap:6px">
                    <button class="admin-btn admin-btn-secondary admin-btn-sm">${icon('edit', 14)}</button>
                    <button class="admin-btn ${u.isActive ? 'admin-btn-danger' : 'admin-btn-secondary'} admin-btn-sm">${u.isActive ? 'Deactivate' : 'Activate'}</button>
                  </div>
                </td>
              </tr>
            `;
    }).join('')}
        </tbody>
      </table>
    </div>
  `;

    return AdminLayout(content, 'Team');
}

export function initAdminTeam() {
    initAdminLayout();
}
