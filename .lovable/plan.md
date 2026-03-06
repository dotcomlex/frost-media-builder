

# Meta Ads Page Fixes + Frost Media Logo

## Problems Identified

1. **Blue-on-blue contrast**: `text-ice-blue` labels sit on `bg-alpine-dark` sections — barely visible. The hero badge, section labels, and stats all blend into the dark blue background.
2. **Orange overuse**: The hero headline gradient, stats strip, ROAS counter, CTA buttons, and Final CTA headline all use amber/orange. Should be reserved for CTA buttons only per brand guidelines.
3. **Testimonials overlap**: Meta Ads uses Sarah, Marcus, Jennifer, Carlos, Amanda, David — all appear on homepage too. Need 6 unique testimonials with different avatars (Priya, Brian, Maria, Tyler, Jason, Mike).
4. **FAQ "Do I own my ad account?"**: Remove this question entirely.
5. **Hero background**: Needs to be more visible/impactful — increase mountain opacity and reduce heavy dark overlay.
6. **Frost Media logo**: Create an SVG logo component.

## Changes

### File: `src/pages/MetaAds.tsx`

**Color fixes:**
- Hero headline: change amber gradient to `text-text-on-dark` with "Real, Exclusive Leads" in `text-ice-blue` (not orange gradient)
- `font-mono-tech` labels above sections: change from `text-ice-blue` to `text-white/50` on dark sections, keep `text-ice-blue` on light sections only
- Stats strip numbers: change from `text-ice-blue` to `text-text-on-dark` (white)
- KPI counters: use `text-text-on-dark` for all three, not colored individually
- Final CTA headline: "Real Leads" in `text-ice-blue` instead of amber gradient
- Keep amber ONLY on CTA buttons

**Hero background:**
- Increase mountain image opacity from `opacity-15` to `opacity-25`
- Lighten the gradient overlay so mountains show through more

**Testimonials — swap to unused avatars:**
- Use: avatarPriya, avatarBrian, avatarMaria, avatarTyler, avatarJason, avatarMike
- All new names, roles, locations, quotes (ad-specific)
- Remove old avatar imports (Sarah, Marcus, Jennifer, Carlos, Amanda, David)

**FAQ:**
- Remove the "Do I own my ad account?" question and answer

### File: `src/components/FrostLogo.tsx` (new)

- Create an SVG logo component for Frost Media
- Mountain/frost-inspired mark: a stylized mountain peak with a snowflake/frost accent
- Clean geometric design in ice-blue
- Text "FROST MEDIA" in Space Grotesk bold beside the mark
- Export as reusable component with size props

### Files Modified
- `src/pages/MetaAds.tsx` — color fixes, hero bg, testimonial swap, FAQ removal
- `src/components/FrostLogo.tsx` — new SVG logo component

