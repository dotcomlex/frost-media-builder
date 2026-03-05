

# Replace Hero with Rotating Dot Globe Background

## What
Replace the current mountain image + DottedSurface hero with a Three.js rotating dot globe as the background, keeping Frost Media's existing headline, CTA, and branding. The globe replaces both the mountain image and the dotted particle surface.

## Dependencies
- Install `@react-three/fiber@^8.18` and `@react-three/drei@^9.122.0` (already have `three`)

## Changes

### 1. Create `src/components/ui/globe-hero.tsx`
- Build the DotGlobeHero component from scratch (the registry JSX was stripped in transit)
- Three.js `<Canvas>` with a `<points>` mesh using `icosahedronGeometry` (detail 8) rendered as dots
- Slow auto-rotation via `useFrame`
- Component accepts `children` as overlay content
- Dark background, amber/gold-tinted dots to match brand
- Positioned to the right side of the viewport so it doesn't clash with left-aligned text

### 2. Rewrite `src/components/HeroSection.tsx`
- Remove mountain image import and `<DottedSurface>` usage
- Wrap the hero content inside `<DotGlobeHero>` as children
- Keep all existing content: location tag, headline ("We Build Growth Machines"), description, CTA button, social proof line
- Globe sits as a background/ambient element behind the text
- Dark gradient overlay to ensure text readability over the globe

### 3. Remove `src/components/ui/dotted-surface.tsx` dependency from hero
- The DottedSurface is only used in HeroSection; removing it from there (keep the file in case other sections use it)

## Files Modified
- `src/components/ui/globe-hero.tsx` — new file
- `src/components/HeroSection.tsx` — use globe as background instead of mountain + particles

