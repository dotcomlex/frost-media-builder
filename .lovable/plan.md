# Comprehensive Site Overhaul — Multi-Page Premium Agency Site

This is a large scope request touching nearly every section plus adding new pages and a contact form. Breaking it into clear parts.

---

## Part 1: Hero Section Fixes

`**HeroSection.tsx` + `dotted-surface.tsx` + `index.css**`

- **Remove the gradient text effect** on "Real Revenue" — it's blue blending with the blue background. Change to **solid white with a warm amber/gold accent** or keep fully white so nothing blends
- **Remove the frosted glass pill** behind the subtitle — replace with just a strong text-shadow effect on all text elements
- **Increase particle size** from 3 back to ~6, opacity from 0.25 to ~0.45 so they're actually visible
- **Fix mobile text hierarchy**: increase headline size, decrease subtitle size so headline dominates
- **Rewrite subtitle**: outcome-focused, not technical. Something like: "Your pipeline, fully booked. Your leads, instantly handled. Your revenue, on autopilot." — no mention of Meta/AI/funnels
- **Stronger text-shadow** on all hero text for contrast against any background

## Part 2: Logo Marquee — Strip Down

`**LogoMarquee.tsx**`

- Remove all client logos (Amador, Script, Geo, PCA, CPIA)
- Keep only: **Shopify Partner**, **Meta Partner**, **TikTok Partner**
- Label it "Official Partners" or similar

## Part 3: Services Section — Visual Redesign

`**CapabilitiesSection.tsx**`

- Redesign as **larger, more visual cards** — each with a generated icon illustration or gradient visual element at the top, not just a small icon
- Add **"Website Design & Development"** as a primary service (the user specializes in this)
- Keep copy short and outcome-focused
- On mobile: full-width stacked cards with more breathing room, each card should feel like its own moment

## Part 4: System Breakdown → Replace with AI Solutions Section

`**SystemBreakdownSection.tsx**` — Complete rewrite as **"AI Solutions"** section

- Focus entirely on AI capabilities: AI Voice Callers, AI SMS Agents, AI Chatbots, AI DM Automation
- Explain how each saves time and money — no extra hires needed, trained on their industry
- Works for home services, beauty, e-commerce, etc.
- Design: clean cards or sections, not the watermark number layout
- Keep it concise — not overwhelming

## Part 5: About Section — New Image + Better Copy

`**AboutSection.tsx**`

- Generate a new image: Denver cityscape or modern team in urban loft
- Rewrite copy to be more engaging, less wall-of-text
- Mention experience across industries, design expertise, full-stack capabilities

## Part 6: CTA Form — All CTAs Open a Contact Form

**New: `ContactFormDialog.tsx**`

- Create a dialog/modal with a contact form (name, email, phone, business type, message)
- All CTA buttons across the site ("Book a Call", "Let's Talk", nav CTA) open this form dialog instead of scrolling to #contact
- The FinalCTASection also shows the form inline or triggers the modal

## Part 7: New Pages + Navigation

**New routes and pages:**

1. `**/work**` — Portfolio/Our Work page displaying website design projects as a beautiful grid (inspired by 3SidedCube and the Quixta reference). Use the uploaded reference images as project thumbnails (copy them to assets). Each project card shows: image, project name, industry tag
2. `**/services**` — Dedicated services page with more detail on each service offering

**Navigation updates:**

- Change nav links: Services → `/services`, Work → `/work`, About → `#about`, Contact → opens form dialog
- Mobile menu same treatment

## Part 8: Generate New Logo

- Generate a simple, clean "Frost Media" logo/wordmark using AI image generation
- Save as `src/assets/logo-frost.png` and use in nav + footer

## Files Modified

- `src/components/HeroSection.tsx` — text fixes, remove pill, stronger contrast
- `src/components/ui/dotted-surface.tsx` — increase particle size/opacity
- `src/index.css` — stronger text-shadow utilities
- `src/components/LogoMarquee.tsx` — strip to 3 partner logos only
- `src/components/CapabilitiesSection.tsx` — visual redesign, add web design service
- `src/components/SystemBreakdownSection.tsx` — complete rewrite as AI Solutions
- `src/components/AboutSection.tsx` — new image, better copy
- `src/components/FinalCTASection.tsx` — integrate with contact form
- `src/components/Navigation.tsx` — update links, add form trigger
- `src/components/Footer.tsx` — update links for new pages

## New Files

- `src/components/ContactFormDialog.tsx` — reusable contact form modal
- `src/pages/Work.tsx` — portfolio page with project grid
- `src/pages/Services.tsx` — dedicated services page
- `src/App.tsx` — add new routes
- `src/assets/logo-frost.png` — generated logo
- `src/assets/about-denver.jpg` — new about section image
- Copy uploaded reference images to `src/assets/` for the Work portfolio page