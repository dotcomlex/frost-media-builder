

# Refine Hero: Smaller Particles, Bigger Text, Better Copy

## Changes

### 1. `src/components/ui/globe-hero.tsx`
- **Shrink particles**: Reduce `size` from `0.015` to `0.008` — less in-your-face, especially on mobile
- **Slow rotation**: Reduce default `rotationSpeed` from `0.003` to `0.0015`
- **Push camera back**: Move from `position={[0, 0, 3.5]}` to `[0, 0.5, 4.5]}` — particles further away appear smaller, and globe sits slightly higher to clear the text area

### 2. `src/components/HeroSection.tsx`
- **Bigger headline**: Bump from `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` to `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- **Add text shadow**: Add `[text-shadow:_0_2px_20px_rgba(0,0,0,0.7)]` style to h1 and subheadline so they pop against the particles/mountains
- **Bump subheadline size**: From `text-sm md:text-base` to `text-base md:text-lg`
- **Replace social proof line**: Swap "150+ businesses scaled · Meta & Shopify Partner" with something local/Denver-focused like: `"Trusted by Colorado's fastest-growing brands"`
- **Update rotation speed prop** to `0.0015`

## Files Modified
- `src/components/ui/globe-hero.tsx`
- `src/components/HeroSection.tsx`

