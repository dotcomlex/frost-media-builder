

# Major Content & Structure Overhaul

## 1. Redesign Services Section (CapabilitiesSection.tsx)
Transform from boring icon+paragraph cards into engaging, visually rich service blocks. Each service gets:
- A bold headline with a short punchy tagline
- Bullet-point deliverables (what they actually get)
- An outcome statement (what happens after)
- Alternating layout: odd cards have accent left border in ice-blue, even in amber
- Hover state lifts card with shadow
- "Learn more" links that go to dedicated service pages (future)

Services content:
1. **Paid Media & Advertising** — "Your ads, engineered to print money." Deliverables: Meta/Instagram/Google campaigns, creative production, A/B testing, audience research, retargeting funnels, scaling strategies. Outcome: "Stop guessing. Start scaling."
2. **Lead Generation** — "Your pipeline, full. Every single month." Deliverables: Custom campaigns for home services, beauty, insurance, real estate, e-commerce. Geo-targeted, funnel-built, CRM-integrated. Outcome: "From empty calendar to fully booked."
3. **AI-Powered Systems** — "Your best closer — working 24/7." Deliverables: Custom AI agent/chatbot, instant lead response, FAQ handling, objection handling, appointment booking, follow-up sequences, CRM integration. Outcome: "Every lead gets a response in seconds, not hours."
4. **Web Design & Funnels** — "Websites that sell. Not just sit there." Deliverables: Landing pages, sales funnels, full website builds, brand identity, mobile-first, SEO-optimized. Outcome: "Your digital presence becomes your best salesperson."

Layout: Full-width stacked cards (not 2x2 grid) with generous padding, each card a mini-section. On mobile, clean vertical stack with proper spacing.

## 2. Replace Case Studies with Testimonial Carousel (SystemDiagramSection.tsx)
Replace the current case study grid with a horizontally scrolling testimonial/review section. Each review card:
- Avatar (generated initials-based)
- Name, business type, location
- Star rating (5 stars)
- Quote about how Frost Media helped them
- Industry tag pill

Reviews (realistic, diverse industries and locations):
1. Marcus T. — HVAC Owner, Phoenix AZ — AI lead system filled his summer schedule
2. Sarah L. — Beauty Studio Owner, Denver CO — Went from empty afternoons to a waitlist
3. David R. — Concrete Contractor, Dallas TX — More jobs in Q1 than entire previous year
4. Jennifer K. — E-Commerce Brand, LA — ROAS tripled after ad restructure
5. Mike P. — Painting Company, Denver CO — Every estimate now closes
6. Carlos M. — Roofing Company, Tampa FL — Became the go-to in his zip codes
7. Amanda W. — Insurance Agent, Austin TX — AI chatbot handles all inbound leads
8. Jason B. — Real Estate Team, Miami FL — Lead gen pipeline runs on autopilot

Use embla-carousel (already installed) for horizontal scroll with dots/arrows. Section title: "What Our Clients Say". Light frost-light background to contrast the dark hero above.

## 3. Add "How It Works" Section (new ProcessSection.tsx)
Add between services and testimonials. Three-step process on dark bg:
1. **Strategy Call** — "We learn your business, your goals, and your market."
2. **We Build Your System** — "Custom ads, AI automation, and funnels — all integrated."
3. **You Scale** — "Leads flow in, your calendar fills up, revenue grows."

Clean numbered steps with connecting line/dots. Simple, outcome-focused.

## 4. Update Page Structure (Index.tsx)
New order:
1. Navigation
2. Hero
3. Logo Marquee
4. Services (redesigned)
5. How It Works (new)
6. Testimonials (replaces case studies)
7. About
8. FAQ
9. Final CTA
10. Footer

Add "Services" to nav links.

## 5. Update Navigation (Navigation.tsx)
Add "Services" link pointing to `#services`.

## Files
- **Modified**: `CapabilitiesSection.tsx`, `SystemDiagramSection.tsx`, `Navigation.tsx`, `Index.tsx`
- **Created**: `src/components/ProcessSection.tsx`

