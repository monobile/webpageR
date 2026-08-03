import type { Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";
import SectionReveal from "@/components/ui/SectionReveal";

export default function FinalCta({ t }: { t: Messages }) {
  return (
    <section className="relative overflow-hidden bg-raydan-black py-24 text-center text-raydan-ivory sm:py-32">
      {/* Concentric ornament echoing the plate */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute start-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-raydan-gold/10 rtl:translate-x-1/2"
      >
        <div className="absolute inset-16 rounded-full border border-raydan-gold/15" />
        <div className="absolute inset-36 rounded-full border border-raydan-ivory/5" />
        <div className="absolute inset-60 rounded-full border border-raydan-gold/10" />
      </div>

      <SectionReveal className="container-site relative">
        <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight font-bold text-balance sm:text-4xl xl:text-5xl">
          {t.cta.heading}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu"
            className="inline-flex min-h-12 items-center rounded-full bg-raydan-gold px-7 text-base font-bold text-raydan-black transition-colors hover:bg-raydan-light-gold"
          >
            {t.cta.viewMenu}
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex min-h-12 items-center rounded-full border border-raydan-gold/60 px-7 text-base font-semibold text-raydan-light-gold transition-colors hover:border-raydan-gold hover:bg-raydan-gold/10"
          >
            {t.cta.call}
          </a>
          <a
            href="#locations"
            className="inline-flex min-h-12 items-center rounded-full border border-raydan-ivory/30 px-7 text-base font-semibold text-raydan-ivory transition-colors hover:border-raydan-ivory/60"
          >
            {t.cta.findNearest}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
