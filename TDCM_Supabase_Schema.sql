-- ═══════════════════════════════════════════════════════════════════════════
--  TDCM COMPANY — Complete Supabase CMS Database Schema
--  Version: 1.0 | March 2026
--  Run this entire file in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── EXTENSIONS ──────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";
create extension if not exists pg_trgm;    -- Full-text search
create extension if not exists unaccent;   -- Better text search


-- ═══════════════════════════════════════════════════════════════════════════
--  ADMIN USERS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.admin_users (
  id            uuid primary key default gen_random_uuid(),
  auth_user_id  uuid references auth.users(id) on delete cascade,
  name          text not null,
  email         text unique not null,
  role          text not null check (role in ('super_admin','editor','moderator')),
  avatar_url    text,
  bio           text,
  last_login_at timestamptz,
  is_active     boolean default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

comment on table public.admin_users is 'Admin portal users with role-based access control';
comment on column public.admin_users.role is 'super_admin: full access | editor: content only | moderator: community only';


-- ═══════════════════════════════════════════════════════════════════════════
--  SITE SETTINGS (Key-Value Store for Global Config)
-- ═══════════════════════════════════════════════════════════════════════════
create table public.site_settings (
  key         text primary key,
  value       jsonb not null,
  description text,
  updated_by  uuid references public.admin_users(id),
  updated_at  timestamptz default now()
);

comment on table public.site_settings is 'Global site configuration: brand info, social links, contact details';

-- Seed default settings
insert into public.site_settings (key, value, description) values
  ('company_name',      '"TDCM Company"',                                    'Legal company name'),
  ('tagline',           '"Dream Bold. Plan Smart. Hustle Hard & Celebrate Achievements"', 'Brand tagline'),
  ('contact_email',     '"hello@tdcm.in"',                                   'Primary contact email'),
  ('contact_phone',     '"+91 98765 43210"',                                 'Primary phone'),
  ('address',           '"Mumbai, Maharashtra, India"',                      'Registered address'),
  ('social_linkedin',   '"https://linkedin.com/company/tdcm"',               'LinkedIn URL'),
  ('social_twitter',    '"https://twitter.com/tdcmco"',                      'Twitter/X URL'),
  ('social_instagram',  '"https://instagram.com/tdcmco"',                    'Instagram URL'),
  ('social_youtube',    '"https://youtube.com/@tdcmco"',                     'YouTube URL'),
  ('notice_banner',     '{"enabled":true,"text":"Free Quarterly Business Health Analysis for new clients","cta_text":"Claim yours","cta_href":"/contact"}', 'Top notice banner'),
  ('analytics_id',      '"G-XXXXXXXXXX"',                                    'Google Analytics ID'),
  ('seo_defaults',      '{"title_suffix":" | TDCM Company","og_image":"/og-default.jpg","twitter_handle":"@tdcmco"}', 'Default SEO settings');


-- ═══════════════════════════════════════════════════════════════════════════
--  NAVIGATION
-- ═══════════════════════════════════════════════════════════════════════════
create table public.navigation (
  id          uuid primary key default gen_random_uuid(),
  location    text not null check (location in ('header','footer_col1','footer_col2','footer_col3','footer_col4')),
  label       text not null,
  href        text not null,
  parent_id   uuid references public.navigation(id),
  mega_group  text,    -- Group label for mega menu sections
  icon_name   text,    -- Lucide icon name
  description text,    -- For mega menu items
  sort_order  int default 0,
  is_active   boolean default true,
  opens_new   boolean default false,
  updated_by  uuid references public.admin_users(id),
  updated_at  timestamptz default now()
);

comment on table public.navigation is 'Dynamic navigation structure — header mega menu and footer columns';


-- ═══════════════════════════════════════════════════════════════════════════
--  PAGES (CMS — Structured JSON Sections)
-- ═══════════════════════════════════════════════════════════════════════════
create table public.pages (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,    -- 'home', 'about', 'contact', etc.
  title            text not null,
  sections         jsonb not null default '[]'::jsonb,
  meta_title       text,
  meta_description text,
  og_image_url     text,
  canonical_url    text,
  is_published     boolean default true,
  updated_by       uuid references public.admin_users(id),
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

comment on table public.pages is 'CMS pages — sections stored as typed JSON array, editable via admin portal';
comment on column public.pages.sections is
  'Array of section objects. Each has "type" field + type-specific fields. Types: hero|features_grid|stats|testimonials|cta_banner|text_image|faq|process_steps|service_cards|logo_bar|team|pricing|community_teaser|articles_teaser';

-- Seed homepage
insert into public.pages (slug, title, sections, meta_title, meta_description) values (
  'home',
  'Home',
  '[
    {
      "type": "hero",
      "headline": "Dream Bold. Plan Smart. Hustle Hard.",
      "headline_highlight": "Plan Smart.",
      "subheadline": "TDCM unites recruitment, marketing, CRM, and startup consultancy on one powerful platform — so your business grows faster, smarter, and with less friction.",
      "cta_primary": {"label": "Get Started Free", "href": "/contact"},
      "cta_secondary": {"label": "Watch demo", "href": "#demo"},
      "badge_text": "Trusted by 200+ growing businesses",
      "social_proof": {"rating": "4.9/5", "review_count": "380+"}
    },
    {
      "type": "logo_bar",
      "label": "Trusted by forward-thinking companies across India",
      "logos": []
    },
    {
      "type": "features_grid",
      "eyebrow": "What we offer",
      "headline": "Everything your business needs, on one platform",
      "subheadline": "From hiring top talent to launching marketing campaigns to managing every customer relationship.",
      "items": [
        {"title": "Services", "description": "Expert recruitment, marketing, and business solutions.", "icon": "users", "href": "/services"},
        {"title": "Startup Consultancy", "description": "Structured programs to take your startup from zero to momentum.", "icon": "trending-up", "href": "/consultancy", "featured": true},
        {"title": "Business Solutions", "description": "TDCM CRM — the relationship intelligence platform.", "icon": "grid", "href": "/crm"}
      ]
    },
    {
      "type": "stats",
      "items": [
        {"value": "200", "suffix": "+", "label": "Businesses accelerated"},
        {"value": "94", "suffix": "%", "label": "Client retention"},
        {"value": "50", "prefix": "₹", "suffix": "M+", "label": "Revenue generated"},
        {"value": "8", "label": "Years of excellence"}
      ]
    },
    {
      "type": "testimonials",
      "eyebrow": "What clients say",
      "headline": "Real results from real businesses",
      "items": []
    },
    {
      "type": "community_teaser",
      "headline": "Join 5,000+ business professionals",
      "subheadline": "The TDCM community is where founders, operators, and consultants share strategies.",
      "cta": {"label": "Join the Community Free", "href": "/community"}
    },
    {
      "type": "articles_teaser",
      "eyebrow": "Insights & Articles",
      "headline": "Strategies from the TDCM team",
      "count": 3
    },
    {
      "type": "cta_banner",
      "headline": "Start growing your business today",
      "subheadline": "Join 200+ businesses already using TDCM.",
      "cta_primary": {"label": "Get Started Free", "href": "/contact"},
      "show_email_form": true,
      "trust_notes": "No credit card required · Cancel anytime · Free onboarding call"
    }
  ]'::jsonb,
  'TDCM Company — Dream Bold. Plan Smart. Hustle Hard.',
  'TDCM unites recruitment, marketing, CRM, and startup consultancy on one platform.'
);


-- ═══════════════════════════════════════════════════════════════════════════
--  TESTIMONIALS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.testimonials (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  role        text not null,
  company     text,
  avatar_url  text,
  quote       text not null,
  rating      int default 5 check (rating between 1 and 5),
  is_featured boolean default false,
  sort_order  int default 0,
  is_active   boolean default true,
  created_at  timestamptz default now()
);

insert into public.testimonials (name, role, company, quote, rating, is_featured, sort_order) values
  ('Arjun Rao',       'Founder',        'HealthTech Startup',  'TDCM''s 0 to 90 plan gave us a clear roadmap. Within 3 months we had our first 10 paying customers.', 5, true, 1),
  ('Priya Mehta',     'CTO',            'SaaS Platform',       'Their recruitment service placed 6 engineers for us in under 3 weeks. Quality miles ahead of job boards.', 5, true, 2),
  ('Siddharth Kumar', 'CEO',            'Manufacturing Co.',   'The quarterly business health analysis is the most valuable 2 hours I spend every quarter.', 5, true, 3),
  ('Neha Kapoor',     'Marketing Dir.', 'D2C Brand',           'We doubled our inbound leads in 60 days with TDCM''s marketing service.', 5, false, 4),
  ('Rajesh Singh',    'VP Sales',       'B2B Logistics',       'The TDCM CRM replaced three separate tools. Sales team adoption was near instant.', 5, false, 5),
  ('Divya Gupta',     'Co-Founder',     'EdTech Startup',      'Go to Market Strategy with TDCM saved us 6 months of mistakes.', 5, false, 6);


-- ═══════════════════════════════════════════════════════════════════════════
--  CATEGORIES & TAGS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text unique not null,
  type        text not null check (type in ('article','community','both')),
  color       text default '#25666C',
  description text,
  sort_order  int default 0,
  is_active   boolean default true
);

