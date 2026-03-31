// ═══════════════════════════════════════════════════════════
// TDCM Admin — Layout Component
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';

let currentRole = 'super_admin';
let currentPage = 'dashboard';

export function getCurrentRole() { return currentRole; }
export function setCurrentRole(role) { currentRole = role; }
export function setCurrentPage(page) { currentPage = page; }

const navItems = [
    {
        section: 'Overview', items: [
            { key: 'dashboard', label: 'Dashboard', icon: 'grid', href: '#/admin', roles: ['super_admin', 'editor', 'moderator'] },
        ]
    },
    {
        section: 'Management', items: [
            { key: 'bookings', label: 'Bookings', icon: 'calendar', href: '#/admin/bookings', roles: ['super_admin'], badge: '2' },
        ]
    },
    {
        section: 'Content', items: [
            { key: 'articles', label: 'Articles', icon: 'file', href: '#/admin/articles', roles: ['super_admin', 'editor'] },
            { key: 'pages', label: 'Pages', icon: 'layout', href: '#/admin/pages', roles: ['super_admin', 'editor'] },
            { key: 'services', label: 'Services', icon: 'briefcase', href: '#/admin/services', roles: ['super_admin', 'editor'] },
            { key: 'media', label: 'Media', icon: 'image', href: '#/admin/media', roles: ['super_admin', 'editor', 'moderator'] },
        ]
    },
    {
        section: 'Community', items: [
            { key: 'community', label: 'Moderation', icon: 'shield', href: '#/admin/community', roles: ['super_admin', 'moderator'], badge: '1' },
        ]
    },
    {
        section: 'System', items: [
            { key: 'navigation', label: 'Navigation', icon: 'menu', href: '#/admin/navigation', roles: ['super_admin'] },
            { key: 'pricing', label: 'Pricing', icon: 'tag', href: '#/admin/pricing', roles: ['super_admin'] },
            { key: 'team', label: 'Team', icon: 'userPlus', href: '#/admin/team', roles: ['super_admin'] },
            { key: 'settings', label: 'Settings', icon: 'settings', href: '#/admin/settings', roles: ['super_admin'] },
        ]
    },
];

function renderSidebarNav() {
    return navItems.map(section => {
        const visibleItems = section.items.filter(item => item.roles.includes(currentRole));
        if (visibleItems.length === 0) return '';
        return `
      <div class="sidebar-section">
        <div class="sidebar-section-label">${section.section}</div>
        ${visibleItems.map(item => `
          <a href="${item.href}" class="sidebar-link ${currentPage === item.key ? 'active' : ''}" data-admin-page="${item.key}">
            ${icon(item.icon, 18)}
            ${item.label}
            ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
          </a>
        `).join('')}
      </div>
    `;
    }).join('');
}

export function AdminLayout(pageContent, breadcrumb = '') {
    const roleLabel = currentRole.replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return `
    <div class="admin-wrap">
      <!-- Sidebar -->
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">TCM</div>
          <div class="sidebar-brand">TDCM Admin<span>Management Portal</span></div>
        </div>
        
        <select class="role-switcher" id="admin-role-switcher">
          <option value="super_admin" ${currentRole === 'super_admin' ? 'selected' : ''}>🔑 Super Admin</option>
          <option value="editor" ${currentRole === 'editor' ? 'selected' : ''}>✏️ Editor</option>
          <option value="moderator" ${currentRole === 'moderator' ? 'selected' : ''}>🛡️ Moderator</option>
        </select>

        <nav class="sidebar-nav" id="sidebar-nav">
          ${renderSidebarNav()}
        </nav>
        
        <div class="sidebar-footer">
          <div class="sidebar-avatar">RK</div>
          <div class="sidebar-user-info">
            <div class="sidebar-user-name">Rajesh Kumar</div>
            <div class="sidebar-user-role">${roleLabel}</div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="admin-main">
        <div class="admin-topbar">
          <div class="admin-breadcrumb">
            <a href="#/admin">Admin</a>
            ${breadcrumb ? `<span class="sep">/</span><span class="current">${breadcrumb}</span>` : ''}
          </div>
          <div class="admin-topbar-actions">
            <a href="#/" class="admin-btn admin-btn-secondary admin-btn-sm">${icon('globe', 14)} View Site</a>
          </div>
        </div>
        <div class="admin-content">
          ${pageContent}
        </div>
      </div>
    </div>
  `;
}

export function initAdminLayout() {
    const switcher = document.getElementById('admin-role-switcher');
    if (switcher) {
        switcher.addEventListener('change', (e) => {
            currentRole = e.target.value;
            // Re-render current admin page via hash navigation
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        });
    }
}
