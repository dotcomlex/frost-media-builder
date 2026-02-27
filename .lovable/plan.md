

# Fix Testimonial Section - Complete Rebuild

## Problems Identified
- Cards overflow viewport on both desktop and mobile (350px cards with 33%/66% x-offsets push content off-screen)
- frost-light background with white cards has zero contrast
- Initials-only avatars look cheap
- Drag interaction is unintuitive and broken on mobile (no visual cue)

## Approach: Replace with Horizontal Scrolling Carousel
Drop the shuffle-card pattern entirely. It's fundamentally broken for responsive layouts. Replace with a clean, horizontally scrolling testimonial strip that works on all devices.

## Changes

### 1. Rewrite `src/components/SystemDiagramSection.tsx`
- **Background**: Dark alpine-navy (`bg-alpine-dark`) section for strong contrast
- **Layout**: Full-width section with header centered on top, then a horizontally scrolling row of cards below
- **Scrolling**: Native CSS horizontal scroll with `overflow-x: auto`, `snap-x`, `snap-mandatory` for smooth snapping. No carousel library needed.
- **Cards**: Each card is a fixed-width glass-style card (`bg-white/5 backdrop-blur border border-white/10`) with:
  - Avatar image (use `https://i.pravatar.cc/128?img=N` with unique IDs per review for realistic generated faces)
  - 5-star rating in amber/gold
  - Quote text in `text-on-dark`
  - Author name in ice-blue, role + location in muted light text
  - Industry tag pill
- **Card sizing**: `w-[320px] md:w-[380px]` with `flex-shrink-0` so they scroll horizontally
- **Mobile**: Cards scroll naturally with touch/swipe. Add `scrollbar-hide` utility.
- **Desktop**: Show ~3 cards visible at once, user can scroll or use subtle left/right arrow buttons

### 2. Update `src/components/ui/testimonial-cards.tsx`
- Simplify to a static card component (no drag/motion logic needed)
- Accept avatar URL, name, role, location, tag, quote as props
- Styled as a dark glassmorphism card

### 3. Add scrollbar-hide utility to `src/index.css`
```css
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
```

### Files
- **Modified**: `src/components/SystemDiagramSection.tsx`, `src/components/ui/testimonial-cards.tsx`, `src/index.css`

