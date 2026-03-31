// About page
import { icon } from '../components/icons.js';
import { teamMembers, companyStats } from '../data/pricing.js';

export function AboutPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>About TDCM Company</h1>
        <p>The Digital Consultancy & Management — helping businesses dream bold, plan smart, hustle hard, and celebrate achievements.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3xl);align-items:center">
        <div class="animate-on-scroll">
          <div class="section-eyebrow"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Story</span></div>
          <h2 class="section-headline">Built by Operators, for Operators</h2>
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--space-lg)">TDCM was born from a simple observation: startups and growing businesses need more than just advice — they need partners who've been in the trenches. Our founding team has collectively built 5 companies, hired 2000+ people, and managed over ₹100Cr in marketing spend.</p>
          <p style="color:var(--text-muted);line-height:1.8">We combine deep operational expertise with modern technology to deliver recruitment, marketing, and business solutions that move the needle. Our approach is simple: understand your business like it's our own, then execute with precision.</p>
        </div>
        <div class="animate-on-scroll" style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-lg);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.15)">${icon('globe', 100)}</div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Values</span></div>
          <h2 class="section-headline animate-on-scroll">What Drives Us</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-lg)">
          ${[
      { icon: 'target', title: 'Dream Bold', desc: 'We set ambitious goals and help our clients do the same.' },
      { icon: 'shield', title: 'Plan Smart', desc: 'Data-driven strategies with clear timelines and milestones.' },
      { icon: 'zap', title: 'Hustle Hard', desc: 'We execute with urgency, precision, and relentless dedication.' },
      { icon: 'award', title: 'Celebrate Wins', desc: 'Every milestone matters. We track, measure, and celebrate success.' },
    ].map((v, i) => `
            <div class="card animate-on-scroll" style="text-align:center;animation-delay:${i * 80}ms">
              <div style="width:52px;height:52px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin:0 auto var(--space-md)">${icon(v.icon, 24)}</div>
              <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">${v.title}</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.5">${v.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding dark-section">
      <div class="container">
        <div class="stats-grid">
          ${companyStats.map(s => `
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Want to Work With Us?</h2>
        <p>Book a 1-on-1 session with our founder to explore how TDCM can help your business.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${icon('arrowRight', 16)}</a>
      </div>
    </section>
  `;
}
