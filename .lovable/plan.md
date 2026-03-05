

# Comprehensive Homepage Redesign — Fix Contrast, Colors, Testimonials & Flow

## Problems Identified

1. **Testimonials invisible** — Cards use `text-text-on-dark` (white text) on `bg-frost-light` (light background). Completely unreadable.
2. **Service card images** — Cut off and outsized for the card format. Need properly sized replacements.
3. **Conversational AI section** — Too complex on mobile, doesn't look good.
4. **Too many accent colors** — Blue headlines, orange CTAs, green stats, ice-blue labels. Overwhelming and inconsistent.
5. **"150+ businesses scaled"** — Needs to be removed.
6. **Section contrast/flow** — Multiple dark sections back-to-back (Capabilities → Testimonials used to be dark, About is dark). Need smoother transitions with lighter treatments.

## Section Flow Redesign

Current backgrounds and proposed changes:

```text
SECTION              CURRENT BG         NEW BG
─────────────────────────────────────────────────
Hero                 alpine-black       (keep)
Logo Marquee         white              (keep)
Capabilities         alpine-dark        white (light cards)
Testimonials         frost-light        soft gray (bg-gray-50)
Conversational AI    frost-light        white
About                alpine-dark        alpine-dark (keep one dark)
FAQ                  frost-light        white
Final CTA            alpine-black       (keep)
```

This gives: Dark → White → White → Gray → White → Dark → White → Dark — much better rhythm with only 2 dark sections.

## Changes by File

### 1. `src/components/ui/testimonial-cards.tsx`
- Change all `text-text-on-dark` references to dark text colors (`text-foreground`, `text-muted-foreground`)
- Change card background from `bg-white/[0.04]` to `bg-white` with subtle border and shadow
- Fix avatar ring offset from `ring-offset-alpine-dark` to `ring-offset-white`
- Ensure quote text, name, role are all dark and readable

### 2. `src/components/SystemDiagramSection.tsx` (Testimonials)
- Change bg to `bg-gray-50` for subtle contrast
- Remove the "150+ businesses scaled" subtitle
- Update gradient fades to match `bg-gray-50`

### 3. `src/components/CapabilitiesSection.tsx` (Services)
- Switch from `bg-alpine-dark` to `bg-white` with dark text
- Redesign cards: white cards with subtle border/shadow, no image header (remove the cut-off images entirely)
- Use a small colored icon instead of full images — cleaner, no cut-off issues
- Update all text colors from `text-text-on-dark` to `text-foreground`/`text-muted-foreground`

### 4. `src/components/SystemBreakdownSection.tsx` (Conversational AI)
- Change bg to `bg-white`
- On mobile: show headline + description first, then phone mock below, then stats — simpler single-column flow
- Consolidate accent colors: remove green from "100%" stat, use a consistent amber/foreground palette
- Remove channel tags on mobile to reduce clutter

### 5. Color Consistency Pass
- **Primary accent**: Keep amber/secondary for CTAs only
- **Section labels**: Use `text-muted-foreground` instead of `text-ice-blue` for the small uppercase labels across sections (Capabilities, Testimonials, Conversational AI, FAQ)
- **Stats**: Use `text-foreground` instead of mixed blue/green/amber for the stat numbers in Conversational AI
- This reduces the palette to essentially: black text, gray muted text, amber CTAs — clean and professional

### 6. `src/components/FAQSection.tsx`
- Change bg from `frost-light` to `bg-white`
- Update label color from `text-ice-blue` to `text-muted-foreground`

## Files Modified
- `src/components/ui/testimonial-cards.tsx`
- `src/components/SystemDiagramSection.tsx`
- `src/components/CapabilitiesSection.tsx`
- `src/components/SystemBreakdownSection.tsx`
- `src/components/FAQSection.tsx`

