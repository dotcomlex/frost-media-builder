

# Three-Part Update: Navigation Fix, Remove Case Studies, Meta Ads Full Redesign

## 1. Navigation Fix (Mobile)

**File: `src/components/Navigation.tsx`**

- Fix the mobile menu X button: the toggle button has `z-[60]` but the menu overlay is `z-[55]` — the X button is behind the nav bar. Move the X button inside the mobile overlay or raise the overlay z-index so the X is clickable
- Add a "Home" link (to `/`) as the first item in mobile menu
- Remove "Case Studies" link from both desktop and mobile menus
- Keep: Home, Services (expandable), About, and the amber "Book a Call" CTA

## 2. Remove All Case Studies References

**Files: `src/components/Navigation.tsx`, `src/components/Footer.tsx`, `src/App.tsx`**

- Navigation: remove Case Studies link from desktop nav and mobile menu
- Footer: remove both Case Studies links (from Services column and Company column)
- App.tsx: remove the `/case-studies` route and CaseStudies import

## 3. Meta Ads Page — Full Premium Redesign

**File: `src/pages/MetaAds.tsx`** — complete rewrite, ~600-700 lines

Inspired by Flighted, GrowthRoom, and the user's Upwork portfolio. Educational, authoritative, and conversion-focused.

### Page Structure (top to bottom):

**A. Hero Section (alpine-dark, mountain bg)**
- `font-mono-tech` label: "SOCIAL MEDIA ADVERTISING"
- Bold headline: "Expert Facebook & Instagram Ad Campaigns That Generate Real Leads"
- Subtitle about exclusive leads, tested strategies, real results
- Amber CTA + stats row: "100+ Campaigns Launched" / "Years of Experience" / "Multi-Industry Expertise"

**B. Why Social Media Ads Section (bg-muted, light)**
- Educational section: why Facebook/Instagram ads are still the most powerful acquisition channel
- 3 key points with icons: Lowest cost per lead, Precision targeting, Scalable results
- Inspired by GrowthRoom's "Why Facebook Ads?" section

**C. Platforms We Advertise On (bg-background, white)**
- Grid of platform logos/icons with names: Facebook, Instagram, TikTok, Snapchat, Pinterest, Messenger
- Clean horizontal strip showing multi-platform capability
- No Google mention

**D. Our Process — How We Work (bg-muted, light)**
- 4-step horizontal flow with numbered cards:
  1. Strategy & Research — Audit your market, competitors, audience
  2. Creative Development — Scroll-stopping ad creative and copy
  3. Launch & Test — A/B test audiences, placements, messaging
  4. Optimize & Scale — Lower CPA, increase ROAS, scale winners

**E. Industries We've Helped (alpine-dark, dark)**
- 2x3 or 3x3 grid of industry cards showing breadth of experience (from Upwork portfolio):
  - Contractors & Home Services
  - Beauty & Med Spas
  - Real Estate
  - E-commerce & DTC
  - Insurance & Finance
  - Local Services
- Each card: icon + industry + one-line result example
- Demonstrates the "not your traditional agency" angle

**F. Results Dashboard Section (bg-background, white)**
- AI-generated mockup images of Facebook Ads Manager dashboards showing positive results (use the Nano image generation API to create 2-3 dashboard screenshots)
- Actually, since we can't easily embed AI-generated images at build time, we'll use **styled metric cards** instead — designed to look like a dashboard:
  - Row of 3 large stat cards: "+32% Conversion Rate" / "-40% Cost Per Lead" / "3.2x ROAS Average"
  - Below: a visual "campaign performance" chart-style display using styled divs (bar charts or progress bars) showing sample campaign metrics
- This gives the dashboard feel without needing actual screenshots

**G. What Makes Us Different (bg-muted, light)**
- Two-column comparison: "Traditional Agency" vs "Frost Media"
- Left (muted/red): cookie-cutter campaigns, locked accounts, no transparency, slow communication
- Right (ice-blue/green): custom strategy, you own your account, full transparency, direct communication, AI-powered follow-up with FrostBot

**H. The Problem with Lead Marketplaces (bg-background, white)**
- Keep the existing competitor comparison (HomeAdvisor vs Thumbtack vs Frost) but restyle to match the new design language

**I. Testimonial Strip (alpine-dark, dark)**
- Horizontal scrolling testimonial cards (reuse TestimonialCard component pattern)
- 4-6 testimonials from happy clients about ad results

**J. FAQ Section (bg-background, white)**
- Accordion FAQs specific to social media advertising:
  - "How much should I budget for Facebook ads?"
  - "How long before I see results?"
  - "Do I own my ad account?"
  - "What industries do you work with?"
  - "How is this different from boosting posts?"
  - "What platforms do you advertise on?"
  - "Can you help with e-commerce ads?"
  - "How do you measure success?"

**K. Final CTA (mountain bg, dark)**
- Reuse FinalCTASection pattern: "Ready to Start Generating Real Leads?"
- Amber CTA button

### Technical Details

- Uses existing design tokens: `alpine-dark`, `ice-blue`, `font-heading`, `font-mono-tech`, `bg-muted`
- `framer-motion` scroll animations throughout
- Radix Accordion for FAQ
- Responsive: all sections mobile-optimized with single-column stacking
- Imports: `heroMountains`, `useContactForm`, `framer-motion`, lucide icons, Accordion components

