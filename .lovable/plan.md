

# Fix Oversized Elements + Add Service Images + Remove Templated Feel

## Problem
Everything is too large — paddings, fonts, icon blocks, spacing are all oversized, giving a bloated, vibe-coded look. Service cards on both homepage and services page have no images, just colored squares with icons.

## Changes

### 1. Homepage Services (`CapabilitiesSection.tsx`)
- **Reduce card size**: shrink gradient header from `h-32` to `h-20`, icon from `w-16 h-16` to `w-12 h-12`, reduce padding
- **Add a relevant stock-style image** per service using gradient overlays with abstract SVG illustrations or use the existing gradient as a subtle accent stripe (not a massive 40% fill)
- Tighten text sizes: title `text-base`, description `text-xs`
- Reduce section padding from `py-20 md:py-28` to `py-14 md:py-20`

### 2. Services Page (`Services.tsx`)
- **Reduce icon blocks** from `w-24 h-24 md:w-28 md:h-28` to `w-16 h-16 md:w-20 md:h-20`
- Reduce section padding from `py-16 md:py-24` to `py-10 md:py-16`
- Reduce heading sizes from `text-2xl md:text-3xl` to `text-xl md:text-2xl`
- Add a relevant illustrative image or mockup per service section (using abstract gradient illustrations built in JSX — e.g. a phone mockup for social ads, a browser window for web design, a shopping bag for e-commerce, a funnel for lead gen, a chat bubble cluster for AI, a dashboard for CRM)
- Make the alternating layout tighter and more editorial

### 3. Conversational AI Section (`SystemBreakdownSection.tsx`)
- Reduce phone mock size — it's too tall. Shrink `min-h-[320px]` to `min-h-[240px]`, reduce chat bubble text from `13px` to `12px`
- Reduce stat callout sizes from `text-2xl md:text-3xl` to `text-xl md:text-2xl`
- Tighten section padding

### 4. Testimonials (`SystemDiagramSection.tsx` + `testimonial-cards.tsx`)
- Reduce card width from `300px/360px` to `280px/320px`
- Reduce avatar size from `h-18 w-18` to `h-14 w-14`
- Reduce section heading sizes
- Tighten padding

### 5. Hero Section (`HeroSection.tsx`)
- Reduce CTA button padding from `px-12 py-7` to `px-10 py-5`
- Keep headline sizes as-is (they're appropriate for hero)

### 6. About Section (`AboutSection.tsx`)
- Reduce differentiator card padding
- Tighten spacing

### 7. Work Page (`Work.tsx`)
- Reduce hero heading from `text-4xl md:text-5xl lg:text-6xl` to `text-3xl md:text-4xl lg:text-5xl`

### 8. FAQ, Footer, Final CTA
- Reduce heading sizes by one step across the board
- Tighten vertical padding

### 9. Service Card Illustrations (JSX-based)
For each homepage service card, add a small illustrative element built with JSX/CSS (not images):
- **Social Media Ads**: small phone + notification dots
- **Website Design**: mini browser window frame
- **E-Commerce**: shopping bag icon cluster
- **Lead Gen**: funnel shape
- **Conversational AI**: chat bubble stack
- **CRM**: mini dashboard bars

These replace the large gradient header blocks, making cards more visually interesting without looking like colored squares.

## Files Modified
- `src/components/CapabilitiesSection.tsx` — smaller cards, add JSX illustrations
- `src/pages/Services.tsx` — smaller everything, add illustrations per service
- `src/components/SystemBreakdownSection.tsx` — shrink phone mock + stats
- `src/components/SystemDiagramSection.tsx` — tighter section
- `src/components/ui/testimonial-cards.tsx` — smaller cards
- `src/components/HeroSection.tsx` — smaller CTA button
- `src/components/AboutSection.tsx` — tighter spacing
- `src/pages/Work.tsx` — smaller headings
- `src/components/FAQSection.tsx` — smaller headings
- `src/components/FinalCTASection.tsx` — smaller headings, tighter padding
- `src/components/Footer.tsx` — minor tightening

