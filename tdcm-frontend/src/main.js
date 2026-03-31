// ═══════════════════════════════════════════════════════════
// TDCM — Main Entry Point
// ═══════════════════════════════════════════════════════════

import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/responsive.css';

import { addRoute, initRouter, handleRoute } from './router.js';
import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';

// Pages
import { HomePage, initHomePage } from './pages/Home.js';
import { ServicesPage, ServiceDetailPage, initServiceDetailPage } from './pages/Services.js';
import { ConsultancyPage, ConsultancyDetailPage } from './pages/Consultancy.js';
import { CommunityPage, initCommunityPage } from './pages/Community.js';
import { ArticlesPage, ArticleDetailPage } from './pages/Articles.js';
import { PricingPage, initPricingPage } from './pages/Pricing.js';
import { AboutPage } from './pages/About.js';
import { ContactPage, initContactPage } from './pages/Contact.js';
import { SignupPage, LoginPage, ForgotPasswordPage, initForgotPasswordPage } from './pages/Auth.js';
import { ProfilePage, NotificationsPage } from './pages/Profile.js';
import { BookSlotPage, initBookSlotPage } from './pages/BookSlot.js';
import { MilestonesPage, initMilestones } from './pages/Milestones.js';
import { FounderPage } from './pages/Founder.js';

// Admin Pages
import { AdminDashboardPage, initAdminDashboard } from './pages/admin/Dashboard.js';
import { AdminBookingsPage, initAdminBookings } from './pages/admin/Bookings.js';
import { AdminArticlesPage, initAdminArticles } from './pages/admin/Articles.js';
import { AdminPagesPage, initAdminPages } from './pages/admin/Pages.js';
import { AdminServicesPage, initAdminServices } from './pages/admin/ServicesAdmin.js';
import { AdminCommunityPage, initAdminCommunity } from './pages/admin/Community.js';
import { AdminMediaPage, initAdminMedia } from './pages/admin/Media.js';
import { AdminNavigationPage, initAdminNavigation } from './pages/admin/Navigation.js';
import { AdminPricingPage, initAdminPricing } from './pages/admin/PricingAdmin.js';
import { AdminSettingsPage, initAdminSettings } from './pages/admin/Settings.js';
import { AdminTeamPage, initAdminTeam } from './pages/admin/Team.js';
import './styles/admin.css';

// ─── Register Routes ───
addRoute('/', () => {
  const html = HomePage();
  setTimeout(() => {
    initHomePage();
    // Insert Milestones section
    const milestonesPlaceholder = document.getElementById('milestones-placeholder');
    if (milestonesPlaceholder) {
      milestonesPlaceholder.outerHTML = MilestonesPage();
      setTimeout(initMilestones, 100);
    }
    // Insert Founder section
    const founderPlaceholder = document.getElementById('founder-placeholder');
    if (founderPlaceholder) {
      founderPlaceholder.outerHTML = FounderPage();
    }
  }, 0);
  return html;
});

addRoute('/services', () => ServicesPage());

addRoute('/services/:slug', (params) => {
  const html = ServiceDetailPage(params);
  setTimeout(initServiceDetailPage, 0);
  return html;
});

addRoute('/consultancy', () => ConsultancyPage());
addRoute('/consultancy/:slug', (params) => ConsultancyDetailPage(params));

addRoute('/community', () => {
  const html = CommunityPage();
  setTimeout(initCommunityPage, 0);
  return html;
});

addRoute('/articles', () => ArticlesPage());
addRoute('/articles/:slug', (params) => ArticleDetailPage(params));

addRoute('/pricing', () => {
  const html = PricingPage();
  setTimeout(initPricingPage, 0);
  return html;
});

addRoute('/about', () => AboutPage());

addRoute('/contact', () => {
  const html = ContactPage();
  setTimeout(initContactPage, 0);
  return html;
});

addRoute('/signup', () => SignupPage());
addRoute('/login', () => LoginPage());

addRoute('/forgot-password', () => {
  const html = ForgotPasswordPage();
  setTimeout(initForgotPasswordPage, 0);
  return html;
});

addRoute('/profile/:username', (params) => ProfilePage(params));
addRoute('/notifications', () => NotificationsPage());

addRoute('/book-slot', () => {
  const html = BookSlotPage();
  setTimeout(initBookSlotPage, 0);
  return html;
});

// ─── Admin Routes ───
addRoute('/admin', () => { const h = AdminDashboardPage(); setTimeout(initAdminDashboard, 0); return h; });
addRoute('/admin/bookings', () => { const h = AdminBookingsPage(); setTimeout(initAdminBookings, 0); return h; });
addRoute('/admin/articles', () => { const h = AdminArticlesPage(); setTimeout(initAdminArticles, 0); return h; });
addRoute('/admin/pages', () => { const h = AdminPagesPage(); setTimeout(initAdminPages, 0); return h; });
addRoute('/admin/services', () => { const h = AdminServicesPage(); setTimeout(initAdminServices, 0); return h; });
addRoute('/admin/community', () => { const h = AdminCommunityPage(); setTimeout(initAdminCommunity, 0); return h; });
addRoute('/admin/media', () => { const h = AdminMediaPage(); setTimeout(initAdminMedia, 0); return h; });
addRoute('/admin/navigation', () => { const h = AdminNavigationPage(); setTimeout(initAdminNavigation, 0); return h; });
addRoute('/admin/pricing', () => { const h = AdminPricingPage(); setTimeout(initAdminPricing, 0); return h; });
addRoute('/admin/settings', () => { const h = AdminSettingsPage(); setTimeout(initAdminSettings, 0); return h; });
addRoute('/admin/team', () => { const h = AdminTeamPage(); setTimeout(initAdminTeam, 0); return h; });

// ─── Initialize App ───
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initRouter();
});
