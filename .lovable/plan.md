

# Hero Mountain Background + System Section Images

## Changes

### 1. `HeroSection.tsx` — Mountain background image behind particles
- Generate an AI image of frosty Colorado mountains (dramatic, moody, blue-tinted) using `google/gemini-2.5-flash-image`
- Save as `src/assets/hero-mountains.png`
- Add the image as an `<img>` layer between the `bg-alpine-black` background and the `DottedSurface` particle overlay
- Add a dark overlay gradient (`bg-gradient-to-t from-black/80 via-black/50 to-black/30`) so text remains readable
- The particle wave effect stays on top, creating a frosty mountains + floating particles combo

Layer stack (bottom to top):
```text
1. bg-alpine-black (fallback)
2. Mountain image (absolute, cover, object-cover)
3. Dark gradient overlay (absolute)
4. DottedSurface particles (absolute, existing)
5. Text content (relative z-10, existing)
```

### 2. `SystemBreakdownSection.tsx` — Contextual images per card
- Generate 3 small images using `google/gemini-2.5-flash-image`:
  - Ad dashboard/analytics screen
  - AI chatbot interface on a phone
  - CRM pipeline/funnel view
- Save to `src/assets/` and add as small visuals above each card's icon area
- Images will be ~200px tall, rounded, inside each white card at the top

### 3. No changes to About section (per user request)

### Files Modified
- `HeroSection.tsx` — add mountain image layer
- `SystemBreakdownSection.tsx` — add contextual images to cards
- New assets: `hero-mountains.png`, `system-ads.png`, `system-ai.png`, `system-crm.png`

