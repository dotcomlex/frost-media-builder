

# Tone Down Particles & Add Mountain Background

## Problem
The globe particles are too large, too orange, and too overwhelming. The mountain background image that was previously in the hero is missing. The user wants subtle, nearly-white particles layered over the mountain image so everything feels balanced and the text remains readable.

## Changes

### 1. `src/components/ui/globe-hero.tsx`
- **Particle color**: Change from `#D4A843` (amber) to `#E8E8E8` (off-white) — visible but not attention-grabbing
- **Particle size**: Reduce from `0.035` to `0.015` — much smaller, more like floating dust
- **Particle opacity**: Reduce from `0.8` to `0.45` — subtle presence
- **Add mountain background**: Import `hero-mountains.png` and render it as an `<img>` with `object-cover` behind the globe canvas, with a dark overlay on top for contrast
- **Layer order**: Mountain image (z-1) → dark overlay (z-2) → globe canvas (z-3) → gradient overlays (z-4/5) → content (z-10)
- **Remove ambient glow circles** — they add to the overwhelming orange feel

### 2. `src/components/HeroSection.tsx`
- No changes needed — content stays the same

## Files Modified
- `src/components/ui/globe-hero.tsx`

