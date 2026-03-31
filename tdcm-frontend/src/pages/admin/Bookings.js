// ═══════════════════════════════════════════════════════════
// Admin — Bookings Management
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { bookings } from '../../data/adminData.js';

export function AdminBookingsPage() {
    setCurrentPage('bookings');

    const statusCounts = {
        all: bookings.length,
        upcoming: bookings.filter(b => b.status === 'upcoming').length,
        completed: bookings.filter(b => b.status === 'completed').length,
        cancelled: bookings.filter(b => b.status === 'cancelled').length,
    };

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Booking Slots</h1>
        <p class="admin-page-subtitle">${bookings.length} total sessions • ₹${(bookings.filter(b => b.paid).length * 5000).toLocaleString()} collected</p>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="stat-cards" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${icon('calendar', 20)}</div>
        <div class="sc-label">Upcoming</div>
        <div class="sc-value">${statusCounts.upcoming}</div>
      </div>
      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${icon('check', 20)}</div>
        <div class="sc-label">Completed</div>
        <div class="sc-value">${statusCounts.completed}</div>
      </div>
      <div class="stat-card accent-red">
        <div class="sc-icon qa-red">${icon('x', 20)}</div>
        <div class="sc-label">Cancelled</div>
        <div class="sc-value">${statusCounts.cancelled}</div>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Bookings</div>
        <div class="admin-table-filters" id="booking-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="upcoming">Upcoming</button>
          <button class="filter-btn" data-filter="completed">Completed</button>
          <button class="filter-btn" data-filter="cancelled">Cancelled</button>
        </div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Time</th>
            <th>Topic</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${bookings.map(b => `
            <tr class="booking-row" data-status="${b.status}">
              <td>
                <div style="font-weight:600;color:#1E293B">${b.clientName}</div>
                <div style="font-size:12px;color:#94A3B8">${b.email}</div>
              </td>
              <td style="font-weight:500">${b.date}</td>
              <td>${b.time}</td>
              <td style="max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.topic}</td>
              <td>
                <span style="color:${b.paid ? '#22C55E' : '#EF4444'};font-weight:600;font-size:13px">
                  ${b.paid ? '₹5,000 ✓' : 'Unpaid'}
                </span>
              </td>
              <td><span class="status-badge status-${b.status}">${b.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

    return AdminLayout(content, 'Bookings');
}

export function initAdminBookings() {
    initAdminLayout();
    const filters = document.querySelectorAll('#booking-filters .filter-btn');
    const rows = document.querySelectorAll('.booking-row');
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
