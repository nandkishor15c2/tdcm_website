// Mock Data — Pricing, Testimonials, Team

export const pricingPlans = [
    {
        name: 'Starter', slug: 'starter', description: 'For small teams getting started',
        monthlyPrice: 0, annualPrice: 0, currency: '₹',
        isPopular: false, badge: null, ctaText: 'Get Started Free', ctaHref: '#/signup',
        features: [
            { text: 'Community access', included: true },
            { text: '3 job postings / month', included: true },
            { text: 'Basic CRM dashboard', included: true },
            { text: 'Email support', included: true },
            { text: 'Marketing templates', included: true },
            { text: 'Dedicated account manager', included: false },
            { text: 'Custom integrations', included: false },
            { text: 'Priority support', included: false },
        ]
    },
    {
        name: 'Growth', slug: 'growth', description: 'For scaling businesses',
        monthlyPrice: 4999, annualPrice: 3999, currency: '₹',
        isPopular: true, badge: 'Most Popular', ctaText: 'Start Free Trial', ctaHref: '#/signup?plan=growth',
        features: [
            { text: 'Everything in Starter', included: true },
            { text: 'Unlimited job postings', included: true },
            { text: 'Advanced CRM with automation', included: true },
            { text: 'Marketing campaign tools', included: true },
            { text: 'Analytics dashboard', included: true },
            { text: 'Dedicated account manager', included: true },
            { text: 'Custom integrations', included: false },
            { text: 'White-label reports', included: false },
        ]
    },
    {
        name: 'Scale', slug: 'scale', description: 'For enterprise teams',
        monthlyPrice: 14999, annualPrice: 11999, currency: '₹',
        isPopular: false, badge: null, ctaText: 'Talk to Sales', ctaHref: '#/contact?intent=sales',
        features: [
            { text: 'Everything in Growth', included: true },
            { text: 'Custom integrations', included: true },
            { text: 'White-label reports', included: true },
            { text: 'Priority 24/7 support', included: true },
            { text: 'Dedicated success team', included: true },
            { text: 'Custom workflows', included: true },
            { text: 'API access', included: true },
            { text: 'SLA guarantee', included: true },
        ]
    },
];

export const faqs = [
    { q: 'How does the free Starter plan work?', a: 'The Starter plan gives you access to our community, basic CRM features, and up to 3 job postings per month. No credit card required — upgrade anytime as your needs grow.' },
    { q: 'Can I switch plans at any time?', a: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. Downgrades take effect at the next billing cycle.' },
    { q: 'Is there a contract or commitment?', a: 'No long-term contracts. Monthly plans are billed monthly. Annual plans offer a 20% discount and are billed yearly, but you can cancel anytime.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, UPI, net banking, and bank transfers for annual plans. Enterprise clients can also pay via invoice.' },
    { q: 'Do you offer custom enterprise plans?', a: 'Yes! Our Scale plan is our most comprehensive offering, but we also create fully custom plans for large organizations. Contact our sales team to discuss your requirements.' },
    { q: 'What kind of support is included?', a: 'Starter includes email support (48h response). Growth includes a dedicated account manager. Scale includes 24/7 priority support with guaranteed response times.' },
];

export const testimonials = [
    { name: 'Rajesh Kumar', role: 'CEO', company: 'TechVista Solutions', quote: 'TDCM transformed our hiring process. We went from 45-day average time-to-hire to just 12 days. The quality of candidates is consistently exceptional.', rating: 5, initials: 'RK' },
    { name: 'Sneha Patel', role: 'VP Marketing', company: 'GrowthStack', quote: 'Our ROAS improved by 280% within the first quarter of working with TDCM\'s marketing team. They don\'t just run campaigns — they build growth engines.', rating: 5, initials: 'SP' },
    { name: 'Arjun Menon', role: 'Founder', company: 'NexaWave', quote: 'The 0-to-90 program gave us the structure and clarity we desperately needed. From idea to first revenue in 60 days — I can\'t recommend it enough.', rating: 5, initials: 'AM' },
    { name: 'Divya Sharma', role: 'COO', company: 'ScaleUp India', quote: 'Implementing a CRM with TDCM was seamless. Our team adoption rate hit 94% in the first month — that\'s unheard of in our industry.', rating: 5, initials: 'DS' },
    { name: 'Vikram Joshi', role: 'Head of Sales', company: 'CloudBridge', quote: 'TDCM\'s recruitment team found us a VP of Sales in just 8 days. He\'s now been with us for a year and has doubled our revenue. Incredible.', rating: 5, initials: 'VJ' },
    { name: 'Anita Desai', role: 'CMO', company: 'FinEdge', quote: 'The quarterly health analysis service has become our most valuable external input. It\'s like having a world-class consulting firm on retainer.', rating: 5, initials: 'AD' },
];

export const teamMembers = [
    { name: 'Nandkishor Singh', title: 'Founder & CEO', bio: 'Serial entrepreneur with 15+ years in digital consulting. Built and scaled 3 successful ventures before founding TDCM.', initials: 'NS' },
    { name: 'Priya Sharma', title: 'Head of Marketing', bio: 'Ex-Google marketer with a passion for performance-driven growth. Managed ₹50Cr+ in ad spend across industries.', initials: 'PS' },
    { name: 'Rahul Verma', title: 'Head of Consultancy', bio: 'Strategy consultant turned startup mentor. Has guided 100+ startups through their first 90 days.', initials: 'RV' },
    { name: 'Amit Patel', title: 'CTO', bio: 'Engineering leader specializing in CRM architecture and business automation. Built systems processing 1M+ records daily.', initials: 'AP' },
];

export const companyStats = [
    { value: 500, suffix: '+', label: 'Clients Served' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 340, suffix: '%', label: 'Avg. Client ROI' },
];

export const trustedCompanies = [
    'TechVista', 'GrowthStack', 'NexaWave', 'ScaleUp India', 'CloudBridge',
    'FinEdge', 'DataPulse', 'InnoVenture', 'QuantumLeap', 'BrightPath',
    'TechVista', 'GrowthStack', 'NexaWave', 'ScaleUp India', 'CloudBridge',
    'FinEdge', 'DataPulse', 'InnoVenture', 'QuantumLeap', 'BrightPath',
];
