

# Fix: Remove Duplicate Logo from Meta Ads Hero + Increase Nav Logo Size

## What's Wrong
1. **Duplicate logo on Meta Ads page**: Lines 145-147 in `MetaAds.tsx` have a giant `h-44 md:h-64` Frost Media logo in the hero — this should be removed entirely.
2. **Nav logo too small**: The header logo in `Navigation.tsx` line 29 is `h-10 md:h-12` — needs to be bigger so it's clearly visible.

## Changes

### `src/pages/MetaAds.tsx`
- **Delete lines 145-147** (the `motion.img` logo block in the hero section)

### `src/components/Navigation.tsx` (line 29)
- Increase logo from `h-10 md:h-12` to `h-14 md:h-16` — this applies across every page since Navigation is shared

