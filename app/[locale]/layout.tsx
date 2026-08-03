import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Playfair_Display,
  Manrope,
  Kaushan_Script,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import {
  locales,
  isLocale,
  getMessages,
  getDir,
  type Locale,
} from "@/lib/i18n";
import { contact, siteUrl } from "@/data/contact";
import { city, locations } from "@/data/locations";
import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
  preload: false,
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-naskh",
  display: "swap",
  preload: false,
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocales: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
  ar: "ar_AR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ru: "/ru",
        en: "/en",
        ar: "/ar",
        "x-default": "/ru",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Raydan",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}`,
      locale: ogLocales[locale],
      images: [
        {
          url: "/brand/og.jpg",
          width: 1200,
          height: 630,
          alt: t.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/brand/og.jpg"],
    },
  };
}

const restaurantNames: Record<Locale, string> = {
  ru: "Райдан",
  en: "Raydan",
  ar: "رايدان",
};

function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": locations.map((location) => ({
      "@type": "Restaurant",
      "@id": `${siteUrl}/#${location.id}`,
      name: `${restaurantNames[locale]} — ${location.address[locale]}`,
      url: `${siteUrl}/${locale}`,
      telephone: contact.phoneE164,
      servesCuisine: [
        "Tajik cuisine",
        "Homemade cuisine",
        "Indian cuisine",
        "Coffee",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address[locale],
        addressLocality: city[locale],
        addressCountry: "RU",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: contact.hours.opens,
        closes: contact.hours.closes,
      },
      sameAs: [contact.instagramUrl],
      knowsLanguage: ["ru", "en", "ar"],
    })),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);
  const dir = getDir(locale);

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${playfair.variable} ${manrope.variable} ${kaushan.variable} ${notoNaskh.variable} ${notoSansArabic.variable} bg-raydan-paper text-raydan-text`}
      >
        {/* Keep reveal-animated content visible when JavaScript is off. */}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          {t.header.skipToContent}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd(locale)),
          }}
        />
      </body>
    </html>
  );
}
