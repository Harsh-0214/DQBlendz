"use client";

/**
 * Slowly rotating brass brand seal — a classic barbershop emblem.
 * Outer ring carries the brand text on a circular path; the center holds a
 * static "DQ" monogram. Decorative only.
 */
export default function Seal({ className = "" }: { className?: string }) {
  const ring = "DQ BLENDZ · MASTER BARBER · VAUGHAN, ON · ";

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path
          id="seal-curve"
          d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
          fill="none"
        />
      </defs>

      {/* rotating group: rings + circular text */}
      <g className="spin-seal">
        <circle cx="100" cy="100" r="92" fill="none" stroke="var(--accent)" strokeWidth="0.75" opacity="0.35" />
        <circle cx="100" cy="100" r="86" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.18" />
        <text
          fill="var(--accent-soft)"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "8.5px",
            letterSpacing: "3.1px",
            textTransform: "uppercase",
          }}
        >
          <textPath href="#seal-curve" startOffset="0">
            {ring}
          </textPath>
        </text>
        <circle cx="100" cy="100" r="60" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.22" />
      </g>

      {/* static center monogram */}
      <text
        x="100"
        y="101"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--accent)"
        style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "44px", letterSpacing: "1px" }}
      >
        DQ
      </text>
      <rect x="97.5" y="68" width="5" height="5" transform="rotate(45 100 70.5)" fill="var(--accent)" opacity="0.8" />
      <rect x="97.5" y="127" width="5" height="5" transform="rotate(45 100 129.5)" fill="var(--accent)" opacity="0.8" />
    </svg>
  );
}
