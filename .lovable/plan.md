

# Replace Logo Marquee with Infinite Scroll Carousel + New Client Logos

## What We're Doing
Replace the current CSS-animated logo marquee with the `cases-with-infinite-scroll` component pattern (Embla Carousel-based auto-scrolling), and add all the uploaded client logos.

## Changes

### 1. Copy uploaded logos to `src/assets/`
Copy all 10 uploaded logo files:
- `logo-client-divas.png` (Divas Beauty)
- `logo-client-certapro.png` (CertaPro Painters)
- `logo-client-360painting.png` (360 Painting)
- `logo-client-ts.svg` (T&S)
- `logo-client-heartfl.png` (Heart of Florida Roofing)
- `logo-client-flsouthern.png` (Florida Southern Roofing)
- `logo-client-texan.png` (Texan Remodeling)
- `logo-client-ehrco.png` (EHR Co)
- `logo-client-cristobal.png` (Cristobal Concrete)
- `logo-client-capro.png` (CA Pro Concrete)

### 2. Rewrite `src/components/LogoMarquee.tsx`
- Use the Embla Carousel (`Carousel`, `CarouselContent`, `CarouselItem`) with auto-advancing via `useEffect` + `setTimeout` pattern from the `cases-with-infinite-scroll` component
- Import all uploaded logos plus existing ones (GeoSoftware, Amador, Meta, Shopify, TikTok, CPIA, Frost, PCA, Script)
- Each `CarouselItem` renders a logo image with consistent sizing (`h-10 md:h-12`, `object-contain`, grayscale filter with hover color)
- Header text: "Trusted by businesses across the nation"
- Set carousel to loop, show multiple items per view (`basis-1/4 md:basis-1/6`), auto-scroll every 2 seconds
- Keep the `bg-white py-8 border-y border-border` styling

### 3. No changes to `Index.tsx`
The `<LogoMarquee />` import stays the same.

## Files Modified
- `src/components/LogoMarquee.tsx` (rewrite)

## Files Created
- 10 logo assets copied to `src/assets/`

