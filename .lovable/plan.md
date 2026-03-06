

# Logo Marquee Redesign

## Problem
On mobile, logos scroll too slowly (40s animation) and only one logo is visible at a time due to large `min-w-[120px]` + `px-8` spacing.

## Changes to `src/components/LogoMarquee.tsx`

### Layout
- Reduce logo spacing on mobile: `px-4 md:px-8`
- Reduce logo min-width on mobile: `min-w-[100px] md:min-w-[120px]`
- Shrink logos slightly on mobile: `h-10 md:h-14` so 2-3 are visible at once
- Speed up animation on mobile: use two CSS classes — `animate-marquee-mobile md:animate-marquee` or simply reduce the base duration from 40s to ~25s

### Visual refresh
- Add a subtle grayscale filter to logos with hover-to-color effect: `grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all`
- Update heading to "Trusted by businesses across the U.S." (aligns with broader audience language)

### Tailwind config (`tailwind.config.ts`)
- Add a faster marquee variant or just change the existing animation duration from `40s` to `25s`

### Files modified
- `src/components/LogoMarquee.tsx` — tighter spacing, smaller logos on mobile, grayscale filter
- `tailwind.config.ts` — faster marquee speed

