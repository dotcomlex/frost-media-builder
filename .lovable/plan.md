

# Rebuild LogoMarquee to Match Cases-with-Infinite-Scroll Design

## Problem
The current LogoMarquee uses a white background with small centered header text and tiny inline logo images. The reference design (screenshot + 21st.dev component) uses a completely different layout: dark background, large left-aligned heading, and square dark cards containing logos.

## Changes — `src/components/LogoMarquee.tsx` (full rewrite)

### Layout & Styling (matching the reference exactly):
- **Dark background**: `bg-[#0a0a0a]` or similar near-black, full-width section with generous vertical padding (`py-14`)
- **Large left-aligned heading**: "Trusted by thousands of businesses worldwide" — large font size (`text-3xl md:text-5xl`), light/white text, left-aligned (not centered, not small muted text)
- **Logo cards**: Each logo sits inside a **square dark card** (`rounded-xl`, dark gray background like `bg-[#1a1a1a]` with subtle border), showing the actual logo image centered inside
- **Carousel**: Same Embla auto-scroll logic (1s interval, loop), items sized as `basis-1/4 lg:basis-1/6` to show multiple cards

### Content:
- Only the 10 uploaded client logos (Divas, CertaPro, 360 Painting, T&S, Heart of FL, FL Southern, Texan, EHR Co, Cristobal, CA Pro)
- Logos displayed with slight opacity/grayscale for the dark theme aesthetic

### Files Modified
- `src/components/LogoMarquee.tsx` — complete rewrite to match the dark card-based design

