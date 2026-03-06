

# Fix: Hero Header Text Visibility

## Problem
The hero section uses `bg-background` (white) with `text-foreground` (dark navy). Since the navigation overlay is dark/transparent, transitioning from the dark nav into a white hero makes the heading appear washed out and disconnected. The carousel images from Quixta CDN may also not be loading, making the whole section look blank.

## Fix

### 1. Dark Hero Background
Change the hero from `bg-background` (white) to a dark background matching the rest of the page:
- Background: `bg-[#0a0f1a]` (deep navy-black)
- Heading text: `text-white` with strong font weight
- This ensures the heading pops against the dark background and flows naturally from the navigation

### 2. Remove Decorative White Curves
The white SVG curves at the top/bottom of the carousel assume a white section above/below. Remove them since both hero and grid sections are now dark.

### 3. Carousel Background Continuity
Change the carousel's decorative curves fill from white to match the dark background color so there's no jarring white strip.

## File Modified
- `src/pages/Work.tsx` — hero bg + text color fix, remove/recolor SVG curves

