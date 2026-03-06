

# Remove Redundant Pages, Nav Items, and Sections

## Redundancies Found

1. **Nav "Contact" link + "Book a Call" button** — both trigger `openForm()`. Remove the "Contact" text link.
2. **Industries dropdown** — 5 of 6 links (Plumbing, Concrete, Electrical, Roofing, Painting) go to pages that don't exist (404). Only HVAC has a route. Remove the entire Industries dropdown until those pages are built.
3. **Homepage `AboutSection`** vs **`/about` page** — duplicate "about" content. Remove the homepage AboutSection since there's a dedicated About page.
4. **Homepage `CapabilitiesSection`** (6 service cards) vs **`/services` page** — nearly identical content. Keep CapabilitiesSection on homepage as a preview, but remove the standalone `/services` route and page since the nav dropdown already links to individual service pages.
5. **"Lead Generation" service link** in nav dropdown points to `/services` which we're removing. Replace with a direct link or remove it.

## Changes

### `src/components/Navigation.tsx`
- Remove "Contact" text link (keep "Book a Call" CTA button)
- Remove entire Industries dropdown (desktop + mobile expandable)
- Change "Lead Generation" service link to point to `/services/meta-ads` or remove it (since there's no dedicated page)

### `src/pages/Index.tsx`
- Remove `AboutSection` import and `<AboutSection />`

### `src/App.tsx`
- Remove `/services` route and `Services` import
- Remove `/industries/hvac` route and `IndustryHVAC` import

### `src/components/Footer.tsx`
- Remove "Industries" link
- Remove "All Services" link (page no longer exists)
- Remove "About" link redundancy check — keep it since `/about` page still exists

### Delete files
- `src/pages/Services.tsx`
- `src/pages/IndustryHVAC.tsx`

### Keep
- `/services/ai-automation` and `/services/meta-ads` — these are distinct, useful pages
- `/case-studies` and `/about` — standalone pages with unique content
- `/work` — portfolio page
- Homepage sections: Hero, LogoMarquee, Capabilities, SystemDiagram (testimonials), SystemBreakdown (AI demo), FAQ, FinalCTA, Footer