insert into public.categories (name, slug, type, color) values
  ('GTM Strategy',       'gtm-strategy',       'article',    '#25666C'),
  ('Recruitment',        'recruitment',         'article',    '#0F766E'),
  ('Business Health',    'business-health',     'article',    '#1e7ab8'),
  ('Marketing',          'marketing',           'both',       '#D97706'),
  ('CRM & Sales',        'crm-sales',           'both',       '#7C3AED'),
  ('Startups',           'startups',            'both',       '#DC2626'),
  ('Product Launch',     'product-launch',      'article',    '#059669'),
  ('HR & People',        'hr-people',           'both',       '#DB2777'),
  ('Finance',            'finance',             'community',  '#0369A1'),
  ('General',            'general',             'community',  '#6B7280');

create table public.tags (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  slug       text unique not null,
  type       text not null check (type in ('article','community','both')),
  usage_count int default 0
);


-- ═══════════════════════════════════════════════════════════════════════════
--  SERVICES & CONSULTANCY PAGES
-- ═══════════════════════════════════════════════════════════════════════════
create table public.services (
  id                   uuid primary key default gen_random_uuid(),
  category             text not null check (category in ('service','consultancy','solution')),
  slug                 text unique not null,
  title                text not null,
  subtitle             text,
  description          text,
  icon_name            text,        -- Lucide icon name
  hero_headline        text,
  hero_subheadline     text,
  content_blocks       jsonb default '[]'::jsonb,
  inquiry_form_enabled boolean default true,
  inquiry_form_title   text default 'Get in touch',
  sort_order           int default 0,
  is_active            boolean default true,
  is_featured          boolean default false,
  seo_meta             jsonb default '{}'::jsonb,
  created_at           timestamptz default now(),
  updated_at           timestamptz default now(),
  updated_by           uuid references public.admin_users(id)
);

