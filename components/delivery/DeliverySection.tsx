import type { Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";
import SectionReveal from "@/components/ui/SectionReveal";

export default function DeliverySection({ t }: { t: Messages }) {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden bg-raydan-black py-20 text-raydan-ivory sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-raydan-gold/60 to-transparent"
      />
      <div className="container-site grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <p className="section-label">{t.delivery.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.delivery.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-raydan-ivory/75 sm:text-lg">
            {t.delivery.text}
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.delivery.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-raydan-gold/50 text-lg font-bold text-raydan-light-gold"
                >
                  {index + 1}
                </span>
                <span className="pt-2.5 font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="gold-frame rounded-3xl bg-raydan-charcoal/80 p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-raydan-ivory/60 uppercase">
              {t.delivery.phoneLabel}
            </p>
            <a
              href={contact.phoneHref}
              className="ltr-nums font-display mt-3 block text-3xl font-bold text-raydan-light-gold transition-colors hover:text-raydan-gold sm:text-4xl"
            >
              {contact.phoneDisplay}
            </a>
            <p className="ltr-nums mt-4 text-sm text-raydan-ivory/60">
              {t.hero.trustHours}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-12 items-center rounded-full bg-raydan-gold px-7 text-base font-bold text-raydan-black transition-colors hover:bg-raydan-light-gold"
              >
                {t.delivery.call}
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center rounded-full border border-raydan-gold/60 px-7 text-base font-semibold text-raydan-light-gold transition-colors hover:border-raydan-gold hover:bg-raydan-gold/10"
              >
                {t.delivery.openMenu}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
