"use client";

/**
 * Brand mark for DQ Blendz. Since DQ has no logo yet, this is a clean
 * stand-in: a mini barber pole paired with the wordmark. Swap in a real
 * logo later by replacing the <PoleMark /> and/or the wordmark below.
 */

export function PoleMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-lg overflow-hidden flex-shrink-0"
      style={{
        width: size,
        height: size,
        border: "1px solid rgba(214,40,57,0.4)",
        background: "rgba(13,12,14,0.6)",
      }}
      aria-hidden="true"
    >
      {/* mini animated pole inside a rounded chip */}
      <span
        className="barber-pole"
        style={{ width: Math.round(size * 0.34), height: Math.round(size * 0.72) }}
      />
    </span>
  );
}

export default function Logo({
  size = 36,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <PoleMark size={size} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className="font-bold tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--foreground)",
              fontSize: size * 0.5,
            }}
          >
            DQ Blendz
          </span>
          <span
            className="tracking-[0.32em] uppercase mt-1"
            style={{ color: "var(--red-light)", fontSize: size * 0.2 }}
          >
            Barber Studio
          </span>
        </span>
      )}
    </span>
  );
}