comment on column public.services.content_blocks is
  'Array of content blocks: {type: "features"|"process"|"metrics"|"faq"|"cta", ...fields}';

insert into public.services (category, slug, title, subtitle, description, sort_order, is_featured) values
  ('service',      'recruitment',              'Recruitment Services',            'Find and place top talent fast',            'End-to-end talent acquisition for growing teams', 1, false),
  ('service',      'marketing',                'Marketing Services',              'Data-driven campaigns that convert',         'Full-funnel marketing backed by data',              2, false),
  ('solution',     'crm',                      'Business Solutions (CRM)',        'The relationship intelligence platform',     'Manage every customer relationship in one place',  3, true),
  ('consultancy',  'go-to-market',             'Go To Market Strategy',           'Launch frameworks that capture markets',     'Position and launch your product for maximum impact', 4, false),
  ('consultancy',  'product-launch',           'Product Launch Strategy',         'Systematic approach to successful launches', 'Step-by-step launch framework with KPIs',         5, false),
  ('consultancy',  '0-to-90-plan',             '0 to 90 Plan',                    '90-day action plan for rapid growth',        'From zero to traction in 90 structured days',    6, true),
  ('consultancy',  '0-to-90-training',         '0 to 90 Day Business Training',   'Intensive business training curriculum',      'Weekly sessions with senior advisors',            7, false),
  ('consultancy',  'quarterly-health-analysis','Quarterly Business Health Analysis', 'Deep-dive diagnostics every quarter',    'Comprehensive business scorecard and action plan',8, false);


