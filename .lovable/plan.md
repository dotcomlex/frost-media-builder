

# Fix Color Consistency, Services, Testimonials & Logos

## Problem
The `alpine-navy` (#0B1D33 dark blue) creates a jarring color break between sections. User wants one consistent dark color throughout, not alternating between near-black and dark-blue.

## Color Fix
Remove `alpine-navy` from all section backgrounds. Use only two backgrounds:
- **Dark sections**: `bg-alpine-dark` (near-black `220 20% 6%`)
- **Light section**: `bg-frost-light` (Process only — keeps the visual break)
- **Hero/CTA**: `bg-alpine-black` (pure black)

Sections will use subtle dividers (thin `border-white/5` lines or slight gradient overlays) instead of different background colors to differentiate.

## Files & Changes

### 1. `CapabilitiesSection.tsx` — Services Compact Grid
- Change `bg-alpine-navy` → `bg-alpine-dark`
- Remove Google Ads mention; add Copywriting as a service
- Rewrite service cards: Paid Media (Meta only), Lead Generation, AI Systems, Copywriting & Creative
- Add small icon illustrations per card instead of just lucide icons — use subtle gradient bg panels
- Keep compact 2x2 grid, benefit-first copy
- Add subtle top border divider to separate from marquee

### 2. `AboutSection.tsx` — Remove Stats, Fix Background
- Change `bg-alpine-navy` → `bg-alpine-dark`
- Remove the stats row (7+ Years, 150+ Clients, $10M+ Revenue) entirely
- Keep the story copy and section header

### 3. `SystemDiagramSection.tsx` — Fix Testimonials
- Slow down marquee/scroll speed if auto-scrolling
- Generate proper avatar images using AI image generation API (8 realistic headshots)
- Add more testimonials (expand from 8 to ~10-12)
- Fix any clipping at the end of the scroll container
- Ensure all cards are fully visible and scrollable on mobile

### 4. `LogoMarquee.tsx` — Fix Logo Visibility
- Slow down the marquee animation (`20s` → `40s`)
- Ensure all logos render properly with correct sizing
- Check that `brightness-0 invert` filter works for all logo formats (PNG vs SVG)

### 5. `tailwind.config.ts` — Slow marquee
- Change marquee duration from `20s` to `40s`

### 6. `testimonial-cards.tsx` — Better avatars
- Use AI-generated avatar images instead of pravatar.cc

### Files Modified
`CapabilitiesSection.tsx`, `AboutSection.tsx`, `SystemDiagramSection.tsx`, `LogoMarquee.tsx`, `testimonial-cards.tsx`, `tailwind.config.ts`

