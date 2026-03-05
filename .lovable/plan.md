

# Add AI-Generated Images to Service Cards

## What
Generate 6 AI images (one per service card) and replace the JSX mockup illustrations with real images. Each image will be sized to fill the card header area perfectly.

## Image Prompts
1. **Social Media Advertising** — abstract dark-themed composition with glowing social media ad interfaces, notification badges, mobile phone with Meta/Instagram UI elements
2. **Website Design & Dev** — sleek dark-themed browser window showing a modern website design, clean UI mockup with gradient accents
3. **E-Commerce & Shopify** — dark-themed e-commerce storefront with product cards, shopping cart icon, checkout flow visualization
4. **Lead Generation** — dark-themed sales funnel visualization with glowing data points, pipeline stages, conversion metrics
5. **Conversational AI** — dark-themed AI chatbot interface with glowing chat bubbles, voice wave visualization, futuristic AI elements
6. **CRM & Automation** — dark-themed dashboard with analytics charts, pipeline view, automation workflow nodes

All images: 1024x512 (wide format to fit the card header), dark background tones to blend with the dark cards.

## Code Changes

**`CapabilitiesSection.tsx`**:
- Remove all JSX mockup components (PhoneMockup, BrowserMockup, etc.)
- Import 6 generated images from `src/assets/`
- Replace the gradient+mockup header with an `<img>` tag using `object-cover` and fixed height (`h-36` on desktop, `h-28` on mobile) with a subtle gradient overlay for text contrast
- Add a dark gradient overlay at the bottom of each image so the card text area blends smoothly

