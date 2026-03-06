

# Logo Marquee Fix, New Logos, and About Page Redesign

## 1. Logo Marquee — Remove White Logo + Add New Ones

**`src/components/LogoMarquee.tsx`**
- Remove `logoHeartfl` (Heart of Florida) from imports and the logos array — it has white text invisible on white background
- Add two new client logos:
  - Copy `user-uploads://image-24.png` → `src/assets/logo-client-phoenix.png` (Phoenix Concrete Company)
  - Copy `user-uploads://image-25.png` → `src/assets/logo-client-azpremier.png` (Arizona Premier Concrete)
- Import and add both to the logos array

## 2. About Page Redesign

**`src/pages/AboutPage.tsx`** — Complete redesign, mobile-optimized, visual and engaging.

Structure:
1. **Hero** — Full-width image (Denver skyline/office using `about-denver.jpg`) with overlay text: "Hey, we're Frost Media." casual tagline below
2. **Story section** — Two-column on desktop (text left, image right using `about-team.jpg`). Casual, friendly copy about starting in Denver, helping contractors. Mobile: stacked, image on top
3. **Working section** — Image grid showing office/work life (use `about-denver.jpg`, `about-team.jpg`, plus stock-style Unsplash images via URLs for computer screen / workspace vibes). Could be a 2x2 bento grid on desktop, stacked on mobile
4. **Values/approach** — 3 cards similar to homepage differentiators but expanded. Clean white/light background for contrast
5. **CTA** — "Let's build something" with contact form button

Design approach:
- Mix of light and dark sections for visual variety
- Rounded images with subtle shadows
- Framer Motion fade-in animations
- Mobile-first: all grids collapse to single column
- Casual, friendly tone throughout copy
- Use existing assets: `about-denver.jpg`, `about-team.jpg`
- For additional imagery (workspace, computer screen, Denver cityscape): use high-quality Unsplash placeholder URLs

**Files modified:**
- `src/assets/logo-client-phoenix.png` (new — copied from upload)
- `src/assets/logo-client-azpremier.png` (new — copied from upload)
- `src/components/LogoMarquee.tsx` — remove Heart of FL, add 2 new logos
- `src/pages/AboutPage.tsx` — full redesign

