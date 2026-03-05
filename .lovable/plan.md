

# Fix Contrast, Logo Section, Testimonials & Conversational AI Layout

## Issues Identified

1. **Logo Marquee**: Dark background blends with surrounding sections. Background boxes around logos look bad. Needs white background, no card boxes, just logos.
2. **Testimonials (SystemDiagramSection)**: Blue/dark background blends with other dark sections — no contrast. Needs lighter background.
3. **Conversational AI (SystemBreakdownSection)**: On mobile, the Frost AI phone mock is at the bottom (order-2). Needs to be right under the headline on mobile. Response time says "< 5s" but should be "< 30s". Remove "See It In Action" button. Too cluttered on mobile.
4. **Capabilities images**: Too colorful/distracting (noted but images are assets — will reduce visual weight via overlay or desaturation).

## Changes

### 1. `src/components/LogoMarquee.tsx`
- Change background from `bg-alpine-dark` to `bg-white`
- Change heading text color to dark (`text-foreground`)
- Remove the dark card boxes (`bg-alpine-navy aspect-square rounded-xl p-6`) — just show logos directly
- Make logos larger and clearly visible: `h-10 md:h-14 w-auto object-contain`
- Keep carousel auto-scroll logic unchanged

### 2. `src/components/SystemDiagramSection.tsx` (Testimonials)
- Change from dark mountain background overlay to a lighter treatment — use `bg-frost-light` or a lighter overlay so it contrasts with the dark Capabilities section above and the Conversational AI section below
- Update text colors accordingly (dark text on light bg)
- Update edge fade gradients to match light bg

### 3. `src/components/SystemBreakdownSection.tsx` (Conversational AI)
- **Mobile order**: Move Frost AI phone mock to appear right after the headline on mobile (change from `order-2` to `order-1` on mobile, keep desktop layout)
- **Response time**: Change "< 5s" to "< 30s"
- **Remove** the "See It In Action" button
- Simplify mobile layout: reduce clutter (remove industry tags on mobile, keep channels)

### 4. `src/components/CapabilitiesSection.tsx` (Service images)
- Add a desaturation/dark overlay on the service images to reduce visual distraction: add `brightness-75 saturate-50` or similar filter classes

## Files Modified
- `src/components/LogoMarquee.tsx`
- `src/components/SystemDiagramSection.tsx`
- `src/components/SystemBreakdownSection.tsx`
- `src/components/CapabilitiesSection.tsx`

