# Kingdom Media Hub

A high-converting, bilingual (EN/ES) landing page for Kingdom Media Hub — a growth
systems / AI implementation / revenue acceleration firm serving Europe, LATAM and the USA.

Built as a revenue-acquisition machine: every section carries a conversion job
(booked consultations, qualified leads, WhatsApp conversations).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **next-intl** — `[locale]` routing for English & Spanish
- **Framer Motion** + **Lenis** smooth scroll
- **React Hook Form** + **Zod** (shared client/server validation)
- **Zustand** for light UI state
- **@phosphor-icons/react**, **next/font**, **next/image**
- **Resend** for contact email (optional)

## Getting started

```bash
cp .env.example .env.local   # fill in any integrations you have (all optional)
npm install
npm run dev                  # http://localhost:3000 → redirects to /en
```

`npm run build` produces a static-rendered page per locale.

## Environment

Every integration is optional and degrades gracefully when unset — see
[`.env.example`](.env.example). Keys: site URL, Calendly URL, WhatsApp number,
GA4 / Meta Pixel / LinkedIn IDs, Sentry DSN, and Resend (server-only).

## Structure

```
app/[locale]/        # html shell, fonts, metadata, JSON-LD, page composition
app/api/contact/     # Resend-ready lead intake (validates with shared Zod schema)
components/sections/  # Navbar, Hero, TrustBar, Ecosystem, ROICalculator, Agency, Contact, Footer
components/ui/         # GlassCard, CTAButton, AnimatedCounter, SectionHeading, Reveal
components/cro/        # ScrollProgress, StickyMobileCTA, FloatingWhatsApp
components/providers/  # Lenis, Analytics
content/              # placeholder data (stats; more in Pass 2)
i18n/ + messages/      # next-intl config + EN/ES copy
lib/                  # env, validations, analytics, schema, store, utils
```

## Design language

Sovereign systems identity — obsidian base, electric indigo brand accent, and
conversion-gold reserved **only** for money actions (ROI result, conversion CTAs).
Editorial serif (Fraunces) for display, grotesque (Hanken Grotesk) for body, mono
(JetBrains Mono) for data. Signature: the Kingdom Ecosystem connected-node diagram.

## Roadmap — Pass 2

Media Lab portfolio · Academy · How It Works · Case Studies · Social Proof carousel ·
Competitive Comparison · FAQ/AEO hub (+ FAQ schema) · Pricing · AI demo video ·
exit-intent modal · full Service/Review/Breadcrumb schema · OG image · Sentry +
analytics tags wired to real IDs · Lighthouse pass. Section anchors already
reserved in `app/[locale]/page.tsx`.

## Content & i18n

All copy lives in `messages/en.json` and `messages/es.json` — realistic placeholder
content authored in both languages. Stats live in `content/stats.ts`. Replace with
verified figures before launch.
