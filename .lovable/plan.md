

# Frost Media — Dark/Light Contrast Redesign

## Overview
Major redesign: alternating dark (`#0A0E1A`) and light (`#FAFAF9`) sections, frost blue (`#60A5FA`) + coral (`#FF6B58`) accents, mountain/frost Colorado branding, Space Grotesk headings, broader services, "we" voice, no pricing, "Christian Alejandro" not "Alex Luna", interactive AI chat demo, scrolling trust bar.

## Implementation Steps

### 1. Update design system foundations
- **`src/index.css`**: Replace CSS variables with dual dark/light palette. Dark: `#0A0E1A` bg, `#151B2E` surface, frost blue `#60A5FA` primary. Light sections use `#FAFAF9`. Add Space Grotesk font import back alongside Inter + JetBrains Mono. Add `overflow-x: hidden` on html/body. Add frost-glow utilities.
- **`tailwind.config.ts`**: Add `frost-blue`, `frost-dark`, `frost-surface` color tokens. Update font-heading to Space Grotesk. Keep coral/amber tokens. Add mountain gradient utilities.
- **`index.html`**: Update meta title to "AI-Powered Growth Systems for Colorado Businesses", update description removing pricing/contractor-only language.

### 2. Rebuild Navigation (`Navigation.tsx`)
- Glassmorphism style: `backdrop-blur-xl bg-white/5 border-b border-white/10` (dark default since hero is dark)
- Logo: "FROST" white + "MEDIA" frost blue
- Links: "Services" | "Systems" | "Results" | "About" | "Contact"
- CTA: "Start Your Project" in frost blue
- Appears after 50px scroll

### 3. Rebuild Hero (`HeroSection.tsx`) — DARK section
- Dark gradient bg: `from-[#0A0E1A] via-[#1E3A8A] to-[#0F172A]`
- SVG mountain silhouettes at bottom with layered opacity
- Animated particle/star dots (CSS keyframes, small glowing circles)
- Badge: "AI-Powered Growth Systems for Colorado Businesses"
- Headline: "We Build Systems That / Generate, Close & Manage / Leads on Autopilot" (last line gradient frost-blue to coral)
- Sub: mentions AI + media buying + Denver, no pricing
- CTAs: "See Our Systems" (frost blue glow) + "Case Studies ↓"
- Bouncing chevron scroll indicator

### 4. Create Trust Bar section (new `TrustBar.tsx`) — LIGHT section
- `bg-white` with infinite CSS scroll animation
- Items: "Meta Business Partner", "AI-Powered Systems", "Custom Automation", "Advanced Analytics", "Conversion Optimization", "Mobile-First Design", "Bilingual Marketing (EN/ES)"
- Duplicated row for seamless loop
- `@keyframes scroll` CSS animation

### 5. Create "Why Businesses Fail" section (new `WhyFailSection.tsx`) — DARK section
- `bg-[#0A0E1A]` with subtle grid overlay
- Headline: "Most Businesses Fail Because They're Running Blind"
- 3 cards: "Winging It Every Day", "Stuck in 2015", "Trading Time for Money"
- Cards: `bg-white/5 backdrop-blur-sm border border-white/10`
- Stagger fade-in animations

### 6. Rebuild Capabilities → Services bento (`CapabilitiesSection.tsx`) — LIGHT section
- `bg-slate-50`
- Label: "WHAT WE BUILD" / Headline: "The Complete Growth Infrastructure"
- Expanded services: Performance Media Buying (large, frost-blue gradient), AI Lead Systems (tall), Custom Websites & Funnels (wide, coral bg), CRM Infrastructure, Branding & Design, Conversion Copywriting
- Remove "GoHighLevel" from tags
- Add TikTok to media buying, add Web Design/Branding/Copywriting services
- Broader copy — not contractor-specific

### 7. Rebuild System Diagram → AI Chat Demo (`SystemDiagramSection.tsx`) — DARK section
- `bg-[#0A0E1A]` with animated grid
- Replace flow diagram with interactive AI chat demo
- Auto-playing conversation: lead asks about kitchen remodel, AI qualifies and books
- Typing indicator animation, message-by-message reveal on scroll
- "BOOKED" notification at end
- Stats row below: "<60 sec", "24/7", "100%", "Zero manual work"

### 8. Rebuild Results section (`ResultsSection.tsx`) — LIGHT section
- `bg-white`
- Remove "15% Commission" stat → replace with "100% Exclusive"
- Gradient numbers: frost-blue to coral
- Fix testimonials: "Alex's system" → "The system", use "Juan Rodriguez" not "J. Rodriguez", "Maria" for Divas Beauty
- Remove pricing references from quotes
- Coral/blue accent styling

### 9. Rebuild About section (`AboutSection.tsx`) — DARK section
- Dark gradient: `from-[#0A0E1A] to-[#1E3A8A]`
- "Christian Alejandro" not "Alex Luna"
- Headline: "Built by Marketers Who Saw the Gaps"
- Updated copy: "we" voice, small expert team, selective positioning, no pricing mentions, broader than contractors
- Add "Selective Clientele" badge
- Add "We Don't Work with Everyone" callout block
- Light text on dark bg

### 10. Rebuild FAQ (`FAQSection.tsx`) — LIGHT section
- `bg-slate-50`
- Remove Q1 (15% commission) and Q2 (monthly fee)
- New questions: "Do you work with my industry?", "What makes your AI different?", "Do you work with everyone?" (selective positioning)
- All answers in "we" voice, no pricing, no "I"
- Frost blue accent on active accordion item

### 11. Rebuild Final CTA (`FinalCTASection.tsx`) — DARK section
- Gradient: `from-[#0A0E1A] via-[#1E3A8A] to-frost-blue-600`
- Headline: "Ready to Build Your Growth Infrastructure?"
- White CTA button with frost blue text
- Updated sub copy, no pricing

### 12. Rebuild Footer (`Footer.tsx`) — DARK section
- `bg-[#0A0E1A]`
- Logo: FROST white, MEDIA frost blue
- Tagline: "Cutting-edge AI systems for Colorado businesses"
- Links: Services | Systems | Results | About | Contact
- Email: hello@frostmedia.co
- "Built with precision in Denver, Colorado"

### 13. Update Index page (`Index.tsx`)
- Section order: Navigation → Hero → TrustBar → WhyFailSection → Capabilities → SystemDiagram → Results → About → FAQ → FinalCTA → Footer
- Import new components, remove old deleted ones

### Files to create
- `src/components/TrustBar.tsx`
- `src/components/WhyFailSection.tsx`

### Files to rewrite
- `src/index.css`, `tailwind.config.ts`, `index.html`
- All component files listed above
- `src/pages/Index.tsx`

