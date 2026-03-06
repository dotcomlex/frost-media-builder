

# Complete Homepage Redesign — Slate Dark Theme with New Sections

## Overview
This is a full homepage rebuild: new dark slate color system, 6 new sections, redesigned nav with dropdowns, hero with metrics carousel, and a completely restructured page flow.

## Scope Summary

**New sections to create:** Trust Bar, Problem, Comparison Table, Results/Case Studies, Industries
**Sections to heavily redesign:** Navigation (dropdown menus), Hero (metrics carousel + trust pills), Services (5 cards, new copy), Process, Testimonials, Final CTA, Footer
**Sections to remove from homepage:** SystemBreakdownSection (Conversational AI phone mock), AboutSection (folded into other sections)

## Color System Change
Switch from the current alpine/ice-blue palette to a **slate-based dark theme**:
- Backgrounds: `slate-900`, `slate-800` alternating
- Borders: `slate-700`, `slate-800`
- Text: `white`, `slate-200`, `slate-300`, `slate-400`
- Accent: `sky-400`/`sky-500` (replaces ice-blue)
- CTA: `amber-500`/`amber-600` (stays)
- Update CSS variables in `index.css` to map to new slate values

## Changes by File

### `src/index.css` — Update CSS variables
- Remap `--alpine-dark`, `--background`, `--foreground`, `--muted`, `--border`, etc. to slate equivalents
- Add new slate color variables as needed

### `src/components/Navigation.tsx` — Full Rebuild
- Dark nav bar `bg-slate-900 border-b border-slate-800`
- Logo: "FROST MEDIA" text (keep logo image)
- 6 nav items: Services▼, Industries▼, Results, About▼, Resources▼, Contact — with hover dropdown menus
- Dropdowns: `bg-slate-800/95 backdrop-blur rounded-lg shadow-2xl` with links to sub-pages (these pages won't exist yet — links will be dead for now)
- Right side: phone number + amber "Free Strategy Session" button
- Mobile: hamburger → full-screen overlay with accordion sub-menus

### `src/components/HeroSection.tsx` — Rebuild
- Keep existing mountain/globe background, add darker gradient overlay
- Badge pill: "Denver, Colorado | AI-Powered Marketing Systems"
- Headline: "We Build Marketing Systems That Actually Generate Revenue"
- **Metrics carousel**: 4 slides auto-rotating every 4s with crossfade (1,900+ Leads, $180K Revenue, 78% Close Rate, <60s Response)
- Subhead copy update
- 2 CTAs: "See Our Results →" (amber) + "Schedule a Call" (outline)
- Trust pills row: "7+ Years | Denver Based | 100+ Campaigns | AI-Powered"
- Scroll indicator at bottom

### `src/components/TrustBar.tsx` — New
- Dark bar `bg-slate-800 border-y border-slate-700`
- 6 items with icons: Google 4.9★, Meta Partner, $2M+ Revenue, Denver CO, Partner logos, 100+ Systems
- Horizontal scroll on mobile

### `src/components/ProblemSection.tsx` — New
- "Tired of Paying for Leads Your Competitors Also Get?"
- 3 cards: Flat Sales, Rising Costs, Slow Response — each with icon, description, "We fix this →" link

### `src/components/CapabilitiesSection.tsx` — Redesign
- Dark `bg-slate-800`, 5 service cards (AI Automation, Meta Ads, Web Design, E-Commerce, Lead Gen)
- Remove service images, use icon-based cards instead
- Numbered cards (01-05) with sky-400 icon boxes, hover lift effect
- Bottom CTA

### `src/components/ComparisonTable.tsx` — New
- "Stop Competing for Shared Leads" — Frost Media vs HomeAdvisor vs Angi vs Thumbtack
- 6 rows comparing exclusivity, response time, cost, quality, data ownership, contracts
- Frost column highlighted with sky-500 accent
- Cards layout on mobile

### `src/components/ResultsSection.tsx` — New
- 3 big metrics (500+ Leads, <$15 CPL, 3X Revenue)
- 3 case study cards: Beauty (Divas), Concrete (14er), Painting (Jose's)
- "See All Case Studies →" link

### `src/components/ProcessSection.tsx` — Redesign
- "From First Call to First Lead in 14 Days"
- 3 step cards with large background numbers, arrows between on desktop
- Timeline labels (30-60 min, 7-10 days, Ongoing)

### `src/components/SystemDiagramSection.tsx` — Repurpose as Testimonials
- Redesign with slate-800 bg, updated card styles
- Keep existing testimonial data, update card colors to slate theme

### `src/components/IndustriesSection.tsx` — New
- "Built for Home Services Businesses"
- 6 cards: HVAC, Plumbing, Concrete, Electrical, Roofing, General Contractors
- Icon + title + short desc, hover effects

### `src/components/FinalCTASection.tsx` — Redesign
- Amber gradient background `bg-gradient-to-br from-amber-600 to-amber-700`
- Bold headline, 2 CTAs (white button + phone outline button)
- Optional Calendly embed placeholder

### `src/components/Footer.tsx` — Redesign
- 4 columns: Brand + socials, Services links, Company links, Contact info (address, phone, email, hours)
- Bottom bar with copyright + legal links

### `src/pages/Index.tsx` — Update section order
New order: Navigation → Hero → TrustBar → ProblemSection → CapabilitiesSection → ComparisonTable → ResultsSection → ProcessSection → Testimonials → IndustriesSection → FinalCTA → Footer

## Technical Notes
- All dropdown nav links point to routes that don't exist yet — they'll 404 for now. This is intentional; sub-pages will be built later.
- Metrics carousel uses Framer Motion `AnimatePresence` with crossfade for auto-rotating stats.
- Comparison table uses a responsive grid that transforms to stacked cards on mobile.
- The `font-mono-tech`, `font-heading` utility classes remain unchanged.
- Remove unused service images from imports in CapabilitiesSection.

## Files Modified
- `src/index.css`
- `src/pages/Index.tsx`
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/LogoMarquee.tsx` (remove or keep as trust bar replacement)
- `src/components/CapabilitiesSection.tsx`
- `src/components/ProcessSection.tsx`
- `src/components/SystemDiagramSection.tsx`
- `src/components/FinalCTASection.tsx`
- `src/components/Footer.tsx`

## New Files
- `src/components/TrustBar.tsx`
- `src/components/ProblemSection.tsx`
- `src/components/ComparisonTable.tsx`
- `src/components/ResultsSection.tsx`
- `src/components/IndustriesSection.tsx`

