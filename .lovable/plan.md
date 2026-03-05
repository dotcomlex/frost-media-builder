

# Rebuild Globe Hero to Match Reference

## Problem
The current globe is barely visible — it's offset to the right with heavy dark overlays hiding it. The reference shows a large, centered, prominent wireframe globe with text overlaid directly on top of it.

## Changes

### 1. `src/components/ui/globe-hero.tsx`
- **Center the camera**: Change from `position={[2, 0.3, 3]}` (offset right) to `position={[0, 0, 3.5]}` (centered)
- **Increase globe size**: Bump `globeRadius` default from `1.8` to `2.2`
- **Make dots more visible**: Increase `pointsMaterial` size from `0.025` to `0.035`, opacity from `0.6` to `0.8`
- **Add ambient glow effects**: Two large blurred circles (`bg-primary/5` and `bg-primary/3`) with `blur-3xl animate-pulse` behind the globe for the subtle radial light effect seen in the reference
- **Reduce gradient overlays**: Current overlays are `from-black/90 via-black/70 to-black/30` which almost completely hides the globe. Reduce to `from-black/60 via-transparent to-transparent` so the globe shows through prominently
- **Add top/bottom subtle gradient**: Light `from-background/30 via-transparent to-background/50` for edge softening

### 2. `src/components/HeroSection.tsx`
- Keep the existing left-aligned Frost Media branding and copy (this is the "tailored to our brand" part)
- Update `globeRadius` prop to `2.2` for larger globe
- The globe will now be centered and visible behind the text instead of hidden

## Files Modified
- `src/components/ui/globe-hero.tsx` — center globe, increase visibility, add glow effects
- `src/components/HeroSection.tsx` — update globe size prop

