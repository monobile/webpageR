/**
 * The Raydan "P" mark (a hand holding fork tines forming the letter P) —
 * vector recreation traced from the official logo image supplied by the
 * business. Replace the paths with an exact export from
 * `raydan black logo(3).ai` when the source file is available.
 */
export default function RaydanMark({
  className,
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg viewBox="0 0 420 420" className={className} aria-hidden="true">
      <defs>
        <mask id="raydan-tines">
          <rect x="-50" y="-50" width="520" height="520" fill="white" />
          <line
            x1="185"
            y1="120"
            x2="416"
            y2="100"
            stroke="black"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <line
            x1="170"
            y1="170"
            x2="410"
            y2="162"
            stroke="black"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <g fill={fill}>
        <path
          mask="url(#raydan-tines)"
          d="M96 40 C 190 18, 312 36, 396 78 C 393 122, 384 170, 372 212 C 292 176, 190 194, 110 240 L 70 240 L 88 56 C 90 46, 92 42, 96 40 Z"
        />
        <path d="M64 286 C 106 254, 148 244, 182 254 C 248 236, 326 224, 408 216 C 402 250, 372 292, 322 314 C 274 336, 214 342, 166 336 L 154 380 C 151 390, 143 396, 133 396 L 80 396 C 68 396, 60 388, 62 377 Z" />
      </g>
    </svg>
  );
}
