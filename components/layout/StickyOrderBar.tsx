import type { Messages } from "@/lib/i18n";
import { contact } from "@/data/contact";

/** Always-reachable order button on small screens. */
export default function StickyOrderBar({ t }: { t: Messages }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden">
      <a
        href={contact.phoneHref}
        className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-raydan-gold text-base font-bold text-raydan-black shadow-lg shadow-black/30"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.96.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.84.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
        </svg>
        {t.common.stickyOrder}
      </a>
    </div>
  );
}
