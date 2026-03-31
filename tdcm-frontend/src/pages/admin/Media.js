// ═══════════════════════════════════════════════════════════
// Admin — Media Library
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { mediaFiles } from '../../data/adminData.js';

function getFileIcon(type) {
    if (type.startsWith('image')) return icon('image', 32);
    if (type.startsWith('video')) return icon('video', 32);
    return icon('file', 32);
}

export function AdminMediaPage() {
    setCurrentPage('media');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Media Library</h1>
        <p class="admin-page-subtitle">${mediaFiles.length} files</p>
      </div>
      <button class="admin-btn admin-btn-primary">${icon('upload', 16)} Upload File</button>
    </div>

    <div class="media-grid">
      ${mediaFiles.map(f => `
        <div class="media-item" data-id="${f.id}">
          <div class="media-thumb">
            ${getFileIcon(f.type)}
          </div>
          <div class="media-info">
            <div class="media-name" title="${f.name}">${f.name}</div>
            <div class="media-meta">${f.size} • ${f.uploadedAt}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

    return AdminLayout(content, 'Media');
}

export function initAdminMedia() {
    initAdminLayout();
}
