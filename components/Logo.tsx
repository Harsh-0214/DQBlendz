/**
 * DQ Blendz brand mark — a framed "DQ" monogram + condensed wordmark.
 * `tone` adapts colors for dark or light section backgrounds.
 */

export function Monogram({
  size = 38,
  tone = "dark",
}: {
  size?: number;
  tone?: "dark" | "light";
}) {
  const border = tone === "dark" ? "var(--line-dark)" : "var(--line-light)";
  return (
    <span
      className="relative inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        border: `1px solid ${border}`,
        borderRadius: "var(--radius)",
      }}
      aria-hidden="true"
    >
      <span
        className="display"
        style={{
          color: "var(--accent)",
          fontSize: size * 0.46,
          lineHeight: 1,
          marginTop: size * 0.04,
        }}
      >
        DQ
      </span>
    </span>
  );
}

export default function Logo({
  size = 38,
  showText = true,
  tone = "dark",
}: {
  size?: number;
  showText?: boolean;
  tone?: "dark" | "light";
}) {
  const ink = tone === "dark" ? "var(--on-dark)" : "var(--on-light)";
  return (
    <span className="flex items-center gap-3">
      <Monogram size={size} tone={tone} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className="display"
            style={{ color: ink, fontSize: size * 0.58, letterSpacing: "0.06em" }}
          >
            DQ Blendz
          </span>
          <span
            className="kicker mt-[3px]"
            style={{ color: "var(--accent)", fontSize: size * 0.2, letterSpacing: "0.3em" }}
          >
            Barber Studio
          </span>
        </span>
      )}
    </span>
  );
}
