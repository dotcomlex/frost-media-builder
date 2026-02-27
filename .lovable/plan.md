

# Fix Background Blending + Add Services + New System Breakdown Section

## Problem
From Testimonials all the way to Footer, everything is `bg-alpine-dark` — five consecutive dark sections with zero visual breaks. The user keeps telling us about this and we keep missing it.

## Current Background Flow
```text
Hero:          bg-alpine-black   (black)
Marquee:       bg-alpine-dark    (dark)
Services:      bg-alpine-dark    (dark)
Process:       bg-frost-light    (LIGHT) ← only break
Testimonials:  bg-alpine-dark    (dark)
About:         bg-alpine-dark    (dark) ← blends
FAQ:           bg-alpine-dark    (dark) ← blends
CTA:           bg-alpine-black   (dark) ← blends
Footer:        bg-alpine-dark    (dark) ← blends
```

## Fixed Background Flow (alternating light breaks)
```text
Hero:          bg-alpine-black   (black)
Marquee:       bg-alpine-dark    (dark)
Services:      bg-alpine-dark    (dark, border divider)
Process:       bg-frost-light    (LIGHT)
Testimonials:  bg-alpine-dark    (dark)
NEW Section:   bg-frost-light    (LIGHT) ← new break
About:         bg-alpine-dark    (dark)
FAQ:           bg-frost-light    (LIGHT) ← changed
CTA:           bg-alpine-black   (black)
Footer:        bg-alpine-dark    (dark)
```

---

## Changes

### 1. `CapabilitiesSection.tsx` — Expand to 6 services (3x2 grid)
Add back **Web Design & Funnels** and add **CRM & Automation** as the 6th card. Grid becomes `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Six services:
- Paid Media (Meta campaigns)
- Lead Generation
- AI Systems
- Copywriting & Creative
- Web Design & Funnels (custom sites, landing pages, conversion funnels)
- CRM & Automation (pipeline management, automated follow-ups, lead routing)

Remove any mention of Google Ads. Keep benefit-first copy.

### 2. New `SystemBreakdownSection.tsx` — "How We Build Your Revenue Machine"
A new light-background section (`bg-frost-light`) placed between Testimonials and About. Three visual columns/cards showing:
1. **Custom Ad Campaigns** — We build and manage Meta ad campaigns tailored to your market, audience, and goals
2. **AI-Powered Response System** — Custom AI chatbot + voice + SMS agent that responds to every inbound lead in under 60 seconds, 24/7
3. **Revenue Infrastructure** — Funnels, landing pages, CRM setup, and automated follow-ups that turn leads into closed deals

Each card has an icon, short headline, 2-3 sentence description. Clean, light theme with `text-foreground` colors.

### 3. `AboutSection.tsx` — Keep dark, no changes needed (now separated by the new light section above it)

### 4. `FAQSection.tsx` — Change to `bg-frost-light`
Switch all text/card colors to light-theme variants (`text-foreground`, `bg-white`, `border-border`). This creates a visual break between About (dark) and CTA (black).

### 5. `Index.tsx` — Add SystemBreakdownSection between Testimonials and About

### Files Modified
`CapabilitiesSection.tsx`, `FAQSection.tsx`, `Index.tsx` + new `SystemBreakdownSection.tsx`

