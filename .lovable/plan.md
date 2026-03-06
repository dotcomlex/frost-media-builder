

# Fix Invisible Logos & Elevate the Entire Page

## Problem 1: Two Invisible Logos
The screenshot shows two blank spots. The T&S logo (`logo-client-ts.svg`) uses embedded CSS class styles (`.st0{fill:#771214}`, `.st1{fill:#00AEEF}`) — when rendered as an `<img>` tag, the `brightness(0)` CSS filter should work. However, some SVGs with complex styling or white/transparent areas may not render properly through `<img>`. The fix is to switch from `<img>` tags to **inline rendering via `<object>` or `ReactComponent`**, or more practically, apply a `grayscale(100%) opacity(0.5)` filter instead of `brightness(0)` — this preserves visibility while still making logos look uniform. Also increase minimum height and add `min-w-[80px]` to prevent tiny logos.

## Problem 2: Page Feels Dull
The page lacks visual energy. Here's what to add across the entire site:

### Navigation — Add a subtle glassmorphic pill nav
- Instead of plain transparent links, wrap the desktop nav links in a floating glassmorphic pill (`bg-white/5 backdrop-blur-md border border-white/10 rounded-full`) centered at the top. This is a modern, premium pattern.
- Add a small "Book a Call" button (ice-blue, small, rounded-full) as the last nav item instead of plain "Contact" text.

### Logo Marquee — Add animation polish
- Replace the carousel with a true CSS `marquee` animation (duplicate logos, `translateX(-50%)` infinite loop) for smoother continuous scrolling.
- Add a subtle gradient fade on left/right edges.

### Services Section — Add hover micro-interactions
- Add a subtle gradient overlay on card images that shifts on hover.
- Add a thin ice-blue left border accent on hover.

### Conversational AI — Add floating particle/dot decorations
- Add a few decorative blurred circles (ice-blue, low opacity) floating in the background for visual texture.

### About Section — Add a subtle grid/dot pattern background overlay
- Layer a faint dot-grid texture over the dark background for depth.

### FAQ — Add ice-blue gradient accent line
- Add a thin ice-blue gradient line above the section as a visual separator.

### Footer — Add a subtle mountain silhouette
- Use the mountain image as a very faint background element in the footer for brand cohesion.

## Changes by File

### `src/components/LogoMarquee.tsx`
- Replace carousel with CSS marquee animation (duplicate logo array, `animate-marquee`)
- Change filter from `brightness(0) opacity(0.6)` to `grayscale(100%) contrast(0) brightness(0.4)` — makes all logos uniformly dark regardless of original color/format
- Add left/right gradient fades
- Add `min-w-[80px]` on logos

### `src/components/Navigation.tsx`
- Wrap desktop nav in a glassmorphic floating pill
- Replace "Contact" text button with a small ice-blue "Book a Call" pill button

### `src/components/CapabilitiesSection.tsx`
- Add hover border-left accent and gradient overlay shift on cards

### `src/components/SystemBreakdownSection.tsx`
- Add 2-3 decorative blurred ice-blue circles in the background

### `src/components/AboutSection.tsx`
- Add faint dot-grid pattern overlay via CSS

### `src/components/FAQSection.tsx`
- Add thin ice-blue gradient divider line at top of section

### `src/components/Footer.tsx`
- Add faint mountain silhouette background

## Files Modified
- `src/components/LogoMarquee.tsx`
- `src/components/Navigation.tsx`
- `src/components/CapabilitiesSection.tsx`
- `src/components/SystemBreakdownSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/Footer.tsx`

