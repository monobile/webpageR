"use client";

import { locales, localeNames, type Locale } from "@/lib/i18n";

const shortNames: Record<Locale, string> = {
  ru: "РУ",
  en: "EN",
  ar: "ع",
};

/**
 * Language selector. Navigates to the same page in another locale while
 * preserving the current anchor (#section) and storing the preference
 * in a cookie + localStorage so it can be read by future integrations.
 */
export default function LanguageSwitcher({
  current,
  label,
  variant = "short",
  tone = "light",
}: {
  current: Locale;
  label: string;
  variant?: "short" | "full";
  tone?: "light" | "dark";
}) {
  function switchTo(locale: Locale, event: React.MouseEvent) {
    event.preventDefault();
    try {
      document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
      window.localStorage.setItem("raydan-locale", locale);
    } catch {
      // Storage can be unavailable (private mode) — navigation still works.
    }
    window.location.href = `/${locale}${window.location.hash}`;
  }

  const activeClass =
    tone === "light"
      ? "bg-raydan-gold text-raydan-black"
      : "bg-raydan-text text-raydan-ivory";
  const idleClass =
    tone === "light"
      ? "text-raydan-ivory/80 hover:text-raydan-light-gold"
      : "text-raydan-text/70 hover:text-raydan-deep-gold";

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}`}
          onClick={(event) => switchTo(locale, event)}
          aria-current={locale === current ? "true" : undefined}
          lang={locale}
          className={`flex min-h-9 items-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
            locale === current ? activeClass : idleClass
          }`}
        >
          {variant === "full" ? localeNames[locale] : shortNames[locale]}
        </a>
      ))}
    </nav>
  );
}
