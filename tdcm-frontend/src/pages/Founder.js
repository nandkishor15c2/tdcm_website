// ═══════════════════════════════════════════════════════════
// TDCM — About the Founder Section
// ═══════════════════════════════════════════════════════════

export function FounderPage() {
  return `
    <section class="founder-section" id="founder">
      <!-- Background Image (Desktop) -->
      <div class="founder-bg founder-bg-desktop">
        <img src="/founder-bg.jpg" alt="TDCM Team" class="founder-bg-img">
      </div>

      <!-- Gradient Overlay (Right 35%) -->
      <div class="founder-overlay"></div>

      <!-- Content Container -->
      <div class="founder-container">
        <!-- Mobile Image (Shows first on mobile) -->
        <div class="founder-image-mobile">
          <img src="/founder-bg.jpg" alt="Tarun Dadlani - Founder of TDCM" class="founder-mobile-img">
        </div>

        <!-- Right - Bio Content -->
        <div class="founder-content">
          <div class="section-eyebrow">
            <div class="eyebrow-line"></div>
            <span class="eyebrow-text">About the Founder</span>
            <div class="eyebrow-line"></div>
          </div>

          <h2 class="founder-headline">The Force Behind TDCM</h2>

          <div class="founder-bio">
            <p>
              Tarun Dadlani is the force behind TDCM — a business consulting and solutions company built to bring structure, speed, and scale to growing businesses.
            </p>
            <p>
              With deep experience across sales, operations, and growth strategy, he has helped organizations unlock revenue, build scalable systems, and create high-performance teams.
            </p>
            <p>
              Tarun is known for being hands-on, result-oriented, and deeply involved in solving real business problems.
            </p>
            <p class="founder-quote">
              He doesn't sell advice. He builds outcomes.
            </p>

            <div class="founder-signature">
              <p class="founder-name-inline">Tarun Dadlani</p>
              <p class="founder-designation-inline">Founder, TDCM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
