// Services Overview + Service Detail pages
import { icon } from '../components/icons.js';
import { services } from '../data/services.js';
import { testimonials } from '../data/pricing.js';

export function ServicesPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Our Services</span></div>
        <h1>Solutions That Drive Growth</h1>
        <p>Three core pillars of business growth — find the right talent, reach the right audience, and optimize your operations.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="products-grid">
          ${services.map((s, i) => `
            <a href="#/services/${s.slug}" class="product-card ${s.isFeatured ? 'featured' : ''} animate-on-scroll" style="animation-delay:${i * 100}ms">
              <div class="pc-icon">${icon(s.icon, 24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div class="pc-features">
                ${s.features.slice(0, 4).map(f => `<div class="pc-feature">${icon('check', 16)} ${f.title}</div>`).join('')}
              </div>
              <span class="pc-cta">Learn more ${icon('arrowRight', 16)}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    <section class="cta-banner">
      <div class="container">
        <h2>Not Sure Which Service Is Right for You?</h2>
        <p>Book a 1-on-1 session with our founder and get clarity on your next move.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${icon('arrowRight', 16)}</a>
      </div>
    </section>
  `;
}

export function ServiceDetailPage({ slug }) {
  const service = services.find(s => s.slug === slug);
  if (!service) return `<div class="page-hero"><div class="container"><h1>Service Not Found</h1><p>The requested service doesn't exist.</p></div></div>`;

  const relatedTestimonials = testimonials.slice(0, 2);

  return `
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> ${service.title}</div>
          <h1>${service.heroHeadline}</h1>
          <p>${service.heroSubheadline}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${icon('arrowRight', 16)}</a>
            <a href="#/services" class="btn btn-ghost">Back to Services</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section-padding">
      <div class="container">
        <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">What's Included</span></div>
        <h2 class="section-headline animate-on-scroll">Features & Capabilities</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);margin-top:var(--space-xl)">
          ${service.features.map((f, i) => `
            <div class="card animate-on-scroll" style="animation-delay:${i * 60}ms">
              <div style="width:44px;height:44px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin-bottom:var(--space-md)">${icon('check', 20)}</div>
              <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">${f.title}</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.6">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Process</span></div>
          <h2 class="section-headline animate-on-scroll">How We Deliver</h2>
        </div>
        <div class="process-grid">
          ${service.process.map((s, i) => `
            <div class="process-step animate-on-scroll" style="animation-delay:${i * 100}ms">
              <div class="process-num">${s.num}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Metrics -->
    <section class="section-padding dark-section">
      <div class="container">
        <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
          ${service.metrics.map(m => `
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${parseFloat(m.value)}" data-suffix="${m.suffix}">${m.value}${m.suffix}</div>
              <div class="stat-label">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding">
      <div class="container">
        <h2 class="section-headline animate-on-scroll" style="text-align:center;margin-bottom:var(--space-xl)">What Clients Say</h2>
        <div class="testimonials-grid" style="grid-template-columns:repeat(2,1fr);max-width:900px;margin:0 auto">
          ${relatedTestimonials.map(t => `
            <div class="testimonial-card animate-on-scroll">
              <div class="tc-stars">${Array(t.rating).fill(icon('star', 16)).join('')}</div>
              <p class="tc-quote">"${t.quote}"</p>
              <div class="tc-author">
                <div class="tc-avatar">${t.initials}</div>
                <div><div class="tc-name">${t.name}</div><div class="tc-role">${t.role}, ${t.company}</div></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section class="section-padding light-section" id="inquiry-form">
      <div class="container" style="max-width:640px">
        <h2 class="section-headline animate-on-scroll" style="text-align:center">Get in Touch About ${service.title}</h2>
        <p class="section-subheadline animate-on-scroll" style="text-align:center;margin:0 auto var(--space-xl)">Fill out the form and our team will get back to you within 24 hours.</p>
        <div id="service-form-container">
          <form id="service-inquiry-form" class="animate-on-scroll">
            <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" placeholder="John Doe" required></div>
            <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="john@company.com" required></div>
            <div class="form-group"><label class="form-label">Company</label><input class="form-input" placeholder="Your company name"></div>
            <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" placeholder="Tell us about your needs..."></textarea></div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Submit Inquiry ${icon('arrowRight', 16)}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initServiceDetailPage() {
  const form = document.getElementById('service-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('service-form-container').innerHTML = `
        <div class="form-success">
          <div style="color:var(--success)">${icon('checkCircle', 48)}</div>
          <h3>Inquiry Submitted!</h3>
          <p>Thank you for your interest. Our team will reach out within 24 hours.</p>
          <a href="#/services" class="btn btn-secondary" style="margin-top:var(--space-lg)">Back to Services</a>
        </div>
      `;
    });
  }
}
