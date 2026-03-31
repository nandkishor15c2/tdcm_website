// ═══════════════════════════════════════════════════════════
// Admin — Dashboard
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { dashboardStats, bookings } from '../../data/adminData.js';

export function AdminDashboardPage() {
    setCurrentPage('dashboard');
    const s = dashboardStats;

    const upcomingBookings = bookings.filter(b => b.status === 'upcoming');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Dashboard</h1>
        <p class="admin-page-subtitle">Welcome back, Rajesh. Here's what's happening.</p>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="stat-cards">

      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${icon('calendar', 20)}</div>
        <div class="sc-label">Upcoming Bookings</div>
        <div class="sc-value">${s.bookingsUpcoming}</div>
        <div class="sc-change up">₹${(s.bookingsUpcoming * 5000).toLocaleString()} revenue</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${icon('file', 20)}</div>
        <div class="sc-label">Published Articles</div>
        <div class="sc-value">${s.publishedArticles}</div>
        <div class="sc-change up">↑ 2 this month</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="sc-icon qa-purple">${icon('messageCircle', 20)}</div>
        <div class="sc-label">Community Posts</div>
        <div class="sc-value">${s.communityPosts}</div>
        <div class="sc-change up">↑ ${s.newMembers30d} new members</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">

      <a href="#/admin/articles" class="quick-action">
        <div class="quick-action-icon qa-blue">${icon('file', 20)}</div>
        <div>
          <div class="quick-action-text">Create Article</div>
          <div class="quick-action-sub">Publish new content</div>
        </div>
      </a>
      <a href="#/admin/community" class="quick-action">
        <div class="quick-action-icon qa-amber">${icon('shield', 20)}</div>
        <div>
          <div class="quick-action-text">Moderate Posts</div>
          <div class="quick-action-sub">1 flagged post</div>
        </div>
      </a>
    </div>

    <!-- Single Full-Width Table Layout -->
    <div style="display:grid;grid-template-columns:1fr;gap:20px">


      <!-- Upcoming Bookings -->
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-title">Upcoming Bookings</div>
          <a href="#/admin/bookings" class="admin-btn admin-btn-secondary admin-btn-sm">View All</a>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${upcomingBookings.length > 0 ? upcomingBookings.map(b => `
              <tr>
                <td>
                  <div style="font-weight:600;color:#1E293B">${b.clientName}</div>
                  <div style="font-size:12px;color:#94A3B8">${b.email}</div>
                </td>
                <td>
                  <div style="font-weight:500">${b.date}</div>
                  <div style="font-size:12px;color:#94A3B8">${b.time}</div>
                </td>
                <td><span class="status-badge status-${b.status}">${b.status}</span></td>
              </tr>
            `).join('') : '<tr><td colspan="3" class="admin-empty">No upcoming bookings</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;

    return AdminLayout(content, 'Dashboard');
}

export function initAdminDashboard() {
    initAdminLayout();
}