-- ═══════════════════════════════════════════════════════════════════════════
--  ARTICLES
-- ═══════════════════════════════════════════════════════════════════════════
create table public.articles (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,
  title            text not null,
  excerpt          text,
  content          text,        -- TipTap HTML or JSON
  cover_image_url  text,
  author_id        uuid references public.admin_users(id),
  category_id      uuid references public.categories(id),
  status           text default 'draft' check (status in ('draft','scheduled','published','archived')),
  published_at     timestamptz,
  scheduled_for    timestamptz,
  reading_time_mins int,
  featured         boolean default false,
  views_count      int default 0,
  seo_meta         jsonb default '{}'::jsonb,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

create table public.article_tags (
  article_id uuid references public.articles(id) on delete cascade,
  tag_id     uuid references public.tags(id) on delete cascade,
  primary key (article_id, tag_id)
);

create table public.related_articles (
  article_id         uuid references public.articles(id) on delete cascade,
  related_article_id uuid references public.articles(id) on delete cascade,
  sort_order         int default 0,
  primary key (article_id, related_article_id)
);

-- Full-text search index
create index articles_fts_idx on public.articles
  using gin(to_tsvector('english', coalesce(title,'') || ' ' || coalesce(excerpt,'') || ' ' || coalesce(content,'')));


-- ═══════════════════════════════════════════════════════════════════════════
--  USER PROFILES (Community Members)
-- ═══════════════════════════════════════════════════════════════════════════
create table public.user_profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  username        text unique,
  display_name    text,
  bio             text,
  company         text,
  job_title       text,
  avatar_url      text,
  website_url     text,
  linkedin_url    text,
  twitter_url     text,
  is_verified     boolean default false,
  is_banned       boolean default false,
  ban_reason      text,
  followers_count int default 0,
  following_count int default 0,
  posts_count     int default 0,
  joined_at       timestamptz default now(),
  updated_at      timestamptz default now()
);

create table public.user_follows (
  follower_id  uuid references public.user_profiles(id) on delete cascade,
  following_id uuid references public.user_profiles(id) on delete cascade,
  created_at   timestamptz default now(),
  primary key (follower_id, following_id),
  check (follower_id != following_id)
);


-- ═══════════════════════════════════════════════════════════════════════════
--  COMMUNITY POSTS & COMMENTS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.community_posts (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid references public.user_profiles(id) on delete cascade,
  content        text not null,
  rich_content   jsonb,                 -- TipTap JSON (optional)
  image_urls     text[] default '{}',
  category_id    uuid references public.categories(id),
  tags           text[] default '{}',
  likes_count    int default 0,
  comments_count int default 0,
  views_count    int default 0,
  is_pinned      boolean default false,
  is_flagged     boolean default false,
  is_hidden      boolean default false,
  pin_note       text,                  -- Admin note for why it's pinned
  flag_reason    text,
  created_at     timestamptz default now(),
  updated_at     timestamptz default now()
);

-- Full-text search
create index posts_fts_idx on public.community_posts
  using gin(to_tsvector('english', coalesce(content,'')));

