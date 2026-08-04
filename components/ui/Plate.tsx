import Image from "next/image";

/**
 * Raydan ornamental plate — the site's hero object (official photo,
 * `public/images/plate_transp.png`). A vector recreation of the same
 * plate lives at `public/images/plate.svg` (used by the OG image
 * fallback and available as a lightweight alternative).
 */
export default function Plate({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <Image
      src="/images/plate_transp.png"
      alt={title ?? ""}
      width={936}
      height={843}
      priority
      sizes="(min-width: 1024px) 34rem, 86vw"
      className={className}
    />
  );
}
