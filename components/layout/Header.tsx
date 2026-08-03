"use client";

import { useEffect, useState } from "react";
import type { Locale, Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";
import Logo from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const SECTION_IDS = ["home", "menu", "delivery", "catering", "locations"];

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Messages;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item of the section in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "menu", label: t.nav.menu },
    { id: "delivery", label: t.nav.delivery },
    { id: "catering", label: t.nav.catering },
    { id: "locations", label: t.nav.locations },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-raydan-black/95 shadow-[0_1px_0_0_rgba(201,154,61,0.35)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href={`/${locale}#home`}
          className="shrink-0"
          aria-label={t.header.logoAlt}
        >
          <Logo tone="light" label={t.header.logoAlt} />
        </a>

        <nav
          aria-label={t.footer.navTitle}
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === item.id
                  ? "text-raydan-light-gold"
                  : "text-raydan-ivory/85 hover:text-raydan-light-gold"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-4 -bottom-0.5 h-px bg-raydan-gold transition-opacity ${
                  active === item.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher
              current={locale}
              label={t.header.langLabel}
              tone="light"
            />
          </div>
          <a
            href={contact.phoneHref}
            className="hidden min-h-11 items-center rounded-full bg-raydan-gold px-5 text-sm font-bold text-raydan-black transition-colors hover:bg-raydan-light-gold sm:inline-flex"
          >
            {t.header.order}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t.header.closeNav : t.header.openNav}
            className="flex h-11 w-11 items-center justify-center rounded-full text-raydan-ivory lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {open && (
        <div className="border-t border-raydan-gold/25 bg-raydan-black/95 backdrop-blur-sm lg:hidden">
          <nav
            aria-label={t.footer.navTitle}
            className="container-site flex flex-col py-4"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-raydan-ivory/10 text-base font-semibold text-raydan-ivory transition-colors hover:text-raydan-light-gold"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <LanguageSwitcher
                current={locale}
                label={t.header.langLabel}
                tone="light"
              />
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-11 items-center rounded-full bg-raydan-gold px-5 text-sm font-bold text-raydan-black"
              >
                {t.header.order}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