create table public.community_comments (
  id                uuid primary key default gen_random_uuid(),
  post_id           uuid references public.community_posts(id) on delete cascade,
  user_id           uuid references public.user_profiles(id) on delete cascade,
  parent_comment_id uuid references public.community_comments(id) on delete cascade,
  content           text not null,
  likes_count       int default 0,
  is_flagged        boolean default false,
  is_hidden         boolean default false,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

create table public.post_likes (
  user_id    uuid references public.user_profiles(id) on delete cascade,
  post_id    uuid references public.community_posts(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, post_id)
);

create table public.comment_likes (
  user_id     uuid references public.user_profiles(id) on delete cascade,
  comment_id  uuid references public.community_comments(id) on delete cascade,
  created_at  timestamptz default now(),
  primary key (user_id, comment_id)
);


-- ═══════════════════════════════════════════════════════════════════════════
--  NOTIFICATIONS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.notifications (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references public.user_profiles(id) on delete cascade,
  type        text not null check (type in ('post_like','comment','comment_like','follow','mention','system')),
  actor_id    uuid references public.user_profiles(id) on delete set null,
  post_id     uuid references public.community_posts(id) on delete cascade,
  comment_id  uuid references public.community_comments(id) on delete cascade,
  message     text,
  href        text,
  is_read     boolean default false,
  created_at  timestamptz default now()
);

create index notifs_user_idx on public.notifications(user_id, is_read, created_at desc);


-- ═══════════════════════════════════════════════════════════════════════════
--  LEADS (Contact Forms & Inquiries)
-- ═══════════════════════════════════════════════════════════════════════════
create table public.leads (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  email            text not null,
  company          text,
  phone            text,
  service_interest text,     -- service slug
  message          text,
  source_page      text,     -- URL path of form submission
  source_type      text check (source_type in ('contact','service_inquiry','consultation','newsletter','cta')),
  status           text default 'new' check (status in ('new','contacted','qualified','proposal_sent','won','lost')),
  admin_notes      text,
  assigned_to      uuid references public.admin_users(id),
  follow_up_at     timestamptz,
  utm_source       text,
  utm_medium       text,
  utm_campaign     text,
  ip_address       inet,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

create index leads_status_idx on public.leads(status, created_at desc);
create index leads_email_idx on public.leads(email);


-- ═══════════════════════════════════════════════════════════════════════════
--  MEDIA LIBRARY
-- ═══════════════════════════════════════════════════════════════════════════
create table public.media (
  id           uuid primary key default gen_random_uuid(),
  filename     text not null,
  original_name text not null,
  url          text not null,
  storage_path text not null,
  mime_type    text not null,
  size_bytes   bigint,
  width        int,
  height       int,
  alt_text     text,
  folder       text default '/',
  uploaded_by  uuid references public.admin_users(id),
  created_at   timestamptz default now()
);

create index media_folder_idx on public.media(folder, created_at desc);


-- ═══════════════════════════════════════════════════════════════════════════
--  PRICING PLANS (CMS-managed)
-- ═══════════════════════════════════════════════════════════════════════════
create table public.pricing_plans (
  id             uuid primary key default gen_random_uuid(),
  name           text not null,
  slug           text unique not null,
  tier           int not null,      -- Sort order: 1=Starter, 2=Growth, 3=Scale
  monthly_price  numeric(10,2) not null default 0,
  annual_price   numeric(10,2),
  currency       text default 'INR',
  description    text,
  features       jsonb not null default '[]'::jsonb,    -- [{text, included: bool}]
  is_popular      boolean default false,
  badge_text     text,              -- e.g. "Most popular"
  cta_text       text default 'Get started',
  cta_href       text default '/contact',
  is_active      boolean default true,
  updated_at     timestamptz default now()
);

insert into public.pricing_plans (name, slug, tier, monthly_price, annual_price, description, is_popular, features) values
  ('Starter', 'starter', 1, 0, 0, 'Perfect for solo founders getting started',
   false,
   '[{"text":"TDCM CRM — Free forever","included":true},{"text":"Community access","included":true},{"text":"3 articles per month","included":true},{"text":"Basic analytics","included":true},{"text":"Consultancy programs","included":false},{"text":"Dedicated account manager","included":false}]'::jsonb),
  ('Growth', 'growth', 2, 4999, 3999, 'For growing teams ready to scale',
   true,
   '[{"text":"Everything in Starter","included":true},{"text":"1 Consultancy program/quarter","included":true},{"text":"Marketing campaign setup","included":true},{"text":"Quarterly Health Analysis","included":true},{"text":"Priority support","included":true},{"text":"Recruitment services","included":false}]'::jsonb),
  ('Scale', 'scale', 3, 14999, 11999, 'For ambitious companies going big',
   false,
   '[{"text":"Everything in Growth","included":true},{"text":"Full recruitment service","included":true},{"text":"All consultancy programs","included":true},{"text":"Dedicated account manager","included":true},{"text":"Custom SLA & reporting","included":true},{"text":"White-glove onboarding","included":true}]'::jsonb);


-- ═══════════════════════════════════════════════════════════════════════════
--  NEWSLETTER SUBSCRIBERS
-- ═══════════════════════════════════════════════════════════════════════════
create table public.newsletter_subscribers (
  id           uuid primary key default gen_random_uuid(),
  email        text unique not null,
  name         text,
  source       text,    -- which page/section they subscribed from
  is_active    boolean default true,
  confirmed_at timestamptz,
  created_at   timestamptz default now()
);


-- ═══════════════════════════════════════════════════════════════════════════
--  FUNCTIONS & TRIGGERS
-- ═══════════════════════════════════════════════════════════════════════════

-- Auto-update updated_at on any change
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Apply to all tables with updated_at
create trigger tr_admin_users_updated_at     before update on public.admin_users     for each row execute procedure public.handle_updated_at();
create trigger tr_pages_updated_at           before update on public.pages           for each row execute procedure public.handle_updated_at();
create trigger tr_services_updated_at        before update on public.services        for each row execute procedure public.handle_updated_at();
create trigger tr_articles_updated_at        before update on public.articles        for each row execute procedure public.handle_updated_at();
create trigger tr_user_profiles_updated_at   before update on public.user_profiles   for each row execute procedure public.handle_updated_at();
create trigger tr_community_posts_updated_at before update on public.community_posts for each row execute procedure public.handle_updated_at();
create trigger tr_leads_updated_at           before update on public.leads           for each row execute procedure public.handle_updated_at();
create trigger tr_pricing_updated_at         before update on public.pricing_plans   for each row execute procedure public.handle_updated_at();

-- Auto-create user profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.user_profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email,'@',1)),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger tr_on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Increment/decrement likes_count atomically
create or replace function public.toggle_post_like(p_post_id uuid, p_user_id uuid)
returns jsonb language plpgsql security definer as $$
declare
  v_liked boolean;
