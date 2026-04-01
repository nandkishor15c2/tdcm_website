// ═══════════════════════════════════════════════════════════
// TDCM — Book a Slot with Founder
// Single Page Flow: Select Slot + Contact Details → Confirmation
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
      <div class="container" style="max-width:900px">

        <!-- BOOKING FORM -->
        <div class="booking-single-page" id="booking-form">
          <div class="booking-card">

            <!-- Slot Selection Section -->
            <div class="booking-section">
              <div class="booking-section-header">
                <h2 style="font-size:var(--text-h3);margin-bottom:4px">Select Date & Time</h2>
                <p style="color:var(--text-muted);font-size:var(--text-sm)">Choose an available slot that works for you</p>
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
                <div class="session-info-item">${icon('briefcase', 16)} <span>₹5,000 fee</span></div>
              </div>
            </div>

            <div class="booking-divider"></div>

            <!-- Contact Details Section -->
            <div class="booking-section">
              <div class="booking-section-header">
                <h2 style="font-size:var(--text-h3);margin-bottom:4px">Your Contact Details</h2>
                <p style="color:var(--text-muted);font-size:var(--text-sm)">We'll send the meeting link to your email</p>
              </div>

              <form id="booking-form-submit">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" class="form-input" id="booking-name" placeholder="Your full name" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address *</label>
                  <input type="email" class="form-input" id="booking-email" placeholder="you@company.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number *</label>
                  <input type="tel" class="form-input" id="booking-phone" placeholder="+91 98765 43210" required>
                </div>
                <div class="form-group">
                  <label class="form-label">What would you like to discuss? (Optional)</label>
                  <textarea class="form-input" id="booking-message" rows="3" placeholder="Brief description of your business challenge..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" id="btn-confirm-booking" style="width:100%" disabled>
                  Confirm Booking ${icon('arrowRight', 16)}
                </button>
                <p style="text-align:center;margin-top:var(--space-sm);font-size:var(--text-sm);color:var(--text-muted)">
                  Please select a time slot above to continue
                </p>
              </form>
            </div>

          </div>
        </div>

        <!-- CONFIRMATION MESSAGE -->
        <div class="booking-confirmation" id="booking-confirmation" style="display:none">
          <div class="booking-card" style="text-align:center;padding:var(--space-3xl) var(--space-xl)">
            <div class="confirm-check">
              ${icon('check', 36)}
            </div>
            <h2 style="font-size:var(--text-h2);margin-top:var(--space-lg);margin-bottom:var(--space-sm)">Booking Confirmed!</h2>
            <p style="color:var(--text-muted);font-size:var(--text-body-lg);max-width:420px;margin:0 auto var(--space-xl)">Your session with the founder has been booked. A calendar invite and meeting link will be sent to your email.</p>

            <div class="confirm-details">
              <div class="cd-row">${icon('user', 18)} <span id="conf-name">—</span></div>
              <div class="cd-row">${icon('mail', 18)} <span id="conf-email">—</span></div>
              <div class="cd-row">${icon('calendar', 18)} <span id="conf-date">—</span></div>
              <div class="cd-row">${icon('clock', 18)} <span id="conf-time">—</span></div>
              <div class="cd-row">${icon('video', 18)} <span>Google Meet link will be emailed</span></div>
              <div class="cd-row">${icon('briefcase', 18)} <span>₹5,000 session fee</span></div>
            </div>

            <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-xl);flex-wrap:wrap">
              <a href="#/" class="btn btn-primary">Back to Home ${icon('arrowRight', 16)}</a>
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

  const updateButtonState = () => {
    const btn = document.getElementById('btn-confirm-booking');
    const helpText = btn?.nextElementSibling;
    if (selectedTime) {
      btn.disabled = false;
      if (helpText) helpText.textContent = `Selected: ${selectedDate} at ${selectedTime}`;
    } else {
      btn.disabled = true;
      if (helpText) helpText.textContent = 'Please select a time slot above to continue';
    }
  };

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
      updateButtonState();
    });
  });

  // Time selection
  document.querySelectorAll('.slot-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.slot-time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDate = btn.dataset.fullDate;
      selectedTime = btn.dataset.time;
      updateButtonState();
      // Smooth scroll to contact form
      document.querySelector('.booking-section:last-of-type')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  // Form submission
  document.getElementById('booking-form-submit')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!selectedTime) return;

    const btn = document.getElementById('btn-confirm-booking');
    const originalText = btn.innerHTML;

    // Disable button and show loading state
    btn.disabled = true;
    btn.innerHTML = 'Sending... ⏳';

    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const phone = document.getElementById('booking-phone').value;
    const message = document.getElementById('booking-message').value;

    try {
      // Send booking data to API
      const response = await fetch('http://localhost:3001/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          date: selectedDate,
          time: selectedTime
        })
      });

      const data = await response.json();

      if (data.success) {
        // Hide form, show confirmation
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('booking-confirmation').style.display = 'block';

        // Update confirmation details
        document.getElementById('conf-name').textContent = name;
        document.getElementById('conf-email').textContent = email;
        document.getElementById('conf-date').textContent = selectedDate;
        document.getElementById('conf-time').textContent = selectedTime;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.error || 'Failed to send booking');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('⚠️ There was an error submitting your booking. Please try again or contact us directly.');
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  });
}
