

# Redesign Work/Portfolio Page — Bold, Premium, Creative

The current page is flat slate boxes on a slate background. Here's the plan to make it feel like a high-end creative agency portfolio.

## Hero Section
- Use the mountain background image (like FinalCTA/homepage hero) with a dark overlay and the frost-pattern SVG texture
- Large, bold headline with a gradient text effect (white to ice-blue) instead of plain white
- Animated accent line or decorative element beneath the heading
- Increase heading size to `text-5xl md:text-6xl lg:text-7xl` with tight leading

## Project Grid — Complete Restyle
- **Alternating large/small layout**: First project spans full width (2 columns) with a cinematic aspect ratio, next two are side-by-side, then repeat. This breaks the boring uniform grid.
- **Glassmorphism cards**: `backdrop-blur-xl bg-white/5 border border-white/10` instead of solid slate boxes — gives depth and sophistication
- **Hover reveal overlay**: On hover, a gradient overlay (from transparent to dark) slides up from the bottom revealing the project name, tag, and description with a subtle glow effect
- **Project number**: Small mono-tech `01`, `02`, `03` index in the corner for editorial feel
- **Image aspect ratio**: Use `aspect-[16/10]` for wider, more cinematic screenshots instead of square

## Background
- Use a deep gradient: `bg-gradient-to-b from-[#0a0f1a] via-[#0d1829] to-[#0a0f1a]` — rich, deep navy-black instead of flat slate
- Subtle animated radial glow behind the grid (ice-blue at ~3% opacity) for atmosphere

## CTA Section
- Larger, more prominent with the mountain bg treatment matching the hero
- Bolder copy

## Technical Changes
- **File**: `src/pages/Work.tsx` — full restyle
- Uses existing dependencies only (framer-motion, tailwind, lucide)
- No new packages needed

