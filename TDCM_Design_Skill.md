# TDCM Design Skill
**Brand: TDCM Company — The Digital Consultancy & Management**
**Version: 1.0 | March 2026**

---

## Overview

This skill defines the complete design system for TDCM Company. Use it whenever creating any document, presentation, website component, UI mockup, email, or visual asset for TDCM. All outputs must follow these guidelines to maintain brand consistency.

**Tagline:** Dream Bold. Plan Smart. Hustle Hard & Celebrate Achievements

---

## 1. Brand Colors

These colors are extracted directly from the TDCM logo (JPEG source analyzed March 2026).

| Token | Hex | Usage |
|---|---|---|
| `primary-dark` | `#1A4A4F` | Cover backgrounds, section headers, primary buttons, nav dark mode |
| `primary` | `#25666C` | Logo mark, headings, navigation links, active states, key CTAs |
| `primary-mid` | `#3B9198` | Sub-headings, accent borders, hover states, icon fills |
| `primary-light` | `#E8F4F5` | Card backgrounds, section alternates, input field fills, zebra rows |
| `text-dark` | `#1A2B2C` | All body text, headings, high-contrast text on white |
| `text-muted` | `#5A7275` | Secondary text, captions, meta information, placeholder text |
| `border` | `#B8D4D6` | Table borders, dividers, input outlines, card borders |
| `white` | `#FFFFFF` | Page backgrounds, card surfaces, text on dark backgrounds |

### Color Application Rules
- **Never use generic blue** — TDCM is a teal-first brand. Replace any default blue with `#25666C`.
- **Dark sections** use `#1A4A4F` background with `#FFFFFF` text and `#A8D4D8` secondary text.
- **Light sections** alternate between `#FFFFFF` and `#E8F4F5` for visual rhythm.
- **CTA buttons**: primary = `#25666C` background, white text. Secondary = white background, `#25666C` border + text.
- **Hover states**: darken primary by ~10% → `#1A4A4F` or lighten to `#3B9198`.
- **Error states**: use standard red (`#DC2626`) — not teal — for form validation errors.
- **Success states**: `#10B981` green for success indicators.

---

## 2. Typography

### Font Families
| Role | Font | Fallback |
|---|---|---|
| Primary (all UI) | Inter | -apple-system, sans-serif |
| Monospace (code) | JetBrains Mono | Courier New, monospace |
| Documents (Word/PDF) | Arial | Helvetica, sans-serif |

### Type Scale
| Style | Font | Weight | Size | Line Height | Usage |
|---|---|---|---|---|---|
| Hero Display | Inter | 700 | 56–72px | 1.1 | Homepage hero headline |
| H1 | Inter | 700 | 40–48px | 1.15 | Page-level headings |
| H2 | Inter | 600 | 28–32px | 1.2 | Section headings |
| H3 | Inter | 600 | 20–24px | 1.3 | Card and sub-section headings |
| Body Large | Inter | 400 | 18px | 1.6 | Lead paragraphs, intros |
| Body | Inter | 400 | 16px | 1.6 | All body copy |
| Small / Caption | Inter | 500 | 13–14px | 1.4 | Labels, tags, meta info |
| Overline | Inter | 600 | 11–12px | 1 | Uppercase section labels |
| Code | JetBrains Mono | 400 | 14px | 1.5 | Technical content |

### Typography Rules
- **Headlines on dark (teal) backgrounds**: always `#FFFFFF`
- **Headlines on white backgrounds**: `#1A2B2C` (near-black)
- **Colored highlight words** (like tagline): use `#25666C` for emphasis on white, `#A8D4D8` on dark
- **No serif fonts** — TDCM is a modern professional brand
- **Tagline formatting**: "Dream Bold." in bold teal, "Plan" in bold dark, "Smart." in bold mid-teal, "Hustle Hard & Celebrate" in bold dark, "Achievements" in bold mid-teal

---

## 3. Logo Usage

### Logo Variants
| Variant | When to Use |
|---|---|
| Full logo (mark + TDCM COMPANY) | Headers, cover pages, large spaces |
| Logo mark only (TCM monogram) | Favicon, small spaces, watermarks |
| White version (on dark bg) | Dark teal backgrounds, dark nav bar |

### Logo Clear Space
- Minimum clear space: equal to the height of the "C" in COMPANY on all sides
- Never place logo on busy photographic backgrounds without a white/teal overlay

### Logo Don'ts
- Do not recolor the logo
- Do not stretch or distort proportions
- Do not add drop shadows or effects
- Do not place on low-contrast backgrounds
- Minimum width: 120px digital / 30mm print

---

## 4. Document Design (Word / PDF)

When creating `.docx` or `.pdf` documents for TDCM:

### Cover Page Structure
1. Full dark teal background (`#1A4A4F`) covering the entire first section
2. TDCM logo centered, white version (or logo on white box centered on teal)
3. Thin accent line in `#3B9198` beneath logo
4. Document title in white, bold, 52pt Arial
5. Subtitle / description in `#A8D4D8`, 26pt Arial
6. Date / version / confidentiality in `#7FBBBE`, 20pt Arial
7. Stats strip below cover: 4 boxes in `#E8F4F5` with teal stat values

