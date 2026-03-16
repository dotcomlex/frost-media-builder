
# Two Targeted Fixes + Domain Cleanup

## Fix 1 — `index.html` structured data
Lines 27-34: Update address to Northglenn/80233 with streetAddress, and change url to `frostmedia.io`.

Also found `frostmedia.co` on line 13 (`og:url`) — will fix that to `frostmedia.io` as well per the checklist requirement that all domain references point to `frostmedia.io`.

## Fix 2 — `src/components/Footer.tsx` 
Line 71: Change `📍 Denver, Colorado` to `📍 11990 Grant St, Northglenn, CO 80233`.

## Checklist verification
- Privacy Policy page — already exists with SMS paragraph ✓
- Terms of Service page — already exists with SMS clauses ✓
- Contact form — already has 2 SMS checkboxes ✓
- Footer — already has Privacy/Terms links ✓
- Address — will be corrected in index.html and footer
- Domain — will fix both `frostmedia.co` occurrences to `frostmedia.io`
