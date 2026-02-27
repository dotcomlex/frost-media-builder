

# Replace Testimonial Section with Draggable Shuffle Cards

## Approach
Replace the current embla-carousel testimonial section (`SystemDiagramSection.tsx`) with the TwentyFirst Dev shuffle card component. The drag-to-shuffle interaction is more engaging than a standard carousel.

## Adaptation for Frost Media
- Create `src/components/ui/testimonial-cards.tsx` with the shuffle card component, adapted with proper TypeScript types
- Restyle cards to match the site's alpine/frost theme (use `bg-card`, `border-border`, `text-foreground`, etc.) instead of the default slate/indigo
- Keep the 8 existing realistic reviews from the current `SystemDiagramSection`, cycling through them in groups of 3
- Use initials-based avatars (like we already have) instead of `pravatar.cc` to keep it consistent and avoid external dependencies
- Add industry tag pills and star ratings to the cards (carried over from current design)

## Steps

### 1. Create `src/components/ui/testimonial-cards.tsx`
- Copy the `TestimonialCard` component with TypeScript types added
- Restyle: `border-border`, `bg-card/80`, `backdrop-blur-md`, ice-blue accent for author name, `text-muted-foreground` for quote
- Use initials avatar circle instead of external image

### 2. Rewrite `src/components/SystemDiagramSection.tsx`
- Remove embla-carousel import and logic
- Import `TestimonialCard` from the new UI component
- Implement the `ShuffleCards` pattern with `positions` state and `handleShuffle`
- Keep all 8 reviews — cycle through them: when the user shuffles past the current 3, rotate the next review in
- Keep the section header ("What Our Clients Say") and `frost-light` background
- Layout: left side has the section title + subtitle text, right side has the stacked shuffle cards (split layout on desktop, stacked on mobile)

### Files
- **Created**: `src/components/ui/testimonial-cards.tsx`
- **Modified**: `src/components/SystemDiagramSection.tsx`

