

# Revert: Remove TrustBadgesRow, FrostBotSection, and IndustriesGridSection

## Changes

### 1. `src/pages/Index.tsx`
- Remove imports for `TrustBadgesRow`, `FrostBotSection`, and `IndustriesGridSection`
- Remove `<TrustBadgesRow />`, `<FrostBotSection />`, and `<IndustriesGridSection />` from the JSX
- Keep all other sections exactly as they were

### 2. Delete files
- `src/components/TrustBadgesRow.tsx`
- `src/components/FrostBotSection.tsx`
- `src/components/IndustriesGridSection.tsx`

Result: Homepage returns to its previous state with only the original sections.

