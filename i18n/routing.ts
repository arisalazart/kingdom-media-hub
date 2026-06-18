import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for Kingdom Media Hub.
 * Markets: Europe / LATAM / USA → English + Spanish.
 * `en` is the default; visitors are routed to /en or /es.
 */
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
