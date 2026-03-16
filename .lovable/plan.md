

# Create Static HTML Pages for Bot/Scanner Accessibility

Since GHL and other bots can't parse React SPAs, we'll create two standalone HTML files in `public/` that serve the same legal content as static pages.

## File 1: `public/privacy-policy.html`
Standalone HTML page with:
- Title: "Privacy Policy — Frost Media LLC"
- All existing sections from PrivacyPolicy.tsx plus two new sections requested:
  - **Cookie & Tracking Practices** (standard analytics/cookies disclosure)
  - **User Rights** (right to request, correct, delete personal data)
- Inline CSS: white bg, max-width 800px centered, system font stack, no external deps

## File 2: `public/terms-of-service.html`
Standalone HTML page with:
- Title: "Terms of Service — Frost Media LLC"
- All existing sections from TermsOfService.tsx plus one new section:
  - **Age Restriction** (must be 18+ to use SMS services)
- Privacy policy link points to `https://frostmedia.io/privacy-policy`
- Same inline styling

Both files use clean, minimal inline CSS. The React routes continue to work for normal users; bots hitting the `.html` URLs get static content. No other files changed.

