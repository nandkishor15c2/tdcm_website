// Contact page
import { icon } from '../components/icons.js';

export function ContactPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <h1>Get in Touch</h1>
        <p>Ready to grow your business? Fill out the form and our team will reach out within 24 hours.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="contact-grid">
          <div id="contact-form-container">
            <form id="contact-form">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md)">
                <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" placeholder="Your name" required></div>
                <div class="form-group"><label class="form-label">Email *</label><input type="email" class="form-input" placeholder="you@company.com" required></div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md)">
                <div class="form-group"><label class="form-label">Company</label><input class="form-input" placeholder="Company name"></div>
                <div class="form-group"><label class="form-label">Phone</label><input class="form-input" placeholder="+91 98765 43210"></div>
              </div>
              <div class="form-group">
                <label class="form-label">Service Interest</label>
                <select class="form-input">
                  <option value="">Select a service...</option>
                  <option>Recruitment Services</option>
                  <option>Marketing Services</option>
                  <option>Business Solutions (CRM)</option>
                  <option>Go-To-Market Strategy</option>
                  <option>Product Launch</option>
                  <option>0 to 90 Plan</option>
                  <option>0 to 90 Training</option>
                  <option>Quarterly Health Analysis</option>
                  <option>Custom / Other</option>
                </select>
              </div>
              <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" placeholder="Tell us about your goals and how we can help..." rows="5"></textarea></div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Send Message ${icon('arrowRight', 16)}</button>
            </form>
          </div>

          <div>
            <h3 style="font-size:var(--text-h3);font-weight:var(--fw-semibold);margin-bottom:var(--space-xl)">Contact Information</h3>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icon('mail', 20)}</div>
              <div><div class="contact-info-label">Email</div><div class="contact-info-value">hello@tdcm.company</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icon('phone', 20)}</div>
              <div><div class="contact-info-label">Phone</div><div class="contact-info-value">+91 98765 43210</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icon('mapPin', 20)}</div>
              <div><div class="contact-info-label">Office</div><div class="contact-info-value">Mumbai, Maharashtra, India</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${icon('clock', 20)}</div>
              <div><div class="contact-info-label">Business Hours</div><div class="contact-info-value">Mon–Fri, 9:00 AM – 6:00 PM IST</div></div>
            </div>

            <div class="divider" style="margin:var(--space-xl) 0"></div>

            <h4 style="font-weight:var(--fw-semibold);margin-bottom:var(--space-md)">Quick Actions</h4>
            <a href="#" class="btn btn-secondary" style="width:100%;margin-bottom:var(--space-sm)">${icon('calendar', 16)} Schedule a Call</a>
            <a href="#" class="btn btn-secondary" style="width:100%;background:#25D366;color:white;border-color:#25D366">${icon('messageCircle', 16)} WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactPage() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('contact-form-container').innerHTML = `
        <div class="form-success">
          <div style="color:var(--success)">${icon('checkCircle', 56)}</div>
          <h3 style="margin-top:var(--space-md)">Message Sent Successfully!</h3>
          <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <a href="#/" class="btn btn-primary" style="margin-top:var(--space-lg)">Back to Home</a>
        </div>
      `;
        });
    }
}
