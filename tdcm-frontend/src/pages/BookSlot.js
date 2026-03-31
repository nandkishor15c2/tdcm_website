// ═══════════════════════════════════════════════════════════
// TDCM — Book a Slot with Founder
// 3-Step Flow: Select Slot → Payment → Confirmation
// ═══════════════════════════════════════════════════════════

import { icon } from '../components/icons.js';

// Mock available slots for the next 7 days
function generateSlots() {
  const slots = [];
  const today = new Date();
  for (let d = 1; d <= 7; d++) {
    const date = new Date(today);
    date.setDate(today.getDate() + d);
    const dayName = date.toLocaleDateString('en-IN', { weekday: 'short' });
    const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    const fullDate = date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const times = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
    // Randomly mark some as booked
    const available = times.filter(() => Math.random() > 0.3);
    slots.push({ day: dayName, date: dateStr, fullDate, times: available, raw: date });
  }
  return slots;
}

export function BookSlotPage() {
  const slots = generateSlots();

  return `
    <section class="page-hero" style="padding-bottom:var(--space-xl)">
      <div class="container">
        <div class="section-eyebrow animate-on-scroll" style="justify-content:center">
          <div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div>
          <span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Book a Session</span>
        </div>
        <h1>Meet the Founder</h1>
        <p>Book a 1-on-1 strategy session with our founder. Get personalized advice for your business growth.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="max-width:800px">

        <!-- Progress Steps -->
        <div class="booking-progress" id="booking-progress">
          <div class="bp-step active" data-step="1">
            <div class="bp-circle">1</div>
            <span>Select Slot</span>
          </div>
          <div class="bp-line"></div>
          <div class="bp-step" data-step="2">
            <div class="bp-circle">2</div>
            <span>Payment</span>
          </div>
          <div class="bp-line"></div>
          <div class="bp-step" data-step="3">
            <div class="bp-circle">3</div>
            <span>Confirmed</span>
          </div>
        </div>

        <!-- STEP 1: Select Slot -->
        <div class="booking-step" id="step-1">
          <div class="booking-card">
            <div class="booking-card-header">
              <div>
                <h2 style="font-size:var(--text-h3);margin-bottom:4px">Choose a Date & Time</h2>
                <p style="color:var(--text-muted);font-size:var(--text-sm)">Select an available slot that works for you</p>
              </div>
              <div class="booking-fee-badge">
                ${icon('briefcase', 18)}
                <span>₹5,000</span>
              </div>
            </div>

            <!-- Date Selector -->
            <div class="slot-dates" id="slot-dates">
              ${slots.map((s, i) => `
                <button class="slot-date-btn ${i === 0 ? 'active' : ''}" data-idx="${i}">
                  <span class="slot-day">${s.day}</span>
                  <span class="slot-date">${s.date}</span>
                </button>
              `).join('')}
            </div>

            <!-- Time Grid -->
            <div id="slot-times-wrap">
              ${slots.map((s, i) => `
                <div class="slot-times ${i === 0 ? 'active' : ''}" data-day="${i}">
                  <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--space-md)">${s.fullDate}</p>
                  ${s.times.length > 0 ? `
                    <div class="slot-time-grid">
                      ${s.times.map(t => `
                        <button class="slot-time-btn" data-time="${t}" data-full-date="${s.fullDate}">
                          ${icon('clock', 16)} ${t}
                        </button>
                      `).join('')}
                    </div>
                  ` : `
                    <div style="text-align:center;padding:var(--space-xl);color:var(--text-muted)">
                      ${icon('calendar', 24)}
                      <p style="margin-top:var(--space-sm)">No slots available on this day</p>
                    </div>
                  `}
                </div>
              `).join('')}
            </div>

            <!-- Session Details -->
            <div class="session-info">
              <div class="session-info-item">${icon('clock', 16)} <span>60 minute session</span></div>
              <div class="session-info-item">${icon('video', 16)} <span>Google Meet / Zoom</span></div>
              <div class="session-info-item">${icon('user', 16)} <span>1-on-1 with Founder</span></div>
            </div>

            <button class="btn btn-primary btn-lg" id="btn-to-payment" style="width:100%" disabled>
              Continue to Payment ${icon('arrowRight', 16)}
            </button>
          </div>
        </div>

        <!-- STEP 2: Payment -->
        <div class="booking-step" id="step-2" style="display:none">
          <div class="booking-card">
            <div class="booking-card-header">
              <div>
                <h2 style="font-size:var(--text-h3);margin-bottom:4px">Payment Details</h2>
                <p style="color:var(--text-muted);font-size:var(--text-sm)">Complete payment to confirm your session</p>
              </div>
            </div>

            <!-- Booking Summary -->
            <div class="payment-summary">
              <h3 style="font-size:var(--text-body);font-weight:600;margin-bottom:var(--space-md)">Booking Summary</h3>
              <div class="ps-row">
                <span>Date</span>
                <span id="pay-date" style="font-weight:600">—</span>
              </div>
              <div class="ps-row">
                <span>Time</span>
                <span id="pay-time" style="font-weight:600">—</span>
              </div>
              <div class="ps-row">
                <span>Duration</span>
                <span>60 minutes</span>
              </div>
              <div class="ps-row">
                <span>Mode</span>
                <span>Video Call</span>
              </div>
              <div class="ps-divider"></div>
              <div class="ps-row ps-total">
                <span>Session Fee</span>
                <span>₹5,000</span>
              </div>
            </div>

            <!-- Payment Form -->
            <form id="payment-form" style="margin-top:var(--space-xl)">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" class="form-input" placeholder="Your full name" required>
              </div>
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" class="form-input" placeholder="you@company.com" required>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number *</label>
                <input type="tel" class="form-input" placeholder="+91 98765 43210" required>
              </div>
              <div class="form-group">
                <label class="form-label">What would you like to discuss?</label>
                <textarea class="form-input" rows="3" placeholder="Brief description of your business challenge..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">
                Pay ₹5,000 & Confirm ${icon('arrowRight', 16)}
              </button>
              <button type="button" class="btn btn-secondary" id="btn-back-to-slots" style="width:100%;margin-top:var(--space-sm)">
                ${icon('arrowRight', 16)} Back to Slot Selection
              </button>
            </form>
          </div>
        </div>

        <!-- STEP 3: Confirmation -->
        <div class="booking-step" id="step-3" style="display:none">
          <div class="booking-card" style="text-align:center;padding:var(--space-3xl) var(--space-xl)">
            <div class="confirm-check">
              ${icon('check', 36)}
            </div>
            <h2 style="font-size:var(--text-h2);margin-top:var(--space-lg);margin-bottom:var(--space-sm)">Booking Confirmed!</h2>
            <p style="color:var(--text-muted);font-size:var(--text-body-lg);max-width:420px;margin:0 auto var(--space-xl)">Your session with the founder has been booked. A calendar invite and meeting link will be sent to your email.</p>

            <div class="confirm-details">
              <div class="cd-row">${icon('calendar', 18)} <span id="conf-date">—</span></div>
              <div class="cd-row">${icon('clock', 18)} <span id="conf-time">—</span></div>
              <div class="cd-row">${icon('video', 18)} <span>Google Meet link will be emailed</span></div>
              <div class="cd-row">${icon('briefcase', 18)} <span>₹5,000 paid</span></div>
            </div>

            <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-xl);flex-wrap:wrap">
              <a href="#/" class="btn btn-primary">Back to Home ${icon('arrowRight', 16)}</a>
              <a href="#/services" class="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initBookSlotPage() {
  let selectedDate = '';
  let selectedTime = '';

  // Date selection
  document.querySelectorAll('.slot-date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.slot-date-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = btn.dataset.idx;
      document.querySelectorAll('.slot-times').forEach(s => s.classList.remove('active'));
      document.querySelector(`.slot-times[data-day="${idx}"]`)?.classList.add('active');
      // Reset time selection
      document.querySelectorAll('.slot-time-btn').forEach(b => b.classList.remove('active'));
      selectedTime = '';
      document.getElementById('btn-to-payment').disabled = true;
    });
  });

  // Time selection
  document.querySelectorAll('.slot-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.slot-time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDate = btn.dataset.fullDate;
      selectedTime = btn.dataset.time;
      document.getElementById('btn-to-payment').disabled = false;
    });
  });

  // Go to step 2
  document.getElementById('btn-to-payment')?.addEventListener('click', () => {
    if (!selectedTime) return;
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
    document.getElementById('pay-date').textContent = selectedDate;
    document.getElementById('pay-time').textContent = selectedTime;
    // Update progress
    document.querySelectorAll('.bp-step').forEach(s => s.classList.remove('active'));
    document.querySelector('.bp-step[data-step="2"]').classList.add('active');
    document.querySelector('.bp-step[data-step="1"]').classList.add('completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Back to step 1
  document.getElementById('btn-back-to-slots')?.addEventListener('click', () => {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
    document.querySelectorAll('.bp-step').forEach(s => s.classList.remove('active', 'completed'));
    document.querySelector('.bp-step[data-step="1"]').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Payment submit → step 3
  document.getElementById('payment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
    document.getElementById('conf-date').textContent = selectedDate;
    document.getElementById('conf-time').textContent = selectedTime;
    // Update progress
    document.querySelectorAll('.bp-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.bp-step').forEach(s => s.classList.add('completed'));
    document.querySelector('.bp-step[data-step="3"]').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
