

# Frost Media — Warm Light Theme Redesign

## Overview
Complete visual and content overhaul: dark AI agency theme → warm light theme with coral/amber accents, bento grid layouts, interactive system diagram, "we" voice, and no pricing/commission mentions.

## Implementation Steps

### 1. Redesign system foundations
- Replace CSS variables in `src/index.css`: dark navy backgrounds → warm off-white (`#FAFAF9`), green accents → coral (`#FF6B58`) / amber (`#FFB84D`), dark text (`#1E293B`)
- Add JetBrains Mono font import alongside Inter (drop Space Grotesk for headings, use Inter bold instead)
- Update `tailwind.config.ts`: new color tokens (coral, amber, slate), remove frost-green/frost-navy references, update font families
- Update `index.html` meta tags with new description (no pricing mentions)

### 2. Rebuild Navigation
- Light theme: `backdrop-blur-xl bg-white/80 border-b border-slate-200`
- Logo: "FROST" black + "MEDIA" coral
- Links: "Capabilities" | "Systems" | "Results" | "About" (rename from current)
- CTA: "Let's Talk" in coral
- Same scroll-reveal behavior

### 3. Rebuild Hero as bento grid
- Background: `bg-gradient-to-br from-orange-50 via-white to-amber-50`
- CSS Grid layout: large left block (hero text) + 3 small right cards (stat counter 1900+, exclusive leads badge, AI pulse indicator)
- New copy using "We" voice, no pricing
- Headline: "We Build Lead Generation Systems / That Work While You Sleep" with coral-to-amber gradient text
- Badge: "AI-Powered Lead Generation for Home Service Contractors"
- CTAs: "Book Strategy Call" (coral) + "See How It Works ↓"

### 4. Rebuild Capabilities section (replaces Services + Problem)
- Remove ProblemSection entirely — fold messaging into capabilities
- Asymmetric bento grid with 6 cards of varying sizes (col-span/row-span)
- Card 1 (large, coral gradient bg): "Direct-Response Meta Campaigns"
- Card 2 (tall): "AI-Powered Follow-Up"
- Card 3 (wide, amber bg): "Appointment Scheduling on Autopilot"
- Cards 4-6 (small): "Custom Landing Pages", "24/7 Lead Screening", "Real-Time Reporting"
- All copy rewritten to "we" voice, no pricing

### 5. Build Interactive System Diagram (replaces HowItWorks)
- New component `SystemDiagramSection.tsx`
- Animated flow: Facebook Ad → Landing Page → Lead Capture → AI Chatbot → Qualification → Calendar Booking → Reminders → Contractor Shows Up
- SVG nodes as white cards with coral accents, animated dashed connecting lines (stroke-dashoffset animation)
- Sequential reveal on scroll using Framer Motion
- Mobile: vertical stack layout

### 6. Remove DifferentiatorSection
- Delete entirely — it's all about pricing/commission which we no longer show

### 7. Rebuild Results section
- Light background, coral/amber gradient stat numbers instead of green
- Remove "15%" and "Commission" stat — replace with "100%" + "Exclusive Leads"
- Rewrite testimonial quotes to remove pricing references (remove "15%" mention from 14er quote)
- Coral accent styling on testimonial cards

### 8. Rebuild About section
- Warm gradient background: `from-orange-50 to-amber-50`
- Rewrite copy to "We" voice throughout
- Coral accent styling on labels and badges
- Keep same two-column layout structure

### 9. Rebuild FAQ section
- Remove pricing questions (Q1 about 15% commission, Q2 about monthly fee)
- Add new questions: "What services do you specialize in?" and "What makes your AI different?"
- Rewrite remaining answers to "we" voice
- Light theme accordion styling with coral active state

### 10. Rebuild Final CTA
- Coral-to-amber gradient background instead of dark green
- White text, white CTA button with coral text
- New copy: "Ready to Build Your Lead Machine?" — no pricing mentions

### 11. Rebuild Footer
- Dark slate background (`bg-slate-900`)
- Coral accent on MEDIA text
- Updated nav links: "Capabilities" | "Systems" | "Results" | "About" | "FAQ"
- "Built with precision in Denver" tagline

### 12. Update Index page
- Remove ProblemSection and DifferentiatorSection imports
- Add SystemDiagramSection between Capabilities and Results
- Update section order: Nav → Hero → Capabilities → SystemDiagram → Results → About → FAQ → FinalCTA → Footer

### Files to create
- `src/components/SystemDiagramSection.tsx`

### Files to heavily rewrite
- `src/index.css` (full color system change)
- `tailwind.config.ts` (new tokens)
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx` (becomes Capabilities bento)
- `src/components/ResultsSection.tsx`
- `src/components/HowItWorksSection.tsx` (may be replaced by SystemDiagram)
- `src/components/AboutSection.tsx`
- `src/components/FAQSection.tsx`
- `src/components/FinalCTASection.tsx`
- `src/components/Footer.tsx`
- `src/pages/Index.tsx`
- `index.html`

### Files to delete
- `src/components/ProblemSection.tsx`
- `src/components/DifferentiatorSection.tsx`

