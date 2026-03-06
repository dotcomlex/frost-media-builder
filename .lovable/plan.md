

# Rework AI Automation Page — Full Redesign

The current page is plain slate boxes with basic text. Here's the plan to make it a premium, engaging, on-brand page that matches the rest of the site's design language (ice-blue accents, `bg-muted` light sections, `alpine-dark` dark sections, framer-motion animations, `font-heading`/`font-mono-tech` typography).

## Page Structure (top to bottom)

### 1. Hero Section (dark, alpine-dark bg)
- Mountain background with dark overlay + frost-pattern (same treatment as FinalCTASection/homepage hero)
- Bold headline: "Your AI Employee That Never Clocks Out" or similar
- Subtitle explaining the value prop: instant lead response, qualification, booking — all automated
- `font-mono-tech` label: "Conversational AI"
- CTA button (ice-blue primary)
- Stats row: `< 30s Response` / `24/7 Available` / `3x More Bookings` in bordered cards (matching SystemBreakdownSection style)

### 2. Live Chat Demo Section (bg-muted, light)
- Split layout: phone mockup on left showing a **contractor scenario** conversation (reuse the phone mock pattern from SystemBreakdownSection but with a longer, more detailed conversation)
- Conversation: homeowner asks about roof repair → AI qualifies (asks about size, timeline, budget) → handles objection ("is this a real person?") → books appointment → sends confirmation
- Right side: copy explaining how FrostBot is fully trained on the client's business, knows their services, pricing, FAQs, and handles objections naturally
- Channel pills: SMS, Voice, Web Chat, Social DMs, Instagram, Facebook Messenger

### 3. How It Works — 3-Step Flow (bg-background, white)
- Horizontal 3-step cards with numbered icons (ice-blue accent top border):
  1. Lead reaches out (any channel)
  2. AI qualifies & handles objections
  3. Appointment booked, you get notified
- Clean, minimal, matching the site's card style

### 4. Use Cases Grid (bg-muted, light)
- Section title: "Built For Every Industry"
- 2x3 grid of use case cards, each with an icon, industry name, and a short example:
  - **Contractors** — "Qualifies roof repair leads, books estimates"
  - **Beauty & Med Spas** — "Books appointments via Instagram DMs"
  - **Real Estate** — "Follows up with buyer inquiries 24/7"
  - **HVAC & Plumbing** — "Handles emergency service requests instantly"
  - **Insurance** — "Qualifies policy inquiries, schedules consultations"
  - **E-commerce** — "Answers product questions, recovers abandoned carts"
- Glassmorphic cards with hover effects

### 5. What It Replaces Section (bg-background, white)
- Two-column comparison: "Without FrostBot" vs "With FrostBot"
- Left (red-tinted): missed calls, slow follow-up, lost leads, manual booking, repetitive tasks
- Right (green/ice-blue-tinted): instant response, qualified leads, auto-booking, zero manual work
- Visual contrast to make the value obvious

### 6. Social Media DMs Section (alpine-dark, dark)
- Focused section on Instagram/Facebook DM automation
- Phone mockup showing an Instagram DM conversation with the AI
- Copy: "Every DM answered. Every comment followed up. Every lead captured."
- Highlight that it works across Instagram, Facebook Messenger, and Google Business

### 7. FAQ Section (bg-background, white)
- AI-specific FAQs using the existing Accordion component:
  - "How does FrostBot learn about my business?"
  - "Will customers know they're talking to AI?"
  - "What channels does it work on?"
  - "How long does setup take?"
  - "Can it handle objections?"
  - "What if the AI can't answer a question?"
  - "How much does it cost?"
  - "Is my data secure?"

### 8. Final CTA (mountain bg, dark)
- Same mountain bg treatment as homepage FinalCTASection
- "See FrostBot In Action" headline
- CTA to book a demo

## Technical Details

**File modified:** `src/pages/AIAutomation.tsx` — complete rewrite

**Dependencies used (all existing):**
- `framer-motion` for scroll animations
- `lucide-react` for icons
- Radix Accordion for FAQ
- Tailwind classes matching site design tokens (`bg-muted`, `bg-alpine-dark`, `text-ice-blue`, `font-heading`, `font-mono-tech`, `border-primary`)

**Design consistency:**
- Uses same color palette, typography, spacing, and animation patterns as homepage
- Phone mockup component reused from SystemBreakdownSection pattern
- FAQ section matches homepage FAQ style
- CTA matches FinalCTASection style

