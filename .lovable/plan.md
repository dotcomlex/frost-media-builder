

# A2P Compliance Fix — 6 Changes

## Change 1 — `public/privacy-policy.html`
Replace the existing file with the user's exact verbatim HTML content. Includes expanded sections: Business Information, Information We Collect, How We Use Your Information, SMS/Text Message Communications, Opt-Out Instructions, Cookie and Tracking Practices, Data Security, User Rights, Age Restriction, Changes to This Policy, Contact Us, plus footer links to terms and homepage.

## Change 2 — `public/terms-of-service.html`
Replace the existing file with the user's exact verbatim HTML content. Includes expanded sections: Business Information, Acceptance of Terms, Services, SMS Messaging Program (with STOP/HELP/Carrier/Rates subsections), Age Restriction, User Conduct, Payment Terms, Intellectual Property, Limitation of Liability, Governing Law, Changes to Terms, Contact Us, plus footer links.

## Change 3 — `public/sitemap.xml`
Create new file with three URL entries: homepage (priority 1.0), privacy-policy.html (0.9), terms-of-service.html (0.9).

## Change 4 — `public/robots.txt`
Replace contents to explicitly allow the static HTML pages and reference the sitemap:
```
User-agent: *
Allow: /
Allow: /privacy-policy.html
Allow: /terms-of-service.html
Sitemap: https://frostmedia.io/sitemap.xml
```

## Change 5 — `src/components/Footer.tsx` (lines 68-69)
Replace the two `<Link>` components with plain `<a>` tags pointing to `/privacy-policy.html` and `/terms-of-service.html`.

## Change 6 — `src/components/ContactFormDialog.tsx` (lines 103-111)
- 6A & 6B: Already done ("Frost Media LLC" is already present on lines 92 and 98).
- 6C & 6D (lines 105-110): Replace the two `<Link>` components with plain `<a>` tags pointing to `/privacy-policy.html` and `/terms-of-service.html`. Remove the `onClick` handlers since we no longer need to close the dialog for internal navigation.

