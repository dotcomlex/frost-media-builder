

# Rework Work Page — Lightbox, Hero, Scroll Fix, Light Background

## Changes

### 1. Hero Section Rework
- Add mountain background image with dark overlay (same as FinalCTASection) + frost-pattern
- Shorten headline to just **"Our Work"** with a brief subtitle — currently it's way too long and wastes vertical space
- Reduce padding so hero is compact and punchy
- Keep `font-mono-tech` label above

### 2. Tabs + Grid on Light Background
- Move the tab bar and grid section from `bg-alpine-dark` to `bg-muted` (light gray) — only the hero stays dark
- Tab pills restyle: dark text on light bg, active tab uses `bg-primary text-white`
- Card borders updated for light theme: `border-gray-200`, subtle shadow on hover

### 3. Fix Hover Scroll Speed
- Remove the conflicting CSS class `group-hover:-translate-y-[calc(100%-100%*3/4)]` — it fights the JS inline transform
- Keep the `onLoad` calculation of `--scroll-y` and `onMouseEnter`/`onMouseLeave` JS approach
- Set `transition: transform Xs ease-in-out` dynamically based on scroll distance: `duration = Math.max(3, diff / 250)` seconds — longer pages scroll slower, matching natural feel
- On `onMouseLeave`, use same duration for smooth return

### 4. Mobile: Tap-to-Scroll
- Import `useIsMobile` hook
- On mobile, replace hover with tap: clicking a card sets it as "active" (state), which triggers the scroll animation via inline styles
- Tapping another card or tapping the same card again resets it
- Add subtle "Tap to preview" text overlay on mobile cards

### 5. Lightbox Modal for Full Screenshot
- Add state: `lightboxSrc: string | null`
- Clicking any card opens a full-screen overlay (`fixed inset-0 z-50 bg-black/90`) displaying the full screenshot
- Image rendered at full natural size inside a scrollable container (`overflow-y-auto`) so user can scroll through the entire page design
- X close button (top-right, sticky) + click backdrop to close
- `AnimatePresence` for fade in/out
- Works on both mobile and desktop

### 6. File Modified
`src/pages/Work.tsx` — rewrite with all the above changes

