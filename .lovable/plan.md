

# Enhance Work/Portfolio Page

## Changes to `src/pages/Work.tsx`

### 1. Dark Theme Hero
Replace the light `bg-gradient-to-b from-frost-light` hero with a dark `bg-slate-900` hero matching the other pages. White heading, `text-slate-300` body text, `text-sky-400` label. Add padding for the absolute nav overlay (`pt-32`).

### 2. Add Project Descriptions
Expand the `projects` array with a `description` field for each project — a short sentence about what was built (e.g., "Modern recruiting platform with AI-powered candidate matching"). Display it below the project name in the card, styled as `text-slate-400 text-xs` (or `text-muted-foreground` since the cards remain white/light).

### 3. Dark Grid Section Background
Change the grid section background from `bg-background` (white) to `bg-slate-800` so it flows naturally from the dark hero. Update card styling to work on dark: `bg-slate-900 border border-slate-700` instead of `bg-white shadow-md`. Project name becomes `text-white`, description `text-slate-400`, tag pill uses `bg-slate-800 text-slate-400`.

### 4. CTA Section
Keep the bottom CTA but restyle for dark: text becomes `text-slate-400`.

## Data Updates
```
{ img: workRizeshift, name: "RizeShift", tag: "Tech / HR", description: "HR tech platform with modern recruitment tools and candidate management." },
{ img: workHelixr, name: "Helixr", tag: "Technology", description: "SaaS product site with interactive demos and conversion-focused landing pages." },
// etc. for all 7 projects
```

## Files Modified
- `src/pages/Work.tsx` only

