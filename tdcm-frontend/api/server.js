import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const PORT = 3001;

// Initialize Resend with API key
const resend = new Resend('re_KS3GtjZM_8xgCMECsyhRrKswJaXc1K4bz');

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TDCM API is running' });
});

// Booking email endpoint
app.post('/api/send-booking', async (req, res) => {
  try {
    const { name, email, phone, message, date, time } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'date', 'time']
      });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'TDCM Bookings <bookings@tdcmcompany.com>',
      to: 'tarun@tdcmcompany.com',
      subject: `New Booking: ${name} - ${date} at ${time}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2B7A7F 0%, #1A4A4F 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #2B7A7F; }
            .label { font-weight: bold; color: #2B7A7F; margin-bottom: 5px; }
            .value { color: #333; font-size: 16px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎉 New Session Booking</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">TDCM Founder Meeting</p>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">👤 Client Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="info-row">
                <div class="label">📧 Email Address</div>
                <div class="value">${email}</div>
              </div>

              <div class="info-row">
                <div class="label">📞 Phone Number</div>
                <div class="value">${phone}</div>
              </div>

              <div class="info-row">
                <div class="label">📅 Booking Date</div>
                <div class="value">${date}</div>
              </div>

              <div class="info-row">
                <div class="label">🕐 Booking Time</div>
                <div class="value">${time}</div>
              </div>

              ${message ? `
              <div class="info-row">
                <div class="label">💬 Discussion Topic</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}

              <div class="info-row" style="background: #e8f5e9; border-left-color: #4caf50;">
                <div class="label">💰 Session Fee</div>
                <div class="value">₹5,000</div>
              </div>

              <div style="margin-top: 25px; padding: 20px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #ffc107;">
                <strong>⚡ Next Steps:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Confirm the booking with the client</li>
                  <li>Send Google Meet/Zoom link to: <strong>${email}</strong></li>
                  <li>Add to calendar: ${date} at ${time}</li>
                </ul>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from TDCM Booking System</p>
              <p>© ${new Date().getFullYear()} TDCM Company. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', data);

    res.json({
      success: true,
      message: 'Booking email sent successfully',
      emailId: data.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send booking email',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TDCM API Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service: Ready`);
});
