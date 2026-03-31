// ═══════════════════════════════════════════════════════════
// TDCM — Year 1 Milestones (Pinned Scroll Card Stack)
// ═══════════════════════════════════════════════════════════

import { icon } from '../components/icons.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    id: 1,
    number: '10+',
    suffix: 'Cr',
    label: 'Client Revenue Generation',
    icon: 'trendingUp',
  },
  {
    id: 2,
    number: '70+',
    suffix: '',
    label: 'Job Placements',
    icon: 'users',
  },
  {
    id: 3,
    number: '5+',
    suffix: '',
    label: 'Different Industry Contribution',
    icon: 'layers',
  },
];

export function MilestonesPage() {
  return `
    <section class="milestones-section" id="milestones">
      <div class="ms-container">
        <!-- Section Header -->
        <div class="ms-header">
          <div class="section-eyebrow">
            <div class="eyebrow-line"></div>
            <span class="eyebrow-text">Year 1 Milestone</span>
            <div class="eyebrow-line"></div>
          </div>
          <h2 class="section-headline">Our Impact in Numbers</h2>
          <p class="ms-subtitle">A snapshot of what we've accomplished in our first year</p>
        </div>

        <!-- Card Stack Container -->
        <div class="ms-card-stack-wrapper">
          <div class="ms-card-stack" id="ms-card-stack">
            ${milestones.map((m, i) => `
              <div class="ms-card" data-index="${i}" data-state="${i === 0 ? 'active' : 'hidden'}">
                <div class="ms-card-inner">
                  <div class="ms-card-icon">${icon(m.icon, 40)}</div>
                  <div class="ms-card-number">${m.number}<span class="ms-card-suffix">${m.suffix}</span></div>
                  <div class="ms-card-label">${m.label}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="ms-dots">
          ${milestones.map((_, i) => `
            <button class="ms-dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></button>
          `).join('')}
        </div>

        <!-- Progress indicator -->
        <div class="ms-progress">
          <span id="ms-current">1</span> / <span id="ms-total">${milestones.length}</span>
        </div>
      </div>
    </section>
  `;
}

export function initMilestones() {
  const section = document.getElementById('milestones');
  const cards = document.querySelectorAll('.ms-card');
  const dots = document.querySelectorAll('.ms-dot');
  const progressCurrent = document.getElementById('ms-current');
  
  if (!section || cards.length === 0) return;

  let currentIndex = 0;
  const totalCards = cards.length;

  function showCard(index) {
    if (index === currentIndex) return;
    
    // Update all cards using data-state
    cards.forEach((card, i) => {
      if (i === index) {
        card.dataset.state = 'active';
      } else {
        card.dataset.state = 'hidden';
      }
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Update progress
    if (progressCurrent) {
      progressCurrent.textContent = index + 1;
    }

    currentIndex = index;
  }

  // Create ScrollTrigger for pinned section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: `+=${totalCards * 100}%`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Calculate which card to show based on progress
        const progress = self.progress;
        const cardIndex = Math.min(Math.floor(progress * totalCards), totalCards - 1);
        
        if (cardIndex !== currentIndex) {
          showCard(cardIndex);
        }
      },
    },
  });

  // Add timeline markers for each card
  for (let i = 0; i < totalCards; i++) {
    tl.to({}, { duration: 1 }, i);
  }
}
