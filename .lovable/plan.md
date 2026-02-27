

# Full Site Overhaul Plan

## Current Section Background Flow (the blending problem)
```text
Hero:          bg-alpine-dark  (dark)
LogoMarquee:   bg-frost-light  (light)
Services:      bg-frost-light  (light) ← blends with marquee
Process:       bg-alpine-dark  (dark)
Testimonials:  bg-alpine-dark  (dark) ← blends with process
About:         frost-light gradient (light)
FAQ:           bg-frost-light  (light) ← blends with about
CTA:           bg-alpine-dark  (dark)
Footer:        bg-alpine-dark  (dark) ← blends with CTA
```

## New Background Rhythm (alternating dark/light with clear separation)
```text
Hero:          bg-black (pure black so particle dots pop)
LogoMarquee:   bg-alpine-dark (dark, subtle divider)
Services:      bg-alpine-navy (distinct dark blue, 2x2 grid)
Process:       bg-frost-light (LIGHT - breaks the dark run)
Testimonials:  bg-alpine-dark (dark, cards glow)
About:         bg-alpine-navy + subtle gradient overlay
FAQ:           bg-alpine-dark (dark accordion)
CTA:           bg-black + frost-pattern (punchy contrast)
Footer:        bg-alpine-dark
```

---

## Changes by File

### 1. `src/index.css` - Color Variables
- Change `--alpine-dark` to a true near-black: `220 20% 6%`
- Add `--alpine-black: 0 0% 4%` for hero/CTA
- Keep `--secondary` (amber) but limit usage to CTAs only
- Change star ratings from amber to ice-blue

### 2. `src/components/Navigation.tsx` - Transparent to Frosted
- Default state: `bg-transparent` with no border
- Scrolled state: `bg-alpine-dark/90 backdrop-blur-xl border-b border-white/10`
- Change CTA button from `bg-secondary` to `bg-ice-blue text-white hover:bg-deep-ice`
- Keep "Let's Talk" amber CTA (only amber element in nav)

### 3. `src/components/HeroSection.tsx` - Black Background
- Change `bg-alpine-dark` to `bg-[hsl(var(--alpine-black))]` so dots stand out
- Change CTA from amber to ice-blue with glow: `bg-ice-blue shadow-ice-blue/30`
- Keep amber ONLY on the primary "Book a Free Strategy Call" CTA

### 4. `src/components/LogoMarquee.tsx` - Add Uploaded Logos
- Copy uploaded SVGs (Partners_WB-04.svg = TikTok, Partners_WB-08.svg = Shopify, Client-05.svg = AMADOR, Client-04.svg = cursive brand, Client-09.svg = geometric brand) to `src/assets/`
- Add them alongside existing PCA, CPIA, Meta logos
- Change background to `bg-alpine-dark` with `border-white/5` dividers
- Make logos white/light colored on dark background

### 5. `src/components/CapabilitiesSection.tsx` - Compact 2x2 Grid
- Replace the 4 massive stacked cards with a tight 2x2 grid (`grid-cols-1 sm:grid-cols-2`)
- Each card: icon + title + 2-line benefit statement + small "Learn more" link
- Remove the "Outcome:" label entirely; rewrite as benefit-first copy
- Remove long deliverable bullet lists; replace with 3 short benefit phrases per card
- Remove `border-secondary` accents; use `border-ice-blue/20` uniformly
- Background: `bg-alpine-navy` (distinct from hero and process)
- Compact padding: `p-5 md:p-6` instead of `p-8 md:p-10`
- Rewrite copy to sell results, not technical details:
  - "Paid Media" -> "More customers, lower cost per lead"
  - "Lead Gen" -> "Your calendar, fully booked every month"
  - "AI Systems" -> "Instant responses, zero missed leads"
  - "Web & Funnels" -> "Pages that convert visitors into revenue"

### 6. `src/components/ProcessSection.tsx` - Light Background
- Change to `bg-frost-light` to break the dark section run
- Update text colors to `text-foreground` and `text-muted-foreground`
- Icons: `bg-ice-blue/10 border-ice-blue/30` with `text-ice-blue` icons
- Line connector: `bg-ice-blue/30`

### 7. `src/components/SystemDiagramSection.tsx` - Fix Testimonial Carousel
- Keep `bg-alpine-dark` (now visually distinct because Process above is light)
- Fix card widths: `w-[280px] md:w-[340px]` (smaller, more visible at once)
- Add padding-right on last card so it doesn't clip: add a spacer div at the end
- Ensure snap points work: `snap-start` instead of `snap-center`
- Add subtle gradient fade on left/right edges of the scroll container

### 8. `src/components/ui/testimonial-cards.tsx` - Restyle
- Stars: change from `fill-amber text-amber` to `fill-ice-blue text-ice-blue`
- Better card styling: `bg-white/[0.03] border-white/[0.08]` for subtler glass
- Larger avatar: `h-16 w-16` with ice-blue border ring
- Quote text slightly larger on mobile for readability

### 9. `src/components/AboutSection.tsx` - Dark Background + Expanded Content
- Change to `bg-alpine-navy` with text-on-dark colors
- Add a stats row: "7+ Years", "150+ Clients", "$10M+ Revenue Generated"
- Add more depth to the story copy

### 10. `src/components/FAQSection.tsx` - Dark Theme + More FAQs
- Change to `bg-alpine-dark`
- Restyle accordion items: `bg-white/5 border-white/10` dark glass cards
- Text: `text-text-on-dark`, triggers: `hover:text-ice-blue`
- Add 3 more FAQs:
  - "How much do your services cost?"
  - "What's your onboarding process like?"
  - "Can you guarantee results?"

### 11. `src/components/FinalCTASection.tsx` - Pure Black
- Change to `bg-[hsl(var(--alpine-black))]`
- Keep amber CTA button (this is where amber shines)

### 12. `src/components/Footer.tsx` - No changes needed

---

## Assets to Copy
- `user-uploads://Partners_WB-04.svg` -> `src/assets/logo-tiktok.svg`
- `user-uploads://Partners_WB-08.svg` -> `src/assets/logo-shopify.svg`
- `user-uploads://Client-05.svg` -> `src/assets/logo-client-amador.svg`
- `user-uploads://Client-04.svg` -> `src/assets/logo-client-script.svg`
- `user-uploads://Client-09.svg` -> `src/assets/logo-client-geo.svg`

## Files Modified
`src/index.css`, `Navigation.tsx`, `HeroSection.tsx`, `LogoMarquee.tsx`, `CapabilitiesSection.tsx`, `ProcessSection.tsx`, `SystemDiagramSection.tsx`, `testimonial-cards.tsx`, `AboutSection.tsx`, `FAQSection.tsx`, `FinalCTASection.tsx`

