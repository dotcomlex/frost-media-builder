

# Comprehensive Visual & Content Overhaul

## Changes Overview

### 1. Hero Section — Fix text readability + move particles up
**File: `HeroSection.tsx`**
- Darken the gradient overlay more (increase `from-black/80` to `from-black/85`, `via-black/50` to `via-black/60`, `to-black/30` to `to-black/40`) so white text doesn't blend with snowy mountains
- Adjust the `DottedSurface` camera position — currently `camera.position.set(0, 355, 1220)` puts particles low. In `dotted-surface.tsx`, raise the camera Y position (e.g., `camera.position.set(0, 250, 1220)`) and reduce the Z to bring particles more centered/upward in the viewport rather than sitting only at the bottom

### 2. Services Section — More engaging "What We Build" cards
**File: `CapabilitiesSection.tsx`**
- Redesign cards to be more visually engaging: add a **large icon with a glowing background effect**, a bold benefit headline, and the bullet points beneath
- Add a subtle **hover lift animation** (translateY + shadow increase) to each card
- Give each card a **left colored border accent** instead of top bar for a cleaner, more premium look
- Expand the AI Systems card content to detail: AI Voice Callers, AI SMS Agents, AI Chatbots — emphasizing time/money savings and no extra hires needed

### 3. Testimonials Section — Mountain background instead of plain black
**File: `SystemDiagramSection.tsx`**
- Import `heroMountains` and use it as a background image layer (same approach as hero)
- Add a dark overlay (`from-black/85 via-black/70 to-black/80`) so testimonial cards remain readable
- This creates visual continuity with the hero and makes the section feel immersive

### 4. System Breakdown — Complete redesign as horizontal timeline
**File: `SystemBreakdownSection.tsx`**
- Replace the current 3-column card layout with an **alternating timeline design**: step 1 content on left / visual on right, step 2 flipped, step 3 back to left
- Remove the AI-generated images (they were vague) — use **icon-based illustrations** with gradient backgrounds instead
- Add more detail to each step, especially the AI step: mention AI Voice Callers, AI SMS Agents, AI Chatbots, 24/7 automated responses, saving time and money without hiring
- Add a connecting vertical line between steps on desktop for visual flow as users scroll

### 5. About Section — More impactful layout
**File: `AboutSection.tsx`**
- Add **stat counters** (e.g., "150+ Clients", "7+ Years", "$2M+ Ad Spend Managed") in a horizontal row above or below the text
- Add a subtle ice-blue accent divider and slightly more personality to the copy
- Keep single-column text but make it feel less like a wall of text with better spacing and visual breaks

### Files Modified
- `src/components/ui/dotted-surface.tsx` — adjust camera position
- `src/components/HeroSection.tsx` — darken overlay
- `src/components/CapabilitiesSection.tsx` — redesign cards, expand AI content
- `src/components/SystemDiagramSection.tsx` — add mountain background
- `src/components/SystemBreakdownSection.tsx` — complete redesign as alternating timeline
- `src/components/AboutSection.tsx` — add stats, improve layout

