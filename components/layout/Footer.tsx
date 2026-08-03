import type { Locale, Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";
import { city, locations } from "@/data/locations";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  const year = new Date().getFullYear();
  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "menu", label: t.nav.menu },
    { id: "delivery", label: t.nav.delivery },
    { id: "catering", label: t.nav.catering },
    { id: "locations", label: t.nav.locations },
  ];

  return (
    <footer className="border-t border-raydan-gold/25 bg-raydan-black pt-16 pb-24 text-raydan-ivory sm:pb-8">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" label={t.header.logoAlt} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-raydan-ivory/60">
              {t.footer.tagline}
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.instagramAria}
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-raydan-light-gold transition-colors hover:text-raydan-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              <span dir="ltr">{contact.instagramHandle}</span>
            </a>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <h3 className="text-sm font-bold tracking-wide text-raydan-ivory/50 uppercase">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex min-h-9 items-center text-sm text-raydan-ivory/80 transition-colors hover:text-raydan-light-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#catering"
                  className="inline-flex min-h-9 items-center text-sm text-raydan-light-gold transition-colors hover:text-raydan-gold"
                >
                  {t.footer.cateringLink}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-raydan-ivory/50 uppercase">
              {t.footer.contactsTitle}
            </h3>
            <a
              href={contact.phoneHref}
              aria-label={t.common.phoneAria}
              className="ltr-nums mt-4 inline-block text-lg font-bold text-raydan-ivory transition-colors hover:text-raydan-light-gold"
            >
              {contact.phoneDisplay}
            </a>
            <h3 className="mt-6 text-sm font-bold tracking-wide text-raydan-ivory/50 uppercase">
              {t.footer.hoursTitle}
            </h3>
            <p className="mt-3 text-sm text-raydan-ivory/80">
              {t.footer.daily}{" "}
              <span className="ltr-nums font-semibold">
                {contact.hours.opens}–{contact.hours.closes}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-raydan-ivory/50 uppercase">
              {t.footer.addressesTitle}
            </h3>
            <ul className="mt-4 space-y-2">
              {locations.map((location) => (
                <li key={location.id} className="text-sm text-raydan-ivory/80">
                  {city[locale]}, {location.address[locale]}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-bold tracking-wide text-raydan-ivory/50 uppercase">
                {t.footer.langTitle}
              </h3>
              <div className="mt-3">
                <LanguageSwitcher
                  current={locale}
                  label={t.header.langLabel}
                  variant="full"
                  tone="light"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-raydan-ivory/10 pt-6 text-sm text-raydan-ivory/50 sm:flex-row sm:items-center">
          <p>
            © <span className="ltr-nums">{year}</span> {t.footer.copyright}
          </p>
          {/* Placeholder: point at the real privacy-policy URL when available (see README). */}
          <span className="cursor-default text-raydan-ivory/40">
            {t.footer.privacy}
          </span>
        </div>
      </div>
    </footer>
  );
}
