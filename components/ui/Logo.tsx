import RaydanMark from "@/components/ui/RaydanMark";

/**
 * Raydan logo lockup: P mark + brush-script wordmark + CAFETERIA tagline.
 * A vector recreation of the official brand lockup (brush lettering
 * approximated with the Kaushan Script webfont). To use the exact official
 * artwork, convert `raydan black logo(3).ai` to SVG at
 * `public/brand/raydan-logo.svg` and swap this markup for an <Image>.
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
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      role="img"
      aria-label={label}
    >
      <RaydanMark
        className="h-9 w-9 shrink-0"
        fill={tone === "light" ? "#c99a3d" : "#211c16"}
      />
      <span className="flex flex-col leading-none" aria-hidden="true" dir="ltr">
        <span
          className="text-[1.6rem] font-normal"
          style={{ fontFamily: "var(--font-logo), cursive", color: text }}
        >
          Raydan
        </span>
        <span
          className="mt-0.5 text-[0.55rem] font-bold tracking-[0.42em] uppercase"
          style={{ color: "#c99a3d" }}
        >
          Cafeteria
        </span>
      </span>
    </span>
  );
}
