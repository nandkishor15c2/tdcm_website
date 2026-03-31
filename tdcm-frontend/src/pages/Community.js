// Community Feed page
import { icon } from '../components/icons.js';
import { communityPosts, communityCategories } from '../data/community.js';

export function CommunityPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Community</span></div>
        <h1>Join the Conversation</h1>
        <p>Connect with founders, marketers, and business leaders. Share insights, ask questions, and grow together.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container" style="max-width:800px">
        <!-- Search & Filters -->
        <div style="display:flex;gap:var(--space-md);margin-bottom:var(--space-xl);flex-wrap:wrap">
          <div style="flex:1;min-width:200px;position:relative">
            <input class="form-input" placeholder="Search posts..." style="padding-left:40px">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted)">${icon('search', 18)}</span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${communityCategories.map((c, i) => `
              <button class="tag community-filter ${i === 0 ? 'active' : ''}" data-category="${c}" style="cursor:pointer;${i === 0 ? 'background:var(--primary);color:var(--white);border-color:var(--primary)' : ''}">${c}</button>
            `).join('')}
          </div>
        </div>

        <!-- Join Banner -->
        <div class="card animate-on-scroll" style="background:var(--primary-dark);color:var(--white);text-align:center;margin-bottom:var(--space-xl);border-color:var(--primary)">
          <h3 style="color:var(--white);margin-bottom:var(--space-sm)">Want to Join the Discussion?</h3>
          <p style="color:var(--accent-light);font-size:14px;margin-bottom:var(--space-md)">Create a free account to post, like, and comment on community threads.</p>
          <a href="#/signup" class="btn btn-white btn-sm">Join Community ${icon('arrowRight', 16)}</a>
        </div>

        <!-- Post Feed -->
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${communityPosts.map((p, i) => `
            <div class="post-card animate-on-scroll" style="animation-delay:${i * 50}ms">
              <div class="post-header">
                <div class="post-avatar">${p.initials}</div>
                <div style="flex:1">
                  <div class="post-author-name">${p.author}</div>
                  <div class="post-time">${p.time}</div>
                </div>
                <span class="tag">${p.category}</span>
              </div>
              <p class="post-content">${p.content}</p>
              <div class="post-actions">
                <span class="post-action">${icon('heart', 16)} ${p.likes}</span>
                <span class="post-action">${icon('messageCircle', 16)} ${p.comments}</span>
                <span class="post-action">${icon('share', 16)} Share</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initCommunityPage() {
    document.querySelectorAll('.community-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.community-filter').forEach(b => {
                b.classList.remove('active');
                b.style.background = '';
                b.style.color = '';
                b.style.borderColor = '';
            });
            btn.classList.add('active');
            btn.style.background = 'var(--primary)';
            btn.style.color = 'var(--white)';
            btn.style.borderColor = 'var(--primary)';
        });
    });
}
