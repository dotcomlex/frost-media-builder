

# Premium Mobile-First Redesign

## Problems Identified
1. **Hero**: Background too dark, blue text blends with blue mountain/overlay, particles too large and dominant
2. **Services (CapabilitiesSection)**: Looks like a generic template — same card grid with left borders, too much text on the AI card
3. **System Breakdown**: Template-looking timeline, not engaging on mobile scroll
4. **About**: Stats row includes "$2M+ Ad Spend Managed" (user doesn't want money amounts), needs a generated image instead of stat boxes

## Design Philosophy
Mobile-first, 100% of traffic from Instagram ads. Every section must feel like a $20K site — premium, intentional, not template-y.

---

### 1. Hero Section — Text visibility + subtle particles

**`dotted-surface.tsx`**: Make particles much smaller (size: 3 instead of 8), more numerous but lower opacity (0.25), and reduce wave amplitude so they feel like ambient snow/frost rather than dominant blobs. Reduce camera Z to spread them across the full viewport.

**`HeroSection.tsx`**: 
- Lighten the overlay slightly (`from-black/80 via-black/55 to-black/35`) so mountains are visible
- Add a **text-shadow/glow effect** to the headline using a custom CSS class (`text-shadow: 0 0 40px rgba(0,0,0,0.8)`) so it pops regardless of background
- Change "Real Revenue" accent from `text-ice-blue` to a **gradient text effect** (white-to-ice-blue) so it doesn't blend with the blue background
- Add a subtle frosted glass backdrop blur pill behind the subtitle text for readability

### 2. Services — Complete visual redesign as "bento grid"

**`CapabilitiesSection.tsx`**: Replace the uniform 3x2 card grid with a **staggered bento-style layout**:
- On mobile: full-width cards stacked vertically, each with a different visual treatment
- Featured services (Paid Media, AI Automation, Lead Gen) get **large cards** with a gradient background, large icon, short punchy copy (no bullet lists)
- Secondary services (Copywriting, Web Design, CRM) sit in a **2-column row** as smaller, tighter cards
- Remove all bullet points — use 1-2 line descriptions only. Keep it concise and premium
- Remove the "Save 70%", "No hires" badges and the `extraDetail` paragraph entirely
- Each card gets a subtle gradient background (not just border-left) with the accent color fading to transparent
- No bullet lists. Clean, minimal. Icon + title + one-line benefit

### 3. System Breakdown — Redesign as full-width immersive scroll sections

**`SystemBreakdownSection.tsx`**: Replace the alternating timeline with **stacked full-width sections**, each with:
- A large step number as a watermark/background element (giant "01" at 10% opacity)
- Icon + title + description in clean left-aligned layout
- The 3 detail items displayed as horizontal pills/badges rather than a card
- On mobile, each step takes up nearly the full viewport height for an immersive scroll feel
- Subtle fade-in animations on scroll
- Remove the vertical timeline line and circular step markers — they look template-y

### 4. About Section — Replace stats with generated image

**`AboutSection.tsx`**:
- Remove the 4-stat grid entirely (especially "$2M+ Ad Spend Managed")
- Generate an AI image of a modern team working at computers in a Denver-style urban office/loft with city skyline visible — professional but not stocky
- Place the image full-width above the text content, with rounded corners and a subtle overlay
- Keep the text paragraphs but tighten copy slightly

### 5. New image asset
- Generate 1 image: team working in a modern Denver office/loft with city views, natural lighting, laptops and screens — authentic, not stock-photo-y
- Save as `src/assets/about-team.png`

### Files Modified
- `src/components/ui/dotted-surface.tsx` — smaller, subtler particles
- `src/components/HeroSection.tsx` — text effects, adjusted overlay
- `src/index.css` — add text-shadow utility class
- `src/components/CapabilitiesSection.tsx` — complete bento grid redesign
- `src/components/SystemBreakdownSection.tsx` — immersive stacked sections
- `src/components/AboutSection.tsx` — remove stats, add generated team image
- New asset: `src/assets/about-team.png`

