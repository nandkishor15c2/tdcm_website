// Pricing page
import { icon } from '../components/icons.js';
import { pricingPlans, faqs } from '../data/pricing.js';

export function PricingPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Pricing</span></div>
        <h1>Simple, Transparent Pricing</h1>
        <p>Start free and scale as you grow. No hidden fees, no surprises.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="billing-toggle">
          <span class="billing-label active" data-billing="monthly">Monthly</span>
          <div class="toggle-switch" id="billing-toggle"></div>
          <span class="billing-label" data-billing="annual">Annual <span class="tag" style="font-size:11px;padding:2px 8px;margin-left:4px;background:var(--success);color:var(--white);border-color:var(--success)">Save 20%</span></span>
        </div>

        <div class="pricing-grid">
          ${pricingPlans.map(plan => `
            <div class="pricing-card ${plan.isPopular ? 'popular' : ''} animate-on-scroll">
              ${plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''}
              <h3 class="pricing-name">${plan.name}</h3>
              <p class="pricing-desc">${plan.description}</p>
              <div class="pricing-amount" data-monthly="${plan.monthlyPrice}" data-annual="${plan.annualPrice}" data-currency="${plan.currency}">
                ${plan.monthlyPrice === 0 ? 'Free' : `${plan.currency}${plan.monthlyPrice.toLocaleString()}`}
                ${plan.monthlyPrice > 0 ? '<span>/mo</span>' : ''}
              </div>
              ${plan.monthlyPrice > 0 ? `<div class="pricing-period">per user, billed monthly</div>` : '<div class="pricing-period">No credit card required</div>'}
              <div class="pricing-features">
                ${plan.features.map(f => `
                  <div class="pricing-feature ${f.included ? 'included' : 'excluded'}">
                    ${f.included ? icon('check', 18) : icon('x', 18)}
                    <span>${f.text}</span>
                  </div>
                `).join('')}
              </div>
              <a href="${plan.ctaHref}" class="btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}" style="width:100%">${plan.ctaText}</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding light-section">
      <div class="container">
        <h2 class="section-headline animate-on-scroll" style="text-align:center;margin-bottom:var(--space-2xl)">Frequently Asked Questions</h2>
        <div class="faq-list">
          ${faqs.map(f => `
            <div class="faq-item">
              <button class="faq-question">${f.q} ${icon('chevronDown', 20)}</button>
              <div class="faq-answer"><p>${f.a}</p></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Need a Custom Enterprise Plan?</h2>
        <p>Book a session with our founder to discuss a plan tailored to your organization.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${icon('arrowRight', 16)}</a>
      </div>
    </section>
  `;
}

export function initPricingPage() {
  // Billing toggle
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  let isAnnual = false;

  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggle.classList.toggle('on', isAnnual);

    document.querySelectorAll('.billing-label').forEach(l => {
      l.classList.toggle('active', l.dataset.billing === (isAnnual ? 'annual' : 'monthly'));
    });

    document.querySelectorAll('.pricing-amount').forEach(el => {
      const monthly = parseInt(el.dataset.monthly);
      const annual = parseInt(el.dataset.annual);
      const currency = el.dataset.currency;
      const price = isAnnual ? annual : monthly;
      const period = isAnnual ? '/mo' : '/mo';
      el.innerHTML = price === 0 ? 'Free' : `${currency}${price.toLocaleString()}<span>${period}</span>`;
    });

    document.querySelectorAll('.pricing-period').forEach((el, i) => {
      if (pricingPlans[i].monthlyPrice > 0) {
        el.textContent = isAnnual ? 'per user, billed annually' : 'per user, billed monthly';
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}
