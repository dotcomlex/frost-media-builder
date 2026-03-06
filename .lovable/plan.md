

# Meta Ads Page — Premium Mobile-First Redesign

## Problem
The current page is template-y: uniform vertical cards, emoji icons instead of real logos, redundant sections, and no visual variety. On mobile it's just an endless stack of same-looking blocks.

## Approach
Complete rewrite of `src/pages/MetaAds.tsx` (~700 lines) with visual variety, real platform SVGs, generated images, horizontal scroll sections, and a mobile-first layout that feels like a premium landing page — not a template.

## Section-by-Section Redesign

### A. Hero — Immersive, compact
- Mountain bg with gradient overlay (keep)
- Tighter padding on mobile (`pt-24 pb-14`)
- Animated Meta partner badge inline with headline
- Stats row with glowing ice-blue accent borders, arranged 3-across on mobile

### B. Platform Logos Strip — Real SVG logos
- Replace emoji icons with **inline SVGs** for Facebook, Instagram, TikTok, Snapchat, Pinterest, Messenger (actual brand colors)
- Horizontal auto-scrolling marquee on mobile (like the existing LogoMarquee pattern) — not a static grid
- Dark bg strip for visual contrast break

### C. "Why Social Ads Still Win" — Educational, visual
- Instead of 3 identical cards, use an **alternating layout**: each point is a full-width card with a large stat on the left and explanation on the right (or stacked on mobile with the stat as a big accent)
- Include real numbers: "3.96B monthly active users", "$0.97 avg CPC", "8.25% avg conversion rate"
- Feels like reading an infographic, not a brochure

### D. Results Section — Dashboard-style
- Generate 2 images using Nano image generation API:
  1. A Facebook Ads Manager dashboard showing positive ROAS metrics
  2. A before/after campaign performance comparison
- Display in a **horizontal scroll container** on mobile with snap points
- Overlay styled metric badges on the images ("+32% conversions", "3.2x ROAS")
- Below: animated counter stats that count up on scroll into view

### E. Process — Timeline, not cards
- Vertical timeline on mobile with a glowing ice-blue line connecting steps
- Each step has a number badge, title, and description
- More compact than 4 equal cards — feels like progression

### F. Industries — Horizontal scroll cards
- Instead of a 3x2 grid, use **horizontally scrolling cards** on mobile with snap
- Each card has a gradient bg (unique per industry), icon, name, and one-liner result
- Adds visual variety and horizontal interaction

### G. "Traditional Agency vs Frost Media" — Side-by-side swipe
- On mobile: two stacked cards with clear red/green theming
- Add a subtle "swipe" indicator or tab toggle between the two on mobile
- Keep the content but tighten copy

### H. Testimonials — Keep horizontal scroll
- Already works, just tighten spacing

### I. FAQ — Keep accordion
- Already works, minor style tweaks

### J. Final CTA — Keep mountain bg
- Already works

## Key Technical Details

**File modified:** `src/pages/MetaAds.tsx` — full rewrite

- Real platform SVGs defined inline (small, ~10 lines each for FB/IG/TikTok/Snap/Pinterest/Messenger brand marks)
- Use Nano image generation to create 2 dashboard mockup images, saved as assets
- Horizontal scroll sections use `overflow-x-auto snap-x snap-mandatory` with `-webkit-overflow-scrolling: touch`
- Animated counters using `framer-motion`'s `useInView` + `useMotionValue` for counting up stats
- Remove the lead marketplace comparison section (redundant with the agency comparison)
- Mobile-first: every section designed for 375px width first, enhanced for desktop

