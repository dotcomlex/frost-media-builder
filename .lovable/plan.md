

# Logo Marquee Light Break + Services Enhancement + System Section Decision

## Current Background Flow
```text
Hero:          bg-alpine-black   (black)
Marquee:       bg-alpine-dark    (dark) ← blends with hero
Services:      bg-alpine-dark    (dark) ← blends with marquee
Process:       bg-frost-light    (LIGHT)
Testimonials:  bg-alpine-dark    (dark)
System:        bg-frost-light    (LIGHT)
About:         bg-alpine-dark    (dark)
FAQ:           bg-frost-light    (LIGHT)
CTA:           bg-alpine-black   (black)
Footer:        bg-alpine-dark    (dark)
```

## Changes

### 1. `LogoMarquee.tsx` — White/light background break
- Change `bg-alpine-dark` → `bg-white` (or `bg-frost-light`)
- Remove `brightness-0 invert` filter so logos show in full color
- Remove `border-y border-white/5`, add subtle `border-y border-border` instead
- This creates a clear visual break between Hero (black) and Services (dark)

### 2. `CapabilitiesSection.tsx` — More engaging service cards
- Add a small illustrative image/gradient visual to each card (a decorative gradient panel or abstract shape at the top of each card to represent the service visually)
- Use colored gradient backgrounds per card (subtle, not overwhelming) — e.g., a top accent bar or a small gradient circle behind the icon
- This makes cards feel less template-y and more premium

### 3. `SystemBreakdownSection.tsx` — Merge into services or make it more distinct
My recommendation: **Keep it but make it more actionable and distinct from Services.** Right now it overlaps with Services content. Instead, reframe it as a **numbered step-by-step flow** — "How It Works" rather than "The System." Add numbered steps (01 → 02 → 03) with connecting arrows/lines between columns, and add a CTA at the bottom ("See it in action" or "Book a call"). This differentiates it from the capabilities grid above.

### Files Modified
`LogoMarquee.tsx`, `CapabilitiesSection.tsx`, `SystemBreakdownSection.tsx`

