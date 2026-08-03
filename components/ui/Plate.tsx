/**
 * Raydan ornamental plate — the site's hero object.
 *
 * NOTE: the original `plate_transp.png` photo asset was not present in the
 * repository when the site was built, so the plate is recreated here as a
 * hand-drawn vector interpretation (black plate, gold + white ornament).
 * To use the original photo instead, drop `plate_transp.png` into
 * `public/images/` and swap this component for a `next/image` in
 * `components/hero/Hero.tsx` (see README → Assets).
 */

const PETAL_ANGLES = Array.from({ length: 16 }, (_, i) => i * 22.5);
const DOT_ANGLES = Array.from({ length: 16 }, (_, i) => 11.25 + i * 22.5);
const ROSETTE_ANGLES = Array.from({ length: 12 }, (_, i) => i * 30);
const CURL_ANGLES = Array.from({ length: 8 }, (_, i) => i * 45);

export default function Plate({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <radialGradient id="plate-bg" cx="41%" cy="36%" r="78%">
          <stop offset="0%" stopColor="#26221c" />
          <stop offset="48%" stopColor="#14120f" />
          <stop offset="100%" stopColor="#070707" />
        </radialGradient>
        <linearGradient id="plate-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ddbb72" />
          <stop offset="45%" stopColor="#c99a3d" />
          <stop offset="75%" stopColor="#8a6725" />
          <stop offset="100%" stopColor="#ddbb72" />
        </linearGradient>

        {/* Outer band petal (teardrop pointing inwards) */}
        <g id="plate-petal">
          <path
            d="M400 30 C421 50 426 74 400 94 C374 74 379 50 400 30 Z"
            fill="#c99a3d"
            fillOpacity="0.14"
            stroke="#c99a3d"
            strokeWidth="1.6"
          />
          <path
            d="M400 44 C409 54 411 66 400 78 C389 66 391 54 400 44 Z"
            fill="#ddbb72"
            fillOpacity="0.32"
          />
          <circle cx="400" cy="105" r="2.6" fill="#f7f0e5" opacity="0.85" />
        </g>

        {/* Small white floret between petals */}
        <g id="plate-floret">
          <circle cx="400" cy="52" r="3.4" fill="#f7f0e5" opacity="0.9" />
          <circle cx="400" cy="66" r="1.8" fill="#ddbb72" opacity="0.9" />
        </g>

        {/* Arabesque curl for the inner band */}
        <g id="plate-curl">
          <path
            d="M400 150 C428 158 436 184 420 202 C410 213 394 211 390 199 C387 189 396 182 403 187"
            fill="none"
            stroke="#ddbb72"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M400 150 C372 158 364 184 380 202 C390 213 406 211 410 199 C413 189 404 182 397 187"
            fill="none"
            stroke="#f7f0e5"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>

        {/* Rosette petal (large ellipse) */}
        <g id="plate-rosette">
          <ellipse
            cx="400"
            cy="262"
            rx="30"
            ry="88"
            fill="none"
            stroke="#c99a3d"
            strokeWidth="1"
            opacity="0.38"
          />
        </g>

        {/* Center medallion petal */}
        <g id="plate-center-petal">
          <path
            d="M400 322 C412 336 414 352 400 366 C386 352 388 336 400 322 Z"
            fill="#c99a3d"
            fillOpacity="0.25"
            stroke="#ddbb72"
            strokeWidth="1.2"
          />
        </g>
      </defs>

      {/* Plate body */}
      <circle cx="400" cy="400" r="390" fill="url(#plate-bg)" />
      <circle
        cx="400"
        cy="400"
        r="388"
        fill="none"
        stroke="url(#plate-rim)"
        strokeWidth="3"
      />
      <circle
        cx="400"
        cy="400"
        r="378"
        fill="none"
        stroke="#c99a3d"
        strokeWidth="1"
        opacity="0.55"
      />

      {/* Outer ornament band */}
      {PETAL_ANGLES.map((a) => (
        <use
          key={`petal-${a}`}
          href="#plate-petal"
          transform={`rotate(${a} 400 400)`}
        />
      ))}
      {DOT_ANGLES.map((a) => (
        <use
          key={`floret-${a}`}
          href="#plate-floret"
          transform={`rotate(${a} 400 400)`}
        />
      ))}

      <circle
        cx="400"
        cy="400"
        r="288"
        fill="none"
        stroke="#f7f0e5"
        strokeWidth="1"
        opacity="0.28"
      />
      <circle
        cx="400"
        cy="400"
        r="278"
        fill="none"
        stroke="#c99a3d"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Beaded gold ring */}
      <circle
        cx="400"
        cy="400"
        r="262"
        fill="none"
        stroke="#ddbb72"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="0.1 25.7"
        opacity="0.85"
      />

      {/* Arabesque curls */}
      {CURL_ANGLES.map((a) => (
        <use
          key={`curl-${a}`}
          href="#plate-curl"
          transform={`rotate(${a} 400 400)`}
        />
      ))}

      {/* Lotus rosette */}
      {ROSETTE_ANGLES.map((a) => (
        <use
          key={`rosette-${a}`}
          href="#plate-rosette"
          transform={`rotate(${a} 400 400)`}
        />
      ))}

      {/* Center medallion */}
      <circle
        cx="400"
        cy="400"
        r="132"
        fill="none"
        stroke="#c99a3d"
        strokeWidth="1"
        opacity="0.7"
      />
      <circle
        cx="400"
        cy="400"
        r="124"
        fill="none"
        stroke="#f7f0e5"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <circle cx="400" cy="400" r="96" fill="#c99a3d" fillOpacity="0.07" />
      {PETAL_ANGLES.slice(0, 8).map((a) => (
        <use
          key={`cp-${a}`}
          href="#plate-center-petal"
          transform={`rotate(${a * 2} 400 400)`}
        />
      ))}
      <circle
        cx="400"
        cy="400"
        r="34"
        fill="none"
        stroke="#ddbb72"
        strokeWidth="1.2"
        opacity="0.9"
      />
      <circle cx="400" cy="400" r="7" fill="#ddbb72" />
    </svg>
  );
}
