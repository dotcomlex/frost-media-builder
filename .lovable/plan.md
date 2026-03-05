

# Full Premium Redesign — Every Page, Every Section

The site currently looks templated because it relies on the same visual patterns everywhere: dark cards with thin borders, small icons, uniform spacing. Here's a complete redesign that makes every section visually distinct and positions Frost Media as a top-tier agency.

## Core Services to Highlight
Remove Google Ads. Core expertise: **Meta/Social Media Ads, Lead Generation, E-Commerce, Website Design, E-Commerce Store Buildouts, AI Backend Automations (AI SMS, AI Voice Callers), CRM/All-in-One Management**.

---

## 1. Hero Section — More Impact

**`HeroSection.tsx`**
- Larger headline on mobile (text-5xl minimum), shorter punchier copy
- Rewrite: "We Build Growth Machines for Ambitious Brands" with "Growth Machines" in amber
- Add a secondary line of social proof below CTA: "150+ businesses scaled · Meta & Shopify Partner"
- Animated counter or typing effect on the headline for engagement

## 2. Logo Marquee — Add Trust Badges

**`LogoMarquee.tsx`**
- Keep Meta, Shopify, TikTok but add a "150+ Clients Served" badge inline
- Slightly larger logos, better spacing

## 3. Services Section — Complete Redesign as Visual Showcase

**`CapabilitiesSection.tsx`** — Total rewrite with 6 services in a visually rich layout:

Services list:
1. **Social Media Advertising** (Meta, IG, TikTok) — not "Paid Media"
2. **Website Design & Development** — premium sites that convert
3. **E-Commerce & Shopify Builds** — full store buildouts
4. **Lead Generation** — end-to-end pipeline
5. **Conversational AI** — voice, SMS, chat automation
6. **CRM & Pipeline Management** — all-in-one system

Design: Each service gets a **full-width horizontal card** on mobile (like a feature showcase) with a large gradient icon/illustration area on the left (or top on mobile), title, and one-line benefit. On desktop: 3-column grid with taller cards that have a gradient header area (taking up top 40% of card) fading into the card background. No thin borders — use subtle shadows and background fills instead.

## 4. Conversational AI Section — Redesign as Immersive Feature

**`SystemBreakdownSection.tsx`** — Rename and redesign:
- Split into two visual halves: left side shows a mock phone/chat UI with AI conversation bubbles (built with JSX, not an image), right side has the copy
- Title: "Your AI Team That Never Sleeps"
- Explain: AI Voice Callers handle inbound/outbound calls, AI SMS responds instantly, trained on their specific industry
- Show industry examples as pills: "Home Services · Beauty · E-Commerce · Insurance · Real Estate"
- Remove the checklist — replace with 3 large stat-like callouts: "< 5s response time", "24/7 availability", "Trained on your brand"

## 5. Testimonials — Visual Upgrade

**`SystemDiagramSection.tsx`** (testimonials):
- Make cards slightly larger with more padding
- Add a subtle gradient background instead of heavy black overlay
- Stars in amber/gold instead of ice-blue for warmth

## 6. About Section — More Engaging

**`AboutSection.tsx`**:
- Add a grid of 3 key differentiators below the image as icon+text blocks: "Design-First Approach", "Direct Response Experts", "Full-Stack Capabilities"
- Tighten copy, make it more confident and less generic

## 7. Services Page — Bright, Editorial Design

**`Services.tsx`** — Complete redesign:
- Hero: Light gradient background (frost-light to white) instead of dark
- Each service: alternating layout — odd services have icon on left, even have icon on right
- Large icon blocks (80x80 rounded squares with gradient fills)
- Each service section separated by subtle dividers
- Add the same 6 services from the homepage but with expanded descriptions
- Remove Google Ads references, add E-Commerce/Shopify builds
- Bottom CTA section stays dark for contrast

## 8. Work/Portfolio Page — Beautiful Gallery

**`Work.tsx`**:
- Hero: Use frost-light background with a gradient instead of pure dark
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- **Square aspect ratio (1:1)** for all project images
- Cards: white background with subtle shadow, rounded corners, project name + industry tag below image
- Add the new uploaded images as additional projects
- Bottom CTA with amber button

## 9. Navigation — Polish

**`Navigation.tsx`**:
- Already good from last iteration, just ensure "Website Designs" label is used
- Remove any Google Ads mentions from anywhere in the site

## 10. FAQ — Minor Polish

**`FAQSection.tsx`**:
- Update the services FAQ answer to list the correct services (remove Google, add e-commerce builds)

## 11. Contact Form — Add E-Commerce option

**`ContactFormDialog.tsx`**:
- Add "E-Commerce / Shopify" to business type dropdown

## Files Modified
- `src/components/HeroSection.tsx` — punchier copy, social proof line
- `src/components/LogoMarquee.tsx` — trust badge
- `src/components/CapabilitiesSection.tsx` — 6 services, new visual design
- `src/components/SystemBreakdownSection.tsx` — immersive AI section with mock chat UI
- `src/components/SystemDiagramSection.tsx` — testimonial card styling
- `src/components/ui/testimonial-cards.tsx` — amber stars, larger cards
- `src/components/AboutSection.tsx` — differentiator blocks
- `src/pages/Services.tsx` — bright editorial redesign with correct services
- `src/pages/Work.tsx` — square images, light background, new projects
- `src/components/FAQSection.tsx` — updated answers
- `src/components/ContactFormDialog.tsx` — add e-commerce option

