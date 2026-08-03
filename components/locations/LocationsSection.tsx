import type { Locale, Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";
import {
  city,
  locations,
  yandexMapsLink,
  twoGisLink,
} from "@/data/locations";
import SectionReveal from "@/components/ui/SectionReveal";

/** Abstract street-grid backdrop — deliberately not a real map (no
 * confirmed coordinates were supplied). */
function StreetGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#211c16" strokeWidth="2" fill="none">
        <path d="M-20 120 L820 80" />
        <path d="M-20 260 L820 300" />
        <path d="M-20 440 L820 400" />
        <path d="M120 -20 L180 620" />
        <path d="M340 -20 L300 620" />
        <path d="M560 -20 L620 620" />
        <path d="M700 -20 L680 620" />
      </g>
      <g fill="#c99a3d">
        <circle cx="180" cy="170" r="6" />
        <circle cx="480" cy="350" r="6" />
        <circle cx="650" cy="150" r="6" />
      </g>
    </svg>
  );
}

export default function LocationsSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-raydan-ivory py-20 sm:py-28"
    >
      <StreetGrid />
      <div className="container-site relative">
        <SectionReveal className="max-w-2xl">
          <p className="section-label">{t.locations.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.locations.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-raydan-muted sm:text-lg">
            {t.locations.sub}
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {locations.map((location, index) => (
            <SectionReveal key={location.id} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-raydan-gold/40 bg-raydan-paper p-7 transition-shadow hover:shadow-lg hover:shadow-raydan-gold/10">
                <p className="section-label">
                  {t.locations.branch} {index + 1}
                </p>
                <h3 className="font-display mt-4 text-xl leading-snug font-bold">
                  {city[locale]},
                  <br />
                  {location.address[locale]}
                </h3>
                <p className="mt-4 text-sm text-raydan-muted">
                  <span className="font-semibold text-raydan-text">
                    {t.locations.daily}
                  </span>{" "}
                  <span className="ltr-nums">
                    {contact.hours.opens}–{contact.hours.closes}
                  </span>
                </p>
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  <a
                    href={yandexMapsLink(location.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.locations.mapAria}: ${location.address[locale]}`}
                    className="inline-flex min-h-11 items-center rounded-full bg-raydan-text px-5 text-sm font-semibold text-raydan-ivory transition-colors hover:bg-raydan-black"
                  >
                    {t.locations.openMap}
                  </a>
                  <a
                    href={twoGisLink(location.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-raydan-muted/40 px-5 text-sm font-semibold text-raydan-text transition-colors hover:border-raydan-gold"
                  >
                    {t.locations.openMapIn2gis}
                  </a>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex min-h-11 items-center rounded-full border border-raydan-muted/40 px-5 text-sm font-semibold text-raydan-text transition-colors hover:border-raydan-gold"
                  >
                    {t.locations.call}
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
