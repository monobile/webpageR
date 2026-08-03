import type { Locale } from "@/lib/i18n";

export interface Location {
  id: string;
  /** Street address per locale. */
  address: Record<Locale, string>;
  /**
   * Query used to build external map search links.
   * We deliberately use address search (no coordinates) because exact
   * coordinates were not supplied by the business.
   */
  mapQuery: string;
}

export const city: Record<Locale, string> = {
  ru: "Грозный",
  en: "Grozny",
  ar: "غروزني",
};

export const locations: Location[] = [
  {
    id: "sadaeva",
    address: {
      ru: "улица Садаева, 3",
      en: "Sadaeva Street, 3",
      ar: "شارع سادايف، 3",
    },
    mapQuery: "Грозный, улица Садаева, 3",
  },
  {
    id: "gaydabaeva",
    address: {
      ru: "улица Гайдабаева, 37",
      en: "Gaydabaeva Street, 37",
      ar: "شارع غايداباييف، 37",
    },
    mapQuery: "Грозный, улица Гайдабаева, 37",
  },
  {
    id: "khabusiyevoy",
    address: {
      ru: "улица Хабусиевой, 54А",
      en: "Khabusiyevoy Street, 54A",
      ar: "شارع خابوسييفا، 54أ",
    },
    mapQuery: "Грозный, улица Хабусиевой, 54А",
  },
];

export function yandexMapsLink(query: string): string {
  return `https://yandex.ru/maps/?text=${encodeURIComponent(query)}`;
}

export function twoGisLink(query: string): string {
  return `https://2gis.ru/search/${encodeURIComponent(query)}`;
}
