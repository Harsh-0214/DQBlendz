/**
 * Brand mark for DQ Blendz — a brass "DQ" monogram inside a thin ring,
 * paired with an editorial wordmark. Stands in until DQ has a real logo.
 */

export function Monogram({ size = 38 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
        <circle
          cx="22"
          cy="22"
          r="20.5"
          stroke="var(--brass)"
          strokeWidth="1"
          opacity="0.55"
        />
        <circle
          cx="22"
          cy="22"
          r="17"
          stroke="var(--brass)"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <text
          x="22"
          y="22"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="15"
          fontWeight="700"
          letterSpacing="0.5"
          fill="var(--brass-light)"
        >
          DQ
        </text>
      </svg>
    </span>
  );
}

export default function Logo({
  size = 38,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <span className="flex items-center gap-3">
      <Monogram size={size} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className="font-display font-semibold uppercase"
            style={{
              color: "var(--ivory)",
              fontSize: size * 0.46,
              letterSpacing: "0.18em",
            }}
          >
            DQ Blendz
          </span>
          <span
            className="uppercase mt-[5px]"
            style={{
              color: "var(--brass)",
              fontSize: size * 0.2,
              letterSpacing: "0.42em",
            }}
          >
            Barber Studio
          </span>
        </span>
      )}
    </span>
  );
}
