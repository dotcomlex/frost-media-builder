

# Navigation Overhaul + 5 New Pages

## Summary
Rebuild the navigation with sticky header, hover dropdowns, and expanded menu items. Create 5 new pages: AI Automation, Meta Ads, HVAC (industry template), Case Studies, and About. All pages use Navigation + Footer, all CTAs trigger the contact form dialog.

## 1. Navigation Rewrite (`src/components/Navigation.tsx`)
- Change from `absolute bg-transparent` to `sticky top-0 bg-slate-900 border-b border-slate-700`
- Replace glassmorphic pill with flat menu items: Services (dropdown), Industries (dropdown), Case Studies, About, Contact
- **Hover dropdowns** using CSS `group-hover` pattern (opacity/visibility transition, no click needed)
  - Services dropdown: AI Automation, Meta Ads, Web Design, Lead Generation
  - Industries dropdown: HVAC, Plumbing, Concrete, Electrical, Roofing, Painting
- Amber "Book a Call" CTA button on right (triggers `openForm()`)
- Keep existing mobile hamburger + full-screen overlay, updated with new links + expandable sections for Services/Industries
- Use `Link` from react-router-dom for all internal links

## 2. New Pages (all follow same pattern: Navigation + content sections + Footer)

### `src/pages/AIAutomation.tsx` — `/services/ai-automation`
- Hero: "AI Lead Automation" headline + subtext + CTA
- How It Works: 3-step grid (Lead Comes In → AI Responds → You Get Qualified Lead)
- Features: 4 checkmark items (24/7 Response, Smart Qualification, Appointment Booking, CRM Integration)
- Final CTA

### `src/pages/MetaAds.tsx` — `/services/meta-ads`
- Hero: "Facebook & Instagram Advertising" + exclusive leads pitch
- Problem comparison: 3-card grid (HomeAdvisor vs Thumbtack vs Frost Media) — red borders for competitors, green for Frost
- What's Included: 4 checkmark features
- Final CTA

### `src/pages/IndustryHVAC.tsx` — `/industries/hvac`
- Hero: "HVAC Marketing That Actually Works"
- Pain Points: 3-card grid (Shared Leads, Seasonal Slowdowns, Price Shoppers)
- Solutions: 3 checkmark items (Exclusive Leads, AI Response, Pre-Qualified)
- Final CTA
- *This serves as template; future industry pages can reuse the pattern*

### `src/pages/CaseStudies.tsx` — `/case-studies`
- Hero: "Real Results from Real Businesses"
- 2-column grid with 3 case study cards (Beauty Studio: 1,900 leads; Concrete: revenue increase headline without dollar figure per user constraint; Painting: 78% close rate)
- Each card has metrics table in slate-800 box + "Get Similar Results →" link
- Final CTA

### `src/pages/About.tsx` — `/about`
- Hero: "About Frost Media"
- Story section: multi-paragraph narrative about the company origin
- Why Denver section
- Final CTA

## 3. Router Update (`src/App.tsx`)
Add routes:
- `/services/ai-automation` → AIAutomation
- `/services/meta-ads` → MetaAds
- `/industries/hvac` → IndustryHVAC
- `/case-studies` → CaseStudies
- `/about` → About
- Keep existing `/`, `/work`, `/services`, `*` routes

## 4. Footer Update (`src/components/Footer.tsx`)
- Add links for Case Studies, About, and key service/industry pages in Quick Links

## Design Consistency
- All backgrounds: `bg-slate-900` / `bg-slate-800` alternating
- Headings: `text-white`, body: `text-slate-300`
- CTAs: `bg-amber-500 hover:bg-amber-600` — all trigger `openForm()`
- Links: `text-sky-400 hover:text-sky-300`
- Borders: `border-slate-700`
- No dollar amounts per user constraint (case study metrics will use lead counts, close rates, time periods — not revenue figures)

## Files
- **Modified**: `Navigation.tsx`, `App.tsx`, `Footer.tsx`
- **Created**: `AIAutomation.tsx`, `MetaAds.tsx`, `IndustryHVAC.tsx`, `CaseStudies.tsx`, `About.tsx` (all in `src/pages/`)

