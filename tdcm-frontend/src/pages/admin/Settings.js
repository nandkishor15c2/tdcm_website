// ═══════════════════════════════════════════════════════════
// Admin — Settings
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { siteSettings } from '../../data/adminData.js';

export function AdminSettingsPage() {
    setCurrentPage('settings');

    // Group settings
    const groups = {};
    siteSettings.forEach(s => {
        if (!groups[s.group]) groups[s.group] = [];
        groups[s.group].push(s);
    });

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Site Settings</h1>
        <p class="admin-page-subtitle">Manage global site configuration</p>
      </div>
      <button class="admin-btn admin-btn-primary" id="save-settings-btn">${icon('check', 16)} Save All Changes</button>
    </div>

    <div class="admin-card">
      ${Object.entries(groups).map(([group, items]) => `
        <div class="settings-group">
          <div class="settings-group-title">${group}</div>
          ${items.map(s => `
            <div class="settings-row">
              <div class="settings-key">${s.key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</div>
              <input class="admin-form-input" value="${s.value}" data-key="${s.key}" />
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;

    return AdminLayout(content, 'Settings');
}

export function initAdminSettings() {
    initAdminLayout();
    const saveBtn = document.getElementById('save-settings-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            saveBtn.innerHTML = `${icon('check', 16)} Saved!`;
            saveBtn.style.background = '#22C55E';
            setTimeout(() => {
                saveBtn.innerHTML = `${icon('check', 16)} Save All Changes`;
                saveBtn.style.background = '';
            }, 2000);
        });
    }
}
