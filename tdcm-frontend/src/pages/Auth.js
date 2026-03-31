// Auth pages — Signup, Login, Forgot Password
import { icon } from '../components/icons.js';

export function SignupPage() {
    return `
    <div class="auth-page">
      <div class="auth-card">
        <div style="text-align:center;margin-bottom:var(--space-lg)">
          <a href="#/" class="nav-logo" style="justify-content:center;margin-bottom:var(--space-lg)">
            <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#1A4A4F"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial" font-weight="700" font-size="12" fill="#FFF">TCM</text></svg>
          </a>
        </div>
        <h1>Create Your Account</h1>
        <p class="auth-sub">Join the TDCM community and get access to tools, resources, and connections.</p>

        <button class="oauth-btn">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Continue with Google
        </button>

        <div class="auth-divider">or sign up with email</div>

        <form id="signup-form">
          <div class="form-group"><label class="form-label">Display Name</label><input class="form-input" placeholder="Your name" required></div>
          <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="you@email.com" required></div>
          <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-input" placeholder="Min. 8 characters" required></div>
          <button type="submit" class="btn btn-primary" style="width:100%">Create Account</button>
        </form>

        <div class="auth-footer">Already have an account? <a href="#/login">Sign In</a></div>
      </div>
    </div>
  `;
}

export function LoginPage() {
    return `
    <div class="auth-page">
      <div class="auth-card">
        <div style="text-align:center;margin-bottom:var(--space-lg)">
          <a href="#/" class="nav-logo" style="justify-content:center;margin-bottom:var(--space-lg)">
            <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#1A4A4F"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial" font-weight="700" font-size="12" fill="#FFF">TCM</text></svg>
          </a>
        </div>
        <h1>Welcome Back</h1>
        <p class="auth-sub">Sign in to your TDCM account to access the community and tools.</p>

        <button class="oauth-btn">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Continue with Google
        </button>

        <div class="auth-divider">or sign in with email</div>

        <form id="login-form">
          <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="you@email.com" required></div>
          <div class="form-group">
            <div style="display:flex;justify-content:space-between"><label class="form-label">Password</label><a href="#/forgot-password" style="font-size:13px;color:var(--primary)">Forgot password?</a></div>
            <input type="password" class="form-input" placeholder="Your password" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%">Sign In</button>
        </form>

        <div class="auth-footer">Don't have an account? <a href="#/signup">Sign Up</a></div>
      </div>
    </div>
  `;
}

export function ForgotPasswordPage() {
    return `
    <div class="auth-page">
      <div class="auth-card">
        <div style="text-align:center;margin-bottom:var(--space-lg)">
          <a href="#/" class="nav-logo" style="justify-content:center;margin-bottom:var(--space-lg)">
            <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#1A4A4F"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial" font-weight="700" font-size="12" fill="#FFF">TCM</text></svg>
          </a>
        </div>
        <h1>Reset Password</h1>
        <p class="auth-sub">Enter your email and we'll send you a link to reset your password.</p>

        <div id="forgot-form-container">
          <form id="forgot-form">
            <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="you@email.com" required></div>
            <button type="submit" class="btn btn-primary" style="width:100%">Send Reset Link</button>
          </form>
        </div>

        <div class="auth-footer"><a href="#/login">← Back to Sign In</a></div>
      </div>
    </div>
  `;
}

export function initForgotPasswordPage() {
    const form = document.getElementById('forgot-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('forgot-form-container').innerHTML = `
        <div class="form-success" style="padding:var(--space-lg) 0">
          <div style="color:var(--success)">${icon('checkCircle', 48)}</div>
          <h3>Check Your Email</h3>
          <p>We've sent a password reset link to your email address.</p>
        </div>
      `;
        });
    }
}
