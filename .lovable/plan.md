

# Rework Work Page -- Tabbed Industry Portfolio

## What Changes

Replace the current featured carousel + static grid with a **tabbed portfolio** inspired by the US Web Design LLC reference. Users click industry tabs to filter projects, and each card shows a tall website screenshot that auto-scrolls on hover.

## Design

- **Hero**: Keep the dark hero with the engaging headline (already done)
- **Tab Bar**: Horizontal row of pill-shaped category tabs below the hero: Ecommerce, Fitness, Food, Transport, Technology, Real Estate, Fintech, Construction
- **Project Grid**: 4-column grid (2 on mobile) of tall cards. Each card contains a full-page website screenshot from the partner site's CDN. On hover, the image smoothly scrolls from top to bottom (CSS `transform: translateY` animation), revealing the full page design
- **No external links**: Cards are display-only (no click-through), just showcasing the designs
- **CTA Section**: Keep the mountain bg CTA at the bottom
- **Remove**: The featured carousel section (replaced by tabs)

## Image Sources (from partner CDN)

All images loaded directly from `https://theuswebdesignllc.com/assets/images/portfolios/`:

| Tab | Path | Files |
|-----|------|-------|
| Ecommerce | `e-commerce/` | `new1.webp` - `new8.webp` (use first 8) |
| Fitness | `fitness/thumb/` | `t-1.webp` - `t-8.webp` |
| Food | `food/thumb/` | `t-1.webp` - `t-8.webp` |
| Transport | `transport/` | `t-1.webp` - `t-8.webp` |
| Technology | `technology/` | `1.webp` - `6.webp`, `t-7.webp`, `t-8.webp` |
| Real Estate | `real-state/` | `Real_estate-portfolio-1.webp` - `6.webp`, `t-7.webp`, `t-8.webp` |
| Fintech | `finance/` | `Finance-portfolio-1.webp` - `6.webp`, `t-7.webp`, `t-8.webp` |
| Construction | `construction/` | `1.webp` - `6.webp`, `t-7.webp`, `t-8.webp` |

## Hover Scroll Effect

Each card has a fixed `aspect-[3/4]` container with `overflow-hidden`. The image inside is full height (natural tall screenshot). On hover, a CSS transition smoothly translates the image upward over ~3-5 seconds, scrolling from the top to the bottom of the page design. This mimics the reference site's scrolling effect.

```text
┌──────────────┐
│  [Ecommerce] [Fitness] [Food] [Transport] ...  │  ← Tab pills
├──────────────┤
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│ │ img│ │ img│ │ img│ │ img│ │  ← 4-col grid
│ │    │ │    │ │    │ │    │ │
│ │    │ │    │ │    │ │    │ │  hover = scroll
│ └────┘ └────┘ └────┘ └────┘ │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│ │    │ │    │ │    │ │    │ │
│ └────┘ └────┘ └────┘ └────┘ │
└──────────────┘
```

## Technical Details

**File modified:** `src/pages/Work.tsx` -- complete rewrite

- Tab state managed with `useState` for active category
- `framer-motion` `AnimatePresence` + `layoutId` for smooth tab content transitions
- Hover scroll: CSS `group-hover` with `transition-transform duration-[3s]` and negative `translateY` to scroll the tall image
- Dark background (`bg-[hsl(var(--alpine-dark))]`) matching the reference site's dark theme
- Tab pills styled with `rounded-full` borders, active state uses `bg-primary text-white`
- Images loaded directly from the partner CDN (no local downloads needed -- these are shared assets from the partner company)

