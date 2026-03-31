// ═══════════════════════════════════════════════════════════
// TDCM — Homepage
// ═══════════════════════════════════════════════════════════

import { icon } from '../components/icons.js';
import { services } from '../data/services.js';
import { articles } from '../data/articles.js';
import { testimonials, companyStats, trustedCompanies } from '../data/pricing.js';
import { communityPosts } from '../data/community.js';

export function HomePage() {
  return `
    <!-- Hero -->
    <section class="hero" style="padding-top:calc(var(--nav-height) + 60px);padding-bottom:80px;min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden">
      <!-- Subtle Background Graphics -->
      <div class="hero-bg-graphics">
        <svg class="hero-graphic hero-graphic-1" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L100 180 M20 100 L180 100" stroke="rgba(59, 145, 152, 0.12)" stroke-width="2"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(59, 145, 152, 0.1)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="90" stroke="rgba(59, 145, 152, 0.08)" stroke-width="1" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-2" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180 Q60 140 100 120 T180 40" stroke="rgba(59, 145, 152, 0.15)" stroke-width="2" fill="none"/>
          <circle cx="180" cy="40" r="8" fill="rgba(59, 145, 152, 0.2)"/>
          <path d="M165 35 L180 40 L170 55" stroke="rgba(59, 145, 152, 0.18)" stroke-width="2" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-3" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="100" width="20" height="30" fill="rgba(59, 145, 152, 0.12)"/>
          <rect x="50" y="80" width="20" height="50" fill="rgba(59, 145, 152, 0.15)"/>
          <rect x="80" y="60" width="20" height="70" fill="rgba(59, 145, 152, 0.18)"/>
          <rect x="110" y="30" width="20" height="100" fill="rgba(59, 145, 152, 0.22)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" stroke="rgba(59, 145, 152, 0.12)" stroke-width="1.5" fill="none"/>
          <circle cx="50" cy="50" r="5" fill="rgba(59, 145, 152, 0.15)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-5" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 L30 40 L50 55 L70 25 L90 45 L110 20" stroke="rgba(59, 145, 152, 0.15)" stroke-width="2" fill="none"/>
          <circle cx="110" cy="20" r="4" fill="rgba(168, 213, 186, 0.25)"/>
        </svg>
      </div>
      <div class="container">
        <div class="hero-content" style="text-align:center;display:flex;flex-direction:column;align-items:center">

          <!-- "Who are we?" with typewriter line -->
          <div class="hero-question" style="margin-top:var(--space-xl);margin-bottom:var(--space-lg)">
            <span style="display:inline-block;font-size:clamp(18px,2.5vw,24px);font-weight:400;color:var(--accent-light);letter-spacing:0.08em;text-transform:uppercase;opacity:0;animation:heroFadeIn .8s ease forwards .3s">Who are we?</span>
          </div>

          <!-- 360° with orbital ring -->
          <div class="hero-360-wrap" style="position:relative;display:inline-flex;align-items:center;justify-content:center;margin-bottom:var(--space-lg)">
            <div class="hero-orbit-ring" style="position:absolute;width:220px;height:220px;border-radius:50%;border:2px dashed rgba(168,213,186,.3);animation:orbitSpin 12s linear infinite"></div>
            <div class="hero-orbit-dot" style="position:absolute;width:220px;height:220px;animation:orbitSpin 12s linear infinite">
              <span style="position:absolute;top:-6px;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 20px var(--accent),0 0 40px rgba(168,213,186,.3)"></span>
            </div>
            <span class="hero-360" style="font-size:clamp(100px,18vw,180px);font-weight:800;line-height:1;color:var(--white);letter-spacing:-0.02em;opacity:0;animation:heroScaleIn .6s cubic-bezier(.16,1,.3,1) forwards .5s;text-shadow:0 0 60px rgba(168,213,186,.15)">360°</span>
          </div>

          <!-- "Business Building Brand" with staggered reveal -->
          <div style="overflow:hidden">
            <h1 style="font-size:clamp(32px,5vw,60px);font-weight:700;line-height:1.15;margin:0;letter-spacing:-0.02em">
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards .8s">Business</span>
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards .95s;color:var(--accent)"> Building</span>
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards 1.1s"> Brand</span>
            </h1>
          </div>

          <!-- Tagline -->
          <p style="font-size:clamp(18px,2.5vw,24px);color:var(--white);max-width:650px;margin-top:var(--space-2xl);opacity:0;animation:heroFadeIn .8s ease forwards 1.3s">
            We help companies launch, grow, and scale with the right strategy, people, and systems.
          </p>

          <!-- Decorative accent line -->
          <div style="width:60px;height:3px;background:linear-gradient(90deg,var(--accent),var(--primary-mid));border-radius:3px;margin-top:var(--space-lg);opacity:0;animation:heroFadeIn .8s ease forwards 1.4s"></div>

        </div>
      </div>
    </section>

    <!-- Who We Are Section (from grow-with-tdcm) -->
    <section class="who-we-are-section" id="who-we-are">
      <div class="wwa-bg-grid"></div>
      <div class="wwa-glow"></div>
      
      <div class="wwa-content">
        <!-- Eyebrow -->
        <div class="wwa-eyebrow animate-on-scroll">
          <span class="wwa-eyebrow-line"></span>
          <span class="wwa-eyebrow-text">Who We Are</span>
          <span class="wwa-eyebrow-line"></span>
        </div>
        
        <!-- Headline -->
        <h2 class="wwa-headline animate-on-scroll">We give your business</h2>
        
        <!-- Rotating words -->
        <div class="wwa-rotating-wrap" style="min-height:80px">
          <div class="wwa-rotating-text" id="wwa-rotating-text">the right people.</div>
        </div>
        
        <!-- Subtitle -->
        <p class="wwa-subtitle animate-on-scroll">Consulting that covers hiring, marketing, automation, and growth — so you can focus on running your business.</p>
        
        <!-- CTA -->
        <a href="#/book-slot" class="btn btn-primary btn-lg wwa-cta animate-on-scroll">
          Book a Free Consultation
          ${icon('arrowRight', 18)}
        </a>
      </div>
    </section>

    <!-- Year 1 Milestones Section -->
    <div id="milestones-placeholder"></div>

    <!-- About the Founder Section -->
    <div id="founder-placeholder"></div>

    <!-- Products / Services Overview -->
    <section class="section-padding" style="position:relative;overflow:hidden">
      <!-- Background Graphics -->
      <div class="section-bg-graphic section-bg-graphic-1">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="rgba(59, 145, 152, 0.1)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(59, 145, 152, 0.12)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="40" stroke="rgba(59, 145, 152, 0.15)" stroke-width="1" fill="none"/>
        </svg>
      </div>
      <div class="container">
        <div class="section-eyebrow animate-on-scroll">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">What We Do</span>
        </div>
        <h2 class="section-headline animate-on-scroll">Everything You Need to Scale</h2>
        <p class="section-subheadline animate-on-scroll" style="margin-bottom:var(--space-2xl)">Three core pillars of growth — hire the right people, reach the right audience, and run your operations like clockwork.</p>
        <div class="products-grid">
          ${services.map((s, i) => `
            <a href="#/services/${s.slug}" class="product-card ${s.isFeatured ? 'featured' : ''} animate-on-scroll" style="animation-delay:${i * 100}ms">
              <div class="pc-icon">${icon(s.icon, 24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div class="pc-features">
                ${s.features.slice(0, 3).map(f => `
                  <div class="pc-feature">${icon('check', 16)} ${f.title}</div>
                `).join('')}
              </div>
              <span class="pc-cta">Learn more ${icon('arrowRight', 16)}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center">
            <div class="eyebrow-line"></div>
            <span class="eyebrow-text">Our Process</span>
          </div>
          <h2 class="section-headline animate-on-scroll">How We Work With You</h2>
          <p class="section-subheadline animate-on-scroll" style="margin:0 auto">A proven, repeatable process that delivers results every time.</p>
        </div>
        <div class="process-grid">
          ${[
      { icon: 'search', title: 'Discovery', desc: 'We learn your business, goals, and challenges through deep-dive workshops.' },
      { icon: 'target', title: 'Strategy', desc: 'Custom strategy tailored to your specific objectives and market.' },
      { icon: 'zap', title: 'Execution', desc: 'Our expert team implements with precision, speed, and transparency.' },
      { icon: 'trendingUp', title: 'Optimization', desc: 'Continuous data-driven optimization to maximize results.' },
    ].map((s, i) => `
            <div class="process-step animate-on-scroll" style="animation-delay:${i * 100}ms">
              <div class="process-num" style="font-size:0">${icon(s.icon, 28)}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Articles Teaser -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:var(--space-xl);flex-wrap:wrap;gap:16px">
          <div>
            <div class="section-eyebrow">
              <div class="eyebrow-line"></div>
              <span class="eyebrow-text">Latest Articles</span>
            </div>
            <h2 class="section-headline">Insights & Resources</h2>
          </div>
          <a href="#/articles" class="btn btn-secondary">View All ${icon('arrowRight', 16)}</a>
        </div>
        <div class="articles-grid">
          ${articles.slice(0, 3).map(a => `
            <a href="#/articles/${a.slug}" class="article-card animate-on-scroll">
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

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <h2 class="animate-on-scroll">Book a Strategy Session with Our Founder</h2>
        <p class="animate-on-scroll">Get personalized advice for your business. 60-minute 1-on-1 session with the founder.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg animate-on-scroll" style="position:relative">Book a Slot ${icon('arrowRight', 16)}</a>
      </div>
    </section>
  `;
}

// Initialize tabs and slider after page render
export function initHomePage() {
  // Who We Are rotating words
  const words = [
    'the right people.',
    'smarter systems.',
    'AI that works.',
    'a clear strategy.',
  ];
  let currentWord = 0;
  const rotatingText = document.getElementById('wwa-rotating-text');

  if (rotatingText) {
    setInterval(() => {
      currentWord = (currentWord + 1) % words.length;
      rotatingText.style.animation = 'none';
      rotatingText.offsetHeight; // trigger reflow
      rotatingText.textContent = words[currentWord];
      rotatingText.style.animation = 'wwaRotate 0.4s ease-out';
    }, 2400);
  }
}
