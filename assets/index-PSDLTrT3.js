(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const zo=[];function se(s,e){const t=[],i=s.replace(/:([^/]+)/g,(n,r)=>(t.push(r),"([^/]+)"));zo.push({pattern:s,regex:new RegExp(`^${i}$`),paramNames:t,handler:e})}function xc(){return window.location.hash.slice(1)||"/"}function wc(s){for(const e of zo){const t=s.match(e.regex);if(t){const i={};return e.paramNames.forEach((n,r)=>{i[n]=t[r+1]}),{handler:e.handler,params:i}}}return null}function qa(){const s=xc(),e=document.getElementById("page-content"),t=document.getElementById("navbar"),i=document.getElementById("site-footer"),n=s.startsWith("/admin");t&&(t.style.display=n?"none":""),i&&(i.style.display=n?"none":""),n?(document.body.style.margin="0",document.body.style.background="#F1F5F9"):(document.body.style.margin="",document.body.style.background=""),window.scrollTo(0,0);const r=wc(s);r?(e.innerHTML="",e.innerHTML=r.handler(r.params)):e.innerHTML=`
      <div class="page-hero">
        <div class="container">
          <h1>404 — Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="#/" class="btn btn-white" style="margin-top:24px">Back to Home</a>
        </div>
      </div>`,Tc(),Sc(s)}function Sc(s){document.querySelectorAll(".nav-link").forEach(e=>{e.classList.remove("active");const t=e.getAttribute("data-path");t&&(s===t||t!=="/"&&s.startsWith(t))&&e.classList.add("active")})}function Tc(){const s=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),s.unobserve(i.target))})},{threshold:.1});document.querySelectorAll(".animate-on-scroll").forEach(t=>{s.observe(t)});const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(kc(i.target),e.unobserve(i.target))})},{threshold:.3});document.querySelectorAll("[data-count]").forEach(t=>{e.observe(t)})}function kc(s){const e=parseInt(s.getAttribute("data-count")),t=s.getAttribute("data-prefix")||"",i=s.getAttribute("data-suffix")||"",n=1500,r=performance.now();function a(o){const l=o-r,c=Math.min(l/n,1),d=1-Math.pow(1-c,3),f=Math.round(e*d);s.textContent=t+f.toLocaleString()+i,c<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}function Cc(){window.addEventListener("hashchange",qa),qa()}const Mc={chevronDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',messageCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',mapPin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',trendingUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',barChart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',checkCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',externalLink:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',dollarSign:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'};function $(s,e=20){return`<span style="display:inline-flex;width:${e}px;height:${e}px">${Mc[s]||""}</span>`}function Pc(){const s=document.getElementById("navbar");s.innerHTML=`
    <div class="container">
      <div class="nav-inner">
        <a href="#/" class="nav-logo">
          <img src="/tdcm-logo.webp" alt="TDCM Logo" width="40" height="40" style="display: block; border-radius: 8px;">
          <span>TDCM COMPANY</span>
        </a>

        <!-- Navigation links removed -->

        <div class="nav-actions">
          <a href="#/book-slot" class="btn btn-primary btn-sm">Book a Slot</a>
        </div>
      </div>
    </div>
  `,window.addEventListener("scroll",()=>{s.classList.toggle("scrolled",window.scrollY>10)})}function Ec(){document.getElementById("site-footer").innerHTML=`
    <div class="container">
      <div class="footer-simple">
        <div class="footer-company">
          <span style="font-size: 18px; font-weight: 600; color: var(--white);">TDCM COMPANY</span>
        </div>
        <div class="footer-linkedin">
          <a href="https://www.linkedin.com/in/tarun-dadlani-a393aa131/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display: inline-flex; align-items: center; gap: 8px; color: var(--white); text-decoration: none; transition: all 0.3s ease;">
            ${$("linkedin",24)}
          </a>
        </div>
      </div>
    </div>
  `}const Fo=[{slug:"recruitment",category:"service",title:"Recruitment Services",subtitle:"Find the right talent, faster",icon:"users",description:"End-to-end recruitment solutions that help you hire top talent 3× faster with AI-powered matching and dedicated human oversight.",heroHeadline:"Hire Top Talent, 3× Faster",heroSubheadline:"Our AI-powered recruitment engine combined with industry-expert recruiters delivers quality candidates in days, not months.",features:[{title:"AI Candidate Matching",desc:"Our proprietary algorithm scans 50M+ profiles to find your ideal candidates."},{title:"Dedicated Account Manager",desc:"A single point of contact who understands your culture and requirements."},{title:"End-to-End Process",desc:"From job spec to offer acceptance — we handle every touchpoint."},{title:"Diversity & Inclusion",desc:"Built-in bias reduction tools to ensure diverse talent pipelines."},{title:"Background Verification",desc:"Comprehensive checks on education, employment history, and references."},{title:"Onboarding Support",desc:"90-day onboarding check-ins to ensure retention and satisfaction."}],process:[{num:1,title:"Discovery Call",desc:"Understand your team, culture, and exact requirements."},{num:2,title:"Talent Search",desc:"AI-powered matching across 50M+ global profiles."},{num:3,title:"Screening",desc:"Technical assessments, culture fit, and reference checks."},{num:4,title:"Delivery",desc:"Shortlisted candidates with detailed profiles delivered."}],metrics:[{value:"72",suffix:"hrs",label:"Avg. First Shortlist"},{value:"94",suffix:"%",label:"Interview Accept Rate"},{value:"3",suffix:"×",label:"Faster Than Industry Avg"}],isFeatured:!1},{slug:"marketing",category:"service",title:"Marketing Services",subtitle:"Growth-driven performance marketing",icon:"trendingUp",description:"Data-driven marketing strategies that deliver measurable ROI across digital channels — from SEO and content to paid media and automation.",heroHeadline:"Marketing That Moves the Needle",heroSubheadline:"We combine creative storytelling with hard analytics to build campaigns that convert prospects into loyal customers.",features:[{title:"Performance Marketing",desc:"Google Ads, Meta, and LinkedIn campaigns optimized for conversions."},{title:"SEO & Content Strategy",desc:"Rank for the keywords that drive qualified traffic to your site."},{title:"Marketing Automation",desc:"Nurture sequences, lead scoring, and lifecycle campaigns."},{title:"Creative Production",desc:"Ad creatives, landing pages, and video content that convert."},{title:"Analytics & Attribution",desc:"Full-funnel tracking to understand every touchpoint."},{title:"Brand Strategy",desc:"Positioning, messaging, and visual identity that stands out."}],process:[{num:1,title:"Audit & Strategy",desc:"Deep-dive into your current marketing and define goals."},{num:2,title:"Campaign Build",desc:"Creative production, channel setup, and tracking configuration."},{num:3,title:"Launch & Optimize",desc:"Data-driven optimization with weekly performance reviews."},{num:4,title:"Scale & Report",desc:"Scale winning strategies and deliver transparent reporting."}],metrics:[{value:"340",suffix:"%",label:"Avg. ROAS"},{value:"67",suffix:"%",label:"Lead Cost Reduction"},{value:"2.4",suffix:"×",label:"Traffic Growth (6 months)"}],isFeatured:!0},{slug:"crm",category:"service",title:"Business Solutions",subtitle:"CRM & operations at scale",icon:"layers",description:"Custom CRM implementation, business process automation, and technology consulting to streamline your operations and boost efficiency.",heroHeadline:"Streamline Your Business Operations",heroSubheadline:"Custom CRM solutions and process automation that save your team 20+ hours per week and eliminate data silos.",features:[{title:"CRM Implementation",desc:"Setup, migration, and customization of leading CRM platforms."},{title:"Process Automation",desc:"Automate repetitive workflows to free up your team."},{title:"Data Integration",desc:"Connect all your tools into a single source of truth."},{title:"Custom Dashboards",desc:"Real-time visibility into sales, ops, and customer health."},{title:"Team Training",desc:"Hands-on training to ensure your team adopts the new systems."},{title:"Ongoing Support",desc:"Dedicated support and optimization post-launch."}],process:[{num:1,title:"Assessment",desc:"Map current workflows and identify automation opportunities."},{num:2,title:"Architecture",desc:"Design the optimal tech stack and integration plan."},{num:3,title:"Build & Migrate",desc:"Implement, integrate, and migrate data with zero downtime."},{num:4,title:"Train & Support",desc:"Go-live training and ongoing optimization support."}],metrics:[{value:"20",suffix:"+",label:"Team Hours Saved / Week"},{value:"99.9",suffix:"%",label:"Data Accuracy"},{value:"45",suffix:"%",label:"Faster Deal Cycles"}],isFeatured:!1}],Ro=[{slug:"go-to-market",title:"Go-To-Market Strategy",icon:"rocket",description:"A comprehensive strategy to take your product from concept to market with validated positioning, pricing, and channel strategy.",timeline:"6–8 weeks",forWhom:"Startups with a product ready to launch or pivoting to a new market",deliverables:["Market analysis report","Competitive positioning document","Channel strategy plan","Pricing model","Launch playbook"],outcomes:["Clear market positioning","Validated pricing","Channel partnerships","Launch readiness"]},{slug:"product-launch",title:"Product Launch",icon:"zap",description:"Full-service product launch management from pre-launch buzz to post-launch monitoring and iteration.",timeline:"4–6 weeks",forWhom:"Companies launching a new product, feature, or entering a new geography",deliverables:["Launch timeline","PR & communications plan","Campaign creatives","KPI dashboard","Post-launch analysis"],outcomes:["Successful launch execution","Media coverage","User acquisition targets met","Data-driven iteration plan"]},{slug:"0-to-90-plan",title:"0 to 90 Plan",icon:"target",description:"Your first 90 days from zero — a structured plan covering everything from incorporation to first revenue.",timeline:"90 days",forWhom:"First-time founders and early-stage startups before Series A",deliverables:["Business model canvas","Financial model","Hiring plan","Product roadmap","Investor pitch deck"],outcomes:["Clear business model","Ready for fundraising","First customers","Operational foundation set"]},{slug:"0-to-90-training",title:"0 to 90 Training",icon:"award",description:"Intensive training program for startup founders covering sales, marketing, finance, and team building in 90 days.",timeline:"90 days",forWhom:"Founders looking to build core business skills fast",deliverables:["Weekly training modules","Peer cohort access","Mentorship sessions","Action plans per module","Certificate of completion"],outcomes:["Sales confidence","Marketing fundamentals","Financial literacy","Leadership skills"]},{slug:"quarterly-health-analysis",title:"Quarterly Health Analysis",icon:"barChart",description:"A quarterly deep-dive into your business health — financials, operations, customer satisfaction, and growth trajectory.",timeline:"Recurring quarterly",forWhom:"Growth-stage companies wanting regular expert analysis",deliverables:["Financial health report","Operational efficiency review","Customer satisfaction analysis","Growth recommendations","Quarter-over-quarter comparison"],outcomes:["Early problem detection","Data-backed decisions","Continuous improvement","Investor-ready metrics"]}],Ts=[{slug:"future-of-ai-recruitment",title:"The Future of AI in Recruitment: What 2026 Looks Like",excerpt:"AI is transforming how companies find and hire talent. Here's what the latest research says about the state of AI-powered recruitment.",category:"Recruitment",author:"Nandkishor Singh",date:"Mar 5, 2026",readingTime:8,featured:!0,content:`<p>Artificial Intelligence is rapidly changing the landscape of talent acquisition. In 2026, we're seeing unprecedented adoption of AI tools across every stage of the hiring funnel — from sourcing and screening to interviewing and onboarding.</p>
    <h2>The State of AI Recruitment in 2026</h2>
    <p>According to our latest research, 78% of enterprise companies now use some form of AI in their recruitment process. This is up from just 35% in 2023. The most common applications include:</p>
    <ul><li>Resume parsing and candidate matching</li><li>Automated scheduling and communication</li><li>Predictive analytics for candidate success</li><li>Bias detection and reduction</li></ul>
    <h2>What This Means for Hiring Managers</h2>
    <p>The key takeaway is that AI doesn't replace human judgment — it augments it. The best results come from teams that combine AI efficiency with human intuition and empathy. At TDCM, we've built our recruitment practice around this principle.</p>`},{slug:"performance-marketing-guide",title:"10 Performance Marketing Strategies That Actually Work in 2026",excerpt:"Cut through the noise with marketing strategies backed by real data. From Meta Ads to LinkedIn ABM, here's what's driving results.",category:"Marketing",author:"Priya Sharma",date:"Feb 28, 2026",readingTime:12,featured:!1,content:"<p>Performance marketing continues to evolve rapidly. What worked in 2024 may not work today. Here are ten strategies that are delivering measurable ROI for our clients right now.</p>"},{slug:"startup-first-90-days",title:"Your First 90 Days as a Startup Founder: A Survival Guide",excerpt:"The first three months can make or break your startup. Here's a proven framework for navigating the chaos and building momentum.",category:"Startup",author:"Rahul Verma",date:"Feb 20, 2026",readingTime:10,featured:!1,content:"<p>Starting a company is one of the most exhilarating and terrifying experiences you can have. The first 90 days are critical — they set the tone for everything that follows.</p>"},{slug:"crm-implementation-mistakes",title:"7 CRM Implementation Mistakes That Cost Companies Millions",excerpt:"CRM implementations fail at an alarming rate. Learn from the most common pitfalls and how to avoid them in your organization.",category:"Business Solutions",author:"Amit Patel",date:"Feb 14, 2026",readingTime:7,featured:!1,content:"<p>A staggering 63% of CRM implementations fail to meet their objectives. The problem isn't the technology — it's the approach. Here are seven mistakes we see repeatedly.</p>"},{slug:"remote-team-hiring",title:"Building High-Performance Remote Teams: Lessons from 500+ Hires",excerpt:"Remote hiring requires a fundamentally different approach. Here's what we've learned from placing 500+ remote candidates.",category:"Recruitment",author:"Nandkishor Singh",date:"Feb 7, 2026",readingTime:9,featured:!1,content:"<p>Remote work is here to stay. But building effective remote teams requires more than just posting jobs on LinkedIn. It demands a rethinking of how we assess, interview, and onboard talent.</p>"},{slug:"seo-content-strategy-2026",title:"The SEO Content Strategy Framework for B2B Companies",excerpt:"Organic traffic remains the most cost-effective acquisition channel. Here's how B2B companies should approach SEO content in 2026.",category:"Marketing",author:"Priya Sharma",date:"Jan 30, 2026",readingTime:11,featured:!1,content:"<p>SEO is far from dead. In fact, for B2B companies, organic search remains the highest-ROI marketing channel by a significant margin. But the playbook has changed dramatically.</p>"}],ha=[{name:"Starter",slug:"starter",description:"For small teams getting started",monthlyPrice:0,annualPrice:0,currency:"₹",isPopular:!1,badge:null,ctaText:"Get Started Free",ctaHref:"#/signup",features:[{text:"Community access",included:!0},{text:"3 job postings / month",included:!0},{text:"Basic CRM dashboard",included:!0},{text:"Email support",included:!0},{text:"Marketing templates",included:!0},{text:"Dedicated account manager",included:!1},{text:"Custom integrations",included:!1},{text:"Priority support",included:!1}]},{name:"Growth",slug:"growth",description:"For scaling businesses",monthlyPrice:4999,annualPrice:3999,currency:"₹",isPopular:!0,badge:"Most Popular",ctaText:"Start Free Trial",ctaHref:"#/signup?plan=growth",features:[{text:"Everything in Starter",included:!0},{text:"Unlimited job postings",included:!0},{text:"Advanced CRM with automation",included:!0},{text:"Marketing campaign tools",included:!0},{text:"Analytics dashboard",included:!0},{text:"Dedicated account manager",included:!0},{text:"Custom integrations",included:!1},{text:"White-label reports",included:!1}]},{name:"Scale",slug:"scale",description:"For enterprise teams",monthlyPrice:14999,annualPrice:11999,currency:"₹",isPopular:!1,badge:null,ctaText:"Talk to Sales",ctaHref:"#/contact?intent=sales",features:[{text:"Everything in Growth",included:!0},{text:"Custom integrations",included:!0},{text:"White-label reports",included:!0},{text:"Priority 24/7 support",included:!0},{text:"Dedicated success team",included:!0},{text:"Custom workflows",included:!0},{text:"API access",included:!0},{text:"SLA guarantee",included:!0}]}],Ac=[{q:"How does the free Starter plan work?",a:"The Starter plan gives you access to our community, basic CRM features, and up to 3 job postings per month. No credit card required — upgrade anytime as your needs grow."},{q:"Can I switch plans at any time?",a:"Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. Downgrades take effect at the next billing cycle."},{q:"Is there a contract or commitment?",a:"No long-term contracts. Monthly plans are billed monthly. Annual plans offer a 20% discount and are billed yearly, but you can cancel anytime."},{q:"What payment methods do you accept?",a:"We accept all major credit cards, UPI, net banking, and bank transfers for annual plans. Enterprise clients can also pay via invoice."},{q:"Do you offer custom enterprise plans?",a:"Yes! Our Scale plan is our most comprehensive offering, but we also create fully custom plans for large organizations. Contact our sales team to discuss your requirements."},{q:"What kind of support is included?",a:"Starter includes email support (48h response). Growth includes a dedicated account manager. Scale includes 24/7 priority support with guaranteed response times."}],$c=[{name:"Rajesh Kumar",role:"CEO",company:"TechVista Solutions",quote:"TDCM transformed our hiring process. We went from 45-day average time-to-hire to just 12 days. The quality of candidates is consistently exceptional.",rating:5,initials:"RK"},{name:"Sneha Patel",role:"VP Marketing",company:"GrowthStack",quote:"Our ROAS improved by 280% within the first quarter of working with TDCM's marketing team. They don't just run campaigns — they build growth engines.",rating:5,initials:"SP"},{name:"Arjun Menon",role:"Founder",company:"NexaWave",quote:"The 0-to-90 program gave us the structure and clarity we desperately needed. From idea to first revenue in 60 days — I can't recommend it enough.",rating:5,initials:"AM"},{name:"Divya Sharma",role:"COO",company:"ScaleUp India",quote:"Implementing a CRM with TDCM was seamless. Our team adoption rate hit 94% in the first month — that's unheard of in our industry.",rating:5,initials:"DS"},{name:"Vikram Joshi",role:"Head of Sales",company:"CloudBridge",quote:"TDCM's recruitment team found us a VP of Sales in just 8 days. He's now been with us for a year and has doubled our revenue. Incredible.",rating:5,initials:"VJ"},{name:"Anita Desai",role:"CMO",company:"FinEdge",quote:"The quarterly health analysis service has become our most valuable external input. It's like having a world-class consulting firm on retainer.",rating:5,initials:"AD"}],Dc=[{value:500,suffix:"+",label:"Clients Served"},{value:98,suffix:"%",label:"Client Satisfaction"},{value:12,suffix:"+",label:"Years Experience"},{value:340,suffix:"%",label:"Avg. Client ROI"}],No=[{id:"1",author:"Ananya Gupta",initials:"AG",time:"2 hours ago",category:"Marketing",content:"Just ran our first Google Performance Max campaign using TDCM's framework. 340% ROAS in the first week! 🚀 The key was isolating asset groups by audience segment rather than by product. Happy to share the setup if anyone's interested.",likes:24,comments:8},{id:"2",author:"Vikram Mehta",initials:"VM",time:"5 hours ago",category:"Hiring",content:"Looking for advice on structuring technical interviews for remote engineering candidates. We've been having a lot of no-shows and dropoffs. Any tips from the community?",likes:12,comments:15},{id:"3",author:"Sarah Chen",initials:"SC",time:"1 day ago",category:"CRM",content:"Migrated from Salesforce to HubSpot with TDCM's help last quarter. The transition was smoother than expected — zero data loss and our team actually prefers the new interface. AMA about the migration process.",likes:45,comments:22},{id:"4",author:"Arjun Reddy",initials:"AR",time:"1 day ago",category:"Startup",content:"Completed the 0-to-90 program last month. The structured approach to validating our business model saved us from making a costly pivot. Now we have 3 paying customers and a clear roadmap to Series A.",likes:67,comments:19},{id:"5",author:"Meera Joshi",initials:"MJ",time:"2 days ago",category:"Marketing",content:"Shared a detailed breakdown of our content strategy that grew organic traffic 250% in 6 months in the latest blog post. SEO is far from dead — you just need the right framework.",likes:33,comments:11},{id:"6",author:"Raj Kapoor",initials:"RK",time:"3 days ago",category:"General",content:"Great session at the TDCM community meetup in Mumbai last weekend! Met some incredible founders and marketers. Looking forward to the Bangalore chapter next month. 🎉",likes:56,comments:7},{id:"7",author:"Priya Nair",initials:"PN",time:"4 days ago",category:"Hiring",content:"We just hired our 10th employee using TDCM's recruitment service. From posting to offer acceptance, it took only 11 days. Their candidate quality is consistently excellent.",likes:38,comments:5},{id:"8",author:"Deepak Sharma",initials:"DS",time:"5 days ago",category:"CRM",content:"Pro tip: If you're implementing a CRM, start with your reporting requirements first, then work backwards to data fields. Most implementations fail because people think about inputs before outputs.",likes:89,comments:31}],Oc=["All","Marketing","Hiring","CRM","Startup","General"];function Va(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function ma(s={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]>"u"?s[i]=e[i]:Va(e[i])&&Va(s[i])&&Object.keys(e[i]).length>0&&ma(s[i],e[i])})}const Go={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ni(){const s=typeof document<"u"?document:{};return ma(s,Go),s}const Lc={document:Go,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function lt(){const s=typeof window<"u"?window:{};return ma(s,Lc),s}function Bc(s=""){return s.trim().split(" ").filter(e=>!!e.trim())}function Ic(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ho(s,e=0){return setTimeout(s,e)}function Kn(){return Date.now()}function zc(s){const e=lt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Fc(s,e="x"){const t=lt();let i,n,r;const a=zc(s);return t.WebKitCSSMatrix?(n=a.transform||a.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function Cn(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Rc(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function xt(...s){const e=Object(s[0]);for(let t=1;t<s.length;t+=1){const i=s[t];if(i!=null&&!Rc(i)){const n=Object.keys(Object(i)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,a=n.length;r<a;r+=1){const o=n[r],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(Cn(e[o])&&Cn(i[o])?i[o].__swiper__?e[o]=i[o]:xt(e[o],i[o]):!Cn(e[o])&&Cn(i[o])?(e[o]={},i[o].__swiper__?e[o]=i[o]:xt(e[o],i[o])):e[o]=i[o])}}}return e}function hs(s,e,t){s.style.setProperty(e,t)}function qo({swiper:s,targetPosition:e,side:t}){const i=lt(),n=-s.translate;let r=null,a;const o=s.params.speed;s.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(s.cssModeFrameID);const l=e>n?"next":"prev",c=(f,h)=>l==="next"&&f>=h||l==="prev"&&f<=h,d=()=>{a=new Date().getTime(),r===null&&(r=a);const f=Math.max(Math.min((a-r)/o,1),0),h=.5-Math.cos(f*Math.PI)/2;let u=n+h*(e-n);if(c(u,e)&&(u=e),s.wrapperEl.scrollTo({[t]:u}),c(u,e)){s.wrapperEl.style.overflow="hidden",s.wrapperEl.style.scrollSnapType="",setTimeout(()=>{s.wrapperEl.style.overflow="",s.wrapperEl.scrollTo({[t]:u})}),i.cancelAnimationFrame(s.cssModeFrameID);return}s.cssModeFrameID=i.requestAnimationFrame(d)};d()}function ti(s,e=""){const t=lt(),i=[...s.children];return t.HTMLSlotElement&&s instanceof HTMLSlotElement&&i.push(...s.assignedElements()),e?i.filter(n=>n.matches(e)):i}function Nc(s,e){const t=[e];for(;t.length>0;){const i=t.shift();if(s===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function Gc(s,e){const t=lt();let i=e.contains(s);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(s),i||(i=Nc(s,e))),i}function Jn(s){try{console.warn(s);return}catch{}}function Qn(s,e=[]){const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:Bc(e)),t}function Hc(s,e){const t=[];for(;s.previousElementSibling;){const i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function qc(s,e){const t=[];for(;s.nextElementSibling;){const i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function Ci(s,e){return lt().getComputedStyle(s,null).getPropertyValue(e)}function Zn(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Vo(s,e){const t=[];let i=s.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Gr(s,e,t){const i=lt();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Le(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}function Hr(s,e=""){typeof trustedTypes<"u"?s.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):s.innerHTML=e}let vr;function Vc(){const s=lt(),e=ni();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function jo(){return vr||(vr=Vc()),vr}let yr;function jc({userAgent:s}={}){const e=jo(),t=lt(),i=t.navigator.platform,n=s||t.navigator.userAgent,r={ios:!1,android:!1},a=t.screen.width,o=t.screen.height,l=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=n.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=i==="Win32";let u=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&u&&e.touch&&m.indexOf(`${a}x${o}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),u=!1),l&&!h&&(r.os="android",r.android=!0),(c||f||d)&&(r.os="ios",r.ios=!0),r}function Wo(s={}){return yr||(yr=jc(s)),yr}let br;function Wc(){const s=lt(),e=Wo();let t=!1;function i(){const o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(s.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=l<16||l===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=i(),a=r||n&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:n}}function Yo(){return br||(br=Wc()),br}function Yc({swiper:s,on:e,emit:t}){const i=lt();let n=null,r=null;const a=()=>{!s||s.destroyed||!s.initialized||(t("beforeResize"),t("resize"))},o=()=>{!s||s.destroyed||!s.initialized||(n=new ResizeObserver(d=>{r=i.requestAnimationFrame(()=>{const{width:f,height:h}=s;let u=f,m=h;d.forEach(({contentBoxSize:p,contentRect:b,target:g})=>{g&&g!==s.el||(u=b?b.width:(p[0]||p).inlineSize,m=b?b.height:(p[0]||p).blockSize)}),(u!==f||m!==h)&&a()})}),n.observe(s.el))},l=()=>{r&&i.cancelAnimationFrame(r),n&&n.unobserve&&s.el&&(n.unobserve(s.el),n=null)},c=()=>{!s||s.destroyed||!s.initialized||t("orientationchange")};e("init",()=>{if(s.params.resizeObserver&&typeof i.ResizeObserver<"u"){o();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function Xc({swiper:s,extendParams:e,on:t,emit:i}){const n=[],r=lt(),a=(c,d={})=>{const f=r.MutationObserver||r.WebkitMutationObserver,h=new f(u=>{if(s.__preventObserver__)return;if(u.length===1){i("observerUpdate",u[0]);return}const m=function(){i("observerUpdate",u[0])};r.requestAnimationFrame?r.requestAnimationFrame(m):r.setTimeout(m,0)});h.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:s.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),n.push(h)},o=()=>{if(s.params.observer){if(s.params.observeParents){const c=Vo(s.hostEl);for(let d=0;d<c.length;d+=1)a(c[d])}a(s.hostEl,{childList:s.params.observeSlideChildren}),a(s.wrapperEl,{attributes:!1})}},l=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",l)}var Uc={on(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const n=t?"unshift":"push";return s.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](e)}),i},once(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function n(...r){i.off(s,n),n.__emitterProxy&&delete n.__emitterProxy,e.apply(i,r)}return n.__emitterProxy=e,i.on(s,n,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(...s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,n;return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],i=s.slice(1,s.length),n=e):(t=s[0].events,i=s[0].data,n=s[0].context||e),i.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(n,[a,...i])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(o=>{o.apply(n,i)})}),e}};function Kc(){const s=this;let e,t;const i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(Ci(i,"padding-left")||0,10)-parseInt(Ci(i,"padding-right")||0,10),t=t-parseInt(Ci(i,"padding-top")||0,10)-parseInt(Ci(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Jc(){const s=this;function e(k,A){return parseFloat(k.getPropertyValue(s.getDirectionLabel(A))||0)}const t=s.params,{wrapperEl:i,slidesEl:n,rtlTranslate:r,wrongRTL:a}=s,o=s.virtual&&t.virtual.enabled,l=o?s.virtual.slides.length:s.slides.length,c=ti(n,`.${s.params.slideClass}, swiper-slide`),d=o?s.virtual.slides.length:c.length;let f=[];const h=[],u=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(s));let p=t.slidesOffsetAfter;typeof p=="function"&&(p=t.slidesOffsetAfter.call(s));const b=s.snapGrid.length,g=s.slidesGrid.length,v=s.size-m-p;let y=t.spaceBetween,_=-m,w=0,M=0;if(typeof v>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*v:typeof y=="string"&&(y=parseFloat(y)),s.virtualSize=-y-m-p,c.forEach(k=>{r?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(hs(i,"--swiper-centered-offset-before",""),hs(i,"--swiper-centered-offset-after","")),t.cssMode&&(hs(i,"--swiper-slides-offset-before",`${m}px`),hs(i,"--swiper-slides-offset-after",`${p}px`));const T=t.grid&&t.grid.rows>1&&s.grid;T?s.grid.initSlides(c):s.grid&&s.grid.unsetSlides();let S;const C=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(k=>typeof t.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<d;k+=1){S=0;const A=c[k];if(!(A&&(T&&s.grid.updateSlide(k,A,c),Ci(A,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(S=t.virtual.slidesPerViewAutoSlideSize),S&&A&&(t.roundLengths&&(S=Math.floor(S)),A.style[s.getDirectionLabel("width")]=`${S}px`);else if(t.slidesPerView==="auto"){C&&(A.style[s.getDirectionLabel("width")]="");const E=getComputedStyle(A),L=A.style.transform,B=A.style.webkitTransform;if(L&&(A.style.transform="none"),B&&(A.style.webkitTransform="none"),t.roundLengths)S=s.isHorizontal()?Gr(A,"width"):Gr(A,"height");else{const F=e(E,"width"),H=e(E,"padding-left"),O=e(E,"padding-right"),D=e(E,"margin-left"),R=e(E,"margin-right"),x=E.getPropertyValue("box-sizing");if(x&&x==="border-box")S=F+D+R;else{const{clientWidth:Z,offsetWidth:Ie}=A;S=F+H+O+D+R+(Ie-Z)}}L&&(A.style.transform=L),B&&(A.style.webkitTransform=B),t.roundLengths&&(S=Math.floor(S))}else S=(v-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(S=Math.floor(S)),A&&(A.style[s.getDirectionLabel("width")]=`${S}px`);A&&(A.swiperSlideSize=S),u.push(S),t.centeredSlides?(_=_+S/2+w/2+y,w===0&&k!==0&&(_=_-v/2-y),k===0&&(_=_-v/2-y),Math.abs(_)<1/1e3&&(_=0),t.roundLengths&&(_=Math.floor(_)),M%t.slidesPerGroup===0&&f.push(_),h.push(_)):(t.roundLengths&&(_=Math.floor(_)),(M-Math.min(s.params.slidesPerGroupSkip,M))%s.params.slidesPerGroup===0&&f.push(_),h.push(_),_=_+S+y),s.virtualSize+=S+y,w=S,M+=1}}if(s.virtualSize=Math.max(s.virtualSize,v)+p,r&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+y}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+y}px`),T&&s.grid.updateWrapperSize(S,f),!t.centeredSlides){const k=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,A=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||k);let E=f.length;if(A){let B;if(t.slidesPerView==="auto"){B=1;let F=0;for(let H=u.length-1;H>=0&&(F+=u[H]+(H<u.length-1?y:0),F<=v);H-=1)B=u.length-H}else B=Math.floor(t.slidesPerView);E=Math.max(d-B,0)}const L=[];for(let B=0;B<f.length;B+=1){let F=f[B];t.roundLengths&&(F=Math.floor(F)),A?B<=E&&L.push(F):f[B]<=s.virtualSize-v&&L.push(F)}f=L,Math.floor(s.virtualSize-v)-Math.floor(f[f.length-1])>1&&(A||f.push(s.virtualSize-v))}if(o&&t.loop){const k=u[0]+y;if(t.slidesPerGroup>1){const A=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),E=k*t.slidesPerGroup;for(let L=0;L<A;L+=1)f.push(f[f.length-1]+E)}for(let A=0;A<s.virtual.slidesBefore+s.virtual.slidesAfter;A+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+k),h.push(h[h.length-1]+k),s.virtualSize+=k}if(f.length===0&&(f=[0]),y!==0){const k=s.isHorizontal()&&r?"marginLeft":s.getDirectionLabel("marginRight");c.filter((A,E)=>!t.cssMode||t.loop?!0:E!==c.length-1).forEach(A=>{A.style[k]=`${y}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let k=0;u.forEach(E=>{k+=E+(y||0)}),k-=y;const A=k>v?k-v:0;f=f.map(E=>E<=0?-m:E>A?A+p:E)}if(t.centerInsufficientSlides){let k=0;if(u.forEach(A=>{k+=A+(y||0)}),k-=y,k<v){const A=(v-k)/2;f.forEach((E,L)=>{f[L]=E-A}),h.forEach((E,L)=>{h[L]=E+A})}}if(Object.assign(s,{slides:c,snapGrid:f,slidesGrid:h,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){hs(i,"--swiper-centered-offset-before",`${-f[0]}px`),hs(i,"--swiper-centered-offset-after",`${s.size/2-u[u.length-1]/2}px`);const k=-s.snapGrid[0],A=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(E=>E+k),s.slidesGrid=s.slidesGrid.map(E=>E+A)}if(d!==l&&s.emit("slidesLengthChange"),f.length!==b&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),h.length!==g&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const k=`${t.containerModifierClass}backface-hidden`,A=s.el.classList.contains(k);d<=t.maxBackfaceHiddenSlides?A||s.el.classList.add(k):A&&s.el.classList.remove(k)}}function Qc(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let n=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const o=e.activeIndex+r;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const o=t[r].offsetHeight;n=o>n?o:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function Zc(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}const ja=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function ed(s=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:n,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-s;n&&(a=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){const c=i[l];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);const f=(a+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),h=(a-r[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),u=-(a-d),m=u+e.slidesSizesGrid[l],p=u>=0&&u<=e.size-e.slidesSizesGrid[l],b=u>=0&&u<e.size-1||m>1&&m<=e.size||u<=0&&m>=e.size;b&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),ja(c,b,t.slideVisibleClass),ja(c,p,t.slideFullyVisibleClass),c.progress=n?-f:f,c.originalProgress=n?-h:h}}function td(s){const e=this;if(typeof s>"u"){const d=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*d||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:r,isEnd:a,progressLoop:o}=e;const l=r,c=a;if(i===0)n=0,r=!0,a=!0;else{n=(s-e.minTranslate())/i;const d=Math.abs(s-e.minTranslate())<1,f=Math.abs(s-e.maxTranslate())<1;r=d||n<=0,a=f||n>=1,d&&(n=0),f&&(n=1)}if(t.loop){const d=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[d],u=e.slidesGrid[f],m=e.slidesGrid[e.slidesGrid.length-1],p=Math.abs(s);p>=h?o=(p-h)/m:o=(p+m-u)/m,o>1&&(o-=1)}Object.assign(e,{progress:n,progressLoop:o,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&e.emit("fromEdge"),e.emit("progress",n)}const _r=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function id(){const s=this,{slides:e,params:t,slidesEl:i,activeIndex:n}=s,r=s.virtual&&t.virtual.enabled,a=s.grid&&t.grid&&t.grid.rows>1,o=f=>ti(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let l,c,d;if(r)if(t.loop){let f=n-s.virtual.slidesBefore;f<0&&(f=s.virtual.slides.length+f),f>=s.virtual.slides.length&&(f-=s.virtual.slides.length),l=o(`[data-swiper-slide-index="${f}"]`)}else l=o(`[data-swiper-slide-index="${n}"]`);else a?(l=e.find(f=>f.column===n),d=e.find(f=>f.column===n+1),c=e.find(f=>f.column===n-1)):l=e[n];l&&(a||(d=qc(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=Hc(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{_r(f,f===l,t.slideActiveClass),_r(f,f===d,t.slideNextClass),_r(f,f===c,t.slidePrevClass)}),s.emitSlidesClasses()}const Nn=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let n=i.querySelector(`.${s.params.lazyPreloaderClass}`);!n&&s.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},xr=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},qr=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),n=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const a=n,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+i+c)),s.slides.forEach((l,c)=>{o.includes(l.column)&&xr(s,c)});return}const r=n+i-1;if(s.params.rewind||s.params.loop)for(let a=n-e;a<=r+e;a+=1){const o=(a%t+t)%t;(o<n||o>r)&&xr(s,o)}else for(let a=Math.max(n-e,0);a<=Math.min(r+e,t-1);a+=1)a!==n&&(a>r||a<n)&&xr(s,a)};function sd(s){const{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate;let n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?n=r:i>=e[r]&&i<e[r+1]&&(n=r+1):i>=e[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function nd(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:a,snapIndex:o}=e;let l=s,c;const d=u=>{let m=u-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=sd(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const u=Math.min(n.slidesPerGroupSkip,l);c=u+Math.floor((l-u)/n.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===r&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const f=e.grid&&n.grid&&n.grid.rows>1;let h;if(e.virtual&&n.virtual.enabled)n.loop?h=d(l):h=l;else if(f){const u=e.slides.find(p=>p.column===l);let m=parseInt(u.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(u),0)),h=Math.floor(m/n.grid.rows)}else if(e.slides[l]){const u=e.slides[l].getAttribute("data-swiper-slide-index");u?h=parseInt(u,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:r,activeIndex:l}),e.initialized&&qr(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function rd(s,e){const t=this,i=t.params;let n=s.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(n=o)});let r=!1,a;if(n){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===n){r=!0,a=o;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var ad={updateSize:Kc,updateSlides:Jc,updateAutoHeight:Qc,updateSlidesOffset:Zc,updateSlidesProgress:ed,updateProgress:td,updateSlidesClasses:id,updateActiveIndex:nd,updateClickedSlide:rd};function od(s=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=e;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let a=Fc(r,s);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function ld(s,e){const t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=i?-s:s:l=s,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:n.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const f=t.maxTranslate()-t.minTranslate();f===0?d=0:d=(s-t.minTranslate())/f,d!==a&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function cd(){return-this.snapGrid[0]}function dd(){return-this.snapGrid[this.snapGrid.length-1]}function ud(s=0,e=this.params.speed,t=!0,i=!0,n){const r=this,{params:a,wrapperEl:o}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(i&&s>l?d=l:i&&s<c?d=c:d=s,r.updateProgress(d),a.cssMode){const f=r.isHorizontal();if(e===0)o[f?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return qo({swiper:r,targetPosition:-d,side:f?"left":"top"}),!0;o.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var fd={getTranslate:od,setTranslate:ld,minTranslate:cd,maxTranslate:dd,translateTo:ud};function pd(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function Xo({swiper:s,runCallbacks:e,direction:t,step:i}){const{activeIndex:n,previousIndex:r}=s;let a=t;a||(n>r?a="next":n<r?a="prev":a="reset"),s.emit(`transition${i}`),e&&a==="reset"?s.emit(`slideResetTransition${i}`):e&&n!==r&&(s.emit(`slideChangeTransition${i}`),a==="next"?s.emit(`slideNextTransition${i}`):s.emit(`slidePrevTransition${i}`))}function hd(s=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Xo({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function md(s=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Xo({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var gd={setTransition:pd,transitionStart:hd,transitionEnd:md};function vd(s=0,e,t=!0,i,n){typeof s=="string"&&(s=parseInt(s,10));const r=this;let a=s;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:h,wrapperEl:u,enabled:m}=r;if(!m&&!i&&!n||r.destroyed||r.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const p=Math.min(r.params.slidesPerGroupSkip,a);let b=p+Math.floor((a-p)/r.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const g=-l[b];if(o.normalizeSlideIndex)for(let T=0;T<c.length;T+=1){const S=-Math.floor(g*100),C=Math.floor(c[T]*100),k=Math.floor(c[T+1]*100);typeof c[T+1]<"u"?S>=C&&S<k-(k-C)/2?a=T:S>=C&&S<k&&(a=T+1):S>=C&&(a=T)}if(r.initialized&&a!==f&&(!r.allowSlideNext&&(h?g>r.translate&&g>r.minTranslate():g<r.translate&&g<r.minTranslate())||!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(f||0)!==a))return!1;a!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(g);let v;a>f?v="next":a<f?v="prev":v="reset";const y=r.virtual&&r.params.virtual.enabled;if(!(y&&n)&&(h&&-g===r.translate||!h&&g===r.translate))return r.updateActiveIndex(a),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),o.effect!=="slide"&&r.setTranslate(g),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(o.cssMode){const T=r.isHorizontal(),S=h?g:-g;if(e===0)y&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),y&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{u[T?"scrollLeft":"scrollTop"]=S})):u[T?"scrollLeft":"scrollTop"]=S,y&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return qo({swiper:r,targetPosition:S,side:T?"left":"top"}),!0;u.scrollTo({[T?"left":"top"]:S,behavior:"smooth"})}return!0}const M=Yo().isSafari;return y&&!n&&M&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(e),r.setTranslate(g),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,v),e===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(S){!r||r.destroyed||S.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function yd(s=0,e,t=!0,i){typeof s=="string"&&(s=parseInt(s,10));const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let a=s;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)a=a+n.virtual.slidesBefore;else{let o;if(r){const p=a*n.params.grid.rows;o=n.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else o=n.getSlideIndexByData(a);const l=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:f}=n.params,h=c||!!d||!!f;let u=n.params.slidesPerView;u==="auto"?u=n.slidesPerViewDynamic():(u=Math.ceil(parseFloat(n.params.slidesPerView,10)),h&&u%2===0&&(u=u+1));let m=l-o<u;if(h&&(m=m||o<Math.ceil(u/2)),i&&h&&n.params.slidesPerView!=="auto"&&!r&&(m=!1),m){const p=h?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?o+1:o-l+1,slideRealIndex:p==="next"?n.realIndex:void 0})}if(r){const p=a*n.params.grid.rows;a=n.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else a=n.getSlideIndexByData(a)}return requestAnimationFrame(()=>{n.slideTo(a,e,t,i)}),n}function bd(s,e=!0,t){const i=this,{enabled:n,params:r,animating:a}=i;if(!n||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let o=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:o,c=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,s,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+l,s,e,t)}function _d(s,e=!0,t){const i=this,{params:n,snapGrid:r,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);const d=i.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=o?i.translate:-i.translate;function h(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const u=h(f),m=r.map(v=>h(v)),p=n.freeMode&&n.freeMode.enabled;let b=r[m.indexOf(u)-1];if(typeof b>"u"&&(n.cssMode||p)){let v;r.forEach((y,_)=>{u>=y&&(v=_)}),typeof v<"u"&&(b=p?r[v]:r[v>0?v-1:v])}let g=0;if(typeof b<"u"&&(g=a.indexOf(b),g<0&&(g=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(g=g-i.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),n.rewind&&i.isBeginning){const v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,s,e,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(g,s,e,t)}),!0;return i.slideTo(g,s,e,t)}function xd(s,e=!0,t){const i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function wd(s,e=!0,t,i=.5){const n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);let r=n.activeIndex;const a=Math.min(n.params.slidesPerGroupSkip,r),o=a+Math.floor((r-a)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){const c=n.snapGrid[o],d=n.snapGrid[o+1];l-c>(d-c)*i&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[o-1],d=n.snapGrid[o];l-c<=(d-c)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,s,e,t)}function Sd(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let n=s.getSlideIndexWhenGrid(s.clickedIndex),r;const a=s.isElement?"swiper-slide":`.${e.slideClass}`,o=s.grid&&s.params.grid&&s.params.grid.rows>1;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s.slideToLoop(r):n>(o?(s.slides.length-i)/2-(s.params.grid.rows-1):s.slides.length-i)?(s.loopFix(),n=s.getSlideIndex(ti(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Ho(()=>{s.slideTo(n)})):s.slideTo(n)}else s.slideTo(n)}var Td={slideTo:vd,slideToLoop:yd,slideNext:bd,slidePrev:_d,slideReset:xd,slideToClosest:wd,slideToClickedSlide:Sd};function kd(s,e){const t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{ti(n,`.${i.slideClass}, swiper-slide`).forEach((m,p)=>{m.setAttribute("data-swiper-slide-index",p)})},a=()=>{const u=ti(n,`.${i.slideBlankClass}`);u.forEach(m=>{m.remove()}),u.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&a();const l=i.slidesPerGroup*(o?i.grid.rows:1),c=t.slides.length%l!==0,d=o&&t.slides.length%i.grid.rows!==0,f=u=>{for(let m=0;m<u;m+=1){const p=t.isElement?Qn("swiper-slide",[i.slideBlankClass]):Qn("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(p)}};if(c){if(i.loopAddBlankSlides){const u=l-t.slides.length%l;f(u),t.recalcSlides(),t.updateSlides()}else Jn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(i.loopAddBlankSlides){const u=i.grid.rows-t.slides.length%i.grid.rows;f(u),t.recalcSlides(),t.updateSlides()}else Jn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const h=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:s,direction:h?void 0:"next",initial:e})}function Cd({slideRealIndex:s,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:n,initial:r,byController:a,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:h,params:u}=l,{centeredSlides:m,slidesOffsetBefore:p,slidesOffsetAfter:b,initialSlide:g}=u,v=m||!!p||!!b;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&u.virtual.enabled){e&&(!v&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v&&l.snapIndex<u.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=f,l.emit("loopFix");return}let y=u.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(u.slidesPerView,10)),v&&y%2===0&&(y=y+1));const _=u.slidesPerGroupAuto?y:u.slidesPerGroup;let w=v?Math.max(_,Math.ceil(y/2)):_;w%_!==0&&(w+=_-w%_),w+=u.loopAdditionalSlides,l.loopedSlides=w;const M=l.grid&&u.grid&&u.grid.rows>1;c.length<y+w||l.params.effect==="cards"&&c.length<y+w*2?Jn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):M&&u.grid.fill==="row"&&Jn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const T=[],S=[],C=M?Math.ceil(c.length/u.grid.rows):c.length,k=r&&C-g<y&&!v;let A=k?g:l.activeIndex;typeof n>"u"?n=l.getSlideIndex(c.find(D=>D.classList.contains(u.slideActiveClass))):A=n;const E=t==="next"||!t,L=t==="prev"||!t;let B=0,F=0;const O=(M?c[n].column:n)+(v&&typeof i>"u"?-y/2+.5:0);if(O<w){B=Math.max(w-O,_);for(let D=0;D<w-O;D+=1){const R=D-Math.floor(D/C)*C;if(M){const x=C-R-1;for(let Z=c.length-1;Z>=0;Z-=1)c[Z].column===x&&T.push(Z)}else T.push(C-R-1)}}else if(O+y>C-w){F=Math.max(O-(C-w*2),_),k&&(F=Math.max(F,y-C+g+1));for(let D=0;D<F;D+=1){const R=D-Math.floor(D/C)*C;M?c.forEach((x,Z)=>{x.column===R&&S.push(Z)}):S.push(R)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<y+w*2&&(S.includes(n)&&S.splice(S.indexOf(n),1),T.includes(n)&&T.splice(T.indexOf(n),1)),L&&T.forEach(D=>{c[D].swiperLoopMoveDOM=!0,h.prepend(c[D]),c[D].swiperLoopMoveDOM=!1}),E&&S.forEach(D=>{c[D].swiperLoopMoveDOM=!0,h.append(c[D]),c[D].swiperLoopMoveDOM=!1}),l.recalcSlides(),u.slidesPerView==="auto"?l.updateSlides():M&&(T.length>0&&L||S.length>0&&E)&&l.slides.forEach((D,R)=>{l.grid.updateSlide(R,D,l.slides)}),u.watchSlidesProgress&&l.updateSlidesOffset(),e){if(T.length>0&&L){if(typeof s>"u"){const D=l.slidesGrid[A],x=l.slidesGrid[A+B]-D;o?l.setTranslate(l.translate-x):(l.slideTo(A+Math.ceil(B),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-x,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-x))}else if(i){const D=M?T.length/u.grid.rows:T.length;l.slideTo(l.activeIndex+D,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&E)if(typeof s>"u"){const D=l.slidesGrid[A],x=l.slidesGrid[A-F]-D;o?l.setTranslate(l.translate-x):(l.slideTo(A-F,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-x,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-x))}else{const D=M?S.length/u.grid.rows:S.length;l.slideTo(l.activeIndex-D,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=f,l.controller&&l.controller.control&&!a){const D={slideRealIndex:s,direction:t,setTranslate:i,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...D,slideTo:R.params.slidesPerView===u.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...D,slideTo:l.controller.control.params.slidesPerView===u.slidesPerView?e:!1})}l.emit("loopFix")}function Md(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||!t||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const i=[];s.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),s.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var Pd={loopCreate:kd,loopFix:Cd,loopDestroy:Md};function Ed(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Ad(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var $d={setGrabCursor:Ed,unsetGrabCursor:Ad};function Dd(s,e=this){function t(i){if(!i||i===ni()||i===lt())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(s);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(e)}function Wa(s,e,t){const i=lt(),{params:n}=s,r=n.edgeSwipeDetection,a=n.edgeSwipeThreshold;return r&&(t<=a||t>=i.innerWidth-a)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Od(s){const e=this,t=ni();let i=s;i.originalEvent&&(i=i.originalEvent);const n=e.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Wa(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:a,enabled:o}=e;if(!o||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=i.target;if(r.touchEventsTarget==="wrapper"&&!Gc(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(l=d[0]);const f=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(h?Dd(f,l):l.closest(f))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const u=a.currentX,m=a.currentY;if(!Wa(e,i,u))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=u,a.startY=m,n.touchStartTime=Kn(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let p=!0;l.matches(n.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&t.activeElement.blur();const b=p&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||b)&&!l.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ld(s){const e=ni(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:a,enabled:o}=t;if(!o||!n.simulateTouch&&s.pointerType==="mouse")return;let l=s;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(w=>w.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const d=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:d,startY:f,currentX:d,currentY:f}),i.touchStartTime=Kn());return}if(n.touchReleaseOnEdges&&!n.loop)if(t.isVertical()){if(f<r.startY&&t.translate<=t.maxTranslate()||f>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(a&&(d>r.startX&&-t.translate<=t.maxTranslate()||d<r.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=f;const h=r.currentX-r.startX,u=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+u**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let w;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:h*h+u*u>=25&&(w=Math.atan2(Math.abs(u),Math.abs(h))*180/Math.PI,i.isScrolling=t.isHorizontal()?w>n.touchAngle:90-w>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let m=t.isHorizontal()?h:u,p=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),p=Math.abs(p)*(a?1:-1)),r.diff=m,m*=n.touchRatio,a&&(m=-m,p=-p);const b=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";const g=t.params.loop&&!n.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(g&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(w)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&b!==t.touchesDirection&&g&&v&&Math.abs(m)>=1){Object.assign(r,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let y=!0,_=n.resistanceRatio;if(n.touchReleaseOnEdges&&(_=0),m>0?(g&&v&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(y=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**_))):m<0&&(g&&v&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(y=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**_))),y&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Bd(s){const e=this,t=e.touchEventsData;let i=s;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(w=>w.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=e;if(!d||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=Kn(),h=f-t.touchStartTime;if(e.allowClick){const w=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(w&&w[0]||i.target,w),e.emit("tap click",i),h<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Kn(),Ho(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let u;if(a.followFinger?u=l?e.translate:-e.translate:u=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:u});return}const m=u>=-e.maxTranslate()&&!e.params.loop;let p=0,b=e.slidesSizesGrid[0];for(let w=0;w<c.length;w+=w<a.slidesPerGroupSkip?1:a.slidesPerGroup){const M=w<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[w+M]<"u"?(m||u>=c[w]&&u<c[w+M])&&(p=w,b=c[w+M]-c[w]):(m||u>=c[w])&&(p=w,b=c[c.length-1]-c[c.length-2])}let g=null,v=null;a.rewind&&(e.isBeginning?v=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(g=0));const y=(u-c[p])/b,_=p<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(y>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?g:p+_):e.slideTo(p)),e.swipeDirection==="prev"&&(y>1-a.longSwipesRatio?e.slideTo(p+_):v!==null&&y<0&&Math.abs(y)>a.longSwipesRatio?e.slideTo(v):e.slideTo(p))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(p+_):e.slideTo(p):(e.swipeDirection==="next"&&e.slideTo(g!==null?g:p+_),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:p))}}function Ya(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=s,a=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const o=a&&e.loop;if((e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o){const l=a?s.virtual.slides:s.slides;s.slideTo(l.length-1,0,!1,!0)}else s.params.loop&&!a?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0);s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=n,s.allowSlideNext=i,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function Id(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function zd(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let n;const r=s.maxTranslate()-s.minTranslate();r===0?n=0:n=(s.translate-s.minTranslate())/r,n!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function Fd(s){const e=this;Nn(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Rd(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const Uo=(s,e)=>{const t=ni(),{params:i,el:n,wrapperEl:r,device:a}=s,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!n||typeof n=="string"||(t[l]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),n[l]("touchstart",s.onTouchStart,{passive:!1}),n[l]("pointerdown",s.onTouchStart,{passive:!1}),t[l]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",s.onTouchEnd,{passive:!0}),t[l]("pointerup",s.onTouchEnd,{passive:!0}),t[l]("pointercancel",s.onTouchEnd,{passive:!0}),t[l]("touchcancel",s.onTouchEnd,{passive:!0}),t[l]("pointerout",s.onTouchEnd,{passive:!0}),t[l]("pointerleave",s.onTouchEnd,{passive:!0}),t[l]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[l]("click",s.onClick,!0),i.cssMode&&r[l]("scroll",s.onScroll),i.updateOnWindowResize?s[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ya,!0):s[c]("observerUpdate",Ya,!0),n[l]("load",s.onLoad,{capture:!0}))};function Nd(){const s=this,{params:e}=s;s.onTouchStart=Od.bind(s),s.onTouchMove=Ld.bind(s),s.onTouchEnd=Bd.bind(s),s.onDocumentTouchStart=Rd.bind(s),e.cssMode&&(s.onScroll=zd.bind(s)),s.onClick=Id.bind(s),s.onLoad=Fd.bind(s),Uo(s,"on")}function Gd(){Uo(this,"off")}var Hd={attachEvents:Nd,detachEvents:Gd};const Xa=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function qd(){const s=this,{realIndex:e,initialized:t,params:i,el:n}=s,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const a=ni(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?s.el:a.querySelector(i.breakpointsBase),c=s.getBreakpoint(r,o,l);if(!c||s.currentBreakpoint===c)return;const f=(c in r?r[c]:void 0)||s.originalParams,h=Xa(s,i),u=Xa(s,f),m=s.params.grabCursor,p=f.grabCursor,b=i.enabled;h&&!u?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!h&&u&&(n.classList.add(`${i.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),m&&!p?s.unsetGrabCursor():!m&&p&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(M=>{if(typeof f[M]>"u")return;const T=i[M]&&i[M].enabled,S=f[M]&&f[M].enabled;T&&!S&&s[M].disable(),!T&&S&&s[M].enable()});const g=f.direction&&f.direction!==i.direction,v=i.loop&&(f.slidesPerView!==i.slidesPerView||g),y=i.loop;g&&t&&s.changeDirection(),xt(s.params,f);const _=s.params.enabled,w=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),b&&!_?s.disable():!b&&_&&s.enable(),s.currentBreakpoint=c,s.emit("_beforeBreakpoint",f),t&&(v?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!y&&w?(s.loopCreate(e),s.updateSlides()):y&&!w&&s.loopDestroy()),s.emit("breakpoint",f)}function Vd(s,e="window",t){if(!s||e==="container"&&!t)return;let i=!1;const n=lt(),r=e==="window"?n.innerHeight:t.clientHeight,a=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:r*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var jd={setBreakpoint:qd,getBreakpoint:Vd};function Wd(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(e+n)}):typeof i=="string"&&t.push(e+i)}),t}function Yd(){const s=this,{classNames:e,params:t,rtl:i,el:n,device:r}=s,a=Wd(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),n.classList.add(...e),s.emitContainerClasses()}function Xd(){const s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var Ud={addClasses:Yd,removeClasses:Xd};function Kd(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const n=s.slides.length-1,r=s.slidesGrid[n]+s.slidesSizesGrid[n]+i*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Jd={checkOverflow:Kd},Ua={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Qd(s,e){return function(i={}){const n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){xt(e,i);return}if(s[n]===!0&&(s[n]={enabled:!0}),n==="navigation"&&s[n]&&s[n].enabled&&!s[n].prevEl&&!s[n].nextEl&&(s[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&s[n]&&s[n].enabled&&!s[n].el&&(s[n].auto=!0),!(n in s&&"enabled"in r)){xt(e,i);return}typeof s[n]=="object"&&!("enabled"in s[n])&&(s[n].enabled=!0),s[n]||(s[n]={enabled:!1}),xt(e,i)}}const wr={eventsEmitter:Uc,update:ad,translate:fd,transition:gd,slide:Td,loop:Pd,grabCursor:$d,events:Hd,breakpoints:jd,checkOverflow:Jd,classes:Ud},Sr={};class Ot{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=xt({},i),t&&!i.el&&(i.el=t);const n=ni();if(i.el&&typeof i.el=="string"&&n.querySelectorAll(i.el).length>1){const l=[];return n.querySelectorAll(i.el).forEach(c=>{const d=xt({},i,{el:c});l.push(new Ot(d))}),l}const r=this;r.__swiper__=!0,r.support=jo(),r.device=Wo({userAgent:i.userAgent}),r.browser=Yo(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(l=>{typeof l=="function"&&r.modules.indexOf(l)<0&&r.modules.push(l)});const a={};r.modules.forEach(l=>{l({params:i,swiper:r,extendParams:Qd(i,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const o=xt({},Ua,a);return r.params=xt({},o,Sr,i),r.originalParams=xt({},r.params),r.passedParams=xt({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,n=ti(t,`.${i.slideClass}, swiper-slide`),r=Zn(n[0]);return Zn(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=ti(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const n=i.minTranslate(),a=(i.maxTranslate()-n)*e+n;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:n,slides:r,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=i;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let f=r[c]?Math.ceil(r[c].swiperSlideSize):0,h;for(let u=c+1;u<r.length;u+=1)r[u]&&!h&&(f+=Math.ceil(r[u].swiperSlideSize),d+=1,f>l&&(h=!0));for(let u=c-1;u>=0;u-=1)r[u]&&!h&&(f+=r[u].swiperSlideSize,d+=1,f>l&&(h=!0))}else if(e==="current")for(let f=c+1;f<r.length;f+=1)(t?a[f]+o[f]-a[c]<l:a[f]-a[c]<l)&&(d+=1);else for(let f=c-1;f>=0;f-=1)a[c]-a[f]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Nn(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(a.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,n=i.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):ti(i,n())[0];return!a&&t.params.createElements&&(a=Qn("div",t.params.wrapperClass),i.append(a),ti(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Ci(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Ci(i,"direction")==="rtl"),wrongRTL:Ci(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?Nn(t,r):r.addEventListener("load",a=>{Nn(t,a.target)})}),qr(t),t.initialized=!0,qr(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:n,el:r,wrapperEl:a,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),Ic(i)),i.destroyed=!0),null}static extendDefaults(e){xt(Sr,e)}static get extendedDefaults(){return Sr}static get defaults(){return Ua}static installModule(e){Ot.prototype.__modules__||(Ot.prototype.__modules__=[]);const t=Ot.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Ot.installModule(t)),Ot):(Ot.installModule(e),Ot)}}Object.keys(wr).forEach(s=>{Object.keys(wr[s]).forEach(e=>{Ot.prototype[e]=wr[s][e]})});Ot.use([Yc,Xc]);function Ko(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=ti(s.el,`.${i[n]}`)[0];r||(r=Qn("div",i[n]),r.className=i[n],s.el.append(r)),t[n]=r,e[n]=r}}),t}const Ka='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function Zd({swiper:s,extendParams:e,on:t,emit:i}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),s.navigation={nextEl:null,prevEl:null,arrowSvg:Ka};function n(u){let m;return u&&typeof u=="string"&&s.isElement&&(m=s.el.querySelector(u)||s.hostEl.querySelector(u),m)?m:(u&&(typeof u=="string"&&(m=[...document.querySelectorAll(u)]),s.params.uniqueNavElements&&typeof u=="string"&&m&&m.length>1&&s.el.querySelectorAll(u).length===1?m=s.el.querySelector(u):m&&m.length===1&&(m=m[0])),u&&!m?u:m)}function r(u,m){const p=s.params.navigation;u=Le(u),u.forEach(b=>{b&&(b.classList[m?"add":"remove"](...p.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=m),s.params.watchOverflow&&s.enabled&&b.classList[s.isLocked?"add":"remove"](p.lockClass))})}function a(){const{nextEl:u,prevEl:m}=s.navigation;if(s.params.loop){r(m,!1),r(u,!1);return}r(m,s.isBeginning&&!s.params.rewind),r(u,s.isEnd&&!s.params.rewind)}function o(u){u.preventDefault(),!(s.isBeginning&&!s.params.loop&&!s.params.rewind)&&(s.slidePrev(),i("navigationPrev"))}function l(u){u.preventDefault(),!(s.isEnd&&!s.params.loop&&!s.params.rewind)&&(s.slideNext(),i("navigationNext"))}function c(){const u=s.params.navigation;if(s.params.navigation=Ko(s,s.originalParams.navigation,s.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let m=n(u.nextEl),p=n(u.prevEl);Object.assign(s.navigation,{nextEl:m,prevEl:p}),m=Le(m),p=Le(p);const b=(g,v)=>{if(g){if(u.addIcons&&g.matches(".swiper-button-next,.swiper-button-prev")&&!g.querySelector("svg")){const y=document.createElement("div");Hr(y,Ka),g.appendChild(y.querySelector("svg")),y.remove()}g.addEventListener("click",v==="next"?l:o)}!s.enabled&&g&&g.classList.add(...u.lockClass.split(" "))};m.forEach(g=>b(g,"next")),p.forEach(g=>b(g,"prev"))}function d(){let{nextEl:u,prevEl:m}=s.navigation;u=Le(u),m=Le(m);const p=(b,g)=>{b.removeEventListener("click",g==="next"?l:o),b.classList.remove(...s.params.navigation.disabledClass.split(" "))};u.forEach(b=>p(b,"next")),m.forEach(b=>p(b,"prev"))}t("init",()=>{s.params.navigation.enabled===!1?h():(c(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{d()}),t("enable disable",()=>{let{nextEl:u,prevEl:m}=s.navigation;if(u=Le(u),m=Le(m),s.enabled){a();return}[...u,...m].filter(p=>!!p).forEach(p=>p.classList.add(s.params.navigation.lockClass))}),t("click",(u,m)=>{let{nextEl:p,prevEl:b}=s.navigation;p=Le(p),b=Le(b);const g=m.target;let v=b.includes(g)||p.includes(g);if(s.isElement&&!v){const y=m.path||m.composedPath&&m.composedPath();y&&(v=y.find(_=>p.includes(_)||b.includes(_)))}if(s.params.navigation.hideOnClick&&!v){if(s.pagination&&s.params.pagination&&s.params.pagination.clickable&&(s.pagination.el===g||s.pagination.el.contains(g)))return;let y;p.length?y=p[0].classList.contains(s.params.navigation.hiddenClass):b.length&&(y=b[0].classList.contains(s.params.navigation.hiddenClass)),i(y===!0?"navigationShow":"navigationHide"),[...p,...b].filter(_=>!!_).forEach(_=>_.classList.toggle(s.params.navigation.hiddenClass))}});const f=()=>{s.el.classList.remove(...s.params.navigation.navigationDisabledClass.split(" ")),c(),a()},h=()=>{s.el.classList.add(...s.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(s.navigation,{enable:f,disable:h,update:a,init:c,destroy:d})}function Hs(s=""){return`.${s.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function eu({swiper:s,extendParams:e,on:t,emit:i}){const n="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),s.pagination={el:null,bullets:[]};let r,a=0;function o(){return!s.params.pagination.el||!s.pagination.el||Array.isArray(s.pagination.el)&&s.pagination.el.length===0}function l(g,v){const{bulletActiveClass:y}=s.params.pagination;g&&(g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${y}-${v}`),g=g[`${v==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${y}-${v}-${v}`)))}function c(g,v,y){if(g=g%y,v=v%y,v===g+1)return"next";if(v===g-1)return"previous"}function d(g){const v=g.target.closest(Hs(s.params.pagination.bulletClass));if(!v)return;g.preventDefault();const y=Zn(v)*s.params.slidesPerGroup;if(s.params.loop){if(s.realIndex===y)return;const _=c(s.realIndex,y,s.slides.length);_==="next"?s.slideNext():_==="previous"?s.slidePrev():s.slideToLoop(y)}else s.slideTo(y)}function f(){const g=s.rtl,v=s.params.pagination;if(o())return;let y=s.pagination.el;y=Le(y);let _,w;const M=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,T=s.params.loop?Math.ceil(M/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(w=s.previousRealIndex||0,_=s.params.slidesPerGroup>1?Math.floor(s.realIndex/s.params.slidesPerGroup):s.realIndex):typeof s.snapIndex<"u"?(_=s.snapIndex,w=s.previousSnapIndex):(w=s.previousIndex||0,_=s.activeIndex||0),v.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const S=s.pagination.bullets;let C,k,A;if(v.dynamicBullets&&(r=Gr(S[0],s.isHorizontal()?"width":"height"),y.forEach(E=>{E.style[s.isHorizontal()?"width":"height"]=`${r*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&w!==void 0&&(a+=_-(w||0),a>v.dynamicMainBullets-1?a=v.dynamicMainBullets-1:a<0&&(a=0)),C=Math.max(_-a,0),k=C+(Math.min(S.length,v.dynamicMainBullets)-1),A=(k+C)/2),S.forEach(E=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(B=>`${v.bulletActiveClass}${B}`)].map(B=>typeof B=="string"&&B.includes(" ")?B.split(" "):B).flat();E.classList.remove(...L)}),y.length>1)S.forEach(E=>{const L=Zn(E);L===_?E.classList.add(...v.bulletActiveClass.split(" ")):s.isElement&&E.setAttribute("part","bullet"),v.dynamicBullets&&(L>=C&&L<=k&&E.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),L===C&&l(E,"prev"),L===k&&l(E,"next"))});else{const E=S[_];if(E&&E.classList.add(...v.bulletActiveClass.split(" ")),s.isElement&&S.forEach((L,B)=>{L.setAttribute("part",B===_?"bullet-active":"bullet")}),v.dynamicBullets){const L=S[C],B=S[k];for(let F=C;F<=k;F+=1)S[F]&&S[F].classList.add(...`${v.bulletActiveClass}-main`.split(" "));l(L,"prev"),l(B,"next")}}if(v.dynamicBullets){const E=Math.min(S.length,v.dynamicMainBullets+4),L=(r*E-r)/2-A*r,B=g?"right":"left";S.forEach(F=>{F.style[s.isHorizontal()?B:"top"]=`${L}px`})}}y.forEach((S,C)=>{if(v.type==="fraction"&&(S.querySelectorAll(Hs(v.currentClass)).forEach(k=>{k.textContent=v.formatFractionCurrent(_+1)}),S.querySelectorAll(Hs(v.totalClass)).forEach(k=>{k.textContent=v.formatFractionTotal(T)})),v.type==="progressbar"){let k;v.progressbarOpposite?k=s.isHorizontal()?"vertical":"horizontal":k=s.isHorizontal()?"horizontal":"vertical";const A=(_+1)/T;let E=1,L=1;k==="horizontal"?E=A:L=A,S.querySelectorAll(Hs(v.progressbarFillClass)).forEach(B=>{B.style.transform=`translate3d(0,0,0) scaleX(${E}) scaleY(${L})`,B.style.transitionDuration=`${s.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Hr(S,v.renderCustom(s,_+1,T)),C===0&&i("paginationRender",S)):(C===0&&i("paginationRender",S),i("paginationUpdate",S)),s.params.watchOverflow&&s.enabled&&S.classList[s.isLocked?"add":"remove"](v.lockClass)})}function h(){const g=s.params.pagination;if(o())return;const v=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.grid&&s.params.grid.rows>1?s.slides.length/Math.ceil(s.params.grid.rows):s.slides.length;let y=s.pagination.el;y=Le(y);let _="";if(g.type==="bullets"){let w=s.params.loop?Math.ceil(v/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&w>v&&(w=v);for(let M=0;M<w;M+=1)g.renderBullet?_+=g.renderBullet.call(s,M,g.bulletClass):_+=`<${g.bulletElement} ${s.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?_=g.renderFraction.call(s,g.currentClass,g.totalClass):_=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?_=g.renderProgressbar.call(s,g.progressbarFillClass):_=`<span class="${g.progressbarFillClass}"></span>`),s.pagination.bullets=[],y.forEach(w=>{g.type!=="custom"&&Hr(w,_||""),g.type==="bullets"&&s.pagination.bullets.push(...w.querySelectorAll(Hs(g.bulletClass)))}),g.type!=="custom"&&i("paginationRender",y[0])}function u(){s.params.pagination=Ko(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const g=s.params.pagination;if(!g.el)return;let v;typeof g.el=="string"&&s.isElement&&(v=s.el.querySelector(g.el)),!v&&typeof g.el=="string"&&(v=[...document.querySelectorAll(g.el)]),v||(v=g.el),!(!v||v.length===0)&&(s.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...s.el.querySelectorAll(g.el)],v.length>1&&(v=v.find(y=>Vo(y,".swiper")[0]===s.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(s.pagination,{el:v}),v=Le(v),v.forEach(y=>{g.type==="bullets"&&g.clickable&&y.classList.add(...(g.clickableClass||"").split(" ")),y.classList.add(g.modifierClass+g.type),y.classList.add(s.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(y.classList.add(`${g.modifierClass}${g.type}-dynamic`),a=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&y.classList.add(g.progressbarOppositeClass),g.clickable&&y.addEventListener("click",d),s.enabled||y.classList.add(g.lockClass)}))}function m(){const g=s.params.pagination;if(o())return;let v=s.pagination.el;v&&(v=Le(v),v.forEach(y=>{y.classList.remove(g.hiddenClass),y.classList.remove(g.modifierClass+g.type),y.classList.remove(s.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(y.classList.remove(...(g.clickableClass||"").split(" ")),y.removeEventListener("click",d))})),s.pagination.bullets&&s.pagination.bullets.forEach(y=>y.classList.remove(...g.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!s.pagination||!s.pagination.el)return;const g=s.params.pagination;let{el:v}=s.pagination;v=Le(v),v.forEach(y=>{y.classList.remove(g.horizontalClass,g.verticalClass),y.classList.add(s.isHorizontal()?g.horizontalClass:g.verticalClass)})}),t("init",()=>{s.params.pagination.enabled===!1?b():(u(),h(),f())}),t("activeIndexChange",()=>{typeof s.snapIndex>"u"&&f()}),t("snapIndexChange",()=>{f()}),t("snapGridLengthChange",()=>{h(),f()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{el:g}=s.pagination;g&&(g=Le(g),g.forEach(v=>v.classList[s.enabled?"remove":"add"](s.params.pagination.lockClass)))}),t("lock unlock",()=>{f()}),t("click",(g,v)=>{const y=v.target,_=Le(s.pagination.el);if(s.params.pagination.el&&s.params.pagination.hideOnClick&&_&&_.length>0&&!y.classList.contains(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&y===s.navigation.nextEl||s.navigation.prevEl&&y===s.navigation.prevEl))return;const w=_[0].classList.contains(s.params.pagination.hiddenClass);i(w===!0?"paginationShow":"paginationHide"),_.forEach(M=>M.classList.toggle(s.params.pagination.hiddenClass))}});const p=()=>{s.el.classList.remove(s.params.pagination.paginationDisabledClass);let{el:g}=s.pagination;g&&(g=Le(g),g.forEach(v=>v.classList.remove(s.params.pagination.paginationDisabledClass))),u(),h(),f()},b=()=>{s.el.classList.add(s.params.pagination.paginationDisabledClass);let{el:g}=s.pagination;g&&(g=Le(g),g.forEach(v=>v.classList.add(s.params.pagination.paginationDisabledClass))),m()};Object.assign(s.pagination,{enable:p,disable:b,render:h,update:f,init:u,destroy:m})}function tu({swiper:s,extendParams:e,on:t,emit:i,params:n}){s.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,a,o=n&&n.autoplay?n.autoplay.delay:3e3,l=n&&n.autoplay?n.autoplay.delay:3e3,c,d=new Date().getTime(),f,h,u,m,p,b;function g(O){!s||s.destroyed||!s.wrapperEl||O.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",g),!(b||O.detail&&O.detail.bySwiperTouchMove)&&C())}const v=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?f=!0:f&&(l=c,f=!1);const O=s.autoplay.paused?c:d+l-new Date().getTime();s.autoplay.timeLeft=O,i("autoplayTimeLeft",O,O/o),a=requestAnimationFrame(()=>{v()})},y=()=>{let O;return s.virtual&&s.params.virtual.enabled?O=s.slides.find(R=>R.classList.contains("swiper-slide-active")):O=s.slides[s.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},_=()=>{let O=s.params.autoplay.delay;const D=y();return!Number.isNaN(D)&&D>0&&(O=D),O},w=O=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(a),v();let D=O;typeof D>"u"&&(D=_(),o=D,l=D),c=D;const R=s.params.speed,x=()=>{!s||s.destroyed||(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(R,!0,!0),i("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,R,!0,!0),i("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(R,!0,!0),i("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,R,!0,!0),i("autoplay")),s.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return D>0?(clearTimeout(r),r=setTimeout(()=>{x()},D)):requestAnimationFrame(()=>{x()}),D},M=()=>{d=new Date().getTime(),s.autoplay.running=!0,w(),i("autoplayStart")},T=()=>{s.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(a),i("autoplayStop")},S=(O,D)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(r),O||(p=!0);const R=()=>{i("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",g):C()};if(s.autoplay.paused=!0,D){R();return}c=(c||s.params.autoplay.delay)-(new Date().getTime()-d),!(s.isEnd&&c<0&&!s.params.loop)&&(c<0&&(c=0),R())},C=()=>{s.isEnd&&c<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(d=new Date().getTime(),p?(p=!1,w(c)):w(),s.autoplay.paused=!1,i("autoplayResume"))},k=()=>{if(s.destroyed||!s.autoplay.running)return;const O=ni();O.visibilityState==="hidden"&&(p=!0,S(!0)),O.visibilityState==="visible"&&C()},A=O=>{O.pointerType==="mouse"&&(p=!0,b=!0,!(s.animating||s.autoplay.paused)&&S(!0))},E=O=>{O.pointerType==="mouse"&&(b=!1,s.autoplay.paused&&C())},L=()=>{s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",A),s.el.addEventListener("pointerleave",E))},B=()=>{s.el&&typeof s.el!="string"&&(s.el.removeEventListener("pointerenter",A),s.el.removeEventListener("pointerleave",E))},F=()=>{ni().addEventListener("visibilitychange",k)},H=()=>{ni().removeEventListener("visibilitychange",k)};t("init",()=>{s.params.autoplay.enabled&&(L(),F(),M())}),t("destroy",()=>{B(),H(),s.autoplay.running&&T()}),t("_freeModeStaticRelease",()=>{(u||p)&&C()}),t("_freeModeNoMomentumRelease",()=>{s.params.autoplay.disableOnInteraction?T():S(!0,!0)}),t("beforeTransitionStart",(O,D,R)=>{s.destroyed||!s.autoplay.running||(R||!s.params.autoplay.disableOnInteraction?S(!0,!0):T())}),t("sliderFirstMove",()=>{if(!(s.destroyed||!s.autoplay.running)){if(s.params.autoplay.disableOnInteraction){T();return}h=!0,u=!1,p=!1,m=setTimeout(()=>{p=!0,u=!0,S(!0)},200)}}),t("touchEnd",()=>{if(!(s.destroyed||!s.autoplay.running||!h)){if(clearTimeout(m),clearTimeout(r),s.params.autoplay.disableOnInteraction){u=!1,h=!1;return}u&&s.params.cssMode&&C(),u=!1,h=!1}}),t("slideChange",()=>{s.destroyed||!s.autoplay.running||s.autoplay.paused&&(c=_(),o=_())}),Object.assign(s.autoplay,{start:M,stop:T,pause:S,resume:C})}function fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Jo(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Pt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$s={duration:.5,overwrite:!1,delay:0},ga,Ge,ce,It=1e8,ae=1/It,Vr=Math.PI*2,iu=Vr/4,su=0,Qo=Math.sqrt,nu=Math.cos,ru=Math.sin,Be=function(e){return typeof e=="string"},ve=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},va=function(e){return typeof e>"u"},ai=function(e){return typeof e=="object"},ut=function(e){return e!==!1},ya=function(){return typeof window<"u"},Mn=function(e){return ve(e)||Be(e)},Zo=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Je=Array.isArray,au=/random\([^)]+\)/g,ou=/,\s*/g,Ja=/(?:-?\.?\d|\.)+/gi,el=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tr=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tl=/[+-]=-?[.\d]+/,lu=/[^,'"\[\]\s]+/gi,cu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,Qt,jr,ba,Et={},er={},il,sl=function(e){return(er=Ds(e,Et))&&mt},_a=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pn=function(e,t){return!t&&console.warn(e)},nl=function(e,t){return e&&(Et[e]=t)&&er&&(er[e]=t)||Et},hn=function(){return 0},du={suppressEvents:!0,isStart:!0,kill:!1},Gn={suppressEvents:!0,kill:!1},uu={suppressEvents:!0},xa={},Di=[],Wr={},rl,wt={},kr={},Qa=30,Hn=[],wa="",Sa=function(e){var t=e[0],i,n;if(ai(t)||ve(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Hn.length;n--&&!Hn[n].targetTest(t););i=Hn[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new El(e[n],i)))||e.splice(n,1);return e},es=function(e){return e._gsap||Sa(zt(e))[0]._gsap},al=function(e,t,i){return(i=e[t])&&ve(i)?e[t]():va(i)&&e.getAttribute&&e.getAttribute(t)||i},ft=function(e,t){return(e=e.split(",")).forEach(t)||e},xe=function(e){return Math.round(e*1e5)/1e5||0},ue=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},fu=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},tr=function(){var e=Di.length,t=Di.slice(0),i,n;for(Wr={},Di.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ta=function(e){return!!(e._initted||e._startAt||e.add)},ol=function(e,t,i,n){Di.length&&!Ge&&tr(),e.render(t,i,!!(Ge&&t<0&&Ta(e))),Di.length&&!Ge&&tr()},ll=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lu).length<2?t:Be(e)?e.trim():e},cl=function(e){return e},At=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pu=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Ds=function(e,t){for(var i in t)e[i]=t[i];return e},Za=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ai(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},ir=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Zs=function(e){var t=e.parent||fe,i=e.keyframes?pu(Je(e.keyframes)):At;if(ut(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},hu=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},dl=function(e,t,i,n,r){var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},ur=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},mu=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yr=function(e,t,i,n){return e._startAt&&(Ge?e._startAt.revert(Gn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},gu=function s(e){return!e||e._ts&&s(e.parent)},eo=function(e){return e._repeat?Os(e._tTime,e=e.duration()+e._rDelay)*e:0},Os=function(e,t){var i=Math.floor(e=ue(e/t));return e&&i===e?i-1:i},sr=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fr=function(e){return e._end=ue(e._start+(e._tDur/Math.abs(e._ts||e._rts||ae)||0))},pr=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ue(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fr(e),i._dirty||ts(i,e)),e},ul=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=sr(e.rawTime(),t),(!t._dur||wn(0,t.totalDuration(),i)-t._tTime>ae)&&t.render(i,!0)),ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ae}},ei=function(e,t,i,n){return t.parent&&Bi(t),t._start=ue((vi(i)?i:i||e!==fe?Dt(e,i,t):e._time)+t._delay),t._end=ue(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dl(e,t,"_first","_last",e._sort?"_start":0),Xr(t)||(e._recent=t),n||ul(e,t),e._ts<0&&pr(e,e._tTime),e},fl=function(e,t){return(Et.ScrollTrigger||_a("scrollTrigger",t))&&Et.ScrollTrigger.create(t,e)},pl=function(e,t,i,n,r){if(Ca(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ge&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rl!==Tt.frame)return Di.push(e),e._lazy=[r,n],1},vu=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Xr=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yu=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&vu(e)&&!(!e._initted&&Xr(e))||(e._ts<0||e._dp._ts<0)&&!Xr(e))?0:1,o=e._rDelay,l=0,c,d,f;if(o&&e._repeat&&(l=wn(0,e._tDur,t),d=Os(l,o),e._yoyo&&d&1&&(a=1-a),d!==Os(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ge||n||e._zTime===ae||!t&&e._zTime){if(!e._initted&&pl(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?ae:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Yr(e,t,i,!0),e._onUpdate&&!i&&Ct(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ct(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Bi(e,1),!i&&!Ge&&(Ct(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bu=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ls=function(e,t,i,n){var r=e._repeat,a=ue(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ue(a*(r+1)+e._rDelay*r):a,o>0&&!n&&pr(e,e._tTime=e._tDur*o),e.parent&&fr(e),i||ts(e.parent,e),e},to=function(e){return e instanceof at?ts(e):Ls(e,e._dur)},_u={_start:0,endTime:hn,totalDuration:hn},Dt=function s(e,t,i){var n=e.labels,r=e._recent||_u,a=e.duration()>=It?r.endTime(!1):e._dur,o,l,c;return Be(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Je(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},en=function(e,t,i){var n=vi(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ut(l.vars.inherit)&&l.parent;a.immediateRender=ut(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ce(t[0],a,t[r+1])},Ri=function(e,t){return e||e===0?t(e):t},wn=function(e,t,i){return i<e?e:i>t?t:i},Ue=function(e,t){return!Be(e)||!(t=cu.exec(e))?"":t[1]},xu=function(e,t,i){return Ri(i,function(n){return wn(e,t,n)})},Ur=[].slice,hl=function(e,t){return e&&ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ai(e[0]))&&!e.nodeType&&e!==Qt},wu=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Be(n)&&!t||hl(n,1)?(r=i).push.apply(r,zt(n)):i.push(n)})||i},zt=function(e,t,i){return ce&&!t&&ce.selector?ce.selector(e):Be(e)&&!i&&(jr||!Bs())?Ur.call((t||ba).querySelectorAll(e),0):Je(e)?wu(e,i):hl(e)?Ur.call(e,0):e?[e]:[]},Kr=function(e){return e=zt(e)[0]||pn("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return zt(t,i.querySelectorAll?i:i===e?pn("Invalid scope")||ba.createElement("div"):e)}},ml=function(e){return e.sort(function(){return .5-Math.random()})},gl=function(e){if(ve(e))return e;var t=ai(e)?e:{each:e},i=is(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,d=n,f=n;return Be(n)?d=f={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(d=n[0],f=n[1]),function(h,u,m){var p=(m||t).length,b=a[p],g,v,y,_,w,M,T,S,C;if(!b){if(C=t.grid==="auto"?0:(t.grid||[1,It])[1],!C){for(T=-It;T<(T=m[C++].getBoundingClientRect().left)&&C<p;);C<p&&C--}for(b=a[p]=[],g=l?Math.min(C,p)*d-.5:n%C,v=C===It?0:l?p*f/C-.5:n/C|0,T=0,S=It,M=0;M<p;M++)y=M%C-g,_=v-(M/C|0),b[M]=w=c?Math.abs(c==="y"?_:y):Qo(y*y+_*_),w>T&&(T=w),w<S&&(S=w);n==="random"&&ml(b),b.max=T-S,b.min=S,b.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(C>p?p-1:c?c==="y"?p/C:C:Math.max(C,p/C))||0)*(n==="edges"?-1:1),b.b=p<0?r-p:r,b.u=Ue(t.amount||t.each)||0,i=i&&p<0?Cl(i):i}return p=(b[h]-b.min)/b.max||0,ue(b.b+(i?i(p):p)*b.v)+b.u}},Jr=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=ue(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(vi(i)?0:Ue(i))}},vl=function(e,t){var i=Je(e),n,r;return!i&&ai(e)&&(n=i=e.radius||It,e.values?(e=zt(e.values),(r=!vi(e[0]))&&(n*=n)):e=Jr(e.increment)),Ri(t,i?ve(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=It,d=0,f=e.length,h,u;f--;)r?(h=e[f].x-o,u=e[f].y-l,h=h*h+u*u):h=Math.abs(e[f]-o),h<c&&(c=h,d=f);return d=!n||c<=n?e[d]:a,r||d===a||vi(a)?d:d+Ue(a)}:Jr(e))},yl=function(e,t,i,n){return Ri(Je(e)?!t:i===!0?!!(i=0):!n,function(){return Je(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Su=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Tu=function(e,t){return function(i){return e(parseFloat(i))+(t||Ue(i))}},ku=function(e,t,i){return _l(e,t,0,1,i)},bl=function(e,t,i){return Ri(i,function(n){return e[~~t(n)]})},Cu=function s(e,t,i){var n=t-e;return Je(e)?bl(e,s(0,e.length),t):Ri(i,function(r){return(n+(r-e)%n)%n+e})},Mu=function s(e,t,i){var n=t-e,r=n*2;return Je(e)?bl(e,s(0,e.length-1),t):Ri(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},mn=function(e){return e.replace(au,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ou);return yl(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},_l=function(e,t,i,n,r){var a=t-e,o=n-i;return Ri(r,function(l){return i+((l-e)/a*o||0)})},Pu=function s(e,t,i,n){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var a=Be(e),o={},l,c,d,f,h;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Je(e)&&!Je(t)){for(d=[],f=e.length,h=f-2,c=1;c<f;c++)d.push(s(e[c-1],e[c]));f--,r=function(m){m*=f;var p=Math.min(h,~~m);return d[p](m-p)},i=t}else n||(e=Ds(Je(e)?[]:{},e));if(!d){for(l in t)ka.call(o,e,l,"get",t[l]);r=function(m){return Ea(m,o)||(a?e.p:e)}}}return Ri(i,r)},io=function(e,t,i){var n=e.labels,r=It,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ct=function(e,t,i){var n=e.vars,r=n[t],a=ce,o=e._ctx,l,c,d;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Di.length&&tr(),o&&(ce=o),d=l?r.apply(c,l):r.call(c),ce=a,d},Ws=function(e){return Bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ge),e.progress()<1&&Ct(e,"onInterrupt"),e},xs,xl=[],wl=function(e){if(e)if(e=!e.name&&e.default||e,ya()||e.headless){var t=e.name,i=ve(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:hn,render:Ea,add:ka,kill:Vu,modifier:qu,rawVars:0},a={targetTest:0,get:0,getSetter:Pa,aliases:{},register:0};if(Bs(),e!==n){if(wt[t])return;At(n,At(ir(e,r),a)),Ds(n.prototype,Ds(r,ir(e,a))),wt[n.prop=t]=n,e.targetTest&&(Hn.push(n),xa[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}nl(t,n),e.register&&e.register(mt,n,pt)}else xl.push(e)},re=255,Ys={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Cr=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*re+.5|0},Sl=function(e,t,i){var n=e?vi(e)?[e>>16,e>>8&re,e&re]:0:Ys.black,r,a,o,l,c,d,f,h,u,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ys[e])n=Ys[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&re,n&re,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&re,e&re]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Ja),!t)l=+n[0]%360/360,c=+n[1]/100,d=+n[2]/100,a=d<=.5?d*(c+1):d+c-d*c,r=d*2-a,n.length>3&&(n[3]*=1),n[0]=Cr(l+1/3,r,a),n[1]=Cr(l,r,a),n[2]=Cr(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(el),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ja)||Ys.transparent;n=n.map(Number)}return t&&!m&&(r=n[0]/re,a=n[1]/re,o=n[2]/re,f=Math.max(r,a,o),h=Math.min(r,a,o),d=(f+h)/2,f===h?l=c=0:(u=f-h,c=d>.5?u/(2-f-h):u/(f+h),l=f===r?(a-o)/u+(a<o?6:0):f===a?(o-r)/u+2:(r-a)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},Tl=function(e){var t=[],i=[],n=-1;return e.split(Oi).forEach(function(r){var a=r.match(_s)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},so=function(e,t,i){var n="",r=(e+n).match(Oi),a=t?"hsla(":"rgba(",o=0,l,c,d,f;if(!r)return e;if(r=r.map(function(h){return(h=Sl(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(d=Tl(e),l=i.c,l.join(n)!==d.c.join(n)))for(c=e.replace(Oi,"1").split(_s),f=c.length-1;o<f;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(d.length?d:r.length?r:i).shift());if(!c)for(c=e.split(Oi),f=c.length-1;o<f;o++)n+=c[o]+r[o];return n+c[f]},Oi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ys)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Eu=/hsl[a]?\(/,kl=function(e){var t=e.join(" "),i;if(Oi.lastIndex=0,Oi.test(t))return i=Eu.test(t),e[1]=so(e[1],i),e[0]=so(e[0],i,Tl(e[1])),!0},gn,Tt=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,d,f,h,u,m=function p(b){var g=s()-n,v=b===!0,y,_,w,M;if((g>e||g<0)&&(i+=g-t),n+=g,w=n-i,y=w-a,(y>0||v)&&(M=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,a+=y+(y>=r?4:r-y),_=1),v||(l=c(p)),_)for(u=0;u<o.length;u++)o[u](w,h,M,b)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(b){return h/(1e3/(b||60))},wake:function(){il&&(!jr&&ya()&&(Qt=jr=window,ba=Qt.document||{},Et.gsap=mt,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(mt.version),sl(er||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),xl.forEach(wl)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=d||function(b){return setTimeout(b,a-f.time*1e3+1|0)},gn=1,m(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),gn=0,c=hn},lagSmoothing:function(b,g){e=b||1/0,t=Math.min(g||33,e)},fps:function(b){r=1e3/(b||240),a=f.time*1e3+r},add:function(b,g,v){var y=g?function(_,w,M,T){b(_,w,M,T),f.remove(y)}:b;return f.remove(b),o[v?"unshift":"push"](y),Bs(),y},remove:function(b,g){~(g=o.indexOf(b))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},f})(),Bs=function(){return!gn&&Tt.wake()},Q={},Au=/^[\d.\-M][\d.\-,\s]/,$u=/["']/g,Du=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace($u,"").trim():+c,n=l.substr(o+1).trim();return t},Ou=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Lu=function(e){var t=(e+"").split("("),i=Q[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Du(t[1])]:Ou(e).split(",").map(ll)):Q._CE&&Au.test(e)?Q._CE("",e):i},Cl=function(e){return function(t){return 1-e(1-t)}},Ml=function s(e,t){for(var i=e._first,n;i;)i instanceof at?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},is=function(e,t){return e&&(ve(e)?e:Q[e]||Lu(e))||t},ds=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return ft(e,function(o){Q[o]=Et[o]=r,Q[a=o.toLowerCase()]=i;for(var l in r)Q[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Q[o+"."+l]=r[l]}),r},Pl=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mr=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Vr*(Math.asin(1/n)||0),o=function(d){return d===1?1:n*Math.pow(2,-10*d)*ru((d-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pl(o);return r=Vr/r,l.config=function(c,d){return s(e,c,d)},l},Pr=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Pl(i);return n.config=function(r){return s(e,r)},n};ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ds(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Q.Linear.easeNone=Q.none=Q.Linear.easeIn;ds("Elastic",Mr("in"),Mr("out"),Mr());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};ds("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ds("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ds("Circ",function(s){return-(Qo(1-s*s)-1)});ds("Sine",function(s){return s===1?1:-nu(s*iu)+1});ds("Back",Pr("in"),Pr("out"),Pr());Q.SteppedEase=Q.steps=Et.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-ae;return function(o){return((n*wn(0,a,o)|0)+r)*i}}};$s.ease=Q["quad.out"];ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return wa+=s+","+s+"Params,"});var El=function(e,t){this.id=su++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:al,this.set=t?t.getSetter:Pa},vn=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ls(this,+t.duration,1,1),this.data=t.data,ce&&(this._ctx=ce,ce.data.push(this)),gn||Tt.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Bs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(pr(this,i),!r._dp||r.parent||ul(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ae||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ol(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+eo(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+eo(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Os(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?sr(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ae?0:this._rts,this.totalTime(wn(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),fr(this),mu(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ue(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ei(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ut(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sr(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uu);var n=Ge;return Ge=i,Ta(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ge=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,to(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,to(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Dt(this,i),ut(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ut(n)),this._dur||(this._zTime=-ae),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ae:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ae)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=ve(i)?i:cl,l=function(){var d=n.then;n.then=null,r&&r(),ve(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=d),a(o),n.then=d};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Ws(this)},s})();At(vn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var at=(function(s){Jo(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ut(i.sortChildren),fe&&ei(i.parent||fe,fi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&fl(fi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return en(0,arguments,this),this},t.from=function(n,r,a){return en(1,arguments,this),this},t.fromTo=function(n,r,a,o){return en(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Zs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ce(n,r,Dt(this,a),1),this},t.call=function(n,r,a){return ei(this,Ce.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,d){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new Ce(n,a,Dt(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,d){return a.runBackwards=1,Zs(a).immediateRender=ut(a.immediateRender),this.staggerTo(n,r,a,o,l,c,d)},t.staggerFromTo=function(n,r,a,o,l,c,d,f){return o.startAt=a,Zs(o).immediateRender=ut(o.immediateRender),this.staggerTo(n,r,o,l,c,d,f)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=n<=0?0:ue(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,u,m,p,b,g,v,y,_,w,M,T;if(this!==fe&&d>l&&n>=0&&(d=l),d!==this._tTime||a||f){if(o!==this._time&&c&&(d+=this._time-o,n+=this._time-o),h=d,_=this._start,y=this._ts,g=!y,f&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,b=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(b*100+n,r,a);if(h=ue(d%b),d===l?(p=this._repeat,h=c):(w=ue(d/b),p=~~w,p&&p===w&&(h=c,p--),h>c&&(h=c)),w=Os(this._tTime,b),!o&&this._tTime&&w!==p&&this._tTime-w*b-this._dur<=0&&(w=p),M&&p&1&&(h=c-h,T=1),p!==w&&!this._lock){var S=M&&w&1,C=S===(M&&p&1);if(p<w&&(S=!S),o=S?0:d%c?c:d,this._lock=1,this.render(o||(T?0:ue(p*b)),r,!c)._lock=0,this._tTime=d,!r&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=p),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Ml(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=bu(this,ue(o),ue(h)),v&&(d-=h-(h=v._start))),this._tTime=d,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&d&&c&&!r&&!w&&(Ct(this,"onStart"),this._tTime!==d))return this;if(h>=o&&n>=0)for(u=this._first;u;){if(m=u._next,(u._act||h>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,a);if(u.render(u._ts>0?(h-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(h-u._start)*u._ts,r,a),h!==this._time||!this._ts&&!g){v=0,m&&(d+=this._zTime=-ae);break}}u=m}else{u=this._last;for(var k=n<0?n:h;u;){if(m=u._prev,(u._act||k<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,a);if(u.render(u._ts>0?(k-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(k-u._start)*u._ts,r,a||Ge&&Ta(u)),h!==this._time||!this._ts&&!g){v=0,m&&(d+=this._zTime=k?-ae:ae);break}}u=m}}if(v&&!r&&(this.pause(),v.render(h>=o?0:-ae)._zTime=h>=o?1:-1,this._ts))return this._start=_,fr(this),this.render(n,r,a);this._onUpdate&&!r&&Ct(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(_===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Bi(this,1),!r&&!(n<0&&!o)&&(d||o||!l)&&(Ct(this,d===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(vi(r)||(r=Dt(this,r,n)),!(n instanceof vn)){if(Je(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Be(n))return this.addLabel(n,r);if(ve(n))n=Ce.delayedCall(0,n);else return this}return this!==n?ei(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-It);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ce?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Be(n)?this.removeLabel(n):ve(n)?this.killTweensOf(n):(n.parent===this&&ur(this,n),n===this._recent&&(this._recent=this._last),ts(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(Tt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Dt(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=Ce.delayedCall(0,r||hn,a);return o.data="isPause",this._hasPause=1,ei(this,o,Dt(this,n))},t.removePause=function(n){var r=this._first;for(n=Dt(this,n);r;)r._start===n&&r.data==="isPause"&&Bi(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=zt(n),l=this._first,c=vi(r),d;l;)l instanceof Ce?fu(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(d=l.getTweensOf(o,r)).length&&a.push.apply(a,d),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Dt(a,n),l=r,c=l.startAt,d=l.onStart,f=l.onStartParams,h=l.immediateRender,u,m=Ce.to(a,At({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ae,onStart:function(){if(a.pause(),!u){var b=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==b&&Ls(m,b,0,1).render(m._time,!0,!0),u=1}d&&d.apply(m,f||[])}},r));return h?m.render(0):m},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,At({startAt:{time:Dt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),io(this,Dt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),io(this,Dt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ae)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=ue(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return ts(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ts(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=It,c,d,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ei(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(r-=d,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=ue(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ls(a,a===fe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(fe._ts&&(ol(fe,sr(n,fe)),rl=Tt.frame),Tt.frame>=Qa){Qa+=Pt.autoSleep||120;var r=fe._first;if((!r||!r._ts)&&Pt.autoSleep&&Tt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Tt.sleep()}}},e})(vn);At(at.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bu=function(e,t,i,n,r,a,o){var l=new pt(this._pt,e,t,0,1,Bl,null,r),c=0,d=0,f,h,u,m,p,b,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=mn(n)),a&&(v=[i,n],a(v,e,t),i=v[0],n=v[1]),h=i.match(Tr)||[];f=Tr.exec(n);)m=f[0],p=n.substring(c,f.index),u?u=(u+1)%5:p.substr(-5)==="rgba("&&(u=1),m!==h[d++]&&(b=parseFloat(h[d-1])||0,l._pt={_next:l._pt,p:p||d===1?p:",",s:b,c:m.charAt(1)==="="?ks(b,m)-b:parseFloat(m)-b,m:u&&u<4?Math.round:0},c=Tr.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(tl.test(n)||g)&&(l.e=0),this._pt=l,l},ka=function(e,t,i,n,r,a,o,l,c,d){ve(n)&&(n=n(r||0,e,a));var f=e[t],h=i!=="get"?i:ve(f)?c?e[t.indexOf("set")||!ve(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=ve(f)?c?Nu:Ol:Ma,m;if(Be(n)&&(~n.indexOf("random(")&&(n=mn(n)),n.charAt(1)==="="&&(m=ks(h,n)+(Ue(h)||0),(m||m===0)&&(n=m))),!d||h!==n||Qr)return!isNaN(h*n)&&n!==""?(m=new pt(this._pt,e,t,+h||0,n-(h||0),typeof f=="boolean"?Hu:Ll,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(t in e)&&_a(t,n),Bu.call(this,e,t,h,n,u,l||Pt.stringFilter,c))},Iu=function(e,t,i,n,r){if(ve(e)&&(e=tn(e,r,t,i,n)),!ai(e)||e.style&&e.nodeType||Je(e)||Zo(e))return Be(e)?tn(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=tn(e[o],r,t,i,n);return a},Al=function(e,t,i,n,r,a){var o,l,c,d;if(wt[e]&&(o=new wt[e]).init(r,o.rawVars?t[e]:Iu(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new pt(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==xs))for(c=i._ptLookup[i._targets.indexOf(r)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Mi,Qr,Ca=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,d=n.runBackwards,f=n.yoyoEase,h=n.keyframes,u=n.autoRevert,m=e._dur,p=e._startAt,b=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:b,y=e._overwrite==="auto"&&!ga,_=e.timeline,w,M,T,S,C,k,A,E,L,B,F,H,O;if(_&&(!h||!r)&&(r="none"),e._ease=is(r,$s.ease),e._yEase=f?Cl(is(f===!0?r:f,$s.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!_&&!!n.runBackwards,!_||h&&!n.stagger){if(E=b[0]?es(b[0]).harness:0,H=E&&n[E.prop],w=ir(n,xa),p&&(p._zTime<0&&p.progress(1),t<0&&d&&o&&!u?p.render(-1,!0):p.revert(d&&m?Gn:du),p._lazy=0),a){if(Bi(e._startAt=Ce.set(b,At({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!p&&ut(l),startAt:null,delay:0,onUpdate:c&&function(){return Ct(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ge||!o&&!u)&&e._startAt.revert(Gn),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&m&&!p){if(t&&(o=!1),T=At({overwrite:!1,data:"isFromStart",lazy:o&&!p&&ut(l),immediateRender:o,stagger:0,parent:g},w),H&&(T[E.prop]=H),Bi(e._startAt=Ce.set(b,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ge?e._startAt.revert(Gn):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ae,ae);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ut(l)||l&&!m,M=0;M<b.length;M++){if(C=b[M],A=C._gsap||Sa(b)[M]._gsap,e._ptLookup[M]=B={},Wr[A.id]&&Di.length&&tr(),F=v===b?M:v.indexOf(C),E&&(L=new E).init(C,H||w,e,F,v)!==!1&&(e._pt=S=new pt(e._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(D){B[D]=S}),L.priority&&(k=1)),!E||H)for(T in w)wt[T]&&(L=Al(T,w,e,F,C,v))?L.priority&&(k=1):B[T]=S=ka.call(e,C,T,"get",w[T],F,v,0,n.stringFilter);e._op&&e._op[M]&&e.kill(C,e._op[M]),y&&e._pt&&(Mi=e,fe.killTweensOf(C,B,e.globalTime(t)),O=!e.parent,Mi=0),e._pt&&l&&(Wr[A.id]=1)}k&&Il(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,h&&t<=0&&_.render(It,!0,!0)},zu=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,h,u;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,u=e._targets.length;u--;){if(d=h[u][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Qr=1,e.vars[t]="+=0",Ca(e,o),Qr=0,l?pn(t+" not eligible for reset"):1;c.push(d)}for(u=c.length;u--;)f=c[u],d=f._pt||f,d.s=(n||n===0)&&!r?n:d.s+(n||0)+a*d.c,d.c=i-d.s,f.e&&(f.e=xe(i)+Ue(f.e)),f.b&&(f.b=d.s+Ue(f.b))},Fu=function(e,t){var i=e[0]?es(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=Ds({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Ru=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Je(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},tn=function(e,t,i,n,r){return ve(e)?e.call(t,i,n,r):Be(e)&&~e.indexOf("random(")?mn(e):e},$l=wa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dl={};ft($l+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dl[s]=1});var Ce=(function(s){Jo(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Zs(n))||this;var l=o.vars,c=l.duration,d=l.delay,f=l.immediateRender,h=l.stagger,u=l.overwrite,m=l.keyframes,p=l.defaults,b=l.scrollTrigger,g=l.yoyoEase,v=n.parent||fe,y=(Je(i)||Zo(i)?vi(i[0]):"length"in n)?[i]:zt(i),_,w,M,T,S,C,k,A;if(o._targets=y.length?Sa(y):pn("GSAP target "+i+" not found. https://gsap.com",!Pt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||h||Mn(c)||Mn(d)){if(n=o.vars,_=o.timeline=new at({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:y}),_.kill(),_.parent=_._dp=fi(o),_._start=0,h||Mn(c)||Mn(d)){if(T=y.length,k=h&&gl(h),ai(h))for(S in h)~$l.indexOf(S)&&(A||(A={}),A[S]=h[S]);for(w=0;w<T;w++)M=ir(n,Dl),M.stagger=0,g&&(M.yoyoEase=g),A&&Ds(M,A),C=y[w],M.duration=+tn(c,fi(o),w,C,y),M.delay=(+tn(d,fi(o),w,C,y)||0)-o._delay,!h&&T===1&&M.delay&&(o._delay=d=M.delay,o._start+=d,M.delay=0),_.to(C,M,k?k(w,C,y):0),_._ease=Q.none;_.duration()?c=d=0:o.timeline=0}else if(m){Zs(At(_.vars.defaults,{ease:"none"})),_._ease=is(m.ease||n.ease||"none");var E=0,L,B,F;if(Je(m))m.forEach(function(H){return _.to(y,H,">")}),_.duration();else{M={};for(S in m)S==="ease"||S==="easeEach"||Ru(S,m[S],M,m.easeEach);for(S in M)for(L=M[S].sort(function(H,O){return H.t-O.t}),E=0,w=0;w<L.length;w++)B=L[w],F={ease:B.e,duration:(B.t-(w?L[w-1].t:0))/100*c},F[S]=B.v,_.to(y,F,E),E+=F.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||o.duration(c=_.duration())}else o.timeline=0;return u===!0&&!ga&&(Mi=fi(o),fe.killTweensOf(y),Mi=0),ei(v,fi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!c&&!m&&o._start===ue(v._time)&&ut(f)&&gu(fi(o))&&v.data!=="nested")&&(o._tTime=-ae,o.render(Math.max(0,-d)||0)),b&&fl(fi(o),b),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,d=n<0,f=n>l-ae&&!d?l:n<ae?0:n,h,u,m,p,b,g,v,y,_;if(!c)yu(this,n,r,a);else if(f!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(h=f,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(p*100+n,r,a);if(h=ue(f%p),f===l?(m=this._repeat,h=c):(b=ue(f/p),m=~~b,m&&m===b?(h=c,m--):h>c&&(h=c)),g=this._yoyo&&m&1,g&&(_=this._yEase,h=c-h),b=Os(this._tTime,p),h===o&&!a&&this._initted&&m===b)return this._tTime=f,this;m!==b&&(y&&this._yEase&&Ml(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(ue(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(pl(this,d?n:h,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==b))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(_||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&f&&!r&&!b&&(Ct(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;y&&y.render(n<0?n:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(d&&Yr(this,n,r,a),Ct(this,"onUpdate")),this._repeat&&m!==b&&this.vars.onRepeat&&!r&&this.parent&&Ct(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(d&&!this._onUpdate&&Yr(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Bi(this,1),!r&&!(d&&!o)&&(f||o||g)&&(Ct(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){gn||Tt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Ca(this,c),d=this._ease(c/this._dur),zu(this,n,r,a,o,d,c,l)?this.resetTo(n,r,a,o,1):(pr(this,0),this.parent||dl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ws(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ge),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Mi&&Mi.vars.overwrite!==!0)._first||Ws(this),this.parent&&a!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?zt(n):o,c=this._ptLookup,d=this._pt,f,h,u,m,p,b,g;if((!r||r==="all")&&hu(o,l))return r==="all"&&(this._pt=0),Ws(this);for(f=this._op=this._op||[],r!=="all"&&(Be(r)&&(p={},ft(r,function(v){return p[v]=1}),r=p),r=Fu(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],r==="all"?(f[g]=r,m=h,u={}):(u=f[g]=f[g]||{},m=r);for(p in m)b=h&&h[p],b&&((!("kill"in b.d)||b.d.kill(p)===!0)&&ur(this,b,"_pt"),delete h[p]),u!=="all"&&(u[p]=1)}return this._initted&&!this._pt&&d&&Ws(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return en(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return en(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return fe.killTweensOf(n,r,a)},e})(vn);At(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ft("staggerTo,staggerFrom,staggerFromTo",function(s){Ce[s]=function(){var e=new at,t=Ur.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ma=function(e,t,i){return e[t]=i},Ol=function(e,t,i){return e[t](i)},Nu=function(e,t,i,n){return e[t](n.fp,i)},Gu=function(e,t,i){return e.setAttribute(t,i)},Pa=function(e,t){return ve(e[t])?Ol:va(e[t])&&e.setAttribute?Gu:Ma},Ll=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hu=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bl=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Ea=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qu=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},Vu=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?ur(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ju=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Il=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},pt=(function(){function s(t,i,n,r,a,o,l,c,d){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||Ll,this.d=l||this,this.set=c||Ma,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=ju,this.m=i,this.mt=r,this.tween=n},s})();ft(wa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return xa[s]=1});Et.TweenMax=Et.TweenLite=Ce;Et.TimelineLite=Et.TimelineMax=at;fe=new at({sortChildren:!1,defaults:$s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pt.stringFilter=kl;var ss=[],qn={},Wu=[],no=0,Yu=0,Er=function(e){return(qn[e]||Wu).map(function(t){return t()})},Zr=function(){var e=Date.now(),t=[];e-no>2&&(Er("matchMediaInit"),ss.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=Qt.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Er("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),no=e,Er("matchMedia"))},zl=(function(){function s(t,i){this.selector=i&&Kr(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Yu++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){ve(i)&&(r=n,n=i,i=ve);var a=this,o=function(){var c=ce,d=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Kr(r)),ce=a,f=n.apply(a,arguments),ve(f)&&a._r.push(f),ce=c,a.selector=d,a.isReverted=!1,f};return a.last=o,i===ve?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=ce;ce=null,i(this),ce=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Ce&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,f){return f.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof at?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ce)&&c.revert&&c.revert(i);r._r.forEach(function(d){return d(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=ss.length;a--;)ss[a].id===this.id&&ss.splice(a,1)},e.revert=function(i){this.kill(i||{})},s})(),Xu=(function(){function s(t){this.contexts=[],this.scope=t,ce&&ce.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){ai(i)||(i={matches:i});var a=new zl(0,r||this.scope),o=a.conditions={},l,c,d;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?d=1:(l=Qt.matchMedia(i[c]),l&&(ss.indexOf(a)<0&&ss.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Zr):l.addEventListener("change",Zr)));return d&&n(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),nr={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return wl(n)})},timeline:function(e){return new at(e)},getTweensOf:function(e,t){return fe.getTweensOf(e,t)},getProperty:function(e,t,i,n){Be(e)&&(e=zt(e)[0]);var r=es(e||{}).get,a=i?cl:ll;return i==="native"&&(i=""),e&&(t?a((wt[t]&&wt[t].get||r)(e,t,i,n)):function(o,l,c){return a((wt[o]&&wt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=zt(e),e.length>1){var n=e.map(function(d){return mt.quickSetter(d,t,i)}),r=n.length;return function(d){for(var f=r;f--;)n[f](d)}}e=e[0]||{};var a=wt[t],o=es(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(d){var f=new a;xs._pt=0,f.init(e,i?d+i:d,xs,0,[e]),f.render(1,f),xs._pt&&Ea(1,xs)}:o.set(e,l);return a?c:function(d){return c(e,l,i?d+i:d,o,1)}},quickTo:function(e,t,i){var n,r=mt.to(e,At((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,d){return r.resetTo(t,l,c,d)};return a.tween=r,a},isTweening:function(e){return fe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=is(e.ease,$s.ease)),Za($s,e||{})},config:function(e){return Za(Pt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!wt[o]&&!Et[o]&&pn(t+" effect requires "+o+" plugin.")}),kr[t]=function(o,l,c){return i(zt(o),At(l||{},r),c)},a&&(at.prototype[t]=function(o,l,c){return this.add(kr[t](o,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Q[e]=is(t)},parseEase:function(e,t){return arguments.length?is(e,t):Q},getById:function(e){return fe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new at(e),n,r;for(i.smoothChildTiming=ut(e.smoothChildTiming),fe.remove(i),i._dp=0,i._time=i._tTime=fe._time,n=fe._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Ce&&n.vars.onComplete===n._targets[0]))&&ei(i,n,n._start-n._delay),n=r;return ei(fe,i,0),i},context:function(e,t){return e?new zl(e,t):ce},matchMedia:function(e){return new Xu(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Zr()},addEventListener:function(e,t){var i=qn[e]||(qn[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=qn[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Cu,wrapYoyo:Mu,distribute:gl,random:yl,snap:vl,normalize:ku,getUnit:Ue,clamp:xu,splitColor:Sl,toArray:zt,selector:Kr,mapRange:_l,pipe:Su,unitize:Tu,interpolate:Pu,shuffle:ml},install:sl,effects:kr,ticker:Tt,updateRoot:at.updateRoot,plugins:wt,globalTimeline:fe,core:{PropTween:pt,globals:nl,Tween:Ce,Timeline:at,Animation:vn,getCache:es,_removeLinkedListItem:ur,reverting:function(){return Ge},context:function(e){return e&&ce&&(ce.data.push(e),e._ctx=ce),ce},suppressOverwrites:function(e){return ga=e}}};ft("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return nr[s]=Ce[s]});Tt.add(at.updateRoot);xs=nr.to({},{duration:0});var Uu=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Ku=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=Uu(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Ar=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Be(r)&&(l={},ft(r,function(d){return l[d]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ku(o,r)}}}},mt=nr.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ge?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ar("roundProps",Jr),Ar("modifiers"),Ar("snap",vl))||nr;Ce.version=at.version=mt.version="3.14.2";il=1;ya()&&Bs();Q.Power0;Q.Power1;Q.Power2;Q.Power3;Q.Power4;Q.Linear;Q.Quad;Q.Cubic;Q.Quart;Q.Quint;Q.Strong;Q.Elastic;Q.Back;Q.SteppedEase;Q.Bounce;Q.Sine;Q.Expo;Q.Circ;var ro,Pi,Cs,Aa,Qi,ao,$a,Ju=function(){return typeof window<"u"},yi={},Xi=180/Math.PI,Ms=Math.PI/180,ms=Math.atan2,oo=1e8,Da=/([A-Z])/g,Qu=/(left|right|width|margin|padding|x)/i,Zu=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ea=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ef=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nf=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Fl=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rl=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rf=function(e,t,i){return e.style[t]=i},af=function(e,t,i){return e.style.setProperty(t,i)},of=function(e,t,i){return e._gsap[t]=i},lf=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},cf=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},df=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},pe="transform",ht=pe+"Origin",uf=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in yi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=pi(n,o)}):this.tfm[e]=a.x?a[e]:pi(n,e),e===ht&&(this.tfm.zOrigin=a.zOrigin);else return ii.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(pe)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ht,t,"")),e=pe}(r||t)&&this.props.push(e,t,r[e])},Nl=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ff=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Da,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=$a(),(!r||!r.isStart)&&!i[pe]&&(Nl(i),n.zOrigin&&i[ht]&&(i[ht]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Gl=function(e,t){var i={target:e,props:[],revert:ff,save:uf};return e._gsap||mt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Hl,ta=function(e,t){var i=Pi.createElementNS?Pi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pi.createElement(e);return i&&i.style?i:Pi.createElement(e)},Mt=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Da,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Is(t)||t,1)||""},lo="O,Moz,ms,Ms,Webkit".split(","),Is=function(e,t,i){var n=t||Qi,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lo[a]+e in r););return a<0?null:(a===3?"ms":a>=0?lo[a]:"")+e},ia=function(){Ju()&&window.document&&(ro=window,Pi=ro.document,Cs=Pi.documentElement,Qi=ta("div")||{style:{}},ta("div"),pe=Is(pe),ht=pe+"Origin",Qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hl=!!Is("perspective"),$a=mt.core.reverting,Aa=1)},co=function(e){var t=e.ownerSVGElement,i=ta("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Cs.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Cs.removeChild(i),r},uo=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ql=function(e){var t,i;try{t=e.getBBox()}catch{t=co(e),i=1}return t&&(t.width||t.height)||i||(t=co(e)),t&&!t.width&&!t.x&&!t.y?{x:+uo(e,["x","cx","x1"])||0,y:+uo(e,["y","cy","y1"])||0,width:0,height:0}:t},Vl=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ql(e))},Ii=function(e,t){if(t){var i=e.style,n;t in yi&&t!==ht&&(t=pe),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Da,"-$1").toLowerCase())):i.removeAttribute(t)}},Ei=function(e,t,i,n,r,a){var o=new pt(e._pt,t,i,0,1,a?Rl:Fl);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},fo={deg:1,rad:1,turn:1},pf={grid:1,flex:1},zi=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=Qi.style,l=Qu.test(t),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",u=n==="%",m,p,b,g;if(n===a||!r||fo[n]||fo[a])return r;if(a!=="px"&&!h&&(r=s(e,t,i,"px")),g=e.getCTM&&Vl(e),(u||a==="%")&&(yi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[d],xe(u?r/m*f:r/100*m);if(o[l?"width":"height"]=f+(h?a:n),p=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Pi||!p.appendChild)&&(p=Pi.body),b=p._gsap,b&&u&&b.width&&l&&b.time===Tt.time&&!b.uncache)return xe(r/b.width*f);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+n,m=e[d],v?e.style[t]=v:Ii(e,t)}else(u||a==="%")&&!pf[Mt(p,"display")]&&(o.position=Mt(e,"position")),p===e&&(o.position="static"),p.appendChild(Qi),m=Qi[d],p.removeChild(Qi),o.position="absolute";return l&&u&&(b=es(p),b.time=Tt.time,b.width=p[d]),xe(h?m*r/f:m&&r?f/m*r:0)},pi=function(e,t,i,n){var r;return Aa||ia(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),yi[t]&&t!=="transform"?(r=bn(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ar(Mt(e,ht))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=rr[t]&&rr[t](e,t,i)||Mt(e,t)||al(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?zi(e,t,r,i)+i:r},hf=function(e,t,i,n){if(!i||i==="none"){var r=Is(t,e,1),a=r&&Mt(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=Mt(e,"borderTopColor"))}var o=new pt(this._pt,e.style,t,0,1,Bl),l=0,c=0,d,f,h,u,m,p,b,g,v,y,_,w;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Mt(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(p=e.style[t],e.style[t]=n,n=Mt(e,t)||n,p?e.style[t]=p:Ii(e,t)),d=[i,n],kl(d),i=d[0],n=d[1],h=i.match(_s)||[],w=n.match(_s)||[],w.length){for(;f=_s.exec(n);)b=f[0],v=n.substring(l,f.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),b!==(p=h[c++]||"")&&(u=parseFloat(p)||0,_=p.substr((u+"").length),b.charAt(1)==="="&&(b=ks(u,b)+_),g=parseFloat(b),y=b.substr((g+"").length),l=_s.lastIndex-y.length,y||(y=y||Pt.units[t]||_,l===n.length&&(n+=y,o.e+=y)),_!==y&&(u=zi(e,t,p,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Rl:Fl;return tl.test(n)&&(o.e=0),this._pt=o,o},po={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mf=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=po[i]||i,t[1]=po[n]||n,t.join(" ")},gf=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],yi[o]&&(l=1,o=o==="transformOrigin"?ht:pe),Ii(i,o);l&&(Ii(i,pe),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",bn(i,1),a.uncache=1,Nl(n)))}},rr={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new pt(e._pt,t,i,0,0,gf);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},yn=[1,0,0,1,0,0],jl={},Wl=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ho=function(e){var t=Mt(e,pe);return Wl(t)?yn:t.substr(7).match(el).map(xe)},Oa=function(e,t){var i=e._gsap||es(e),n=e.style,r=ho(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?yn:r):(r===yn&&!e.offsetParent&&e!==Cs&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Cs.appendChild(e)),r=ho(e),l?n.display=l:Ii(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Cs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},sa=function(e,t,i,n,r,a){var o=e._gsap,l=r||Oa(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,u=l[0],m=l[1],p=l[2],b=l[3],g=l[4],v=l[5],y=t.split(" "),_=parseFloat(y[0])||0,w=parseFloat(y[1])||0,M,T,S,C;i?l!==yn&&(T=u*b-m*p)&&(S=_*(b/T)+w*(-p/T)+(p*v-b*g)/T,C=_*(-m/T)+w*(u/T)-(u*v-m*g)/T,_=S,w=C):(M=ql(e),_=M.x+(~y[0].indexOf("%")?_/100*M.width:_),w=M.y+(~(y[1]||y[0]).indexOf("%")?w/100*M.height:w)),n||n!==!1&&o.smooth?(g=_-c,v=w-d,o.xOffset=f+(g*u+v*p)-g,o.yOffset=h+(g*m+v*b)-v):o.xOffset=o.yOffset=0,o.xOrigin=_,o.yOrigin=w,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[ht]="0px 0px",a&&(Ei(a,o,"xOrigin",c,_),Ei(a,o,"yOrigin",d,w),Ei(a,o,"xOffset",f,o.xOffset),Ei(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",_+" "+w)},bn=function(e,t){var i=e._gsap||new El(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Mt(e,ht)||"0",d,f,h,u,m,p,b,g,v,y,_,w,M,T,S,C,k,A,E,L,B,F,H,O,D,R,x,Z,Ie,Rt,he,ze;return d=f=h=p=b=g=v=y=_=0,u=m=1,i.svg=!!(e.getCTM&&Vl(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pe]!=="none"?l[pe]:"")),n.scale=n.rotate=n.translate="none"),T=Oa(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),c=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),sa(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,M=i.yOrigin||0,T!==yn&&(A=T[0],E=T[1],L=T[2],B=T[3],d=F=T[4],f=H=T[5],T.length===6?(u=Math.sqrt(A*A+E*E),m=Math.sqrt(B*B+L*L),p=A||E?ms(E,A)*Xi:0,v=L||B?ms(L,B)*Xi+p:0,v&&(m*=Math.abs(Math.cos(v*Ms))),i.svg&&(d-=w-(w*A+M*L),f-=M-(w*E+M*B))):(ze=T[6],Rt=T[7],x=T[8],Z=T[9],Ie=T[10],he=T[11],d=T[12],f=T[13],h=T[14],S=ms(ze,Ie),b=S*Xi,S&&(C=Math.cos(-S),k=Math.sin(-S),O=F*C+x*k,D=H*C+Z*k,R=ze*C+Ie*k,x=F*-k+x*C,Z=H*-k+Z*C,Ie=ze*-k+Ie*C,he=Rt*-k+he*C,F=O,H=D,ze=R),S=ms(-L,Ie),g=S*Xi,S&&(C=Math.cos(-S),k=Math.sin(-S),O=A*C-x*k,D=E*C-Z*k,R=L*C-Ie*k,he=B*k+he*C,A=O,E=D,L=R),S=ms(E,A),p=S*Xi,S&&(C=Math.cos(S),k=Math.sin(S),O=A*C+E*k,D=F*C+H*k,E=E*C-A*k,H=H*C-F*k,A=O,F=D),b&&Math.abs(b)+Math.abs(p)>359.9&&(b=p=0,g=180-g),u=xe(Math.sqrt(A*A+E*E+L*L)),m=xe(Math.sqrt(H*H+ze*ze)),S=ms(F,H),v=Math.abs(S)>2e-4?S*Xi:0,_=he?1/(he<0?-he:he):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Wl(Mt(e,pe)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=d-((i.xPercent=d&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=xe(u),i.scaleY=xe(m),i.rotation=xe(p)+o,i.rotationX=xe(b)+o,i.rotationY=xe(g)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=_+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[ht]=ar(c)),i.xOffset=i.yOffset=0,i.force3D=Pt.force3D,i.renderTransform=i.svg?yf:Hl?Yl:vf,i.uncache=0,i},ar=function(e){return(e=e.split(" "))[0]+" "+e[1]},$r=function(e,t,i){var n=Ue(t);return xe(parseFloat(t)+parseFloat(zi(e,"x",i+"px",n)))+n},vf=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yl(e,t)},ji="0deg",qs="0px",Wi=") ",Yl=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,d=i.rotationY,f=i.rotationX,h=i.skewX,u=i.skewY,m=i.scaleX,p=i.scaleY,b=i.transformPerspective,g=i.force3D,v=i.target,y=i.zOrigin,_="",w=g==="auto"&&e&&e!==1||g===!0;if(y&&(f!==ji||d!==ji)){var M=parseFloat(d)*Ms,T=Math.sin(M),S=Math.cos(M),C;M=parseFloat(f)*Ms,C=Math.cos(M),a=$r(v,a,T*C*-y),o=$r(v,o,-Math.sin(M)*-y),l=$r(v,l,S*C*-y+y)}b!==qs&&(_+="perspective("+b+Wi),(n||r)&&(_+="translate("+n+"%, "+r+"%) "),(w||a!==qs||o!==qs||l!==qs)&&(_+=l!==qs||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==ji&&(_+="rotate("+c+Wi),d!==ji&&(_+="rotateY("+d+Wi),f!==ji&&(_+="rotateX("+f+Wi),(h!==ji||u!==ji)&&(_+="skew("+h+", "+u+Wi),(m!==1||p!==1)&&(_+="scale("+m+", "+p+Wi),v.style[pe]=_||"translate(0, 0)"},yf=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,d=i.skewY,f=i.scaleX,h=i.scaleY,u=i.target,m=i.xOrigin,p=i.yOrigin,b=i.xOffset,g=i.yOffset,v=i.forceCSS,y=parseFloat(a),_=parseFloat(o),w,M,T,S,C;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=Ms,c*=Ms,w=Math.cos(l)*f,M=Math.sin(l)*f,T=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(d*=Ms,C=Math.tan(c-d),C=Math.sqrt(1+C*C),T*=C,S*=C,d&&(C=Math.tan(d),C=Math.sqrt(1+C*C),w*=C,M*=C)),w=xe(w),M=xe(M),T=xe(T),S=xe(S)):(w=f,S=h,M=T=0),(y&&!~(a+"").indexOf("px")||_&&!~(o+"").indexOf("px"))&&(y=zi(u,"x",a,"px"),_=zi(u,"y",o,"px")),(m||p||b||g)&&(y=xe(y+m-(m*w+p*T)+b),_=xe(_+p-(m*M+p*S)+g)),(n||r)&&(C=u.getBBox(),y=xe(y+n/100*C.width),_=xe(_+r/100*C.height)),C="matrix("+w+","+M+","+T+","+S+","+y+","+_+")",u.setAttribute("transform",C),v&&(u.style[pe]=C)},bf=function(e,t,i,n,r){var a=360,o=Be(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Xi:1),c=l-n,d=n+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*oo)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*oo)%a-~~(c/a)*a)),e._pt=h=new pt(e._pt,t,i,n,c,ef),h.e=d,h.u="deg",e._props.push(i),h},mo=function(e,t){for(var i in t)e[i]=t[i];return e},_f=function(e,t,i){var n=mo({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,d,f,h,u,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[pe]=t,o=bn(i,1),Ii(i,pe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[pe],a[pe]=t,o=bn(i,1),a[pe]=c);for(l in yi)c=n[l],d=o[l],c!==d&&r.indexOf(l)<0&&(u=Ue(c),m=Ue(d),f=u!==m?zi(i,l,c,m):parseFloat(c),h=parseFloat(d),e._pt=new pt(e._pt,o,l,f,h-f,ea),e._pt.u=m||0,e._props.push(l));mo(o,n)};ft("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});rr[e>1?"border"+s:s]=function(o,l,c,d,f){var h,u;if(arguments.length<4)return h=a.map(function(m){return pi(o,m,c)}),u=h.join(" "),u.split(h[0]).length===5?h[0]:u;h=(d+"").split(" "),u={},a.forEach(function(m,p){return u[m]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,u,f)}});var Xl={name:"css",register:ia,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,d,f,h,u,m,p,b,g,v,y,_,w,M,T,S,C;Aa||ia(),this.styles=this.styles||Gl(e),S=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(d=t[p],!(wt[p]&&Al(p,t,i,n,e,r)))){if(u=typeof d,m=rr[p],u==="function"&&(d=d.call(i,n,e,r),u=typeof d),u==="string"&&~d.indexOf("random(")&&(d=mn(d)),m)m(this,e,p,d,i)&&(T=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),d+="",Oi.lastIndex=0,Oi.test(c)||(b=Ue(c),g=Ue(d),g?b!==g&&(c=zi(e,p,c,g)+g):b&&(d+=b)),this.add(o,"setProperty",c,d,n,r,0,0,p),a.push(p),S.push(p,0,o[p]);else if(u!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Be(c)&&~c.indexOf("random(")&&(c=mn(c)),Ue(c+"")||c==="auto"||(c+=Pt.units[p]||Ue(pi(e,p))||""),(c+"").charAt(1)==="="&&(c=pi(e,p))):c=pi(e,p),h=parseFloat(c),v=u==="string"&&d.charAt(1)==="="&&d.substr(0,2),v&&(d=d.substr(2)),f=parseFloat(d),p in ii&&(p==="autoAlpha"&&(h===1&&pi(e,"visibility")==="hidden"&&f&&(h=0),S.push("visibility",0,o.visibility),Ei(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=ii[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in yi,y){if(this.styles.save(p),C=d,u==="string"&&d.substring(0,6)==="var(--"){if(d=Mt(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var k=e.style.perspective;e.style.perspective=d,d=Mt(e,"perspective"),k?e.style.perspective=k:Ii(e,"perspective")}f=parseFloat(d)}if(_||(w=e._gsap,w.renderTransform&&!t.parseTransform||bn(e,t.parseTransform),M=t.smoothOrigin!==!1&&w.smooth,_=this._pt=new pt(this._pt,o,pe,0,1,w.renderTransform,w,0,-1),_.dep=1),p==="scale")this._pt=new pt(this._pt,w,"scaleY",w.scaleY,(v?ks(w.scaleY,v+f):f)-w.scaleY||0,ea),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){S.push(ht,0,o[ht]),d=mf(d),w.svg?sa(e,d,0,M,0,this):(g=parseFloat(d.split(" ")[2])||0,g!==w.zOrigin&&Ei(this,w,"zOrigin",w.zOrigin,g),Ei(this,o,p,ar(c),ar(d)));continue}else if(p==="svgOrigin"){sa(e,d,1,M,0,this);continue}else if(p in jl){bf(this,w,p,h,v?ks(h,v+d):d);continue}else if(p==="smoothOrigin"){Ei(this,w,"smooth",w.smooth,d);continue}else if(p==="force3D"){w[p]=d;continue}else if(p==="transform"){_f(this,d,e);continue}}else p in o||(p=Is(p)||p);if(y||(f||f===0)&&(h||h===0)&&!Zu.test(d)&&p in o)b=(c+"").substr((h+"").length),f||(f=0),g=Ue(d)||(p in Pt.units?Pt.units[p]:b),b!==g&&(h=zi(e,p,c,g)),this._pt=new pt(this._pt,y?w:o,p,h,(v?ks(h,v+f):f)-h,!y&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?nf:ea),this._pt.u=g||0,y&&C!==d?(this._pt.b=c,this._pt.e=C,this._pt.r=sf):b!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=tf);else if(p in o)hf.call(this,e,p,c,v?v+d:d);else if(p in e)this.add(e,p,c||e[p],v?v+d:d,n,r);else if(p!=="parseTransform"){_a(p,d);continue}y||(p in o?S.push(p,0,o[p]):typeof e[p]=="function"?S.push(p,2,e[p]()):S.push(p,1,c||e[p])),a.push(p)}}T&&Il(this)},render:function(e,t){if(t.tween._time||!$a())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:pi,aliases:ii,getSetter:function(e,t,i){var n=ii[t];return n&&n.indexOf(",")<0&&(t=n),t in yi&&t!==ht&&(e._gsap.x||pi(e,"x"))?i&&ao===i?t==="scale"?lf:of:(ao=i||{})&&(t==="scale"?cf:df):e.style&&!va(e.style[t])?rf:~t.indexOf("-")?af:Pa(e,t)},core:{_removeProperty:Ii,_getMatrix:Oa}};mt.utils.checkPrefix=Is;mt.core.getStyleSaver=Gl;(function(s,e,t,i){var n=ft(s+","+e+","+t,function(r){yi[r]=1});ft(e,function(r){Pt.units[r]="deg",jl[r]=1}),ii[n[13]]=s+","+e,ft(i,function(r){var a=r.split(":");ii[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pt.units[s]="px"});mt.registerPlugin(Xl);var hr=mt.registerPlugin(Xl)||mt;hr.core.Tween;function xf(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function wf(s,e,t){return e&&xf(s.prototype,e),s}var Ne,Vn,kt,Ai,$i,Ps,Ul,Ui,sn,Kl,mi,jt,Jl,Ql=function(){return Ne||typeof window<"u"&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},Zl=1,ws=[],X=[],ri=[],nn=Date.now,na=function(e,t){return t},Sf=function(){var e=sn.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,X),n.push.apply(n,ri),X=i,ri=n,na=function(a,o){return t[a](o)}},Li=function(e,t){return~ri.indexOf(e)&&ri[ri.indexOf(e)+1][t]},rn=function(e){return!!~Kl.indexOf(e)},it=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},tt=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Pn="scrollLeft",En="scrollTop",ra=function(){return mi&&mi.isPressed||X.cache++},or=function(e,t){var i=function n(r){if(r||r===0){Zl&&(kt.history.scrollRestoration="manual");var a=mi&&mi.isPressed;r=n.v=Math.round(r)||(mi&&mi.iOS?1:0),e(r),n.cacheID=X.cache,a&&na("ss",r)}else(t||X.cache!==n.cacheID||na("ref"))&&(n.cacheID=X.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},ot={s:Pn,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:or(function(s){return arguments.length?kt.scrollTo(s,Ee.sc()):kt.pageXOffset||Ai[Pn]||$i[Pn]||Ps[Pn]||0})},Ee={s:En,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ot,sc:or(function(s){return arguments.length?kt.scrollTo(ot.sc(),s):kt.pageYOffset||Ai[En]||$i[En]||Ps[En]||0})},dt=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ne.utils.toArray)(e)[0]||(typeof e=="string"&&Ne.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Tf=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Fi=function(e,t){var i=t.s,n=t.sc;rn(e)&&(e=Ai.scrollingElement||$i);var r=X.indexOf(e),a=n===Ee.sc?1:2;!~r&&(r=X.push(e)-1),X[r+a]||it(e,"scroll",ra);var o=X[r+a],l=o||(X[r+a]=or(Li(e,i),!0)||(rn(e)?n:or(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=Ne.getProperty(e,"scrollBehavior")==="smooth"),l},aa=function(e,t,i){var n=e,r=e,a=nn(),o=a,l=t||50,c=Math.max(500,l*3),d=function(m,p){var b=nn();p||b-a>l?(r=n,n=m,o=a,a=b):i?n+=m:n=r+(m-r)/(b-o)*(a-o)},f=function(){r=n=i?0:n,o=a=0},h=function(m){var p=o,b=r,g=nn();return(m||m===0)&&m!==n&&d(m),a===o||g-o>c?0:(n+(i?b:-b))/((i?g:a)-p)*1e3};return{update:d,reset:f,getVelocity:h}},Vs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},go=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ec=function(){sn=Ne.core.globals().ScrollTrigger,sn&&sn.core&&Sf()},tc=function(e){return Ne=e||Ql(),!Vn&&Ne&&typeof document<"u"&&document.body&&(kt=window,Ai=document,$i=Ai.documentElement,Ps=Ai.body,Kl=[kt,Ai,$i,Ps],Ne.utils.clamp,Jl=Ne.core.context||function(){},Ui="onpointerenter"in Ps?"pointer":"mouse",Ul=we.isTouch=kt.matchMedia&&kt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jt=we.eventTypes=("ontouchstart"in $i?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $i?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zl=0},500),ec(),Vn=1),Vn};ot.op=Ee;X.cache=0;var we=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Vn||tc(Ne)||console.warn("Please gsap.registerPlugin(Observer)"),sn||ec();var n=i.tolerance,r=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,d=i.preventDefault,f=i.onStop,h=i.onStopDelay,u=i.ignore,m=i.wheelSpeed,p=i.event,b=i.onDragStart,g=i.onDragEnd,v=i.onDrag,y=i.onPress,_=i.onRelease,w=i.onRight,M=i.onLeft,T=i.onUp,S=i.onDown,C=i.onChangeX,k=i.onChangeY,A=i.onChange,E=i.onToggleX,L=i.onToggleY,B=i.onHover,F=i.onHoverEnd,H=i.onMove,O=i.ignoreCheck,D=i.isNormalizer,R=i.onGestureStart,x=i.onGestureEnd,Z=i.onWheel,Ie=i.onEnable,Rt=i.onDisable,he=i.onClick,ze=i.scrollSpeed,He=i.capture,Se=i.allowClicks,Qe=i.lockAxis,qe=i.onLockAxis;this.target=o=dt(o)||$i,this.vars=i,u&&(u=Ne.utils.toArray(u)),n=n||1e-9,r=r||0,m=m||1,ze=ze||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kt.getComputedStyle(Ps).lineHeight)||22);var bi,Ze,et,ee,ye,ct,gt,P=this,vt=0,oi=0,_i=i.passive||!d&&i.passive!==!1,me=Fi(o,ot),li=Fi(o,Ee),xi=me(),Ni=li(),Ae=~a.indexOf("touch")&&!~a.indexOf("pointer")&&jt[0]==="pointerdown",wi=rn(o),be=o.ownerDocument||Ai,Nt=[0,0,0],$t=[0,0,0],ci=0,Fs=function(){return ci=nn()},Te=function(G,te){return(P.event=G)&&u&&Tf(G.target,u)||te&&Ae&&G.pointerType!=="touch"||O&&O(G,te)},Sn=function(){P._vx.reset(),P._vy.reset(),Ze.pause(),f&&f(P)},di=function(){var G=P.deltaX=go(Nt),te=P.deltaY=go($t),I=Math.abs(G)>=n,q=Math.abs(te)>=n;A&&(I||q)&&A(P,G,te,Nt,$t),I&&(w&&P.deltaX>0&&w(P),M&&P.deltaX<0&&M(P),C&&C(P),E&&P.deltaX<0!=vt<0&&E(P),vt=P.deltaX,Nt[0]=Nt[1]=Nt[2]=0),q&&(S&&P.deltaY>0&&S(P),T&&P.deltaY<0&&T(P),k&&k(P),L&&P.deltaY<0!=oi<0&&L(P),oi=P.deltaY,$t[0]=$t[1]=$t[2]=0),(ee||et)&&(H&&H(P),et&&(b&&et===1&&b(P),v&&v(P),et=0),ee=!1),ct&&!(ct=!1)&&qe&&qe(P),ye&&(Z(P),ye=!1),bi=0},us=function(G,te,I){Nt[I]+=G,$t[I]+=te,P._vx.update(G),P._vy.update(te),c?bi||(bi=requestAnimationFrame(di)):di()},fs=function(G,te){Qe&&!gt&&(P.axis=gt=Math.abs(G)>Math.abs(te)?"x":"y",ct=!0),gt!=="y"&&(Nt[2]+=G,P._vx.update(G,!0)),gt!=="x"&&($t[2]+=te,P._vy.update(te,!0)),c?bi||(bi=requestAnimationFrame(di)):di()},Si=function(G){if(!Te(G,1)){G=Vs(G,d);var te=G.clientX,I=G.clientY,q=te-P.x,N=I-P.y,V=P.isDragging;P.x=te,P.y=I,(V||(q||N)&&(Math.abs(P.startX-te)>=r||Math.abs(P.startY-I)>=r))&&(et||(et=V?2:1),V||(P.isDragging=!0),fs(q,N))}},Gi=P.onPress=function(j){Te(j,1)||j&&j.button||(P.axis=gt=null,Ze.pause(),P.isPressed=!0,j=Vs(j),vt=oi=0,P.startX=P.x=j.clientX,P.startY=P.y=j.clientY,P._vx.reset(),P._vy.reset(),it(D?o:be,jt[1],Si,_i,!0),P.deltaX=P.deltaY=0,y&&y(P))},K=P.onRelease=function(j){if(!Te(j,1)){tt(D?o:be,jt[1],Si,!0);var G=!isNaN(P.y-P.startY),te=P.isDragging,I=te&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),q=Vs(j);!I&&G&&(P._vx.reset(),P._vy.reset(),d&&Se&&Ne.delayedCall(.08,function(){if(nn()-ci>300&&!j.defaultPrevented){if(j.target.click)j.target.click();else if(be.createEvent){var N=be.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,kt,1,q.screenX,q.screenY,q.clientX,q.clientY,!1,!1,!1,!1,0,null),j.target.dispatchEvent(N)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&te&&!D&&Ze.restart(!0),et&&di(),g&&te&&g(P),_&&_(P,I)}},Hi=function(G){return G.touches&&G.touches.length>1&&(P.isGesturing=!0)&&R(G,P.isDragging)},Gt=function(){return(P.isGesturing=!1)||x(P)},Ht=function(G){if(!Te(G)){var te=me(),I=li();us((te-xi)*ze,(I-Ni)*ze,1),xi=te,Ni=I,f&&Ze.restart(!0)}},qt=function(G){if(!Te(G)){G=Vs(G,d),Z&&(ye=!0);var te=(G.deltaMode===1?l:G.deltaMode===2?kt.innerHeight:1)*m;us(G.deltaX*te,G.deltaY*te,0),f&&!D&&Ze.restart(!0)}},qi=function(G){if(!Te(G)){var te=G.clientX,I=G.clientY,q=te-P.x,N=I-P.y;P.x=te,P.y=I,ee=!0,f&&Ze.restart(!0),(q||N)&&fs(q,N)}},ps=function(G){P.event=G,B(P)},ui=function(G){P.event=G,F(P)},Rs=function(G){return Te(G)||Vs(G,d)&&he(P)};Ze=P._dc=Ne.delayedCall(h||.25,Sn).pause(),P.deltaX=P.deltaY=0,P._vx=aa(0,50,!0),P._vy=aa(0,50,!0),P.scrollX=me,P.scrollY=li,P.isDragging=P.isGesturing=P.isPressed=!1,Jl(this),P.enable=function(j){return P.isEnabled||(it(wi?be:o,"scroll",ra),a.indexOf("scroll")>=0&&it(wi?be:o,"scroll",Ht,_i,He),a.indexOf("wheel")>=0&&it(o,"wheel",qt,_i,He),(a.indexOf("touch")>=0&&Ul||a.indexOf("pointer")>=0)&&(it(o,jt[0],Gi,_i,He),it(be,jt[2],K),it(be,jt[3],K),Se&&it(o,"click",Fs,!0,!0),he&&it(o,"click",Rs),R&&it(be,"gesturestart",Hi),x&&it(be,"gestureend",Gt),B&&it(o,Ui+"enter",ps),F&&it(o,Ui+"leave",ui),H&&it(o,Ui+"move",qi)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ee=et=!1,P._vx.reset(),P._vy.reset(),xi=me(),Ni=li(),j&&j.type&&Gi(j),Ie&&Ie(P)),P},P.disable=function(){P.isEnabled&&(ws.filter(function(j){return j!==P&&rn(j.target)}).length||tt(wi?be:o,"scroll",ra),P.isPressed&&(P._vx.reset(),P._vy.reset(),tt(D?o:be,jt[1],Si,!0)),tt(wi?be:o,"scroll",Ht,He),tt(o,"wheel",qt,He),tt(o,jt[0],Gi,He),tt(be,jt[2],K),tt(be,jt[3],K),tt(o,"click",Fs,!0),tt(o,"click",Rs),tt(be,"gesturestart",Hi),tt(be,"gestureend",Gt),tt(o,Ui+"enter",ps),tt(o,Ui+"leave",ui),tt(o,Ui+"move",qi),P.isEnabled=P.isPressed=P.isDragging=!1,Rt&&Rt(P))},P.kill=P.revert=function(){P.disable();var j=ws.indexOf(P);j>=0&&ws.splice(j,1),mi===P&&(mi=0)},ws.push(P),D&&rn(o)&&(mi=P),P.enable(p)},wf(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();we.version="3.14.2";we.create=function(s){return new we(s)};we.register=tc;we.getAll=function(){return ws.slice()};we.getById=function(s){return ws.filter(function(e){return e.vars.id===s})[0]};Ql()&&Ne.registerPlugin(we);var z,ys,Y,oe,St,ie,La,lr,_n,an,Xs,An,Ye,mr,oa,nt,vo,yo,bs,ic,Dr,sc,st,la,nc,rc,ki,ca,Ba,Es,Ia,on,da,Or,$n=1,Xe=Date.now,Lr=Xe(),Ft=0,Us=0,bo=function(e,t,i){var n=_t(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},_o=function(e,t){return t&&(!_t(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},kf=function s(){return Us&&requestAnimationFrame(s)},xo=function(){return mr=1},wo=function(){return mr=0},Zt=function(e){return e},Ks=function(e){return Math.round(e*1e5)/1e5||0},ac=function(){return typeof window<"u"},oc=function(){return z||ac()&&(z=window.gsap)&&z.registerPlugin&&z},os=function(e){return!!~La.indexOf(e)},lc=function(e){return(e==="Height"?Ia:Y["inner"+e])||St["client"+e]||ie["client"+e]},cc=function(e){return Li(e,"getBoundingClientRect")||(os(e)?function(){return Un.width=Y.innerWidth,Un.height=Ia,Un}:function(){return hi(e)})},Cf=function(e,t,i){var n=i.d,r=i.d2,a=i.a;return(a=Li(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?lc(r):e["client"+r])||0}},Mf=function(e,t){return!t||~ri.indexOf(e)?cc(e):function(){return Un}},si=function(e,t){var i=t.s,n=t.d2,r=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=Li(e,i))?a()-cc(e)()[r]:os(e)?(St[i]||ie[i])-lc(n):e[i]-e["offset"+n])},Dn=function(e,t){for(var i=0;i<bs.length;i+=3)(!t||~t.indexOf(bs[i+1]))&&e(bs[i],bs[i+1],bs[i+2])},_t=function(e){return typeof e=="string"},Ke=function(e){return typeof e=="function"},Js=function(e){return typeof e=="number"},Ki=function(e){return typeof e=="object"},js=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Br=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},gs=Math.abs,dc="left",uc="top",za="right",Fa="bottom",ns="width",rs="height",ln="Right",cn="Left",dn="Top",un="Bottom",ke="padding",Lt="margin",zs="Width",Ra="Height",Pe="px",Bt=function(e){return Y.getComputedStyle(e)},Pf=function(e){var t=Bt(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},So=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hi=function(e,t){var i=t&&Bt(e)[oa]!=="matrix(1, 0, 0, 1, 0, 0)"&&z.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},cr=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},fc=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},Ef=function(e){return function(t){return z.utils.snap(fc(e),t)}},Na=function(e){var t=z.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,a){a===void 0&&(a=.001);var o;if(!r)return t(n);if(r>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,r,a){a===void 0&&(a=.001);var o=t(n);return!r||Math.abs(o-n)<a||o-n<0==r<0?o:t(r<0?n-e:n+e)}},Af=function(e){return function(t,i){return Na(fc(e))(t,i.direction)}},On=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},Oe=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},De=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ln=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},To={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bn={toggleActions:"play",anticipatePin:0},dr={top:0,left:0,center:.5,bottom:1,right:1},jn=function(e,t){if(_t(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in dr?dr[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},In=function(e,t,i,n,r,a,o,l){var c=r.startColor,d=r.endColor,f=r.fontSize,h=r.indent,u=r.fontWeight,m=oe.createElement("div"),p=os(i)||Li(i,"pinType")==="fixed",b=e.indexOf("scroller")!==-1,g=p?ie:i,v=e.indexOf("start")!==-1,y=v?c:d,_="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return _+="position:"+((b||l)&&p?"fixed;":"absolute;"),(b||l||!p)&&(_+=(n===Ee?za:Fa)+":"+(a+parseFloat(h))+"px;"),o&&(_+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=_,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+n.op.d2],Wn(m,0,n,v),m},Wn=function(e,t,i,n){var r={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+a+zs]=1,r["border"+o+zs]=0,r[i.p]=t+"px",z.set(e,r)},W=[],ua={},xn,ko=function(){return Xe()-Ft>34&&(xn||(xn=requestAnimationFrame(gi)))},vs=function(){(!st||!st.isPressed||st.startX>ie.clientWidth)&&(X.cache++,st?xn||(xn=requestAnimationFrame(gi)):gi(),Ft||cs("scrollStart"),Ft=Xe())},Ir=function(){rc=Y.innerWidth,nc=Y.innerHeight},Qs=function(e){X.cache++,(e===!0||!Ye&&!sc&&!oe.fullscreenElement&&!oe.webkitFullscreenElement&&(!la||rc!==Y.innerWidth||Math.abs(Y.innerHeight-nc)>Y.innerHeight*.25))&&lr.restart(!0)},ls={},$f=[],pc=function s(){return De(U,"scrollEnd",s)||Zi(!0)},cs=function(e){return ls[e]&&ls[e].map(function(t){return t()})||$f},bt=[],hc=function(e){for(var t=0;t<bt.length;t+=5)(!e||bt[t+4]&&bt[t+4].query===e)&&(bt[t].style.cssText=bt[t+1],bt[t].getBBox&&bt[t].setAttribute("transform",bt[t+2]||""),bt[t+3].uncache=1)},mc=function(){return X.forEach(function(e){return Ke(e)&&++e.cacheID&&(e.rec=e())})},Ga=function(e,t){var i;for(nt=0;nt<W.length;nt++)i=W[nt],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));on=!0,t&&hc(t),t||cs("revert")},gc=function(e,t){X.cache++,(t||!rt)&&X.forEach(function(i){return Ke(i)&&i.cacheID++&&(i.rec=0)}),_t(e)&&(Y.history.scrollRestoration=Ba=e)},rt,as=0,Co,Df=function(){if(Co!==as){var e=Co=as;requestAnimationFrame(function(){return e===as&&Zi(!0)})}},vc=function(){ie.appendChild(Es),Ia=!st&&Es.offsetHeight||Y.innerHeight,ie.removeChild(Es)},Mo=function(e){return _n(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zi=function(e,t){if(St=oe.documentElement,ie=oe.body,La=[Y,oe,St,ie],Ft&&!e&&!on){Oe(U,"scrollEnd",pc);return}vc(),rt=U.isRefreshing=!0,on||mc();var i=cs("refreshInit");ic&&U.sort(),t||Ga(),X.forEach(function(n){Ke(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),W.slice(0).forEach(function(n){return n.refresh()}),on=!1,W.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-a),n.refresh()}}),da=1,Mo(!0),W.forEach(function(n){var r=si(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>r,o=n._startClamp&&n.start>=r;(a||o)&&n.setPositions(o?r-1:n.start,a?Math.max(o?r:n.start+1,r):n.end,!0)}),Mo(!1),da=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),X.forEach(function(n){Ke(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),gc(Ba,1),lr.pause(),as++,rt=2,gi(2),W.forEach(function(n){return Ke(n.vars.onRefresh)&&n.vars.onRefresh(n)}),rt=U.isRefreshing=!1,cs("refresh")},fa=0,Yn=1,fn,gi=function(e){if(e===2||!rt&&!on){U.isUpdating=!0,fn&&fn.update(0);var t=W.length,i=Xe(),n=i-Lr>=50,r=t&&W[0].scroll();if(Yn=fa>r?-1:1,rt||(fa=r),n&&(Ft&&!mr&&i-Ft>200&&(Ft=0,cs("scrollEnd")),Xs=Lr,Lr=i),Yn<0){for(nt=t;nt-- >0;)W[nt]&&W[nt].update(0,n);Yn=1}else for(nt=0;nt<t;nt++)W[nt]&&W[nt].update(0,n);U.isUpdating=!1}xn=0},pa=[dc,uc,Fa,za,Lt+un,Lt+ln,Lt+dn,Lt+cn,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xn=pa.concat([ns,rs,"boxSizing","max"+zs,"max"+Ra,"position",Lt,ke,ke+dn,ke+ln,ke+un,ke+cn]),Of=function(e,t,i){As(i);var n=e._gsap;if(n.spacerIsNative)As(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},zr=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=pa.length,a=t.style,o=e.style,l;r--;)l=pa[r],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[Fa]=o[za]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=cr(e,ot)+Pe,a[rs]=cr(e,Ee)+Pe,a[ke]=o[Lt]=o[uc]=o[dc]="0",As(n),o[ns]=o["max"+zs]=i[ns],o[rs]=o["max"+Ra]=i[rs],o[ke]=i[ke],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Lf=/([A-Z])/g,As=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,a;for((e.t._gsap||z.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],r=e[n],a?t[r]=a:t[r]&&t.removeProperty(r.replace(Lf,"-$1").toLowerCase())}},zn=function(e){for(var t=Xn.length,i=e.style,n=[],r=0;r<t;r++)n.push(Xn[r],i[Xn[r]]);return n.t=e,n},Bf=function(e,t,i){for(var n=[],r=e.length,a=i?8:0,o;a<r;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},Un={left:0,top:0},Po=function(e,t,i,n,r,a,o,l,c,d,f,h,u,m){Ke(e)&&(e=e(l)),_t(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?jn("0"+e.substr(3),i):0));var p=u?u.time():0,b,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Js(e))u&&(e=z.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,h,e)),o&&Wn(o,i,n,!0);else{Ke(t)&&(t=t(l));var y=(e||"0").split(" "),_,w,M,T;v=dt(t,l)||ie,_=hi(v)||{},(!_||!_.left&&!_.top)&&Bt(v).display==="none"&&(T=v.style.display,v.style.display="block",_=hi(v),T?v.style.display=T:v.style.removeProperty("display")),w=jn(y[0],_[n.d]),M=jn(y[1]||"0",i),e=_[n.p]-c[n.p]-d+w+r-M,o&&Wn(o,M,n,i-M<20||o._isStart&&M>20),i-=i-M}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var S=e+i,C=a._isStart;b="scroll"+n.d2,Wn(a,S,n,C&&S>20||!C&&(f?Math.max(ie[b],St[b]):a.parentNode[b])<=S+1),f&&(c=hi(o),f&&(a.style[n.op.p]=c[n.op.p]-n.op.m-a._offset+Pe))}return u&&v&&(b=hi(v),u.seek(h),g=hi(v),u._caScrollDist=b[n.p]-g[n.p],e=e/u._caScrollDist*h),u&&u.seek(p),u?e:Math.round(e)},If=/(webkit|moz|length|cssText|inset)/i,Eo=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,a,o;if(t===ie){e._stOrig=r.cssText,o=Bt(e);for(a in o)!+a&&!If.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=i,r.left=n}else r.cssText=e._stOrig;z.core.getCache(e).uncache=1,t.appendChild(e)}},yc=function(e,t,i){var n=t,r=n;return function(a){var o=Math.round(e());return o!==n&&o!==r&&Math.abs(o-n)>3&&Math.abs(o-r)>3&&(a=o,i&&i()),r=n,n=Math.round(a),n}},Fn=function(e,t,i){var n={};n[t.p]="+="+i,z.set(e,n)},Ao=function(e,t){var i=Fi(e,t),n="_scroll"+t.p2,r=function a(o,l,c,d,f){var h=a.tween,u=l.onComplete,m={};c=c||i();var p=yc(i,c,function(){h.kill(),a.tween=0});return f=d&&f||0,d=d||o-c,h&&h.kill(),l[n]=o,l.inherit=!1,l.modifiers=m,m[n]=function(){return p(c+d*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){X.cache++,a.tween&&gi()},l.onComplete=function(){a.tween=0,u&&u.call(h)},h=a.tween=z.to(e,l),h};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Oe(e,"wheel",i.wheelHandler),U.isTouch&&Oe(e,"touchmove",i.wheelHandler),r},U=(function(){function s(t,i){ys||s.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ca(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Us){this.update=this.refresh=this.kill=Zt;return}i=So(_t(i)||Js(i)||i.nodeType?{trigger:i}:i,Bn);var r=i,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,d=r.onRefresh,f=r.scrub,h=r.trigger,u=r.pin,m=r.pinSpacing,p=r.invalidateOnRefresh,b=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,y=r.once,_=r.snap,w=r.pinReparent,M=r.pinSpacer,T=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,k=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ot:Ee,A=!f&&f!==0,E=dt(i.scroller||Y),L=z.core.getCache(E),B=os(E),F=("pinType"in i?i.pinType:Li(E,"pinType")||B&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=A&&i.toggleActions.split(" "),D="markers"in i?i.markers:Bn.markers,R=B?0:parseFloat(Bt(E)["border"+k.p2+zs])||0,x=this,Z=i.onRefreshInit&&function(){return i.onRefreshInit(x)},Ie=Cf(E,B,k),Rt=Mf(E,B),he=0,ze=0,He=0,Se=Fi(E,k),Qe,qe,bi,Ze,et,ee,ye,ct,gt,P,vt,oi,_i,me,li,xi,Ni,Ae,wi,be,Nt,$t,ci,Fs,Te,Sn,di,us,fs,Si,Gi,K,Hi,Gt,Ht,qt,qi,ps,ui;if(x._startClamp=x._endClamp=!1,x._dir=k,b*=45,x.scroller=E,x.scroll=T?T.time.bind(T):Se,Ze=Se(),x.vars=i,n=n||i.animation,"refreshPriority"in i&&(ic=1,i.refreshPriority===-9999&&(fn=x)),L.tweenScroll=L.tweenScroll||{top:Ao(E,Ee),left:Ao(E,ot)},x.tweenTo=Qe=L.tweenScroll[k.p],x.scrubDuration=function(I){Hi=Js(I)&&I,Hi?K?K.duration(I):K=z.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Hi,paused:!0,onComplete:function(){return g&&g(x)}}):(K&&K.progress(1).kill(),K=0)},n&&(n.vars.lazy=!1,n._initted&&!x.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),x.animation=n.pause(),n.scrollTrigger=x,x.scrubDuration(f),Si=0,l||(l=n.vars.id)),_&&((!Ki(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ie.style&&z.set(B?[ie,St]:E,{scrollBehavior:"auto"}),X.forEach(function(I){return Ke(I)&&I.target===(B?oe.scrollingElement||St:E)&&(I.smooth=!1)}),bi=Ke(_.snapTo)?_.snapTo:_.snapTo==="labels"?Ef(n):_.snapTo==="labelsDirectional"?Af(n):_.directional!==!1?function(I,q){return Na(_.snapTo)(I,Xe()-ze<500?0:q.direction)}:z.utils.snap(_.snapTo),Gt=_.duration||{min:.1,max:2},Gt=Ki(Gt)?an(Gt.min,Gt.max):an(Gt,Gt),Ht=z.delayedCall(_.delay||Hi/2||.1,function(){var I=Se(),q=Xe()-ze<500,N=Qe.tween;if((q||Math.abs(x.getVelocity())<10)&&!N&&!mr&&he!==I){var V=(I-ee)/me,$e=n&&!A?n.totalProgress():V,J=q?0:($e-Gi)/(Xe()-Xs)*1e3||0,_e=z.utils.clamp(-V,1-V,gs(J/2)*J/.185),Ve=V+(_.inertia===!1?0:_e),ge,le,ne=_,Vt=ne.onStart,de=ne.onInterrupt,yt=ne.onComplete;if(ge=bi(Ve,x),Js(ge)||(ge=Ve),le=Math.max(0,Math.round(ee+ge*me)),I<=ye&&I>=ee&&le!==I){if(N&&!N._initted&&N.data<=gs(le-I))return;_.inertia===!1&&(_e=ge-V),Qe(le,{duration:Gt(gs(Math.max(gs(Ve-$e),gs(ge-$e))*.185/J/.05||0)),ease:_.ease||"power3",data:gs(le-I),onInterrupt:function(){return Ht.restart(!0)&&de&&de(x)},onComplete:function(){x.update(),he=Se(),n&&!A&&(K?K.resetTo("totalProgress",ge,n._tTime/n._tDur):n.progress(ge)),Si=Gi=n&&!A?n.totalProgress():x.progress,v&&v(x),yt&&yt(x)}},I,_e*me,le-I-_e*me),Vt&&Vt(x,Qe.tween)}}else x.isActive&&he!==I&&Ht.restart(!0)}).pause()),l&&(ua[l]=x),h=x.trigger=dt(h||u!==!0&&u),ui=h&&h._gsap&&h._gsap.stRevert,ui&&(ui=ui(x)),u=u===!0?h:dt(u),_t(o)&&(o={targets:h,className:o}),u&&(m===!1||m===Lt||(m=!m&&u.parentNode&&u.parentNode.style&&Bt(u.parentNode).display==="flex"?!1:ke),x.pin=u,qe=z.core.getCache(u),qe.spacer?li=qe.pinState:(M&&(M=dt(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),qe.spacerIsNative=!!M,M&&(qe.spacerState=zn(M))),qe.spacer=Ae=M||oe.createElement("div"),Ae.classList.add("pin-spacer"),l&&Ae.classList.add("pin-spacer-"+l),qe.pinState=li=zn(u)),i.force3D!==!1&&z.set(u,{force3D:!0}),x.spacer=Ae=qe.spacer,fs=Bt(u),Fs=fs[m+k.os2],be=z.getProperty(u),Nt=z.quickSetter(u,k.a,Pe),zr(u,Ae,fs),Ni=zn(u)),D){oi=Ki(D)?So(D,To):To,P=In("scroller-start",l,E,k,oi,0),vt=In("scroller-end",l,E,k,oi,0,P),wi=P["offset"+k.op.d2];var Rs=dt(Li(E,"content")||E);ct=this.markerStart=In("start",l,Rs,k,oi,wi,0,T),gt=this.markerEnd=In("end",l,Rs,k,oi,wi,0,T),T&&(ps=z.quickSetter([ct,gt],k.a,Pe)),!F&&!(ri.length&&Li(E,"fixedMarkers")===!0)&&(Pf(B?ie:E),z.set([P,vt],{force3D:!0}),Sn=z.quickSetter(P,k.a,Pe),us=z.quickSetter(vt,k.a,Pe))}if(T){var j=T.vars.onUpdate,G=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){x.update(0,0,1),j&&j.apply(T,G||[])})}if(x.previous=function(){return W[W.indexOf(x)-1]},x.next=function(){return W[W.indexOf(x)+1]},x.revert=function(I,q){if(!q)return x.kill(!0);var N=I!==!1||!x.enabled,V=Ye;N!==x.isReverted&&(N&&(qt=Math.max(Se(),x.scroll.rec||0),He=x.progress,qi=n&&n.progress()),ct&&[ct,gt,P,vt].forEach(function($e){return $e.style.display=N?"none":"block"}),N&&(Ye=x,x.update(N)),u&&(!w||!x.isActive)&&(N?Of(u,Ae,li):zr(u,Ae,Bt(u),Te)),N||x.update(N),Ye=V,x.isReverted=N)},x.refresh=function(I,q,N,V){if(!((Ye||!x.enabled)&&!q)){if(u&&I&&Ft){Oe(s,"scrollEnd",pc);return}!rt&&Z&&Z(x),Ye=x,Qe.tween&&!N&&(Qe.tween.kill(),Qe.tween=0),K&&K.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Ti){return Ti.vars.immediateRender&&Ti.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),x.isReverted||x.revert(!0,!0),x._subPinOffset=!1;var $e=Ie(),J=Rt(),_e=T?T.duration():si(E,k),Ve=me<=.01||!me,ge=0,le=V||0,ne=Ki(N)?N.end:i.end,Vt=i.endTrigger||h,de=Ki(N)?N.start:i.start||(i.start===0||!h?0:u?"0 0":"0 100%"),yt=x.pinnedContainer=i.pinnedContainer&&dt(i.pinnedContainer,x),Ut=h&&Math.max(0,W.indexOf(x))||0,Fe=Ut,Re,je,Vi,Tn,We,Me,Kt,gr,Ha,Ns,Jt,Gs,kn;for(D&&Ki(N)&&(Gs=z.getProperty(P,k.p),kn=z.getProperty(vt,k.p));Fe-- >0;)Me=W[Fe],Me.end||Me.refresh(0,1)||(Ye=x),Kt=Me.pin,Kt&&(Kt===h||Kt===u||Kt===yt)&&!Me.isReverted&&(Ns||(Ns=[]),Ns.unshift(Me),Me.revert(!0,!0)),Me!==W[Fe]&&(Ut--,Fe--);for(Ke(de)&&(de=de(x)),de=bo(de,"start",x),ee=Po(de,h,$e,k,Se(),ct,P,x,J,R,F,_e,T,x._startClamp&&"_startClamp")||(u?-.001:0),Ke(ne)&&(ne=ne(x)),_t(ne)&&!ne.indexOf("+=")&&(~ne.indexOf(" ")?ne=(_t(de)?de.split(" ")[0]:"")+ne:(ge=jn(ne.substr(2),$e),ne=_t(de)?de:(T?z.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ee):ee)+ge,Vt=h)),ne=bo(ne,"end",x),ye=Math.max(ee,Po(ne||(Vt?"100% 0":_e),Vt,$e,k,Se()+ge,gt,vt,x,J,R,F,_e,T,x._endClamp&&"_endClamp"))||-.001,ge=0,Fe=Ut;Fe--;)Me=W[Fe]||{},Kt=Me.pin,Kt&&Me.start-Me._pinPush<=ee&&!T&&Me.end>0&&(Re=Me.end-(x._startClamp?Math.max(0,Me.start):Me.start),(Kt===h&&Me.start-Me._pinPush<ee||Kt===yt)&&isNaN(de)&&(ge+=Re*(1-Me.progress)),Kt===u&&(le+=Re));if(ee+=ge,ye+=ge,x._startClamp&&(x._startClamp+=ge),x._endClamp&&!rt&&(x._endClamp=ye||-.001,ye=Math.min(ye,si(E,k))),me=ye-ee||(ee-=.01)&&.001,Ve&&(He=z.utils.clamp(0,1,z.utils.normalize(ee,ye,qt))),x._pinPush=le,ct&&ge&&(Re={},Re[k.a]="+="+ge,yt&&(Re[k.p]="-="+Se()),z.set([ct,gt],Re)),u&&!(da&&x.end>=si(E,k)))Re=Bt(u),Tn=k===Ee,Vi=Se(),$t=parseFloat(be(k.a))+le,!_e&&ye>1&&(Jt=(B?oe.scrollingElement||St:E).style,Jt={style:Jt,value:Jt["overflow"+k.a.toUpperCase()]},B&&Bt(ie)["overflow"+k.a.toUpperCase()]!=="scroll"&&(Jt.style["overflow"+k.a.toUpperCase()]="scroll")),zr(u,Ae,Re),Ni=zn(u),je=hi(u,!0),gr=F&&Fi(E,Tn?ot:Ee)(),m?(Te=[m+k.os2,me+le+Pe],Te.t=Ae,Fe=m===ke?cr(u,k)+me+le:0,Fe&&(Te.push(k.d,Fe+Pe),Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Fe+Pe)),As(Te),yt&&W.forEach(function(Ti){Ti.pin===yt&&Ti.vars.pinSpacing!==!1&&(Ti._subPinOffset=!0)}),F&&Se(qt)):(Fe=cr(u,k),Fe&&Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Fe+Pe)),F&&(We={top:je.top+(Tn?Vi-ee:gr)+Pe,left:je.left+(Tn?gr:Vi-ee)+Pe,boxSizing:"border-box",position:"fixed"},We[ns]=We["max"+zs]=Math.ceil(je.width)+Pe,We[rs]=We["max"+Ra]=Math.ceil(je.height)+Pe,We[Lt]=We[Lt+dn]=We[Lt+ln]=We[Lt+un]=We[Lt+cn]="0",We[ke]=Re[ke],We[ke+dn]=Re[ke+dn],We[ke+ln]=Re[ke+ln],We[ke+un]=Re[ke+un],We[ke+cn]=Re[ke+cn],xi=Bf(li,We,w),rt&&Se(0)),n?(Ha=n._initted,Dr(1),n.render(n.duration(),!0,!0),ci=be(k.a)-$t+me+le,di=Math.abs(me-ci)>1,F&&di&&xi.splice(xi.length-2,2),n.render(0,!0,!0),Ha||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Dr(0)):ci=me,Jt&&(Jt.value?Jt.style["overflow"+k.a.toUpperCase()]=Jt.value:Jt.style.removeProperty("overflow-"+k.a));else if(h&&Se()&&!T)for(je=h.parentNode;je&&je!==ie;)je._pinOffset&&(ee-=je._pinOffset,ye-=je._pinOffset),je=je.parentNode;Ns&&Ns.forEach(function(Ti){return Ti.revert(!1,!0)}),x.start=ee,x.end=ye,Ze=et=rt?qt:Se(),!T&&!rt&&(Ze<qt&&Se(qt),x.scroll.rec=0),x.revert(!1,!0),ze=Xe(),Ht&&(he=-1,Ht.restart(!0)),Ye=0,n&&A&&(n._initted||qi)&&n.progress()!==qi&&n.progress(qi||0,!0).render(n.time(),!0,!0),(Ve||He!==x.progress||T||p||n&&!n._initted)&&(n&&!A&&(n._initted||He||n.vars.immediateRender!==!1)&&n.totalProgress(T&&ee<-.001&&!He?z.utils.normalize(ee,ye,0):He,!0),x.progress=Ve||(Ze-ee)/me===He?0:He),u&&m&&(Ae._pinOffset=Math.round(x.progress*ci)),K&&K.invalidate(),isNaN(Gs)||(Gs-=z.getProperty(P,k.p),kn-=z.getProperty(vt,k.p),Fn(P,k,Gs),Fn(ct,k,Gs-(V||0)),Fn(vt,k,kn),Fn(gt,k,kn-(V||0))),Ve&&!rt&&x.update(),d&&!rt&&!_i&&(_i=!0,d(x),_i=!1)}},x.getVelocity=function(){return(Se()-et)/(Xe()-Xs)*1e3||0},x.endAnimation=function(){js(x.callbackAnimation),n&&(K?K.progress(1):n.paused()?A||js(n,x.direction<0,1):js(n,n.reversed()))},x.labelToScroll=function(I){return n&&n.labels&&(ee||x.refresh()||ee)+n.labels[I]/n.duration()*me||0},x.getTrailing=function(I){var q=W.indexOf(x),N=x.direction>0?W.slice(0,q).reverse():W.slice(q+1);return(_t(I)?N.filter(function(V){return V.vars.preventOverlaps===I}):N).filter(function(V){return x.direction>0?V.end<=ee:V.start>=ye})},x.update=function(I,q,N){if(!(T&&!N&&!I)){var V=rt===!0?qt:x.scroll(),$e=I?0:(V-ee)/me,J=$e<0?0:$e>1?1:$e||0,_e=x.progress,Ve,ge,le,ne,Vt,de,yt,Ut;if(q&&(et=Ze,Ze=T?Se():V,_&&(Gi=Si,Si=n&&!A?n.totalProgress():J)),b&&u&&!Ye&&!$n&&Ft&&(!J&&ee<V+(V-et)/(Xe()-Xs)*b?J=1e-4:J===1&&ye>V+(V-et)/(Xe()-Xs)*b&&(J=.9999)),J!==_e&&x.enabled){if(Ve=x.isActive=!!J&&J<1,ge=!!_e&&_e<1,de=Ve!==ge,Vt=de||!!J!=!!_e,x.direction=J>_e?1:-1,x.progress=J,Vt&&!Ye&&(le=J&&!_e?0:J===1?1:_e===1?2:3,A&&(ne=!de&&O[le+1]!=="none"&&O[le+1]||O[le],Ut=n&&(ne==="complete"||ne==="reset"||ne in n))),C&&(de||Ut)&&(Ut||f||!n)&&(Ke(C)?C(x):x.getTrailing(C).forEach(function(Vi){return Vi.endAnimation()})),A||(K&&!Ye&&!$n?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",J,n._tTime/n._tDur):(K.vars.totalProgress=J,K.invalidate().restart())):n&&n.totalProgress(J,!!(Ye&&(ze||I)))),u){if(I&&m&&(Ae.style[m+k.os2]=Fs),!F)Nt(Ks($t+ci*J));else if(Vt){if(yt=!I&&J>_e&&ye+1>V&&V+1>=si(E,k),w)if(!I&&(Ve||yt)){var Fe=hi(u,!0),Re=V-ee;Eo(u,ie,Fe.top+(k===Ee?Re:0)+Pe,Fe.left+(k===Ee?0:Re)+Pe)}else Eo(u,Ae);As(Ve||yt?xi:Ni),di&&J<1&&Ve||Nt($t+(J===1&&!yt?ci:0))}}_&&!Qe.tween&&!Ye&&!$n&&Ht.restart(!0),o&&(de||y&&J&&(J<1||!Or))&&_n(o.targets).forEach(function(Vi){return Vi.classList[Ve||y?"add":"remove"](o.className)}),a&&!A&&!I&&a(x),Vt&&!Ye?(A&&(Ut&&(ne==="complete"?n.pause().totalProgress(1):ne==="reset"?n.restart(!0).pause():ne==="restart"?n.restart(!0):n[ne]()),a&&a(x)),(de||!Or)&&(c&&de&&Br(x,c),H[le]&&Br(x,H[le]),y&&(J===1?x.kill(!1,1):H[le]=0),de||(le=J===1?1:3,H[le]&&Br(x,H[le]))),S&&!Ve&&Math.abs(x.getVelocity())>(Js(S)?S:2500)&&(js(x.callbackAnimation),K?K.progress(1):js(n,ne==="reverse"?1:!J,1))):A&&a&&!Ye&&a(x)}if(us){var je=T?V/T.duration()*(T._caScrollDist||0):V;Sn(je+(P._isFlipped?1:0)),us(je)}ps&&ps(-V/T.duration()*(T._caScrollDist||0))}},x.enable=function(I,q){x.enabled||(x.enabled=!0,Oe(E,"resize",Qs),B||Oe(E,"scroll",vs),Z&&Oe(s,"refreshInit",Z),I!==!1&&(x.progress=He=0,Ze=et=he=Se()),q!==!1&&x.refresh())},x.getTween=function(I){return I&&Qe?Qe.tween:K},x.setPositions=function(I,q,N,V){if(T){var $e=T.scrollTrigger,J=T.duration(),_e=$e.end-$e.start;I=$e.start+_e*I/J,q=$e.start+_e*q/J}x.refresh(!1,!1,{start:_o(I,N&&!!x._startClamp),end:_o(q,N&&!!x._endClamp)},V),x.update()},x.adjustPinSpacing=function(I){if(Te&&I){var q=Te.indexOf(k.d)+1;Te[q]=parseFloat(Te[q])+I+Pe,Te[1]=parseFloat(Te[1])+I+Pe,As(Te)}},x.disable=function(I,q){if(I!==!1&&x.revert(!0,!0),x.enabled&&(x.enabled=x.isActive=!1,q||K&&K.pause(),qt=0,qe&&(qe.uncache=1),Z&&De(s,"refreshInit",Z),Ht&&(Ht.pause(),Qe.tween&&Qe.tween.kill()&&(Qe.tween=0)),!B)){for(var N=W.length;N--;)if(W[N].scroller===E&&W[N]!==x)return;De(E,"resize",Qs),B||De(E,"scroll",vs)}},x.kill=function(I,q){x.disable(I,q),K&&!q&&K.kill(),l&&delete ua[l];var N=W.indexOf(x);N>=0&&W.splice(N,1),N===nt&&Yn>0&&nt--,N=0,W.forEach(function(V){return V.scroller===x.scroller&&(N=1)}),N||rt||(x.scroll.rec=0),n&&(n.scrollTrigger=null,I&&n.revert({kill:!1}),q||n.kill()),ct&&[ct,gt,P,vt].forEach(function(V){return V.parentNode&&V.parentNode.removeChild(V)}),fn===x&&(fn=0),u&&(qe&&(qe.uncache=1),N=0,W.forEach(function(V){return V.pin===u&&N++}),N||(qe.spacer=0)),i.onKill&&i.onKill(x)},W.push(x),x.enable(!1,!1),ui&&ui(x),n&&n.add&&!me){var te=x.update;x.update=function(){x.update=te,X.cache++,ee||ye||x.refresh()},z.delayedCall(.01,x.update),me=.01,ee=ye=0}else x.refresh();u&&Df()},s.register=function(i){return ys||(z=i||oc(),ac()&&window.document&&s.enable(),ys=Us),ys},s.defaults=function(i){if(i)for(var n in i)Bn[n]=i[n];return Bn},s.disable=function(i,n){Us=0,W.forEach(function(a){return a[n?"kill":"disable"](i)}),De(Y,"wheel",vs),De(oe,"scroll",vs),clearInterval(An),De(oe,"touchcancel",Zt),De(ie,"touchstart",Zt),On(De,oe,"pointerdown,touchstart,mousedown",xo),On(De,oe,"pointerup,touchend,mouseup",wo),lr.kill(),Dn(De);for(var r=0;r<X.length;r+=3)Ln(De,X[r],X[r+1]),Ln(De,X[r],X[r+2])},s.enable=function(){if(Y=window,oe=document,St=oe.documentElement,ie=oe.body,z&&(_n=z.utils.toArray,an=z.utils.clamp,ca=z.core.context||Zt,Dr=z.core.suppressOverwrites||Zt,Ba=Y.history.scrollRestoration||"auto",fa=Y.pageYOffset||0,z.core.globals("ScrollTrigger",s),ie)){Us=1,Es=document.createElement("div"),Es.style.height="100vh",Es.style.position="absolute",vc(),kf(),we.register(z),s.isTouch=we.isTouch,ki=we.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),la=we.isTouch===1,Oe(Y,"wheel",vs),La=[Y,oe,St,ie],z.matchMedia?(s.matchMedia=function(c){var d=z.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},z.addEventListener("matchMediaInit",function(){mc(),Ga()}),z.addEventListener("matchMediaRevert",function(){return hc()}),z.addEventListener("matchMedia",function(){Zi(0,1),cs("matchMedia")}),z.matchMedia().add("(orientation: portrait)",function(){return Ir(),Ir})):console.warn("Requires GSAP 3.11.0 or later"),Ir(),Oe(oe,"scroll",vs);var i=ie.hasAttribute("style"),n=ie.style,r=n.borderTopStyle,a=z.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=hi(ie),Ee.m=Math.round(o.top+Ee.sc())||0,ot.m=Math.round(o.left+ot.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ie.setAttribute("style",""),ie.removeAttribute("style")),An=setInterval(ko,250),z.delayedCall(.5,function(){return $n=0}),Oe(oe,"touchcancel",Zt),Oe(ie,"touchstart",Zt),On(Oe,oe,"pointerdown,touchstart,mousedown",xo),On(Oe,oe,"pointerup,touchend,mouseup",wo),oa=z.utils.checkPrefix("transform"),Xn.push(oa),ys=Xe(),lr=z.delayedCall(.2,Zi).pause(),bs=[oe,"visibilitychange",function(){var c=Y.innerWidth,d=Y.innerHeight;oe.hidden?(vo=c,yo=d):(vo!==c||yo!==d)&&Qs()},oe,"DOMContentLoaded",Zi,Y,"load",Zi,Y,"resize",Qs],Dn(Oe),W.forEach(function(c){return c.enable(0,1)}),l=0;l<X.length;l+=3)Ln(De,X[l],X[l+1]),Ln(De,X[l],X[l+2])}},s.config=function(i){"limitCallbacks"in i&&(Or=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(An)||(An=n)&&setInterval(ko,n),"ignoreMobileResize"in i&&(la=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Dn(De)||Dn(Oe,i.autoRefreshEvents||"none"),sc=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=dt(i),a=X.indexOf(r),o=os(r);~a&&X.splice(a,o?6:2),n&&(o?ri.unshift(Y,n,ie,n,St,n):ri.unshift(r,n))},s.clearMatchMedia=function(i){W.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var a=(_t(i)?dt(i):i).getBoundingClientRect(),o=a[r?ns:rs]*n||0;return r?a.right-o>0&&a.left+o<Y.innerWidth:a.bottom-o>0&&a.top+o<Y.innerHeight},s.positionInViewport=function(i,n,r){_t(i)&&(i=dt(i));var a=i.getBoundingClientRect(),o=a[r?ns:rs],l=n==null?o/2:n in dr?dr[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return r?(a.left+l)/Y.innerWidth:(a.top+l)/Y.innerHeight},s.killAll=function(i){if(W.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=ls.killAll||[];ls={},n.forEach(function(r){return r()})}},s})();U.version="3.14.2";U.saveStyles=function(s){return s?_n(s).forEach(function(e){if(e&&e.style){var t=bt.indexOf(e);t>=0&&bt.splice(t,5),bt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),z.core.getCache(e),ca())}}):bt};U.revert=function(s,e){return Ga(!s,e)};U.create=function(s,e){return new U(s,e)};U.refresh=function(s){return s?Qs(!0):(ys||U.register())&&Zi(!0)};U.update=function(s){return++X.cache&&gi(s===!0?2:0)};U.clearScrollMemory=gc;U.maxScroll=function(s,e){return si(s,e?ot:Ee)};U.getScrollFunc=function(s,e){return Fi(dt(s),e?ot:Ee)};U.getById=function(s){return ua[s]};U.getAll=function(){return W.filter(function(s){return s.vars.id!=="ScrollSmoother"})};U.isScrolling=function(){return!!Ft};U.snapDirectional=Na;U.addEventListener=function(s,e){var t=ls[s]||(ls[s]=[]);~t.indexOf(e)||t.push(e)};U.removeEventListener=function(s,e){var t=ls[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};U.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,a=function(c,d){var f=[],h=[],u=z.delayedCall(n,function(){d(f,h),f=[],h=[]}).pause();return function(m){f.length||u.restart(!0),f.push(m.trigger),h.push(m),r<=f.length&&u.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Ke(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Ke(r)&&(r=r(),Oe(U,"refresh",function(){return r=e.batchMax()})),_n(s).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(U.create(c))}),t};var $o=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Fr=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(we.isTouch?" pinch-zoom":""):"none",e===St&&s(ie,t)},Rn={auto:1,scroll:1},zf=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||z.core.getCache(r),o=Xe(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==ie&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Rn[(l=Bt(r)).overflowY]||Rn[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==i&&!os(r)&&(Rn[(l=Bt(r)).overflowY]||Rn[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},bc=function(e,t,i,n){return we.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&zf,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Oe(oe,we.eventTypes[0],Oo,!1,!0)},onDisable:function(){return De(oe,we.eventTypes[0],Oo,!0)}})},Ff=/(input|label|select|textarea)/i,Do,Oo=function(e){var t=Ff.test(e.target.tagName);(t||Do)&&(e._gsapAllow=!0,Do=t)},Rf=function(e){Ki(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=dt(e.target)||St,d=z.core.globals().ScrollSmoother,f=d&&d.get(),h=ki&&(e.content&&dt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=Fi(c,Ee),m=Fi(c,ot),p=1,b=(we.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,g=0,v=Ke(n)?function(){return n(o)}:function(){return n||2.8},y,_,w=bc(c,e.type,!0,r),M=function(){return _=!1},T=Zt,S=Zt,C=function(){l=si(c,Ee),S=an(ki?1:0,l),i&&(T=an(0,si(c,ot))),y=as},k=function(){h._gsap.y=Ks(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},A=function(){if(_){requestAnimationFrame(M);var D=Ks(o.deltaY/2),R=S(u.v-D);if(h&&R!==u.v+u.offset){u.offset=R-u.v;var x=Ks((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+x+", 0, 1)",h._gsap.y=x+"px",u.cacheID=X.cache,gi()}return!0}u.offset&&k(),_=!0},E,L,B,F,H=function(){C(),E.isActive()&&E.vars.scrollY>l&&(u()>l?E.progress(1)&&u(l):E.resetTo("scrollY",l))};return h&&z.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return ki&&O.type==="touchmove"&&A()||p>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){_=!1;var O=p;p=Ks((Y.visualViewport&&Y.visualViewport.scale||1)/b),E.pause(),O!==p&&Fr(c,p>1.01?!0:i?!1:"x"),L=m(),B=u(),C(),y=as},e.onRelease=e.onGestureStart=function(O,D){if(u.offset&&k(),!D)F.restart(!0);else{X.cache++;var R=v(),x,Z;i&&(x=m(),Z=x+R*.05*-O.velocityX/.227,R*=$o(m,x,Z,si(c,ot)),E.vars.scrollX=T(Z)),x=u(),Z=x+R*.05*-O.velocityY/.227,R*=$o(u,x,Z,si(c,Ee)),E.vars.scrollY=S(Z),E.invalidate().duration(R).play(.01),(ki&&E.vars.scrollY>=l||x>=l-1)&&z.to({},{onUpdate:H,duration:R})}a&&a(O)},e.onWheel=function(){E._ts&&E.pause(),Xe()-g>1e3&&(y=0,g=Xe())},e.onChange=function(O,D,R,x,Z){if(as!==y&&C(),D&&i&&m(T(x[2]===D?L+(O.startX-O.x):m()+D-x[1])),R){u.offset&&k();var Ie=Z[2]===R,Rt=Ie?B+O.startY-O.y:u()+R-Z[1],he=S(Rt);Ie&&Rt!==he&&(B+=he-Rt),u(he)}(R||D)&&gi()},e.onEnable=function(){Fr(c,i?!1:"x"),U.addEventListener("refresh",H),Oe(Y,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),w.enable()},e.onDisable=function(){Fr(c,!0),De(Y,"resize",H),U.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new we(e),o.iOS=ki,ki&&!u()&&u(1),ki&&z.ticker.add(Zt),F=o._dc,E=z.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yc(u,u(),function(){return E.pause()})},onUpdate:gi,onComplete:F.vars.onComplete}),o};U.sort=function(s){if(Ke(s))return W.sort(s);var e=Y.pageYOffset||0;return U.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Y.innerHeight}),W.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};U.observe=function(s){return new we(s)};U.normalizeScroll=function(s){if(typeof s>"u")return st;if(s===!0&&st)return st.enable();if(s===!1){st&&st.kill(),st=s;return}var e=s instanceof we?s:Rf(s);return st&&st.target===e.target&&st.kill(),os(e.target)&&(st=e),e};U.core={_getVelocityProp:aa,_inputObserver:bc,_scrollers:X,_proxies:ri,bridge:{ss:function(){Ft||cs("scrollStart"),Ft=Xe()},ref:function(){return Ye}}};oc()&&z.registerPlugin(U);hr.registerPlugin(U);function Nf(){return`
    <!-- Hero -->
    <section class="hero" style="padding-top:calc(var(--nav-height) + 60px);padding-bottom:80px;min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden">
      <!-- Subtle Background Graphics -->
      <div class="hero-bg-graphics">
        <svg class="hero-graphic hero-graphic-1" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L100 180 M20 100 L180 100" stroke="rgba(59, 145, 152, 0.5)" stroke-width="2"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(59, 145, 152, 0.45)" stroke-width="1" fill="none"/>
          <circle cx="100" cy="100" r="90" stroke="rgba(59, 145, 152, 0.4)" stroke-width="1" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-2" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180 Q60 140 100 120 T180 40" stroke="rgba(59, 145, 152, 0.6)" stroke-width="2" fill="none"/>
          <circle cx="180" cy="40" r="8" fill="rgba(59, 145, 152, 0.65)"/>
          <path d="M165 35 L180 40 L170 55" stroke="rgba(59, 145, 152, 0.6)" stroke-width="2" fill="none"/>
        </svg>
        <svg class="hero-graphic hero-graphic-3" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="100" width="20" height="30" fill="rgba(59, 145, 152, 0.5)"/>
          <rect x="50" y="80" width="20" height="50" fill="rgba(59, 145, 152, 0.55)"/>
          <rect x="80" y="60" width="20" height="70" fill="rgba(59, 145, 152, 0.6)"/>
          <rect x="110" y="30" width="20" height="100" fill="rgba(59, 145, 152, 0.65)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" stroke="rgba(59, 145, 152, 0.5)" stroke-width="1.5" fill="none"/>
          <circle cx="50" cy="50" r="5" fill="rgba(59, 145, 152, 0.55)"/>
        </svg>
        <svg class="hero-graphic hero-graphic-5" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 60 L30 40 L50 55 L70 25 L90 45 L110 20" stroke="rgba(59, 145, 152, 0.6)" stroke-width="2" fill="none"/>
          <circle cx="110" cy="20" r="4" fill="rgba(168, 213, 186, 0.7)"/>
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
        <p class="wwa-subtitle animate-on-scroll">Consulting that covers hiring, marketing, automation, and growth so you can focus on running your business.</p>
        
        <!-- CTA -->
        <a href="#/book-slot" class="btn btn-primary btn-lg wwa-cta animate-on-scroll">
          Book Consultation
          ${$("arrowRight",18)}
        </a>
      </div>
    </section>

    <!-- Year 1 Milestones Section -->
    <div id="milestones-placeholder"></div>

    <!-- About the Founder Section -->
    <div id="founder-placeholder"></div>

    <!-- Services We Offer Section -->
    <section class="services-offered-section section-padding" style="background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container" style="position: relative; z-index: 1;">
        <!-- Section Header -->
        <div style="max-width: 600px; margin-bottom: var(--space-3xl);">
          <h2 class="section-headline animate-on-scroll" style="color: var(--primary-dark); margin-bottom: var(--space-lg); font-size: clamp(36px, 5vw, 52px); font-weight: 700; line-height: 1.2;">
            Consultancy Offered.
          </h2>
          <p class="section-subheadline animate-on-scroll" style="color: var(--text-body); font-size: 18px; line-height: 1.7;">
            Strategic consulting and implementation services designed to accelerate your business growth.
          </p>
        </div>

        <!-- Services Carousel Container -->
        <div class="services-carousel-wrapper" style="position: relative; margin-bottom: var(--space-2xl);">
          <!-- Swiper Container -->
          <div class="swiper services-swiper" style="overflow: visible; padding: 40px 0;">
            <div class="swiper-wrapper">
              ${[{title:"Go-To-Market Strategy",icon:"rocket",description:"Launch with precision and capture market share from day one",gradient:"linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",color:"#FF6B35"},{title:"Product Launch",icon:"zap",description:"End-to-end product launch execution with proven frameworks",gradient:"linear-gradient(135deg, #A8D5BA 0%, #3B9198 100%)",color:"#3B9198"},{title:"Business Expansion",icon:"trendingUp",description:"Strategic growth roadmaps for sustainable scaling",gradient:"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",color:"#8B5CF6"},{title:"90 Day Growth Plan",icon:"target",description:"Fast-track your startup from concept to revenue",gradient:"linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",color:"#EC4899"},{title:"Market Entry",icon:"globe",description:"Penetrate new markets with confidence and precision",gradient:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"#10B981"},{title:"Revenue Strategy",icon:"dollarSign",description:"Build and optimize sustainable revenue streams",gradient:"linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",color:"#F59E0B"}].map((s,e)=>`
                <div class="swiper-slide">
                  <div class="service-carousel-card" style="background: ${s.gradient}; border-radius: 24px; padding: 48px 40px; height: 450px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.1);">

                    <!-- Decorative Background Elements -->
                    <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; filter: blur(40px);"></div>
                    <div style="position: absolute; bottom: -30px; left: -30px; width: 150px; height: 150px; background: rgba(0, 0, 0, 0.05); border-radius: 50%; filter: blur(30px);"></div>

                    <!-- Content -->
                    <div style="position: relative; z-index: 1;">
                      <!-- Icon -->
                      <div style="width: 72px; height: 72px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 32px; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
                        ${$(s.icon,32)}
                      </div>

                      <!-- Title -->
                      <h3 style="color: #FFFFFF; font-size: 32px; font-weight: 700; margin-bottom: 16px; line-height: 1.2;">${s.title}</h3>

                      <!-- Description -->
                      <p style="color: rgba(255, 255, 255, 0.9); font-size: 17px; line-height: 1.6; margin: 0;">${s.description}</p>
                    </div>

                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Navigation Arrows -->
          <div class="services-nav-prev" style="position: absolute; left: -60px; top: 50%; transform: translateY(-50%); z-index: 10; cursor: pointer; width: 48px; height: 48px; background: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: all 0.3s ease;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4A4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </div>
          <div class="services-nav-next" style="position: absolute; right: -60px; top: 50%; transform: translateY(-50%); z-index: 10; cursor: pointer; width: 48px; height: 48px; background: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: all 0.3s ease;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A4A4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <!-- Pagination Dots -->
          <div class="services-pagination" style="text-align: center; margin-top: 40px;"></div>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin-top: var(--space-3xl);">
          <a href="#/book-slot" class="btn btn-primary btn-lg animate-on-scroll" style="display: inline-flex; align-items: center; gap: 12px; padding: 18px 36px; font-size: 16px; box-shadow: 0 8px 32px rgba(168, 213, 186, 0.3); transition: all 0.3s ease;">
            <span>Book Consultation</span>
            ${$("arrowRight",20)}
          </a>
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
              <div class="process-num" style="font-size:0">${$(s.icon,28)}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Articles Teaser (Hidden) -->
    <!-- <section class="section-padding light-section" style="display: none;">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:var(--space-xl);flex-wrap:wrap;gap:16px">
          <div>
            <div class="section-eyebrow">
              <div class="eyebrow-line"></div>
              <span class="eyebrow-text">Latest Articles</span>
            </div>
            <h2 class="section-headline">Insights & Resources</h2>
          </div>
          <a href="#/articles" class="btn btn-secondary">View All ${$("arrowRight",16)}</a>
        </div>
        <div class="articles-grid">
          ${Ts.slice(0,3).map(s=>`
            <a href="#/articles/${s.slug}" class="article-card animate-on-scroll">
              <div class="article-card-img">${$("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${s.category}</span>
                <h3>${s.title}</h3>
                <p>${s.excerpt}</p>
                <div class="article-meta">
                  <span>${$("clock",14)} ${s.readingTime} min</span>
                  <span>${s.date}</span>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section> -->

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container">
        <h2 class="animate-on-scroll">Book a Strategy Session with Our Founder</h2>
        <p class="animate-on-scroll">Get personalized advice for your business. 60-minute 1-on-1 session with the founder.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg animate-on-scroll" style="position:relative">Book a Slot ${$("arrowRight",16)}</a>
      </div>
    </section>
  `}function Gf(){const s=["the right people.","smarter systems.","AI that works.","a clear strategy."];let e=0;const t=document.getElementById("wwa-rotating-text");t&&setInterval(()=>{e=(e+1)%s.length,t.style.animation="none",t.offsetHeight,t.textContent=s[e],t.style.animation="wwaRotate 0.4s ease-out"},2400),document.querySelector(".services-swiper")&&new Ot(".services-swiper",{modules:[Zd,eu,tu],slidesPerView:1,spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:800,effect:"slide",navigation:{nextEl:".services-nav-next",prevEl:".services-nav-prev"},pagination:{el:".services-pagination",clickable:!0,dynamicBullets:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1.5,spaceBetween:30},1024:{slidesPerView:2,spaceBetween:40},1280:{slidesPerView:2.5,spaceBetween:40}},on:{init:function(){this.slides.forEach(n=>{n.style.transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"})},slideChange:function(){const n=this.slides[this.activeIndex];n&&(n.style.animation="slideIn 0.6s ease-out")}}})}function Hf(){return`
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
          ${Fo.map((s,e)=>`
            <a href="#/services/${s.slug}" class="product-card ${s.isFeatured?"featured":""} animate-on-scroll" style="animation-delay:${e*100}ms">
              <div class="pc-icon">${$(s.icon,24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div class="pc-features">
                ${s.features.slice(0,4).map(t=>`<div class="pc-feature">${$("check",16)} ${t.title}</div>`).join("")}
              </div>
              <span class="pc-cta">Learn more ${$("arrowRight",16)}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    <section class="cta-banner">
      <div class="container">
        <h2>Not Sure Which Service Is Right for You?</h2>
        <p>Book a 1-on-1 session with our founder and get clarity on your next move.</p>
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${$("arrowRight",16)}</a>
      </div>
    </section>
  `}function qf({slug:s}){const e=Fo.find(i=>i.slug===s);if(!e)return`<div class="page-hero"><div class="container"><h1>Service Not Found</h1><p>The requested service doesn't exist.</p></div></div>`;const t=$c.slice(0,2);return`
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> ${e.title}</div>
          <h1>${e.heroHeadline}</h1>
          <p>${e.heroSubheadline}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${$("arrowRight",16)}</a>
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
          ${e.features.map((i,n)=>`
            <div class="card animate-on-scroll" style="animation-delay:${n*60}ms">
              <div style="width:44px;height:44px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin-bottom:var(--space-md)">${$("check",20)}</div>
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
          ${e.process.map((i,n)=>`
            <div class="process-step animate-on-scroll" style="animation-delay:${n*100}ms">
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
              <div class="tc-stars">${Array(i.rating).fill($("star",16)).join("")}</div>
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
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Submit Inquiry ${$("arrowRight",16)}</button>
          </form>
        </div>
      </div>
    </section>
  `}function Vf(){const s=document.getElementById("service-inquiry-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("service-form-container").innerHTML=`
        <div class="form-success">
          <div style="color:var(--success)">${$("checkCircle",48)}</div>
          <h3>Inquiry Submitted!</h3>
          <p>Thank you for your interest. Our team will reach out within 24 hours.</p>
          <a href="#/services" class="btn btn-secondary" style="margin-top:var(--space-lg)">Back to Services</a>
        </div>
      `})}function jf(){return`
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
          ${Ro.map((s,e)=>`
            <a href="#/consultancy/${s.slug}" class="product-card animate-on-scroll" style="animation-delay:${e*80}ms">
              <div class="pc-icon">${$(s.icon,24)}</div>
              <h3 class="pc-title">${s.title}</h3>
              <p class="pc-desc">${s.description}</p>
              <div style="display:flex;align-items:center;gap:8px;margin:var(--space-md) 0;font-size:13px;color:var(--text-muted)">${$("clock",14)} ${s.timeline}</div>
              <span class="pc-cta">Learn more ${$("arrowRight",16)}</span>
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
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${$("arrowRight",16)}</a>
      </div>
    </section>
  `}function Wf({slug:s}){const e=Ro.find(t=>t.slug===s);return e?`
    <section class="hero" style="padding-top:calc(var(--nav-height) + 80px)">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge"><span class="dot"></span> Consultancy Program</div>
          <h1>${e.title}</h1>
          <p>${e.description}</p>
          <div class="hero-actions">
            <a href="#/book-slot" class="btn btn-white btn-lg">Book a Slot ${$("arrowRight",16)}</a>
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
                <div style="color:var(--primary)">${$("check",20)}</div>
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
                  <div style="color:var(--primary);margin-bottom:8px">${$("target",20)}</div>
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
              <div style="font-weight:600;display:flex;align-items:center;gap:8px">${$("clock",16)} ${e.timeline}</div>
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
  `:'<div class="page-hero"><div class="container"><h1>Program Not Found</h1></div></div>'}function Yf(){return`
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
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted)">${$("search",18)}</span>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${Oc.map((s,e)=>`
              <button class="tag community-filter ${e===0?"active":""}" data-category="${s}" style="cursor:pointer;${e===0?"background:var(--primary);color:var(--white);border-color:var(--primary)":""}">${s}</button>
            `).join("")}
          </div>
        </div>

        <!-- Join Banner -->
        <div class="card animate-on-scroll" style="background:var(--primary-dark);color:var(--white);text-align:center;margin-bottom:var(--space-xl);border-color:var(--primary)">
          <h3 style="color:var(--white);margin-bottom:var(--space-sm)">Want to Join the Discussion?</h3>
          <p style="color:var(--accent-light);font-size:14px;margin-bottom:var(--space-md)">Create a free account to post, like, and comment on community threads.</p>
          <a href="#/signup" class="btn btn-white btn-sm">Join Community ${$("arrowRight",16)}</a>
        </div>

        <!-- Post Feed -->
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${No.map((s,e)=>`
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
                <span class="post-action">${$("heart",16)} ${s.likes}</span>
                <span class="post-action">${$("messageCircle",16)} ${s.comments}</span>
                <span class="post-action">${$("share",16)} Share</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Xf(){document.querySelectorAll(".community-filter").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".community-filter").forEach(e=>{e.classList.remove("active"),e.style.background="",e.style.color="",e.style.borderColor=""}),s.classList.add("active"),s.style.background="var(--primary)",s.style.color="var(--white)",s.style.borderColor="var(--primary)"})})}function Uf(){const s=Ts.find(t=>t.featured)||Ts[0],e=Ts.filter(t=>t!==s);return`
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
          <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;min-height:280px;color:rgba(255,255,255,.3)">${$("book",64)}</div>
          <div style="display:flex;flex-direction:column;justify-content:center">
            <span class="tag" style="align-self:flex-start;margin-bottom:var(--space-md)">${s.category}</span>
            <h2 style="font-size:var(--text-h2);font-weight:var(--fw-bold);margin-bottom:var(--space-md);line-height:1.3">${s.title}</h2>
            <p style="color:var(--text-muted);margin-bottom:var(--space-lg);line-height:1.6">${s.excerpt}</p>
            <div class="article-meta">
              <span>${s.author}</span>
              <span>·</span>
              <span>${s.date}</span>
              <span>·</span>
              <span>${$("clock",14)} ${s.readingTime} min read</span>
            </div>
          </div>
        </a>

        <!-- Article Grid -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);margin-top:var(--space-2xl)">
          ${e.map((t,i)=>`
            <a href="#/articles/${t.slug}" class="article-card animate-on-scroll" style="animation-delay:${i*80}ms">
              <div class="article-card-img">${$("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${t.category}</span>
                <h3>${t.title}</h3>
                <p>${t.excerpt}</p>
                <div class="article-meta">
                  <span>${$("clock",14)} ${t.readingTime} min</span>
                  <span>${t.date}</span>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Kf({slug:s}){const e=Ts.find(i=>i.slug===s);if(!e)return'<div class="page-hero"><div class="container"><h1>Article Not Found</h1></div></div>';const t=Ts.filter(i=>i.slug!==s).slice(0,3);return`
    <section class="page-hero">
      <div class="container">
        <span class="tag" style="margin-bottom:var(--space-md)">${e.category}</span>
        <h1 style="max-width:720px;margin:0 auto var(--space-md)">${e.title}</h1>
        <div class="article-meta" style="justify-content:center;color:var(--accent-light)">
          <span>${e.author}</span><span>·</span><span>${e.date}</span><span>·</span><span>${$("clock",14)} ${e.readingTime} min read</span>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container" style="max-width:760px">
        <div style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-md);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.2);margin-bottom:var(--space-2xl)">${$("book",80)}</div>
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
              <div class="article-card-img">${$("book",32)}</div>
              <div class="article-card-body">
                <span class="tag">${i.category}</span>
                <h3>${i.title}</h3>
                <div class="article-meta"><span>${$("clock",14)} ${i.readingTime} min</span><span>${i.date}</span></div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Jf(){return`
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
          ${ha.map(s=>`
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
                    ${e.included?$("check",18):$("x",18)}
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
          ${Ac.map(s=>`
            <div class="faq-item">
              <button class="faq-question">${s.q} ${$("chevronDown",20)}</button>
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
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${$("arrowRight",16)}</a>
      </div>
    </section>
  `}function Qf(){const s=document.getElementById("billing-toggle");if(!s)return;let e=!1;s.addEventListener("click",()=>{e=!e,s.classList.toggle("on",e),document.querySelectorAll(".billing-label").forEach(t=>{t.classList.toggle("active",t.dataset.billing===(e?"annual":"monthly"))}),document.querySelectorAll(".pricing-amount").forEach(t=>{const i=parseInt(t.dataset.monthly),n=parseInt(t.dataset.annual),r=t.dataset.currency,a=e?n:i,o="/mo";t.innerHTML=a===0?"Free":`${r}${a.toLocaleString()}<span>${o}</span>`}),document.querySelectorAll(".pricing-period").forEach((t,i)=>{ha[i].monthlyPrice>0&&(t.textContent=e?"per user, billed annually":"per user, billed monthly")})}),document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".faq-item"),n=i.classList.contains("open");document.querySelectorAll(".faq-item").forEach(r=>r.classList.remove("open")),n||i.classList.add("open")})})}function Zf(){return`
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
        <div class="animate-on-scroll" style="background:linear-gradient(135deg,var(--primary-dark),var(--primary));border-radius:var(--radius-lg);height:400px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.15)">${$("globe",100)}</div>
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
              <div style="width:52px;height:52px;background:var(--primary-light);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;color:var(--primary);margin:0 auto var(--space-md)">${$(s.icon,24)}</div>
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
          ${Dc.map(s=>`
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
        <a href="#/book-slot" class="btn btn-white btn-lg" style="position:relative">Book a Slot ${$("arrowRight",16)}</a>
      </div>
    </section>
  `}function ep(){return`
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
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Send Message ${$("arrowRight",16)}</button>
            </form>
          </div>

          <div>
            <h3 style="font-size:var(--text-h3);font-weight:var(--fw-semibold);margin-bottom:var(--space-xl)">Contact Information</h3>
            <div class="contact-info-item">
              <div class="contact-info-icon">${$("mail",20)}</div>
              <div><div class="contact-info-label">Email</div><div class="contact-info-value">hello@tdcm.company</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${$("phone",20)}</div>
              <div><div class="contact-info-label">Phone</div><div class="contact-info-value">+91 98765 43210</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${$("mapPin",20)}</div>
              <div><div class="contact-info-label">Office</div><div class="contact-info-value">Mumbai, Maharashtra, India</div></div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">${$("clock",20)}</div>
              <div><div class="contact-info-label">Business Hours</div><div class="contact-info-value">Mon–Fri, 9:00 AM – 6:00 PM IST</div></div>
            </div>

            <div class="divider" style="margin:var(--space-xl) 0"></div>

            <h4 style="font-weight:var(--fw-semibold);margin-bottom:var(--space-md)">Quick Actions</h4>
            <a href="#" class="btn btn-secondary" style="width:100%;margin-bottom:var(--space-sm)">${$("calendar",16)} Schedule a Call</a>
            <a href="#" class="btn btn-secondary" style="width:100%;background:#25D366;color:white;border-color:#25D366">${$("messageCircle",16)} WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  `}function tp(){const s=document.getElementById("contact-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("contact-form-container").innerHTML=`
        <div class="form-success">
          <div style="color:var(--success)">${$("checkCircle",56)}</div>
          <h3 style="margin-top:var(--space-md)">Message Sent Successfully!</h3>
          <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <a href="#/" class="btn btn-primary" style="margin-top:var(--space-lg)">Back to Home</a>
        </div>
      `})}function ip(){return`
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
  `}function sp(){return`
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
  `}function np(){return`
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
  `}function rp(){const s=document.getElementById("forgot-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),document.getElementById("forgot-form-container").innerHTML=`
        <div class="form-success" style="padding:var(--space-lg) 0">
          <div style="color:var(--success)">${$("checkCircle",48)}</div>
          <h3>Check Your Email</h3>
          <p>We've sent a password reset link to your email address.</p>
        </div>
      `})}function ap({username:s}){const e=s?s.replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()):"Demo User",t=e.split(" ").map(i=>i[0]).join("").slice(0,2);return`
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
          <button class="btn btn-primary btn-sm">${$("users",14)} Follow</button>
          <button class="btn btn-secondary btn-sm">${$("mail",14)} Message</button>
        </div>
      </div>
    </div>

    <section class="section-padding">
      <div class="container" style="max-width:700px">
        <h2 class="section-headline" style="font-size:var(--text-h3);margin-bottom:var(--space-lg)">Recent Posts</h2>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${No.slice(0,3).map(i=>`
            <div class="post-card">
              <div class="post-header">
                <div class="post-avatar">${t}</div>
                <div><div class="post-author-name">${e}</div><div class="post-time">${i.time}</div></div>
              </div>
              <p class="post-content">${i.content}</p>
              <div class="post-actions">
                <span class="post-action">${$("heart",16)} ${i.likes}</span>
                <span class="post-action">${$("messageCircle",16)} ${i.comments}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function op(){const s=[{initials:"SP",text:"<strong>Sneha Patel</strong> liked your post about marketing strategies",time:"2 min ago",unread:!0},{initials:"RK",text:"<strong>Rajesh Kumar</strong> commented on your post",time:"15 min ago",unread:!0},{initials:"AM",text:"<strong>Arjun Menon</strong> started following you",time:"1 hour ago",unread:!0},{initials:"DS",text:"<strong>Divya Sharma</strong> mentioned you in a comment",time:"3 hours ago",unread:!1},{initials:"VJ",text:"<strong>Vikram Joshi</strong> liked your comment",time:"5 hours ago",unread:!1},{initials:"AD",text:"<strong>Anita Desai</strong> replied to your post about CRM implementation",time:"1 day ago",unread:!1},{initials:"TC",text:'<strong>TDCM</strong> published a new article: "AI in Recruitment"',time:"2 days ago",unread:!1},{initials:"PR",text:"<strong>Priya Sharma</strong> liked your article share",time:"3 days ago",unread:!1}];return`
    <section class="page-hero" style="padding-bottom:var(--space-xl)">
      <div class="container">
        <h1>Notifications</h1>
      </div>
    </section>
    <section class="section-padding-sm">
      <div class="container" style="max-width:700px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <span style="font-size:14px;color:var(--text-muted)">${s.filter(e=>e.unread).length} unread notifications</span>
          <button class="btn btn-secondary btn-sm">${$("check",14)} Mark all as read</button>
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
  `}function lp(){const s=[],e=new Date;for(let t=1;t<=7;t++){const i=new Date(e);i.setDate(e.getDate()+t);const n=i.toLocaleDateString("en-IN",{weekday:"short"}),r=i.toLocaleDateString("en-IN",{day:"numeric",month:"short"}),a=i.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),l=["10:00 AM","11:30 AM","2:00 PM","3:30 PM","5:00 PM"].filter(()=>Math.random()>.3);s.push({day:n,date:r,fullDate:a,times:l,raw:i})}return s}function cp(){const s=lp();return`
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
                            ${$("clock",16)} ${i}
                          </button>
                        `).join("")}
                      </div>
                    `:`
                      <div style="text-align:center;padding:var(--space-xl);color:var(--text-muted)">
                        ${$("calendar",24)}
                        <p style="margin-top:var(--space-sm)">No slots available on this day</p>
                      </div>
                    `}
                  </div>
                `).join("")}
              </div>

              <!-- Session Details -->
              <div class="session-info">
                <div class="session-info-item">${$("clock",16)} <span>60 minute session</span></div>
                <div class="session-info-item">${$("video",16)} <span>Google Meet / Zoom</span></div>
                <div class="session-info-item">${$("user",16)} <span>1-on-1 with Founder</span></div>
                <div class="session-info-item">${$("briefcase",16)} <span>₹5,000 fee</span></div>
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
                  Confirm Booking ${$("arrowRight",16)}
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
              ${$("check",36)}
            </div>
            <h2 style="font-size:var(--text-h2);margin-top:var(--space-lg);margin-bottom:var(--space-sm)">Booking Confirmed!</h2>
            <p style="color:var(--text-muted);font-size:var(--text-body-lg);max-width:420px;margin:0 auto var(--space-xl)">Your session with the founder has been booked. A calendar invite and meeting link will be sent to your email.</p>

            <div class="confirm-details">
              <div class="cd-row">${$("user",18)} <span id="conf-name">—</span></div>
              <div class="cd-row">${$("mail",18)} <span id="conf-email">—</span></div>
              <div class="cd-row">${$("calendar",18)} <span id="conf-date">—</span></div>
              <div class="cd-row">${$("clock",18)} <span id="conf-time">—</span></div>
              <div class="cd-row">${$("video",18)} <span>Google Meet link will be emailed</span></div>
              <div class="cd-row">${$("briefcase",18)} <span>₹5,000 session fee</span></div>
            </div>

            <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-xl);flex-wrap:wrap">
              <a href="#/" class="btn btn-primary">Back to Home ${$("arrowRight",16)}</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function dp(){let s="",e="";const t=()=>{const i=document.getElementById("btn-confirm-booking"),n=i?.nextElementSibling;e?(i.disabled=!1,n&&(n.textContent=`Selected: ${s} at ${e}`)):(i.disabled=!0,n&&(n.textContent="Please select a time slot above to continue"))};document.querySelectorAll(".slot-date-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".slot-date-btn").forEach(r=>r.classList.remove("active")),i.classList.add("active");const n=i.dataset.idx;document.querySelectorAll(".slot-times").forEach(r=>r.classList.remove("active")),document.querySelector(`.slot-times[data-day="${n}"]`)?.classList.add("active"),document.querySelectorAll(".slot-time-btn").forEach(r=>r.classList.remove("active")),e="",t()})}),document.querySelectorAll(".slot-time-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".slot-time-btn").forEach(n=>n.classList.remove("active")),i.classList.add("active"),s=i.dataset.fullDate,e=i.dataset.time,t(),document.querySelector(".booking-section:last-of-type")?.scrollIntoView({behavior:"smooth",block:"nearest"})})}),document.getElementById("booking-form-submit")?.addEventListener("submit",async i=>{if(i.preventDefault(),!e)return;const n=document.getElementById("btn-confirm-booking"),r=n.innerHTML;n.disabled=!0,n.innerHTML="Sending... ⏳";const a=document.getElementById("booking-name").value,o=document.getElementById("booking-email").value,l=document.getElementById("booking-phone").value,c=document.getElementById("booking-message").value;try{const f=await(await fetch("http://localhost:3001/api/send-booking",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,email:o,phone:l,message:c,date:s,time:e})})).json();if(f.success)document.getElementById("booking-form").style.display="none",document.getElementById("booking-confirmation").style.display="block",document.getElementById("conf-name").textContent=a,document.getElementById("conf-email").textContent=o,document.getElementById("conf-date").textContent=s,document.getElementById("conf-time").textContent=e,window.scrollTo({top:0,behavior:"smooth"});else throw new Error(f.error||"Failed to send booking")}catch(d){console.error("Booking error:",d),alert("⚠️ There was an error submitting your booking. Please try again or contact us directly."),n.disabled=!1,n.innerHTML=r}})}hr.registerPlugin(U);const Rr=[{id:1,number:"10+",suffix:"Cr",label:"Client Revenue Generation",icon:"trendingUp"},{id:2,number:"70+",suffix:"",label:"Job Placements",icon:"users"},{id:3,number:"5+",suffix:"",label:"Different Industry Contribution",icon:"layers"}];function up(){return`
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
            ${Rr.map((s,e)=>`
              <div class="ms-card" data-index="${e}" data-state="${e===0?"active":"hidden"}">
                <div class="ms-card-inner">
                  <div class="ms-card-icon">${$(s.icon,40)}</div>
                  <div class="ms-card-number">${s.number}<span class="ms-card-suffix">${s.suffix}</span></div>
                  <div class="ms-card-label">${s.label}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="ms-dots">
          ${Rr.map((s,e)=>`
            <button class="ms-dot ${e===0?"active":""}" data-dot="${e}"></button>
          `).join("")}
        </div>

        <!-- Progress indicator -->
        <div class="ms-progress">
          <span id="ms-current">1</span> / <span id="ms-total">${Rr.length}</span>
        </div>
      </div>
    </section>
  `}function fp(){const s=document.getElementById("milestones"),e=document.querySelectorAll(".ms-card"),t=document.querySelectorAll(".ms-dot"),i=document.getElementById("ms-current");if(!s||e.length===0)return;let n=0;const r=e.length;function a(l){l!==n&&(e.forEach((c,d)=>{d===l?c.dataset.state="active":c.dataset.state="hidden"}),t.forEach((c,d)=>{c.classList.toggle("active",d===l)}),i&&(i.textContent=l+1),n=l)}const o=hr.timeline({scrollTrigger:{trigger:s,start:"top top",end:`+=${r*100}%`,pin:!0,scrub:1,anticipatePin:1,onUpdate:l=>{const c=l.progress,d=Math.min(Math.floor(c*r),r-1);d!==n&&a(d)}}});for(let l=0;l<r;l++)o.to({},{duration:1},l)}function pp(){return`
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
              Tarun Dadlani is the force behind TDCM a business consulting and solutions company built to bring structure, speed, and scale to growing businesses.
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
  `}let Ss="super_admin",_c="dashboard";function Wt(s){_c=s}const hp=[{section:"Overview",items:[{key:"dashboard",label:"Dashboard",icon:"grid",href:"#/admin",roles:["super_admin","editor","moderator"]}]},{section:"Management",items:[{key:"bookings",label:"Bookings",icon:"calendar",href:"#/admin/bookings",roles:["super_admin"],badge:"2"}]},{section:"Content",items:[{key:"articles",label:"Articles",icon:"file",href:"#/admin/articles",roles:["super_admin","editor"]},{key:"pages",label:"Pages",icon:"layout",href:"#/admin/pages",roles:["super_admin","editor"]},{key:"services",label:"Services",icon:"briefcase",href:"#/admin/services",roles:["super_admin","editor"]},{key:"media",label:"Media",icon:"image",href:"#/admin/media",roles:["super_admin","editor","moderator"]}]},{section:"Community",items:[{key:"community",label:"Moderation",icon:"shield",href:"#/admin/community",roles:["super_admin","moderator"],badge:"1"}]},{section:"System",items:[{key:"navigation",label:"Navigation",icon:"menu",href:"#/admin/navigation",roles:["super_admin"]},{key:"pricing",label:"Pricing",icon:"tag",href:"#/admin/pricing",roles:["super_admin"]},{key:"team",label:"Team",icon:"userPlus",href:"#/admin/team",roles:["super_admin"]},{key:"settings",label:"Settings",icon:"settings",href:"#/admin/settings",roles:["super_admin"]}]}];function mp(){return hp.map(s=>{const e=s.items.filter(t=>t.roles.includes(Ss));return e.length===0?"":`
      <div class="sidebar-section">
        <div class="sidebar-section-label">${s.section}</div>
        ${e.map(t=>`
          <a href="${t.href}" class="sidebar-link ${_c===t.key?"active":""}" data-admin-page="${t.key}">
            ${$(t.icon,18)}
            ${t.label}
            ${t.badge?`<span class="badge">${t.badge}</span>`:""}
          </a>
        `).join("")}
      </div>
    `}).join("")}function Yt(s,e=""){const t=Ss.replace("_"," ").split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ");return`
    <div class="admin-wrap">
      <!-- Sidebar -->
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">TCM</div>
          <div class="sidebar-brand">TDCM Admin<span>Management Portal</span></div>
        </div>
        
        <select class="role-switcher" id="admin-role-switcher">
          <option value="super_admin" ${Ss==="super_admin"?"selected":""}>🔑 Super Admin</option>
          <option value="editor" ${Ss==="editor"?"selected":""}>✏️ Editor</option>
          <option value="moderator" ${Ss==="moderator"?"selected":""}>🛡️ Moderator</option>
        </select>

        <nav class="sidebar-nav" id="sidebar-nav">
          ${mp()}
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
            <a href="#/" class="admin-btn admin-btn-secondary admin-btn-sm">${$("globe",14)} View Site</a>
          </div>
        </div>
        <div class="admin-content">
          ${s}
        </div>
      </div>
    </div>
  `}function Xt(){const s=document.getElementById("admin-role-switcher");s&&s.addEventListener("change",e=>{Ss=e.target.value,window.dispatchEvent(new HashChangeEvent("hashchange"))})}const Lo=[{id:"u1",name:"Rajesh Kumar",email:"rajesh@tdcm.co",role:"super_admin",initials:"RK",lastLogin:"2 hours ago",isActive:!0},{id:"u2",name:"Priya Sharma",email:"priya@tdcm.co",role:"editor",initials:"PS",lastLogin:"5 hours ago",isActive:!0},{id:"u3",name:"Amit Patel",email:"amit@tdcm.co",role:"moderator",initials:"AP",lastLogin:"1 day ago",isActive:!0},{id:"u4",name:"Neha Gupta",email:"neha@tdcm.co",role:"editor",initials:"NG",lastLogin:"3 days ago",isActive:!1}],Ji=[{id:"B001",clientName:"Arjun Mehta",email:"arjun@startup.io",phone:"+91 98765 43210",date:"Sat, 15 Mar 2026",time:"10:00 AM",status:"upcoming",paid:!0,topic:"Market expansion strategy for SaaS product"},{id:"B002",clientName:"Sneha Reddy",email:"sneha@techflow.in",phone:"+91 87654 32109",date:"Mon, 17 Mar 2026",time:"2:00 PM",status:"upcoming",paid:!0,topic:"Performance marketing budget allocation"},{id:"B003",clientName:"Pooja Desai",email:"pooja@freshstart.co",phone:"+91 65432 10987",date:"Fri, 7 Mar 2026",time:"11:30 AM",status:"completed",paid:!0,topic:"Go-to-market strategy for D2C brand"},{id:"B004",clientName:"Deepak Rao",email:"deepak@scaleup.co",phone:"+91 32109 87654",date:"Wed, 5 Mar 2026",time:"3:30 PM",status:"completed",paid:!0,topic:"CRM implementation roadmap"},{id:"B005",clientName:"Rahul Joshi",email:"rahul@cloudbyte.in",phone:"+91 54321 09876",date:"Thu, 6 Mar 2026",time:"10:00 AM",status:"cancelled",paid:!1,topic:"Recruitment strategy"}],Yi=[{id:"A001",title:"Top 10 Recruitment Strategies for 2026",author:"Priya Sharma",category:"Recruitment",status:"published",publishedAt:"2026-03-08",views:1420},{id:"A002",title:"How Performance Marketing is Changing",author:"Rajesh Kumar",category:"Marketing",status:"published",publishedAt:"2026-03-05",views:890},{id:"A003",title:"The Future of CRM Platforms",author:"Priya Sharma",category:"Technology",status:"draft",publishedAt:null,views:0},{id:"A004",title:"Building a Startup from Zero to Revenue",author:"Rajesh Kumar",category:"Consultancy",status:"scheduled",publishedAt:"2026-03-20",views:0},{id:"A005",title:"5 Mistakes Startups Make with Hiring",author:"Priya Sharma",category:"Recruitment",status:"published",publishedAt:"2026-02-28",views:2103},{id:"A006",title:"Digital Marketing Budget Guide",author:"Rajesh Kumar",category:"Marketing",status:"archived",publishedAt:"2026-01-15",views:3200}],gp=[{slug:"home",title:"Homepage",lastUpdated:"2026-03-10",isPublished:!0,sections:8},{slug:"about",title:"About Us",lastUpdated:"2026-03-08",isPublished:!0,sections:5},{slug:"contact",title:"Contact",lastUpdated:"2026-03-06",isPublished:!0,sections:3},{slug:"pricing",title:"Pricing",lastUpdated:"2026-03-09",isPublished:!0,sections:4}],Nr=[{id:"P001",author:"JohnDoe",authorInitials:"JD",content:"Just launched our new product! Looking for beta testers in the community.",likes:24,comments:8,isPinned:!0,isHidden:!1,isFlagged:!1,createdAt:"2 hours ago"},{id:"P002",author:"SarahM",authorInitials:"SM",content:"Has anyone tried TDCM recruitment services? What was your experience?",likes:12,comments:5,isPinned:!1,isHidden:!1,isFlagged:!1,createdAt:"5 hours ago"},{id:"P003",author:"TechGuru99",authorInitials:"TG",content:"SPAM: Buy cheap followers now! Visit our link...",likes:0,comments:1,isPinned:!1,isHidden:!1,isFlagged:!0,createdAt:"8 hours ago"},{id:"P004",author:"StartupSam",authorInitials:"SS",content:"Our company grew 300% after the TDCM consultancy program. Highly recommend!",likes:56,comments:15,isPinned:!1,isHidden:!1,isFlagged:!1,createdAt:"1 day ago"},{id:"P005",author:"AngryUser",authorInitials:"AU",content:"This platform is terrible. Offensive content removed by moderator.",likes:0,comments:3,isPinned:!1,isHidden:!0,isFlagged:!0,createdAt:"2 days ago"}],Bo=[{id:"M001",name:"John Doe",username:"JohnDoe",email:"john@example.com",joined:"2026-01-15",posts:12,isBanned:!1},{id:"M002",name:"Sarah Miller",username:"SarahM",email:"sarah@example.com",joined:"2026-02-01",posts:8,isBanned:!1},{id:"M003",name:"Tech Guru",username:"TechGuru99",email:"tech@spam.com",joined:"2026-03-09",posts:1,isBanned:!1},{id:"M004",name:"Sam Patel",username:"StartupSam",email:"sam@startup.io",joined:"2025-12-20",posts:24,isBanned:!1},{id:"M005",name:"Angry User",username:"AngryUser",email:"angry@mail.com",joined:"2026-03-01",posts:3,isBanned:!0}],Io=[{id:"MD001",name:"hero-banner.jpg",type:"image/jpeg",size:"2.4 MB",uploadedAt:"2026-03-10",uploadedBy:"Priya Sharma"},{id:"MD002",name:"team-photo.png",type:"image/png",size:"1.8 MB",uploadedAt:"2026-03-08",uploadedBy:"Rajesh Kumar"},{id:"MD003",name:"case-study.pdf",type:"application/pdf",size:"540 KB",uploadedAt:"2026-03-05",uploadedBy:"Priya Sharma"},{id:"MD004",name:"logo-dark.svg",type:"image/svg",size:"12 KB",uploadedAt:"2026-02-20",uploadedBy:"Rajesh Kumar"},{id:"MD005",name:"product-demo.mp4",type:"video/mp4",size:"15.2 MB",uploadedAt:"2026-03-03",uploadedBy:"Amit Patel"},{id:"MD006",name:"recruitment-guide.pdf",type:"application/pdf",size:"1.1 MB",uploadedAt:"2026-02-15",uploadedBy:"Priya Sharma"}],vp=[{key:"company_name",value:"TDCM Company",group:"Company Info"},{key:"company_tagline",value:"Dream Bold. Plan Smart. Hustle Hard.",group:"Company Info"},{key:"contact_email",value:"hello@tdcm.co",group:"Contact"},{key:"contact_phone",value:"+91 98765 43210",group:"Contact"},{key:"contact_address",value:"Jaipur, Rajasthan, India",group:"Contact"},{key:"social_linkedin",value:"https://linkedin.com/company/tdcm",group:"Social Links"},{key:"social_twitter",value:"https://twitter.com/tdcmco",group:"Social Links"},{key:"social_instagram",value:"https://instagram.com/tdcmco",group:"Social Links"},{key:"notice_banner_active",value:"true",group:"Notice Banner"},{key:"notice_banner_text",value:"🚀 New: Book a 1-on-1 session with our founder!",group:"Notice Banner"},{key:"ga_tracking_id",value:"G-XXXXXXXXXX",group:"Analytics"},{key:"meta_title",value:"TDCM Company — 360° Business Building Brand",group:"SEO Defaults"},{key:"meta_description",value:"Expert recruitment, performance marketing, and startup consultancy services.",group:"SEO Defaults"}],yp={publishedArticles:3,communityPosts:142,newMembers30d:34,bookingsUpcoming:2};function bp(){Wt("dashboard");const s=yp,e=Ji.filter(i=>i.status==="upcoming"),t=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Dashboard</h1>
        <p class="admin-page-subtitle">Welcome back, Rajesh. Here's what's happening.</p>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="stat-cards">

      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${$("calendar",20)}</div>
        <div class="sc-label">Upcoming Bookings</div>
        <div class="sc-value">${s.bookingsUpcoming}</div>
        <div class="sc-change up">₹${(s.bookingsUpcoming*5e3).toLocaleString()} revenue</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${$("file",20)}</div>
        <div class="sc-label">Published Articles</div>
        <div class="sc-value">${s.publishedArticles}</div>
        <div class="sc-change up">↑ 2 this month</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="sc-icon qa-purple">${$("messageCircle",20)}</div>
        <div class="sc-label">Community Posts</div>
        <div class="sc-value">${s.communityPosts}</div>
        <div class="sc-change up">↑ ${s.newMembers30d} new members</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">

      <a href="#/admin/articles" class="quick-action">
        <div class="quick-action-icon qa-blue">${$("file",20)}</div>
        <div>
          <div class="quick-action-text">Create Article</div>
          <div class="quick-action-sub">Publish new content</div>
        </div>
      </a>
      <a href="#/admin/community" class="quick-action">
        <div class="quick-action-icon qa-amber">${$("shield",20)}</div>
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
  `;return Yt(t,"Dashboard")}function _p(){Xt()}function xp(){Wt("bookings");const s={upcoming:Ji.filter(t=>t.status==="upcoming").length,completed:Ji.filter(t=>t.status==="completed").length,cancelled:Ji.filter(t=>t.status==="cancelled").length},e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Booking Slots</h1>
        <p class="admin-page-subtitle">${Ji.length} total sessions • ₹${(Ji.filter(t=>t.paid).length*5e3).toLocaleString()} collected</p>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="stat-cards" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card accent-blue">
        <div class="sc-icon qa-blue">${$("calendar",20)}</div>
        <div class="sc-label">Upcoming</div>
        <div class="sc-value">${s.upcoming}</div>
      </div>
      <div class="stat-card accent-green">
        <div class="sc-icon qa-green">${$("check",20)}</div>
        <div class="sc-label">Completed</div>
        <div class="sc-value">${s.completed}</div>
      </div>
      <div class="stat-card accent-red">
        <div class="sc-icon qa-red">${$("x",20)}</div>
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
          ${Ji.map(t=>`
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
  `;return Yt(e,"Bookings")}function wp(){Xt();const s=document.querySelectorAll("#booking-filters .filter-btn"),e=document.querySelectorAll(".booking-row");s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(n=>n.classList.remove("active")),t.classList.add("active");const i=t.dataset.filter;e.forEach(n=>{n.style.display=i==="all"||n.dataset.status===i?"":"none"})})})}function Sp(){Wt("articles");const s={all:Yi.length,published:Yi.filter(t=>t.status==="published").length,draft:Yi.filter(t=>t.status==="draft").length,scheduled:Yi.filter(t=>t.status==="scheduled").length,archived:Yi.filter(t=>t.status==="archived").length},e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Articles</h1>
        <p class="admin-page-subtitle">${Yi.length} articles</p>
      </div>
      <button class="admin-btn admin-btn-primary">${$("plus",16)} New Article</button>
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
          ${Yi.map(t=>`
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
  `;return Yt(e,"Articles")}function Tp(){Xt();const s=document.querySelectorAll("#article-filters .filter-btn"),e=document.querySelectorAll(".article-row");s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(n=>n.classList.remove("active")),t.classList.add("active");const i=t.dataset.filter;e.forEach(n=>{n.style.display=i==="all"||n.dataset.status===i?"":"none"})})})}function kp(){Wt("pages");const s=`
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
          ${gp.map(e=>`
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
  `;return Yt(s,"Pages")}function Cp(){Xt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("on")})})}const Mp=[{title:"Recruitment Solutions",category:"Service",slug:"recruitment",isActive:!0,sortOrder:1},{title:"Performance Marketing",category:"Service",slug:"marketing",isActive:!0,sortOrder:2},{title:"Business Solutions (CRM)",category:"Service",slug:"crm",isActive:!0,sortOrder:3},{title:"Go To Market Strategy",category:"Consultancy",slug:"go-to-market",isActive:!0,sortOrder:1},{title:"Product Launch",category:"Consultancy",slug:"product-launch",isActive:!0,sortOrder:2},{title:"0 to 90 Plan",category:"Consultancy",slug:"0-to-90-plan",isActive:!0,sortOrder:3},{title:"0 to 90 Training",category:"Consultancy",slug:"0-to-90-training",isActive:!0,sortOrder:4},{title:"Quarterly Health Analysis",category:"Consultancy",slug:"quarterly-health-analysis",isActive:!1,sortOrder:5}];function Pp(){Wt("services");const s=`
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
          ${Mp.map(e=>`
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
  `;return Yt(s,"Services")}function Ep(){Xt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>s.classList.toggle("on"))})}function Ap(){Wt("community");const s=Nr.filter(t=>t.isFlagged).length,e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Community Moderation</h1>
        <p class="admin-page-subtitle">${Nr.length} posts • ${Bo.length} members</p>
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
            ${Nr.map(t=>{let i="";return t.isFlagged?i="flagged":t.isHidden?i="hidden":t.isPinned&&(i="pinned"),`
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
                    <span style="font-size:13px;color:#64748B">${$("heart",14)} ${t.likes} &nbsp; ${$("messageCircle",14)} ${t.comments}</span>
                  </td>
                  <td>
                    ${t.isPinned?'<span class="status-badge status-pinned">Pinned</span>':""}
                    ${t.isFlagged?'<span class="status-badge status-flagged">Flagged</span>':""}
                    ${t.isHidden?'<span class="status-badge status-hidden">Hidden</span>':""}
                    ${!t.isPinned&&!t.isFlagged&&!t.isHidden?'<span style="color:#CBD5E1">—</span>':""}
                  </td>
                  <td>
                    <div style="display:flex;gap:6px">
                      <button class="admin-btn admin-btn-secondary admin-btn-sm pin-btn" title="${t.isPinned?"Unpin":"Pin"}">${$("pin",14)}</button>
                      <button class="admin-btn admin-btn-secondary admin-btn-sm hide-btn" title="${t.isHidden?"Show":"Hide"}">${$("eyeOff",14)}</button>
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
            ${Bo.map(t=>`
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
  `;return Yt(e,"Community")}function $p(){Xt();const s=document.getElementById("tab-posts"),e=document.getElementById("tab-members"),t=document.getElementById("community-posts-tab"),i=document.getElementById("community-members-tab");s&&e&&(s.addEventListener("click",()=>{s.classList.add("active"),e.classList.remove("active"),t.style.display="",i.style.display="none"}),e.addEventListener("click",()=>{e.classList.add("active"),s.classList.remove("active"),i.style.display="",t.style.display="none"}));const n=document.querySelectorAll("#post-filters .filter-btn"),r=document.querySelectorAll(".post-row");n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(l=>l.classList.remove("active")),a.classList.add("active");const o=a.dataset.filter;r.forEach(l=>{o==="all"?l.style.display="":l.style.display=l.dataset.filter===o?"":"none"})})})}function Dp(s){return s.startsWith("image")?$("image",32):s.startsWith("video")?$("video",32):$("file",32)}function Op(){Wt("media");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Media Library</h1>
        <p class="admin-page-subtitle">${Io.length} files</p>
      </div>
      <button class="admin-btn admin-btn-primary">${$("upload",16)} Upload File</button>
    </div>

    <div class="media-grid">
      ${Io.map(e=>`
        <div class="media-item" data-id="${e.id}">
          <div class="media-thumb">
            ${Dp(e.type)}
          </div>
          <div class="media-info">
            <div class="media-name" title="${e.name}">${e.name}</div>
            <div class="media-meta">${e.size} • ${e.uploadedAt}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;return Yt(s,"Media")}function Lp(){Xt()}const Bp=[{label:"Home",href:"/",isActive:!0},{label:"Services",href:"/services",isActive:!0,children:[{label:"Recruitment",href:"/services/recruitment"},{label:"Marketing",href:"/services/marketing"},{label:"Business Solutions",href:"/services/crm"}]},{label:"Consultancy",href:"/consultancy",isActive:!0,children:[{label:"Go To Market",href:"/consultancy/go-to-market"},{label:"Product Launch",href:"/consultancy/product-launch"},{label:"0 to 90 Plan",href:"/consultancy/0-to-90-plan"}]},{label:"Community",href:"/community",isActive:!0},{label:"Articles",href:"/articles",isActive:!0},{label:"Pricing",href:"/pricing",isActive:!0},{label:"About",href:"/about",isActive:!0},{label:"Contact",href:"/contact",isActive:!0}];function Ip(){Wt("navigation");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Navigation</h1>
        <p class="admin-page-subtitle">Manage header and footer navigation links</p>
      </div>
      <button class="admin-btn admin-btn-primary">${$("plus",16)} Add Item</button>
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
          ${Bp.map(e=>`
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
                  <span style="cursor:pointer;color:#94A3B8">${$("edit",12)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;return Yt(s,"Navigation")}function zp(){Xt(),document.querySelectorAll(".admin-toggle").forEach(s=>{s.addEventListener("click",()=>s.classList.toggle("on"))})}function Fp(){Wt("pricing");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Pricing Plans</h1>
        <p class="admin-page-subtitle">Manage pricing tiers and features</p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      ${ha.map(e=>`
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
                <span style="color:${t.included?"#22C55E":"#CBD5E1"}">${t.included?$("check",16):$("x",16)}</span>
                ${t.text}
              </div>
            `).join("")}
          </div>
          <button class="admin-btn admin-btn-secondary" style="width:100%;margin-top:16px;justify-content:center">${$("edit",14)} Edit Plan</button>
        </div>
      `).join("")}
    </div>
  `;return Yt(s,"Pricing")}function Rp(){Xt()}function Np(){Wt("settings");const s={};vp.forEach(t=>{s[t.group]||(s[t.group]=[]),s[t.group].push(t)});const e=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Site Settings</h1>
        <p class="admin-page-subtitle">Manage global site configuration</p>
      </div>
      <button class="admin-btn admin-btn-primary" id="save-settings-btn">${$("check",16)} Save All Changes</button>
    </div>

    <div class="admin-card">
      ${Object.entries(s).map(([t,i])=>`
        <div class="settings-group">
          <div class="settings-group-title">${t}</div>
          ${i.map(n=>`
            <div class="settings-row">
              <div class="settings-key">${n.key.replace(/_/g," ").replace(/\b\w/g,r=>r.toUpperCase())}</div>
              <input class="admin-form-input" value="${n.value}" data-key="${n.key}" />
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;return Yt(e,"Settings")}function Gp(){Xt();const s=document.getElementById("save-settings-btn");s&&s.addEventListener("click",()=>{s.innerHTML=`${$("check",16)} Saved!`,s.style.background="#22C55E",setTimeout(()=>{s.innerHTML=`${$("check",16)} Save All Changes`,s.style.background=""},2e3)})}function Hp(){Wt("team");const s=`
    <div class="admin-page-header">
      <div>
        <h1 class="admin-page-title">Team Management</h1>
        <p class="admin-page-subtitle">${Lo.length} admin users</p>
      </div>
      <button class="admin-btn admin-btn-primary">${$("userPlus",16)} Invite Admin</button>
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
          ${Lo.map(e=>{const t=e.role==="super_admin"?"#FEF3C7":e.role==="editor"?"#DBEAFE":"#EDE9FE",i=e.role==="super_admin"?"#92400E":e.role==="editor"?"#1D4ED8":"#7C3AED";return`
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
                    <button class="admin-btn admin-btn-secondary admin-btn-sm">${$("edit",14)}</button>
                    <button class="admin-btn ${e.isActive?"admin-btn-danger":"admin-btn-secondary"} admin-btn-sm">${e.isActive?"Deactivate":"Activate"}</button>
                  </div>
                </td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `;return Yt(s,"Team")}function qp(){Xt()}se("/",()=>{const s=Nf();return setTimeout(()=>{Gf();const e=document.getElementById("milestones-placeholder");e&&(e.outerHTML=up(),setTimeout(fp,100));const t=document.getElementById("founder-placeholder");t&&(t.outerHTML=pp())},0),s});se("/services",()=>Hf());se("/services/:slug",s=>{const e=qf(s);return setTimeout(Vf,0),e});se("/consultancy",()=>jf());se("/consultancy/:slug",s=>Wf(s));se("/community",()=>{const s=Yf();return setTimeout(Xf,0),s});se("/articles",()=>Uf());se("/articles/:slug",s=>Kf(s));se("/pricing",()=>{const s=Jf();return setTimeout(Qf,0),s});se("/about",()=>Zf());se("/contact",()=>{const s=ep();return setTimeout(tp,0),s});se("/signup",()=>ip());se("/login",()=>sp());se("/forgot-password",()=>{const s=np();return setTimeout(rp,0),s});se("/profile/:username",s=>ap(s));se("/notifications",()=>op());se("/book-slot",()=>{const s=cp();return setTimeout(dp,0),s});se("/admin",()=>{const s=bp();return setTimeout(_p,0),s});se("/admin/bookings",()=>{const s=xp();return setTimeout(wp,0),s});se("/admin/articles",()=>{const s=Sp();return setTimeout(Tp,0),s});se("/admin/pages",()=>{const s=kp();return setTimeout(Cp,0),s});se("/admin/services",()=>{const s=Pp();return setTimeout(Ep,0),s});se("/admin/community",()=>{const s=Ap();return setTimeout($p,0),s});se("/admin/media",()=>{const s=Op();return setTimeout(Lp,0),s});se("/admin/navigation",()=>{const s=Ip();return setTimeout(zp,0),s});se("/admin/pricing",()=>{const s=Fp();return setTimeout(Rp,0),s});se("/admin/settings",()=>{const s=Np();return setTimeout(Gp,0),s});se("/admin/team",()=>{const s=Hp();return setTimeout(qp,0),s});document.addEventListener("DOMContentLoaded",()=>{Pc(),Ec(),Cc()});
