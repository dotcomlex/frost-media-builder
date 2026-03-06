

# Meta Ads Page: Platform Section Redesign + Frost Media Logo Integration

## Changes

### 1. Copy uploaded logo to project assets
- Copy `user-uploads://frostmedia_transparent.webp` to `src/assets/frostmedia-logo.webp`
- Update `Navigation.tsx` to use the new logo instead of `logo-frost.png`
- Update `FrostLogo.tsx` to use the actual uploaded image instead of the SVG mountain

### 2. Logo in Hero (MetaAds.tsx)
- Add the Frost Media logo at the top of the hero, left-aligned above the badge pill
- Scale it to ~200px width so it's clearly visible against the dark mountain background
- Keeps brand presence strong when people land on the page

### 3. Platform Logos Section — complete redesign
Current: dark background marquee that's redundant (logos scroll endlessly, hard to see on dark bg)

New design:
- **White background** (`bg-background`) so all colored logos pop
- **Static 3x2 grid on mobile** (not scrolling) — each platform gets its own card with the SVG icon + name
- Cards have subtle border and light shadow — clean, premium
- No marquee, no redundancy — you see all 6 at once
- Section title centered above

### 4. Update `FrostLogo.tsx`
- Instead of inline SVG mountain, use the uploaded `frostmedia-logo.webp` image
- Keep the `size` and `className` props for flexibility

### Files Modified
- `src/assets/frostmedia-logo.webp` — new asset (copied from upload)
- `src/components/Navigation.tsx` — swap logo image
- `src/components/FrostLogo.tsx` — use real logo image
- `src/pages/MetaAds.tsx` — add logo to hero, redesign platform section to white bg static grid

