import { env } from "./env";

/**
 * JSON-LD builders for rich results & AI-search visibility.
 * Pass 1 ships Organization + LocalBusiness; Service/FAQ/Review/Breadcrumb
 * are added in Pass 2 alongside the corresponding sections.
 */

const SITE = env.siteUrl;
const NAME = "Kingdom Media Hub";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: NAME,
    url: SITE,
    logo: `${SITE}/logo.png`,
    description:
      "Kingdom Media Hub builds automated growth systems — AI voice agents, automation, conversion websites and content engines — for ambitious brands across Europe, LATAM and the USA.",
    areaServed: ["Europe", "Latin America", "United States"],
    sameAs: [
      "https://www.instagram.com/kingdommediahub",
      "https://www.linkedin.com/company/kingdommediahub",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/#localbusiness`,
    name: NAME,
    url: SITE,
    image: `${SITE}/og.png`,
    priceRange: "$$$",
    areaServed: ["Europe", "Latin America", "United States"],
    serviceType: [
      "AI Voice Agents",
      "Business Automation",
      "Conversion Website Development",
      "Content Production",
      "Marketing & AI Training",
    ],
  };
}

/** Render helper: returns props for a <script type="application/ld+json"> tag. */
export function jsonLdScript(schema: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
