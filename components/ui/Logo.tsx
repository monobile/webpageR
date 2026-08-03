/**
 * Raydan logo lockup: ornamental roundel + wordmark.
 *
 * The official brush-lettering logo (`raydan black logo(3).ai`) was not
 * available at build time, so this component renders an interim vector
 * lockup that matches the brand palette. To use the official logo,
 * convert the .ai file to `public/brand/raydan-logo.svg` and replace the
 * markup below with an <Image> pointing at it (see README → Assets).
 */
export default function Logo({
  className,
  tone = "light",
  label,
}: {
  className?: string;
  /** "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "light" | "dark";
  label: string;
}) {
  const text = tone === "light" ? "#f7f0e5" : "#211c16";
  return (
    <span
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 120 120" className="h-9 w-9 shrink-0" aria-hidden="true">
        <g fill="none" stroke="#c99a3d" strokeWidth="2.6">
          <circle cx="60" cy="60" r="52" />
          <circle cx="60" cy="60" r="43" opacity="0.5" />
        </g>
        <g fill="#c99a3d">
          <path d="M60 20 C68 29 69 39 60 47 C51 39 52 29 60 20 Z" />
          <path d="M60 100 C68 91 69 81 60 73 C51 81 52 91 60 100 Z" />
          <path d="M20 60 C29 52 39 51 47 60 C39 69 29 68 20 60 Z" />
          <path d="M100 60 C91 52 81 51 73 60 C81 69 91 68 100 60 Z" />
          <circle cx="60" cy="60" r="7" />
        </g>
      </svg>
      <span
        className="font-display text-2xl font-bold italic leading-none tracking-wide"
        style={{ color: text }}
        aria-hidden="true"
        dir="ltr"
      >
        Raydan
      </span>
    </span>
  );
}
