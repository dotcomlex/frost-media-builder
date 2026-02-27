

# Frost Media — Content & Design Overhaul

## Changes Overview

### 1. HeroSection.tsx — Clean up copy & CTA
- Remove "bilingual" from subheadline
- Remove the "1,900+" stat block entirely
- Replace "See Our Results" with a proper CTA: "Book a Free Strategy Call →" linking to #contact
- Keep the dark bg, left-aligned headline, frost pattern — those are working well

### 2. CapabilitiesSection.tsx — Expand to 4 services with richer descriptions
Split into 4 cards with expanded copy and decorative gradient/icon treatments per card:
- **Paid Media & Advertising** — Meta, Instagram, Google ads, creative production, A/B testing, audience targeting, scaling for e-commerce and local businesses
- **Lead Generation** — Full-funnel lead gen for home services, beauty, insurance, real estate, e-commerce — custom campaigns, not templates
- **AI-Powered Systems** — Custom AI agent/chatbot handling inbound leads, follow-ups, FAQ responses, objection handling, appointment booking, 24/7 automated
- **Web Design & Funnels** — Landing pages, funnels, full website builds, brand identity — designed to convert and stand out

Each card gets a subtle gradient accent or illustration-style SVG icon to make it more visually engaging. Grid: 2x2 on desktop, stacked on mobile with proper spacing.

### 3. SystemDiagramSection.tsx — Expanded case studies, more industries, no bilingual mentions
Expand from 3 to 6 case studies across diverse industries and states. Remove all bilingual/Spanish references. Remove specific metrics (1,900+, 78%, $120K) — replace with narrative-focused cards that describe the problem solved and outcome without hard numbers. Separate testimonial quotes from case study descriptions (no mixing).

Industries to include:
- HVAC company (Phoenix, AZ)
- Concrete contractor (Dallas, TX)
- Painting company (Denver, CO)
- Beauty studio (Denver, CO)
- E-commerce brand (Los Angeles, CA)
- Roofing company (Tampa, FL)

Layout: 2-column grid on desktop (3 rows), single column on mobile. Each card has industry tag, company description, what we did, and the result — written as a short narrative paragraph.

### 4. AboutSection.tsx — Remove contact info, add background
- Remove phone, email, address completely
- Remove "bilingual" and "English and Spanish" references
- Add a subtle frost-light gradient or alpine-dark background instead of plain white
- Keep "Denver, Colorado" mention naturally in the copy
- Tighten to 2 clean paragraphs

### 5. FAQSection.tsx — Remove bilingual references
- Update FAQ answers to remove all "bilingual", "English/Spanish" mentions
- Update industries FAQ to include the expanded list (home services, e-commerce, beauty, insurance, real estate, contractors)

### 6. Navigation.tsx — Remove phone number
- Remove phone number from nav and mobile menu
- Keep "Let's Talk" CTA button

### 7. Footer.tsx — Remove address, phone, email
- Remove the "Denver Office" column with address/phone/email
- Replace with a simpler 2-column layout: brand + social links, quick links
- Keep "Denver, Colorado" only in the copyright line

### 8. FinalCTASection.tsx — Update CTA to "Book a Call"
- Change button text to "Book a Call →"
- Keep "Denver, Colorado" as location context subtly

## Files Modified
- `src/components/HeroSection.tsx`
- `src/components/CapabilitiesSection.tsx`
- `src/components/SystemDiagramSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`
- `src/components/FinalCTASection.tsx`

