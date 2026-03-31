// ═══════════════════════════════════════════════════════════
// TDCM Admin — Mock Data
// ═══════════════════════════════════════════════════════════

export const adminUsers = [
    { id: 'u1', name: 'Rajesh Kumar', email: 'rajesh@tdcm.co', role: 'super_admin', initials: 'RK', lastLogin: '2 hours ago', isActive: true },
    { id: 'u2', name: 'Priya Sharma', email: 'priya@tdcm.co', role: 'editor', initials: 'PS', lastLogin: '5 hours ago', isActive: true },
    { id: 'u3', name: 'Amit Patel', email: 'amit@tdcm.co', role: 'moderator', initials: 'AP', lastLogin: '1 day ago', isActive: true },
    { id: 'u4', name: 'Neha Gupta', email: 'neha@tdcm.co', role: 'editor', initials: 'NG', lastLogin: '3 days ago', isActive: false },
];


export const bookings = [
    { id: 'B001', clientName: 'Arjun Mehta', email: 'arjun@startup.io', phone: '+91 98765 43210', date: 'Sat, 15 Mar 2026', time: '10:00 AM', status: 'upcoming', paid: true, topic: 'Market expansion strategy for SaaS product' },
    { id: 'B002', clientName: 'Sneha Reddy', email: 'sneha@techflow.in', phone: '+91 87654 32109', date: 'Mon, 17 Mar 2026', time: '2:00 PM', status: 'upcoming', paid: true, topic: 'Performance marketing budget allocation' },
    { id: 'B003', clientName: 'Pooja Desai', email: 'pooja@freshstart.co', phone: '+91 65432 10987', date: 'Fri, 7 Mar 2026', time: '11:30 AM', status: 'completed', paid: true, topic: 'Go-to-market strategy for D2C brand' },
    { id: 'B004', clientName: 'Deepak Rao', email: 'deepak@scaleup.co', phone: '+91 32109 87654', date: 'Wed, 5 Mar 2026', time: '3:30 PM', status: 'completed', paid: true, topic: 'CRM implementation roadmap' },
    { id: 'B005', clientName: 'Rahul Joshi', email: 'rahul@cloudbyte.in', phone: '+91 54321 09876', date: 'Thu, 6 Mar 2026', time: '10:00 AM', status: 'cancelled', paid: false, topic: 'Recruitment strategy' },
];

export const adminArticles = [
    { id: 'A001', title: 'Top 10 Recruitment Strategies for 2026', author: 'Priya Sharma', category: 'Recruitment', status: 'published', publishedAt: '2026-03-08', views: 1420 },
    { id: 'A002', title: 'How Performance Marketing is Changing', author: 'Rajesh Kumar', category: 'Marketing', status: 'published', publishedAt: '2026-03-05', views: 890 },
    { id: 'A003', title: 'The Future of CRM Platforms', author: 'Priya Sharma', category: 'Technology', status: 'draft', publishedAt: null, views: 0 },
    { id: 'A004', title: 'Building a Startup from Zero to Revenue', author: 'Rajesh Kumar', category: 'Consultancy', status: 'scheduled', publishedAt: '2026-03-20', views: 0 },
    { id: 'A005', title: '5 Mistakes Startups Make with Hiring', author: 'Priya Sharma', category: 'Recruitment', status: 'published', publishedAt: '2026-02-28', views: 2103 },
    { id: 'A006', title: 'Digital Marketing Budget Guide', author: 'Rajesh Kumar', category: 'Marketing', status: 'archived', publishedAt: '2026-01-15', views: 3200 },
];

export const adminPages = [
    { slug: 'home', title: 'Homepage', lastUpdated: '2026-03-10', isPublished: true, sections: 8 },
    { slug: 'about', title: 'About Us', lastUpdated: '2026-03-08', isPublished: true, sections: 5 },
    { slug: 'contact', title: 'Contact', lastUpdated: '2026-03-06', isPublished: true, sections: 3 },
    { slug: 'pricing', title: 'Pricing', lastUpdated: '2026-03-09', isPublished: true, sections: 4 },
];

