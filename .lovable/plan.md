

# Navigation Updates

## Changes to `src/components/Navigation.tsx`

1. **Remove sticky positioning** — Change `sticky top-0` to just static positioning (remove both classes from the `<nav>` element). Also remove `bg-slate-900 border-b border-slate-700` to make the nav transparent, sitting on top of the page content.

2. **Increase logo size** — Change `h-7 md:h-8` to `h-10 md:h-12` for a larger logo display. Also increase the mobile menu logo from `h-8` to `h-10`.

3. **Transparent background** — Replace the solid `bg-slate-900 border-b border-slate-700` with `bg-transparent` so the nav overlays the hero. Use `absolute top-0 left-0 right-0 z-50` for positioning over hero content.

