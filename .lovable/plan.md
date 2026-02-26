

# Frost Media — Light Theme + Frost Crystal Redesign

## Overview
Full redesign: shift from dark/light alternating to **light primary theme** with ice blue (`#4A90D9`) + amber/copper (`#C47B2B`) accents. Frost-crystal visual identity, data-first hero with rotating metrics carousel, industry-tabbed case studies, bilingual EN/ES toggle, and mobile sticky CTA bar.

## Implementation Steps

### 1. Update design system (`src/index.css` + `tailwind.config.ts`)
- New CSS vars: background `#FFFFFF`, frost-white `#F7F9FC`, ice-blue `#4A90D9`, deep-ice `#2C5F8A`, amber `#C47B2B`, warm-gold `#D4A053`, text `#1A2332`
- Replace coral/frost-blue-deep vars with new palette
- Add frost-crystal SVG background utility class
- Keep Space Grotesk, Inter, JetBrains Mono fonts

### 2. Rebuild Navigation (`Navigation.tsx`)
- Light theme: `bg-white/95 backdrop-blur-md border-b border-slate-200` (always visible, no hide-on-scroll)
- Add shadow on scroll past 100px
- Add "EN | ES" language toggle
- Add phone number "(720) 288-7101"
- CTA: "Let's Talk" in amber (`#C47B2B`)
- Links: "Services" | "Work" | "About" | "Contact"
- Nav links with dropdown for Services (Lead Gen, Web Design, AI Automation, Branding, SEO)

### 3. Rebuild Hero (`HeroSection.tsx`) — light bg with frost crystal pattern
- White gradient bg: `from-white via-[#E8F4FA]/30 to-white`
- Animated frost-crystal geometric SVG pattern overlay (ice blue at 40% opacity)
- Badge: "📍 Denver, Colorado | AI-Powered Marketing Systems"
- Headline: "We Build Marketing Systems / That Generate Real Revenue" (gradient ice-blue)
- **Rotating metrics carousel**: 4 slides auto-rotating every 4s with progress dots
  - "1,900+ Leads Generated" | "For Denver Beauty Studio in 30 Days"
  - "$180K Revenue Increase" | "Home Services Client, 6 Months"
  - "78% Close Rate" | "AI-Qualified Painting Leads"
  - "< 60 Seconds" | "Average AI Response Time, 24/7"
- Numbers in amber `#C47B2B`, descriptions in slate
- Dual CTAs: "See Our Results →" (amber) + "Schedule a Call" (outline)
- Trust pills row: "7+ Years" | "Denver Based" | "Bilingual (EN/ES)" | "100+ Campaigns" | "AI-Powered"

### 4. Rebuild Trust Bar (`TrustBar.tsx`)
- `bg-white border-y border-slate-200 py-6`
- Horizontal row (not scrolling): "4.9★ Google Rating" | "$2M+ Client Revenue" | "Denver, CO" | "Meta Business Partner" | "100+ Systems Built"
- On mobile: horizontal scroll with snap

### 5. Rebuild Services section (`CapabilitiesSection.tsx`) — LIGHT
- Rename to services, `bg-[#F7F9FC]`
- 5-card grid (not bento): Lead Generation, AI Automation, Web Design, Branding, SEO
- Each card: white bg, slate border, numbered "01"-"05" in mono, ice-blue icon circle, "Learn More →" link
- Section CTA: "Ready to Build Your System?" + amber button
- Remove TikTok mention, keep Meta + Instagram

### 6. Rebuild System Diagram → Case Studies (`SystemDiagramSection.tsx`) — DARK section
- Rename to case studies section, `bg-[#1A2332]`
- **Industry tabs**: Home Services | Beauty & Wellness | E-commerce | Professional Services
- 3 case study cards per tab with: industry tag pill, large metric, title, description, client quote, attribution
- Tab content crossfades on switch
- Metrics count up on first view
- Section CTA: "Want Results Like These?" + amber button

### 7. Create Denver Identity / About section (`AboutSection.tsx`) — LIGHT
- `bg-white`, two-column layout
- Left: origin story with "Christian Alejandro" + Denver cultural refs (Commerce City, 720 area code)
- Right: photo placeholder with ice-blue glow
- Credentials pills
- CTA: "Want to Work Together?" + amber button

### 8. Create Bilingual/AI Spotlight section (new component)
- `bg-gradient-to-br from-[#E8F4FA] to-white`
- Two-column feature grid: "Unlock the Latino Market" + "24/7 Lead Qualification"
- Stats: "45% of Denver Metro is Hispanic/Latino" + "< 60 sec response time"

### 9. Rebuild Results → Testimonials carousel (`ResultsSection.tsx`)
- `bg-white`, horizontal carousel (3 visible desktop, 1 mobile)
- Star ratings, review platform badges (Google, Clutch)
- Auto-advance every 6s with left/right arrows + dots
- Remove stat counters (moved to hero carousel)

### 10. Rebuild FAQ (`FAQSection.tsx`)
- `bg-[#F7F9FC]`, add 2 new questions: "What's included in your services?", "How does bilingual marketing work?"
- Rewrite "Are you local to Denver?" answer
- Ice-blue accent on active accordion items

### 11. Rebuild Final CTA (`FinalCTASection.tsx`) — DARK
- `bg-[#1A2332]` with frost crystal pattern overlay
- Headline: "Ready to Stop Wasting Money on Agencies That Don't Deliver?"
- Dual CTAs: "Book Your Free Strategy Session →" (amber) + "Call Us: (720) 288-7101" (outline white)

### 12. Rebuild Footer (`Footer.tsx`)
- 4 columns: Brand | Services (5 links) | Company (5 links) | Contact (address, phone, email, languages)
- Bottom bar: copyright + Privacy Policy | Terms of Service

### 13. Remove WhyFailSection, add new components
- Delete `WhyFailSection.tsx` (educational dark section removed)
- Create `BilingualSpotlight.tsx`
- Create `MobileCTABar.tsx` — sticky bottom bar on mobile only with "Call" + "Let's Talk" buttons

### 14. Update Index page
- Section order: Navigation → Hero → TrustBar → Services → CaseStudies → About → BilingualSpotlight → Testimonials → FAQ → FinalCTA → Footer → MobileCTABar

### 15. Update `index.html` meta tags + LocalBusiness schema

### Files to create
- `src/components/BilingualSpotlight.tsx`
- `src/components/MobileCTABar.tsx`

### Files to delete
- `src/components/WhyFailSection.tsx`

### Files to rewrite
- `src/index.css`, `tailwind.config.ts`, `index.html`
- All component files: Navigation, HeroSection, TrustBar, CapabilitiesSection, SystemDiagramSection, ResultsSection, AboutSection, FAQSection, FinalCTASection, Footer
- `src/pages/Index.tsx`

