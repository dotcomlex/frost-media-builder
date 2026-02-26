

# Frost Media LLC — Website Build Plan

## Overview
A single-page, dark-themed, conversion-focused website for Frost Media — Alex Luna's AI-powered lead generation agency for home service contractors in Denver. Dark navy (#0B0F1A) with electric green (#22C55E) accents, Space Grotesk + Inter typography, Framer Motion animations throughout.

## Implementation Steps

1. **Set up design system & global styles** — Install Framer Motion, configure custom color palette (dark navy/green), add Space Grotesk + Inter fonts, set up smooth scrolling and grid pattern background utilities.

2. **Build sticky navigation** — Backdrop-blur nav with "FROST MEDIA" text logo, anchor links (Services, Results, How It Works, About, FAQ), green CTA button, mobile hamburger menu using Sheet component. Auto-hide/show on scroll.

3. **Build Hero section** — Full-viewport hero with radial green glow background, subtle grid overlay, badge pill, large gradient headline ("Your Ads Should Print Money."), subheadline, dual CTA buttons with glow effects, social proof bar, and bouncing scroll indicator. Staggered fade-in animations.

4. **Build Problem section** — "Most Agencies Charge You Whether They Deliver or Not" headline with 3 problem cards (Retainers, Shared Leads, Slow Follow-Up) in a grid, each with accent top bar and hover effects.

5. **Build Services section** — 4 service cards in a 2×2 grid (Meta Ads, AI Follow-Up, Appointment Booking, Landing Pages) with green icons, descriptive copy, and tag pills.

6. **Build Differentiator / Pay-Per-Close section** — Visually prominent section with dark green gradient background. Side-by-side comparison: "Other Agencies" (red-tinted, ✗ list) vs "Frost Media" (green-tinted, ✓ list with RECOMMENDED badge). Italic quote callout below.

7. **Build Results section** — Animated stat counters (1,900+ leads, 7+ years, 15% commission, 24/7 AI), plus 3 testimonial cards (14er Renovations, Divas Beauty, Jose's Painting) with green quotation mark accents.

8. **Build How It Works section** — 3-step horizontal process flow (Build → AI Qualifies → You Close) with numbered green circles, connecting dashed lines on desktop, vertical stack on mobile.

9. **Build About section** — Two-column layout with photo placeholder (green glow behind) and bio text, credential badges row.

10. **Build FAQ section** — Accordion with 6 Q&As using shadcn/ui Accordion, dark-themed with green active indicators.

11. **Build Final CTA section** — Dramatic gradient background with green radial glow, bold headline, large glowing CTA button with pulse effect.

12. **Build Footer** — 3-column layout with logo/tagline, quick links, contact info + social icons, copyright bar.

13. **Polish responsive behavior & animations** — Ensure mobile-first responsive layouts, verify all Framer Motion scroll animations work with `once: true`, respect `prefers-reduced-motion`, add meta tags.

