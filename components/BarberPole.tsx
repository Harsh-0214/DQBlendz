"use client";

/**
 * Animated barber pole — the signature motif of the brand.
 * `height` controls the overall size; the cylinder and caps scale from it.
 */
export default function BarberPole({
  height = 220,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const width = Math.round(height * 0.26);
  const capHeight = Math.round(width * 0.55);
  const ballSize = Math.round(width * 0.78);

  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      style={{ width: width + 14 }}
      aria-hidden="true"
    >
      {/* top finial */}
      <div
        className="barber-cap rounded-full"
        style={{ width: ballSize, height: ballSize, marginBottom: -2, zIndex: 2 }}
      />
      <div
        className="barber-cap rounded-md w-full"
        style={{ height: capHeight, zIndex: 1 }}
      />

      {/* glass cylinder */}
      <div
        className="barber-pole"
        style={{
          width,
          height,
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.25), 0 8px 30px rgba(214,40,57,0.25), 0 8px 30px rgba(42,76,173,0.18)",
        }}
      />

      {/* bottom cap + finial */}
      <div
        className="barber-cap rounded-md w-full"
        style={{ height: capHeight, marginTop: -2, zIndex: 1 }}
      />
      <div
        className="barber-cap rounded-full"
        style={{ width: ballSize, height: ballSize, marginTop: -2, zIndex: 2 }}
      />
    </div>
  );
}