### Section Headers (in-document)
- Full-width table cell with `#1A4A4F` fill
- White bold text, 30pt Arial
- Numbered: "01 — EXECUTIVE SUMMARY", "02 — ARCHITECTURE", etc.
- Top/bottom padding: 140 DXA (~0.1 inch)

### Content Headings
- H1: Arial 40pt bold, `#1A2B2C`
- H2: Arial 28pt bold, `#25666C`
- H3: Arial 24pt bold, `#1A2B2C`
- Body: Arial 22pt (11pt), `#1A2B2C`

### Tables
- Header row: `#25666C` fill, white text, 20pt bold Arial
- Even rows: white fill
- Odd rows: `#E8F4F5` fill
- Border: `#B8D4D6`, 1pt single
- Cell padding: 80/80/140/140 DXA (top/bottom/left/right)
- **Always use DXA widths** — never percentages (breaks in Google Docs)

### Dividers
- Horizontal rule: `#B8D4D6`, 4pt bottom border on empty paragraph
- Spacing: 160 DXA before and after

### Code Blocks (in documents)
- Background: `#F0F7F8` (very light teal)
- Font: Courier New, 18pt (9pt)
- Color: `#1A2B2C`
- Border: `#B8D4D6`, 1pt single

---

## 5. Website UI Components

### Navigation Bar
- Background: `#FFFFFF` (scrolled) / transparent (hero top)
- Logo: full TDCM logo, max-height 48px
- Nav links: Inter 500 15px, `#1A2B2C`, hover color `#25666C`
- Active link: `#25666C` with 2px bottom border
- CTA button: `#25666C` bg, white text, 8px border-radius
- Mega-menu background: `#FFFFFF`, top border `#25666C` 3px
- Sticky: add `box-shadow: 0 1px 8px rgba(26,74,79,0.08)` on scroll

### Hero Section
- Background: dark teal `#1A4A4F` OR high-quality photo with teal overlay (opacity 0.7)
- Headline: Inter 700, 64px, `#FFFFFF`
- Subheadline: Inter 400, 20px, `#A8D4D8`
- Primary CTA: `#FFFFFF` bg, `#25666C` text, hover: `#E8F4F5`
- Secondary CTA: transparent bg, `#FFFFFF` border + text, hover: rgba(255,255,255,0.1)
- Minimum height: 600px desktop, 500px mobile

### Cards (Service, Article, Community Post)
```css
background: #FFFFFF;
border: 1px solid #B8D4D6;
border-radius: 12px;
padding: 24px;
transition: all 0.2s ease;

/* Hover state */
border-color: #25666C;
box-shadow: 0 4px 20px rgba(37, 102, 108, 0.12);
transform: translateY(-2px);
```

### Buttons
```css
/* Primary */
background: #25666C;
color: #FFFFFF;
border-radius: 8px;
padding: 12px 24px;
font: Inter 600 15px;
hover: background #1A4A4F;

/* Secondary */
background: transparent;
border: 2px solid #25666C;
color: #25666C;
hover: background #E8F4F5;

/* Ghost (on dark bg) */
background: transparent;
border: 2px solid rgba(255,255,255,0.6);
color: #FFFFFF;
hover: border-color #FFFFFF, background rgba(255,255,255,0.08);
```

### Section Rhythm
Alternate these section backgrounds top-to-bottom:
1. Dark teal `#1A4A4F` — hero
2. White `#FFFFFF` — features/services
3. Light teal `#E8F4F5` — testimonials/stats
4. White — content
5. Dark teal — CTA banner
6. White — footer

### Stat Counters
- Number: Inter 700, 48px, `#25666C`
- Label: Inter 500, 14px uppercase, `#5A7275`
- Animate from 0 on scroll-into-view (Framer Motion)

### Logo Bar (Client Logos)
- Background: `#FFFFFF` or `#E8F4F5`
- Logos: grayscale, opacity 0.5, hover: full color opacity 1
- Animated marquee: continuous left-scroll, 30s duration

### Tags / Badges
```css
background: #E8F4F5;
color: #25666C;
border: 1px solid #B8D4D6;
border-radius: 999px;
padding: 4px 12px;
font: Inter 500 13px;
```

### Form Inputs
```css
border: 1px solid #B8D4D6;
border-radius: 8px;
padding: 12px 16px;
font: Inter 400 16px;
color: #1A2B2C;
focus: border-color #25666C, box-shadow 0 0 0 3px rgba(37,102,108,0.12);
placeholder-color: #5A7275;
```

---

## 6. Iconography