begin
  if exists (select 1 from public.post_likes where post_id = p_post_id and user_id = p_user_id) then
    delete from public.post_likes where post_id = p_post_id and user_id = p_user_id;
    update public.community_posts set likes_count = greatest(0, likes_count - 1) where id = p_post_id;
    v_liked := false;
  else
    insert into public.post_likes (post_id, user_id) values (p_post_id, p_user_id);
    update public.community_posts set likes_count = likes_count + 1 where id = p_post_id;
    v_liked := true;
  end if;
  return jsonb_build_object('liked', v_liked);
end;
$$;

-- Update comment count
create or replace function public.handle_comment_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    update public.community_posts set comments_count = comments_count + 1 where id = new.post_id;
  elsif tg_op = 'DELETE' then
    update public.community_posts set comments_count = greatest(0, comments_count - 1) where id = old.post_id;
  end if;
  return coalesce(new, old);
end;
$$;

create trigger tr_post_comment_count
  after insert or delete on public.community_comments
  for each row execute procedure public.handle_comment_count();

-- Update follower/following counts
create or replace function public.handle_follow_count()
returns trigger language plpgsql as $$
begin
  if tg_op = 'INSERT' then
    update public.user_profiles set following_count = following_count + 1 where id = new.follower_id;
    update public.user_profiles set followers_count = followers_count + 1 where id = new.following_id;
  elsif tg_op = 'DELETE' then
    update public.user_profiles set following_count = greatest(0, following_count - 1) where id = old.follower_id;
    update public.user_profiles set followers_count = greatest(0, followers_count - 1) where id = old.following_id;
  end if;
  return coalesce(new, old);
end;
$$;

create trigger tr_follow_counts
  after insert or delete on public.user_follows
  for each row execute procedure public.handle_follow_count();

-- Calculate reading time on article save
create or replace function public.calculate_reading_time()
returns trigger language plpgsql as $$
declare
  word_count int;
begin
  word_count := array_length(string_to_array(regexp_replace(coalesce(new.content,''), '<[^>]+>', '', 'g'), ' '), 1);
  new.reading_time_mins := greatest(1, round(word_count / 200.0));
  return new;
end;
$$;

create trigger tr_article_reading_time
  before insert or update on public.articles
  for each row execute procedure public.calculate_reading_time();


-- ═══════════════════════════════════════════════════════════════════════════
--  ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════════════════════════════════════════════════

-- Enable RLS on all tables
alter table public.admin_users           enable row level security;
alter table public.site_settings         enable row level security;
alter table public.navigation            enable row level security;
alter table public.pages                 enable row level security;
alter table public.services              enable row level security;
alter table public.testimonials          enable row level security;
alter table public.categories            enable row level security;
alter table public.tags                  enable row level security;
alter table public.articles              enable row level security;
alter table public.article_tags          enable row level security;
alter table public.user_profiles         enable row level security;
alter table public.user_follows          enable row level security;
alter table public.community_posts       enable row level security;
alter table public.community_comments    enable row level security;
alter table public.post_likes            enable row level security;
alter table public.comment_likes         enable row level security;
alter table public.notifications         enable row level security;
alter table public.leads                 enable row level security;
alter table public.media                 enable row level security;
alter table public.pricing_plans         enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Helper: check if current user is an admin
create or replace function public.is_admin()
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from public.admin_users
    where auth_user_id = auth.uid() and is_active = true
  );
$$;

-- Helper: check admin role
create or replace function public.has_role(p_role text)
returns boolean language sql security definer stable as $$
  select exists (
    select 1 from public.admin_users
    where auth_user_id = auth.uid() and role = p_role and is_active = true
  );
$$;

