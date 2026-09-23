# Pockraft Landing Page Factory

Pockraft is a React and TypeScript factory for product, SaaS, project, waitlist, and lightweight sales landing pages. The React components are shared; each product is a typed content preset with its own copy, links, pricing, forms, metadata, logo, and theme.

## How it works

```text
product preset
    ↓ createLandingPage (defaults, normalization, immutable config)
preset registry
    ↓ VITE_LANDING_PAGE_ID
LandingPageProvider
    ↓
shared Header, LandingPage, DemoPage, and Footer
```

The shared UI does not import a particular product. `App` receives a `LandingPageConfig`, and the provider makes that config available to every section.

## Create another product landing page

1. Copy the existing preset:

   ```bash
   cp src/content/pockraft.ts src/content/acme.ts
   ```

2. In `src/content/acme.ts`, rename the export and replace the content:

   ```ts
   import { createLandingPage } from '../factories/createLandingPage';

   export const acmeLandingPage = createLandingPage({
     brand: {
       name: 'Acme Cloud',
       category: 'Developer platform',
       logoSrc: '/acme-logo.svg',
       metaTitle: 'Acme Cloud — Ship faster',
       metaDescription: 'The deployment platform for small product teams.',
     },
     theme: {
       foreground: '#172554',
       muted: '#eff6ff',
       border: '#bfdbfe',
       radius: '1rem',
     },
     // navigation, hero, features, process, pricing, cta,
     // demo, contact, and footer follow the Pockraft preset shape.
   });
   ```

   `id`, `copyrightYear`, and unspecified theme tokens receive safe defaults. TypeScript reports any required product content that is missing.

3. Register the preset in `src/content/index.ts`:

   ```ts
   import type { LandingPageConfig } from '../types/landingPage';
   import { acmeLandingPage } from './acme';
   import { pockraftLandingPage } from './pockraft';

   export const landingPagePresets = {
     pockraft: pockraftLandingPage,
     acme: acmeLandingPage,
   } satisfies Record<string, LandingPageConfig>;
   ```

4. Select it while developing or building:

   ```bash
   VITE_LANDING_PAGE_ID=acme npm run dev
   VITE_LANDING_PAGE_ID=acme npm run build
   ```

   For a persistent local choice, copy `.env.example` to `.env.local` and change its value. Use a different environment value for each deployed project.

## Configurable product areas

- Brand identity, browser title, and description metadata
- Per-product color tokens and border radius
- Header navigation and internal or external calls to action
- Hero message and trust signals
- Feature, process, and pricing cards
- A product demo page
- Contact labels, placeholders, submit endpoint, and HTTP method
- Footer navigation, credits, and copyright

Every pricing tier owns its action URL; there are no shared hard-coded checkout links. Set `external: true` on links or actions that should open in a new tab. If `contact.form.action` is omitted, the sample form validates but does not send data.

## Project structure

```text
src/
  components/          Shared UI, links, header, and footer
  content/             One factory preset per product
  context/             Config injection for shared components
  data/                Active preset selection
  factories/           Config factory and icon registry
  layouts/             Shared page shell and theme application
  pages/               Config-driven landing and demo pages
  types/               Factory input and normalized config contracts
```

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Keep product-specific values in `src/content/`. Components should only change when every product needs a new layout capability.
