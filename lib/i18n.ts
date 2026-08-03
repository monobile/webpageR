import ru from "@/messages/ru.json";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const locales = ["ru", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export type Messages = typeof ru;

const messages: Record<Locale, Messages> = { ru, en, ar };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  ar: "العربية",
};
