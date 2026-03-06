

# Redesign Work Page to Match Quixta's Portfolio Style

## The Problem
Current cards use landscape `aspect-[16/10]` and `aspect-[2.4/1]` ratios -- website mockup screenshots are barely visible and look like tiny horizontal strips. The hover-only info makes cards feel empty by default.

## Design Reference (Quixta)
Quixta uses:
- A **featured project carousel** at the top (blue gradient bg, split layout: text + description on left, large mockup on right, "View Project" button)
- A **2-column grid** below with **portrait/tall cards** showing full website screenshots with project name and category always visible at the bottom

## Plan

### 1. Featured Projects Carousel (new section)
Add a hero carousel using `embla-carousel-react` (already installed) with 3 featured projects. Each slide:
- Blue-to-navy gradient background (matching Frost Media brand -- use ice-blue tones instead of Quixta's orange)
- Split layout: left side has project name (large heading), description paragraph, and "View Project" link; right side has a large mockup image
- Navigation arrows on sides

### 2. Project Grid -- Portrait Cards
Replace the current landscape grid with a clean **2-column grid** of portrait cards:
- Change aspect ratio from `aspect-[16/10]` to **`aspect-[3/4]`** (tall, portrait) so website screenshots are fully visible
- Remove the alternating wide/narrow layout (no more `col-span-2`)
- Project name and category tag **always visible** below the image (not hover-only)
- Subtle hover scale effect on the image
- Clean dark card with rounded corners, border

### 3. Use Quixta's Shared Project Images
Since Quixta is the user's partner site, reference their CDN images for the shared projects where available:
- Helixr: `https://quixta.com/wp-content/uploads/2025/06/Frame-1171275161.png`
- Featured carousel mockups from their CDN

For projects not on Quixta, keep the existing local images.

### 4. Simplify the Hero
Keep the mountain bg hero but make it cleaner -- centered text, no frost-pattern clutter.

## Files Modified
- `src/pages/Work.tsx` -- complete restructure

## Technical Notes
- Uses `embla-carousel-react` already in dependencies for the featured carousel
- Portrait aspect ratio `aspect-[3/4]` with `object-cover object-top` to show the top of website screenshots
- Mobile: single column grid, carousel stacks vertically
- All project info always visible (no hover-dependent content for mobile accessibility)

