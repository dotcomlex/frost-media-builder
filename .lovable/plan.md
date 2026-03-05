

# Replace Logo Marquee — Only 10 Uploaded Logos, Match Reference Design

## What's Wrong
The current LogoMarquee still includes old logos (Meta, TikTok, Shopify, CPIA, Frost, PCA, Script, Geo, Amador). You want ONLY the 10 uploaded client logos.

## Changes

### `src/components/LogoMarquee.tsx` — Full Rewrite
- **Remove all old logo imports** (Meta, TikTok, Shopify, CPIA, Frost, PCA, Script, Geo, Amador)
- **Keep only 10 uploaded logos**: Divas, CertaPro, 360 Painting, T&S, Heart of FL, FL Southern, Texan, EHR Co, Cristobal, CA Pro
- **Match the `cases-with-infinite-scroll` design**: clean section with "Trusted by thousands of businesses worldwide" header text (centered, muted), carousel below with grayscale logos, auto-scroll every 1 second (matching the reference), looping
- Keep the existing Embla carousel components (already installed)

### Logo list (10 only):
1. `logo-client-divas.png` — Divas Beauty
2. `logo-client-certapro.png` — CertaPro Painters
3. `logo-client-360painting.png` — 360 Painting
4. `logo-client-ts.svg` — T&S
5. `logo-client-heartfl.png` — Heart of Florida Roofing
6. `logo-client-flsouthern.png` — Florida Southern Roofing
7. `logo-client-texan.png` — Texan Remodeling
8. `logo-client-ehrco.png` — EHR Co
9. `logo-client-cristobal.png` — Cristobal Concrete
10. `logo-client-capro.png` — CA Pro Concrete

### Files Modified
- `src/components/LogoMarquee.tsx` (rewrite)

No new files needed — logos already exist in `src/assets/`.

