// Profile + Notifications pages
import { icon } from '../components/icons.js';
import { communityPosts } from '../data/community.js';

export function ProfilePage({ username }) {
    const displayName = username ? username.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Demo User';
    const initials = displayName.split(' ').map(n => n[0]).join('').slice(0, 2);

    return `
    <div class="profile-header">
      <div class="container">
        <div class="profile-avatar">${initials}</div>
        <h1 style="font-size:var(--text-h2)">${displayName}</h1>
        <p style="color:var(--text-muted);margin-top:4px">@${username || 'demo-user'}</p>
        <p style="color:var(--text-muted);font-size:14px;max-width:480px;margin:var(--space-md) auto 0">Product enthusiast, startup founder, and lifelong learner. Building something amazing with TDCM.</p>
        <div class="profile-stats">
          <div class="profile-stat"><div class="profile-stat-value">24</div><div class="profile-stat-label">Posts</div></div>
          <div class="profile-stat"><div class="profile-stat-value">156</div><div class="profile-stat-label">Followers</div></div>
          <div class="profile-stat"><div class="profile-stat-value">89</div><div class="profile-stat-label">Following</div></div>
        </div>
        <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-sm);justify-content:center">
          <button class="btn btn-primary btn-sm">${icon('users', 14)} Follow</button>
          <button class="btn btn-secondary btn-sm">${icon('mail', 14)} Message</button>
        </div>
      </div>
    </div>

    <section class="section-padding">
      <div class="container" style="max-width:700px">
        <h2 class="section-headline" style="font-size:var(--text-h3);margin-bottom:var(--space-lg)">Recent Posts</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${communityPosts.slice(0, 3).map(p => `
            <div class="post-card">
              <div class="post-header">
                <div class="post-avatar">${initials}</div>
                <div><div class="post-author-name">${displayName}</div><div class="post-time">${p.time}</div></div>
              </div>
              <p class="post-content">${p.content}</p>
              <div class="post-actions">
                <span class="post-action">${icon('heart', 16)} ${p.likes}</span>
                <span class="post-action">${icon('messageCircle', 16)} ${p.comments}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function NotificationsPage() {
    const notifications = [
        { initials: 'SP', text: '<strong>Sneha Patel</strong> liked your post about marketing strategies', time: '2 min ago', unread: true },
        { initials: 'RK', text: '<strong>Rajesh Kumar</strong> commented on your post', time: '15 min ago', unread: true },
        { initials: 'AM', text: '<strong>Arjun Menon</strong> started following you', time: '1 hour ago', unread: true },
        { initials: 'DS', text: '<strong>Divya Sharma</strong> mentioned you in a comment', time: '3 hours ago', unread: false },
        { initials: 'VJ', text: '<strong>Vikram Joshi</strong> liked your comment', time: '5 hours ago', unread: false },
        { initials: 'AD', text: '<strong>Anita Desai</strong> replied to your post about CRM implementation', time: '1 day ago', unread: false },
        { initials: 'TC', text: '<strong>TDCM</strong> published a new article: "AI in Recruitment"', time: '2 days ago', unread: false },
        { initials: 'PR', text: '<strong>Priya Sharma</strong> liked your article share', time: '3 days ago', unread: false },
    ];

    return `
    <section class="page-hero" style="padding-bottom:var(--space-xl)">
      <div class="container">
        <h1>Notifications</h1>
      </div>
    </section>
    <section class="section-padding-sm">
      <div class="container" style="max-width:700px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <span style="font-size:14px;color:var(--text-muted)">${notifications.filter(n => n.unread).length} unread notifications</span>
          <button class="btn btn-secondary btn-sm">${icon('check', 14)} Mark all as read</button>
        </div>
        <div class="card" style="padding:0;overflow:hidden">
          ${notifications.map(n => `
            <div class="notification-item ${n.unread ? 'unread' : ''}">
              <div class="notification-avatar">${n.initials}</div>
              <div class="notification-text">${n.text}</div>
              <div class="notification-time">${n.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
