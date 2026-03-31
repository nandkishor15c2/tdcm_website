// ═══════════════════════════════════════════════════════════
// Admin — Pricing Editor
// ═══════════════════════════════════════════════════════════
import { icon } from '../../components/icons.js';
import { AdminLayout, setCurrentPage, initAdminLayout } from './AdminLayout.js';
import { pricingPlans } from '../../data/pricing.js';

export function AdminPricingPage() {
    setCurrentPage('pricing');

    const content = `
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Pricing Plans</h1>
        <p class="admin-page-subtitle">Manage pricing tiers and features</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      ${pricingPlans.map(plan => `
        <div class="admin-card" style="position:relative;${plan.isPopular ? 'border-color:var(--primary);border-width:2px' : ''}">
          ${plan.badge ? `<div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--primary);color:#fff;padding:3px 12px;border-radius:12px;font-size:11px;font-weight:700">${plan.badge}</div>` : ''}
          <div style="text-align:center;margin-bottom:16px">
            <h3 style="font-size:18px;font-weight:700;color:#1E293B">${plan.name}</h3>
            <p style="font-size:13px;color:#64748B;margin-top:4px">${plan.description}</p>
          </div>
          <div style="text-align:center;margin-bottom:20px">
            <div style="font-size:36px;font-weight:800;color:#1E293B">${plan.monthlyPrice === 0 ? 'Free' : `${plan.currency}${plan.monthlyPrice.toLocaleString()}`}</div>
            ${plan.monthlyPrice > 0 ? '<div style="font-size:13px;color:#94A3B8">per month</div>' : ''}
          </div>
          <div style="border-top:1px solid #E2E8F0;padding-top:16px">
            ${plan.features.map(f => `
              <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:${f.included ? '#334155' : '#CBD5E1'}">
                <span style="color:${f.included ? '#22C55E' : '#CBD5E1'}">${f.included ? icon('check', 16) : icon('x', 16)}</span>
                ${f.text}
              </div>
            `).join('')}
          </div>
          <button class="admin-btn admin-btn-secondary" style="width:100%;margin-top:16px;justify-content:center">${icon('edit', 14)} Edit Plan</button>
        </div>
      `).join('')}
    </div>
  `;

    return AdminLayout(content, 'Pricing');
}

export function initAdminPricing() {
    initAdminLayout();
}