export const communityPosts = [
    { id: 'P001', author: 'JohnDoe', authorInitials: 'JD', content: 'Just launched our new product! Looking for beta testers in the community.', likes: 24, comments: 8, isPinned: true, isHidden: false, isFlagged: false, createdAt: '2 hours ago' },
    { id: 'P002', author: 'SarahM', authorInitials: 'SM', content: 'Has anyone tried TDCM recruitment services? What was your experience?', likes: 12, comments: 5, isPinned: false, isHidden: false, isFlagged: false, createdAt: '5 hours ago' },
    { id: 'P003', author: 'TechGuru99', authorInitials: 'TG', content: 'SPAM: Buy cheap followers now! Visit our link...', likes: 0, comments: 1, isPinned: false, isHidden: false, isFlagged: true, createdAt: '8 hours ago' },
    { id: 'P004', author: 'StartupSam', authorInitials: 'SS', content: 'Our company grew 300% after the TDCM consultancy program. Highly recommend!', likes: 56, comments: 15, isPinned: false, isHidden: false, isFlagged: false, createdAt: '1 day ago' },
    { id: 'P005', author: 'AngryUser', authorInitials: 'AU', content: 'This platform is terrible. Offensive content removed by moderator.', likes: 0, comments: 3, isPinned: false, isHidden: true, isFlagged: true, createdAt: '2 days ago' },
];

export const communityMembers = [
    { id: 'M001', name: 'John Doe', username: 'JohnDoe', email: 'john@example.com', joined: '2026-01-15', posts: 12, isBanned: false },
    { id: 'M002', name: 'Sarah Miller', username: 'SarahM', email: 'sarah@example.com', joined: '2026-02-01', posts: 8, isBanned: false },
    { id: 'M003', name: 'Tech Guru', username: 'TechGuru99', email: 'tech@spam.com', joined: '2026-03-09', posts: 1, isBanned: false },
    { id: 'M004', name: 'Sam Patel', username: 'StartupSam', email: 'sam@startup.io', joined: '2025-12-20', posts: 24, isBanned: false },
    { id: 'M005', name: 'Angry User', username: 'AngryUser', email: 'angry@mail.com', joined: '2026-03-01', posts: 3, isBanned: true },
];

export const mediaFiles = [
    { id: 'MD001', name: 'hero-banner.jpg', type: 'image/jpeg', size: '2.4 MB', uploadedAt: '2026-03-10', uploadedBy: 'Priya Sharma' },
    { id: 'MD002', name: 'team-photo.png', type: 'image/png', size: '1.8 MB', uploadedAt: '2026-03-08', uploadedBy: 'Rajesh Kumar' },
    { id: 'MD003', name: 'case-study.pdf', type: 'application/pdf', size: '540 KB', uploadedAt: '2026-03-05', uploadedBy: 'Priya Sharma' },
    { id: 'MD004', name: 'logo-dark.svg', type: 'image/svg', size: '12 KB', uploadedAt: '2026-02-20', uploadedBy: 'Rajesh Kumar' },
    { id: 'MD005', name: 'product-demo.mp4', type: 'video/mp4', size: '15.2 MB', uploadedAt: '2026-03-03', uploadedBy: 'Amit Patel' },
    { id: 'MD006', name: 'recruitment-guide.pdf', type: 'application/pdf', size: '1.1 MB', uploadedAt: '2026-02-15', uploadedBy: 'Priya Sharma' },
];

export const siteSettings = [
    { key: 'company_name', value: 'TDCM Company', group: 'Company Info' },
    { key: 'company_tagline', value: 'Dream Bold. Plan Smart. Hustle Hard.', group: 'Company Info' },
    { key: 'contact_email', value: 'hello@tdcm.co', group: 'Contact' },
    { key: 'contact_phone', value: '+91 98765 43210', group: 'Contact' },
    { key: 'contact_address', value: 'Jaipur, Rajasthan, India', group: 'Contact' },
    { key: 'social_linkedin', value: 'https://linkedin.com/company/tdcm', group: 'Social Links' },
    { key: 'social_twitter', value: 'https://twitter.com/tdcmco', group: 'Social Links' },
    { key: 'social_instagram', value: 'https://instagram.com/tdcmco', group: 'Social Links' },
    { key: 'notice_banner_active', value: 'true', group: 'Notice Banner' },
    { key: 'notice_banner_text', value: '🚀 New: Book a 1-on-1 session with our founder!', group: 'Notice Banner' },
    { key: 'ga_tracking_id', value: 'G-XXXXXXXXXX', group: 'Analytics' },
    { key: 'meta_title', value: 'TDCM Company — 360° Business Building Brand', group: 'SEO Defaults' },
    { key: 'meta_description', value: 'Expert recruitment, performance marketing, and startup consultancy services.', group: 'SEO Defaults' },
];

export const dashboardStats = {

    publishedArticles: 3,
    communityPosts: 142,
    newMembers30d: 34,
    bookingsUpcoming: 2,
    bookingsCompleted: 12,
    revenue30d: 60000,
};
