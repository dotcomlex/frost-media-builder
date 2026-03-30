

# Rebrand: Frost Media → BrainBrite®

Replace every mention of "Frost Media" with "BrainBrite®" (or "BrainBrite LLC" in legal contexts), update all contact info, and swap the logo image for a text-based logo.

## New Business Info
- **Legal name**: BrainBrite LLC
- **Display name**: BrainBrite®
- **Address**: 11821 Altura St, Commerce City, Colorado 80603
- **Phone**: (720) 452-9304
- **Email**: brainbritellc@gmail.com
- **Domain**: brainbrite.io

---

## Files to Edit (16 files)

### 1. `src/components/FrostLogo.tsx` → rename to text logo
- Remove the webp import
- Render a styled `<span>` with "BrainBrite®" instead of an `<img>`
- Keep the same prop interface (size, className)

### 2. `src/components/Navigation.tsx`
- Remove `frostmediaLogo` import
- Replace both `<img>` tags (desktop + mobile) with text "BrainBrite®" styled as a logo
- Update alt text references

### 3. `src/components/Footer.tsx`
- Remove `frostmediaLogo` import
- Replace `<img>` with text "BrainBrite®"
- Update address, phone, email to new values
- "© 2026 Frost Media" → "© 2026 BrainBrite LLC"
- Update description text

### 4. `src/components/HeroSection.tsx`
- Line 57: "Frost Media LLC" → "BrainBrite LLC", update address

### 5. `src/components/ContactFormDialog.tsx`
- Lines 92, 98: "Frost Media LLC" → "BrainBrite LLC"

### 6. `src/components/FinalCTASection.tsx`
- Line 40: Update location text

### 7. `src/components/SystemDiagramSection.tsx`
- Lines 21, 28: "Frost Media" → "BrainBrite" in testimonial quotes

### 8. `src/components/AboutSection.tsx`
- Update alt text "Frost Media team" → "BrainBrite team"

### 9. `src/pages/Contact.tsx`
- "Contact Frost Media LLC" → "Contact BrainBrite LLC"
- Update email, phone, address throughout

### 10. `src/pages/TermsOfService.tsx`
- All "Frost Media" → "BrainBrite LLC" or "BrainBrite"
- Update email, domain references

### 11. `src/pages/PrivacyPolicy.tsx`
- Same treatment as TermsOfService

### 12. `src/pages/MetaAds.tsx`
- Remove `frostmediaLogo` import and any usage

### 13. `src/pages/AboutPage.tsx`
- Update any "Frost Media" text references

### 14. `index.html`
- Update `<title>`, all meta tags, JSON-LD schema
- Replace "Frost Media" with "BrainBrite®", domain with brainbrite.io, email/phone/address

### 15. `public/privacy-policy.html`
- Global replace: "Frost Media LLC" → "BrainBrite LLC"
- Update all email, phone, address, domain references
- "Back to Frost Media" → "Back to BrainBrite"

### 16. `public/terms-of-service.html`
- Same global replace as privacy policy

### 17. `public/sitemap.xml`
- Replace frostmedia.io → brainbrite.io

### 18. `public/robots.txt`
- Replace frostmedia.io → brainbrite.io

