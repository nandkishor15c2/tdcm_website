// Consultancy Overview + Detail pages
import { icon } from '../components/icons.js';
import { consultancyPrograms } from '../data/services.js';

export function ConsultancyPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Startup Consultancy</span></div>
        <h1>Accelerate Your Startup Journey</h1>
        <p>Expert-led programs designed to take startups from zero to scale — with proven frameworks, hands-on mentorship, and measurable outcomes.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="products-grid" style="grid-template-columns:repeat(3,1fr)">
          ${consultancyPrograms.map((p, i) => `
            <a href="#/consultancy/${p.slug}" class="product-card animate-on-scroll" style="animation-delay:${i * 80}ms">
              <div class="pc-icon">${icon(p.icon, 24)}</div>
              <h3 class="pc-title">${p.title}</h3>
              <p class="pc-desc">${p.description}</p>
              <div style="display:flex;align-items:center;gap:8px;margin:var(--space-md) 0;font-size:13px;color:var(--text-muted)">${icon('clock', 14)} ${p.timeline}</div>
              <span class="pc-cta">Learn more ${icon('arrowRight', 16)}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    
    <section class="section-padding dark-section">
      <div class="container" style="text-align:center">
        <h2 class="section-headline" style="color:var(--white)">Why Choose TDCM Consultancy?</h2>
        <div class="stats-grid" style="margin-top:var(--space-xl)">
          ${[
      { value: '100', suffix: '+', label: 'Startups Guided' },
      { value: '85', suffix: '%', label: 'Success Rate' },
      { value: '12', suffix: '+', label: 'Industries Covered' },
      { value: '50', suffix: 'Cr+', label: 'Funding Raised by Alumni' },
    ].map(s => `
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${parseInt(s.value)}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Ready to Accelerate Your Growth?</h2>
        <p>Book a 1-on-1 session with our founder to find the right program for your startup.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${icon('arrowRight', 16)}</a>
      </div>
    </section>
  `;
}

export function ConsultancyDetailPage({ slug }) {
  const program = consultancyPrograms.find(p => p.slug === slug);
  if (!program) return `<div class="page-hero"><div class="container"><h1>Program Not Found</h1></div></div>`;

  return `
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> Consultancy Program</div>
          <h1>${program.title}</h1>
          <p>${program.description}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${icon('arrowRight', 16)}</a>
            <a href="#/consultancy" class="btn btn-ghost">All Programs</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:var(--space-3xl)">
        <div>
          <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">What's Covered</span></div>
          <h2 class="section-headline animate-on-scroll">Program Deliverables</h2>
          <div style="margin-top:var(--space-lg)">
            ${program.deliverables.map((d, i) => `
              <div class="animate-on-scroll" style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);animation-delay:${i * 60}ms">
                <div style="color:var(--primary)">${icon('check', 20)}</div>
                <span style="font-size:15px">${d}</span>
              </div>
            `).join('')}
          </div>

          <div style="margin-top:var(--space-2xl)">
            <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">Outcomes</span></div>
            <h2 class="section-headline animate-on-scroll">Expected Results</h2>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-top:var(--space-lg)">
              ${program.outcomes.map((o, i) => `
                <div class="card animate-on-scroll" style="animation-delay:${i * 60}ms">
                  <div style="color:var(--primary);margin-bottom:8px">${icon('target', 20)}</div>
                  <span style="font-size:14px;font-weight:500">${o}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div>
          <div class="card animate-on-scroll" style="position:sticky;top:calc(var(--nav-height) + 24px)">
            <h3 style="font-size:18px;font-weight:600;margin-bottom:var(--space-lg)">Program Details</h3>
            <div style="margin-bottom:var(--space-md)">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:4px">Timeline</div>
              <div style="font-weight:600;display:flex;align-items:center;gap:8px">${icon('clock', 16)} ${program.timeline}</div>
            </div>
            <div style="margin-bottom:var(--space-md)">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:4px">Who It's For</div>
              <div style="font-size:14px;color:var(--text-dark);line-height:1.6">${program.forWhom}</div>
            </div>
            <div class="divider" style="margin:var(--space-lg) 0"></div>
            <a href="#/book-slot" class="btn btn-primary" style="width:100%">Book a Slot with Founder</a>
            <a href="#/consultancy" class="btn btn-secondary" style="width:100%;margin-top:var(--space-sm)">View All Programs</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
