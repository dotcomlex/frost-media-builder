

# Add Trust Badges, FrostBot Section, and Industries Grid

## What We're Building
Three new homepage sections following the user's exact specs, plus no mention of dollar amounts or revenue figures anywhere.

## New Components

### 1. `src/components/TrustBadgesRow.tsx`
- Placed immediately after `<HeroSection />` with `-mt-12` overlap
- Glassmorphic card: `bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-2xl`
- 4 badges in a `grid-cols-2 lg:grid-cols-4`:
  - **4.9/5.0** Client Rating (5 amber stars)
  - **Meta Business** Certified Partner (Award icon)
  - **100+ Projects** Delivered (TrendingUp icon) — *NOT revenue/dollar amounts per user request*
  - **Denver, CO** Locally Owned (MapPin icon)
- Icon containers: `bg-sky-500/20 border border-sky-500/30 rounded-xl`

### 2. `src/components/FrostBotSection.tsx`
- Placed after `<CapabilitiesSection />`
- Dark `bg-slate-900` with sky gradient overlay
- Two-column layout:
  - **Left**: Large Bot icon (Lucide `Bot`) inside bordered container with 100px blur glow + floating `<60sec Response` amber badge
  - **Right**: FrostBot™ branded pill label with pulsing dot, headline "Never miss a lead again — even at 2am", 3 green-checkmark features (Instant Response, Pre-Qualification, Appointment Booking), sky-blue CTA button opening contact form
- All specs match user's exact padding, font sizes, colors, shadows

### 3. `src/components/IndustriesGridSection.tsx`
- Placed after `<AboutSection />`, before `<FAQSection />`
- `bg-slate-800` background
- Section header with sky pill label + "Built for Home Service Contractors" headline
- 8-card grid (2/3/4 cols responsive): HVAC, Plumbing, Concrete, Electrical, Roofing, Painting, Landscaping, Remodeling
- Each card: `bg-slate-900 border-slate-700 rounded-2xl p-6` with Lucide icons (`Wind`, `Droplets`, `Hammer`, `Zap`, `Home`, `Paintbrush`, `TreePine`, `Wrench`)
- Hover: border glows sky-500/50, icon scales 110% + rotates 3deg, title turns sky-400
- Cards link to `openForm()` since industry pages don't exist yet
- Bottom "See All Industries" link

### 4. `src/pages/Index.tsx` update
New order:
```
Navigation → Hero → TrustBadgesRow → LogoMarquee → Capabilities → FrostBotSection → SystemDiagram → SystemBreakdown → About → IndustriesGrid → FAQ → FinalCTA → Footer
```

## Key Constraint
- **No dollar amounts, revenue figures, or spending numbers anywhere** (badges say "100+ Projects Delivered" instead of "$2M+ Revenue")

## Files
- **Create**: `TrustBadgesRow.tsx`, `FrostBotSection.tsx`, `IndustriesGridSection.tsx`
- **Modify**: `Index.tsx` (add 3 imports + insert components)

