# TDCM Company — Product Architecture Document

> **Scope:** Page architecture, data models, and user flows for the TDCM website platform.
> No code, no UI decisions, no implementation choices.
> Version 1.0 — March 2026

---

## Table of Contents

1. [Actors & Permissions](#1-actors--permissions)
2. [Page Architecture](#2-page-architecture)
   - 2.1 [Public Pages](#21-public-pages)
   - 2.2 [Authentication Pages](#22-authentication-pages)
   - 2.3 [Authenticated User Pages](#23-authenticated-user-pages)
   - 2.4 [Admin Pages](#24-admin-pages)
3. [Data Models](#3-data-models)
4. [User Flows](#4-user-flows)
5. [Access Control Matrix](#5-access-control-matrix)
6. [Route Index](#6-route-index)

---

## 1. Actors & Permissions

| Actor | Description | Auth State |
|---|---|---|
| **Visitor** | Any unauthenticated user browsing the site | Anonymous |
| **Member** | Registered community user with a profile | Authenticated |
| **Editor** | Admin team member who manages content (articles, pages, services) | Authenticated + Role |
| **Moderator** | Admin team member who manages community posts and users | Authenticated + Role |
| **Super Admin** | Full-access operator — manages all content, team, leads, and settings | Authenticated + Role |

**Role hierarchy:** `Super Admin ⊃ Editor + Moderator ⊃ Member ⊃ Visitor`

All admin roles share the `/admin/*` namespace. A Super Admin can perform every action an Editor or Moderator can. An Editor cannot access community moderation. A Moderator cannot access page or article editing.

---

## 2. Page Architecture

### 2.1 Public Pages

---

#### `/` — Homepage

**Visible to:** Everyone (Visitor, Member, any Admin)

**Content:**
- Notice banner (dismissable promotional message from CMS)
- Navigation with mega-menus for Services and Consultancy
- Hero section: headline, subheadline, primary and secondary CTAs, social proof (rating, review count)
- Trusted-by logo marquee (company logos from CMS)
- Products overview section: Services, Startup Consultancy, Business Solutions
- Features section: tabbed breakdown of each core module
- Stats section: key business metrics
- Process section: step-by-step how-it-works
- Testimonials: featured client quotes
- Community teaser: preview of recent posts, invitation to join
- Articles teaser: 3 most recent published articles
- CTA banner: email capture form
- Footer: navigation, social links, legal links

**Actions:**

| Action | Leads To |
|---|---|
| Click primary CTA ("Get Started Free") | `/contact` |
| Click "Watch demo" | Anchored section on current page or `/demo` |
| Click service/product card | Respective service page |
| Click "Join the Community" | `/community` (Member) or `/signup` (Visitor) |
| Click "View all articles" | `/articles` |
| Submit email in CTA form | Creates `newsletter_subscriber` record; shows confirmation state |
| Click article card | `/articles/[slug]` |
| Click "Sign in" in nav | `/login` |
| Click "Get Started Free" in nav | `/contact` |
| Click mega-menu item | Respective service or consultancy page |
| Dismiss notice banner | Stores dismissed state in browser session |

---

#### `/services` — Services Overview

**Visible to:** Everyone

**Content:**
- Overview of the three services: Recruitment, Marketing, Business Solutions (CRM)
- Brief description and key outcomes for each
- CTA to contact or explore individual service

**Actions:**

| Action | Leads To |
|---|---|
| Click Recruitment card | `/services/recruitment` |
| Click Marketing card | `/services/marketing` |
| Click CRM/Business Solutions card | `/services/crm` |
| Click "Get in touch" CTA | `/contact` |

---

#### `/services/[slug]` — Individual Service Page

**Template applies to:** `recruitment`, `marketing`, `crm`
**Visible to:** Everyone

**Content:**
- Service-specific hero: headline, subheadline, primary CTA
- Feature breakdown: what is included in the service
- Process: how the service is delivered
- Metrics: outcome data (e.g. avg. time to hire, ROAS)
- Testimonials relevant to this service (filtered by tag)
- Inquiry form: name, email, company, message, service pre-selected
- Related services

**Actions:**

| Action | Leads To |
|---|---|
| Submit inquiry form | Creates `lead` record (source_type: `service_inquiry`); shows confirmation |
| Click "Back to services" | `/services` |
| Click related service | `/services/[slug]` |

---

#### `/consultancy` — Consultancy Overview

**Visible to:** Everyone

**Content:**
- Introduction to the startup consultancy practice
- Cards for each of the five programs: Go To Market, Product Launch, 0 to 90 Plan, 0 to 90 Training, Quarterly Health Analysis
- Differentiators and outcomes
- CTA to book a discovery call

**Actions:**

| Action | Leads To |
|---|---|
| Click program card | `/consultancy/[slug]` |
| Click "Book a discovery call" | `/contact` |

---

#### `/consultancy/[slug]` — Individual Consultancy Program Page

**Template applies to:** `go-to-market`, `product-launch`, `0-to-90-plan`, `0-to-90-training`, `quarterly-health-analysis`
**Visible to:** Everyone

**Content:**
- Program-specific hero
- What the program covers (structured breakdown)
- Timeline and deliverables
- Who it is for
- Outcomes and success metrics
- Testimonials relevant to this program
- Inquiry / application form

**Actions:**

| Action | Leads To |
|---|---|
| Submit application form | Creates `lead` record (source_type: `consultation`); shows confirmation |
| Click "View all programs" | `/consultancy` |
| Click related program | `/consultancy/[slug]` |

---

#### `/community` — Community Feed

**Visible to:** Everyone can read. Members can post and interact.

**Content — Visitor view:**
- Feed of public community posts (most recent, with pinned posts at top)
- Each post shows: author name, avatar, time, category tag, content preview, like count, comment count
- Category filter tabs
- Search bar
- Join/sign-up prompt

**Content — Member view:** Same as above plus:
- "New Post" action
- Ability to like and comment on posts

**Actions:**

| Action | Actor | Leads To |
|---|---|---|
| Click post | All | `/community/post/[id]` |
| Click "Join Community" / "Sign Up" | Visitor | `/signup` |
| Click author name/avatar | All | `/profile/[username]` |
| Click category filter | All | `/community` filtered by category (URL param) |
| Submit search | All | `/community?q=[query]` |
| Click "New Post" | Member | Opens post composer on same page |
| Submit new post | Member | Creates `community_post` record; stays on `/community`, post appears in feed |
| Click like | Member | Toggles `post_like` record; updates count |

---

#### `/community/post/[id]` — Single Community Post

**Visible to:** Everyone can read. Members can interact.

**Content — Visitor view:**
- Full post content
- Author info
- Like count
- Comments (threaded, up to 2 levels)
- Sign-up prompt to join the conversation

**Content — Member view:** Same as above plus:
- Like/unlike post
- Reply to post (add top-level comment)
- Reply to comment (nested reply)
- Like/unlike individual comments
- Edit own post or comment
- Delete own post or comment

**Actions:**

| Action | Actor | Leads To |
|---|---|---|
| Click author name | All | `/profile/[username]` |
| Click "Sign Up to Comment" | Visitor | `/signup` |
| Submit comment | Member | Creates `community_comment`; refreshes thread |
| Edit own post | Member | Opens edit mode inline; saves to same record |
| Delete own post | Member | Soft-deletes post; redirects to `/community` |
| Edit own comment | Member | Opens inline edit |
| Delete own comment | Member | Soft-deletes comment |
| Like post/comment | Member | Toggles like record |
| Click "Back to Community" | All | `/community` |

---

#### `/articles` — Articles Index

**Visible to:** Everyone

**Content:**
- Featured article (latest or manually selected)
- Grid of all published articles
- Filter by category
- Search

**Actions:**

| Action | Leads To |
|---|---|
| Click article card | `/articles/[slug]` |
| Click category filter | `/articles?category=[slug]` |
| Submit search | `/articles?q=[query]` |

---

#### `/articles/[slug]` — Single Article

**Visible to:** Everyone
**Note:** Articles are editorial-only. Comments are disabled. Only TDCM admin team authors.

**Content:**
- Article title, cover image, author, published date, category, reading time
- Full article body
- Related articles (up to 3)
- Author bio
- CTA to subscribe to newsletter or contact TDCM
- Social share options (links, not embedded widgets)

**Actions:**

| Action | Leads To |
|---|---|
| Click author name | No dedicated public author page; resolves to about or no link |
| Click related article | `/articles/[slug]` |
| Click "Subscribe" CTA | Creates `newsletter_subscriber`; shows confirmation inline |
| Click "Contact TDCM" CTA | `/contact` |
| Click category tag | `/articles?category=[slug]` |

---

#### `/pricing` — Pricing Page

**Visible to:** Everyone

**Content:**
- Three pricing tiers (Starter, Growth, Scale) from CMS
- Monthly / annual billing toggle
- Feature comparison per plan
- FAQ section (from CMS)
- CTA to contact sales for custom/enterprise

**Actions:**

| Action | Leads To |
|---|---|
| Click "Get Started Free" (Starter) | `/signup` |
| Click "Start Free Trial" (Growth) | `/signup?plan=growth` |
| Click "Talk to Sales" (Scale) | `/contact?intent=sales` |
| Toggle billing period | Updates displayed prices client-side only; no navigation |

---

#### `/about` — About Page

**Visible to:** Everyone

**Content:**
- Company story and mission
- Team section: name, title, bio, photo (from `admin_users` with public flag)
- Values and differentiators
- Stats
- CTA to contact or work with TDCM

**Actions:**

| Action | Leads To |
|---|---|
| Click "Work with us" / "Get in touch" | `/contact` |

---

#### `/contact` — Contact & Lead Capture

**Visible to:** Everyone

**Content:**
- Contact form: name, email, company, phone (optional), service interest (dropdown from services list), message
- Contact details: email, phone, address
- Alternative CTAs: schedule a call (external calendar link), WhatsApp link

**Actions:**

| Action | Leads To |
|---|---|
| Submit contact form | Creates `lead` record (source_type: `contact`); shows confirmation state on same page |
| Click email address | Opens email client |
| Click phone number | Opens phone dialer |

---

### 2.2 Authentication Pages

---

#### `/signup` — Register

**Visible to:** Visitor only (redirect authenticated users to `/community`)

**Content:**
- Registration form: email, password, display name
- OAuth options (Google)
- Link to sign in

**Actions:**

| Action | Leads To |
|---|---|
| Submit form | Creates `auth.users` + `user_profiles` record; redirects to `/community` |
| Click "Sign In" | `/login` |
| Submit with `?plan=growth` param | After signup, redirects to `/pricing` with Growth plan highlighted |

---

#### `/login` — Sign In

**Visible to:** Visitor only

**Content:**
- Login form: email, password
- OAuth options
- Forgot password link

**Actions:**

| Action | Leads To |
|---|---|
| Submit credentials | Authenticates session; redirects to `/community` or original destination |
| Click "Forgot password" | `/forgot-password` |
| Click "Sign Up" | `/signup` |

---

#### `/forgot-password` — Password Reset Request

**Visible to:** Visitor only

**Content:**
- Email field to request reset link

**Actions:**

| Action | Leads To |
|---|---|
| Submit email | Triggers password reset email; shows confirmation state on same page |

---

#### `/reset-password` — Set New Password

**Visible to:** Visitor (via email link with token)
**Condition:** Valid, unexpired reset token in URL

**Content:**
- New password field, confirm password field

**Actions:**

| Action | Leads To |
|---|---|
| Submit new password | Updates password; redirects to `/login` with success message |

---

### 2.3 Authenticated User Pages

---

#### `/profile/[username]` — Public Member Profile

**Visible to:** Everyone (if member is not banned)

**Content — Visitor/other member view:**
- Display name, avatar, bio, company, job title
- Stats: posts count, followers, following
- Recent posts by this member
- Follow button (Member only)

**Content — Own profile (Member viewing their own):**
- Same as above plus "Edit Profile" action

**Actions:**

| Action | Actor | Leads To |
|---|---|---|
| Click "Follow" | Member | Creates `user_follows` record; updates counts |
| Click "Unfollow" | Member (already following) | Deletes `user_follows` record |
| Click "Edit Profile" | Member (own profile) | `/settings/profile` |
| Click post in feed | All | `/community/post/[id]` |

---

#### `/settings/profile` — Edit Profile

**Visible to:** Authenticated Members only

**Content:**
- Editable fields: display name, username, bio, company, job title, website URL, LinkedIn URL, Twitter URL
- Avatar upload

**Actions:**

| Action | Leads To |
|---|---|
| Save changes | Updates `user_profiles` record; stays on page with success state |
| Click "View public profile" | `/profile/[username]` |

---

#### `/settings/account` — Account Settings

**Visible to:** Authenticated Members only

**Content:**
- Change email
- Change password
- Notification preferences (email toggles for: new comment, new like, new follower, new mention, TDCM newsletter)
- Delete account option

**Actions:**

| Action | Leads To |
|---|---|
| Save email/password change | Updates `auth.users`; stays on page |
| Save notification preferences | Updates `user_profiles.notification_prefs` |
| Click "Delete Account" | Confirmation modal → deletes auth user and cascades; redirects to `/` |

---

#### `/notifications` — Notification Center

**Visible to:** Authenticated Members only

**Content:**
- Chronological list of notifications: post likes, comments, follows, mentions, system messages
- Each notification has: actor avatar, action text, time, link to source content
- Mark-all-read action

**Actions:**

| Action | Leads To |
|---|---|
| Click notification | Marks as read; navigates to `notifications.href` target |
| Click "Mark all as read" | Updates all `notifications.is_read = true` for current user |

---

### 2.4 Admin Pages

All admin routes require authentication and a valid admin role. Non-admin users who attempt to access `/admin/*` are redirected to `/login`.

---

#### `/admin` — Admin Dashboard

**Visible to:** All admin roles

**Content:**
- Key metrics: new leads (7d / 30d), total leads by status, published articles count, community post count, new members (30d)
- Recent leads table (last 10, with status)
- Quick actions: create article, moderate flagged posts
- System alerts: scheduled articles due, unassigned leads

**Actions:**

| Action | Leads To |
|---|---|
| Click lead row | `/admin/leads/[id]` |
| Click "Create article" | `/admin/articles/new` |
| Click "Review flagged posts" | `/admin/community?filter=flagged` |
| Click metric card | Respective admin section |

---

#### `/admin/pages` — CMS Page List

**Visible to:** Editor, Super Admin

**Content:**
- List of all CMS-managed pages: slug, title, last updated, published status
- Each row links to editor

**Actions:**

| Action | Leads To |
|---|---|
| Click page row | `/admin/pages/[slug]` |
| Toggle "Published" switch | Updates `pages.is_published` inline |

---

#### `/admin/pages/[slug]` — Page Editor

**Visible to:** Editor, Super Admin

**Content:**
- Section list for the page (ordered)
- Each section shows its type and summary
- Add, reorder, edit, and remove sections
- SEO fields: meta title, meta description, OG image
- Preview and publish controls

**Actions:**

| Action | Leads To |
|---|---|
| Edit section | Opens section edit panel inline |
| Add section | Opens section type selector, then inline edit |
| Reorder sections | Updates `pages.sections` array order |
| Remove section | Removes from array; requires confirmation |
| Save | Updates `pages.sections` and SEO fields |
| Publish / Unpublish | Toggles `pages.is_published` |
| Click "Preview" | Opens public page in new tab |
| Click "Back to pages" | `/admin/pages` |

---

#### `/admin/services` — Services List

**Visible to:** Editor, Super Admin

**Content:**
- Table of all services and consultancy programs: title, category, slug, active status, sort order
- Sort order drag-to-reorder

**Actions:**

| Action | Leads To |
|---|---|
| Click row | `/admin/services/[slug]` |
| Toggle active switch | Updates `services.is_active` |
| Reorder rows | Updates `services.sort_order` for affected records |

---

#### `/admin/services/[slug]` — Service Page Editor

**Visible to:** Editor, Super Admin

**Content:**
- All fields of the `services` model: title, subtitle, description, hero fields, content blocks, SEO meta
- Inquiry form toggle

**Actions:**

| Action | Leads To |
|---|---|
| Save | Updates `services` record |
| Preview | Opens `/services/[slug]` or `/consultancy/[slug]` in new tab |
| Back | `/admin/services` |

---

#### `/admin/articles` — Articles List

**Visible to:** Editor, Super Admin

**Content:**
- Table of all articles: title, author, category, status, published date
- Status filter (draft / scheduled / published / archived)
- Search by title

**Actions:**

| Action | Leads To |
|---|---|
| Click "New Article" | `/admin/articles/new` |
| Click article row | `/admin/articles/[id]` |
| Filter by status | Filters table inline |

---

#### `/admin/articles/new` and `/admin/articles/[id]` — Article Editor

**Visible to:** Editor, Super Admin

**Content:**
- Title, excerpt, cover image (media picker)
- Author (admin user selector)
- Category selector, tag input
- Rich text body editor
- Status selector: draft / scheduled / published / archived
- Scheduled publish date (shown when status = scheduled)
- SEO fields: meta title, meta description, canonical URL
- Related articles selector

**Actions:**

| Action | Leads To |
|---|---|
| Save draft | Creates/updates `articles` record with status = draft |
| Publish | Sets status = published, sets `published_at = now()` if not set |
| Schedule | Sets status = scheduled, sets `scheduled_for` to chosen datetime |
| Archive | Sets status = archived |
| Preview | Opens `/articles/[slug]` in new tab |
| Back | `/admin/articles` |

---

#### `/admin/community` — Community Moderation

**Visible to:** Moderator, Super Admin

**Content:**
- Posts feed with moderation controls on each item
- Filters: all / flagged / hidden / pinned
- Search posts

**Actions:**

| Action | Actor | Leads To |
|---|---|---|
| Click post | Moderator, Super Admin | `/admin/community/posts/[id]` |
| Pin / Unpin post | Moderator, Super Admin | Updates `community_posts.is_pinned` |
| Hide / Unhide post | Moderator, Super Admin | Updates `community_posts.is_hidden` |
| Filter | Moderator, Super Admin | Filters feed inline |

---

#### `/admin/community/posts/[id]` — Post Detail (Moderation View)

**Visible to:** Moderator, Super Admin

**Content:**
- Full post content and metadata
- All comments in the thread with individual moderation controls
- Author profile link
- Moderation history / notes field

**Actions:**

| Action | Leads To |
|---|---|
| Hide/show post | Updates `is_hidden` |
| Hide/show comment | Updates `comment.is_hidden` |
| Ban user | Opens confirm dialog → updates `user_profiles.is_banned = true` |
| Add moderation note | Saves to `community_posts.pin_note` or `flag_reason` |
| Back | `/admin/community` |

---

#### `/admin/community/users` — Member Management

**Visible to:** Moderator, Super Admin

**Content:**
- Table of all members: display name, username, email, joined date, posts count, banned status
- Search and filter (active / banned)

**Actions:**

| Action | Leads To |
|---|---|
| Click row | Opens member detail panel inline |
| Ban / Unban member | Updates `user_profiles.is_banned` |

---

#### `/admin/media` — Media Library

**Visible to:** Editor, Moderator, Super Admin

**Content:**
- Grid of all uploaded media files: thumbnail, filename, dimensions, size, upload date
- Folder navigation
- Upload new file

**Actions:**

| Action | Leads To |
|---|---|
| Upload file | Creates `media` record; file stored in Supabase Storage |
| Click file | Opens detail panel with copy-URL action |
| Delete file | Removes `media` record and storage object; requires confirmation |

---

#### `/admin/navigation` — Navigation Editor

**Visible to:** Super Admin

**Content:**
- Tree view of header navigation (with mega-menu structure)
- List views of four footer columns
- Each item: label, href, description (for mega items), icon, active toggle

**Actions:**

| Action | Leads To |
|---|---|
| Edit item | Inline edit panel |
| Add item | Creates `navigation` record |
| Reorder item | Updates `navigation.sort_order` |
| Toggle active | Updates `navigation.is_active` |
| Delete item | Removes `navigation` record; requires confirmation |

---

#### `/admin/leads` — Lead Management

**Visible to:** Super Admin (view all); Editors see leads from form submissions they have access to

**Content:**
- Table of all leads: name, email, company, service interest, status, created date, assigned to
- Filters: status, service interest, date range
- Sort by created date, follow-up date

**Actions:**

| Action | Leads To |
|---|---|
| Click row | `/admin/leads/[id]` |
| Filter/sort | Updates table inline |
| Export | Downloads CSV of filtered set |

---

#### `/admin/leads/[id]` — Lead Detail

**Visible to:** Super Admin

**Content:**
- Full lead record: all fields including UTM data, source page, IP
- Status selector and history
- Assigned-to selector (admin user)
- Follow-up date picker
- Admin notes (free text, append-only log)

**Actions:**

| Action | Leads To |
|---|---|
| Update status | Updates `leads.status` |
| Assign to admin | Updates `leads.assigned_to` |
| Set follow-up date | Updates `leads.follow_up_at` |
| Save notes | Appends to `leads.admin_notes` |
| Back | `/admin/leads` |

---

#### `/admin/settings` — Site Settings

**Visible to:** Super Admin only

**Content:**
- All `site_settings` key-value pairs grouped: company info, contact, social links, notice banner toggle and content, analytics IDs, SEO defaults

**Actions:**

| Action | Leads To |
|---|---|
| Edit any field and save | Updates corresponding `site_settings` record |

---

#### `/admin/team` — Admin User Management

**Visible to:** Super Admin only

**Content:**
- List of all admin users: name, email, role, last login, active status

**Actions:**

| Action | Leads To |
|---|---|
| Invite new admin | Opens invite form → creates `admin_users` record, sends invite email |
| Edit role | Updates `admin_users.role` |
| Deactivate / Reactivate | Updates `admin_users.is_active` |

---

#### `/admin/pricing` — Pricing Plan Editor

**Visible to:** Super Admin

**Content:**
- List of all pricing plans with current prices, features list, popular flag

**Actions:**

| Action | Leads To |
|---|---|
| Edit plan | Opens inline editor for all `pricing_plans` fields |
| Save | Updates `pricing_plans` record |

---

## 3. Data Models

Each model is defined by its fields, types, constraints, and relationships. Derived counts (e.g., `likes_count`) are maintained by database triggers — they are stored values, not computed on read.

---

### AdminUser

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `auth_user_id` | UUID | FK → auth.users, unique | Links to auth identity |
| `name` | string | required | Display name |
| `email` | string | unique, required | |
| `role` | enum | `super_admin` \| `editor` \| `moderator` | |
| `avatar_url` | string | nullable | |
| `bio` | text | nullable | Used on /about page if public |
| `last_login_at` | timestamp | nullable | |
| `is_active` | boolean | default true | Soft deactivation |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

---

### SiteSetting

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `key` | string | PK | e.g. `company_name`, `notice_banner` |
| `value` | JSON | required | Typed per key |
| `description` | string | nullable | Internal documentation |
| `updated_by` | UUID | FK → AdminUser | |
| `updated_at` | timestamp | auto | |

---

### Navigation

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `location` | enum | `header` \| `footer_col1` \| `footer_col2` \| `footer_col3` \| `footer_col4` | |
| `label` | string | required | Link text |
| `href` | string | required | Relative or absolute URL |
| `parent_id` | UUID | FK → Navigation, nullable | For mega-menu nesting |
| `mega_group` | string | nullable | Group header label in mega menu |
| `icon_name` | string | nullable | Icon identifier |
| `description` | string | nullable | Sub-text for mega items |
| `sort_order` | integer | default 0 | |
| `is_active` | boolean | default true | |
| `opens_new` | boolean | default false | Open in new tab |
| `updated_by` | UUID | FK → AdminUser | |
| `updated_at` | timestamp | auto | |

---

### Page

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `slug` | string | unique, required | e.g. `home`, `about`, `contact` |
| `title` | string | required | Internal label |
| `sections` | JSON array | required | Ordered array of section objects |
| `meta_title` | string | nullable | Overrides default title pattern |
| `meta_description` | string | nullable | |
| `og_image_url` | string | nullable | |
| `canonical_url` | string | nullable | |
| `is_published` | boolean | default true | |
| `updated_by` | UUID | FK → AdminUser | |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

**Section object structure (within `sections` array):**

Every section has a `type` field. The remaining fields are determined by type.

| Section Type | Key Fields |
|---|---|
| `hero` | `headline`, `headline_highlight`, `subheadline`, `cta_primary`, `cta_secondary`, `badge_text`, `social_proof` |
| `features_grid` | `eyebrow`, `headline`, `subheadline`, `items[]` (title, description, icon, href, featured) |
| `stats` | `items[]` (value, prefix, suffix, label) |
| `testimonials` | `eyebrow`, `headline`, `items[]` or `source: "all_featured"` |
| `cta_banner` | `headline`, `subheadline`, `cta_primary`, `show_email_form`, `trust_notes` |
| `text_image` | `eyebrow`, `headline`, `body`, `image_url`, `image_position`, `cta` |
| `faq` | `headline`, `items[]` (question, answer) |
| `process_steps` | `eyebrow`, `headline`, `steps[]` (number, title, description) |
| `service_cards` | `eyebrow`, `headline`, `items[]` (service slugs or inline) |
| `logo_bar` | `label`, `logos[]` (name, image_url) |
| `team` | `headline`, `members[]` (admin_user references or inline) |
| `pricing` | `eyebrow`, `headline`, `subheadline`, `source: "pricing_plans"` |
| `community_teaser` | `headline`, `subheadline`, `cta` |
| `articles_teaser` | `eyebrow`, `headline`, `count`, `filter_category` |

---

### Service

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `category` | enum | `service` \| `consultancy` \| `solution` | Determines URL namespace |
| `slug` | string | unique, required | |
| `title` | string | required | |
| `subtitle` | string | nullable | |
| `description` | text | nullable | Short summary for cards |
| `icon_name` | string | nullable | |
| `hero_headline` | string | nullable | |
| `hero_subheadline` | string | nullable | |
| `content_blocks` | JSON array | default `[]` | Structured content for the page |
| `inquiry_form_enabled` | boolean | default true | |
| `inquiry_form_title` | string | nullable | |
| `sort_order` | integer | default 0 | |
| `is_active` | boolean | default true | |
| `is_featured` | boolean | default false | Highlighted in listings |
| `seo_meta` | JSON | default `{}` | `{meta_title, meta_description, og_image_url}` |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |
| `updated_by` | UUID | FK → AdminUser | |

---

### Testimonial

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `name` | string | required | |
| `role` | string | required | |
| `company` | string | nullable | |
| `avatar_url` | string | nullable | |
| `quote` | text | required | |
| `rating` | integer | 1–5, default 5 | |
| `is_featured` | boolean | default false | Shown on homepage |
| `sort_order` | integer | default 0 | |
| `is_active` | boolean | default true | |
| `created_at` | timestamp | auto | |

---

### Category

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `name` | string | required | |
| `slug` | string | unique, required | |
| `type` | enum | `article` \| `community` \| `both` | Scopes where it appears |
| `color` | string | default `#25666C` | Hex color for tag display |
| `description` | text | nullable | |
| `sort_order` | integer | default 0 | |
| `is_active` | boolean | default true | |

---

### Tag

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `name` | string | required | |
| `slug` | string | unique, required | |
| `type` | enum | `article` \| `community` \| `both` | |
| `usage_count` | integer | default 0 | Maintained by trigger |

---

### Article

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `slug` | string | unique, required | |
| `title` | string | required | |
| `excerpt` | text | nullable | Used in cards and meta description |
| `content` | text | nullable | Rich text (HTML or editor JSON) |
| `cover_image_url` | string | nullable | |
| `author_id` | UUID | FK → AdminUser | Only admins can author articles |
| `category_id` | UUID | FK → Category | |
| `status` | enum | `draft` \| `scheduled` \| `published` \| `archived` | |
| `published_at` | timestamp | nullable | Set when first published |
| `scheduled_for` | timestamp | nullable | Target publish time |
| `reading_time_mins` | integer | auto-computed from word count | |
| `featured` | boolean | default false | Shown as featured article |
| `views_count` | integer | default 0 | Incremented on page load |
| `seo_meta` | JSON | default `{}` | |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

**Relationships:**
- `Article` → many `Tag` (via `article_tags` join table)
- `Article` → many `Article` (via `related_articles` join table)

---

### UserProfile

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK, FK → auth.users | Created automatically on signup |
| `username` | string | unique, nullable | Chosen by user; used in profile URL |
| `display_name` | string | nullable | |
| `bio` | text | nullable | |
| `company` | string | nullable | |
| `job_title` | string | nullable | |
| `avatar_url` | string | nullable | |
| `website_url` | string | nullable | |
| `linkedin_url` | string | nullable | |
| `twitter_url` | string | nullable | |
| `is_verified` | boolean | default false | Set by admin |
| `is_banned` | boolean | default false | |
| `ban_reason` | text | nullable | |
| `followers_count` | integer | default 0 | Maintained by trigger |
| `following_count` | integer | default 0 | Maintained by trigger |
| `posts_count` | integer | default 0 | Maintained by trigger |
| `joined_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

---

### UserFollow

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `follower_id` | UUID | FK → UserProfile, PK part | |
| `following_id` | UUID | FK → UserProfile, PK part | |
| `created_at` | timestamp | auto | |

Constraint: `follower_id ≠ following_id`

---

### CommunityPost

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `user_id` | UUID | FK → UserProfile | |
| `content` | text | required | Plain text version |
| `rich_content` | JSON | nullable | Editor-structured version (optional) |
| `image_urls` | string[] | default `[]` | Attached image URLs |
| `category_id` | UUID | FK → Category, nullable | |
| `tags` | string[] | default `[]` | Free-form tag strings |
| `likes_count` | integer | default 0 | Maintained by trigger |
| `comments_count` | integer | default 0 | Maintained by trigger |
| `views_count` | integer | default 0 | |
| `is_pinned` | boolean | default false | Admin-controlled |
| `is_flagged` | boolean | default false | Reported by users or admin |
| `is_hidden` | boolean | default false | Soft-deleted by admin |
| `pin_note` | text | nullable | Admin annotation |
| `flag_reason` | text | nullable | |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

---

### CommunityComment

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `post_id` | UUID | FK → CommunityPost | |
| `user_id` | UUID | FK → UserProfile | |
| `parent_comment_id` | UUID | FK → CommunityComment, nullable | For threading (max 2 levels enforced in application layer) |
| `content` | text | required | |
| `likes_count` | integer | default 0 | |
| `is_flagged` | boolean | default false | |
| `is_hidden` | boolean | default false | |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

---

### PostLike

| Field | Type | Constraints |
|---|---|---|
| `user_id` | UUID | FK → UserProfile, PK part |
| `post_id` | UUID | FK → CommunityPost, PK part |
| `created_at` | timestamp | auto |

---

### CommentLike

| Field | Type | Constraints |
|---|---|---|
| `user_id` | UUID | FK → UserProfile, PK part |
| `comment_id` | UUID | FK → CommunityComment, PK part |
| `created_at` | timestamp | auto |

---

### Notification

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `user_id` | UUID | FK → UserProfile | Recipient |
| `type` | enum | `post_like` \| `comment` \| `comment_like` \| `follow` \| `mention` \| `system` | |
| `actor_id` | UUID | FK → UserProfile, nullable | Who triggered it |
| `post_id` | UUID | FK → CommunityPost, nullable | |
| `comment_id` | UUID | FK → CommunityComment, nullable | |
| `message` | text | nullable | For system notifications |
| `href` | string | nullable | Link target |
| `is_read` | boolean | default false | |
| `created_at` | timestamp | auto | |

---

### Lead

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `name` | string | required | |
| `email` | string | required | |
| `company` | string | nullable | |
| `phone` | string | nullable | |
| `service_interest` | string | nullable | Service slug |
| `message` | text | nullable | |
| `source_page` | string | nullable | URL path of form |
| `source_type` | enum | `contact` \| `service_inquiry` \| `consultation` \| `newsletter` \| `cta` | |
| `status` | enum | `new` \| `contacted` \| `qualified` \| `proposal_sent` \| `won` \| `lost` | default `new` |
| `admin_notes` | text | nullable | Append-only log |
| `assigned_to` | UUID | FK → AdminUser, nullable | |
| `follow_up_at` | timestamp | nullable | |
| `utm_source` | string | nullable | |
| `utm_medium` | string | nullable | |
| `utm_campaign` | string | nullable | |
| `ip_address` | inet | nullable | |
| `created_at` | timestamp | auto | |
| `updated_at` | timestamp | auto | |

---

### Media

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `filename` | string | required | Storage filename |
| `original_name` | string | required | Original upload name |
| `url` | string | required | Public CDN URL |
| `storage_path` | string | required | Internal storage path |
| `mime_type` | string | required | |
| `size_bytes` | bigint | nullable | |
| `width` | integer | nullable | For images |
| `height` | integer | nullable | For images |
| `alt_text` | string | nullable | |
| `folder` | string | default `/` | |
| `uploaded_by` | UUID | FK → AdminUser | |
| `created_at` | timestamp | auto | |

---

### PricingPlan

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `name` | string | required | e.g. Starter, Growth, Scale |
| `slug` | string | unique, required | |
| `tier` | integer | required | Sort order (1, 2, 3) |
| `monthly_price` | decimal | required | 0 for free |
| `annual_price` | decimal | nullable | |
| `currency` | string | default `INR` | |
| `description` | string | nullable | Tagline |
| `features` | JSON array | required | `[{text: string, included: boolean}]` |
| `is_popular` | boolean | default false | One plan marked popular |
| `badge_text` | string | nullable | e.g. "Most popular" |
| `cta_text` | string | nullable | |
| `cta_href` | string | nullable | |
| `is_active` | boolean | default true | |
| `updated_at` | timestamp | auto | |

---

### NewsletterSubscriber

| Field | Type | Constraints | Notes |
|---|---|---|---|
| `id` | UUID | PK | |
| `email` | string | unique, required | |
| `name` | string | nullable | |
| `source` | string | nullable | Which page/section |
| `is_active` | boolean | default true | |
| `confirmed_at` | timestamp | nullable | Email confirmation |
| `created_at` | timestamp | auto | |

---

## 4. User Flows

### Flow 1 — Visitor Converts to Lead (Service Inquiry)

```
Visitor lands on /
  → Reads Hero and Products section
  → Clicks service card (e.g., "Recruitment Services")
  → Arrives at /services/recruitment
  → Reads features, metrics, testimonials
  → Submits inquiry form (name, email, company, message)
  → Lead record created (source_type: service_inquiry, status: new)
  → Page shows confirmation message
  → Admin notified (email) of new lead
  → Admin sees lead in /admin/leads
  → Admin updates status to "contacted", assigns to team member
```

---

### Flow 2 — Visitor Signs Up for Community

```
Visitor lands on /community
  → Reads posts (read-only)
  → Clicks "Join Community"
  → Redirected to /signup
  → Submits registration form (email, password, display name)
  → auth.users record created
  → user_profiles record auto-created via trigger
  → Redirected to /community
  → Now sees "New Post" and like/comment controls
  → Visits /settings/profile to complete profile
  → Saves username, bio, company
  → Profile visible at /profile/[username]
```

---

### Flow 3 — Member Creates a Post

```
Member on /community
  → Clicks "New Post"
  → Composer opens (inline or modal — content layer, not UI decision)
  → Types content, optionally selects category and adds tags
  → Submits
  → community_posts record created (user_id, content, category_id, tags)
  → Post appears in feed (own post appears immediately)
  → Other members can like and comment
  → Member receives notifications as others interact
```

---

### Flow 4 — Moderator Reviews Flagged Post

```
Member reports post (UI reports → sets is_flagged = true on community_posts)
  → Moderator sees flagged count on /admin dashboard
  → Navigates to /admin/community?filter=flagged
  → Sees post with full content and flag reason
  → Opens /admin/community/posts/[id]
  → Reviews post and comments
  → Decision path A: Post is valid → sets is_flagged = false, clears reason
  → Decision path B: Post violates policy → sets is_hidden = true; optionally bans user
  → If user banned: user_profiles.is_banned = true, ban_reason saved
  → Banned user cannot post or comment; profile shows limited info
```

---

### Flow 5 — Editor Publishes an Article

```
Editor navigates to /admin/articles
  → Clicks "New Article"
  → Arrives at /admin/articles/new
  → Fills in title, excerpt, selects cover image from media library
  → Sets author (self or another admin)
  → Selects category, adds tags
  → Writes body in rich text editor
  → Fills SEO fields
  → Clicks "Publish"
  → Article status set to published, published_at = now()
  → reading_time_mins auto-calculated by trigger
  → Article appears on /articles and /articles/[slug]
  → Homepage articles teaser section updates to show latest 3
```

---

### Flow 6 — Editor Schedules an Article

```
Editor completes article as above
  → Selects "Schedule" instead of "Publish"
  → Chooses future date and time
  → Article status = scheduled, scheduled_for = chosen datetime
  → Admin dashboard shows scheduled articles as upcoming
  → At scheduled_for datetime, background job sets status = published, published_at = scheduled_for
  → Article becomes live on site
```

---

### Flow 7 — Super Admin Updates Homepage via CMS

```
Super Admin navigates to /admin/pages
  → Clicks "home" page row
  → Arrives at /admin/pages/home
  → Sees ordered list of sections
  → Clicks Hero section → edits headline, CTA labels
  → Clicks Stats section → updates metric values
  → Reorders sections by dragging
  → Clicks "Save"
  → pages.sections JSON updated
  → Public /homepage immediately reflects changes (no deploy required)
```

---

### Flow 8 — Visitor Subscribes to Newsletter

```
Visitor on / scrolls to CTA banner
  → Types email address into email input
  → Clicks "Get Started Free" (or dedicated subscribe button)
  → newsletter_subscribers record created (email, source: cta_banner)
  → Confirmation message shown inline
  → Welcome email triggered (external email service)
  → If email already exists: graceful de-duplication (no error shown to user)
```

---

### Flow 9 — Super Admin Manages Pricing

```
Super Admin navigates to /admin/pricing
  → Sees current plan grid
  → Clicks "Edit" on Growth plan
  → Updates monthly_price from 4999 to 5499
  → Updates features list (adds new feature)
  → Saves
  → pricing_plans record updated
  → /pricing page immediately reflects new price and feature
  → Monthly/annual toggle on /pricing uses updated prices
```

---

### Flow 10 — Member Follows Another Member

```
Member A views /community
  → Clicks on Member B's avatar/name
  → Arrives at /profile/memberB
  → Sees Member B's profile and posts
  → Clicks "Follow"
  → user_follows record created (follower_id: A, following_id: B)
  → Trigger increments B.followers_count and A.following_count
  → Notification created for Member B (type: follow, actor_id: A)
  → Member B sees notification at /notifications
  → "Follow" button changes to "Unfollow" for Member A
```

---

## 5. Access Control Matrix

| Page / Action | Visitor | Member | Editor | Moderator | Super Admin |
|---|:---:|:---:|:---:|:---:|:---:|
| Read public pages | ✓ | ✓ | ✓ | ✓ | ✓ |
| Read community posts | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create community post | — | ✓ | ✓ | ✓ | ✓ |
| Like / comment | — | ✓ | ✓ | ✓ | ✓ |
| Edit own post/comment | — | ✓ | ✓ | ✓ | ✓ |
| Delete own post/comment | — | ✓ | ✓ | ✓ | ✓ |
| Submit lead / contact form | ✓ | ✓ | ✓ | ✓ | ✓ |
| Submit newsletter | ✓ | ✓ | ✓ | ✓ | ✓ |
| Access `/admin/*` | — | — | ✓ | ✓ | ✓ |
| Edit pages / services / articles | — | — | ✓ | — | ✓ |
| Manage media library | — | — | ✓ | ✓ | ✓ |
| Moderate community / users | — | — | — | ✓ | ✓ |
| View and manage leads | — | — | — | — | ✓ |
| Edit navigation | — | — | — | — | ✓ |
| Edit site settings | — | — | — | — | ✓ |
| Manage admin team | — | — | — | — | ✓ |
| Edit pricing plans | — | — | — | — | ✓ |

---

## 6. Route Index

| Route | Template | Actors | Notes |
|---|---|---|---|
| `/` | Homepage | All | CMS-driven |
| `/services` | Services Overview | All | |
| `/services/[slug]` | Service Page | All | 3 instances |
| `/consultancy` | Consultancy Overview | All | |
| `/consultancy/[slug]` | Consultancy Program Page | All | 5 instances |
| `/community` | Community Feed | All (read) / Member (write) | |
| `/community/post/[id]` | Single Post | All (read) / Member (write) | |
| `/articles` | Articles Index | All | |
| `/articles/[slug]` | Single Article | All | Editorial only, no comments |
| `/pricing` | Pricing | All | CMS-driven |
| `/about` | About | All | |
| `/contact` | Contact / Lead Form | All | |
| `/signup` | Registration | Visitor only | |
| `/login` | Sign In | Visitor only | |
| `/forgot-password` | Password Reset Request | Visitor only | |
| `/reset-password` | Set New Password | Visitor (via token) | |
| `/profile/[username]` | Public Profile | All | Member required for follow |
| `/settings/profile` | Edit Profile | Member | |
| `/settings/account` | Account Settings | Member | |
| `/notifications` | Notification Center | Member | |
| `/admin` | Admin Dashboard | All admin roles | |
| `/admin/pages` | CMS Page List | Editor, Super Admin | |
| `/admin/pages/[slug]` | Page Editor | Editor, Super Admin | |
| `/admin/services` | Services List | Editor, Super Admin | |
| `/admin/services/[slug]` | Service Editor | Editor, Super Admin | |
| `/admin/articles` | Articles List | Editor, Super Admin | |
| `/admin/articles/new` | Article Editor (new) | Editor, Super Admin | |
| `/admin/articles/[id]` | Article Editor (existing) | Editor, Super Admin | |
| `/admin/community` | Community Moderation | Moderator, Super Admin | |
| `/admin/community/posts/[id]` | Post Moderation Detail | Moderator, Super Admin | |
| `/admin/community/users` | Member Management | Moderator, Super Admin | |
| `/admin/media` | Media Library | Editor, Moderator, Super Admin | |
| `/admin/navigation` | Navigation Editor | Super Admin | |
| `/admin/leads` | Lead List | Super Admin | |
| `/admin/leads/[id]` | Lead Detail | Super Admin | |
| `/admin/pricing` | Pricing Plan Editor | Super Admin | |
| `/admin/settings` | Site Settings | Super Admin | |
| `/admin/team` | Admin User Management | Super Admin | |

---

*End of Architecture Document*
*Total pages defined: 38 routes (14 dynamic templates, 24 static routes)*
*Total models defined: 17*
*Total user flows defined: 10*
