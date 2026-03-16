

# A2P 10DLC Compliance + WebGL Crash Fix

## Critical Bug Fix: WebGL Crash (blank screen)

The `DotGlobeHero` component uses Three.js/React Three Fiber which crashes when WebGL is unavailable (e.g., some mobile devices, iframes). This causes a **blank white screen** for the entire site.

**Fix in `src/components/ui/globe-hero.tsx`:**
- Wrap the `<Canvas>` in an error boundary that catches WebGL failures
- Add a `fallback` prop or simply render the hero without the globe when WebGL fails
- The mountain background + gradient overlays still render, so the hero looks fine without the globe

## A2P Compliance Changes (5 changes, verbatim from request)

### Change 1: `src/App.tsx`
- Add imports for `PrivacyPolicy` and `TermsOfService` pages
- Add two routes: `/privacy-policy` and `/terms-of-service`

### Change 2: Create `src/pages/PrivacyPolicy.tsx`
- New page with Navigation + Footer, white bg, max-w-3xl centered
- All sections with verbatim text as specified (Information We Collect, How We Use, SMS/Text, Opt-Out, Data Security, Contact)

### Change 3: Create `src/pages/TermsOfService.tsx`
- New page with Navigation + Footer, white bg, max-w-3xl centered
- All sections with verbatim text as specified (Acceptance, Services, SMS Messaging Program, Payment, Liability, Contact)

### Change 4: `src/components/ContactFormDialog.tsx`
- Add two checkbox fields (marketing SMS consent + non-marketing SMS consent) between phone input and business type select
- Add privacy/terms agreement text with links below checkboxes, above submit button
- Import `Checkbox` from ui and `Link` from react-router-dom

### Change 5: `src/components/Footer.tsx`
- Add Privacy Policy and Terms of Service links in the bottom bar
- Add address/phone/email line under the brand description paragraph

### Files touched
- `src/components/ui/globe-hero.tsx` — error boundary for WebGL
- `src/App.tsx` — two new routes
- `src/pages/PrivacyPolicy.tsx` — new file
- `src/pages/TermsOfService.tsx` — new file
- `src/components/ContactFormDialog.tsx` — checkboxes + legal links
- `src/components/Footer.tsx` — footer links + contact info

