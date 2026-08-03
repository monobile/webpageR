import type { Locale, Messages } from "@/lib/i18n";
import { signatureItems } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import SectionReveal from "@/components/ui/SectionReveal";

export default function SignaturePlov({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  return (
    <section className="relative overflow-hidden bg-raydan-charcoal py-20 text-raydan-ivory sm:py-28">
      {/* Ornamental ring peeking from the edge, echoing the plate */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -end-40 hidden h-[34rem] w-[34rem] rounded-full border border-raydan-gold/15 lg:block"
      >
        <div className="absolute inset-6 rounded-full border border-raydan-gold/10" />
        <div className="absolute inset-16 rounded-full border border-raydan-ivory/5" />
      </div>

      <div className="container-site relative">
        <SectionReveal className="max-w-2xl">
          <p className="section-label">{t.signature.label}</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
            {t.signature.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-raydan-ivory/70 sm:text-lg">
            {t.signature.sub}
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {signatureItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.08}>
              <article className="gold-frame group relative h-full rounded-2xl bg-raydan-black/60 p-7 transition-colors duration-300">
                <span
                  aria-hidden="true"
                  className="absolute top-3 h-px w-8 bg-raydan-gold/50 transition-all duration-300 group-hover:w-12 start-7"
                />
                <h3 className="font-display mt-3 text-xl leading-snug font-bold text-raydan-ivory">
                  {item.name[locale]}
                </h3>
                <p className="font-display mt-6 text-3xl font-bold text-raydan-light-gold">
                  <span className="ltr-nums">{formatPrice(item.price)}</span>
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
