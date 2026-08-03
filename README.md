# Raydan Cafeteria — Landing Page

Райдан — кафетерий домашней и международной кухни в Грозном.

A production-ready, multilingual (RU / EN / AR) long-form landing page built
with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion. Arabic is
served with a full RTL layout and professional Arabic typography
(Noto Naskh Arabic + Noto Sans Arabic via `next/font`).

## Tech stack

- **Next.js 15** (App Router, static prerendering of all locales)
- **TypeScript** (strict)
- **Tailwind CSS 4**
- **Framer Motion** — restrained entrance/parallax animation, honors
  `prefers-reduced-motion`
- **React Hook Form + Zod** — validated catering inquiry form
- Local JSON translation files (no runtime translation, no CMS)

## Getting started

```bash
npm install       # install dependencies
npm run dev       # development server → http://localhost:3000
npm run lint      # ESLint
npm run typecheck # TypeScript check
npm run build     # production build
npm start         # serve the production build
```

Routes: `/ru` (default, `/` redirects here), `/en`, `/ar`.

## Project structure

```
app/
  [locale]/            layout (html lang/dir, fonts, SEO, JSON-LD), page, 404
  globals.css          Tailwind theme, brand palette, shared utilities
  sitemap.ts robots.ts icon.svg
components/
  layout/              Header, Footer, FinalCta, LanguageSwitcher, StickyOrderBar
  hero/                Hero, PlateVisual, BrandIntro
  menu/                MenuSection (server), MenuExplorer (client), SignaturePlov
  delivery/            DeliverySection
  catering/            CateringSection, CateringForm
  locations/           LocationsSection
  ui/                  Plate (ornamental hero SVG), Logo, SectionReveal
data/
  menu.ts              all menu categories & items (typed, localized, priced)
  locations.ts         addresses + map-link builders
  contact.ts           phone, Instagram, WhatsApp switch, hours, site URL
messages/
  ru.json en.json ar.json   every visible UI string per locale
public/
  brand/               logo SVG, Open Graph image
  images/              plate.svg (hero artwork, standalone copy)
  menu/                place for the source menu screenshots (reference only)
```

## Editing business data

| What | Where |
| --- | --- |
| Phone number | `data/contact.ts` → `phoneDisplay`, `phoneHref`, `phoneE164` |
| Instagram | `data/contact.ts` → `instagramHandle`, `instagramUrl` |
| Opening hours | `data/contact.ts` → `hours` |
| Addresses | `data/locations.ts` (per-locale strings + `mapQuery` for map links) |
| Menu items & prices | `data/menu.ts` — edit `price`, names per locale; add items by copying an entry (unique `id`, valid `categoryId`) |
| Menu categories | `data/menu.ts` → `categories` |
| UI copy / translations | `messages/ru.json`, `messages/en.json`, `messages/ar.json` |
| Production domain | `data/contact.ts` → `siteUrl` or env `NEXT_PUBLIC_SITE_URL` |

Prices are plain numbers in rubles; two-size drinks use `price: [a, b]` plus a
`size` label (e.g. `250/350 мл`).

## WhatsApp

WhatsApp is **off by default** (`whatsappEnabled: false` in
`data/contact.ts`) because it has not been confirmed that the listed phone
number is registered with WhatsApp. Set it to `true` (and adjust
`whatsappNumber`) to add one-tap WhatsApp hand-off to the catering form.

## Catering form

The form validates input (React Hook Form + Zod, localized error messages)
and then shows a **review step** with a formatted inquiry message the guest
can copy, send via Instagram, or dictate by phone. It deliberately does
**not** fake a "sent!" state — no backend is connected yet.

To connect a real backend: add an API route (e.g. `app/api/catering/route.ts`),
POST the values from `onSubmit` in `components/catering/CateringForm.tsx`,
and replace the review step with real success/error states (strings for those
states already exist in `messages/*.json` under `catering.review`).

## Assets — important

Two original brand assets were **not present in the repository** when this
site was built, so interim vector stand-ins are used:

1. **Plate** (`plate_transp.png`) — recreated as an original ornamental
   vector drawing: `components/ui/Plate.tsx` (inline, used in the hero) and
   `public/images/plate.svg` (standalone copy, used by the OG image).
   To use the original photo: put `plate_transp.png` into `public/images/`
   and swap `<Plate …>` in `components/hero/PlateVisual.tsx` for
   `next/image` with `priority` and explicit width/height.
2. **Logo** (`raydan black logo(3).ai`) — an interim lockup is rendered by
   `components/ui/Logo.tsx`, with a standalone copy at
   `public/brand/raydan-logo.svg`. To use the official logo, convert the .ai
   file to SVG (e.g. Illustrator → *Export As SVG*, or Inkscape
   `inkscape raydan.ai --export-filename=raydan-logo.svg`), overwrite
   `public/brand/raydan-logo.svg`, and replace the inline SVG in
   `Logo.tsx` with an `<Image src="/brand/raydan-logo.svg" …>`.

The menu/content screenshots from the brief are content references only —
per the design requirements they are not embedded on the site.

## SEO

- Localized `<title>`/description, canonical + `hreflang` alternates,
  Open Graph & Twitter cards (`public/brand/og.png`), favicon
  (`app/icon.svg`), `sitemap.xml`, `robots.txt`.
- JSON-LD `Restaurant` structured data for all three locations (addresses,
  phone, opening hours, cuisines, Instagram). No invented ratings, reviews,
  or coordinates.
- Map buttons use Yandex Maps / 2GIS **address search links** — no API key
  and no fabricated coordinates.

## Deployment

Any Node-capable host works:

```bash
npm run build && npm start
```

On **Vercel**: import the repo, no extra configuration required. Set
`NEXT_PUBLIC_SITE_URL=https://your-domain` for correct canonical/OG URLs.
The `/` → `/ru` redirect is defined in `next.config.ts`; if you move to
fully static hosting (`output: "export"`), replicate that redirect at the
host level.

## Values the owner should confirm

- Production domain (`NEXT_PUBLIC_SITE_URL`)
- Whether the phone number is WhatsApp-enabled (`whatsappEnabled`)
- Privacy-policy URL (footer currently shows a non-linked placeholder —
  wire it up in `components/layout/Footer.tsx` when the document exists)
- English/Arabic transliteration of street names and local dish names
  (Сискал → Siskal, Нохчи чорпа → Nokhchi chorpa)
- Official logo + plate photo (see **Assets** above)
