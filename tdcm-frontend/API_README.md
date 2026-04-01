# TDCM Booking Email API

## Overview
This API handles booking form submissions and sends email notifications to `tarun@tdcmcompany.com` using Resend.

## Setup Complete ✅

### Installed Packages:
- ✅ `resend` - Email service
- ✅ `express` - API server
- ✅ `cors` - Cross-origin requests

### Files Created:
- ✅ `api/server.js` - API server with email endpoint
- ✅ Updated `package.json` with API script
- ✅ Updated `BookSlot.js` to send data to API

## How to Run

### 1. Start the API Server (Port 3001)
```bash
npm run api
```

### 2. Start the Frontend (Port 5173)
```bash
npm run dev
```

## API Endpoint

### POST `/api/send-booking`

**URL:** `http://localhost:3001/api/send-booking`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "message": "Want to discuss business growth",
  "date": "Monday, 2 April 2026",
  "time": "2:00 PM"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Booking email sent successfully",
  "emailId": "abc123xyz"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Failed to send booking email",
  "details": "Error message"
}
```

## Email Template

The email sent to `tarun@tdcmcompany.com` includes:
- 👤 Client Name
- 📧 Email Address
- 📞 Phone Number
- 📅 Booking Date
- 🕐 Booking Time
- 💬 Discussion Topic (optional)
- 💰 Session Fee (₹5,000)
- ⚡ Next Steps checklist

## Testing

1. Go to: http://localhost:5173/#/book-slot
2. Select a date and time
3. Fill in contact details
4. Click "Confirm Booking"
5. Check email at: tarun@tdcmcompany.com

## Important Notes

- **Resend API Key:** `re_KS3GtjZM_8xgCMECsyhRrKswJaXc1K4bz`
- **Email From:** `TDCM Bookings <bookings@tdcmcompany.com>`
- **Email To:** `tarun@tdcmcompany.com`
- **Port:** API runs on `3001`, Frontend on `5173`

## Production Deployment

For production, you'll need to:
1. Deploy the API server (e.g., Vercel, Heroku, Railway)
2. Update the API URL in `BookSlot.js` from `http://localhost:3001` to your production URL
3. Consider using environment variables for the API key
4. Add rate limiting and validation

## Troubleshooting

**Issue:** API not connecting
- ✅ Check API server is running: `npm run api`
- ✅ Check port 3001 is not in use
- ✅ Check console for errors

**Issue:** Email not sending
- ✅ Verify Resend API key is valid
- ✅ Check Resend dashboard for logs
- ✅ Ensure `from` email domain is verified in Resend

**Issue:** CORS error
- ✅ API server has CORS enabled by default
- ✅ Frontend makes requests to `localhost:3001`
