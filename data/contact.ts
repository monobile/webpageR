/**
 * Central place for all editable business contact data.
 * Change values here — the whole site (header, delivery, footer,
 * JSON-LD structured data) picks them up automatically.
 */

export const contact = {
  /** Display format of the main phone number. */
  phoneDisplay: "+7 (928) 470-66-88",
  /** Machine-readable phone used in tel: links and structured data. */
  phoneHref: "tel:+79284706688",
  /** E.164 phone for structured data. */
  phoneE164: "+79284706688",

  instagramHandle: "@raydan_cafeteria",
  instagramUrl: "https://www.instagram.com/raydan_cafeteria",

  /**
   * Second phone number, confirmed to be registered with WhatsApp.
   * Used for the WhatsApp buttons (delivery, catering form) and shown
   * alongside the main number. Set `whatsappEnabled` to false to hide
   * every WhatsApp entry point at once.
   */
  whatsappEnabled: true,
  whatsappDisplay: "+7 (928) 647-74-74",
  whatsappHref: "tel:+79286477474",
  /** Digits-only number used to build wa.me links. */
  whatsappNumber: "79286477474",

  /** Opening hours shown across the site. Same for every location. */
  hours: {
    opens: "08:00",
    closes: "00:00",
  },
} as const;

/** Builds a wa.me link, optionally with a pre-filled message. */
export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Public site URL used for canonical links, hreflang, Open Graph and
 * the sitemap. Overridable with the NEXT_PUBLIC_SITE_URL env variable.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raydancafe.com";
