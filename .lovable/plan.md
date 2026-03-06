

# Clean Up Hero, Logo Marquee, and Nav Logo Alignment

## Changes

### 1. `src/components/Navigation.tsx` (line 29)
- Change `-ml-2` to `-ml-4` for more left shift on mobile

### 2. `src/components/HeroSection.tsx`
- **Delete lines 13-20** — remove the "Denver, Colorado" text block
- **Delete lines 57-59** — remove the "Trusted by Colorado's fastest-growing brands" text
- Keep the button alone in the CTA area

### 3. `src/components/LogoMarquee.tsx`
- **Line 31-33**: Update headline to something like "Brands That Trust Us" or "Our Clients" — cleaner and more confident
- **Line 52**: Remove the `style={{ filter: 'grayscale(100%) contrast(0) brightness(0.4)' }}` so logos display in full color

