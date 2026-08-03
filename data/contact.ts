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
   * WhatsApp integration is OFF by default because it has not been
   * confirmed that the phone number above is registered with WhatsApp.
   * Set to true (and verify the number) to let the catering form and
   * delivery section open WhatsApp with a pre-filled message.
   */
  whatsappEnabled: false,
  /** Digits-only number used for wa.me links when whatsappEnabled is true. */
  whatsappNumber: "79284706688",

  /** Opening hours shown across the site. Same for every location. */
  hours: {
    opens: "08:00",
    closes: "00:00",
  },
} as const;

/**
 * Public site URL used for canonical links, hreflang, Open Graph and
 * the sitemap. Replace with the real production domain before launch,
 * or set the NEXT_PUBLIC_SITE_URL environment variable.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raydan-cafeteria.ru";
