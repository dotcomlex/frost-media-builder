

# Fix Hero Headline: Revert Desktop, Optimize Mobile

## Problem
The recent size bump affected both desktop and mobile. Desktop should go back to its original sizes. Mobile text at `text-5xl` (3rem) causes excessive wrapping on small screens.

## Changes — `src/components/HeroSection.tsx`

**Headline class change** (line 26):
- Current: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- New: `text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl`

This reverts `md` and `lg` to their original desktop values, while setting mobile to `2.75rem` (between 4xl and 5xl) — large enough to feel impactful but avoids the awkward line breaks at 375px width. The `sm` breakpoint bridges the gap.

No other files changed.

