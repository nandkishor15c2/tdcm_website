// ═══════════════════════════════════════════════════════════
// Admin — Community Moderation
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { communityPosts, communityMembers } from '../../data/adminData.js';

export function AdminCommunityPage() {
    setCurrentPage('community');

    const flaggedCount = communityPosts.filter(p => p.isFlagged).length;

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Community Moderation</h1>
        <p class="admin-page-subtitle">${communityPosts.length} posts • ${communityMembers.length} members</p>
      </div>
    </div>

    <!-- Tab Toggle -->
    <div style="display:flex;gap:8px;margin-bottom:20px">
      <button class="filter-btn active" id="tab-posts">Posts</button>
      <button class="filter-btn" id="tab-members">Members</button>
    </div>

    <!-- Posts Tab -->
    <div id="community-posts-tab">
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-filters" id="post-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="pinned">Pinned</button>
            <button class="filter-btn" data-filter="flagged">Flagged (${flaggedCount})</button>
            <button class="filter-btn" data-filter="hidden">Hidden</button>
          </div>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Content</th>
              <th>Engagement</th>
              <th>Flags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${communityPosts.map(p => {
        let flagStatus = '';
        if (p.isFlagged) flagStatus = 'flagged';
        else if (p.isHidden) flagStatus = 'hidden';
        else if (p.isPinned) flagStatus = 'pinned';
        return `
                <tr class="post-row" data-filter="${flagStatus || 'all'}" data-id="${p.id}">
                  <td>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div style="width:32px;height:32px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--primary)">${p.authorInitials}</div>
                      <div>
                        <div style="font-weight:600;font-size:13px;color:#1E293B">${p.author}</div>
                        <div style="font-size:11px;color:#94A3B8">${p.createdAt}</div>
                      </div>
                    </div>
                  </td>
                  <td style="max-width:350px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.content}</td>
                  <td>
                    <span style="font-size:13px;color:#64748B">${icon('heart', 14)} ${p.likes} &nbsp; ${icon('messageCircle', 14)} ${p.comments}</span>
                  </td>
                  <td>
                    ${p.isPinned ? '<span class="status-badge status-pinned">Pinned</span>' : ''}
                    ${p.isFlagged ? '<span class="status-badge status-flagged">Flagged</span>' : ''}
                    ${p.isHidden ? '<span class="status-badge status-hidden">Hidden</span>' : ''}
                    ${!p.isPinned && !p.isFlagged && !p.isHidden ? '<span style="color:#CBD5E1">—</span>' : ''}
                  </td>
                  <td>
                    <div style="display:flex;gap:6px">
                      <button class="admin-btn admin-btn-secondary admin-btn-sm pin-btn" title="${p.isPinned ? 'Unpin' : 'Pin'}">${icon('pin', 14)}</button>
                      <button class="admin-btn admin-btn-secondary admin-btn-sm hide-btn" title="${p.isHidden ? 'Show' : 'Hide'}">${icon('eyeOff', 14)}</button>
                    </div>
                  </td>
                </tr>
              `;
    }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Members Tab -->
    <div id="community-members-tab" style="display:none">
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-title">Community Members</div>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Username</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Posts</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${communityMembers.map(m => `
              <tr>
                <td style="font-weight:600;color:#1E293B">${m.name}</td>
                <td style="font-family:monospace;font-size:13px;color:#64748B">@${m.username}</td>
                <td style="font-size:13px;color:#64748B">${m.email}</td>
                <td style="font-size:13px;color:#64748B">${m.joined}</td>
                <td style="text-align:center;font-weight:600">${m.posts}</td>
                <td><span class="status-badge status-${m.isBanned ? 'banned' : 'active'}">${m.isBanned ? 'Banned' : 'Active'}</span></td>
                <td>
                  <button class="admin-btn ${m.isBanned ? 'admin-btn-secondary' : 'admin-btn-danger'} admin-btn-sm ban-btn">
                    ${m.isBanned ? 'Unban' : 'Ban'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

    return AdminLayout(content, 'Community');
}

export function initAdminCommunity() {
    initAdminLayout();

    // Tab switching
    const tabPosts = document.getElementById('tab-posts');
    const tabMembers = document.getElementById('tab-members');
    const postsTab = document.getElementById('community-posts-tab');
    const membersTab = document.getElementById('community-members-tab');

    if (tabPosts && tabMembers) {
        tabPosts.addEventListener('click', () => {
            tabPosts.classList.add('active');
            tabMembers.classList.remove('active');
            postsTab.style.display = '';
            membersTab.style.display = 'none';
        });
        tabMembers.addEventListener('click', () => {
            tabMembers.classList.add('active');
            tabPosts.classList.remove('active');
            membersTab.style.display = '';
            postsTab.style.display = 'none';
        });
    }

    // Post filters
    const filters = document.querySelectorAll('#post-filters .filter-btn');
    const rows = document.querySelectorAll('.post-row');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            rows.forEach(row => {
                if (filter === 'all') { row.style.display = ''; }
                else { row.style.display = row.dataset.filter === filter ? '' : 'none'; }
            });
        });
    });
}
