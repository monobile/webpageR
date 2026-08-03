import type { Locale, Messages } from "@/lib/i18n";
import SectionReveal from "@/components/ui/SectionReveal";
import CateringForm from "@/components/catering/CateringForm";

export default function CateringSection({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  return (
    <section id="catering" className="relative bg-raydan-beige py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-raydan-gold/50 to-transparent"
      />
      <div className="container-site grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionReveal>
          <p className="section-label">{t.catering.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.catering.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-raydan-text/85 sm:text-lg">
            {t.catering.text}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.catering.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-raydan-gold/50 bg-raydan-ivory px-4 py-2 text-sm font-semibold text-raydan-text"
              >
                {tag}
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <CateringForm locale={locale} t={t} />
        </SectionReveal>
      </div>
    </section>
  );
}
