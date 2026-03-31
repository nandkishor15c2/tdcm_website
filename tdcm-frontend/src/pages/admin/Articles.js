// ═══════════════════════════════════════════════════════════
// Admin — Articles Management
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { adminArticles } from '../../data/adminData.js';

export function AdminArticlesPage() {
    setCurrentPage('articles');

    const statusCounts = {
        all: adminArticles.length,
        published: adminArticles.filter(a => a.status === 'published').length,
        draft: adminArticles.filter(a => a.status === 'draft').length,
        scheduled: adminArticles.filter(a => a.status === 'scheduled').length,
        archived: adminArticles.filter(a => a.status === 'archived').length,
    };

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Articles</h1>
        <p class="admin-page-subtitle">${adminArticles.length} articles</p>
      </div>
      <button class="admin-btn admin-btn-primary">${icon('plus', 16)} New Article</button>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-filters" id="article-filters">
          <button class="filter-btn active" data-filter="all">All (${statusCounts.all})</button>
          <button class="filter-btn" data-filter="published">Published (${statusCounts.published})</button>
          <button class="filter-btn" data-filter="draft">Draft (${statusCounts.draft})</button>
          <button class="filter-btn" data-filter="scheduled">Scheduled (${statusCounts.scheduled})</button>
          <button class="filter-btn" data-filter="archived">Archived (${statusCounts.archived})</button>
        </div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          ${adminArticles.map(a => `
            <tr class="article-row" data-status="${a.status}" style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.title}</td>
              <td>${a.author}</td>
              <td><span style="background:#F1F5F9;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:500;color:#475569">${a.category}</span></td>
              <td><span class="status-badge status-${a.status}">${a.status}</span></td>
              <td style="font-size:13px;color:#64748B">${a.publishedAt || '—'}</td>
              <td style="font-weight:600;color:#334155">${a.views > 0 ? a.views.toLocaleString() : '—'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

    return AdminLayout(content, 'Articles');
}

export function initAdminArticles() {
    initAdminLayout();
    const filters = document.querySelectorAll('#article-filters .filter-btn');
    const rows = document.querySelectorAll('.article-row');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            rows.forEach(row => {
                row.style.display = (filter === 'all' || row.dataset.status === filter) ? '' : 'none';
            });
        });
    });
}