- **Library**: Lucide React (web) / emoji/SVG (documents)
- **Size**: 20px inline, 24px standalone, 40–48px feature icons
- **Color**: `#25666C` primary, `#3B9198` secondary, `#5A7275` muted
- **Style**: Outline/stroke icons only — no filled icons
- **Feature icons**: place on `#E8F4F5` rounded square (48×48px, 12px radius)

---

## 7. Spacing System

Uses a base-4 scale (Tailwind compatible):

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Icon padding, tight spacing |
| sm | 8px | Element internal spacing |
| md | 16px | Component padding |
| lg | 24px | Card padding, form fields |
| xl | 32px | Section sub-spacing |
| 2xl | 48px | Between components |
| 3xl | 64px | Section padding (top/bottom) |
| 4xl | 96px | Large section padding |
| 5xl | 128px | Hero padding |

---

## 8. Shadows & Elevation

```css
/* Subtle — cards at rest */
box-shadow: 0 1px 3px rgba(26, 74, 79, 0.06), 0 1px 2px rgba(26, 74, 79, 0.04);

/* Medium — cards hover, dropdowns */
box-shadow: 0 4px 20px rgba(37, 102, 108, 0.12);

/* Large — modals, drawers */
box-shadow: 0 20px 60px rgba(26, 74, 79, 0.2);

/* Navbar scrolled */
box-shadow: 0 1px 8px rgba(26, 74, 79, 0.08);
```

---

## 9. Border Radius

| Element | Radius |
|---|---|
| Buttons, Tags, Badges | 8px (buttons), 999px (pills) |
| Cards | 12px |
| Inputs | 8px |
| Modal / Drawer | 16px |
| Feature icon containers | 12px |
| Image thumbnails | 8px |
| Section background rounding | 24px (top corners only, optional) |

---

## 10. Grid & Layout

- **Max content width**: 1280px
- **Side padding**: 24px (mobile), 48px (tablet), 80px (desktop)
- **Column grid**: 12-column, 24px gap
- **Card grids**: 1-col (mobile), 2-col (tablet), 3-col (desktop)
- **Section padding**: 64px top/bottom (desktop), 48px (tablet), 40px (mobile)

---

## 11. Animation Principles

- **Duration**: 200ms (micro), 300ms (standard), 500ms (page transitions)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out) for most transitions
- **Scroll animations**: fade-up (`opacity: 0 → 1, translateY: 20px → 0`) using Framer Motion
- **Counter animations**: ease-out, 1.5s duration, trigger on viewport entry
- **Hover transitions**: all property transitions, 200ms ease
- **Page transitions**: 300ms fade, no dramatic slides

---

## 12. Photography & Imagery Guidelines

- **Style**: Professional, diverse, modern business settings
- **Tone**: Energetic and confident — not stiff corporate stock photography
- **Color treatment**: Apply teal overlay `rgba(26, 74, 79, 0.5)` on hero backgrounds
- **Avoid**: Generic handshake photos, all-white backgrounds for people shots
- **Preferred**: Aerial city views, collaborative work scenes, modern office spaces
- **Image aspect ratios**: Hero 16:9, Cards 3:2, Thumbnails 4:3, Avatars 1:1
- **Compression**: WebP format, max 200KB for card images, max 500KB for heroes

---

## 13. Community & Articles UI Specifics

### Community Post Card
- Author avatar (40px circle) + name + timestamp
- Post content with teal links
- Action bar: Like (heart), Comment (speech bubble), Share — all in `#5A7275`, hover `#25666C`
- Comment count badge: `#E8F4F5` bg, `#25666C` text

### Article Card
- Cover image (4:3 ratio, 12px top radius)
- Category badge (teal pill)
- Title: Inter 600, 18px, `#1A2B2C`
- Excerpt: Inter 400, 14px, `#5A7275`, 2-line clamp
- Reading time + date: `#5A7275`, 13px

---

## 14. Admin Portal Design

- **Sidebar**: `#1A2B2C` background, `#FFFFFF` text, active item: `#25666C` left border + `#E8F4F5` bg
- **Top bar**: `#FFFFFF`, subtle bottom border `#B8D4D6`
- **Data tables**: standard teal table pattern (see Section 4)
- **Status badges**: New=teal, Contacted=blue, Qualified=green, Closed=gray
- **Dashboard stats cards**: white bg, teal value, muted label, `#B8D4D6` border

---

## Quick Reference Cheat Sheet

```
Primary Dark:  #1A4A4F  — covers, headers
Primary:       #25666C  — logo, CTAs, headings
Mid Teal:      #3B9198  — accents, hover
Light Teal:    #E8F4F5  — cards, backgrounds
Dark Text:     #1A2B2C  — body, headings
Muted:         #5A7275  — secondary text
Border:        #B8D4D6  — borders, dividers
White:         #FFFFFF  — surfaces, text on dark

Font:          Inter (UI) / Arial (docs)
Border Radius: 8px buttons, 12px cards
Spacing Base:  4px scale
Max Width:     1280px
```

---

*TDCM Design Skill — Version 1.0 — March 2026*
*Maintained by TDCM Design Team*