-- ── PUBLIC READ POLICIES ──────────────────────────────────────────────────
create policy "Public read pages"         on public.pages          for select using (is_published = true);
create policy "Public read services"      on public.services       for select using (is_active = true);
create policy "Public read testimonials"  on public.testimonials   for select using (is_active = true);
create policy "Public read categories"    on public.categories     for select using (is_active = true);
create policy "Public read tags"          on public.tags           for select using (true);
create policy "Public read articles"      on public.articles       for select using (status = 'published');
create policy "Public read article_tags"  on public.article_tags   for select using (true);
create policy "Public read nav"           on public.navigation     for select using (is_active = true);
create policy "Public read settings"      on public.site_settings  for select using (true);
create policy "Public read pricing"       on public.pricing_plans  for select using (is_active = true);
create policy "Public read profiles"      on public.user_profiles  for select using (is_banned = false);

-- ── COMMUNITY POLICIES ───────────────────────────────────────────────────
create policy "Read visible posts"   on public.community_posts    for select using (is_hidden = false);
create policy "Read visible comments" on public.community_comments for select using (is_hidden = false);
create policy "Read post likes"      on public.post_likes          for select using (true);
create policy "Read comment likes"   on public.comment_likes       for select using (true);
create policy "Read follows"         on public.user_follows        for select using (true);

-- Users can write their own posts/comments
create policy "Insert own post"      on public.community_posts    for insert with check (user_id = auth.uid());
create policy "Update own post"      on public.community_posts    for update using (user_id = auth.uid());
create policy "Delete own post"      on public.community_posts    for delete using (user_id = auth.uid() or public.is_admin());
create policy "Insert own comment"   on public.community_comments for insert with check (user_id = auth.uid());
create policy "Update own comment"   on public.community_comments for update using (user_id = auth.uid());
create policy "Delete own comment"   on public.community_comments for delete using (user_id = auth.uid() or public.is_admin());

-- Users can like/follow
create policy "Manage own likes"     on public.post_likes         for all using (user_id = auth.uid());
create policy "Manage own c_likes"   on public.comment_likes      for all using (user_id = auth.uid());
create policy "Manage own follows"   on public.user_follows       for all using (follower_id = auth.uid());

-- Users read their own notifications
create policy "Own notifications"    on public.notifications      for all using (user_id = auth.uid());

-- Users update their own profile
create policy "Update own profile"   on public.user_profiles      for update using (id = auth.uid());

-- ── LEAD SUBMISSION (anonymous allowed) ──────────────────────────────────
create policy "Anyone can submit lead" on public.leads for insert with check (true);
create policy "Anyone can subscribe"   on public.newsletter_subscribers for insert with check (true);

-- ── ADMIN WRITE POLICIES ─────────────────────────────────────────────────
create policy "Admin all pages"       on public.pages          for all using (public.is_admin());
create policy "Admin all services"    on public.services       for all using (public.is_admin());
create policy "Admin all testimonials" on public.testimonials  for all using (public.is_admin());
create policy "Admin all categories"  on public.categories     for all using (public.is_admin());
create policy "Admin all tags"        on public.tags           for all using (public.is_admin());
create policy "Admin all articles"    on public.articles       for all using (public.is_admin());
create policy "Admin all nav"         on public.navigation     for all using (public.is_admin());
create policy "Admin all settings"    on public.site_settings  for all using (public.is_admin());
create policy "Admin all pricing"     on public.pricing_plans  for all using (public.is_admin());
create policy "Admin all media"       on public.media          for all using (public.is_admin());
create policy "Admin all leads"       on public.leads          for select, update using (public.is_admin());
create policy "Admin all newsletter"  on public.newsletter_subscribers for select, update using (public.is_admin());
create policy "Admin all users"       on public.user_profiles  for all using (public.is_admin());
create policy "Admin all posts"       on public.community_posts for all using (public.is_admin());
create policy "Admin all comments"    on public.community_comments for all using (public.is_admin());
create policy "Admin manage admins"   on public.admin_users    for all using (public.has_role('super_admin'));
create policy "Admin read own"        on public.admin_users    for select using (auth_user_id = auth.uid());


-- ═══════════════════════════════════════════════════════════════════════════
--  STORAGE BUCKETS
-- ═══════════════════════════════════════════════════════════════════════════
-- Run these in Supabase dashboard or via API:
-- insert into storage.buckets (id, name, public) values
--   ('avatars',   'avatars',   true),
--   ('media',     'media',     true),
--   ('articles',  'articles',  true);

-- Storage policies (example for media bucket):
-- create policy "Public read media"    on storage.objects for select using (bucket_id = 'media');
-- create policy "Admin upload media"   on storage.objects for insert using (bucket_id = 'media' and public.is_admin());
-- create policy "Users upload avatars" on storage.objects for insert using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);


-- ═══════════════════════════════════════════════════════════════════════════
--  HELPFUL VIEWS
-- ═══════════════════════════════════════════════════════════════════════════

