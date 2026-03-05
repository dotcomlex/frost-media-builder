

# Homepage Refinements — Logo, Services, Testimonials, Navigation, Colors & Footer

## Overview
Multiple issues: white-on-white sections blending, service card images removed, orange accent overused instead of blue (Frost Media = ice/blue brand), sticky nav inconsistent, footer/CTA need revamp.

## Changes

### 1. `src/components/LogoMarquee.tsx`
- Reduce heading from `text-3xl md:text-5xl` to `text-xl md:text-2xl`
- Replace "Trusted by thousands of businesses worldwide" with something local like "Trusted by businesses across the U.S."
- Slow carousel from 1000ms to 2500ms
- Add a dark filter/invert on white logos (T&S `.svg`, etc.) so they're visible on white bg. Use `brightness-0 opacity-60` on all logos for a uniform grayscale look
- Increase logo size slightly on mobile: `h-12 md:h-14`

### 2. `src/components/CapabilitiesSection.tsx` — Service Cards with Images
- Change background from `bg-white` to `bg-gray-50` to separate from Logo section
- Bring back the 6 service images (`service-social-ads.jpg`, `service-web-design.jpg`, `service-ecommerce.jpg`, `service-lead-gen.jpg`, `service-ai.jpg`, `service-crm.jpg`) as card headers
- Each card: image on top (aspect-[4/3], `object-cover`, `rounded-t-xl`), content below
- Generate 6 new AI images (1080x1080, dark/blue-toned, on-brand) for each service and save them — this ensures proper sizing
- On mobile: 1 column, full-width cards with image + text. On desktop: 3-column grid
- Replace all orange/`secondary` accent usage with `ice-blue`/`primary` (blue) for icon backgrounds, hover states, "Learn more" text

### 3. `src/components/SystemDiagramSection.tsx` — Testimonials
- Change background from `bg-muted/50` to a darker treatment: use `bg-alpine-dark` with mountain bg image overlay (similar to hero) for visual interest and contrast
- Update text colors back to `text-text-on-dark` for heading/label
- Update gradient fades to match dark bg
- Update nav buttons to dark theme

### 4. `src/components/ui/testimonial-cards.tsx`
- Since testimonials section goes dark again: revert card to dark card style (`bg-white/[0.04]`, `text-text-on-dark`, border `border-white/10`)
- Stars: change from `text-secondary` (orange) to `text-ice-blue` (blue)
- Tag badge: change from `bg-secondary/10 text-secondary` to `bg-ice-blue/10 text-ice-blue`

### 5. `src/components/Navigation.tsx` — Remove Sticky
- Remove `fixed` positioning entirely — make nav `absolute top-0` so it overlays the hero but doesn't stick on scroll
- Remove the scroll listener and `scrolled` state
- Keep the transparent styling

### 6. Color Consistency — Blue over Orange
- **Hero** (`HeroSection.tsx`): Change "Growth Machines" span from `text-secondary` (orange) to `text-ice-blue` (blue). Change CTA button to keep amber (only CTAs use amber). Change "Book a Free Strategy Call" button accent text stays amber.
- **About** (`AboutSection.tsx`): Change "About Us" label and icon bg from `text-secondary`/`bg-secondary/10` to `text-ice-blue`/`bg-ice-blue/10`
- **FAQ** (`FAQSection.tsx`): Change open border from `border-secondary/30` to `border-ice-blue/30`, hover from `hover:text-secondary` to `hover:text-ice-blue`
- **Capabilities**: Icon bg from `bg-secondary/10` → `bg-ice-blue/10`, icon color from `text-secondary` → `text-ice-blue`
- **SystemBreakdown**: Keep as-is (already uses foreground colors)
- **Rule**: Amber/secondary ONLY on CTA buttons. Everything else uses ice-blue/primary.

### 7. `src/components/FinalCTASection.tsx` — Revamp Bottom CTA
- Use the mountain background image (`hero-mountains.png`) with dark overlay for visual richness instead of plain `bg-alpine-black`
- Larger, bolder headline
- Add a short subline about what they'll get on the call
- Keep amber CTA button (this is the one place amber belongs)

### 8. `src/components/Footer.tsx` — Revamp
- Add 3 columns instead of 2: Logo+tagline, Quick Links, Contact Info
- Add a "Book a Call" CTA button in the footer
- Use ice-blue for social icon hovers (already done)
- Add more visual polish: slightly larger padding, better spacing

### 9. Service Card Image Generation
- Use AI image generation to create 6 new images (1080x1080) for each service card
- Style: dark blue-toned, minimalist, professional illustrations representing each service
- Save as assets and import into CapabilitiesSection

## Files Modified
- `src/components/LogoMarquee.tsx`
- `src/components/CapabilitiesSection.tsx`
- `src/components/SystemDiagramSection.tsx`
- `src/components/ui/testimonial-cards.tsx`
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/FinalCTASection.tsx`
- `src/components/Footer.tsx`
- 6 new generated service card images

