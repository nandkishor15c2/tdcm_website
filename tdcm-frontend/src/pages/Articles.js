// Articles Index + Detail
import { icon } from '../components/icons.js';
import { articles } from '../data/articles.js';

export function ArticlesPage() {
    const featured = articles.find(a => a.featured) || articles[0];
    const rest = articles.filter(a => a !== featured);

    return `
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Articles</span></div>
        <h1>Insights & Resources</h1>
        <p>Expert analysis, guides, and thought leadership from the TDCM team.</p>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="section-padding">
      <div class="container">
        <a href="#/articles/${featured.slug}" class="card animate-on-scroll" style="display:grid;grid-template-columns:1.2fr 1fr;gap:var(--space-xl);cursor:pointer">
          <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;min-height:280px;color:rgba(255,255,255,.3)">${icon('book', 64)}</div>
          <div style="display:flex;flex-direction:column;justify-content:center">
            <span class="tag" style="align-self:flex-start;margin-bottom:var(--space-md)">${featured.category}</span>
            <h2 style="font-size:var(--text-h2);font-weight:var(--fw-bold);margin-bottom:var(--space-md);line-height:1.3">${featured.title}</h2>
            <p style="color:var(--text-muted);margin-bottom:var(--space-lg);line-height:1.6">${featured.excerpt}</p>
            <div class="article-meta">
              <span>${featured.author}</span>
              <span>·</span>
              <span>${featured.date}</span>
              <span>·</span>
              <span>${icon('clock', 14)} ${featured.readingTime} min read</span>
            </div>
          </div>
        </a>

        <!-- Article Grid -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);margin-top:var(--space-2xl)">
          ${rest.map((a, i) => `
            <a href="#/articles/${a.slug}" class="article-card animate-on-scroll" style="animation-delay:${i * 80}ms">
              <div class="article-card-img">${icon('book', 32)}</div>
              <div class="article-card-body">
                <span class="tag">${a.category}</span>
                <h3>${a.title}</h3>
                <p>${a.excerpt}</p>
                <div class="article-meta">
                  <span>${icon('clock', 14)} ${a.readingTime} min</span>
                  <span>${a.date}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function ArticleDetailPage({ slug }) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return `<div class="page-hero"><div class="container"><h1>Article Not Found</h1></div></div>`;

    const related = articles.filter(a => a.slug !== slug).slice(0, 3);

    return `
    <section class="page-hero">
      <div class="container">
        <span class="tag" style="margin-bottom:var(--space-md)">${article.category}</span>
        <h1 style="max-width:720px;margin:0 auto var(--space-md)">${article.title}</h1>
        <div class="article-meta" style="justify-content:center;color:var(--accent-light)">
          <span>${article.author}</span><span>·</span><span>${article.date}</span><span>·</span><span>${icon('clock', 14)} ${article.readingTime} min read</span>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="max-width:760px">
        <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-md);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.2);margin-bottom:var(--space-2xl)">${icon('book', 80)}</div>
        <article style="font-size:17px;line-height:1.8;color:var(--text-dark)">${article.content}</article>
        
        <!-- Author Bio -->
        <div class="card" style="display:flex;align-items:center;gap:var(--space-lg);margin-top:var(--space-2xl)">
          <div class="tc-avatar" style="width:64px;height:64px;font-size:22px;flex-shrink:0">${article.author.split(' ').map(n => n[0]).join('')}</div>
          <div>
            <div style="font-weight:600;margin-bottom:4px">${article.author}</div>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.5">Expert contributor at TDCM Company. Passionate about helping businesses grow through data-driven strategies.</p>
          </div>
        </div>

        <!-- Newsletter CTA -->
        <div class="card" style="text-align:center;margin-top:var(--space-xl);background:var(--primary-light);border-color:var(--primary)">
          <h3 style="margin-bottom:var(--space-sm)">Subscribe to Our Newsletter</h3>
          <p style="color:var(--text-muted);font-size:14px;margin-bottom:var(--space-md)">Get the latest articles and insights delivered to your inbox.</p>
          <div style="display:flex;gap:8px;max-width:400px;margin:0 auto">
            <input class="form-input" placeholder="your@email.com" style="flex:1">
            <button class="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="section-padding light-section">
      <div class="container">
        <h2 class="section-headline" style="text-align:center;margin-bottom:var(--space-xl)">Related Articles</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg)">
          ${related.map(a => `
            <a href="#/articles/${a.slug}" class="article-card">
              <div class="article-card-img">${icon('book', 32)}</div>
              <div class="article-card-body">
                <span class="tag">${a.category}</span>
                <h3>${a.title}</h3>
                <div class="article-meta"><span>${icon('clock', 14)} ${a.readingTime} min</span><span>${a.date}</span></div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