-- Published articles with author info
create view public.v_published_articles as
  select
    a.id, a.slug, a.title, a.excerpt, a.cover_image_url,
    a.published_at, a.reading_time_mins, a.views_count, a.featured,
    a.seo_meta,
    c.name as category_name, c.slug as category_slug, c.color as category_color,
    u.name as author_name, u.avatar_url as author_avatar
  from public.articles a
  left join public.categories c on a.category_id = c.id
  left join public.admin_users u on a.author_id = u.id
  where a.status = 'published'
  order by a.published_at desc;

-- Community posts with user info
create view public.v_community_feed as
  select
    p.id, p.content, p.image_urls, p.tags,
    p.likes_count, p.comments_count, p.views_count,
    p.is_pinned, p.created_at,
    c.name as category_name, c.color as category_color,
    u.id as user_id, u.display_name, u.username, u.avatar_url,
    u.company, u.is_verified
  from public.community_posts p
  left join public.user_profiles u on p.user_id = u.id
  left join public.categories c on p.category_id = c.id
  where p.is_hidden = false
  order by p.is_pinned desc, p.created_at desc;

-- Lead summary for admin dashboard
create view public.v_lead_stats as
  select
    count(*) filter (where status = 'new')           as new_leads,
    count(*) filter (where status = 'contacted')     as contacted,
    count(*) filter (where status = 'qualified')     as qualified,
    count(*) filter (where created_at > now() - interval '7 days') as last_7_days,
    count(*) filter (where created_at > now() - interval '30 days') as last_30_days,
    count(*) as total
  from public.leads;


-- ═══════════════════════════════════════════════════════════════════════════
--  FULL-TEXT SEARCH FUNCTION
-- ═══════════════════════════════════════════════════════════════════════════
create or replace function public.search_all(query text)
returns table (
  type        text,
  id          uuid,
  title       text,
  excerpt     text,
  href        text,
  image_url   text,
  relevance   float
) language sql stable as $$
  -- Search articles
  select
    'article'::text,
    a.id,
    a.title,
    a.excerpt,
    '/articles/' || a.slug,
    a.cover_image_url,
    ts_rank(to_tsvector('english', a.title || ' ' || coalesce(a.excerpt,'')), plainto_tsquery('english', query))::float
  from public.articles a
  where a.status = 'published'
    and to_tsvector('english', a.title || ' ' || coalesce(a.excerpt,'') || ' ' || coalesce(a.content,'')) @@ plainto_tsquery('english', query)
  union all
  -- Search community posts
  select
    'post'::text,
    p.id,
    left(p.content, 80) || '...',
    null,
    '/community/post/' || p.id,
    null,
    ts_rank(to_tsvector('english', p.content), plainto_tsquery('english', query))::float
  from public.community_posts p
  where p.is_hidden = false
    and to_tsvector('english', p.content) @@ plainto_tsquery('english', query)
  order by relevance desc
  limit 20;
$$;


-- ═══════════════════════════════════════════════════════════════════════════
--  INDEXES (Performance)
-- ═══════════════════════════════════════════════════════════════════════════
create index idx_articles_status_published  on public.articles(status, published_at desc) where status = 'published';
create index idx_articles_category         on public.articles(category_id);
create index idx_articles_author           on public.articles(author_id);
create index idx_articles_featured         on public.articles(featured) where featured = true;
create index idx_posts_user                on public.community_posts(user_id, created_at desc);
create index idx_posts_category            on public.community_posts(category_id);
create index idx_posts_pinned              on public.community_posts(is_pinned, created_at desc);
create index idx_comments_post             on public.community_comments(post_id, created_at);
create index idx_notifications_unread      on public.notifications(user_id, is_read, created_at desc) where is_read = false;
create index idx_user_profiles_username    on public.user_profiles(username);
create index idx_services_category        on public.services(category, sort_order);
create index idx_leads_created            on public.leads(created_at desc);

-- ═══════════════════════════════════════════════════════════════════════════
--  REALTIME (Enable for community features)
-- ═══════════════════════════════════════════════════════════════════════════
-- Run in Supabase dashboard: Realtime > Tables
-- Enable for: notifications, community_posts, community_comments

-- ═══════════════════════════════════════════════════════════════════════════
--  END OF SCHEMA
--  Total tables: 19 | Views: 3 | Functions: 8 | Triggers: 11
-- ═══════════════════════════════════════════════════════════════════════════
