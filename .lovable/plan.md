

# Frost Media — Fresh Build from Scratch

## The Problem
The current site uses the same Lovable-default patterns: centered hero with badge → trust bar → card grid → dark section → two-column about → FAQ accordion. Every section follows the same rhythm. It looks like a template, not a cutting-edge AI agency.

## What Changes

### Visual Direction: "Tech Terminal Meets Editorial Magazine"
Instead of the standard agency template feel, blend a high-end editorial layout (asymmetric grids, large whitespace, dramatic typography scale) with subtle tech-terminal elements (monospace data readouts, blinking cursors, code-inspired UI).

### Specific Structural Changes

**Hero**: Break the centered-text mold. Use a split layout — left side has headline text left-aligned with a terminal-style live data ticker (typing effect showing real metrics like `> leads_generated: 1,947`), right side has an animated abstract frost/crystal 3D-ish graphic built from CSS/SVG (not a stock photo placeholder). Much more visual weight and asymmetry.

**Trust Bar**: Replace static badges with an auto-scrolling infinite marquee of logos/badges with slight grayscale-to-color hover. More editorial, less "template row."

**Services**: Instead of uniform card grid, use a magazine-style staggered layout — alternating large feature blocks (full-width with image/illustration) and smaller supporting cards. Each service gets a unique visual treatment, not identical cards with different icons.

**Case Studies**: Replace the tabbed card grid with a horizontal scroll showcase — large cards that feel like magazine spreads, each with a bold metric, short story, and a testimonial pulled out as a large pull-quote. Think portfolio, not data table.

**About**: Instead of two-column text + placeholder photo, use a full-width story section with large pull quotes, timeline markers, and credential badges woven into the narrative — more like a magazine profile piece.

**AI Chat Demo**: Bring back the interactive AI conversation demo from the earlier dark theme iteration — this was unique and memorable. Show it as an embedded "live terminal" with the typing effect.

**FAQ**: Style as a clean editorial Q&A with large question typography, not a standard accordion.

**Final CTA**: Full-bleed dark section with a single bold statement and one button. No dual CTAs, no subheadline clutter.

### Animation Overhaul
- Replace generic fade-in-up everywhere with section-specific reveals (horizontal slides, scale-ins, clip-path reveals)
- Add a custom cursor glow effect on dark sections
- Parallax depth on the hero frost graphic
- Staggered character-by-character headline reveal instead of word-by-word

### Technical Plan
1. Rewrite `HeroSection.tsx` — asymmetric split layout with terminal data ticker
2. Rewrite `TrustBar.tsx` — infinite marquee with grayscale logos
3. Rewrite `CapabilitiesSection.tsx` — magazine staggered layout
4. Rewrite `SystemDiagramSection.tsx` — horizontal scroll case studies + bring back AI chat demo as sub-section
5. Rewrite `AboutSection.tsx` — editorial profile layout
6. Rewrite `ResultsSection.tsx` — large pull-quote testimonials
7. Rewrite `FAQSection.tsx` — editorial Q&A style
8. Rewrite `FinalCTASection.tsx` — minimal full-bleed dark
9. Update `Footer.tsx` — cleaner, more minimal
10. Update `src/index.css` — new animation keyframes, cursor effects
11. Update `src/pages/Index.tsx` — new section order

### Files Modified
All component files rewritten, `src/index.css` and `tailwind.config.ts` updated. No new files needed, no deletions.

