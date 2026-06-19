"use client";

/**
 * Seamless marquee. Renders the items twice and translates -50% so the
 * loop is gapless. Pure CSS animation (off main thread).
 */
export default function Marquee({
  items,
  reverse = false,
  className = "",
  style,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const set = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <div className={`marquee-track ${reverse ? "rev" : ""}`}>
        {set.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span
              className="display"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.04em" }}
            >
              {item}
            </span>
            <span className="diamond mx-7 sm:mx-10" />
          </span>
        ))}
      </div>
    </div>
  );
}
