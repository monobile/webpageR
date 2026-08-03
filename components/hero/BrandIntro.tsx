import type { Messages } from "@/lib/i18n";
import SectionReveal from "@/components/ui/SectionReveal";

export default function BrandIntro({ t }: { t: Messages }) {
  return (
    <section className="relative bg-raydan-beige py-20 sm:py-28">
      {/* Restrained gold hairlines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-raydan-gold/50 to-transparent"
      />
      <div className="container-site">
        <SectionReveal className="max-w-3xl">
          <p className="section-label">{t.brand.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.brand.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-raydan-text/85 sm:text-lg">
            {t.brand.p1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-raydan-text/85 sm:text-lg">
            {t.brand.p2}
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-raydan-gold/35 bg-raydan-gold/35 sm:grid-cols-2 lg:grid-cols-4">
          {t.brand.values.map((value, index) => (
            <SectionReveal
              key={value.title}
              delay={index * 0.08}
              className="bg-raydan-ivory p-7"
            >
              <span
                aria-hidden="true"
                className="font-display block text-2xl text-raydan-gold"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-raydan-muted">
                {value.text}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
