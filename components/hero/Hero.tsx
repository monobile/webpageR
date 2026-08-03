import type { Locale, Messages } from "@/lib/i18n";
import PlateVisual from "@/components/hero/PlateVisual";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Hero({ t }: { locale: Locale; t: Messages }) {
  const trust = [t.hero.trustHours, t.hero.trustLocations, t.hero.trustDelivery];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-raydan-black text-raydan-ivory"
    >
      {/* Soft vignette that keeps the hero from feeling flat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 70% 30%, rgba(33,30,25,0.9) 0%, rgba(9,9,9,1) 70%)",
        }}
      />
      <div className="container-site relative grid min-h-svh items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-32 lg:pb-24">
        <SectionReveal className="order-2 max-w-xl lg:order-none">
          <p className="section-label">Raydan · {t.brand.label}</p>
          <h1 className="font-display mt-5 text-4xl leading-[1.08] font-bold text-balance uppercase sm:text-5xl xl:text-6xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-raydan-light-gold">{t.hero.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-raydan-ivory/80 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center rounded-full bg-raydan-gold px-7 text-base font-bold text-raydan-black transition-colors hover:bg-raydan-light-gold"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#delivery"
              className="inline-flex min-h-12 items-center rounded-full border border-raydan-gold/60 px-7 text-base font-semibold text-raydan-light-gold transition-colors hover:border-raydan-gold hover:bg-raydan-gold/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <ul className="mt-10 flex flex-col gap-2.5 text-sm text-raydan-ivory/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rotate-45 bg-raydan-gold"
                />
                <span className="ltr-nums">{item}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <div className="order-1 lg:order-none lg:ps-6">
          <PlateVisual alt={t.hero.plateAlt} />
        </div>
      </div>
    </section>
  );
}
