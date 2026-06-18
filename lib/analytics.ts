/**
 * Single conversion-event funnel feeding GA4, Meta Pixel and LinkedIn.
 * All calls are safe no-ops when the corresponding tag is not configured,
 * and log to the console in development so events are verifiable locally.
 */

type EventName =
  | "cta_growth_audit"
  | "cta_book_consultation"
  | "cta_recover_revenue"
  | "cta_whatsapp_contact"
  | "cta_whatsapp"
  | "cta_calendly"
  | "roi_calculated"
  | "lead_submitted"
  | "contact_form_submitted"
  | "demo_opened";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${name}`, params);
  }

  // Google Analytics 4
  window.gtag?.("event", name, params);

  // Meta Pixel — map our key conversions to standard events.
  if (window.fbq) {
    if (name === "lead_submitted") window.fbq("track", "Lead", params);
    else if (name === "cta_book_consultation" || name === "cta_calendly")
      window.fbq("track", "Schedule", params);
    else window.fbq("trackCustom", name, params);
  }

  // LinkedIn Insight conversions fire by configured conversion id; ping generic.
  window.lintrk?.("track");
}
