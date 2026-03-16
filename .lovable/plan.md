

# Three Changes: Hero Address, Robots.txt, Contact Page

## Change 1 — Hero address line (`src/components/HeroSection.tsx`)
Add the address `<p>` after the CTA button block (after the closing `</motion.div>` at line 49), wrapped in a `motion.p` for consistency:
```
<motion.p ... className="text-text-on-dark/50 text-xs font-mono-tech tracking-wide mt-6">
  📍 Frost Media LLC · 11990 Grant St, Northglenn, CO 80233
</motion.p>
```

## Change 2 — Robots.txt (`public/robots.txt`)
Replace entire file with:
```
User-agent: *
Allow: /
Sitemap: https://frostmedia.io/sitemap.xml
```

## Change 3 — Contact page
### 3a. Create `src/pages/Contact.tsx`
- Uses `Navigation` + `Footer` like AboutPage
- Dark themed page with title "Contact Frost Media LLC"
- Left column: address, email, phone displayed prominently
- Right column: inline contact form (same fields as ContactFormDialog — name, email, phone, SMS checkboxes, privacy/terms text, business type select, message textarea, submit button) but rendered directly on the page, not in a dialog
- Same form styling adapted for page context (dark bg)

### 3b. Add route in `src/App.tsx`
- Import Contact page, add `<Route path="/contact" element={<Contact />} />`

### 3c. Update Footer (`src/components/Footer.tsx`)
- Line 42: Change the Contact `<button>` to a `<Link to="/contact">` instead of triggering `openForm`

