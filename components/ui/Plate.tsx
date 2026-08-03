import Image from "next/image";

/**
 * Raydan ornamental plate — the site's hero object.
 *
 * The artwork (`/public/images/plate.svg`) is a vector recreation of the
 * official plate photo supplied by the business: scalloped gold-trimmed
 * edge, white arabesque band on black, glossy black well and the gold
 * Raydan P mark in the center. To use the original photo instead, drop
 * `plate_transp.png` into `public/images/` and change the `src` below
 * (see README → Assets).
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
      src="/images/plate.svg"
      alt={title ?? ""}
      width={800}
      height={800}
      priority
      unoptimized
      className={className}
    />
  );
}
