(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const no=[];function te(s,e){const t=[],i=s.replace(/:([^/]+)/g,(r,n)=>(t.push(n),"([^/]+)"));no.push({pattern:s,regex:new RegExp(`^${i}$`),paramNames:t,handler:e})}function Dl(){return window.location.hash.slice(1)||"/"}function Bl(s){for(const e of no){const t=s.match(e.regex);if(t){const i={};return e.paramNames.forEach((r,n)=>{i[r]=t[n+1]}),{handler:e.handler,params:i}}}return null}function ya(){const s=Dl(),e=document.getElementById("page-content"),t=document.getElementById("navbar"),i=document.getElementById("site-footer"),r=s.startsWith("/admin");t&&(t.style.display=r?"none":""),i&&(i.style.display=r?"none":""),r?(document.body.style.margin="0",document.body.style.background="#F1F5F9"):(document.body.style.margin="",document.body.style.background=""),window.scrollTo(0,0);const n=Bl(s);n?(e.innerHTML="",e.innerHTML=n.handler(n.params)):e.innerHTML=`
      <div class="page-hero">
        <div class="container">
          <h1>404 — Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="#/" class="btn btn-white" style="margin-top:24px">Back to Home</a>
        </div>
      </div>`,Ol(),Rl(s)}function Rl(s){document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active");const t=e.getAttribute("data-path");t&&(s===t||t!=="/"&&s.startsWith(t))&&e.classList.add("active")})}function Ol(){const s=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),s.unobserve(i.target))})},{threshold:.1});document.querySelectorAll(".animate-on-scroll").forEach(t=>{s.observe(t)});const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(Fl(i.target),e.unobserve(i.target))})},{threshold:.3});document.querySelectorAll("[data-count]").forEach(t=>{e.observe(t)})}function Fl(s){const e=parseInt(s.getAttribute("data-count")),t=s.getAttribute("data-prefix")||"",i=s.getAttribute("data-suffix")||"",r=1500,n=performance.now();function a(o){const l=o-n,c=Math.min(l/r,1),d=1-Math.pow(1-c,3),p=Math.round(e*d);s.textContent=t+p.toLocaleString()+i,c<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}function Ll(){window.addEventListener("hashchange",ya),ya()}const zl={chevronDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',messageCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',mapPin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',trendingUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',barChart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',checkCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',externalLink:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'};function b(s,e=20){return`<span style="display:inline-flex;width:${e}px;height:${e}px">${zl[s]||""}</span>`}function Il(){const s=document.getElementById("navbar");s.innerHTML=`
    <div class="container">
      <div class="nav-inner">
        <a href="#/" class="nav-logo">
          <svg viewBox="0 0 40 40" width="36" height="36">
            <rect width="40" height="40" rx="8" fill="#1A4A4F"/>
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">TCM</text>
          </svg>
          <span>TDCM COMPANY</span>
        </a>

        <div class="nav-links">
          <a href="#/" class="nav-link" data-path="/">Home</a>

          <div class="has-mega">
            <span class="nav-link nav-link-has-menu" data-path="/services">
              Services ${b("chevronDown",14)}
            </span>
            <div class="mega-menu">
              <a href="#/services/recruitment" class="mega-item">
                <div class="mega-icon">${b("users",20)}</div>
                <div><div class="mega-label">Recruitment</div><div class="mega-desc">Find top talent 3× faster</div></div>
              </a>
              <a href="#/services/marketing" class="mega-item">
                <div class="mega-icon">${b("trendingUp",20)}</div>
                <div><div class="mega-label">Marketing</div><div class="mega-desc">Growth-driven performance</div></div>
              </a>
              <a href="#/services/crm" class="mega-item">
                <div class="mega-icon">${b("layers",20)}</div>
                <div><div class="mega-label">Business Solutions</div><div class="mega-desc">CRM & ops at scale</div></div>
              </a>
              <a href="#/services" class="mega-item">
                <div class="mega-icon">${b("arrowRight",20)}</div>
                <div><div class="mega-label">View All Services</div><div class="mega-desc">Explore everything we offer</div></div>
              </a>
            </div>
          </div>

          <div class="has-mega">
            <span class="nav-link nav-link-has-menu" data-path="/consultancy">
              Consultancy ${b("chevronDown",14)}
            </span>
            <div class="mega-menu">
              <a href="#/consultancy/go-to-market" class="mega-item">
                <div class="mega-icon">${b("rocket",20)}</div>
                <div><div class="mega-label">Go-To-Market</div><div class="mega-desc">Launch strategy</div></div>
              </a>
              <a href="#/consultancy/product-launch" class="mega-item">
                <div class="mega-icon">${b("zap",20)}</div>
                <div><div class="mega-label">Product Launch</div><div class="mega-desc">Full-service launch</div></div>
              </a>
              <a href="#/consultancy/0-to-90-plan" class="mega-item">
                <div class="mega-icon">${b("target",20)}</div>
                <div><div class="mega-label">0 to 90 Plan</div><div class="mega-desc">From zero to revenue</div></div>
              </a>
              <a href="#/consultancy/0-to-90-training" class="mega-item">
                <div class="mega-icon">${b("award",20)}</div>
                <div><div class="mega-label">0 to 90 Training</div><div class="mega-desc">Founder training</div></div>
              </a>
              <a href="#/consultancy/quarterly-health-analysis" class="mega-item">
                <div class="mega-icon">${b("barChart",20)}</div>
                <div><div class="mega-label">Quarterly Health</div><div class="mega-desc">Business diagnostics</div></div>
              </a>
              <a href="#/consultancy" class="mega-item">
                <div class="mega-icon">${b("arrowRight",20)}</div>
                <div><div class="mega-label">All Programs</div><div class="mega-desc">View consultancy portfolio</div></div>
              </a>
            </div>
          </div>

          <a href="#/community" class="nav-link" data-path="/community">Community</a>
          <a href="#/articles" class="nav-link" data-path="/articles">Articles</a>
          <a href="#/pricing" class="nav-link" data-path="/pricing">Pricing</a>
          <a href="#/about" class="nav-link" data-path="/about">About</a>
        </div>

        <div class="nav-actions">
          <a href="#/login" class="nav-sign">Sign In</a>
          <a href="#/book-slot" class="btn btn-primary btn-sm">Book a Slot</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
      <a href="#/" class="nav-link">Home</a>
      <a href="#/services" class="nav-link">Services</a>
      <a href="#/services/recruitment" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Recruitment</a>
      <a href="#/services/marketing" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Marketing</a>
      <a href="#/services/crm" class="nav-link" style="padding-left:16px;font-size:14px;color:var(--text-muted)">→ Business Solutions</a>
      <a href="#/consultancy" class="nav-link">Consultancy</a>
      <a href="#/community" class="nav-link">Community</a>
      <a href="#/articles" class="nav-link">Articles</a>
      <a href="#/pricing" class="nav-link">Pricing</a>
      <a href="#/about" class="nav-link">About</a>
      <a href="#/contact" class="nav-link">Contact</a>
      <a href="#/login" class="btn btn-secondary" style="margin-top:16px">Sign In</a>
      <a href="#/book-slot" class="btn btn-primary">Book a Slot</a>
    </div>
  `,window.addEventListener("scroll",()=>{s.classList.toggle("scrolled",window.scrollY>10)}),document.getElementById("mobile-toggle").addEventListener("click",()=>{document.getElementById("mobile-menu").classList.toggle("open")}),document.querySelectorAll("#mobile-menu .nav-link, #mobile-menu .btn").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("mobile-menu").classList.remove("open")})})}function ql(){document.getElementById("site-footer").innerHTML=`
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo" style="color:var(--white)">
            <svg viewBox="0 0 40 40" width="36" height="36">
              <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.15)"/>
              <text x="50%" y="54%" text-anchor="middle" dominant-baseline="central" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">TCM</text>
            </svg>
            <span>TDCM COMPANY</span>
          </div>
          <p>Dream Bold. Plan Smart. Hustle Hard & Celebrate Achievements. We help businesses grow through expert recruitment, marketing, and technology solutions.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn">${b("linkedin",16)}</a>
            <a href="#" aria-label="Twitter">${b("twitter",16)}</a>
            <a href="#" aria-label="Instagram">${b("instagram",16)}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <a href="#/services/recruitment">Recruitment</a>
          <a href="#/services/marketing">Marketing</a>
          <a href="#/services/crm">Business Solutions</a>
          <a href="#/pricing">Pricing</a>
        </div>

        <div class="footer-col">
          <h4>Consultancy</h4>
          <a href="#/consultancy/go-to-market">Go-To-Market</a>
          <a href="#/consultancy/product-launch">Product Launch</a>
          <a href="#/consultancy/0-to-90-plan">0 to 90 Plan</a>
          <a href="#/consultancy/0-to-90-training">0 to 90 Training</a>
          <a href="#/consultancy/quarterly-health-analysis">Quarterly Health</a>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <a href="#/about">About Us</a>
          <a href="#/articles">Articles</a>
          <a href="#/community">Community</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 TDCM Company. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  `}const Hs=[{slug:"recruitment",category:"service",title:"Recruitment Services",subtitle:"Find the right talent, faster",icon:"users",description:"End-to-end recruitment solutions that help you hire top talent 3× faster with AI-powered matching and dedicated human oversight.",heroHeadline:"Hire Top Talent, 3× Faster",heroSubheadline:"Our AI-powered recruitment engine combined with industry-expert recruiters delivers quality candidates in days, not months.",features:[{title:"AI Candidate Matching",desc:"Our proprietary algorithm scans 50M+ profiles to find your ideal candidates."},{title:"Dedicated Account Manager",desc:"A single point of contact who understands your culture and requirements."},{title:"End-to-End Process",desc:"From job spec to offer acceptance — we handle every touchpoint."},{title:"Diversity & Inclusion",desc:"Built-in bias reduction tools to ensure diverse talent pipelines."},{title:"Background Verification",desc:"Comprehensive checks on education, employment history, and references."},{title:"Onboarding Support",desc:"90-day onboarding check-ins to ensure retention and satisfaction."}],process:[{num:1,title:"Discovery Call",desc:"Understand your team, culture, and exact requirements."},{num:2,title:"Talent Search",desc:"AI-powered matching across 50M+ global profiles."},{num:3,title:"Screening",desc:"Technical assessments, culture fit, and reference checks."},{num:4,title:"Delivery",desc:"Shortlisted candidates with detailed profiles delivered."}],metrics:[{value:"72",suffix:"hrs",label:"Avg. First Shortlist"},{value:"94",suffix:"%",label:"Interview Accept Rate"},{value:"3",suffix:"×",label:"Faster Than Industry Avg"}],isFeatured:!1},{slug:"marketing",category:"service",title:"Marketing Services",subtitle:"Growth-driven performance marketing",icon:"trendingUp",description:"Data-driven marketing strategies that deliver measurable ROI across digital channels — from SEO and content to paid media and automation.",heroHeadline:"Marketing That Moves the Needle",heroSubheadline:"We combine creative storytelling with hard analytics to build campaigns that convert prospects into loyal customers.",features:[{title:"Performance Marketing",desc:"Google Ads, Meta, and LinkedIn campaigns optimized for conversions."},{title:"SEO & Content Strategy",desc:"Rank for the keywords that drive qualified traffic to your site."},{title:"Marketing Automation",desc:"Nurture sequences, lead scoring, and lifecycle campaigns."},{title:"Creative Production",desc:"Ad creatives, landing pages, and video content that convert."},{title:"Analytics & Attribution",desc:"Full-funnel tracking to understand every touchpoint."},{title:"Brand Strategy",desc:"Positioning, messaging, and visual identity that stands out."}],process:[{num:1,title:"Audit & Strategy",desc:"Deep-dive into your current marketing and define goals."},{num:2,title:"Campaign Build",desc:"Creative production, channel setup, and tracking configuration."},{num:3,title:"Launch & Optimize",desc:"Data-driven optimization with weekly performance reviews."},{num:4,title:"Scale & Report",desc:"Scale winning strategies and deliver transparent reporting."}],metrics:[{value:"340",suffix:"%",label:"Avg. ROAS"},{value:"67",suffix:"%",label:"Lead Cost Reduction"},{value:"2.4",suffix:"×",label:"Traffic Growth (6 months)"}],isFeatured:!0},{slug:"crm",category:"service",title:"Business Solutions",subtitle:"CRM & operations at scale",icon:"layers",description:"Custom CRM implementation, business process automation, and technology consulting to streamline your operations and boost efficiency.",heroHeadline:"Streamline Your Business Operations",heroSubheadline:"Custom CRM solutions and process automation that save your team 20+ hours per week and eliminate data silos.",features:[{title:"CRM Implementation",desc:"Setup, migration, and customization of leading CRM platforms."},{title:"Process Automation",desc:"Automate repetitive workflows to free up your team."},{title:"Data Integration",desc:"Connect all your tools into a single source of truth."},{title:"Custom Dashboards",desc:"Real-time visibility into sales, ops, and customer health."},{title:"Team Training",desc:"Hands-on training to ensure your team adopts the new systems."},{title:"Ongoing Support",desc:"Dedicated support and optimization post-launch."}],process:[{num:1,title:"Assessment",desc:"Map current workflows and identify automation opportunities."},{num:2,title:"Architecture",desc:"Design the optimal tech stack and integration plan."},{num:3,title:"Build & Migrate",desc:"Implement, integrate, and migrate data with zero downtime."},{num:4,title:"Train & Support",desc:"Go-live training and ongoing optimization support."}],metrics:[{value:"20",suffix:"+",label:"Team Hours Saved / Week"},{value:"99.9",suffix:"%",label:"Data Accuracy"},{value:"45",suffix:"%",label:"Faster Deal Cycles"}],isFeatured:!1}],so=[{slug:"go-to-market",title:"Go-To-Market Strategy",icon:"rocket",description:"A comprehensive strategy to take your product from concept to market with validated positioning, pricing, and channel strategy.",timeline:"6–8 weeks",forWhom:"Startups with a product ready to launch or pivoting to a new market",deliverables:["Market analysis report","Competitive positioning document","Channel strategy plan","Pricing model","Launch playbook"],outcomes:["Clear market positioning","Validated pricing","Channel partnerships","Launch readiness"]},{slug:"product-launch",title:"Product Launch",icon:"zap",description:"Full-service product launch management from pre-launch buzz to post-launch monitoring and iteration.",timeline:"4–6 weeks",forWhom:"Companies launching a new product, feature, or entering a new geography",deliverables:["Launch timeline","PR & communications plan","Campaign creatives","KPI dashboard","Post-launch analysis"],outcomes:["Successful launch execution","Media coverage","User acquisition targets met","Data-driven iteration plan"]},{slug:"0-to-90-plan",title:"0 to 90 Plan",icon:"target",description:"Your first 90 days from zero — a structured plan covering everything from incorporation to first revenue.",timeline:"90 days",forWhom:"First-time founders and early-stage startups before Series A",deliverables:["Business model canvas","Financial model","Hiring plan","Product roadmap","Investor pitch deck"],outcomes:["Clear business model","Ready for fundraising","First customers","Operational foundation set"]},{slug:"0-to-90-training",title:"0 to 90 Training",icon:"award",description:"Intensive training program for startup founders covering sales, marketing, finance, and team building in 90 days.",timeline:"90 days",forWhom:"Founders looking to build core business skills fast",deliverables:["Weekly training modules","Peer cohort access","Mentorship sessions","Action plans per module","Certificate of completion"],outcomes:["Sales confidence","Marketing fundamentals","Financial literacy","Leadership skills"]},{slug:"quarterly-health-analysis",title:"Quarterly Health Analysis",icon:"barChart",description:"A quarterly deep-dive into your business health — financials, operations, customer satisfaction, and growth trajectory.",timeline:"Recurring quarterly",forWhom:"Growth-stage companies wanting regular expert analysis",deliverables:["Financial health report","Operational efficiency review","Customer satisfaction analysis","Growth recommendations","Quarter-over-quarter comparison"],outcomes:["Early problem detection","Data-backed decisions","Continuous improvement","Investor-ready metrics"]}],gr=[{slug:"future-of-ai-recruitment",title:"The Future of AI in Recruitment: What 2026 Looks Like",excerpt:"AI is transforming how companies find and hire talent. Here's what the latest research says about the state of AI-powered recruitment.",category:"Recruitment",author:"Nandkishor Singh",date:"Mar 5, 2026",readingTime:8,featured:!0,content:`<p>Artificial Intelligence is rapidly changing the landscape of talent acquisition. In 2026, we're seeing unprecedented adoption of AI tools across every stage of the hiring funnel — from sourcing and screening to interviewing and onboarding.</p>
    <h2>The State of AI Recruitment in 2026</h2>
    <p>According to our latest research, 78% of enterprise companies now use some form of AI in their recruitment process. This is up from just 35% in 2023. The most common applications include:</p>
    <ul><li>Resume parsing and candidate matching</li><li>Automated scheduling and communication</li><li>Predictive analytics for candidate success</li><li>Bias detection and reduction</li></ul>
    <h2>What This Means for Hiring Managers</h2>
    <p>The key takeaway is that AI doesn't replace human judgment — it augments it. The best results come from teams that combine AI efficiency with human intuition and empathy. At TDCM, we've built our recruitment practice around this principle.</p>`},{slug:"performance-marketing-guide",title:"10 Performance Marketing Strategies That Actually Work in 2026",excerpt:"Cut through the noise with marketing strategies backed by real data. From Meta Ads to LinkedIn ABM, here's what's driving results.",category:"Marketing",author:"Priya Sharma",date:"Feb 28, 2026",readingTime:12,featured:!1,content:"<p>Performance marketing continues to evolve rapidly. What worked in 2024 may not work today. Here are ten strategies that are delivering measurable ROI for our clients right now.</p>"},{slug:"startup-first-90-days",title:"Your First 90 Days as a Startup Founder: A Survival Guide",excerpt:"The first three months can make or break your startup. Here's a proven framework for navigating the chaos and building momentum.",category:"Startup",author:"Rahul Verma",date:"Feb 20, 2026",readingTime:10,featured:!1,content:"<p>Starting a company is one of the most exhilarating and terrifying experiences you can have. The first 90 days are critical — they set the tone for everything that follows.</p>"},{slug:"crm-implementation-mistakes",title:"7 CRM Implementation Mistakes That Cost Companies Millions",excerpt:"CRM implementations fail at an alarming rate. Learn from the most common pitfalls and how to avoid them in your organization.",category:"Business Solutions",author:"Amit Patel",date:"Feb 14, 2026",readingTime:7,featured:!1,content:"<p>A staggering 63% of CRM implementations fail to meet their objectives. The problem isn't the technology — it's the approach. Here are seven mistakes we see repeatedly.</p>"},{slug:"remote-team-hiring",title:"Building High-Performance Remote Teams: Lessons from 500+ Hires",excerpt:"Remote hiring requires a fundamentally different approach. Here's what we've learned from placing 500+ remote candidates.",category:"Recruitment",author:"Nandkishor Singh",date:"Feb 7, 2026",readingTime:9,featured:!1,content:"<p>Remote work is here to stay. But building effective remote teams requires more than just posting jobs on LinkedIn. It demands a rethinking of how we assess, interview, and onboard talent.</p>"},{slug:"seo-content-strategy-2026",title:"The SEO Content Strategy Framework for B2B Companies",excerpt:"Organic traffic remains the most cost-effective acquisition channel. Here's how B2B companies should approach SEO content in 2026.",category:"Marketing",author:"Priya Sharma",date:"Jan 30, 2026",readingTime:11,featured:!1,content:"<p>SEO is far from dead. In fact, for B2B companies, organic search remains the highest-ROI marketing channel by a significant margin. But the playbook has changed dramatically.</p>"}],js=[{name:"Starter",slug:"starter",description:"For small teams getting started",monthlyPrice:0,annualPrice:0,currency:"₹",isPopular:!1,badge:null,ctaText:"Get Started Free",ctaHref:"#/signup",features:[{text:"Community access",included:!0},{text:"3 job postings / month",included:!0},{text:"Basic CRM dashboard",included:!0},{text:"Email support",included:!0},{text:"Marketing templates",included:!0},{text:"Dedicated account manager",included:!1},{text:"Custom integrations",included:!1},{text:"Priority support",included:!1}]},{name:"Growth",slug:"growth",description:"For scaling businesses",monthlyPrice:4999,annualPrice:3999,currency:"₹",isPopular:!0,badge:"Most Popular",ctaText:"Start Free Trial",ctaHref:"#/signup?plan=growth",features:[{text:"Everything in Starter",included:!0},{text:"Unlimited job postings",included:!0},{text:"Advanced CRM with automation",included:!0},{text:"Marketing campaign tools",included:!0},{text:"Analytics dashboard",included:!0},{text:"Dedicated account manager",included:!0},{text:"Custom integrations",included:!1},{text:"White-label reports",included:!1}]},{name:"Scale",slug:"scale",description:"For enterprise teams",monthlyPrice:14999,annualPrice:11999,currency:"₹",isPopular:!1,badge:null,ctaText:"Talk to Sales",ctaHref:"#/contact?intent=sales",features:[{text:"Everything in Growth",included:!0},{text:"Custom integrations",included:!0},{text:"White-label reports",included:!0},{text:"Priority 24/7 support",included:!0},{text:"Dedicated success team",included:!0},{text:"Custom workflows",included:!0},{text:"API access",included:!0},{text:"SLA guarantee",included:!0}]}],Nl=[{q:"How does the free Starter plan work?",a:"The Starter plan gives you access to our community, basic CRM features, and up to 3 job postings per month. No credit card required — upgrade anytime as your needs grow."},{q:"Can I switch plans at any time?",a:"Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. Downgrades take effect at the next billing cycle."},{q:"Is there a contract or commitment?",a:"No long-term contracts. Monthly plans are billed monthly. Annual plans offer a 20% discount and are billed yearly, but you can cancel anytime."},{q:"What payment methods do you accept?",a:"We accept all major credit cards, UPI, net banking, and bank transfers for annual plans. Enterprise clients can also pay via invoice."},{q:"Do you offer custom enterprise plans?",a:"Yes! Our Scale plan is our most comprehensive offering, but we also create fully custom plans for large organizations. Contact our sales team to discuss your requirements."},{q:"What kind of support is included?",a:"Starter includes email support (48h response). Growth includes a dedicated account manager. Scale includes 24/7 priority support with guaranteed response times."}],Hl=[{name:"Rajesh Kumar",role:"CEO",company:"TechVista Solutions",quote:"TDCM transformed our hiring process. We went from 45-day average time-to-hire to just 12 days. The quality of candidates is consistently exceptional.",rating:5,initials:"RK"},{name:"Sneha Patel",role:"VP Marketing",company:"GrowthStack",quote:"Our ROAS improved by 280% within the first quarter of working with TDCM's marketing team. They don't just run campaigns — they build growth engines.",rating:5,initials:"SP"},{name:"Arjun Menon",role:"Founder",company:"NexaWave",quote:"The 0-to-90 program gave us the structure and clarity we desperately needed. From idea to first revenue in 60 days — I can't recommend it enough.",rating:5,initials:"AM"},{name:"Divya Sharma",role:"COO",company:"ScaleUp India",quote:"Implementing a CRM with TDCM was seamless. Our team adoption rate hit 94% in the first month — that's unheard of in our industry.",rating:5,initials:"DS"},{name:"Vikram Joshi",role:"Head of Sales",company:"CloudBridge",quote:"TDCM's recruitment team found us a VP of Sales in just 8 days. He's now been with us for a year and has doubled our revenue. Incredible.",rating:5,initials:"VJ"},{name:"Anita Desai",role:"CMO",company:"FinEdge",quote:"The quarterly health analysis service has become our most valuable external input. It's like having a world-class consulting firm on retainer.",rating:5,initials:"AD"}],jl=[{value:500,suffix:"+",label:"Clients Served"},{value:98,suffix:"%",label:"Client Satisfaction"},{value:12,suffix:"+",label:"Years Experience"},{value:340,suffix:"%",label:"Avg. Client ROI"}],ao=[{id:"1",author:"Ananya Gupta",initials:"AG",time:"2 hours ago",category:"Marketing",content:"Just ran our first Google Performance Max campaign using TDCM's framework. 340% ROAS in the first week! 🚀 The key was isolating asset groups by audience segment rather than by product. Happy to share the setup if anyone's interested.",likes:24,comments:8},{id:"2",author:"Vikram Mehta",initials:"VM",time:"5 hours ago",category:"Hiring",content:"Looking for advice on structuring technical interviews for remote engineering candidates. We've been having a lot of no-shows and dropoffs. Any tips from the community?",likes:12,comments:15},{id:"3",author:"Sarah Chen",initials:"SC",time:"1 day ago",category:"CRM",content:"Migrated from Salesforce to HubSpot with TDCM's help last quarter. The transition was smoother than expected — zero data loss and our team actually prefers the new interface. AMA about the migration process.",likes:45,comments:22},{id:"4",author:"Arjun Reddy",initials:"AR",time:"1 day ago",category:"Startup",content:"Completed the 0-to-90 program last month. The structured approach to validating our business model saved us from making a costly pivot. Now we have 3 paying customers and a clear roadmap to Series A.",likes:67,comments:19},{id:"5",author:"Meera Joshi",initials:"MJ",time:"2 days ago",category:"Marketing",content:"Shared a detailed breakdown of our content strategy that grew organic traffic 250% in 6 months in the latest blog post. SEO is far from dead — you just need the right framework.",likes:33,comments:11},{id:"6",author:"Raj Kapoor",initials:"RK",time:"3 days ago",category:"General",content:"Great session at the TDCM community meetup in Mumbai last weekend! Met some incredible founders and marketers. Looking forward to the Bangalore chapter next month. 🎉",likes:56,comments:7},{id:"7",author:"Priya Nair",initials:"PN",time:"4 days ago",category:"Hiring",content:"We just hired our 10th employee using TDCM's recruitment service. From posting to offer acceptance, it took only 11 days. Their candidate quality is consistently excellent.",likes:38,comments:5},{id:"8",author:"Deepak Sharma",initials:"DS",time:"5 days ago",category:"CRM",content:"Pro tip: If you're implementing a CRM, start with your reporting requirements first, then work backwards to data fields. Most implementations fail because people think about inputs before outputs.",likes:89,comments:31}],Wl=["All","Marketing","Hiring","CRM","Startup","General"];function Yl(){return`
    <!-- Hero -->
    <section class="hero" style="padding-top:calc(var(--nav-height) + 60px);padding-bottom:80px;min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden">
      <!-- Subtle Background Graphics -->
      <div class="hero-bg-graphics">
        <svg class="hero-graphic hero-graphic-1" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L100 180 M20 100 L180 100" stroke="rgba(59, 145, 152, 0.12)" stroke-width="2"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(59, 145, 152, 0.1)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="90" stroke="rgba(59, 145, 152, 0.08)" stroke-width="1" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-2" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180 Q60 140 100 120 T180 40" stroke="rgba(59, 145, 152, 0.15)" stroke-width="2" fill="none"/>
          <circle cx="180" cy="40" r="8" fill="rgba(59, 145, 152, 0.2)"/>
          <path d="M165 35 L180 40 L170 55" stroke="rgba(59, 145, 152, 0.18)" stroke-width="2" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-3" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="100" width="20" height="30" fill="rgba(59, 145, 152, 0.12)"/>
          <rect x="50" y="80" width="20" height="50" fill="rgba(59, 145, 152, 0.15)"/>
          <rect x="80" y="60" width="20" height="70" fill="rgba(59, 145, 152, 0.18)"/>
          <rect x="110" y="30" width="20" height="100" fill="rgba(59, 145, 152, 0.22)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" stroke="rgba(59, 145, 152, 0.12)" stroke-width="1.5" fill="none"/>
          <circle cx="50" cy="50" r="5" fill="rgba(59, 145, 152, 0.15)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-5" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 L30 40 L50 55 L70 25 L90 45 L110 20" stroke="rgba(59, 145, 152, 0.15)" stroke-width="2" fill="none"/>
          <circle cx="110" cy="20" r="4" fill="rgba(168, 213, 186, 0.25)"/>
        </svg>
      </div>
      <div class="container">
        <div class="hero-content" style="text-align:center;display:flex;flex-direction:column;align-items:center">

          <!-- "Who are we?" with typewriter line -->
          <div class="hero-question" style="margin-top:var(--space-xl);margin-bottom:var(--space-lg)">
            <span style="display:inline-block;font-size:clamp(18px,2.5vw,24px);font-weight:400;color:var(--accent-light);letter-spacing:0.08em;text-transform:uppercase;opacity:0;animation:heroFadeIn .8s ease forwards .3s">Who are we?</span>
          </div>

          <!-- 360° with orbital ring -->
          <div class="hero-360-wrap" style="position:relative;display:inline-flex;align-items:center;justify-content:center;margin-bottom:var(--space-lg)">
            <div class="hero-orbit-ring" style="position:absolute;width:220px;height:220px;border-radius:50%;border:2px dashed rgba(168,213,186,.3);animation:orbitSpin 12s linear infinite"></div>
            <div class="hero-orbit-dot" style="position:absolute;width:220px;height:220px;animation:orbitSpin 12s linear infinite">
              <span style="position:absolute;top:-6px;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--accent);border-radius:50%;box-shadow:0 0 20px var(--accent),0 0 40px rgba(168,213,186,.3)"></span>
            </div>
            <span class="hero-360" style="font-size:clamp(100px,18vw,180px);font-weight:800;line-height:1;color:var(--white);letter-spacing:-0.02em;opacity:0;animation:heroScaleIn .6s cubic-bezier(.16,1,.3,1) forwards .5s;text-shadow:0 0 60px rgba(168,213,186,.15)">360°</span>
          </div>

          <!-- "Business Building Brand" with staggered reveal -->
          <div style="overflow:hidden">
            <h1 style="font-size:clamp(32px,5vw,60px);font-weight:700;line-height:1.15;margin:0;letter-spacing:-0.02em">
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards .8s">Business</span>
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards .95s;color:var(--accent)"> Building</span>
              <span class="hero-word" style="display:inline-block;opacity:0;transform:translateY(40px);animation:heroWordIn .7s cubic-bezier(.16,1,.3,1) forwards 1.1s"> Brand</span>
            </h1>
          </div>

          <!-- Tagline -->
          <p style="font-size:clamp(18px,2.5vw,24px);color:var(--white);max-width:650px;margin-top:var(--space-2xl);opacity:0;animation:heroFadeIn .8s ease forwards 1.3s">
            We help companies launch, grow, and scale with the right strategy, people, and systems.
          </p>

          <!-- Decorative accent line -->
          <div style="width:60px;height:3px;background:linear-gradient(90deg,var(--accent),var(--primary-mid));border-radius:3px;margin-top:var(--space-lg);opacity:0;animation:heroFadeIn .8s ease forwards 1.4s"></div>

        </div>
      </div>
    </section>

    <!-- Who We Are Section (from grow-with-tdcm) -->
    <section class="who-we-are-section" id="who-we-are">
      <div class="wwa-bg-grid"></div>
      <div class="wwa-glow"></div>
      
      <div class="wwa-content">
        <!-- Eyebrow -->
        <div class="wwa-eyebrow animate-on-scroll">
          <span class="wwa-eyebrow-line"></span>
          <span class="wwa-eyebrow-text">Who We Are</span>
          <span class="wwa-eyebrow-line"></span>
        </div>
        
        <!-- Headline -->
        <h2 class="wwa-headline animate-on-scroll">We give your business</h2>
        
        <!-- Rotating words -->
        <div class="wwa-rotating-wrap" style="min-height:80px">
          <div class="wwa-rotating-text" id="wwa-rotating-text">the right people.</div>
        </div>
        
        <!-- Subtitle -->
        <p class="wwa-subtitle animate-on-scroll">Consulting that covers hiring, marketing, automation, and growth — so you can focus on running your business.</p>
        
        <!-- CTA -->
        <a href="#/book-slot" class="btn btn-primary btn-lg wwa-cta animate-on-scroll">
          Book a Free Consultation
          ${b("arrowRight",18)}
        </a>
      </div>
    </section>

    <!-- Year 1 Milestones Section -->
    <div id="milestones-placeholder"></div>

    <!-- About the Founder Section -->
    <div id="founder-placeholder"></div>

    <!-- Products / Services Overview -->
    <section class="section-padding" style="position:relative;overflow:hidden">
      <!-- Background Graphics -->
      <div class="section-bg-graphic section-bg-graphic-1">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="rgba(59, 145, 152, 0.1)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(59, 145, 152, 0.12)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="40" stroke="rgba(59, 145, 152, 0.15)" stroke-width="1" fill="none"/>
        </svg>
      </div>
      <div class="container">
        <div class="section-eyebrow animate-on-scroll">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">What We Do</span>
        </div>
        <h2 class="section-headline animate-on-scroll">Everything You Need to Scale</h2>
        <p class="section-subheadline animate-on-scroll" style="margin-bottom:var(--space-2xl)">Three core pillars of growth — hire the right people, reach the right audience, and run your operations like clockwork.</p>
        <div class="products-grid">
          ${Hs.map((s,e)=>`
            <a href="#/services/${s.slug}" class="product-card ${s.isFeatured?"featured":""} animate-on-scroll" style="animation-delay:${e*100}ms">
              <div class="pc-icon">${b(s.icon,24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div class="pc-features">
                ${s.features.slice(0,3).map(t=>`
                  <div class="pc-feature">${b("check",16)} ${t.title}</div>
                `).join("")}
              </div>
              <span class="pc-cta">Learn more ${b("arrowRight",16)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center">
            <div class="eyebrow-line"></div>
            <span class="eyebrow-text">Our Process</span>
          </div>
          <h2 class="section-headline animate-on-scroll">How We Work With You</h2>
          <p class="section-subheadline animate-on-scroll" style="margin:0 auto">A proven, repeatable process that delivers results every time.</p>
        </div>
        <div class="process-grid">
          ${[{icon:"search",title:"Discovery",desc:"We learn your business, goals, and challenges through deep-dive workshops."},{icon:"target",title:"Strategy",desc:"Custom strategy tailored to your specific objectives and market."},{icon:"zap",title:"Execution",desc:"Our expert team implements with precision, speed, and transparency."},{icon:"trendingUp",title:"Optimization",desc:"Continuous data-driven optimization to maximize results."}].map((s,e)=>`
            <div class="process-step animate-on-scroll" style="animation-delay:${e*100}ms">
              <div class="process-num" style="font-size:0">${b(s.icon,28)}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Articles Teaser -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:var(--space-xl);flex-wrap:wrap;gap:16px">
          <div>
            <div class="section-eyebrow">
              <div class="eyebrow-line"></div>
              <span class="eyebrow-text">Latest Articles</span>
            </div>
            <h2 class="section-headline">Insights & Resources</h2>
          </div>
          <a href="#/articles" class="btn btn-secondary">View All ${b("arrowRight",16)}</a>
        </div>
        <div class="articles-grid">
          ${gr.slice(0,3).map(s=>`
            <a href="#/articles/${s.slug}" class="article-card animate-on-scroll">
              <div class="article-card-img">${b("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${s.category}</span>
                <h3>${s.title}</h3>
                <p>${s.excerpt}</p>
                <div class="article-meta">
                  <span>${b("clock",14)} ${s.readingTime} min</span>
                  <span>${s.date}</span>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <h2 class="animate-on-scroll">Book a Strategy Session with Our Founder</h2>
        <p class="animate-on-scroll">Get personalized advice for your business. 60-minute 1-on-1 session with the founder.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg animate-on-scroll" style="position:relative">Book a Slot ${b("arrowRight",16)}</a>
      </div>
    </section>
  `}function Ul(){const s=["the right people.","smarter systems.","AI that works.","a clear strategy."];let e=0;const t=document.getElementById("wwa-rotating-text");t&&setInterval(()=>{e=(e+1)%s.length,t.style.animation="none",t.offsetHeight,t.textContent=s[e],t.style.animation="wwaRotate 0.4s ease-out"},2400)}function Gl(){return`
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Our Services</span></div>
        <h1>Solutions That Drive Growth</h1>
        <p>Three core pillars of business growth — find the right talent, reach the right audience, and optimize your operations.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="products-grid">
          ${Hs.map((s,e)=>`
            <a href="#/services/${s.slug}" class="product-card ${s.isFeatured?"featured":""} animate-on-scroll" style="animation-delay:${e*100}ms">
              <div class="pc-icon">${b(s.icon,24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div class="pc-features">
                ${s.features.slice(0,4).map(t=>`<div class="pc-feature">${b("check",16)} ${t.title}</div>`).join("")}
              </div>
              <span class="pc-cta">Learn more ${b("arrowRight",16)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="cta-banner">
      <div class="container">
        <h2>Not Sure Which Service Is Right for You?</h2>
        <p>Book a 1-on-1 session with our founder and get clarity on your next move.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${b("arrowRight",16)}</a>
      </div>
    </section>
  `}function Vl({slug:s}){const e=Hs.find(i=>i.slug===s);if(!e)return`<div class="page-hero"><div class="container"><h1>Service Not Found</h1><p>The requested service doesn't exist.</p></div></div>`;const t=Hl.slice(0,2);return`
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> ${e.title}</div>
          <h1>${e.heroHeadline}</h1>
          <p>${e.heroSubheadline}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${b("arrowRight",16)}</a>
            <a href="#/services" class="btn btn-ghost">Back to Services</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section-padding">
      <div class="container">
        <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">What's Included</span></div>
        <h2 class="section-headline animate-on-scroll">Features & Capabilities</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);margin-top:var(--space-xl)">
          ${e.features.map((i,r)=>`
            <div class="card animate-on-scroll" style="animation-delay:${r*60}ms">
              <div style="width:44px;height:44px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin-bottom:var(--space-md)">${b("check",20)}</div>
              <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">${i.title}</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.6">${i.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Process</span></div>
          <h2 class="section-headline animate-on-scroll">How We Deliver</h2>
        </div>
        <div class="process-grid">
          ${e.process.map((i,r)=>`
            <div class="process-step animate-on-scroll" style="animation-delay:${r*100}ms">
              <div class="process-num">${i.num}</div>
              <h3>${i.title}</h3>
              <p>${i.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Metrics -->
    <section class="section-padding dark-section">
      <div class="container">
        <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
          ${e.metrics.map(i=>`
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${parseFloat(i.value)}" data-suffix="${i.suffix}">${i.value}${i.suffix}</div>
              <div class="stat-label">${i.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding">
      <div class="container">
        <h2 class="section-headline animate-on-scroll" style="text-align:center;margin-bottom:var(--space-xl)">What Clients Say</h2>
        <div class="testimonials-grid" style="grid-template-columns:repeat(2,1fr);max-width:900px;margin:0 auto">
          ${t.map(i=>`
            <div class="testimonial-card animate-on-scroll">
              <div class="tc-stars">${Array(i.rating).fill(b("star",16)).join("")}</div>
              <p class="tc-quote">"${i.quote}"</p>
              <div class="tc-author">
                <div class="tc-avatar">${i.initials}</div>
                <div><div class="tc-name">${i.name}</div><div class="tc-role">${i.role}, ${i.company}</div></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section class="section-padding light-section" id="inquiry-form">
      <div class="container" style="max-width:640px">
        <h2 class="section-headline animate-on-scroll" style="text-align:center">Get in Touch About ${e.title}</h2>
        <p class="section-subheadline animate-on-scroll" style="text-align:center;margin:0 auto var(--space-xl)">Fill out the form and our team will get back to you within 24 hours.</p>
        <div id="service-form-container">
          <form id="service-inquiry-form" class="animate-on-scroll">
            <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" placeholder="John Doe" required></div>
            <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="john@company.com" required></div>
            <div class="form-group"><label class="form-label">Company</label><input class="form-input" placeholder="Your company name"></div>
            <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" placeholder="Tell us about your needs..."></textarea></div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Submit Inquiry ${b("arrowRight",16)}</button>
          </form>
        </div>
      </div>
    </section>
  `}function Xl(){const s=document.getElementById("service-inquiry-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("service-form-container").innerHTML=`
        <div class="form-success">
          <div style="color:var(--success)">${b("checkCircle",48)}</div>
          <h3>Inquiry Submitted!</h3>
          <p>Thank you for your interest. Our team will reach out within 24 hours.</p>
          <a href="#/services" class="btn btn-secondary" style="margin-top:var(--space-lg)">Back to Services</a>
        </div>
      `})}function Kl(){return`
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Startup Consultancy</span></div>
        <h1>Accelerate Your Startup Journey</h1>
        <p>Expert-led programs designed to take startups from zero to scale — with proven frameworks, hands-on mentorship, and measurable outcomes.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="products-grid" style="grid-template-columns:repeat(3,1fr)">
          ${so.map((s,e)=>`
            <a href="#/consultancy/${s.slug}" class="product-card animate-on-scroll" style="animation-delay:${e*80}ms">
              <div class="pc-icon">${b(s.icon,24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div style="display:flex;align-items:center;gap:8px;margin:var(--space-md) 0;font-size:13px;color:var(--text-muted)">${b("clock",14)} ${s.timeline}</div>
              <span class="pc-cta">Learn more ${b("arrowRight",16)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    
    <section class="section-padding dark-section">
      <div class="container" style="text-align:center">
        <h2 class="section-headline" style="color:var(--white)">Why Choose TDCM Consultancy?</h2>
        <div class="stats-grid" style="margin-top:var(--space-xl)">
          ${[{value:"100",suffix:"+",label:"Startups Guided"},{value:"85",suffix:"%",label:"Success Rate"},{value:"12",suffix:"+",label:"Industries Covered"},{value:"50",suffix:"Cr+",label:"Funding Raised by Alumni"}].map(s=>`
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${parseInt(s.value)}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Ready to Accelerate Your Growth?</h2>
        <p>Book a 1-on-1 session with our founder to find the right program for your startup.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${b("arrowRight",16)}</a>
      </div>
    </section>
  `}function Jl({slug:s}){const e=so.find(t=>t.slug===s);return e?`
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> Consultancy Program</div>
          <h1>${e.title}</h1>
          <p>${e.description}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${b("arrowRight",16)}</a>
            <a href="#/consultancy" class="btn btn-ghost">All Programs</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:var(--space-3xl)">
        <div>
          <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">What's Covered</span></div>
          <h2 class="section-headline animate-on-scroll">Program Deliverables</h2>
          <div style="margin-top:var(--space-lg)">
            ${e.deliverables.map((t,i)=>`
              <div class="animate-on-scroll" style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);animation-delay:${i*60}ms">
                <div style="color:var(--primary)">${b("check",20)}</div>
                <span style="font-size:15px">${t}</span>
              </div>
            `).join("")}
          </div>

          <div style="margin-top:var(--space-2xl)">
            <div class="section-eyebrow animate-on-scroll"><div class="eyebrow-line"></div><span class="eyebrow-text">Outcomes</span></div>
            <h2 class="section-headline animate-on-scroll">Expected Results</h2>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-top:var(--space-lg)">
              ${e.outcomes.map((t,i)=>`
                <div class="card animate-on-scroll" style="animation-delay:${i*60}ms">
                  <div style="color:var(--primary);margin-bottom:8px">${b("target",20)}</div>
                  <span style="font-size:14px;font-weight:500">${t}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <div>
          <div class="card animate-on-scroll" style="position:sticky;top:calc(var(--nav-height) + 24px)">
            <h3 style="font-size:18px;font-weight:600;margin-bottom:var(--space-lg)">Program Details</h3>
            <div style="margin-bottom:var(--space-md)">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:4px">Timeline</div>
              <div style="font-weight:600;display:flex;align-items:center;gap:8px">${b("clock",16)} ${e.timeline}</div>
            </div>
            <div style="margin-bottom:var(--space-md)">
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:4px">Who It's For</div>
              <div style="font-size:14px;color:var(--text-dark);line-height:1.6">${e.forWhom}</div>
            </div>
            <div class="divider" style="margin:var(--space-lg) 0"></div>
            <a href="#/book-slot" class="btn btn-primary" style="width:100%">Book a Slot with Founder</a>
            <a href="#/consultancy" class="btn btn-secondary" style="width:100%;margin-top:var(--space-sm)">View All Programs</a>
          </div>
        </div>
      </div>
    </section>
  `:'<div class="page-hero"><div class="container"><h1>Program Not Found</h1></div></div>'}function Ql(){return`
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Community</span></div>
        <h1>Join the Conversation</h1>
        <p>Connect with founders, marketers, and business leaders. Share insights, ask questions, and grow together.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container" style="max-width:800px">
        <!-- Search & Filters -->
        <div style="display:flex;gap:var(--space-md);margin-bottom:var(--space-xl);flex-wrap:wrap">
          <div style="flex:1;min-width:200px;position:relative">
            <input class="form-input" placeholder="Search posts..." style="padding-left:40px">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted)">${b("search",18)}</span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${Wl.map((s,e)=>`
              <button class="tag community-filter ${e===0?"active":""}" data-category="${s}" style="cursor:pointer;${e===0?"background:var(--primary);color:var(--white);border-color:var(--primary)":""}">${s}</button>
            `).join("")}
          </div>
        </div>

        <!-- Join Banner -->
        <div class="card animate-on-scroll" style="background:var(--primary-dark);color:var(--white);text-align:center;margin-bottom:var(--space-xl);border-color:var(--primary)">
          <h3 style="color:var(--white);margin-bottom:var(--space-sm)">Want to Join the Discussion?</h3>
          <p style="color:var(--accent-light);font-size:14px;margin-bottom:var(--space-md)">Create a free account to post, like, and comment on community threads.</p>
          <a href="#/signup" class="btn btn-white btn-sm">Join Community ${b("arrowRight",16)}</a>
        </div>

        <!-- Post Feed -->
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${ao.map((s,e)=>`
            <div class="post-card animate-on-scroll" style="animation-delay:${e*50}ms">
              <div class="post-header">
                <div class="post-avatar">${s.initials}</div>
                <div style="flex:1">
                  <div class="post-author-name">${s.author}</div>
                  <div class="post-time">${s.time}</div>
                </div>
                <span class="tag">${s.category}</span>
              </div>
              <p class="post-content">${s.content}</p>
              <div class="post-actions">
                <span class="post-action">${b("heart",16)} ${s.likes}</span>
                <span class="post-action">${b("messageCircle",16)} ${s.comments}</span>
                <span class="post-action">${b("share",16)} Share</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Zl(){document.querySelectorAll(".community-filter").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".community-filter").forEach(e=>{e.classList.remove("active"),e.style.background="",e.style.color="",e.style.borderColor=""}),s.classList.add("active"),s.style.background="var(--primary)",s.style.color="var(--white)",s.style.borderColor="var(--primary)"})})}function ec(){const s=gr.find(t=>t.featured)||gr[0],e=gr.filter(t=>t!==s);return`
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Articles</span></div>
        <h1>Insights & Resources</h1>
        <p>Expert analysis, guides, and thought leadership from the TDCM team.</p>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="section-padding">
      <div class="container">
        <a href="#/articles/${s.slug}" class="card animate-on-scroll" style="display:grid;grid-template-columns:1.2fr 1fr;gap:var(--space-xl);cursor:pointer">
          <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;min-height:280px;color:rgba(255,255,255,.3)">${b("book",64)}</div>
          <div style="display:flex;flex-direction:column;justify-content:center">
            <span class="tag" style="align-self:flex-start;margin-bottom:var(--space-md)">${s.category}</span>
            <h2 style="font-size:var(--text-h2);font-weight:var(--fw-bold);margin-bottom:var(--space-md);line-height:1.3">${s.title}</h2>
            <p style="color:var(--text-muted);margin-bottom:var(--space-lg);line-height:1.6">${s.excerpt}</p>
            <div class="article-meta">
              <span>${s.author}</span>
              <span>·</span>
              <span>${s.date}</span>
              <span>·</span>
              <span>${b("clock",14)} ${s.readingTime} min read</span>
            </div>
          </div>
        </a>

        <!-- Article Grid -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);margin-top:var(--space-2xl)">
          ${e.map((t,i)=>`
            <a href="#/articles/${t.slug}" class="article-card animate-on-scroll" style="animation-delay:${i*80}ms">
              <div class="article-card-img">${b("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${t.category}</span>
                <h3>${t.title}</h3>
                <p>${t.excerpt}</p>
                <div class="article-meta">
                  <span>${b("clock",14)} ${t.readingTime} min</span>
                  <span>${t.date}</span>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `}function tc({slug:s}){const e=gr.find(i=>i.slug===s);if(!e)return'<div class="page-hero"><div class="container"><h1>Article Not Found</h1></div></div>';const t=gr.filter(i=>i.slug!==s).slice(0,3);return`
    <section class="page-hero">
      <div class="container">
        <span class="tag" style="margin-bottom:var(--space-md)">${e.category}</span>
        <h1 style="max-width:720px;margin:0 auto var(--space-md)">${e.title}</h1>
        <div class="article-meta" style="justify-content:center;color:var(--accent-light)">
          <span>${e.author}</span><span>·</span><span>${e.date}</span><span>·</span><span>${b("clock",14)} ${e.readingTime} min read</span>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="max-width:760px">
        <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-md);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.2);margin-bottom:var(--space-2xl)">${b("book",80)}</div>
        <article style="font-size:17px;line-height:1.8;color:var(--text-dark)">${e.content}</article>
        
        <!-- Author Bio -->
        <div class="card" style="display:flex;align-items:center;gap:var(--space-lg);margin-top:var(--space-2xl)">
          <div class="tc-avatar" style="width:64px;height:64px;font-size:22px;flex-shrink:0">${e.author.split(" ").map(i=>i[0]).join("")}</div>
          <div>
            <div style="font-weight:600;margin-bottom:4px">${e.author}</div>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.5">Expert contributor at TDCM Company. Passionate about helping businesses grow through data-driven strategies.</p>
          </div>
        </div>

        <!-- Newsletter CTA -->
        <div class="card" style="text-align:center;margin-top:var(--space-xl);background:var(--primary-light);border-color:var(--primary)">
          <h3 style="margin-bottom:var(--space-sm)">Subscribe to Our Newsletter</h3>
          <p style="color:var(--text-muted);font-size:14px;margin-bottom:var(--space-md)">Get the latest articles and insights delivered to your inbox.</p>
          <div style="display:flex;gap:8px;max-width:400px;margin:0 auto">
            <input class="form-input" placeholder="your@email.com" style="flex:1">
            <button class="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="section-padding light-section">
      <div class="container">
        <h2 class="section-headline" style="text-align:center;margin-bottom:var(--space-xl)">Related Articles</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg)">
          ${t.map(i=>`
            <a href="#/articles/${i.slug}" class="article-card">
              <div class="article-card-img">${b("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${i.category}</span>
                <h3>${i.title}</h3>
                <div class="article-meta"><span>${b("clock",14)} ${i.readingTime} min</span><span>${i.date}</span></div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `}function ic(){return`
    <section class="page-hero">
      <div class="container">
        <div class="section-eyebrow" style="justify-content:center"><div class="eyebrow-line" style="background:rgba(255,255,255,.5)"></div><span class="eyebrow-text" style="color:rgba(255,255,255,.7)">Pricing</span></div>
        <h1>Simple, Transparent Pricing</h1>
        <p>Start free and scale as you grow. No hidden fees, no surprises.</p>
      </div>
    </section>
    <section class="section-padding">
      <div class="container">
        <div class="billing-toggle">
          <span class="billing-label active" data-billing="monthly">Monthly</span>
          <div class="toggle-switch" id="billing-toggle"></div>
          <span class="billing-label" data-billing="annual">Annual <span class="tag" style="font-size:11px;padding:2px 8px;margin-left:4px;background:var(--success);color:var(--white);border-color:var(--success)">Save 20%</span></span>
        </div>

        <div class="pricing-grid">
          ${js.map(s=>`
            <div class="pricing-card ${s.isPopular?"popular":""} animate-on-scroll">
              ${s.badge?`<div class="pricing-badge">${s.badge}</div>`:""}
              <h3 class="pricing-name">${s.name}</h3>
              <p class="pricing-desc">${s.description}</p>
              <div class="pricing-amount" data-monthly="${s.monthlyPrice}" data-annual="${s.annualPrice}" data-currency="${s.currency}">
                ${s.monthlyPrice===0?"Free":`${s.currency}${s.monthlyPrice.toLocaleString()}`}
                ${s.monthlyPrice>0?"<span>/mo</span>":""}
              </div>
              ${s.monthlyPrice>0?'<div class="pricing-period">per user, billed monthly</div>':'<div class="pricing-period">No credit card required</div>'}
              <div class="pricing-features">
                ${s.features.map(e=>`
                  <div class="pricing-feature ${e.included?"included":"excluded"}">
                    ${e.included?b("check",18):b("x",18)}
                    <span>${e.text}</span>
                  </div>
                `).join("")}
              </div>
              <a href="${s.ctaHref}" class="btn ${s.isPopular?"btn-primary":"btn-secondary"}" style="width:100%">${s.ctaText}</a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding light-section">
      <div class="container">
        <h2 class="section-headline animate-on-scroll" style="text-align:center;margin-bottom:var(--space-2xl)">Frequently Asked Questions</h2>
        <div class="faq-list">
          ${Nl.map(s=>`
            <div class="faq-item">
              <button class="faq-question">${s.q} ${b("chevronDown",20)}</button>
              <div class="faq-answer"><p>${s.a}</p></div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Need a Custom Enterprise Plan?</h2>
        <p>Book a session with our founder to discuss a plan tailored to your organization.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${b("arrowRight",16)}</a>
      </div>
    </section>
  `}function rc(){const s=document.getElementById("billing-toggle");if(!s)return;let e=!1;s.addEventListener("click",()=>{e=!e,s.classList.toggle("on",e),document.querySelectorAll(".billing-label").forEach(t=>{t.classList.toggle("active",t.dataset.billing===(e?"annual":"monthly"))}),document.querySelectorAll(".pricing-amount").forEach(t=>{const i=parseInt(t.dataset.monthly),r=parseInt(t.dataset.annual),n=t.dataset.currency,a=e?r:i,o="/mo";t.innerHTML=a===0?"Free":`${n}${a.toLocaleString()}<span>${o}</span>`}),document.querySelectorAll(".pricing-period").forEach((t,i)=>{js[i].monthlyPrice>0&&(t.textContent=e?"per user, billed annually":"per user, billed monthly")})}),document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".faq-item"),r=i.classList.contains("open");document.querySelectorAll(".faq-item").forEach(n=>n.classList.remove("open")),r||i.classList.add("open")})})}function nc(){return`
    <section class="page-hero">
      <div class="container">
        <h1>About TDCM Company</h1>
        <p>The Digital Consultancy & Management — helping businesses dream bold, plan smart, hustle hard, and celebrate achievements.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-3xl);align-items:center">
        <div class="animate-on-scroll">
          <div class="section-eyebrow"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Story</span></div>
          <h2 class="section-headline">Built by Operators, for Operators</h2>
          <p style="color:var(--text-muted);line-height:1.8;margin-bottom:var(--space-lg)">TDCM was born from a simple observation: startups and growing businesses need more than just advice — they need partners who've been in the trenches. Our founding team has collectively built 5 companies, hired 2000+ people, and managed over ₹100Cr in marketing spend.</p>
          <p style="color:var(--text-muted);line-height:1.8">We combine deep operational expertise with modern technology to deliver recruitment, marketing, and business solutions that move the needle. Our approach is simple: understand your business like it's our own, then execute with precision.</p>
        </div>
        <div class="animate-on-scroll" style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-lg);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.15)">${b("globe",100)}</div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding light-section">
      <div class="container">
        <div style="text-align:center;margin-bottom:var(--space-2xl)">
          <div class="section-eyebrow animate-on-scroll" style="justify-content:center"><div class="eyebrow-line"></div><span class="eyebrow-text">Our Values</span></div>
          <h2 class="section-headline animate-on-scroll">What Drives Us</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-lg)">
          ${[{icon:"target",title:"Dream Bold",desc:"We set ambitious goals and help our clients do the same."},{icon:"shield",title:"Plan Smart",desc:"Data-driven strategies with clear timelines and milestones."},{icon:"zap",title:"Hustle Hard",desc:"We execute with urgency, precision, and relentless dedication."},{icon:"award",title:"Celebrate Wins",desc:"Every milestone matters. We track, measure, and celebrate success."}].map((s,e)=>`
            <div class="card animate-on-scroll" style="text-align:center;animation-delay:${e*80}ms">
              <div style="width:52px;height:52px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin:0 auto var(--space-md)">${b(s.icon,24)}</div>
              <h3 style="font-size:16px;font-weight:600;margin-bottom:6px">${s.title}</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.5">${s.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-padding dark-section">
      <div class="container">
        <div class="stats-grid">
          ${jl.map(s=>`
            <div class="stat-item animate-on-scroll">
              <div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container">
        <h2>Want to Work With Us?</h2>
        <p>Book a 1-on-1 session with our founder to explore how TDCM can help your business.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${b("arrowRight",16)}</a>
      </div>
    </section>
  `}function sc(){return`
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
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Send Message ${b("arrowRight",16)}</button>
            </form>
          </div>

          <div>
            <h3 style="font-size:var(--text-h3);font-weight:var(--fw-semibold);margin-bottom:var(--space-xl)">Contact Information</h3>
            <div class="contact-info-item">
              <div class="contact-info-icon">${b("mail",20)}</div>
              <div><div class="contact-info-label">Email</div><div class="contact-info-value">hello@tdcm.company</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${b("phone",20)}</div>
              <div><div class="contact-info-label">Phone</div><div class="contact-info-value">+91 98765 43210</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${b("mapPin",20)}</div>
              <div><div class="contact-info-label">Office</div><div class="contact-info-value">Mumbai, Maharashtra, India</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${b("clock",20)}</div>
              <div><div class="contact-info-label">Business Hours</div><div class="contact-info-value">Mon–Fri, 9:00 AM – 6:00 PM IST</div></div>
            </div>

            <div class="divider" style="margin:var(--space-xl) 0"></div>

            <h4 style="font-weight:var(--fw-semibold);margin-bottom:var(--space-md)">Quick Actions</h4>
            <a href="#" class="btn btn-secondary" style="width:100%;margin-bottom:var(--space-sm)">${b("calendar",16)} Schedule a Call</a>
            <a href="#" class="btn btn-secondary" style="width:100%;background:#25D366;color:white;border-color:#25D366">${b("messageCircle",16)} WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  `}function ac(){const s=document.getElementById("contact-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("contact-form-container").innerHTML=`
        <div class="form-success">
          <div style="color:var(--success)">${b("checkCircle",56)}</div>
          <h3 style="margin-top:var(--space-md)">Message Sent Successfully!</h3>
          <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <a href="#/" class="btn btn-primary" style="margin-top:var(--space-lg)">Back to Home</a>
        </div>
      `})}function oc(){return`
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
  `}function lc(){return`
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
  `}function cc(){return`
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
  `}function dc(){const s=document.getElementById("forgot-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("forgot-form-container").innerHTML=`
        <div class="form-success" style="padding:var(--space-lg) 0">
          <div style="color:var(--success)">${b("checkCircle",48)}</div>
          <h3>Check Your Email</h3>
          <p>We've sent a password reset link to your email address.</p>
        </div>
      `})}function uc({username:s}){const e=s?s.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"Demo User",t=e.split(" ").map(i=>i[0]).join("").slice(0,2);return`
    <div class="profile-header">
      <div class="container">
        <div class="profile-avatar">${t}</div>
        <h1 style="font-size:var(--text-h2)">${e}</h1>
        <p style="color:var(--text-muted);margin-top:4px">@${s||"demo-user"}</p>
        <p style="color:var(--text-muted);font-size:14px;max-width:480px;margin:var(--space-md) auto 0">Product enthusiast, startup founder, and lifelong learner. Building something amazing with TDCM.</p>
        <div class="profile-stats">
          <div class="profile-stat"><div class="profile-stat-value">24</div><div class="profile-stat-label">Posts</div></div>
          <div class="profile-stat"><div class="profile-stat-value">156</div><div class="profile-stat-label">Followers</div></div>
          <div class="profile-stat"><div class="profile-stat-value">89</div><div class="profile-stat-label">Following</div></div>
        </div>
        <div style="margin-top:var(--space-lg);display:flex;gap:var(--space-sm);justify-content:center">
          <button class="btn btn-primary btn-sm">${b("users",14)} Follow</button>
          <button class="btn btn-secondary btn-sm">${b("mail",14)} Message</button>
        </div>
      </div>
    </div>

    <section class="section-padding">
      <div class="container" style="max-width:700px">
        <h2 class="section-headline" style="font-size:var(--text-h3);margin-bottom:var(--space-lg)">Recent Posts</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${ao.slice(0,3).map(i=>`
            <div class="post-card">
              <div class="post-header">
                <div class="post-avatar">${t}</div>
                <div><div class="post-author-name">${e}</div><div class="post-time">${i.time}</div></div>
              </div>
              <p class="post-content">${i.content}</p>
              <div class="post-actions">
                <span class="post-action">${b("heart",16)} ${i.likes}</span>
                <span class="post-action">${b("messageCircle",16)} ${i.comments}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function hc(){const s=[{initials:"SP",text:"<strong>Sneha Patel</strong> liked your post about marketing strategies",time:"2 min ago",unread:!0},{initials:"RK",text:"<strong>Rajesh Kumar</strong> commented on your post",time:"15 min ago",unread:!0},{initials:"AM",text:"<strong>Arjun Menon</strong> started following you",time:"1 hour ago",unread:!0},{initials:"DS",text:"<strong>Divya Sharma</strong> mentioned you in a comment",time:"3 hours ago",unread:!1},{initials:"VJ",text:"<strong>Vikram Joshi</strong> liked your comment",time:"5 hours ago",unread:!1},{initials:"AD",text:"<strong>Anita Desai</strong> replied to your post about CRM implementation",time:"1 day ago",unread:!1},{initials:"TC",text:'<strong>TDCM</strong> published a new article: "AI in Recruitment"',time:"2 days ago",unread:!1},{initials:"PR",text:"<strong>Priya Sharma</strong> liked your article share",time:"3 days ago",unread:!1}];return`
    <section class="page-hero" style="padding-bottom:var(--space-xl)">
      <div class="container">
        <h1>Notifications</h1>
      </div>
    </section>
    <section class="section-padding-sm">
      <div class="container" style="max-width:700px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <span style="font-size:14px;color:var(--text-muted)">${s.filter(e=>e.unread).length} unread notifications</span>
          <button class="btn btn-secondary btn-sm">${b("check",14)} Mark all as read</button>
        </div>
        <div class="card" style="padding:0;overflow:hidden">
          ${s.map(e=>`
            <div class="notification-item ${e.unread?"unread":""}">
              <div class="notification-avatar">${e.initials}</div>
              <div class="notification-text">${e.text}</div>
              <div class="notification-time">${e.time}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function pc(){const s=[],e=new Date;for(let t=1;t<=7;t++){const i=new Date(e);i.setDate(e.getDate()+t);const r=i.toLocaleDateString("en-IN",{weekday:"short"}),n=i.toLocaleDateString("en-IN",{day:"numeric",month:"short"}),a=i.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),l=["10:00 AM","11:30 AM","2:00 PM","3:30 PM","5:00 PM"].filter(()=>Math.random()>.3);s.push({day:r,date:n,fullDate:a,times:l,raw:i})}return s}function fc(){const s=pc();return`
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
                ${b("briefcase",18)}
                <span>₹5,000</span>
              </div>
            </div>

            <!-- Date Selector -->
            <div class="slot-dates" id="slot-dates">
              ${s.map((e,t)=>`
                <button class="slot-date-btn ${t===0?"active":""}" data-idx="${t}">
                  <span class="slot-day">${e.day}</span>
                  <span class="slot-date">${e.date}</span>
                </button>
              `).join("")}
            </div>

            <!-- Time Grid -->
            <div id="slot-times-wrap">
              ${s.map((e,t)=>`
                <div class="slot-times ${t===0?"active":""}" data-day="${t}">
                  <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--space-md)">${e.fullDate}</p>
                  ${e.times.length>0?`
                    <div class="slot-time-grid">
                      ${e.times.map(i=>`
                        <button class="slot-time-btn" data-time="${i}" data-full-date="${e.fullDate}">
                          ${b("clock",16)} ${i}
                        </button>
                      `).join("")}
                    </div>
                  `:`
                    <div style="text-align:center;padding:var(--space-xl);color:var(--text-muted)">
                      ${b("calendar",24)}
                      <p style="margin-top:var(--space-sm)">No slots available on this day</p>
                    </div>
                  `}
                </div>
              `).join("")}
            </div>

            <!-- Session Details -->
            <div class="session-info">
              <div class="session-info-item">${b("clock",16)} <span>60 minute session</span></div>
              <div class="session-info-item">${b("video",16)} <span>Google Meet / Zoom</span></div>
              <div class="session-info-item">${b("user",16)} <span>1-on-1 with Founder</span></div>
            </div>

            <button class="btn btn-primary btn-lg" id="btn-to-payment" style="width:100%" disabled>
              Continue to Payment ${b("arrowRight",16)}
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
                Pay ₹5,000 & Confirm ${b("arrowRight",16)}
              </button>
              <button type="button" class="btn btn-secondary" id="btn-back-to-slots" style="width:100%;margin-top:var(--space-sm)">
                ${b("arrowRight",16)} Back to Slot Selection
              </button>
            </form>
          </div>
        </div>

        <!-- STEP 3: Confirmation -->
        <div class="booking-step" id="step-3" style="display:none">
          <div class="booking-card" style="text-align:center;padding:var(--space-3xl) var(--space-xl)">
            <div class="confirm-check">
              ${b("check",36)}
            </div>
            <h2 style="font-size:var(--text-h2);margin-top:var(--space-lg);margin-bottom:var(--space-sm)">Booking Confirmed!</h2>
            <p style="color:var(--text-muted);font-size:var(--text-body-lg);max-width:420px;margin:0 auto var(--space-xl)">Your session with the founder has been booked. A calendar invite and meeting link will be sent to your email.</p>

            <div class="confirm-details">
              <div class="cd-row">${b("calendar",18)} <span id="conf-date">—</span></div>
              <div class="cd-row">${b("clock",18)} <span id="conf-time">—</span></div>
              <div class="cd-row">${b("video",18)} <span>Google Meet link will be emailed</span></div>
              <div class="cd-row">${b("briefcase",18)} <span>₹5,000 paid</span></div>
            </div>

            <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-xl);flex-wrap:wrap">
              <a href="#/" class="btn btn-primary">Back to Home ${b("arrowRight",16)}</a>
              <a href="#/services" class="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function mc(){let s="",e="";document.querySelectorAll(".slot-date-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".slot-date-btn").forEach(r=>r.classList.remove("active")),t.classList.add("active");const i=t.dataset.idx;document.querySelectorAll(".slot-times").forEach(r=>r.classList.remove("active")),document.querySelector(`.slot-times[data-day="${i}"]`)?.classList.add("active"),document.querySelectorAll(".slot-time-btn").forEach(r=>r.classList.remove("active")),e="",document.getElementById("btn-to-payment").disabled=!0})}),document.querySelectorAll(".slot-time-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".slot-time-btn").forEach(i=>i.classList.remove("active")),t.classList.add("active"),s=t.dataset.fullDate,e=t.dataset.time,document.getElementById("btn-to-payment").disabled=!1})}),document.getElementById("btn-to-payment")?.addEventListener("click",()=>{e&&(document.getElementById("step-1").style.display="none",document.getElementById("step-2").style.display="block",document.getElementById("pay-date").textContent=s,document.getElementById("pay-time").textContent=e,document.querySelectorAll(".bp-step").forEach(t=>t.classList.remove("active")),document.querySelector('.bp-step[data-step="2"]').classList.add("active"),document.querySelector('.bp-step[data-step="1"]').classList.add("completed"),window.scrollTo({top:0,behavior:"smooth"}))}),document.getElementById("btn-back-to-slots")?.addEventListener("click",()=>{document.getElementById("step-2").style.display="none",document.getElementById("step-1").style.display="block",document.querySelectorAll(".bp-step").forEach(t=>t.classList.remove("active","completed")),document.querySelector('.bp-step[data-step="1"]').classList.add("active"),window.scrollTo({top:0,behavior:"smooth"})}),document.getElementById("payment-form")?.addEventListener("submit",t=>{t.preventDefault(),document.getElementById("step-2").style.display="none",document.getElementById("step-3").style.display="block",document.getElementById("conf-date").textContent=s,document.getElementById("conf-time").textContent=e,document.querySelectorAll(".bp-step").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".bp-step").forEach(i=>i.classList.add("completed")),document.querySelector('.bp-step[data-step="3"]').classList.add("active"),window.scrollTo({top:0,behavior:"smooth"})})}function ai(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function oo(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},Ws,Ie,ce,Dt=1e8,ne=1/Dt,ys=Math.PI*2,gc=ys/4,vc=0,lo=Math.sqrt,yc=Math.cos,_c=Math.sin,Re=function(e){return typeof e=="string"},ve=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},Ys=function(e){return typeof e>"u"},ei=function(e){return typeof e=="object"},ct=function(e){return e!==!1},Us=function(){return typeof window<"u"},vn=function(e){return ve(e)||Re(e)},co=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xe=Array.isArray,bc=/random\([^)]+\)/g,xc=/,\s*/g,_a=/(?:-?\.?\d|\.)+/gi,uo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ts=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ho=/[+-]=-?[.\d]+/,wc=/[^,'"\[\]\s]+/gi,kc=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Vt,_s,Gs,Tt={},In={},po,fo=function(e){return(In=Sr(e,Tt))&&pt},Vs=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nn=function(e,t){return!t&&console.warn(e)},mo=function(e,t){return e&&(Tt[e]=t)&&In&&(In[e]=t)||Tt},sn=function(){return 0},Sc={suppressEvents:!0,isStart:!0,kill:!1},Mn={suppressEvents:!0,kill:!1},Cc={suppressEvents:!0},Xs={},Ci=[],bs={},go,_t={},is={},ba=30,En=[],Ks="",Js=function(e){var t=e[0],i,r;if(ei(t)||ve(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=En.length;r--&&!En[r].targetTest(t););i=En[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new qo(e[r],i)))||e.splice(r,1);return e},Gi=function(e){return e._gsap||Js(Bt(e))[0]._gsap},vo=function(e,t,i){return(i=e[t])&&ve(i)?e[t]():Ys(i)&&e.getAttribute&&e.getAttribute(t)||i},dt=function(e,t){return(e=e.split(",")).forEach(t)||e},xe=function(e){return Math.round(e*1e5)/1e5||0},ue=function(e){return Math.round(e*1e7)/1e7||0},vr=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Tc=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},qn=function(){var e=Ci.length,t=Ci.slice(0),i,r;for(bs={},Ci.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Qs=function(e){return!!(e._initted||e._startAt||e.add)},yo=function(e,t,i,r){Ci.length&&!Ie&&qn(),e.render(t,i,!!(Ie&&t<0&&Qs(e))),Ci.length&&!Ie&&qn()},_o=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wc).length<2?t:Re(e)?e.trim():e},bo=function(e){return e},Pt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pc=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Sr=function(e,t){for(var i in t)e[i]=t[i];return e},xa=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ei(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Nn=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Wr=function(e){var t=e.parent||he,i=e.keyframes?Pc(Xe(e.keyframes)):Pt;if(ct(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Ac=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},xo=function(e,t,i,r,n){var a=e[r],o;if(n)for(o=t[n];a&&a[n]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Kn=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,a=t._next;n?n._next=a:e[i]===t&&(e[i]=a),a?a._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},$c=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xs=function(e,t,i,r){return e._startAt&&(Ie?e._startAt.revert(Mn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Mc=function s(e){return!e||e._ts&&s(e.parent)},wa=function(e){return e._repeat?Cr(e._tTime,e=e.duration()+e._rDelay)*e:0},Cr=function(e,t){var i=Math.floor(e=ue(e/t));return e&&i===e?i-1:i},Hn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jn=function(e){return e._end=ue(e._start+(e._tDur/Math.abs(e._ts||e._rts||ne)||0))},Qn=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ue(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jn(e),i._dirty||Vi(i,e)),e},wo=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Hn(e.rawTime(),t),(!t._dur||pn(0,t.totalDuration(),i)-t._tTime>ne)&&t.render(i,!0)),Vi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ne}},Kt=function(e,t,i,r){return t.parent&&Ai(t),t._start=ue((ui(i)?i:i||e!==he?$t(e,i,t):e._time)+t._delay),t._end=ue(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),xo(e,t,"_first","_last",e._sort?"_start":0),ws(t)||(e._recent=t),r||wo(e,t),e._ts<0&&Qn(e,e._tTime),e},ko=function(e,t){return(Tt.ScrollTrigger||Vs("scrollTrigger",t))&&Tt.ScrollTrigger.create(t,e)},So=function(e,t,i,r,n){if(ea(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!Ie&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&go!==xt.frame)return Ci.push(e),e._lazy=[n,r],1},Ec=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ws=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Dc=function(e,t,i,r){var n=e.ratio,a=t<0||!t&&(!e._start&&Ec(e)&&!(!e._initted&&ws(e))||(e._ts<0||e._dp._ts<0)&&!ws(e))?0:1,o=e._rDelay,l=0,c,d,p;if(o&&e._repeat&&(l=pn(0,e._tDur,t),d=Cr(l,o),e._yoyo&&d&1&&(a=1-a),d!==Cr(e._tTime,o)&&(n=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==n||Ie||r||e._zTime===ne||!t&&e._zTime){if(!e._initted&&So(e,t,r,i,l))return;for(p=e._zTime,e._zTime=t||(i?ne:0),i||(i=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&xs(e,t,i,!0),e._onUpdate&&!i&&kt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&kt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ai(e,1),!i&&!Ie&&(kt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Bc=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Tr=function(e,t,i,r){var n=e._repeat,a=ue(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=n?n<0?1e10:ue(a*(n+1)+e._rDelay*n):a,o>0&&!r&&Qn(e,e._tTime=e._tDur*o),e.parent&&Jn(e),i||Vi(e.parent,e),e},ka=function(e){return e instanceof st?Vi(e):Tr(e,e._dur)},Rc={_start:0,endTime:sn,totalDuration:sn},$t=function s(e,t,i){var r=e.labels,n=e._recent||Rc,a=e.duration()>=Dt?n.endTime(!1):e._dur,o,l,c;return Re(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?n:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Xe(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Yr=function(e,t,i){var r=ui(t[1]),n=(r?2:1)+(e<2?0:1),a=t[n],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ct(l.vars.inherit)&&l.parent;a.immediateRender=ct(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[n-1]}return new Te(t[0],a,t[n+1])},Di=function(e,t){return e||e===0?t(e):t},pn=function(e,t,i){return i<e?e:i>t?t:i},Ge=function(e,t){return!Re(e)||!(t=kc.exec(e))?"":t[1]},Oc=function(e,t,i){return Di(i,function(r){return pn(e,t,r)})},ks=[].slice,Co=function(e,t){return e&&ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ei(e[0]))&&!e.nodeType&&e!==Vt},Fc=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return Re(r)&&!t||Co(r,1)?(n=i).push.apply(n,Bt(r)):i.push(r)})||i},Bt=function(e,t,i){return ce&&!t&&ce.selector?ce.selector(e):Re(e)&&!i&&(_s||!Pr())?ks.call((t||Gs).querySelectorAll(e),0):Xe(e)?Fc(e,i):Co(e)?ks.call(e,0):e?[e]:[]},Ss=function(e){return e=Bt(e)[0]||nn("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bt(t,i.querySelectorAll?i:i===e?nn("Invalid scope")||Gs.createElement("div"):e)}},To=function(e){return e.sort(function(){return .5-Math.random()})},Po=function(e){if(ve(e))return e;var t=ei(e)?e:{each:e},i=Xi(t.ease),r=t.from||0,n=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,d=r,p=r;return Re(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],p=r[1]),function(f,u,m){var h=(m||t).length,v=a[h],k,w,C,_,S,P,x,$,T;if(!v){if(T=t.grid==="auto"?0:(t.grid||[1,Dt])[1],!T){for(x=-Dt;x<(x=m[T++].getBoundingClientRect().left)&&T<h;);T<h&&T--}for(v=a[h]=[],k=l?Math.min(T,h)*d-.5:r%T,w=T===Dt?0:l?h*p/T-.5:r/T|0,x=0,$=Dt,P=0;P<h;P++)C=P%T-k,_=w-(P/T|0),v[P]=S=c?Math.abs(c==="y"?_:C):lo(C*C+_*_),S>x&&(x=S),S<$&&($=S);r==="random"&&To(v),v.max=x-$,v.min=$,v.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(T>h?h-1:c?c==="y"?h/T:T:Math.max(T,h/T))||0)*(r==="edges"?-1:1),v.b=h<0?n-h:n,v.u=Ge(t.amount||t.each)||0,i=i&&h<0?Lo(i):i}return h=(v[f]-v.min)/v.max||0,ue(v.b+(i?i(h):h)*v.v)+v.u}},Cs=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ue(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ui(i)?0:Ge(i))}},Ao=function(e,t){var i=Xe(e),r,n;return!i&&ei(e)&&(r=i=e.radius||Dt,e.values?(e=Bt(e.values),(n=!ui(e[0]))&&(r*=r)):e=Cs(e.increment)),Di(t,i?ve(e)?function(a){return n=e(a),Math.abs(n-a)<=r?n:a}:function(a){for(var o=parseFloat(n?a.x:a),l=parseFloat(n?a.y:0),c=Dt,d=0,p=e.length,f,u;p--;)n?(f=e[p].x-o,u=e[p].y-l,f=f*f+u*u):f=Math.abs(e[p]-o),f<c&&(c=f,d=p);return d=!r||c<=r?e[d]:a,n||d===a||ui(a)?d:d+Ge(a)}:Cs(e))},$o=function(e,t,i,r){return Di(Xe(e)?!t:i===!0?!!(i=0):!r,function(){return Xe(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Lc=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,a){return a(n)},r)}},zc=function(e,t){return function(i){return e(parseFloat(i))+(t||Ge(i))}},Ic=function(e,t,i){return Eo(e,t,0,1,i)},Mo=function(e,t,i){return Di(i,function(r){return e[~~t(r)]})},qc=function s(e,t,i){var r=t-e;return Xe(e)?Mo(e,s(0,e.length),t):Di(i,function(n){return(r+(n-e)%r)%r+e})},Nc=function s(e,t,i){var r=t-e,n=r*2;return Xe(e)?Mo(e,s(0,e.length-1),t):Di(i,function(a){return a=(n+(a-e)%n)%n||0,e+(a>r?n-a:a)})},an=function(e){return e.replace(bc,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(xc);return $o(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Eo=function(e,t,i,r,n){var a=t-e,o=r-i;return Di(n,function(l){return i+((l-e)/a*o||0)})},Hc=function s(e,t,i,r){var n=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!n){var a=Re(e),o={},l,c,d,p,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Xe(e)&&!Xe(t)){for(d=[],p=e.length,f=p-2,c=1;c<p;c++)d.push(s(e[c-1],e[c]));p--,n=function(m){m*=p;var h=Math.min(f,~~m);return d[h](m-h)},i=t}else r||(e=Sr(Xe(e)?[]:{},e));if(!d){for(l in t)Zs.call(o,e,l,"get",t[l]);n=function(m){return ra(m,o)||(a?e.p:e)}}}return Di(i,n)},Sa=function(e,t,i){var r=e.labels,n=Dt,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&n>(o=Math.abs(o))&&(l=a,n=o);return l},kt=function(e,t,i){var r=e.vars,n=r[t],a=ce,o=e._ctx,l,c,d;if(n)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ci.length&&qn(),o&&(ce=o),d=l?n.apply(c,l):n.call(c),ce=a,d},Lr=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ie),e.progress()<1&&kt(e,"onInterrupt"),e},pr,Do=[],Bo=function(e){if(e)if(e=!e.name&&e.default||e,Us()||e.headless){var t=e.name,i=ve(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:sn,render:ra,add:Zs,kill:nd,modifier:rd,rawVars:0},a={targetTest:0,get:0,getSetter:ia,aliases:{},register:0};if(Pr(),e!==r){if(_t[t])return;Pt(r,Pt(Nn(e,n),a)),Sr(r.prototype,Sr(n,Nn(e,a))),_t[r.prop=t]=r,e.targetTest&&(En.push(r),Xs[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mo(t,r),e.register&&e.register(pt,r,ut)}else Do.push(e)},re=255,zr={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},rs=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*re+.5|0},Ro=function(e,t,i){var r=e?ui(e)?[e>>16,e>>8&re,e&re]:0:zr.black,n,a,o,l,c,d,p,f,u,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zr[e])r=zr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+n+n+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&re,r&re,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&re,e&re]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(_a),!t)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(c+1):d+c-d*c,n=d*2-a,r.length>3&&(r[3]*=1),r[0]=rs(l+1/3,n,a),r[1]=rs(l,n,a),r[2]=rs(l-1/3,n,a);else if(~e.indexOf("="))return r=e.match(uo),i&&r.length<4&&(r[3]=1),r}else r=e.match(_a)||zr.transparent;r=r.map(Number)}return t&&!m&&(n=r[0]/re,a=r[1]/re,o=r[2]/re,p=Math.max(n,a,o),f=Math.min(n,a,o),d=(p+f)/2,p===f?l=c=0:(u=p-f,c=d>.5?u/(2-p-f):u/(p+f),l=p===n?(a-o)/u+(a<o?6:0):p===a?(o-n)/u+2:(n-a)/u+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},Oo=function(e){var t=[],i=[],r=-1;return e.split(Ti).forEach(function(n){var a=n.match(hr)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Ca=function(e,t,i){var r="",n=(e+r).match(Ti),a=t?"hsla(":"rgba(",o=0,l,c,d,p;if(!n)return e;if(n=n.map(function(f){return(f=Ro(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(d=Oo(e),l=i.c,l.join(r)!==d.c.join(r)))for(c=e.replace(Ti,"1").split(hr),p=c.length-1;o<p;o++)r+=c[o]+(~l.indexOf(o)?n.shift()||a+"0,0,0,0)":(d.length?d:n.length?n:i).shift());if(!c)for(c=e.split(Ti),p=c.length-1;o<p;o++)r+=c[o]+n[o];return r+c[p]},Ti=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zr)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),jc=/hsl[a]?\(/,Fo=function(e){var t=e.join(" "),i;if(Ti.lastIndex=0,Ti.test(t))return i=jc.test(t),e[1]=Ca(e[1],i),e[0]=Ca(e[0],i,Oo(e[1])),!0},on,xt=(function(){var s=Date.now,e=500,t=33,i=s(),r=i,n=1e3/240,a=n,o=[],l,c,d,p,f,u,m=function h(v){var k=s()-r,w=v===!0,C,_,S,P;if((k>e||k<0)&&(i+=k-t),r+=k,S=r-i,C=S-a,(C>0||w)&&(P=++p.frame,f=S-p.time*1e3,p.time=S=S/1e3,a+=C+(C>=n?4:n-C),_=1),w||(l=c(h)),_)for(u=0;u<o.length;u++)o[u](S,f,P,v)};return p={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(v){return f/(1e3/(v||60))},wake:function(){po&&(!_s&&Us()&&(Vt=_s=window,Gs=Vt.document||{},Tt.gsap=pt,(Vt.gsapVersions||(Vt.gsapVersions=[])).push(pt.version),fo(In||Vt.GreenSockGlobals||!Vt.gsap&&Vt||{}),Do.forEach(Bo)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&p.sleep(),c=d||function(v){return setTimeout(v,a-p.time*1e3+1|0)},on=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),on=0,c=sn},lagSmoothing:function(v,k){e=v||1/0,t=Math.min(k||33,e)},fps:function(v){n=1e3/(v||240),a=p.time*1e3+n},add:function(v,k,w){var C=k?function(_,S,P,x){v(_,S,P,x),p.remove(C)}:v;return p.remove(v),o[w?"unshift":"push"](C),Pr(),C},remove:function(v,k){~(k=o.indexOf(v))&&o.splice(k,1)&&u>=k&&u--},_listeners:o},p})(),Pr=function(){return!on&&xt.wake()},X={},Wc=/^[\d.\-M][\d.\-,\s]/,Yc=/["']/g,Uc=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,a=i.length,o,l,c;n<a;n++)l=i[n],o=n!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(Yc,"").trim():+c,r=l.substr(o+1).trim();return t},Gc=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Vc=function(e){var t=(e+"").split("("),i=X[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Uc(t[1])]:Gc(e).split(",").map(_o)):X._CE&&Wc.test(e)?X._CE("",e):i},Lo=function(e){return function(t){return 1-e(1-t)}},zo=function s(e,t){for(var i=e._first,r;i;)i instanceof st?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Xi=function(e,t){return e&&(ve(e)?e:X[e]||Vc(e))||t},rr=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},a;return dt(e,function(o){X[o]=Tt[o]=n,X[a=o.toLowerCase()]=i;for(var l in n)X[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=X[o+"."+l]=n[l]}),n},Io=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ns=function s(e,t,i){var r=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),a=n/ys*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*_c((d-a)*n)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Io(o);return n=ys/n,l.config=function(c,d){return s(e,c,d)},l},ss=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:Io(i);return r.config=function(n){return s(e,n)},r};dt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;rr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});X.Linear.easeNone=X.none=X.Linear.easeIn;rr("Elastic",ns("in"),ns("out"),ns());(function(s,e){var t=1/e,i=2*t,r=2.5*t,n=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<r?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};rr("Bounce",function(a){return 1-n(1-a)},n)})(7.5625,2.75);rr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rr("Circ",function(s){return-(lo(1-s*s)-1)});rr("Sine",function(s){return s===1?1:-yc(s*gc)+1});rr("Back",ss("in"),ss("out"),ss());X.SteppedEase=X.steps=Tt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,a=1-ne;return function(o){return((r*pn(0,a,o)|0)+n)*i}}};kr.ease=X["quad.out"];dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ks+=s+","+s+"Params,"});var qo=function(e,t){this.id=vc++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vo,this.set=t?t.getSetter:ia},ln=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tr(this,+t.duration,1,1),this.data=t.data,ce&&(this._ctx=ce,ce.data.push(this)),on||xt.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Tr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Qn(this,i),!n._dp||n.parent||wo(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Kt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ne||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),yo(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+wa(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+wa(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Cr(this._tTime,n)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Hn(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ne?0:this._rts,this.totalTime(pn(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),Jn(this),$c(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ue(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Kt(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ct(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hn(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Cc);var r=Ie;return Ie=i,Qs(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ie=r,this},e.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ka(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ka(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime($t(this,i),ct(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ct(r)),this._dur||(this._zTime=-ne),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ne:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-ne)},e.eventCallback=function(i,r,n){var a=this.vars;return arguments.length>1?(r?(a[i]=r,n&&(a[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,n=r._prom;return new Promise(function(a){var o=ve(i)?i:bo,l=function(){var d=r.then;r.then=null,n&&n(),ve(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),a(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Lr(this)},s})();Pt(ln.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var st=(function(s){oo(e,s);function e(i,r){var n;return i===void 0&&(i={}),n=s.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=ct(i.sortChildren),he&&Kt(i.parent||he,ai(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&ko(ai(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(r,n,a){return Yr(0,arguments,this),this},t.from=function(r,n,a){return Yr(1,arguments,this),this},t.fromTo=function(r,n,a,o){return Yr(2,arguments,this),this},t.set=function(r,n,a){return n.duration=0,n.parent=this,Wr(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new Te(r,n,$t(this,a),1),this},t.call=function(r,n,a){return Kt(this,Te.delayedCall(0,r,n),a)},t.staggerTo=function(r,n,a,o,l,c,d){return a.duration=n,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new Te(r,a,$t(this,l)),this},t.staggerFrom=function(r,n,a,o,l,c,d){return a.runBackwards=1,Wr(a).immediateRender=ct(a.immediateRender),this.staggerTo(r,n,a,o,l,c,d)},t.staggerFromTo=function(r,n,a,o,l,c,d,p){return o.startAt=a,Wr(o).immediateRender=ct(o.immediateRender),this.staggerTo(r,n,o,l,c,d,p)},t.render=function(r,n,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:ue(r),p=this._zTime<0!=r<0&&(this._initted||!c),f,u,m,h,v,k,w,C,_,S,P,x;if(this!==he&&d>l&&r>=0&&(d=l),d!==this._tTime||a||p){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),f=d,_=this._start,C=this._ts,k=!C,p&&(c||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,v=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(v*100+r,n,a);if(f=ue(d%v),d===l?(h=this._repeat,f=c):(S=ue(d/v),h=~~S,h&&h===S&&(f=c,h--),f>c&&(f=c)),S=Cr(this._tTime,v),!o&&this._tTime&&S!==h&&this._tTime-S*v-this._dur<=0&&(S=h),P&&h&1&&(f=c-f,x=1),h!==S&&!this._lock){var $=P&&S&1,T=$===(P&&h&1);if(h<S&&($=!$),o=$?0:d%c?c:d,this._lock=1,this.render(o||(x?0:ue(h*v)),n,!c)._lock=0,this._tTime=d,!n&&this.parent&&kt(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=h),o&&o!==this._time||k!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=$?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!k)return this;zo(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Bc(this,ue(o),ue(f)),w&&(d-=f-(f=w._start))),this._tTime=d,this._time=f,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&c&&!n&&!S&&(kt(this,"onStart"),this._tTime!==d))return this;if(f>=o&&r>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&w!==u){if(u.parent!==this)return this.render(r,n,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,n,a),f!==this._time||!this._ts&&!k){w=0,m&&(d+=this._zTime=-ne);break}}u=m}else{u=this._last;for(var A=r<0?r:f;u;){if(m=u._prev,(u._act||A<=u._end)&&u._ts&&w!==u){if(u.parent!==this)return this.render(r,n,a);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,n,a||Ie&&Qs(u)),f!==this._time||!this._ts&&!k){w=0,m&&(d+=this._zTime=A?-ne:ne);break}}u=m}}if(w&&!n&&(this.pause(),w.render(f>=o?0:-ne)._zTime=f>=o?1:-1,this._ts))return this._start=_,Jn(this),this.render(r,n,a);this._onUpdate&&!n&&kt(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(_===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ai(this,1),!n&&!(r<0&&!o)&&(d||o||!l)&&(kt(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var a=this;if(ui(n)||(n=$t(this,n,r)),!(r instanceof ln)){if(Xe(r))return r.forEach(function(o){return a.add(o,n)}),this;if(Re(r))return this.addLabel(r,n);if(ve(r))r=Te.delayedCall(0,r);else return this}return this!==r?Kt(this,r,n):this},t.getChildren=function(r,n,a,o){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),o===void 0&&(o=-Dt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Te?n&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,n,a)))),c=c._next;return l},t.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},t.remove=function(r){return Re(r)?this.removeLabel(r):ve(r)?this.killTweensOf(r):(r.parent===this&&Kn(this,r),r===this._recent&&(this._recent=this._last),Vi(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(xt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=$t(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,a){var o=Te.delayedCall(0,n||sn,a);return o.data="isPause",this._hasPause=1,Kt(this,o,$t(this,r))},t.removePause=function(r){var n=this._first;for(r=$t(this,r);n;)n._start===r&&n.data==="isPause"&&Ai(n),n=n._next},t.killTweensOf=function(r,n,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)bi!==o[l]&&o[l].kill(r,n);return this},t.getTweensOf=function(r,n){for(var a=[],o=Bt(r),l=this._first,c=ui(n),d;l;)l instanceof Te?Tc(l._targets,o)&&(c?(!bi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&a.push(l):(d=l.getTweensOf(o,n)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(r,n){n=n||{};var a=this,o=$t(a,r),l=n,c=l.startAt,d=l.onStart,p=l.onStartParams,f=l.immediateRender,u,m=Te.to(a,Pt({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!u){var v=n.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==v&&Tr(m,v,0,1).render(m._time,!0,!0),u=1}d&&d.apply(m,p||[])}},n));return f?m.render(0):m},t.tweenFromTo=function(r,n,a){return this.tweenTo(n,Pt({startAt:{time:$t(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Sa(this,$t(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Sa(this,$t(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ne)},t.shiftChildren=function(r,n,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=ue(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(n)for(c in l)l[c]>=a&&(l[c]+=r);return Vi(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vi(this)},t.totalDuration=function(r){var n=0,a=this,o=a._last,l=Dt,c,d,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(p=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Kt(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(n-=d,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=ue(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>n&&o._ts&&(n=o._end),o=c;Tr(a,a===he&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(he._ts&&(yo(he,Hn(r,he)),go=xt.frame),xt.frame>=ba){ba+=Ct.autoSleep||120;var n=he._first;if((!n||!n._ts)&&Ct.autoSleep&&xt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||xt.sleep()}}},e})(ln);Pt(st.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xc=function(e,t,i,r,n,a,o){var l=new ut(this._pt,e,t,0,1,Uo,null,n),c=0,d=0,p,f,u,m,h,v,k,w;for(l.b=i,l.e=r,i+="",r+="",(k=~r.indexOf("random("))&&(r=an(r)),a&&(w=[i,r],a(w,e,t),i=w[0],r=w[1]),f=i.match(ts)||[];p=ts.exec(r);)m=p[0],h=r.substring(c,p.index),u?u=(u+1)%5:h.substr(-5)==="rgba("&&(u=1),m!==f[d++]&&(v=parseFloat(f[d-1])||0,l._pt={_next:l._pt,p:h||d===1?h:",",s:v,c:m.charAt(1)==="="?vr(v,m)-v:parseFloat(m)-v,m:u&&u<4?Math.round:0},c=ts.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(ho.test(r)||k)&&(l.e=0),this._pt=l,l},Zs=function(e,t,i,r,n,a,o,l,c,d){ve(r)&&(r=r(n||0,e,a));var p=e[t],f=i!=="get"?i:ve(p)?c?e[t.indexOf("set")||!ve(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():p,u=ve(p)?c?ed:Wo:ta,m;if(Re(r)&&(~r.indexOf("random(")&&(r=an(r)),r.charAt(1)==="="&&(m=vr(f,r)+(Ge(f)||0),(m||m===0)&&(r=m))),!d||f!==r||Ts)return!isNaN(f*r)&&r!==""?(m=new ut(this._pt,e,t,+f||0,r-(f||0),typeof p=="boolean"?id:Yo,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!p&&!(t in e)&&Vs(t,r),Xc.call(this,e,t,f,r,u,l||Ct.stringFilter,c))},Kc=function(e,t,i,r,n){if(ve(e)&&(e=Ur(e,n,t,i,r)),!ei(e)||e.style&&e.nodeType||Xe(e)||co(e))return Re(e)?Ur(e,n,t,i,r):e;var a={},o;for(o in e)a[o]=Ur(e[o],n,t,i,r);return a},No=function(e,t,i,r,n,a){var o,l,c,d;if(_t[e]&&(o=new _t[e]).init(n,o.rawVars?t[e]:Kc(t[e],r,n,a,i),i,r,a)!==!1&&(i._pt=l=new ut(i._pt,n,e,0,1,o.render,o,0,o.priority),i!==pr))for(c=i._ptLookup[i._targets.indexOf(n)],d=o._props.length;d--;)c[o._props[d]]=l;return o},bi,Ts,ea=function s(e,t,i){var r=e.vars,n=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,p=r.yoyoEase,f=r.keyframes,u=r.autoRevert,m=e._dur,h=e._startAt,v=e._targets,k=e.parent,w=k&&k.data==="nested"?k.vars.targets:v,C=e._overwrite==="auto"&&!Ws,_=e.timeline,S,P,x,$,T,A,F,M,U,j,K,G,O;if(_&&(!f||!n)&&(n="none"),e._ease=Xi(n,kr.ease),e._yEase=p?Lo(Xi(p===!0?n:p,kr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!_&&!!r.runBackwards,!_||f&&!r.stagger){if(M=v[0]?Gi(v[0]).harness:0,G=M&&r[M.prop],S=Nn(r,Xs),h&&(h._zTime<0&&h.progress(1),t<0&&d&&o&&!u?h.render(-1,!0):h.revert(d&&m?Mn:Sc),h._lazy=0),a){if(Ai(e._startAt=Te.set(v,Pt({data:"isStart",overwrite:!1,parent:k,immediateRender:!0,lazy:!h&&ct(l),startAt:null,delay:0,onUpdate:c&&function(){return kt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ie||!o&&!u)&&e._startAt.revert(Mn),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&m&&!h){if(t&&(o=!1),x=Pt({overwrite:!1,data:"isFromStart",lazy:o&&!h&&ct(l),immediateRender:o,stagger:0,parent:k},S),G&&(x[M.prop]=G),Ai(e._startAt=Te.set(v,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ie?e._startAt.revert(Mn):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ne,ne);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ct(l)||l&&!m,P=0;P<v.length;P++){if(T=v[P],F=T._gsap||Js(v)[P]._gsap,e._ptLookup[P]=j={},bs[F.id]&&Ci.length&&qn(),K=w===v?P:w.indexOf(T),M&&(U=new M).init(T,G||S,e,K,w)!==!1&&(e._pt=$=new ut(e._pt,T,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Q){j[Q]=$}),U.priority&&(A=1)),!M||G)for(x in S)_t[x]&&(U=No(x,S,e,K,T,w))?U.priority&&(A=1):j[x]=$=Zs.call(e,T,x,"get",S[x],K,w,0,r.stringFilter);e._op&&e._op[P]&&e.kill(T,e._op[P]),C&&e._pt&&(bi=e,he.killTweensOf(T,j,e.globalTime(t)),O=!e.parent,bi=0),e._pt&&l&&(bs[F.id]=1)}A&&Go(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&_.render(Dt,!0,!0)},Jc=function(e,t,i,r,n,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,p,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(d=f[u][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Ts=1,e.vars[t]="+=0",ea(e,o),Ts=0,l?nn(t+" not eligible for reset"):1;c.push(d)}for(u=c.length;u--;)p=c[u],d=p._pt||p,d.s=(r||r===0)&&!n?r:d.s+(r||0)+a*d.c,d.c=i-d.s,p.e&&(p.e=xe(i)+Ge(p.e)),p.b&&(p.b=d.s+Ge(p.b))},Qc=function(e,t){var i=e[0]?Gi(e[0]).harness:0,r=i&&i.aliases,n,a,o,l;if(!r)return t;n=Sr({},t);for(a in r)if(a in n)for(l=r[a].split(","),o=l.length;o--;)n[l[o]]=n[a];return n},Zc=function(e,t,i,r){var n=t.ease||r||"power1.inOut",a,o;if(Xe(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:n})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:n})},Ur=function(e,t,i,r,n){return ve(e)?e.call(t,i,r,n):Re(e)&&~e.indexOf("random(")?an(e):e},Ho=Ks+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jo={};dt(Ho+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jo[s]=1});var Te=(function(s){oo(e,s);function e(i,r,n,a){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=s.call(this,a?r:Wr(r))||this;var l=o.vars,c=l.duration,d=l.delay,p=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,h=l.defaults,v=l.scrollTrigger,k=l.yoyoEase,w=r.parent||he,C=(Xe(i)||co(i)?ui(i[0]):"length"in r)?[i]:Bt(i),_,S,P,x,$,T,A,F;if(o._targets=C.length?Js(C):nn("GSAP target "+i+" not found. https://gsap.com",!Ct.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||f||vn(c)||vn(d)){if(r=o.vars,_=o.timeline=new st({data:"nested",defaults:h||{},targets:w&&w.data==="nested"?w.vars.targets:C}),_.kill(),_.parent=_._dp=ai(o),_._start=0,f||vn(c)||vn(d)){if(x=C.length,A=f&&Po(f),ei(f))for($ in f)~Ho.indexOf($)&&(F||(F={}),F[$]=f[$]);for(S=0;S<x;S++)P=Nn(r,jo),P.stagger=0,k&&(P.yoyoEase=k),F&&Sr(P,F),T=C[S],P.duration=+Ur(c,ai(o),S,T,C),P.delay=(+Ur(d,ai(o),S,T,C)||0)-o._delay,!f&&x===1&&P.delay&&(o._delay=d=P.delay,o._start+=d,P.delay=0),_.to(T,P,A?A(S,T,C):0),_._ease=X.none;_.duration()?c=d=0:o.timeline=0}else if(m){Wr(Pt(_.vars.defaults,{ease:"none"})),_._ease=Xi(m.ease||r.ease||"none");var M=0,U,j,K;if(Xe(m))m.forEach(function(G){return _.to(C,G,">")}),_.duration();else{P={};for($ in m)$==="ease"||$==="easeEach"||Zc($,m[$],P,m.easeEach);for($ in P)for(U=P[$].sort(function(G,O){return G.t-O.t}),M=0,S=0;S<U.length;S++)j=U[S],K={ease:j.e,duration:(j.t-(S?U[S-1].t:0))/100*c},K[$]=j.v,_.to(C,K,M),M+=K.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||o.duration(c=_.duration())}else o.timeline=0;return u===!0&&!Ws&&(bi=ai(o),he.killTweensOf(C),bi=0),Kt(w,ai(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(p||!c&&!m&&o._start===ue(w._time)&&ct(p)&&Mc(ai(o))&&w.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-d)||0)),v&&ko(ai(o),v),o}var t=e.prototype;return t.render=function(r,n,a){var o=this._time,l=this._tDur,c=this._dur,d=r<0,p=r>l-ne&&!d?l:r<ne?0:r,f,u,m,h,v,k,w,C,_;if(!c)Dc(this,r,n,a);else if(p!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(f=p,C=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(h*100+r,n,a);if(f=ue(p%h),p===l?(m=this._repeat,f=c):(v=ue(p/h),m=~~v,m&&m===v?(f=c,m--):f>c&&(f=c)),k=this._yoyo&&m&1,k&&(_=this._yEase,f=c-f),v=Cr(this._tTime,h),f===o&&!a&&this._initted&&m===v)return this._tTime=p,this;m!==v&&(C&&this._yEase&&zo(C,k),this.vars.repeatRefresh&&!k&&!this._lock&&f!==h&&this._initted&&(this._lock=a=1,this.render(ue(h*m),!0).invalidate()._lock=0))}if(!this._initted){if(So(this,d?r:f,a,n,p))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==v))return this;if(c!==this._dur)return this.render(r,n,a)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(_||this._ease)(f/c),this._from&&(this.ratio=w=1-w),!o&&p&&!n&&!v&&(kt(this,"onStart"),this._tTime!==p))return this;for(u=this._pt;u;)u.r(w,u.d),u=u._next;C&&C.render(r<0?r:C._dur*C._ease(f/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(d&&xs(this,r,n,a),kt(this,"onUpdate")),this._repeat&&m!==v&&this.vars.onRepeat&&!n&&this.parent&&kt(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&xs(this,r,!0,!0),(r||!c)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Ai(this,1),!n&&!(d&&!o)&&(p||o||k)&&(kt(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,a,o,l){on||xt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||ea(this,c),d=this._ease(c/this._dur),Jc(this,r,n,a,o,d,c,l)?this.resetTo(r,n,a,o,1):(Qn(this,0),this.parent||xo(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Lr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ie),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,bi&&bi.vars.overwrite!==!0)._first||Lr(this),this.parent&&a!==this.timeline.totalDuration()&&Tr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Bt(r):o,c=this._ptLookup,d=this._pt,p,f,u,m,h,v,k;if((!n||n==="all")&&Ac(o,l))return n==="all"&&(this._pt=0),Lr(this);for(p=this._op=this._op||[],n!=="all"&&(Re(n)&&(h={},dt(n,function(w){return h[w]=1}),n=h),n=Qc(o,n)),k=o.length;k--;)if(~l.indexOf(o[k])){f=c[k],n==="all"?(p[k]=n,m=f,u={}):(u=p[k]=p[k]||{},m=n);for(h in m)v=f&&f[h],v&&((!("kill"in v.d)||v.d.kill(h)===!0)&&Kn(this,v,"_pt"),delete f[h]),u!=="all"&&(u[h]=1)}return this._initted&&!this._pt&&d&&Lr(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return Yr(1,arguments)},e.delayedCall=function(r,n,a,o){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,n,a){return Yr(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,a){return he.killTweensOf(r,n,a)},e})(ln);Pt(Te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});dt("staggerTo,staggerFrom,staggerFromTo",function(s){Te[s]=function(){var e=new st,t=ks.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ta=function(e,t,i){return e[t]=i},Wo=function(e,t,i){return e[t](i)},ed=function(e,t,i,r){return e[t](r.fp,i)},td=function(e,t,i){return e.setAttribute(t,i)},ia=function(e,t){return ve(e[t])?Wo:Ys(e[t])&&e.setAttribute?td:ta},Yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},id=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Uo=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ra=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},rd=function(e,t,i,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(e,t,i),n=a},nd=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Kn(this,t,"_pt"):t.dep||(i=1),t=r;return!i},sd=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Go=function(e){for(var t=e._pt,i,r,n,a;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=n},ut=(function(){function s(t,i,r,n,a,o,l,c,d){this.t=i,this.s=n,this.c=a,this.p=r,this.r=o||Yo,this.d=l||this,this.set=c||ta,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=sd,this.m=i,this.mt=n,this.tween=r},s})();dt(Ks+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Xs[s]=1});Tt.TweenMax=Tt.TweenLite=Te;Tt.TimelineLite=Tt.TimelineMax=st;he=new st({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ct.stringFilter=Fo;var Ki=[],Dn={},ad=[],Ta=0,od=0,as=function(e){return(Dn[e]||ad).map(function(t){return t()})},Ps=function(){var e=Date.now(),t=[];e-Ta>2&&(as("matchMediaInit"),Ki.forEach(function(i){var r=i.queries,n=i.conditions,a,o,l,c;for(o in r)a=Vt.matchMedia(r[o]).matches,a&&(l=1),a!==n[o]&&(n[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),as("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ta=e,as("matchMedia"))},Vo=(function(){function s(t,i){this.selector=i&&Ss(i),this.data=[],this._r=[],this.isReverted=!1,this.id=od++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,r,n){ve(i)&&(n=r,r=i,i=ve);var a=this,o=function(){var c=ce,d=a.selector,p;return c&&c!==a&&c.data.push(a),n&&(a.selector=Ss(n)),ce=a,p=r.apply(a,arguments),ve(p)&&a._r.push(p),ce=c,a.selector=d,a.isReverted=!1,p};return a.last=o,i===ve?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ce;ce=null,i(this),ce=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof s?i.push.apply(i,r.getTweens()):r instanceof Te&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var n=this;if(i?(function(){for(var o=n.getTweens(),l=n.data.length,c;l--;)c=n.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=n.data.length;l--;)c=n.data[l],c instanceof st?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Te)&&c.revert&&c.revert(i);n._r.forEach(function(d){return d(i,n)}),n.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ki.length;a--;)Ki[a].id===this.id&&Ki.splice(a,1)},e.revert=function(i){this.kill(i||{})},s})(),ld=(function(){function s(t){this.contexts=[],this.scope=t,ce&&ce.data.push(this)}var e=s.prototype;return e.add=function(i,r,n){ei(i)||(i={matches:i});var a=new Vo(0,n||this.scope),o=a.conditions={},l,c,d;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?d=1:(l=Vt.matchMedia(i[c]),l&&(Ki.indexOf(a)<0&&Ki.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Ps):l.addEventListener("change",Ps)));return d&&r(a,function(p){return a.add(null,p)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},s})(),jn={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Bo(r)})},timeline:function(e){return new st(e)},getTweensOf:function(e,t){return he.getTweensOf(e,t)},getProperty:function(e,t,i,r){Re(e)&&(e=Bt(e)[0]);var n=Gi(e||{}).get,a=i?bo:_o;return i==="native"&&(i=""),e&&(t?a((_t[t]&&_t[t].get||n)(e,t,i,r)):function(o,l,c){return a((_t[o]&&_t[o].get||n)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bt(e),e.length>1){var r=e.map(function(d){return pt.quickSetter(d,t,i)}),n=r.length;return function(d){for(var p=n;p--;)r[p](d)}}e=e[0]||{};var a=_t[t],o=Gi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(d){var p=new a;pr._pt=0,p.init(e,i?d+i:d,pr,0,[e]),p.render(1,p),pr._pt&&ra(1,pr)}:o.set(e,l);return a?c:function(d){return c(e,l,i?d+i:d,o,1)}},quickTo:function(e,t,i){var r,n=pt.to(e,Pt((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,d){return n.resetTo(t,l,c,d)};return a.tween=n,a},isTweening:function(e){return he.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xi(e.ease,kr.ease)),xa(kr,e||{})},config:function(e){return xa(Ct,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!_t[o]&&!Tt[o]&&nn(t+" effect requires "+o+" plugin.")}),is[t]=function(o,l,c){return i(Bt(o),Pt(l||{},n),c)},a&&(st.prototype[t]=function(o,l,c){return this.add(is[t](o,ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){X[e]=Xi(t)},parseEase:function(e,t){return arguments.length?Xi(e,t):X},getById:function(e){return he.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new st(e),r,n;for(i.smoothChildTiming=ct(e.smoothChildTiming),he.remove(i),i._dp=0,i._time=i._tTime=he._time,r=he._first;r;)n=r._next,(t||!(!r._dur&&r instanceof Te&&r.vars.onComplete===r._targets[0]))&&Kt(i,r,r._start-r._delay),r=n;return Kt(he,i,0),i},context:function(e,t){return e?new Vo(e,t):ce},matchMedia:function(e){return new ld(e)},matchMediaRefresh:function(){return Ki.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ps()},addEventListener:function(e,t){var i=Dn[e]||(Dn[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Dn[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:qc,wrapYoyo:Nc,distribute:Po,random:$o,snap:Ao,normalize:Ic,getUnit:Ge,clamp:Oc,splitColor:Ro,toArray:Bt,selector:Ss,mapRange:Eo,pipe:Lc,unitize:zc,interpolate:Hc,shuffle:To},install:fo,effects:is,ticker:xt,updateRoot:st.updateRoot,plugins:_t,globalTimeline:he,core:{PropTween:ut,globals:mo,Tween:Te,Timeline:st,Animation:ln,getCache:Gi,_removeLinkedListItem:Kn,reverting:function(){return Ie},context:function(e){return e&&ce&&(ce.data.push(e),e._ctx=ce),ce},suppressOverwrites:function(e){return Ws=e}}};dt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return jn[s]=Te[s]});xt.add(st.updateRoot);pr=jn.to({},{duration:0});var cd=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},dd=function(e,t){var i=e._targets,r,n,a;for(r in t)for(n=i.length;n--;)a=e._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=cd(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[n],r))},os=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,n,a){a._onInit=function(o){var l,c;if(Re(n)&&(l={},dt(n,function(d){return l[d]=1}),n=l),t){l={};for(c in n)l[c]=t(n[c]);n=l}dd(o,n)}}}},pt=jn.registerPlugin({name:"attr",init:function(e,t,i,r,n){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,n,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ie?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},os("roundProps",Cs),os("modifiers"),os("snap",Ao))||jn;Te.version=st.version=pt.version="3.14.2";po=1;Us()&&Pr();X.Power0;X.Power1;X.Power2;X.Power3;X.Power4;X.Linear;X.Quad;X.Cubic;X.Quart;X.Quint;X.Strong;X.Elastic;X.Back;X.SteppedEase;X.Bounce;X.Sine;X.Expo;X.Circ;var Pa,xi,yr,na,Yi,Aa,sa,ud=function(){return typeof window<"u"},hi={},Ni=180/Math.PI,_r=Math.PI/180,or=Math.atan2,$a=1e8,aa=/([A-Z])/g,hd=/(left|right|width|margin|padding|x)/i,pd=/[\s,\(]\S/,Jt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},As=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fd=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},md=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gd=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vd=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Xo=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ko=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yd=function(e,t,i){return e.style[t]=i},_d=function(e,t,i){return e.style.setProperty(t,i)},bd=function(e,t,i){return e._gsap[t]=i},xd=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},wd=function(e,t,i,r,n){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(n,a)},kd=function(e,t,i,r,n){var a=e._gsap;a[t]=i,a.renderTransform(n,a)},pe="transform",ht=pe+"Origin",Sd=function s(e,t){var i=this,r=this.target,n=r.style,a=r._gsap;if(e in hi&&n){if(this.tfm=this.tfm||{},e!=="transform")e=Jt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=oi(r,o)}):this.tfm[e]=a.x?a[e]:oi(r,e),e===ht&&(this.tfm.zOrigin=a.zOrigin);else return Jt.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(pe)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ht,t,"")),e=pe}(n||t)&&this.props.push(e,t,n[e])},Jo=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cd=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,a;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(aa,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=sa(),(!n||!n.isStart)&&!i[pe]&&(Jo(i),r.zOrigin&&i[ht]&&(i[ht]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Qo=function(e,t){var i={target:e,props:[],revert:Cd,save:Sd};return e._gsap||pt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Zo,$s=function(e,t){var i=xi.createElementNS?xi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xi.createElement(e);return i&&i.style?i:xi.createElement(e)},St=function s(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(aa,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&s(e,Ar(t)||t,1)||""},Ma="O,Moz,ms,Ms,Webkit".split(","),Ar=function(e,t,i){var r=t||Yi,n=r.style,a=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ma[a]+e in n););return a<0?null:(a===3?"ms":a>=0?Ma[a]:"")+e},Ms=function(){ud()&&window.document&&(Pa=window,xi=Pa.document,yr=xi.documentElement,Yi=$s("div")||{style:{}},$s("div"),pe=Ar(pe),ht=pe+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zo=!!Ar("perspective"),sa=pt.core.reverting,na=1)},Ea=function(e){var t=e.ownerSVGElement,i=$s("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",i.appendChild(r),yr.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),yr.removeChild(i),n},Da=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},el=function(e){var t,i;try{t=e.getBBox()}catch{t=Ea(e),i=1}return t&&(t.width||t.height)||i||(t=Ea(e)),t&&!t.width&&!t.x&&!t.y?{x:+Da(e,["x","cx","x1"])||0,y:+Da(e,["y","cy","y1"])||0,width:0,height:0}:t},tl=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&el(e))},$i=function(e,t){if(t){var i=e.style,r;t in hi&&t!==ht&&(t=pe),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(aa,"-$1").toLowerCase())):i.removeAttribute(t)}},wi=function(e,t,i,r,n,a){var o=new ut(e._pt,t,i,0,1,a?Ko:Xo);return e._pt=o,o.b=r,o.e=n,e._props.push(i),o},Ba={deg:1,rad:1,turn:1},Td={grid:1,flex:1},Mi=function s(e,t,i,r){var n=parseFloat(i)||0,a=(i+"").trim().substr((n+"").length)||"px",o=Yi.style,l=hd.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),p=100,f=r==="px",u=r==="%",m,h,v,k;if(r===a||!n||Ba[r]||Ba[a])return n;if(a!=="px"&&!f&&(n=s(e,t,i,"px")),k=e.getCTM&&tl(e),(u||a==="%")&&(hi[t]||~t.indexOf("adius")))return m=k?e.getBBox()[l?"width":"height"]:e[d],xe(u?n/m*p:n/100*m);if(o[l?"width":"height"]=p+(f?a:r),h=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,k&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===xi||!h.appendChild)&&(h=xi.body),v=h._gsap,v&&u&&v.width&&l&&v.time===xt.time&&!v.uncache)return xe(n/v.width*p);if(u&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=p+r,m=e[d],w?e.style[t]=w:$i(e,t)}else(u||a==="%")&&!Td[St(h,"display")]&&(o.position=St(e,"position")),h===e&&(o.position="static"),h.appendChild(Yi),m=Yi[d],h.removeChild(Yi),o.position="absolute";return l&&u&&(v=Gi(h),v.time=xt.time,v.width=h[d]),xe(f?m*n/p:m&&n?p/m*n:0)},oi=function(e,t,i,r){var n;return na||Ms(),t in Jt&&t!=="transform"&&(t=Jt[t],~t.indexOf(",")&&(t=t.split(",")[0])),hi[t]&&t!=="transform"?(n=dn(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:Yn(St(e,ht))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Wn[t]&&Wn[t](e,t,i)||St(e,t)||vo(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Mi(e,t,n,i)+i:n},Pd=function(e,t,i,r){if(!i||i==="none"){var n=Ar(t,e,1),a=n&&St(e,n,1);a&&a!==i?(t=n,i=a):t==="borderColor"&&(i=St(e,"borderTopColor"))}var o=new ut(this._pt,e.style,t,0,1,Uo),l=0,c=0,d,p,f,u,m,h,v,k,w,C,_,S;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=St(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(h=e.style[t],e.style[t]=r,r=St(e,t)||r,h?e.style[t]=h:$i(e,t)),d=[i,r],Fo(d),i=d[0],r=d[1],f=i.match(hr)||[],S=r.match(hr)||[],S.length){for(;p=hr.exec(r);)v=p[0],w=r.substring(l,p.index),m?m=(m+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(m=1),v!==(h=f[c++]||"")&&(u=parseFloat(h)||0,_=h.substr((u+"").length),v.charAt(1)==="="&&(v=vr(u,v)+_),k=parseFloat(v),C=v.substr((k+"").length),l=hr.lastIndex-C.length,C||(C=C||Ct.units[t]||_,l===r.length&&(r+=C,o.e+=C)),_!==C&&(u=Mi(e,t,h,C)||0),o._pt={_next:o._pt,p:w||c===1?w:",",s:u,c:k-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Ko:Xo;return ho.test(r)&&(o.e=0),this._pt=o,o},Ra={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ad=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Ra[i]||i,t[1]=Ra[r]||r,t.join(" ")},$d=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,a=i._gsap,o,l,c;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),c=n.length;--c>-1;)o=n[c],hi[o]&&(l=1,o=o==="transformOrigin"?ht:pe),$i(i,o);l&&($i(i,pe),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",dn(i,1),a.uncache=1,Jo(r)))}},Wn={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var a=e._pt=new ut(e._pt,t,i,0,0,$d);return a.u=r,a.pr=-10,a.tween=n,e._props.push(i),1}}},cn=[1,0,0,1,0,0],il={},rl=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Oa=function(e){var t=St(e,pe);return rl(t)?cn:t.substr(7).match(uo).map(xe)},oa=function(e,t){var i=e._gsap||Gi(e),r=e.style,n=Oa(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?cn:n):(n===cn&&!e.offsetParent&&e!==yr&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,yr.appendChild(e)),n=Oa(e),l?r.display=l:$i(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):yr.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Es=function(e,t,i,r,n,a){var o=e._gsap,l=n||oa(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,p=o.xOffset||0,f=o.yOffset||0,u=l[0],m=l[1],h=l[2],v=l[3],k=l[4],w=l[5],C=t.split(" "),_=parseFloat(C[0])||0,S=parseFloat(C[1])||0,P,x,$,T;i?l!==cn&&(x=u*v-m*h)&&($=_*(v/x)+S*(-h/x)+(h*w-v*k)/x,T=_*(-m/x)+S*(u/x)-(u*w-m*k)/x,_=$,S=T):(P=el(e),_=P.x+(~C[0].indexOf("%")?_/100*P.width:_),S=P.y+(~(C[1]||C[0]).indexOf("%")?S/100*P.height:S)),r||r!==!1&&o.smooth?(k=_-c,w=S-d,o.xOffset=p+(k*u+w*h)-k,o.yOffset=f+(k*m+w*v)-w):o.xOffset=o.yOffset=0,o.xOrigin=_,o.yOrigin=S,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[ht]="0px 0px",a&&(wi(a,o,"xOrigin",c,_),wi(a,o,"yOrigin",d,S),wi(a,o,"xOffset",p,o.xOffset),wi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",_+" "+S)},dn=function(e,t){var i=e._gsap||new qo(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=St(e,ht)||"0",d,p,f,u,m,h,v,k,w,C,_,S,P,x,$,T,A,F,M,U,j,K,G,O,Q,ae,g,oe,Ke,Ot,fe,Oe;return d=p=f=h=v=k=w=C=_=0,u=m=1,i.svg=!!(e.getCTM&&tl(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pe]!=="none"?l[pe]:"")),r.scale=r.rotate=r.translate="none"),x=oa(e,i.svg),i.svg&&(i.uncache?(Q=e.getBBox(),c=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Es(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,x)),S=i.xOrigin||0,P=i.yOrigin||0,x!==cn&&(F=x[0],M=x[1],U=x[2],j=x[3],d=K=x[4],p=G=x[5],x.length===6?(u=Math.sqrt(F*F+M*M),m=Math.sqrt(j*j+U*U),h=F||M?or(M,F)*Ni:0,w=U||j?or(U,j)*Ni+h:0,w&&(m*=Math.abs(Math.cos(w*_r))),i.svg&&(d-=S-(S*F+P*U),p-=P-(S*M+P*j))):(Oe=x[6],Ot=x[7],g=x[8],oe=x[9],Ke=x[10],fe=x[11],d=x[12],p=x[13],f=x[14],$=or(Oe,Ke),v=$*Ni,$&&(T=Math.cos(-$),A=Math.sin(-$),O=K*T+g*A,Q=G*T+oe*A,ae=Oe*T+Ke*A,g=K*-A+g*T,oe=G*-A+oe*T,Ke=Oe*-A+Ke*T,fe=Ot*-A+fe*T,K=O,G=Q,Oe=ae),$=or(-U,Ke),k=$*Ni,$&&(T=Math.cos(-$),A=Math.sin(-$),O=F*T-g*A,Q=M*T-oe*A,ae=U*T-Ke*A,fe=j*A+fe*T,F=O,M=Q,U=ae),$=or(M,F),h=$*Ni,$&&(T=Math.cos($),A=Math.sin($),O=F*T+M*A,Q=K*T+G*A,M=M*T-F*A,G=G*T-K*A,F=O,K=Q),v&&Math.abs(v)+Math.abs(h)>359.9&&(v=h=0,k=180-k),u=xe(Math.sqrt(F*F+M*M+U*U)),m=xe(Math.sqrt(G*G+Oe*Oe)),$=or(K,G),w=Math.abs($)>2e-4?$*Ni:0,_=fe?1/(fe<0?-fe:fe):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!rl(St(e,pe)),O&&e.setAttribute("transform",O))),Math.abs(w)>90&&Math.abs(w)<270&&(n?(u*=-1,w+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,w+=w<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=xe(u),i.scaleY=xe(m),i.rotation=xe(h)+o,i.rotationX=xe(v)+o,i.rotationY=xe(k)+o,i.skewX=w+o,i.skewY=C+o,i.transformPerspective=_+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ht]=Yn(c)),i.xOffset=i.yOffset=0,i.force3D=Ct.force3D,i.renderTransform=i.svg?Ed:Zo?nl:Md,i.uncache=0,i},Yn=function(e){return(e=e.split(" "))[0]+" "+e[1]},ls=function(e,t,i){var r=Ge(t);return xe(parseFloat(t)+parseFloat(Mi(e,"x",i+"px",r)))+r},Md=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,nl(e,t)},zi="0deg",Rr="0px",Ii=") ",nl=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,d=i.rotationY,p=i.rotationX,f=i.skewX,u=i.skewY,m=i.scaleX,h=i.scaleY,v=i.transformPerspective,k=i.force3D,w=i.target,C=i.zOrigin,_="",S=k==="auto"&&e&&e!==1||k===!0;if(C&&(p!==zi||d!==zi)){var P=parseFloat(d)*_r,x=Math.sin(P),$=Math.cos(P),T;P=parseFloat(p)*_r,T=Math.cos(P),a=ls(w,a,x*T*-C),o=ls(w,o,-Math.sin(P)*-C),l=ls(w,l,$*T*-C+C)}v!==Rr&&(_+="perspective("+v+Ii),(r||n)&&(_+="translate("+r+"%, "+n+"%) "),(S||a!==Rr||o!==Rr||l!==Rr)&&(_+=l!==Rr||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ii),c!==zi&&(_+="rotate("+c+Ii),d!==zi&&(_+="rotateY("+d+Ii),p!==zi&&(_+="rotateX("+p+Ii),(f!==zi||u!==zi)&&(_+="skew("+f+", "+u+Ii),(m!==1||h!==1)&&(_+="scale("+m+", "+h+Ii),w.style[pe]=_||"translate(0, 0)"},Ed=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,d=i.skewY,p=i.scaleX,f=i.scaleY,u=i.target,m=i.xOrigin,h=i.yOrigin,v=i.xOffset,k=i.yOffset,w=i.forceCSS,C=parseFloat(a),_=parseFloat(o),S,P,x,$,T;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=_r,c*=_r,S=Math.cos(l)*p,P=Math.sin(l)*p,x=Math.sin(l-c)*-f,$=Math.cos(l-c)*f,c&&(d*=_r,T=Math.tan(c-d),T=Math.sqrt(1+T*T),x*=T,$*=T,d&&(T=Math.tan(d),T=Math.sqrt(1+T*T),S*=T,P*=T)),S=xe(S),P=xe(P),x=xe(x),$=xe($)):(S=p,$=f,P=x=0),(C&&!~(a+"").indexOf("px")||_&&!~(o+"").indexOf("px"))&&(C=Mi(u,"x",a,"px"),_=Mi(u,"y",o,"px")),(m||h||v||k)&&(C=xe(C+m-(m*S+h*x)+v),_=xe(_+h-(m*P+h*$)+k)),(r||n)&&(T=u.getBBox(),C=xe(C+r/100*T.width),_=xe(_+n/100*T.height)),T="matrix("+S+","+P+","+x+","+$+","+C+","+_+")",u.setAttribute("transform",T),w&&(u.style[pe]=T)},Dd=function(e,t,i,r,n){var a=360,o=Re(n),l=parseFloat(n)*(o&&~n.indexOf("rad")?Ni:1),c=l-r,d=r+c+"deg",p,f;return o&&(p=n.split("_")[1],p==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),p==="cw"&&c<0?c=(c+a*$a)%a-~~(c/a)*a:p==="ccw"&&c>0&&(c=(c-a*$a)%a-~~(c/a)*a)),e._pt=f=new ut(e._pt,t,i,r,c,fd),f.e=d,f.u="deg",e._props.push(i),f},Fa=function(e,t){for(var i in t)e[i]=t[i];return e},Bd=function(e,t,i){var r=Fa({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,d,p,f,u,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[pe]=t,o=dn(i,1),$i(i,pe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[pe],a[pe]=t,o=dn(i,1),a[pe]=c);for(l in hi)c=r[l],d=o[l],c!==d&&n.indexOf(l)<0&&(u=Ge(c),m=Ge(d),p=u!==m?Mi(i,l,c,m):parseFloat(c),f=parseFloat(d),e._pt=new ut(e._pt,o,l,p,f-p,As),e._pt.u=m||0,e._props.push(l));Fa(o,r)};dt("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",r="Bottom",n="Left",a=(e<3?[t,i,r,n]:[t+n,t+i,r+i,r+n]).map(function(o){return e<2?s+o:"border"+o+s});Wn[e>1?"border"+s:s]=function(o,l,c,d,p){var f,u;if(arguments.length<4)return f=a.map(function(m){return oi(o,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(d+"").split(" "),u={},a.forEach(function(m,h){return u[m]=f[h]=f[h]||f[(h-1)/2|0]}),o.init(l,u,p)}});var sl={name:"css",register:Ms,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var a=this._props,o=e.style,l=i.vars.startAt,c,d,p,f,u,m,h,v,k,w,C,_,S,P,x,$,T;na||Ms(),this.styles=this.styles||Qo(e),$=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(d=t[h],!(_t[h]&&No(h,t,i,r,e,n)))){if(u=typeof d,m=Wn[h],u==="function"&&(d=d.call(i,r,e,n),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=an(d)),m)m(this,e,h,d,i)&&(x=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),d+="",Ti.lastIndex=0,Ti.test(c)||(v=Ge(c),k=Ge(d),k?v!==k&&(c=Mi(e,h,c,k)+k):v&&(d+=v)),this.add(o,"setProperty",c,d,r,n,0,0,h),a.push(h),$.push(h,0,o[h]);else if(u!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(i,r,e,n):l[h],Re(c)&&~c.indexOf("random(")&&(c=an(c)),Ge(c+"")||c==="auto"||(c+=Ct.units[h]||Ge(oi(e,h))||""),(c+"").charAt(1)==="="&&(c=oi(e,h))):c=oi(e,h),f=parseFloat(c),w=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),w&&(d=d.substr(2)),p=parseFloat(d),h in Jt&&(h==="autoAlpha"&&(f===1&&oi(e,"visibility")==="hidden"&&p&&(f=0),$.push("visibility",0,o.visibility),wi(this,o,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),h!=="scale"&&h!=="transform"&&(h=Jt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),C=h in hi,C){if(this.styles.save(h),T=d,u==="string"&&d.substring(0,6)==="var(--"){if(d=St(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=d,d=St(e,"perspective"),A?e.style.perspective=A:$i(e,"perspective")}p=parseFloat(d)}if(_||(S=e._gsap,S.renderTransform&&!t.parseTransform||dn(e,t.parseTransform),P=t.smoothOrigin!==!1&&S.smooth,_=this._pt=new ut(this._pt,o,pe,0,1,S.renderTransform,S,0,-1),_.dep=1),h==="scale")this._pt=new ut(this._pt,S,"scaleY",S.scaleY,(w?vr(S.scaleY,w+p):p)-S.scaleY||0,As),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){$.push(ht,0,o[ht]),d=Ad(d),S.svg?Es(e,d,0,P,0,this):(k=parseFloat(d.split(" ")[2])||0,k!==S.zOrigin&&wi(this,S,"zOrigin",S.zOrigin,k),wi(this,o,h,Yn(c),Yn(d)));continue}else if(h==="svgOrigin"){Es(e,d,1,P,0,this);continue}else if(h in il){Dd(this,S,h,f,w?vr(f,w+d):d);continue}else if(h==="smoothOrigin"){wi(this,S,"smooth",S.smooth,d);continue}else if(h==="force3D"){S[h]=d;continue}else if(h==="transform"){Bd(this,d,e);continue}}else h in o||(h=Ar(h)||h);if(C||(p||p===0)&&(f||f===0)&&!pd.test(d)&&h in o)v=(c+"").substr((f+"").length),p||(p=0),k=Ge(d)||(h in Ct.units?Ct.units[h]:v),v!==k&&(f=Mi(e,h,c,k)),this._pt=new ut(this._pt,C?S:o,h,f,(w?vr(f,w+p):p)-f,!C&&(k==="px"||h==="zIndex")&&t.autoRound!==!1?vd:As),this._pt.u=k||0,C&&T!==d?(this._pt.b=c,this._pt.e=T,this._pt.r=gd):v!==k&&k!=="%"&&(this._pt.b=c,this._pt.r=md);else if(h in o)Pd.call(this,e,h,c,w?w+d:d);else if(h in e)this.add(e,h,c||e[h],w?w+d:d,r,n);else if(h!=="parseTransform"){Vs(h,d);continue}C||(h in o?$.push(h,0,o[h]):typeof e[h]=="function"?$.push(h,2,e[h]()):$.push(h,1,c||e[h])),a.push(h)}}x&&Go(this)},render:function(e,t){if(t.tween._time||!sa())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:oi,aliases:Jt,getSetter:function(e,t,i){var r=Jt[t];return r&&r.indexOf(",")<0&&(t=r),t in hi&&t!==ht&&(e._gsap.x||oi(e,"x"))?i&&Aa===i?t==="scale"?xd:bd:(Aa=i||{})&&(t==="scale"?wd:kd):e.style&&!Ys(e.style[t])?yd:~t.indexOf("-")?_d:ia(e,t)},core:{_removeProperty:$i,_getMatrix:oa}};pt.utils.checkPrefix=Ar;pt.core.getStyleSaver=Qo;(function(s,e,t,i){var r=dt(s+","+e+","+t,function(n){hi[n]=1});dt(e,function(n){Ct.units[n]="deg",il[n]=1}),Jt[r[13]]=s+","+e,dt(i,function(n){var a=n.split(":");Jt[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ct.units[s]="px"});pt.registerPlugin(sl);var la=pt.registerPlugin(sl)||pt;la.core.Tween;function Rd(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Od(s,e,t){return e&&Rd(s.prototype,e),s}var ze,Bn,wt,ki,Si,br,al,Hi,Gr,ol,ci,Nt,ll,cl=function(){return ze||typeof window<"u"&&(ze=window.gsap)&&ze.registerPlugin&&ze},dl=1,fr=[],H=[],Zt=[],Vr=Date.now,Ds=function(e,t){return t},Fd=function(){var e=Gr.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,H),r.push.apply(r,Zt),H=i,Zt=r,Ds=function(a,o){return t[a](o)}},Pi=function(e,t){return~Zt.indexOf(e)&&Zt[Zt.indexOf(e)+1][t]},Xr=function(e){return!!~ol.indexOf(e)},tt=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:r!==!1,capture:!!n})},et=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},yn="scrollLeft",_n="scrollTop",Bs=function(){return ci&&ci.isPressed||H.cache++},Un=function(e,t){var i=function r(n){if(n||n===0){dl&&(wt.history.scrollRestoration="manual");var a=ci&&ci.isPressed;n=r.v=Math.round(n)||(ci&&ci.iOS?1:0),e(n),r.cacheID=H.cache,a&&Ds("ss",n)}else(t||H.cache!==r.cacheID||Ds("ref"))&&(r.cacheID=H.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},at={s:yn,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Un(function(s){return arguments.length?wt.scrollTo(s,$e.sc()):wt.pageXOffset||ki[yn]||Si[yn]||br[yn]||0})},$e={s:_n,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:at,sc:Un(function(s){return arguments.length?wt.scrollTo(at.sc(),s):wt.pageYOffset||ki[_n]||Si[_n]||br[_n]||0})},lt=function(e,t){return(t&&t._ctx&&t._ctx.selector||ze.utils.toArray)(e)[0]||(typeof e=="string"&&ze.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ld=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ei=function(e,t){var i=t.s,r=t.sc;Xr(e)&&(e=ki.scrollingElement||Si);var n=H.indexOf(e),a=r===$e.sc?1:2;!~n&&(n=H.push(e)-1),H[n+a]||tt(e,"scroll",Bs);var o=H[n+a],l=o||(H[n+a]=Un(Pi(e,i),!0)||(Xr(e)?r:Un(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=ze.getProperty(e,"scrollBehavior")==="smooth"),l},Rs=function(e,t,i){var r=e,n=e,a=Vr(),o=a,l=t||50,c=Math.max(500,l*3),d=function(m,h){var v=Vr();h||v-a>l?(n=r,r=m,o=a,a=v):i?r+=m:r=n+(m-n)/(v-o)*(a-o)},p=function(){n=r=i?0:r,o=a=0},f=function(m){var h=o,v=n,k=Vr();return(m||m===0)&&m!==r&&d(m),a===o||k-o>c?0:(r+(i?v:-v))/((i?k:a)-h)*1e3};return{update:d,reset:p,getVelocity:f}},Or=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},La=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ul=function(){Gr=ze.core.globals().ScrollTrigger,Gr&&Gr.core&&Fd()},hl=function(e){return ze=e||cl(),!Bn&&ze&&typeof document<"u"&&document.body&&(wt=window,ki=document,Si=ki.documentElement,br=ki.body,ol=[wt,ki,Si,br],ze.utils.clamp,ll=ze.core.context||function(){},Hi="onpointerenter"in br?"pointer":"mouse",al=we.isTouch=wt.matchMedia&&wt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nt=we.eventTypes=("ontouchstart"in Si?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Si?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dl=0},500),ul(),Bn=1),Bn};at.op=$e;H.cache=0;var we=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Bn||hl(ze)||console.warn("Please gsap.registerPlugin(Observer)"),Gr||ul();var r=i.tolerance,n=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,d=i.preventDefault,p=i.onStop,f=i.onStopDelay,u=i.ignore,m=i.wheelSpeed,h=i.event,v=i.onDragStart,k=i.onDragEnd,w=i.onDrag,C=i.onPress,_=i.onRelease,S=i.onRight,P=i.onLeft,x=i.onUp,$=i.onDown,T=i.onChangeX,A=i.onChangeY,F=i.onChange,M=i.onToggleX,U=i.onToggleY,j=i.onHover,K=i.onHoverEnd,G=i.onMove,O=i.ignoreCheck,Q=i.isNormalizer,ae=i.onGestureStart,g=i.onGestureEnd,oe=i.onWheel,Ke=i.onEnable,Ot=i.onDisable,fe=i.onClick,Oe=i.scrollSpeed,qe=i.capture,ke=i.allowClicks,Je=i.lockAxis,Ne=i.onLockAxis;this.target=o=lt(o)||Si,this.vars=i,u&&(u=ze.utils.toArray(u)),r=r||1e-9,n=n||0,m=m||1,Oe=Oe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wt.getComputedStyle(br).lineHeight)||22);var pi,Qe,Ze,J,ye,ot,ft,y=this,mt=0,ti=0,fi=i.passive||!d&&i.passive!==!1,me=Ei(o,at),ii=Ei(o,$e),mi=me(),Bi=ii(),Me=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Nt[0]==="pointerdown",gi=Xr(o),_e=o.ownerDocument||ki,Ft=[0,0,0],At=[0,0,0],ri=0,Mr=function(){return ri=Vr()},Se=function(R,Z){return(y.event=R)&&u&&Ld(R.target,u)||Z&&Me&&R.pointerType!=="touch"||O&&O(R,Z)},fn=function(){y._vx.reset(),y._vy.reset(),Qe.pause(),p&&p(y)},ni=function(){var R=y.deltaX=La(Ft),Z=y.deltaY=La(At),E=Math.abs(R)>=r,L=Math.abs(Z)>=r;F&&(E||L)&&F(y,R,Z,Ft,At),E&&(S&&y.deltaX>0&&S(y),P&&y.deltaX<0&&P(y),T&&T(y),M&&y.deltaX<0!=mt<0&&M(y),mt=y.deltaX,Ft[0]=Ft[1]=Ft[2]=0),L&&($&&y.deltaY>0&&$(y),x&&y.deltaY<0&&x(y),A&&A(y),U&&y.deltaY<0!=ti<0&&U(y),ti=y.deltaY,At[0]=At[1]=At[2]=0),(J||Ze)&&(G&&G(y),Ze&&(v&&Ze===1&&v(y),w&&w(y),Ze=0),J=!1),ot&&!(ot=!1)&&Ne&&Ne(y),ye&&(oe(y),ye=!1),pi=0},nr=function(R,Z,E){Ft[E]+=R,At[E]+=Z,y._vx.update(R),y._vy.update(Z),c?pi||(pi=requestAnimationFrame(ni)):ni()},sr=function(R,Z){Je&&!ft&&(y.axis=ft=Math.abs(R)>Math.abs(Z)?"x":"y",ot=!0),ft!=="y"&&(Ft[2]+=R,y._vx.update(R,!0)),ft!=="x"&&(At[2]+=Z,y._vy.update(Z,!0)),c?pi||(pi=requestAnimationFrame(ni)):ni()},vi=function(R){if(!Se(R,1)){R=Or(R,d);var Z=R.clientX,E=R.clientY,L=Z-y.x,B=E-y.y,z=y.isDragging;y.x=Z,y.y=E,(z||(L||B)&&(Math.abs(y.startX-Z)>=n||Math.abs(y.startY-E)>=n))&&(Ze||(Ze=z?2:1),z||(y.isDragging=!0),sr(L,B))}},Ri=y.onPress=function(I){Se(I,1)||I&&I.button||(y.axis=ft=null,Qe.pause(),y.isPressed=!0,I=Or(I),mt=ti=0,y.startX=y.x=I.clientX,y.startY=y.y=I.clientY,y._vx.reset(),y._vy.reset(),tt(Q?o:_e,Nt[1],vi,fi,!0),y.deltaX=y.deltaY=0,C&&C(y))},W=y.onRelease=function(I){if(!Se(I,1)){et(Q?o:_e,Nt[1],vi,!0);var R=!isNaN(y.y-y.startY),Z=y.isDragging,E=Z&&(Math.abs(y.x-y.startX)>3||Math.abs(y.y-y.startY)>3),L=Or(I);!E&&R&&(y._vx.reset(),y._vy.reset(),d&&ke&&ze.delayedCall(.08,function(){if(Vr()-ri>300&&!I.defaultPrevented){if(I.target.click)I.target.click();else if(_e.createEvent){var B=_e.createEvent("MouseEvents");B.initMouseEvent("click",!0,!0,wt,1,L.screenX,L.screenY,L.clientX,L.clientY,!1,!1,!1,!1,0,null),I.target.dispatchEvent(B)}}})),y.isDragging=y.isGesturing=y.isPressed=!1,p&&Z&&!Q&&Qe.restart(!0),Ze&&ni(),k&&Z&&k(y),_&&_(y,E)}},Oi=function(R){return R.touches&&R.touches.length>1&&(y.isGesturing=!0)&&ae(R,y.isDragging)},Lt=function(){return(y.isGesturing=!1)||g(y)},zt=function(R){if(!Se(R)){var Z=me(),E=ii();nr((Z-mi)*Oe,(E-Bi)*Oe,1),mi=Z,Bi=E,p&&Qe.restart(!0)}},It=function(R){if(!Se(R)){R=Or(R,d),oe&&(ye=!0);var Z=(R.deltaMode===1?l:R.deltaMode===2?wt.innerHeight:1)*m;nr(R.deltaX*Z,R.deltaY*Z,0),p&&!Q&&Qe.restart(!0)}},Fi=function(R){if(!Se(R)){var Z=R.clientX,E=R.clientY,L=Z-y.x,B=E-y.y;y.x=Z,y.y=E,J=!0,p&&Qe.restart(!0),(L||B)&&sr(L,B)}},ar=function(R){y.event=R,j(y)},si=function(R){y.event=R,K(y)},Er=function(R){return Se(R)||Or(R,d)&&fe(y)};Qe=y._dc=ze.delayedCall(f||.25,fn).pause(),y.deltaX=y.deltaY=0,y._vx=Rs(0,50,!0),y._vy=Rs(0,50,!0),y.scrollX=me,y.scrollY=ii,y.isDragging=y.isGesturing=y.isPressed=!1,ll(this),y.enable=function(I){return y.isEnabled||(tt(gi?_e:o,"scroll",Bs),a.indexOf("scroll")>=0&&tt(gi?_e:o,"scroll",zt,fi,qe),a.indexOf("wheel")>=0&&tt(o,"wheel",It,fi,qe),(a.indexOf("touch")>=0&&al||a.indexOf("pointer")>=0)&&(tt(o,Nt[0],Ri,fi,qe),tt(_e,Nt[2],W),tt(_e,Nt[3],W),ke&&tt(o,"click",Mr,!0,!0),fe&&tt(o,"click",Er),ae&&tt(_e,"gesturestart",Oi),g&&tt(_e,"gestureend",Lt),j&&tt(o,Hi+"enter",ar),K&&tt(o,Hi+"leave",si),G&&tt(o,Hi+"move",Fi)),y.isEnabled=!0,y.isDragging=y.isGesturing=y.isPressed=J=Ze=!1,y._vx.reset(),y._vy.reset(),mi=me(),Bi=ii(),I&&I.type&&Ri(I),Ke&&Ke(y)),y},y.disable=function(){y.isEnabled&&(fr.filter(function(I){return I!==y&&Xr(I.target)}).length||et(gi?_e:o,"scroll",Bs),y.isPressed&&(y._vx.reset(),y._vy.reset(),et(Q?o:_e,Nt[1],vi,!0)),et(gi?_e:o,"scroll",zt,qe),et(o,"wheel",It,qe),et(o,Nt[0],Ri,qe),et(_e,Nt[2],W),et(_e,Nt[3],W),et(o,"click",Mr,!0),et(o,"click",Er),et(_e,"gesturestart",Oi),et(_e,"gestureend",Lt),et(o,Hi+"enter",ar),et(o,Hi+"leave",si),et(o,Hi+"move",Fi),y.isEnabled=y.isPressed=y.isDragging=!1,Ot&&Ot(y))},y.kill=y.revert=function(){y.disable();var I=fr.indexOf(y);I>=0&&fr.splice(I,1),ci===y&&(ci=0)},fr.push(y),Q&&Xr(o)&&(ci=y),y.enable(h)},Od(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();we.version="3.14.2";we.create=function(s){return new we(s)};we.register=hl;we.getAll=function(){return fr.slice()};we.getById=function(s){return fr.filter(function(e){return e.vars.id===s})[0]};cl()&&ze.registerPlugin(we);var D,dr,N,se,bt,ee,ca,Gn,un,Kr,Ir,bn,Ye,Zn,Os,rt,za,Ia,ur,pl,cs,fl,it,Fs,ml,gl,_i,Ls,da,xr,ua,Jr,zs,ds,xn=1,Ue=Date.now,us=Ue(),Rt=0,qr=0,qa=function(e,t,i){var r=yt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Na=function(e,t){return t&&(!yt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},zd=function s(){return qr&&requestAnimationFrame(s)},Ha=function(){return Zn=1},ja=function(){return Zn=0},Xt=function(e){return e},Nr=function(e){return Math.round(e*1e5)/1e5||0},vl=function(){return typeof window<"u"},yl=function(){return D||vl()&&(D=window.gsap)&&D.registerPlugin&&D},er=function(e){return!!~ca.indexOf(e)},_l=function(e){return(e==="Height"?ua:N["inner"+e])||bt["client"+e]||ee["client"+e]},bl=function(e){return Pi(e,"getBoundingClientRect")||(er(e)?function(){return zn.width=N.innerWidth,zn.height=ua,zn}:function(){return li(e)})},Id=function(e,t,i){var r=i.d,n=i.d2,a=i.a;return(a=Pi(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?_l(n):e["client"+n])||0}},qd=function(e,t){return!t||~Zt.indexOf(e)?bl(e):function(){return zn}},Qt=function(e,t){var i=t.s,r=t.d2,n=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=Pi(e,i))?a()-bl(e)()[n]:er(e)?(bt[i]||ee[i])-_l(r):e[i]-e["offset"+r])},wn=function(e,t){for(var i=0;i<ur.length;i+=3)(!t||~t.indexOf(ur[i+1]))&&e(ur[i],ur[i+1],ur[i+2])},yt=function(e){return typeof e=="string"},Ve=function(e){return typeof e=="function"},Hr=function(e){return typeof e=="number"},ji=function(e){return typeof e=="object"},Fr=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},hs=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},lr=Math.abs,xl="left",wl="top",ha="right",pa="bottom",Ji="width",Qi="height",Qr="Right",Zr="Left",en="Top",tn="Bottom",Ce="padding",Mt="margin",$r="Width",fa="Height",Ae="px",Et=function(e){return N.getComputedStyle(e)},Nd=function(e){var t=Et(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Wa=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},li=function(e,t){var i=t&&Et(e)[Os]!=="matrix(1, 0, 0, 1, 0, 0)"&&D.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Vn=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},kl=function(e){var t=[],i=e.labels,r=e.duration(),n;for(n in i)t.push(i[n]/r);return t},Hd=function(e){return function(t){return D.utils.snap(kl(e),t)}},ma=function(e){var t=D.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return i?function(r,n,a){a===void 0&&(a=.001);var o;if(!n)return t(r);if(n>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,n,a){a===void 0&&(a=.001);var o=t(r);return!n||Math.abs(o-r)<a||o-r<0==n<0?o:t(n<0?r-e:r+e)}},jd=function(e){return function(t,i){return ma(kl(e))(t,i.direction)}},kn=function(e,t,i,r){return i.split(",").forEach(function(n){return e(t,n,r)})},Be=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:!r,capture:!!n})},De=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Sn=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Ya={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cn={toggleActions:"play",anticipatePin:0},Xn={top:0,left:0,center:.5,bottom:1,right:1},Rn=function(e,t){if(yt(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Xn?Xn[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tn=function(e,t,i,r,n,a,o,l){var c=n.startColor,d=n.endColor,p=n.fontSize,f=n.indent,u=n.fontWeight,m=se.createElement("div"),h=er(i)||Pi(i,"pinType")==="fixed",v=e.indexOf("scroller")!==-1,k=h?ee:i,w=e.indexOf("start")!==-1,C=w?c:d,_="border-color:"+C+";font-size:"+p+";color:"+C+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((v||l)&&h?"fixed;":"absolute;"),(v||l||!h)&&(_+=(r===$e?ha:pa)+":"+(a+parseFloat(f))+"px;"),o&&(_+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=w,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=_,m.innerText=t||t===0?e+"-"+t:e,k.children[0]?k.insertBefore(m,k.children[0]):k.appendChild(m),m._offset=m["offset"+r.op.d2],On(m,0,r,w),m},On=function(e,t,i,r){var n={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,n[i.a+"Percent"]=r?-100:0,n[i.a]=r?"1px":0,n["border"+a+$r]=1,n["border"+o+$r]=0,n[i.p]=t+"px",D.set(e,n)},q=[],Is={},hn,Ua=function(){return Ue()-Rt>34&&(hn||(hn=requestAnimationFrame(di)))},cr=function(){(!it||!it.isPressed||it.startX>ee.clientWidth)&&(H.cache++,it?hn||(hn=requestAnimationFrame(di)):di(),Rt||ir("scrollStart"),Rt=Ue())},ps=function(){gl=N.innerWidth,ml=N.innerHeight},jr=function(e){H.cache++,(e===!0||!Ye&&!fl&&!se.fullscreenElement&&!se.webkitFullscreenElement&&(!Fs||gl!==N.innerWidth||Math.abs(N.innerHeight-ml)>N.innerHeight*.25))&&Gn.restart(!0)},tr={},Wd=[],Sl=function s(){return De(Y,"scrollEnd",s)||Ui(!0)},ir=function(e){return tr[e]&&tr[e].map(function(t){return t()})||Wd},vt=[],Cl=function(e){for(var t=0;t<vt.length;t+=5)(!e||vt[t+4]&&vt[t+4].query===e)&&(vt[t].style.cssText=vt[t+1],vt[t].getBBox&&vt[t].setAttribute("transform",vt[t+2]||""),vt[t+3].uncache=1)},Tl=function(){return H.forEach(function(e){return Ve(e)&&++e.cacheID&&(e.rec=e())})},ga=function(e,t){var i;for(rt=0;rt<q.length;rt++)i=q[rt],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Jr=!0,t&&Cl(t),t||ir("revert")},Pl=function(e,t){H.cache++,(t||!nt)&&H.forEach(function(i){return Ve(i)&&i.cacheID++&&(i.rec=0)}),yt(e)&&(N.history.scrollRestoration=da=e)},nt,Zi=0,Ga,Yd=function(){if(Ga!==Zi){var e=Ga=Zi;requestAnimationFrame(function(){return e===Zi&&Ui(!0)})}},Al=function(){ee.appendChild(xr),ua=!it&&xr.offsetHeight||N.innerHeight,ee.removeChild(xr)},Va=function(e){return un(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ui=function(e,t){if(bt=se.documentElement,ee=se.body,ca=[N,se,bt,ee],Rt&&!e&&!Jr){Be(Y,"scrollEnd",Sl);return}Al(),nt=Y.isRefreshing=!0,Jr||Tl();var i=ir("refreshInit");pl&&Y.sort(),t||ga(),H.forEach(function(r){Ve(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),q.slice(0).forEach(function(r){return r.refresh()}),Jr=!1,q.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-a),r.refresh()}}),zs=1,Va(!0),q.forEach(function(r){var n=Qt(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>n,o=r._startClamp&&r.start>=n;(a||o)&&r.setPositions(o?n-1:r.start,a?Math.max(o?n:r.start+1,n):r.end,!0)}),Va(!1),zs=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),H.forEach(function(r){Ve(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Pl(da,1),Gn.pause(),Zi++,nt=2,di(2),q.forEach(function(r){return Ve(r.vars.onRefresh)&&r.vars.onRefresh(r)}),nt=Y.isRefreshing=!1,ir("refresh")},qs=0,Fn=1,rn,di=function(e){if(e===2||!nt&&!Jr){Y.isUpdating=!0,rn&&rn.update(0);var t=q.length,i=Ue(),r=i-us>=50,n=t&&q[0].scroll();if(Fn=qs>n?-1:1,nt||(qs=n),r&&(Rt&&!Zn&&i-Rt>200&&(Rt=0,ir("scrollEnd")),Ir=us,us=i),Fn<0){for(rt=t;rt-- >0;)q[rt]&&q[rt].update(0,r);Fn=1}else for(rt=0;rt<t;rt++)q[rt]&&q[rt].update(0,r);Y.isUpdating=!1}hn=0},Ns=[xl,wl,pa,ha,Mt+tn,Mt+Qr,Mt+en,Mt+Zr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ln=Ns.concat([Ji,Qi,"boxSizing","max"+$r,"max"+fa,"position",Mt,Ce,Ce+en,Ce+Qr,Ce+tn,Ce+Zr]),Ud=function(e,t,i){wr(i);var r=e._gsap;if(r.spacerIsNative)wr(r.spacerState);else if(e._gsap.swappedIn){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}e._gsap.swappedIn=!1},fs=function(e,t,i,r){if(!e._gsap.swappedIn){for(var n=Ns.length,a=t.style,o=e.style,l;n--;)l=Ns[n],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[pa]=o[ha]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ji]=Vn(e,at)+Ae,a[Qi]=Vn(e,$e)+Ae,a[Ce]=o[Mt]=o[wl]=o[xl]="0",wr(r),o[Ji]=o["max"+$r]=i[Ji],o[Qi]=o["max"+fa]=i[Qi],o[Ce]=i[Ce],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Gd=/([A-Z])/g,wr=function(e){if(e){var t=e.t.style,i=e.length,r=0,n,a;for((e.t._gsap||D.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],n=e[r],a?t[n]=a:t[n]&&t.removeProperty(n.replace(Gd,"-$1").toLowerCase())}},Pn=function(e){for(var t=Ln.length,i=e.style,r=[],n=0;n<t;n++)r.push(Ln[n],i[Ln[n]]);return r.t=e,r},Vd=function(e,t,i){for(var r=[],n=e.length,a=i?8:0,o;a<n;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},zn={left:0,top:0},Xa=function(e,t,i,r,n,a,o,l,c,d,p,f,u,m){Ve(e)&&(e=e(l)),yt(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Rn("0"+e.substr(3),i):0));var h=u?u.time():0,v,k,w;if(u&&u.seek(0),isNaN(e)||(e=+e),Hr(e))u&&(e=D.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),o&&On(o,i,r,!0);else{Ve(t)&&(t=t(l));var C=(e||"0").split(" "),_,S,P,x;w=lt(t,l)||ee,_=li(w)||{},(!_||!_.left&&!_.top)&&Et(w).display==="none"&&(x=w.style.display,w.style.display="block",_=li(w),x?w.style.display=x:w.style.removeProperty("display")),S=Rn(C[0],_[r.d]),P=Rn(C[1]||"0",i),e=_[r.p]-c[r.p]-d+S+n-P,o&&On(o,P,r,i-P<20||o._isStart&&P>20),i-=i-P}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var $=e+i,T=a._isStart;v="scroll"+r.d2,On(a,$,r,T&&$>20||!T&&(p?Math.max(ee[v],bt[v]):a.parentNode[v])<=$+1),p&&(c=li(o),p&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Ae))}return u&&w&&(v=li(w),u.seek(f),k=li(w),u._caScrollDist=v[r.p]-k[r.p],e=e/u._caScrollDist*f),u&&u.seek(h),u?e:Math.round(e)},Xd=/(webkit|moz|length|cssText|inset)/i,Ka=function(e,t,i,r){if(e.parentNode!==t){var n=e.style,a,o;if(t===ee){e._stOrig=n.cssText,o=Et(e);for(a in o)!+a&&!Xd.test(a)&&o[a]&&typeof n[a]=="string"&&a!=="0"&&(n[a]=o[a]);n.top=i,n.left=r}else n.cssText=e._stOrig;D.core.getCache(e).uncache=1,t.appendChild(e)}},$l=function(e,t,i){var r=t,n=r;return function(a){var o=Math.round(e());return o!==r&&o!==n&&Math.abs(o-r)>3&&Math.abs(o-n)>3&&(a=o,i&&i()),n=r,r=Math.round(a),r}},An=function(e,t,i){var r={};r[t.p]="+="+i,D.set(e,r)},Ja=function(e,t){var i=Ei(e,t),r="_scroll"+t.p2,n=function a(o,l,c,d,p){var f=a.tween,u=l.onComplete,m={};c=c||i();var h=$l(i,c,function(){f.kill(),a.tween=0});return p=d&&p||0,d=d||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=m,m[r]=function(){return h(c+d*f.ratio+p*f.ratio*f.ratio)},l.onUpdate=function(){H.cache++,a.tween&&di()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=D.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Be(e,"wheel",i.wheelHandler),Y.isTouch&&Be(e,"touchmove",i.wheelHandler),n},Y=(function(){function s(t,i){dr||s.register(D)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ls(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qr){this.update=this.refresh=this.kill=Xt;return}i=Wa(yt(i)||Hr(i)||i.nodeType?{trigger:i}:i,Cn);var n=i,a=n.onUpdate,o=n.toggleClass,l=n.id,c=n.onToggle,d=n.onRefresh,p=n.scrub,f=n.trigger,u=n.pin,m=n.pinSpacing,h=n.invalidateOnRefresh,v=n.anticipatePin,k=n.onScrubComplete,w=n.onSnapComplete,C=n.once,_=n.snap,S=n.pinReparent,P=n.pinSpacer,x=n.containerAnimation,$=n.fastScrollEnd,T=n.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?at:$e,F=!p&&p!==0,M=lt(i.scroller||N),U=D.core.getCache(M),j=er(M),K=("pinType"in i?i.pinType:Pi(M,"pinType")||j&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=F&&i.toggleActions.split(" "),Q="markers"in i?i.markers:Cn.markers,ae=j?0:parseFloat(Et(M)["border"+A.p2+$r])||0,g=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(g)},Ke=Id(M,j,A),Ot=qd(M,j),fe=0,Oe=0,qe=0,ke=Ei(M,A),Je,Ne,pi,Qe,Ze,J,ye,ot,ft,y,mt,ti,fi,me,ii,mi,Bi,Me,gi,_e,Ft,At,ri,Mr,Se,fn,ni,nr,sr,vi,Ri,W,Oi,Lt,zt,It,Fi,ar,si;if(g._startClamp=g._endClamp=!1,g._dir=A,v*=45,g.scroller=M,g.scroll=x?x.time.bind(x):ke,Qe=ke(),g.vars=i,r=r||i.animation,"refreshPriority"in i&&(pl=1,i.refreshPriority===-9999&&(rn=g)),U.tweenScroll=U.tweenScroll||{top:Ja(M,$e),left:Ja(M,at)},g.tweenTo=Je=U.tweenScroll[A.p],g.scrubDuration=function(E){Oi=Hr(E)&&E,Oi?W?W.duration(E):W=D.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Oi,paused:!0,onComplete:function(){return k&&k(g)}}):(W&&W.progress(1).kill(),W=0)},r&&(r.vars.lazy=!1,r._initted&&!g.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),g.animation=r.pause(),r.scrollTrigger=g,g.scrubDuration(p),vi=0,l||(l=r.vars.id)),_&&((!ji(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ee.style&&D.set(j?[ee,bt]:M,{scrollBehavior:"auto"}),H.forEach(function(E){return Ve(E)&&E.target===(j?se.scrollingElement||bt:M)&&(E.smooth=!1)}),pi=Ve(_.snapTo)?_.snapTo:_.snapTo==="labels"?Hd(r):_.snapTo==="labelsDirectional"?jd(r):_.directional!==!1?function(E,L){return ma(_.snapTo)(E,Ue()-Oe<500?0:L.direction)}:D.utils.snap(_.snapTo),Lt=_.duration||{min:.1,max:2},Lt=ji(Lt)?Kr(Lt.min,Lt.max):Kr(Lt,Lt),zt=D.delayedCall(_.delay||Oi/2||.1,function(){var E=ke(),L=Ue()-Oe<500,B=Je.tween;if((L||Math.abs(g.getVelocity())<10)&&!B&&!Zn&&fe!==E){var z=(E-J)/me,Ee=r&&!F?r.totalProgress():z,V=L?0:(Ee-Ri)/(Ue()-Ir)*1e3||0,be=D.utils.clamp(-z,1-z,lr(V/2)*V/.185),He=z+(_.inertia===!1?0:be),ge,le,ie=_,qt=ie.onStart,de=ie.onInterrupt,gt=ie.onComplete;if(ge=pi(He,g),Hr(ge)||(ge=He),le=Math.max(0,Math.round(J+ge*me)),E<=ye&&E>=J&&le!==E){if(B&&!B._initted&&B.data<=lr(le-E))return;_.inertia===!1&&(be=ge-z),Je(le,{duration:Lt(lr(Math.max(lr(He-Ee),lr(ge-Ee))*.185/V/.05||0)),ease:_.ease||"power3",data:lr(le-E),onInterrupt:function(){return zt.restart(!0)&&de&&de(g)},onComplete:function(){g.update(),fe=ke(),r&&!F&&(W?W.resetTo("totalProgress",ge,r._tTime/r._tDur):r.progress(ge)),vi=Ri=r&&!F?r.totalProgress():g.progress,w&&w(g),gt&&gt(g)}},E,be*me,le-E-be*me),qt&&qt(g,Je.tween)}}else g.isActive&&fe!==E&&zt.restart(!0)}).pause()),l&&(Is[l]=g),f=g.trigger=lt(f||u!==!0&&u),si=f&&f._gsap&&f._gsap.stRevert,si&&(si=si(g)),u=u===!0?f:lt(u),yt(o)&&(o={targets:f,className:o}),u&&(m===!1||m===Mt||(m=!m&&u.parentNode&&u.parentNode.style&&Et(u.parentNode).display==="flex"?!1:Ce),g.pin=u,Ne=D.core.getCache(u),Ne.spacer?ii=Ne.pinState:(P&&(P=lt(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Ne.spacerIsNative=!!P,P&&(Ne.spacerState=Pn(P))),Ne.spacer=Me=P||se.createElement("div"),Me.classList.add("pin-spacer"),l&&Me.classList.add("pin-spacer-"+l),Ne.pinState=ii=Pn(u)),i.force3D!==!1&&D.set(u,{force3D:!0}),g.spacer=Me=Ne.spacer,sr=Et(u),Mr=sr[m+A.os2],_e=D.getProperty(u),Ft=D.quickSetter(u,A.a,Ae),fs(u,Me,sr),Bi=Pn(u)),Q){ti=ji(Q)?Wa(Q,Ya):Ya,y=Tn("scroller-start",l,M,A,ti,0),mt=Tn("scroller-end",l,M,A,ti,0,y),gi=y["offset"+A.op.d2];var Er=lt(Pi(M,"content")||M);ot=this.markerStart=Tn("start",l,Er,A,ti,gi,0,x),ft=this.markerEnd=Tn("end",l,Er,A,ti,gi,0,x),x&&(ar=D.quickSetter([ot,ft],A.a,Ae)),!K&&!(Zt.length&&Pi(M,"fixedMarkers")===!0)&&(Nd(j?ee:M),D.set([y,mt],{force3D:!0}),fn=D.quickSetter(y,A.a,Ae),nr=D.quickSetter(mt,A.a,Ae))}if(x){var I=x.vars.onUpdate,R=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){g.update(0,0,1),I&&I.apply(x,R||[])})}if(g.previous=function(){return q[q.indexOf(g)-1]},g.next=function(){return q[q.indexOf(g)+1]},g.revert=function(E,L){if(!L)return g.kill(!0);var B=E!==!1||!g.enabled,z=Ye;B!==g.isReverted&&(B&&(It=Math.max(ke(),g.scroll.rec||0),qe=g.progress,Fi=r&&r.progress()),ot&&[ot,ft,y,mt].forEach(function(Ee){return Ee.style.display=B?"none":"block"}),B&&(Ye=g,g.update(B)),u&&(!S||!g.isActive)&&(B?Ud(u,Me,ii):fs(u,Me,Et(u),Se)),B||g.update(B),Ye=z,g.isReverted=B)},g.refresh=function(E,L,B,z){if(!((Ye||!g.enabled)&&!L)){if(u&&E&&Rt){Be(s,"scrollEnd",Sl);return}!nt&&oe&&oe(g),Ye=g,Je.tween&&!B&&(Je.tween.kill(),Je.tween=0),W&&W.pause(),h&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(yi){return yi.vars.immediateRender&&yi.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),g.isReverted||g.revert(!0,!0),g._subPinOffset=!1;var Ee=Ke(),V=Ot(),be=x?x.duration():Qt(M,A),He=me<=.01||!me,ge=0,le=z||0,ie=ji(B)?B.end:i.end,qt=i.endTrigger||f,de=ji(B)?B.start:i.start||(i.start===0||!f?0:u?"0 0":"0 100%"),gt=g.pinnedContainer=i.pinnedContainer&&lt(i.pinnedContainer,g),Yt=f&&Math.max(0,q.indexOf(g))||0,Fe=Yt,Le,je,Li,mn,We,Pe,Ut,es,va,Dr,Gt,Br,gn;for(Q&&ji(B)&&(Br=D.getProperty(y,A.p),gn=D.getProperty(mt,A.p));Fe-- >0;)Pe=q[Fe],Pe.end||Pe.refresh(0,1)||(Ye=g),Ut=Pe.pin,Ut&&(Ut===f||Ut===u||Ut===gt)&&!Pe.isReverted&&(Dr||(Dr=[]),Dr.unshift(Pe),Pe.revert(!0,!0)),Pe!==q[Fe]&&(Yt--,Fe--);for(Ve(de)&&(de=de(g)),de=qa(de,"start",g),J=Xa(de,f,Ee,A,ke(),ot,y,g,V,ae,K,be,x,g._startClamp&&"_startClamp")||(u?-.001:0),Ve(ie)&&(ie=ie(g)),yt(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(yt(de)?de.split(" ")[0]:"")+ie:(ge=Rn(ie.substr(2),Ee),ie=yt(de)?de:(x?D.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,J):J)+ge,qt=f)),ie=qa(ie,"end",g),ye=Math.max(J,Xa(ie||(qt?"100% 0":be),qt,Ee,A,ke()+ge,ft,mt,g,V,ae,K,be,x,g._endClamp&&"_endClamp"))||-.001,ge=0,Fe=Yt;Fe--;)Pe=q[Fe]||{},Ut=Pe.pin,Ut&&Pe.start-Pe._pinPush<=J&&!x&&Pe.end>0&&(Le=Pe.end-(g._startClamp?Math.max(0,Pe.start):Pe.start),(Ut===f&&Pe.start-Pe._pinPush<J||Ut===gt)&&isNaN(de)&&(ge+=Le*(1-Pe.progress)),Ut===u&&(le+=Le));if(J+=ge,ye+=ge,g._startClamp&&(g._startClamp+=ge),g._endClamp&&!nt&&(g._endClamp=ye||-.001,ye=Math.min(ye,Qt(M,A))),me=ye-J||(J-=.01)&&.001,He&&(qe=D.utils.clamp(0,1,D.utils.normalize(J,ye,It))),g._pinPush=le,ot&&ge&&(Le={},Le[A.a]="+="+ge,gt&&(Le[A.p]="-="+ke()),D.set([ot,ft],Le)),u&&!(zs&&g.end>=Qt(M,A)))Le=Et(u),mn=A===$e,Li=ke(),At=parseFloat(_e(A.a))+le,!be&&ye>1&&(Gt=(j?se.scrollingElement||bt:M).style,Gt={style:Gt,value:Gt["overflow"+A.a.toUpperCase()]},j&&Et(ee)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Gt.style["overflow"+A.a.toUpperCase()]="scroll")),fs(u,Me,Le),Bi=Pn(u),je=li(u,!0),es=K&&Ei(M,mn?at:$e)(),m?(Se=[m+A.os2,me+le+Ae],Se.t=Me,Fe=m===Ce?Vn(u,A)+me+le:0,Fe&&(Se.push(A.d,Fe+Ae),Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=Fe+Ae)),wr(Se),gt&&q.forEach(function(yi){yi.pin===gt&&yi.vars.pinSpacing!==!1&&(yi._subPinOffset=!0)}),K&&ke(It)):(Fe=Vn(u,A),Fe&&Me.style.flexBasis!=="auto"&&(Me.style.flexBasis=Fe+Ae)),K&&(We={top:je.top+(mn?Li-J:es)+Ae,left:je.left+(mn?es:Li-J)+Ae,boxSizing:"border-box",position:"fixed"},We[Ji]=We["max"+$r]=Math.ceil(je.width)+Ae,We[Qi]=We["max"+fa]=Math.ceil(je.height)+Ae,We[Mt]=We[Mt+en]=We[Mt+Qr]=We[Mt+tn]=We[Mt+Zr]="0",We[Ce]=Le[Ce],We[Ce+en]=Le[Ce+en],We[Ce+Qr]=Le[Ce+Qr],We[Ce+tn]=Le[Ce+tn],We[Ce+Zr]=Le[Ce+Zr],mi=Vd(ii,We,S),nt&&ke(0)),r?(va=r._initted,cs(1),r.render(r.duration(),!0,!0),ri=_e(A.a)-At+me+le,ni=Math.abs(me-ri)>1,K&&ni&&mi.splice(mi.length-2,2),r.render(0,!0,!0),va||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),cs(0)):ri=me,Gt&&(Gt.value?Gt.style["overflow"+A.a.toUpperCase()]=Gt.value:Gt.style.removeProperty("overflow-"+A.a));else if(f&&ke()&&!x)for(je=f.parentNode;je&&je!==ee;)je._pinOffset&&(J-=je._pinOffset,ye-=je._pinOffset),je=je.parentNode;Dr&&Dr.forEach(function(yi){return yi.revert(!1,!0)}),g.start=J,g.end=ye,Qe=Ze=nt?It:ke(),!x&&!nt&&(Qe<It&&ke(It),g.scroll.rec=0),g.revert(!1,!0),Oe=Ue(),zt&&(fe=-1,zt.restart(!0)),Ye=0,r&&F&&(r._initted||Fi)&&r.progress()!==Fi&&r.progress(Fi||0,!0).render(r.time(),!0,!0),(He||qe!==g.progress||x||h||r&&!r._initted)&&(r&&!F&&(r._initted||qe||r.vars.immediateRender!==!1)&&r.totalProgress(x&&J<-.001&&!qe?D.utils.normalize(J,ye,0):qe,!0),g.progress=He||(Qe-J)/me===qe?0:qe),u&&m&&(Me._pinOffset=Math.round(g.progress*ri)),W&&W.invalidate(),isNaN(Br)||(Br-=D.getProperty(y,A.p),gn-=D.getProperty(mt,A.p),An(y,A,Br),An(ot,A,Br-(z||0)),An(mt,A,gn),An(ft,A,gn-(z||0))),He&&!nt&&g.update(),d&&!nt&&!fi&&(fi=!0,d(g),fi=!1)}},g.getVelocity=function(){return(ke()-Ze)/(Ue()-Ir)*1e3||0},g.endAnimation=function(){Fr(g.callbackAnimation),r&&(W?W.progress(1):r.paused()?F||Fr(r,g.direction<0,1):Fr(r,r.reversed()))},g.labelToScroll=function(E){return r&&r.labels&&(J||g.refresh()||J)+r.labels[E]/r.duration()*me||0},g.getTrailing=function(E){var L=q.indexOf(g),B=g.direction>0?q.slice(0,L).reverse():q.slice(L+1);return(yt(E)?B.filter(function(z){return z.vars.preventOverlaps===E}):B).filter(function(z){return g.direction>0?z.end<=J:z.start>=ye})},g.update=function(E,L,B){if(!(x&&!B&&!E)){var z=nt===!0?It:g.scroll(),Ee=E?0:(z-J)/me,V=Ee<0?0:Ee>1?1:Ee||0,be=g.progress,He,ge,le,ie,qt,de,gt,Yt;if(L&&(Ze=Qe,Qe=x?ke():z,_&&(Ri=vi,vi=r&&!F?r.totalProgress():V)),v&&u&&!Ye&&!xn&&Rt&&(!V&&J<z+(z-Ze)/(Ue()-Ir)*v?V=1e-4:V===1&&ye>z+(z-Ze)/(Ue()-Ir)*v&&(V=.9999)),V!==be&&g.enabled){if(He=g.isActive=!!V&&V<1,ge=!!be&&be<1,de=He!==ge,qt=de||!!V!=!!be,g.direction=V>be?1:-1,g.progress=V,qt&&!Ye&&(le=V&&!be?0:V===1?1:be===1?2:3,F&&(ie=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Yt=r&&(ie==="complete"||ie==="reset"||ie in r))),T&&(de||Yt)&&(Yt||p||!r)&&(Ve(T)?T(g):g.getTrailing(T).forEach(function(Li){return Li.endAnimation()})),F||(W&&!Ye&&!xn?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",V,r._tTime/r._tDur):(W.vars.totalProgress=V,W.invalidate().restart())):r&&r.totalProgress(V,!!(Ye&&(Oe||E)))),u){if(E&&m&&(Me.style[m+A.os2]=Mr),!K)Ft(Nr(At+ri*V));else if(qt){if(gt=!E&&V>be&&ye+1>z&&z+1>=Qt(M,A),S)if(!E&&(He||gt)){var Fe=li(u,!0),Le=z-J;Ka(u,ee,Fe.top+(A===$e?Le:0)+Ae,Fe.left+(A===$e?0:Le)+Ae)}else Ka(u,Me);wr(He||gt?mi:Bi),ni&&V<1&&He||Ft(At+(V===1&&!gt?ri:0))}}_&&!Je.tween&&!Ye&&!xn&&zt.restart(!0),o&&(de||C&&V&&(V<1||!ds))&&un(o.targets).forEach(function(Li){return Li.classList[He||C?"add":"remove"](o.className)}),a&&!F&&!E&&a(g),qt&&!Ye?(F&&(Yt&&(ie==="complete"?r.pause().totalProgress(1):ie==="reset"?r.restart(!0).pause():ie==="restart"?r.restart(!0):r[ie]()),a&&a(g)),(de||!ds)&&(c&&de&&hs(g,c),G[le]&&hs(g,G[le]),C&&(V===1?g.kill(!1,1):G[le]=0),de||(le=V===1?1:3,G[le]&&hs(g,G[le]))),$&&!He&&Math.abs(g.getVelocity())>(Hr($)?$:2500)&&(Fr(g.callbackAnimation),W?W.progress(1):Fr(r,ie==="reverse"?1:!V,1))):F&&a&&!Ye&&a(g)}if(nr){var je=x?z/x.duration()*(x._caScrollDist||0):z;fn(je+(y._isFlipped?1:0)),nr(je)}ar&&ar(-z/x.duration()*(x._caScrollDist||0))}},g.enable=function(E,L){g.enabled||(g.enabled=!0,Be(M,"resize",jr),j||Be(M,"scroll",cr),oe&&Be(s,"refreshInit",oe),E!==!1&&(g.progress=qe=0,Qe=Ze=fe=ke()),L!==!1&&g.refresh())},g.getTween=function(E){return E&&Je?Je.tween:W},g.setPositions=function(E,L,B,z){if(x){var Ee=x.scrollTrigger,V=x.duration(),be=Ee.end-Ee.start;E=Ee.start+be*E/V,L=Ee.start+be*L/V}g.refresh(!1,!1,{start:Na(E,B&&!!g._startClamp),end:Na(L,B&&!!g._endClamp)},z),g.update()},g.adjustPinSpacing=function(E){if(Se&&E){var L=Se.indexOf(A.d)+1;Se[L]=parseFloat(Se[L])+E+Ae,Se[1]=parseFloat(Se[1])+E+Ae,wr(Se)}},g.disable=function(E,L){if(E!==!1&&g.revert(!0,!0),g.enabled&&(g.enabled=g.isActive=!1,L||W&&W.pause(),It=0,Ne&&(Ne.uncache=1),oe&&De(s,"refreshInit",oe),zt&&(zt.pause(),Je.tween&&Je.tween.kill()&&(Je.tween=0)),!j)){for(var B=q.length;B--;)if(q[B].scroller===M&&q[B]!==g)return;De(M,"resize",jr),j||De(M,"scroll",cr)}},g.kill=function(E,L){g.disable(E,L),W&&!L&&W.kill(),l&&delete Is[l];var B=q.indexOf(g);B>=0&&q.splice(B,1),B===rt&&Fn>0&&rt--,B=0,q.forEach(function(z){return z.scroller===g.scroller&&(B=1)}),B||nt||(g.scroll.rec=0),r&&(r.scrollTrigger=null,E&&r.revert({kill:!1}),L||r.kill()),ot&&[ot,ft,y,mt].forEach(function(z){return z.parentNode&&z.parentNode.removeChild(z)}),rn===g&&(rn=0),u&&(Ne&&(Ne.uncache=1),B=0,q.forEach(function(z){return z.pin===u&&B++}),B||(Ne.spacer=0)),i.onKill&&i.onKill(g)},q.push(g),g.enable(!1,!1),si&&si(g),r&&r.add&&!me){var Z=g.update;g.update=function(){g.update=Z,H.cache++,J||ye||g.refresh()},D.delayedCall(.01,g.update),me=.01,J=ye=0}else g.refresh();u&&Yd()},s.register=function(i){return dr||(D=i||yl(),vl()&&window.document&&s.enable(),dr=qr),dr},s.defaults=function(i){if(i)for(var r in i)Cn[r]=i[r];return Cn},s.disable=function(i,r){qr=0,q.forEach(function(a){return a[r?"kill":"disable"](i)}),De(N,"wheel",cr),De(se,"scroll",cr),clearInterval(bn),De(se,"touchcancel",Xt),De(ee,"touchstart",Xt),kn(De,se,"pointerdown,touchstart,mousedown",Ha),kn(De,se,"pointerup,touchend,mouseup",ja),Gn.kill(),wn(De);for(var n=0;n<H.length;n+=3)Sn(De,H[n],H[n+1]),Sn(De,H[n],H[n+2])},s.enable=function(){if(N=window,se=document,bt=se.documentElement,ee=se.body,D&&(un=D.utils.toArray,Kr=D.utils.clamp,Ls=D.core.context||Xt,cs=D.core.suppressOverwrites||Xt,da=N.history.scrollRestoration||"auto",qs=N.pageYOffset||0,D.core.globals("ScrollTrigger",s),ee)){qr=1,xr=document.createElement("div"),xr.style.height="100vh",xr.style.position="absolute",Al(),zd(),we.register(D),s.isTouch=we.isTouch,_i=we.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fs=we.isTouch===1,Be(N,"wheel",cr),ca=[N,se,bt,ee],D.matchMedia?(s.matchMedia=function(c){var d=D.matchMedia(),p;for(p in c)d.add(p,c[p]);return d},D.addEventListener("matchMediaInit",function(){Tl(),ga()}),D.addEventListener("matchMediaRevert",function(){return Cl()}),D.addEventListener("matchMedia",function(){Ui(0,1),ir("matchMedia")}),D.matchMedia().add("(orientation: portrait)",function(){return ps(),ps})):console.warn("Requires GSAP 3.11.0 or later"),ps(),Be(se,"scroll",cr);var i=ee.hasAttribute("style"),r=ee.style,n=r.borderTopStyle,a=D.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=li(ee),$e.m=Math.round(o.top+$e.sc())||0,at.m=Math.round(o.left+at.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),i||(ee.setAttribute("style",""),ee.removeAttribute("style")),bn=setInterval(Ua,250),D.delayedCall(.5,function(){return xn=0}),Be(se,"touchcancel",Xt),Be(ee,"touchstart",Xt),kn(Be,se,"pointerdown,touchstart,mousedown",Ha),kn(Be,se,"pointerup,touchend,mouseup",ja),Os=D.utils.checkPrefix("transform"),Ln.push(Os),dr=Ue(),Gn=D.delayedCall(.2,Ui).pause(),ur=[se,"visibilitychange",function(){var c=N.innerWidth,d=N.innerHeight;se.hidden?(za=c,Ia=d):(za!==c||Ia!==d)&&jr()},se,"DOMContentLoaded",Ui,N,"load",Ui,N,"resize",jr],wn(Be),q.forEach(function(c){return c.enable(0,1)}),l=0;l<H.length;l+=3)Sn(De,H[l],H[l+1]),Sn(De,H[l],H[l+2])}},s.config=function(i){"limitCallbacks"in i&&(ds=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(bn)||(bn=r)&&setInterval(Ua,r),"ignoreMobileResize"in i&&(Fs=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(wn(De)||wn(Be,i.autoRefreshEvents||"none"),fl=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,r){var n=lt(i),a=H.indexOf(n),o=er(n);~a&&H.splice(a,o?6:2),r&&(o?Zt.unshift(N,r,ee,r,bt,r):Zt.unshift(n,r))},s.clearMatchMedia=function(i){q.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},s.isInViewport=function(i,r,n){var a=(yt(i)?lt(i):i).getBoundingClientRect(),o=a[n?Ji:Qi]*r||0;return n?a.right-o>0&&a.left+o<N.innerWidth:a.bottom-o>0&&a.top+o<N.innerHeight},s.positionInViewport=function(i,r,n){yt(i)&&(i=lt(i));var a=i.getBoundingClientRect(),o=a[n?Ji:Qi],l=r==null?o/2:r in Xn?Xn[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return n?(a.left+l)/N.innerWidth:(a.top+l)/N.innerHeight},s.killAll=function(i){if(q.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),i!==!0){var r=tr.killAll||[];tr={},r.forEach(function(n){return n()})}},s})();Y.version="3.14.2";Y.saveStyles=function(s){return s?un(s).forEach(function(e){if(e&&e.style){var t=vt.indexOf(e);t>=0&&vt.splice(t,5),vt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),D.core.getCache(e),Ls())}}):vt};Y.revert=function(s,e){return ga(!s,e)};Y.create=function(s,e){return new Y(s,e)};Y.refresh=function(s){return s?jr(!0):(dr||Y.register())&&Ui(!0)};Y.update=function(s){return++H.cache&&di(s===!0?2:0)};Y.clearScrollMemory=Pl;Y.maxScroll=function(s,e){return Qt(s,e?at:$e)};Y.getScrollFunc=function(s,e){return Ei(lt(s),e?at:$e)};Y.getById=function(s){return Is[s]};Y.getAll=function(){return q.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Y.isScrolling=function(){return!!Rt};Y.snapDirectional=ma;Y.addEventListener=function(s,e){var t=tr[s]||(tr[s]=[]);~t.indexOf(e)||t.push(e)};Y.removeEventListener=function(s,e){var t=tr[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Y.batch=function(s,e){var t=[],i={},r=e.interval||.016,n=e.batchMax||1e9,a=function(c,d){var p=[],f=[],u=D.delayedCall(r,function(){d(p,f),p=[],f=[]}).pause();return function(m){p.length||u.restart(!0),p.push(m.trigger),f.push(m),n<=p.length&&u.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Ve(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Ve(n)&&(n=n(),Be(Y,"refresh",function(){return n=e.batchMax()})),un(s).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(Y.create(c))}),t};var Qa=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},ms=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(we.isTouch?" pinch-zoom":""):"none",e===bt&&s(ee,t)},$n={auto:1,scroll:1},Kd=function(e){var t=e.event,i=e.target,r=e.axis,n=(t.changedTouches?t.changedTouches[0]:t).target,a=n._gsap||D.core.getCache(n),o=Ue(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;n&&n!==ee&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!($n[(l=Et(n)).overflowY]||$n[l.overflowX]));)n=n.parentNode;a._isScroll=n&&n!==i&&!er(n)&&($n[(l=Et(n)).overflowY]||$n[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ml=function(e,t,i,r){return we.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Kd,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Be(se,we.eventTypes[0],eo,!1,!0)},onDisable:function(){return De(se,we.eventTypes[0],eo,!0)}})},Jd=/(input|label|select|textarea)/i,Za,eo=function(e){var t=Jd.test(e.target.tagName);(t||Za)&&(e._gsapAllow=!0,Za=t)},Qd=function(e){ji(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,n=t.allowNestedScroll,a=t.onRelease,o,l,c=lt(e.target)||bt,d=D.core.globals().ScrollSmoother,p=d&&d.get(),f=_i&&(e.content&&lt(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),u=Ei(c,$e),m=Ei(c,at),h=1,v=(we.isTouch&&N.visualViewport?N.visualViewport.scale*N.visualViewport.width:N.outerWidth)/N.innerWidth,k=0,w=Ve(r)?function(){return r(o)}:function(){return r||2.8},C,_,S=Ml(c,e.type,!0,n),P=function(){return _=!1},x=Xt,$=Xt,T=function(){l=Qt(c,$e),$=Kr(_i?1:0,l),i&&(x=Kr(0,Qt(c,at))),C=Zi},A=function(){f._gsap.y=Nr(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},F=function(){if(_){requestAnimationFrame(P);var Q=Nr(o.deltaY/2),ae=$(u.v-Q);if(f&&ae!==u.v+u.offset){u.offset=ae-u.v;var g=Nr((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+g+", 0, 1)",f._gsap.y=g+"px",u.cacheID=H.cache,di()}return!0}u.offset&&A(),_=!0},M,U,j,K,G=function(){T(),M.isActive()&&M.vars.scrollY>l&&(u()>l?M.progress(1)&&u(l):M.resetTo("scrollY",l))};return f&&D.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return _i&&O.type==="touchmove"&&F()||h>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){_=!1;var O=h;h=Nr((N.visualViewport&&N.visualViewport.scale||1)/v),M.pause(),O!==h&&ms(c,h>1.01?!0:i?!1:"x"),U=m(),j=u(),T(),C=Zi},e.onRelease=e.onGestureStart=function(O,Q){if(u.offset&&A(),!Q)K.restart(!0);else{H.cache++;var ae=w(),g,oe;i&&(g=m(),oe=g+ae*.05*-O.velocityX/.227,ae*=Qa(m,g,oe,Qt(c,at)),M.vars.scrollX=x(oe)),g=u(),oe=g+ae*.05*-O.velocityY/.227,ae*=Qa(u,g,oe,Qt(c,$e)),M.vars.scrollY=$(oe),M.invalidate().duration(ae).play(.01),(_i&&M.vars.scrollY>=l||g>=l-1)&&D.to({},{onUpdate:G,duration:ae})}a&&a(O)},e.onWheel=function(){M._ts&&M.pause(),Ue()-k>1e3&&(C=0,k=Ue())},e.onChange=function(O,Q,ae,g,oe){if(Zi!==C&&T(),Q&&i&&m(x(g[2]===Q?U+(O.startX-O.x):m()+Q-g[1])),ae){u.offset&&A();var Ke=oe[2]===ae,Ot=Ke?j+O.startY-O.y:u()+ae-oe[1],fe=$(Ot);Ke&&Ot!==fe&&(j+=fe-Ot),u(fe)}(ae||Q)&&di()},e.onEnable=function(){ms(c,i?!1:"x"),Y.addEventListener("refresh",G),Be(N,"resize",G),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){ms(c,!0),De(N,"resize",G),Y.removeEventListener("refresh",G),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new we(e),o.iOS=_i,_i&&!u()&&u(1),_i&&D.ticker.add(Xt),K=o._dc,M=D.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$l(u,u(),function(){return M.pause()})},onUpdate:di,onComplete:K.vars.onComplete}),o};Y.sort=function(s){if(Ve(s))return q.sort(s);var e=N.pageYOffset||0;return Y.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+N.innerHeight}),q.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Y.observe=function(s){return new we(s)};Y.normalizeScroll=function(s){if(typeof s>"u")return it;if(s===!0&&it)return it.enable();if(s===!1){it&&it.kill(),it=s;return}var e=s instanceof we?s:Qd(s);return it&&it.target===e.target&&it.kill(),er(e.target)&&(it=e),e};Y.core={_getVelocityProp:Rs,_inputObserver:Ml,_scrollers:H,_proxies:Zt,bridge:{ss:function(){Rt||ir("scrollStart"),Rt=Ue()},ref:function(){return Ye}}};yl()&&D.registerPlugin(Y);la.registerPlugin(Y);const gs=[{id:1,number:"10+",suffix:"Cr",label:"Client Revenue Generation",icon:"trendingUp"},{id:2,number:"70+",suffix:"",label:"Job Placements",icon:"users"},{id:3,number:"5+",suffix:"",label:"Different Industry Contribution",icon:"layers"}];function Zd(){return`
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
            ${gs.map((s,e)=>`
              <div class="ms-card" data-index="${e}" data-state="${e===0?"active":"hidden"}">
                <div class="ms-card-inner">
                  <div class="ms-card-icon">${b(s.icon,40)}</div>
                  <div class="ms-card-number">${s.number}<span class="ms-card-suffix">${s.suffix}</span></div>
                  <div class="ms-card-label">${s.label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="ms-dots">
          ${gs.map((s,e)=>`
            <button class="ms-dot ${e===0?"active":""}" data-dot="${e}"></button>
          `).join("")}
        </div>

        <!-- Progress indicator -->
        <div class="ms-progress">
          <span id="ms-current">1</span> / <span id="ms-total">${gs.length}</span>
        </div>
      </div>
    </section>
  `}function eu(){const s=document.getElementById("milestones"),e=document.querySelectorAll(".ms-card"),t=document.querySelectorAll(".ms-dot"),i=document.getElementById("ms-current");if(!s||e.length===0)return;let r=0;const n=e.length;function a(l){l!==r&&(e.forEach((c,d)=>{d===l?c.dataset.state="active":c.dataset.state="hidden"}),t.forEach((c,d)=>{c.classList.toggle("active",d===l)}),i&&(i.textContent=l+1),r=l)}const o=la.timeline({scrollTrigger:{trigger:s,start:"top top",end:`+=${n*100}%`,pin:!0,scrub:1,anticipatePin:1,onUpdate:l=>{const c=l.progress,d=Math.min(Math.floor(c*n),n-1);d!==r&&a(d)}}});for(let l=0;l<n;l++)o.to({},{duration:1},l)}function tu(){return`
    <section class="founder-section" id="founder">
      <!-- Background Image -->
      <div class="founder-bg">
        <img src="/founder-bg.jpg" alt="TDCM Team" class="founder-bg-img">
      </div>
      
      <!-- Gradient Overlay (Right 35%) -->
      <div class="founder-overlay"></div>
      
      <!-- Content Container -->
      <div class="founder-container">
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
  `}let mr="super_admin",El="dashboard";function Ht(s){El=s}const iu=[{section:"Overview",items:[{key:"dashboard",label:"Dashboard",icon:"grid",href:"#/admin",roles:["super_admin","editor","moderator"]}]},{section:"Management",items:[{key:"bookings",label:"Bookings",icon:"calendar",href:"#/admin/bookings",roles:["super_admin"],badge:"2"}]},{section:"Content",items:[{key:"articles",label:"Articles",icon:"file",href:"#/admin/articles",roles:["super_admin","editor"]},{key:"pages",label:"Pages",icon:"layout",href:"#/admin/pages",roles:["super_admin","editor"]},{key:"services",label:"Services",icon:"briefcase",href:"#/admin/services",roles:["super_admin","editor"]},{key:"media",label:"Media",icon:"image",href:"#/admin/media",roles:["super_admin","editor","moderator"]}]},{section:"Community",items:[{key:"community",label:"Moderation",icon:"shield",href:"#/admin/community",roles:["super_admin","moderator"],badge:"1"}]},{section:"System",items:[{key:"navigation",label:"Navigation",icon:"menu",href:"#/admin/navigation",roles:["super_admin"]},{key:"pricing",label:"Pricing",icon:"tag",href:"#/admin/pricing",roles:["super_admin"]},{key:"team",label:"Team",icon:"userPlus",href:"#/admin/team",roles:["super_admin"]},{key:"settings",label:"Settings",icon:"settings",href:"#/admin/settings",roles:["super_admin"]}]}];function ru(){return iu.map(s=>{const e=s.items.filter(t=>t.roles.includes(mr));return e.length===0?"":`
      <div class="sidebar-section">
        <div class="sidebar-section-label">${s.section}</div>
        ${e.map(t=>`
          <a href="${t.href}" class="sidebar-link ${El===t.key?"active":""}" data-admin-page="${t.key}">
            ${b(t.icon,18)}
            ${t.label}
            ${t.badge?`<span class="badge">${t.badge}</span>`:""}
          </a>
        `).join("")}
      </div>
    `}).join("")}function jt(s,e=""){const t=mr.replace("_"," ").split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ");return`
    <div class="admin-wrap">
      <!-- Sidebar -->
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">TCM</div>
          <div class="sidebar-brand">TDCM Admin<span>Management Portal</span></div>
        </div>
        
        <select class="role-switcher" id="admin-role-switcher">
          <option value="super_admin" ${mr==="super_admin"?"selected":""}>🔑 Super Admin</option>
          <option value="editor" ${mr==="editor"?"selected":""}>✏️ Editor</option>
          <option value="moderator" ${mr==="moderator"?"selected":""}>🛡️ Moderator</option>
        </select>

        <nav class="sidebar-nav" id="sidebar-nav">
          ${ru()}
        </nav>
        
        <div class="sidebar-footer">
          <div class="sidebar-avatar">RK</div>
          <div class="sidebar-user-info">
            <div class="sidebar-user-name">Rajesh Kumar</div>
            <div class="sidebar-user-role">${t}</div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <div class="admin-main">
        <div class="admin-topbar">
          <div class="admin-breadcrumb">
            <a href="#/admin">Admin</a>
            ${e?`<span class="sep">/</span><span class="current">${e}</span>`:""}
          </div>
          <div class="admin-topbar-actions">
            <a href="#/" class="admin-btn admin-btn-secondary admin-btn-sm">${b("globe",14)} View Site</a>
          </div>
        </div>
        <div class="admin-content">
          ${s}
        </div>
      </div>
    </div>
  `}function Wt(){const s=document.getElementById("admin-role-switcher");s&&s.addEventListener("change",e=>{mr=e.target.value,window.dispatchEvent(new HashChangeEvent("hashchange"))})}const to=[{id:"u1",name:"Rajesh Kumar",email:"rajesh@tdcm.co",role:"super_admin",initials:"RK",lastLogin:"2 hours ago",isActive:!0},{id:"u2",name:"Priya Sharma",email:"priya@tdcm.co",role:"editor",initials:"PS",lastLogin:"5 hours ago",isActive:!0},{id:"u3",name:"Amit Patel",email:"amit@tdcm.co",role:"moderator",initials:"AP",lastLogin:"1 day ago",isActive:!0},{id:"u4",name:"Neha Gupta",email:"neha@tdcm.co",role:"editor",initials:"NG",lastLogin:"3 days ago",isActive:!1}],Wi=[{id:"B001",clientName:"Arjun Mehta",email:"arjun@startup.io",phone:"+91 98765 43210",date:"Sat, 15 Mar 2026",time:"10:00 AM",status:"upcoming",paid:!0,topic:"Market expansion strategy for SaaS product"},{id:"B002",clientName:"Sneha Reddy",email:"sneha@techflow.in",phone:"+91 87654 32109",date:"Mon, 17 Mar 2026",time:"2:00 PM",status:"upcoming",paid:!0,topic:"Performance marketing budget allocation"},{id:"B003",clientName:"Pooja Desai",email:"pooja@freshstart.co",phone:"+91 65432 10987",date:"Fri, 7 Mar 2026",time:"11:30 AM",status:"completed",paid:!0,topic:"Go-to-market strategy for D2C brand"},{id:"B004",clientName:"Deepak Rao",email:"deepak@scaleup.co",phone:"+91 32109 87654",date:"Wed, 5 Mar 2026",time:"3:30 PM",status:"completed",paid:!0,topic:"CRM implementation roadmap"},{id:"B005",clientName:"Rahul Joshi",email:"rahul@cloudbyte.in",phone:"+91 54321 09876",date:"Thu, 6 Mar 2026",time:"10:00 AM",status:"cancelled",paid:!1,topic:"Recruitment strategy"}],qi=[{id:"A001",title:"Top 10 Recruitment Strategies for 2026",author:"Priya Sharma",category:"Recruitment",status:"published",publishedAt:"2026-03-08",views:1420},{id:"A002",title:"How Performance Marketing is Changing",author:"Rajesh Kumar",category:"Marketing",status:"published",publishedAt:"2026-03-05",views:890},{id:"A003",title:"The Future of CRM Platforms",author:"Priya Sharma",category:"Technology",status:"draft",publishedAt:null,views:0},{id:"A004",title:"Building a Startup from Zero to Revenue",author:"Rajesh Kumar",category:"Consultancy",status:"scheduled",publishedAt:"2026-03-20",views:0},{id:"A005",title:"5 Mistakes Startups Make with Hiring",author:"Priya Sharma",category:"Recruitment",status:"published",publishedAt:"2026-02-28",views:2103},{id:"A006",title:"Digital Marketing Budget Guide",author:"Rajesh Kumar",category:"Marketing",status:"archived",publishedAt:"2026-01-15",views:3200}],nu=[{slug:"home",title:"Homepage",lastUpdated:"2026-03-10",isPublished:!0,sections:8},{slug:"about",title:"About Us",lastUpdated:"2026-03-08",isPublished:!0,sections:5},{slug:"contact",title:"Contact",lastUpdated:"2026-03-06",isPublished:!0,sections:3},{slug:"pricing",title:"Pricing",lastUpdated:"2026-03-09",isPublished:!0,sections:4}],vs=[{id:"P001",author:"JohnDoe",authorInitials:"JD",content:"Just launched our new product! Looking for beta testers in the community.",likes:24,comments:8,isPinned:!0,isHidden:!1,isFlagged:!1,createdAt:"2 hours ago"},{id:"P002",author:"SarahM",authorInitials:"SM",content:"Has anyone tried TDCM recruitment services? What was your experience?",likes:12,comments:5,isPinned:!1,isHidden:!1,isFlagged:!1,createdAt:"5 hours ago"},{id:"P003",author:"TechGuru99",authorInitials:"TG",content:"SPAM: Buy cheap followers now! Visit our link...",likes:0,comments:1,isPinned:!1,isHidden:!1,isFlagged:!0,createdAt:"8 hours ago"},{id:"P004",author:"StartupSam",authorInitials:"SS",content:"Our company grew 300% after the TDCM consultancy program. Highly recommend!",likes:56,comments:15,isPinned:!1,isHidden:!1,isFlagged:!1,createdAt:"1 day ago"},{id:"P005",author:"AngryUser",authorInitials:"AU",content:"This platform is terrible. Offensive content removed by moderator.",likes:0,comments:3,isPinned:!1,isHidden:!0,isFlagged:!0,createdAt:"2 days ago"}],io=[{id:"M001",name:"John Doe",username:"JohnDoe",email:"john@example.com",joined:"2026-01-15",posts:12,isBanned:!1},{id:"M002",name:"Sarah Miller",username:"SarahM",email:"sarah@example.com",joined:"2026-02-01",posts:8,isBanned:!1},{id:"M003",name:"Tech Guru",username:"TechGuru99",email:"tech@spam.com",joined:"2026-03-09",posts:1,isBanned:!1},{id:"M004",name:"Sam Patel",username:"StartupSam",email:"sam@startup.io",joined:"2025-12-20",posts:24,isBanned:!1},{id:"M005",name:"Angry User",username:"AngryUser",email:"angry@mail.com",joined:"2026-03-01",posts:3,isBanned:!0}],ro=[{id:"MD001",name:"hero-banner.jpg",type:"image/jpeg",size:"2.4 MB",uploadedAt:"2026-03-10",uploadedBy:"Priya Sharma"},{id:"MD002",name:"team-photo.png",type:"image/png",size:"1.8 MB",uploadedAt:"2026-03-08",uploadedBy:"Rajesh Kumar"},{id:"MD003",name:"case-study.pdf",type:"application/pdf",size:"540 KB",uploadedAt:"2026-03-05",uploadedBy:"Priya Sharma"},{id:"MD004",name:"logo-dark.svg",type:"image/svg",size:"12 KB",uploadedAt:"2026-02-20",uploadedBy:"Rajesh Kumar"},{id:"MD005",name:"product-demo.mp4",type:"video/mp4",size:"15.2 MB",uploadedAt:"2026-03-03",uploadedBy:"Amit Patel"},{id:"MD006",name:"recruitment-guide.pdf",type:"application/pdf",size:"1.1 MB",uploadedAt:"2026-02-15",uploadedBy:"Priya Sharma"}],su=[{key:"company_name",value:"TDCM Company",group:"Company Info"},{key:"company_tagline",value:"Dream Bold. Plan Smart. Hustle Hard.",group:"Company Info"},{key:"contact_email",value:"hello@tdcm.co",group:"Contact"},{key:"contact_phone",value:"+91 98765 43210",group:"Contact"},{key:"contact_address",value:"Jaipur, Rajasthan, India",group:"Contact"},{key:"social_linkedin",value:"https://linkedin.com/company/tdcm",group:"Social Links"},{key:"social_twitter",value:"https://twitter.com/tdcmco",group:"Social Links"},{key:"social_instagram",value:"https://instagram.com/tdcmco",group:"Social Links"},{key:"notice_banner_active",value:"true",group:"Notice Banner"},{key:"notice_banner_text",value:"🚀 New: Book a 1-on-1 session with our founder!",group:"Notice Banner"},{key:"ga_tracking_id",value:"G-XXXXXXXXXX",group:"Analytics"},{key:"meta_title",value:"TDCM Company — 360° Business Building Brand",group:"SEO Defaults"},{key:"meta_description",value:"Expert recruitment, performance marketing, and startup consultancy services.",group:"SEO Defaults"}],au={publishedArticles:3,communityPosts:142,newMembers30d:34,bookingsUpcoming:2};function ou(){Ht("dashboard");const s=au,e=Wi.filter(i=>i.status==="upcoming"),t=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Dashboard</h1>
        <p class="admin-page-subtitle">Welcome back, Rajesh. Here's what's happening.</p>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="stat-cards">

      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${b("calendar",20)}</div>
        <div class="sc-label">Upcoming Bookings</div>
        <div class="sc-value">${s.bookingsUpcoming}</div>
        <div class="sc-change up">₹${(s.bookingsUpcoming*5e3).toLocaleString()} revenue</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${b("file",20)}</div>
        <div class="sc-label">Published Articles</div>
        <div class="sc-value">${s.publishedArticles}</div>
        <div class="sc-change up">↑ 2 this month</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="sc-icon qa-purple">${b("messageCircle",20)}</div>
        <div class="sc-label">Community Posts</div>
        <div class="sc-value">${s.communityPosts}</div>
        <div class="sc-change up">↑ ${s.newMembers30d} new members</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">

      <a href="#/admin/articles" class="quick-action">
        <div class="quick-action-icon qa-blue">${b("file",20)}</div>
        <div>
          <div class="quick-action-text">Create Article</div>
          <div class="quick-action-sub">Publish new content</div>
        </div>
      </a>
      <a href="#/admin/community" class="quick-action">
        <div class="quick-action-icon qa-amber">${b("shield",20)}</div>
        <div>
          <div class="quick-action-text">Moderate Posts</div>
          <div class="quick-action-sub">1 flagged post</div>
        </div>
      </a>
    </div>

    <!-- Single Full-Width Table Layout -->
    <div style="display:grid;grid-template-columns:1fr;gap:20px">


      <!-- Upcoming Bookings -->
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-title">Upcoming Bookings</div>
          <a href="#/admin/bookings" class="admin-btn admin-btn-secondary admin-btn-sm">View All</a>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${e.length>0?e.map(i=>`
              <tr>
                <td>
                  <div style="font-weight:600;color:#1E293B">${i.clientName}</div>
                  <div style="font-size:12px;color:#94A3B8">${i.email}</div>
                </td>
                <td>
                  <div style="font-weight:500">${i.date}</div>
                  <div style="font-size:12px;color:#94A3B8">${i.time}</div>
                </td>
                <td><span class="status-badge status-${i.status}">${i.status}</span></td>
              </tr>
            `).join(""):'<tr><td colspan="3" class="admin-empty">No upcoming bookings</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  `;return jt(t,"Dashboard")}function lu(){Wt()}function cu(){Ht("bookings");const s={upcoming:Wi.filter(t=>t.status==="upcoming").length,completed:Wi.filter(t=>t.status==="completed").length,cancelled:Wi.filter(t=>t.status==="cancelled").length},e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Booking Slots</h1>
        <p class="admin-page-subtitle">${Wi.length} total sessions • ₹${(Wi.filter(t=>t.paid).length*5e3).toLocaleString()} collected</p>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="stat-cards" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${b("calendar",20)}</div>
        <div class="sc-label">Upcoming</div>
        <div class="sc-value">${s.upcoming}</div>
      </div>
      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${b("check",20)}</div>
        <div class="sc-label">Completed</div>
        <div class="sc-value">${s.completed}</div>
      </div>
      <div class="stat-card accent-red">
        <div class="sc-icon qa-red">${b("x",20)}</div>
        <div class="sc-label">Cancelled</div>
        <div class="sc-value">${s.cancelled}</div>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Bookings</div>
        <div class="admin-table-filters" id="booking-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="upcoming">Upcoming</button>
          <button class="filter-btn" data-filter="completed">Completed</button>
          <button class="filter-btn" data-filter="cancelled">Cancelled</button>
        </div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Time</th>
            <th>Topic</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${Wi.map(t=>`
            <tr class="booking-row" data-status="${t.status}">
              <td>
                <div style="font-weight:600;color:#1E293B">${t.clientName}</div>
                <div style="font-size:12px;color:#94A3B8">${t.email}</div>
              </td>
              <td style="font-weight:500">${t.date}</td>
              <td>${t.time}</td>
              <td style="max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.topic}</td>
              <td>
                <span style="color:${t.paid?"#22C55E":"#EF4444"};font-weight:600;font-size:13px">
                  ${t.paid?"₹5,000 ✓":"Unpaid"}
                </span>
              </td>
              <td><span class="status-badge status-${t.status}">${t.status}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;return jt(e,"Bookings")}function du(){Wt();const s=document.querySelectorAll("#booking-filters .filter-btn"),e=document.querySelectorAll(".booking-row");s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),t.classList.add("active");const i=t.dataset.filter;e.forEach(r=>{r.style.display=i==="all"||r.dataset.status===i?"":"none"})})})}function uu(){Ht("articles");const s={all:qi.length,published:qi.filter(t=>t.status==="published").length,draft:qi.filter(t=>t.status==="draft").length,scheduled:qi.filter(t=>t.status==="scheduled").length,archived:qi.filter(t=>t.status==="archived").length},e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Articles</h1>
        <p class="admin-page-subtitle">${qi.length} articles</p>
      </div>
      <button class="admin-btn admin-btn-primary">${b("plus",16)} New Article</button>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-filters" id="article-filters">
          <button class="filter-btn active" data-filter="all">All (${s.all})</button>
          <button class="filter-btn" data-filter="published">Published (${s.published})</button>
          <button class="filter-btn" data-filter="draft">Draft (${s.draft})</button>
          <button class="filter-btn" data-filter="scheduled">Scheduled (${s.scheduled})</button>
          <button class="filter-btn" data-filter="archived">Archived (${s.archived})</button>
        </div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          ${qi.map(t=>`
            <tr class="article-row" data-status="${t.status}" style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</td>
              <td>${t.author}</td>
              <td><span style="background:#F1F5F9;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:500;color:#475569">${t.category}</span></td>
              <td><span class="status-badge status-${t.status}">${t.status}</span></td>
              <td style="font-size:13px;color:#64748B">${t.publishedAt||"—"}</td>
              <td style="font-weight:600;color:#334155">${t.views>0?t.views.toLocaleString():"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;return jt(e,"Articles")}function hu(){Wt();const s=document.querySelectorAll("#article-filters .filter-btn"),e=document.querySelectorAll(".article-row");s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),t.classList.add("active");const i=t.dataset.filter;e.forEach(r=>{r.style.display=i==="all"||r.dataset.status===i?"":"none"})})})}function pu(){Ht("pages");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Pages</h1>
        <p class="admin-page-subtitle">Manage CMS page content and sections</p>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Pages</div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Page</th>
            <th>Slug</th>
            <th>Sections</th>
            <th>Last Updated</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          ${nu.map(e=>`
            <tr style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B">${e.title}</td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">/${e.slug}</td>
              <td>${e.sections} sections</td>
              <td style="font-size:13px;color:#64748B">${e.lastUpdated}</td>
              <td>
                <div class="admin-toggle ${e.isPublished?"on":""}" data-slug="${e.slug}"></div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;return jt(s,"Pages")}function fu(){Wt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("on")})})}const mu=[{title:"Recruitment Solutions",category:"Service",slug:"recruitment",isActive:!0,sortOrder:1},{title:"Performance Marketing",category:"Service",slug:"marketing",isActive:!0,sortOrder:2},{title:"Business Solutions (CRM)",category:"Service",slug:"crm",isActive:!0,sortOrder:3},{title:"Go To Market Strategy",category:"Consultancy",slug:"go-to-market",isActive:!0,sortOrder:1},{title:"Product Launch",category:"Consultancy",slug:"product-launch",isActive:!0,sortOrder:2},{title:"0 to 90 Plan",category:"Consultancy",slug:"0-to-90-plan",isActive:!0,sortOrder:3},{title:"0 to 90 Training",category:"Consultancy",slug:"0-to-90-training",isActive:!0,sortOrder:4},{title:"Quarterly Health Analysis",category:"Consultancy",slug:"quarterly-health-analysis",isActive:!1,sortOrder:5}];function gu(){Ht("services");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Services</h1>
        <p class="admin-page-subtitle">Manage service and consultancy program pages</p>
      </div>
    </div>

    <div class="admin-table-wrap">
      <div class="admin-table-header">
        <div class="admin-table-title">All Services & Programs</div>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Slug</th>
            <th>Order</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          ${mu.map(e=>`
            <tr style="cursor:pointer">
              <td style="font-weight:600;color:#1E293B">${e.title}</td>
              <td><span style="background:${e.category==="Service"?"#DBEAFE":"#EDE9FE"};color:${e.category==="Service"?"#1D4ED8":"#7C3AED"};padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600">${e.category}</span></td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">/${e.category==="Service"?"services":"consultancy"}/${e.slug}</td>
              <td style="text-align:center">${e.sortOrder}</td>
              <td>
                <div class="admin-toggle ${e.isActive?"on":""}"></div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;return jt(s,"Services")}function vu(){Wt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>s.classList.toggle("on"))})}function yu(){Ht("community");const s=vs.filter(t=>t.isFlagged).length,e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Community Moderation</h1>
        <p class="admin-page-subtitle">${vs.length} posts • ${io.length} members</p>
      </div>
    </div>

    <!-- Tab Toggle -->
    <div style="display:flex;gap:8px;margin-bottom:20px">
      <button class="filter-btn active" id="tab-posts">Posts</button>
      <button class="filter-btn" id="tab-members">Members</button>
    </div>

    <!-- Posts Tab -->
    <div id="community-posts-tab">
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-filters" id="post-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="pinned">Pinned</button>
            <button class="filter-btn" data-filter="flagged">Flagged (${s})</button>
            <button class="filter-btn" data-filter="hidden">Hidden</button>
          </div>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Author</th>
              <th>Content</th>
              <th>Engagement</th>
              <th>Flags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${vs.map(t=>{let i="";return t.isFlagged?i="flagged":t.isHidden?i="hidden":t.isPinned&&(i="pinned"),`
                <tr class="post-row" data-filter="${i||"all"}" data-id="${t.id}">
                  <td>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div style="width:32px;height:32px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--primary)">${t.authorInitials}</div>
                      <div>
                        <div style="font-weight:600;font-size:13px;color:#1E293B">${t.author}</div>
                        <div style="font-size:11px;color:#94A3B8">${t.createdAt}</div>
                      </div>
                    </div>
                  </td>
                  <td style="max-width:350px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.content}</td>
                  <td>
                    <span style="font-size:13px;color:#64748B">${b("heart",14)} ${t.likes} &nbsp; ${b("messageCircle",14)} ${t.comments}</span>
                  </td>
                  <td>
                    ${t.isPinned?'<span class="status-badge status-pinned">Pinned</span>':""}
                    ${t.isFlagged?'<span class="status-badge status-flagged">Flagged</span>':""}
                    ${t.isHidden?'<span class="status-badge status-hidden">Hidden</span>':""}
                    ${!t.isPinned&&!t.isFlagged&&!t.isHidden?'<span style="color:#CBD5E1">—</span>':""}
                  </td>
                  <td>
                    <div style="display:flex;gap:6px">
                      <button class="admin-btn admin-btn-secondary admin-btn-sm pin-btn" title="${t.isPinned?"Unpin":"Pin"}">${b("pin",14)}</button>
                      <button class="admin-btn admin-btn-secondary admin-btn-sm hide-btn" title="${t.isHidden?"Show":"Hide"}">${b("eyeOff",14)}</button>
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Members Tab -->
    <div id="community-members-tab" style="display:none">
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <div class="admin-table-title">Community Members</div>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Username</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Posts</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${io.map(t=>`
              <tr>
                <td style="font-weight:600;color:#1E293B">${t.name}</td>
                <td style="font-family:monospace;font-size:13px;color:#64748B">@${t.username}</td>
                <td style="font-size:13px;color:#64748B">${t.email}</td>
                <td style="font-size:13px;color:#64748B">${t.joined}</td>
                <td style="text-align:center;font-weight:600">${t.posts}</td>
                <td><span class="status-badge status-${t.isBanned?"banned":"active"}">${t.isBanned?"Banned":"Active"}</span></td>
                <td>
                  <button class="admin-btn ${t.isBanned?"admin-btn-secondary":"admin-btn-danger"} admin-btn-sm ban-btn">
                    ${t.isBanned?"Unban":"Ban"}
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;return jt(e,"Community")}function _u(){Wt();const s=document.getElementById("tab-posts"),e=document.getElementById("tab-members"),t=document.getElementById("community-posts-tab"),i=document.getElementById("community-members-tab");s&&e&&(s.addEventListener("click",()=>{s.classList.add("active"),e.classList.remove("active"),t.style.display="",i.style.display="none"}),e.addEventListener("click",()=>{e.classList.add("active"),s.classList.remove("active"),i.style.display="",t.style.display="none"}));const r=document.querySelectorAll("#post-filters .filter-btn"),n=document.querySelectorAll(".post-row");r.forEach(a=>{a.addEventListener("click",()=>{r.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=a.dataset.filter;n.forEach(l=>{o==="all"?l.style.display="":l.style.display=l.dataset.filter===o?"":"none"})})})}function bu(s){return s.startsWith("image")?b("image",32):s.startsWith("video")?b("video",32):b("file",32)}function xu(){Ht("media");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Media Library</h1>
        <p class="admin-page-subtitle">${ro.length} files</p>
      </div>
      <button class="admin-btn admin-btn-primary">${b("upload",16)} Upload File</button>
    </div>

    <div class="media-grid">
      ${ro.map(e=>`
        <div class="media-item" data-id="${e.id}">
          <div class="media-thumb">
            ${bu(e.type)}
          </div>
          <div class="media-info">
            <div class="media-name" title="${e.name}">${e.name}</div>
            <div class="media-meta">${e.size} • ${e.uploadedAt}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;return jt(s,"Media")}function wu(){Wt()}const ku=[{label:"Home",href:"/",isActive:!0},{label:"Services",href:"/services",isActive:!0,children:[{label:"Recruitment",href:"/services/recruitment"},{label:"Marketing",href:"/services/marketing"},{label:"Business Solutions",href:"/services/crm"}]},{label:"Consultancy",href:"/consultancy",isActive:!0,children:[{label:"Go To Market",href:"/consultancy/go-to-market"},{label:"Product Launch",href:"/consultancy/product-launch"},{label:"0 to 90 Plan",href:"/consultancy/0-to-90-plan"}]},{label:"Community",href:"/community",isActive:!0},{label:"Articles",href:"/articles",isActive:!0},{label:"Pricing",href:"/pricing",isActive:!0},{label:"About",href:"/about",isActive:!0},{label:"Contact",href:"/contact",isActive:!0}];function Su(){Ht("navigation");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Navigation</h1>
        <p class="admin-page-subtitle">Manage header and footer navigation links</p>
      </div>
      <button class="admin-btn admin-btn-primary">${b("plus",16)} Add Item</button>
    </div>

    <div class="admin-card" style="margin-bottom:20px">
      <div class="admin-card-title">Header Navigation</div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>URL</th>
            <th>Children</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          ${ku.map(e=>`
            <tr>
              <td style="font-weight:600;color:#1E293B">${e.label}</td>
              <td style="font-family:monospace;font-size:13px;color:#64748B">${e.href}</td>
              <td>${e.children?`<span style="background:#F1F5F9;padding:3px 8px;border-radius:8px;font-size:12px;font-weight:600;color:#475569">${e.children.length} items</span>`:"—"}</td>
              <td><div class="admin-toggle ${e.isActive?"on":""}"></div></td>
            </tr>
            ${e.children?e.children.map(t=>`
              <tr style="background:#F8FAFC">
                <td style="padding-left:40px;color:#64748B">↳ ${t.label}</td>
                <td style="font-family:monospace;font-size:13px;color:#94A3B8">${t.href}</td>
                <td>—</td>
                <td><div class="admin-toggle on"></div></td>
              </tr>
            `).join(""):""}
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="admin-card">
      <div class="admin-card-title">Footer Navigation</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:12px">
        ${["Solutions","Company","Resources","Legal"].map(e=>`
          <div style="background:#F8FAFC;border-radius:8px;padding:16px">
            <div style="font-weight:700;font-size:13px;color:#334155;margin-bottom:12px">${e}</div>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${["Link 1","Link 2","Link 3"].map(t=>`
                <div style="font-size:13px;color:#64748B;display:flex;justify-content:space-between;align-items:center">
                  <span>${t}</span>
                  <span style="cursor:pointer;color:#94A3B8">${b("edit",12)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;return jt(s,"Navigation")}function Cu(){Wt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>s.classList.toggle("on"))})}function Tu(){Ht("pricing");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Pricing Plans</h1>
        <p class="admin-page-subtitle">Manage pricing tiers and features</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      ${js.map(e=>`
        <div class="admin-card" style="position:relative;${e.isPopular?"border-color:var(--primary);border-width:2px":""}">
          ${e.badge?`<div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--primary);color:#fff;padding:3px 12px;border-radius:12px;font-size:11px;font-weight:700">${e.badge}</div>`:""}
          <div style="text-align:center;margin-bottom:16px">
            <h3 style="font-size:18px;font-weight:700;color:#1E293B">${e.name}</h3>
            <p style="font-size:13px;color:#64748B;margin-top:4px">${e.description}</p>
          </div>
          <div style="text-align:center;margin-bottom:20px">
            <div style="font-size:36px;font-weight:800;color:#1E293B">${e.monthlyPrice===0?"Free":`${e.currency}${e.monthlyPrice.toLocaleString()}`}</div>
            ${e.monthlyPrice>0?'<div style="font-size:13px;color:#94A3B8">per month</div>':""}
          </div>
          <div style="border-top:1px solid #E2E8F0;padding-top:16px">
            ${e.features.map(t=>`
              <div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:13px;color:${t.included?"#334155":"#CBD5E1"}">
                <span style="color:${t.included?"#22C55E":"#CBD5E1"}">${t.included?b("check",16):b("x",16)}</span>
                ${t.text}
              </div>
            `).join("")}
          </div>
          <button class="admin-btn admin-btn-secondary" style="width:100%;margin-top:16px;justify-content:center">${b("edit",14)} Edit Plan</button>
        </div>
      `).join("")}
    </div>
  `;return jt(s,"Pricing")}function Pu(){Wt()}function Au(){Ht("settings");const s={};su.forEach(t=>{s[t.group]||(s[t.group]=[]),s[t.group].push(t)});const e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Site Settings</h1>
        <p class="admin-page-subtitle">Manage global site configuration</p>
      </div>
      <button class="admin-btn admin-btn-primary" id="save-settings-btn">${b("check",16)} Save All Changes</button>
    </div>

    <div class="admin-card">
      ${Object.entries(s).map(([t,i])=>`
        <div class="settings-group">
          <div class="settings-group-title">${t}</div>
          ${i.map(r=>`
            <div class="settings-row">
              <div class="settings-key">${r.key.replace(/_/g," ").replace(/\b\w/g,n=>n.toUpperCase())}</div>
              <input class="admin-form-input" value="${r.value}" data-key="${r.key}" />
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;return jt(e,"Settings")}function $u(){Wt();const s=document.getElementById("save-settings-btn");s&&s.addEventListener("click",()=>{s.innerHTML=`${b("check",16)} Saved!`,s.style.background="#22C55E",setTimeout(()=>{s.innerHTML=`${b("check",16)} Save All Changes`,s.style.background=""},2e3)})}function Mu(){Ht("team");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Team Management</h1>
        <p class="admin-page-subtitle">${to.length} admin users</p>
      </div>
      <button class="admin-btn admin-btn-primary">${b("userPlus",16)} Invite Admin</button>
    </div>

    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Admin</th>
            <th>Email</th>
            <th>Role</th>
            <th>Last Login</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${to.map(e=>{const t=e.role==="super_admin"?"#FEF3C7":e.role==="editor"?"#DBEAFE":"#EDE9FE",i=e.role==="super_admin"?"#92400E":e.role==="editor"?"#1D4ED8":"#7C3AED";return`
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--primary)">${e.initials}</div>
                    <span style="font-weight:600;color:#1E293B">${e.name}</span>
                  </div>
                </td>
                <td style="font-size:13px;color:#64748B">${e.email}</td>
                <td><span style="background:${t};color:${i};padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;text-transform:capitalize">${e.role.replace("_"," ")}</span></td>
                <td style="font-size:13px;color:#64748B">${e.lastLogin}</td>
                <td><span class="status-badge status-${e.isActive?"active":"banned"}">${e.isActive?"Active":"Inactive"}</span></td>
                <td>
                  <div style="display:flex;gap:6px">
                    <button class="admin-btn admin-btn-secondary admin-btn-sm">${b("edit",14)}</button>
                    <button class="admin-btn ${e.isActive?"admin-btn-danger":"admin-btn-secondary"} admin-btn-sm">${e.isActive?"Deactivate":"Activate"}</button>
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `;return jt(s,"Team")}function Eu(){Wt()}te("/",()=>{const s=Yl();return setTimeout(()=>{Ul();const e=document.getElementById("milestones-placeholder");e&&(e.outerHTML=Zd(),setTimeout(eu,100));const t=document.getElementById("founder-placeholder");t&&(t.outerHTML=tu())},0),s});te("/services",()=>Gl());te("/services/:slug",s=>{const e=Vl(s);return setTimeout(Xl,0),e});te("/consultancy",()=>Kl());te("/consultancy/:slug",s=>Jl(s));te("/community",()=>{const s=Ql();return setTimeout(Zl,0),s});te("/articles",()=>ec());te("/articles/:slug",s=>tc(s));te("/pricing",()=>{const s=ic();return setTimeout(rc,0),s});te("/about",()=>nc());te("/contact",()=>{const s=sc();return setTimeout(ac,0),s});te("/signup",()=>oc());te("/login",()=>lc());te("/forgot-password",()=>{const s=cc();return setTimeout(dc,0),s});te("/profile/:username",s=>uc(s));te("/notifications",()=>hc());te("/book-slot",()=>{const s=fc();return setTimeout(mc,0),s});te("/admin",()=>{const s=ou();return setTimeout(lu,0),s});te("/admin/bookings",()=>{const s=cu();return setTimeout(du,0),s});te("/admin/articles",()=>{const s=uu();return setTimeout(hu,0),s});te("/admin/pages",()=>{const s=pu();return setTimeout(fu,0),s});te("/admin/services",()=>{const s=gu();return setTimeout(vu,0),s});te("/admin/community",()=>{const s=yu();return setTimeout(_u,0),s});te("/admin/media",()=>{const s=xu();return setTimeout(wu,0),s});te("/admin/navigation",()=>{const s=Su();return setTimeout(Cu,0),s});te("/admin/pricing",()=>{const s=Tu();return setTimeout(Pu,0),s});te("/admin/settings",()=>{const s=Au();return setTimeout($u,0),s});te("/admin/team",()=>{const s=Mu();return setTimeout(Eu,0),s});document.addEventListener("DOMContentLoaded",()=>{Il(),ql(),Ll()});
