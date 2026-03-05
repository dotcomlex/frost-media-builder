

# Fix Logo Visibility & Modernize Conversational AI Section

## 1. Logo Marquee — Fix Visibility

The logos already have `brightness-0 opacity-60` which should make them all dark/grayscale. The issue is likely that some SVG logos (T&S, etc.) may not respond well to `brightness-0`, or some logos are simply too small.

**Changes to `src/components/LogoMarquee.tsx`:**
- Increase logo height on mobile from `h-12` to `h-14 md:h-16` for better visibility
- Add `dark:invert` isn't needed since bg is white — but ensure the `brightness-0` filter works on SVGs by wrapping in a container with a CSS filter fallback
- Reduce `basis-1/3` on mobile to `basis-1/2` so logos get more space on small screens

## 2. Conversational AI Section — Modern Redesign

The screenshot shows the current desktop layout works well (phone mock left, copy right). The section needs a more polished, modern feel.

**Changes to `src/components/SystemBreakdownSection.tsx`:**
- Add a subtle `bg-gray-50` or light gradient background to separate from adjacent white sections
- Redesign the phone mock with a more modern look: slightly larger, subtle glassmorphic border glow, ice-blue accent for the "Online" indicator instead of orange
- Change customer bubble color from `bg-secondary` (orange) to `bg-ice-blue` (blue) to match brand
- Add a subtle animated typing indicator at the bottom of the chat
- On mobile: keep current order (copy first, phone below) but make the phone mock full-width centered and slightly larger (`max-w-[300px]`)
- Add the channel pills (Voice Calls, SMS, etc.) on mobile too — they're currently hidden
- Add a subtle blue gradient glow behind the phone mock for visual interest
- Stats boxes: add a subtle ice-blue top border for accent

## Files Modified
- `src/components/LogoMarquee.tsx`
- `src/components/SystemBreakdownSection.tsx`

