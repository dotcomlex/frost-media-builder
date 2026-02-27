

# Integrate DottedSurface 3D Particle Effect into Hero Section

## Dependencies to Install
- `three` (Three.js for 3D rendering)
- `next-themes` is already installed

## Steps

### 1. Create `src/components/ui/dotted-surface.tsx`
Copy the component code, adapting for this project:
- Remove `'use client'` directive (not Next.js)
- Fix the broken JSX return (the pasted code has incomplete JSX — reconstruct as a div with `containerRef`)
- Hardcode dark theme colors (ice-blue tinted dots) since the site uses a dark hero — skip `useTheme` dependency to avoid needing a ThemeProvider wrapper
- Use light blue/white dot colors to match the alpine-dark hero background

### 2. Update `src/components/HeroSection.tsx`
- Import `DottedSurface`
- Add it as an absolute-positioned background layer inside the hero `<section>`, behind the z-10 content
- Position: `absolute inset-0 z-0 overflow-hidden`
- Remove `bg-frost-pattern` since the 3D particles replace it

### Files Modified
- **Created**: `src/components/ui/dotted-surface.tsx`
- **Modified**: `src/components/HeroSection.tsx`

