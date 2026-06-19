"use client";

/**
 * Warm floating embers, weighted to the right side of the hero — like dust
 * catching the light in a dimly lit shop. Fixed positions (no random) so
 * server and client render identically. Decorative only.
 */
const embers = [
  // left side — behind / around the wordmark
  { left: 4, top: 24, size: 3, dur: 11, delay: 0.3, op: 0.55 },
  { left: 9, top: 58, size: 2, dur: 9, delay: 2, op: 0.45 },
  { left: 14, top: 16, size: 4, dur: 14, delay: 1, op: 0.6 },
  { left: 20, top: 78, size: 2, dur: 10, delay: 0.6, op: 0.5 },
  { left: 27, top: 40, size: 3, dur: 13, delay: 2.8, op: 0.5 },
  { left: 33, top: 86, size: 2, dur: 9, delay: 1.4, op: 0.45 },
  { left: 40, top: 28, size: 4, dur: 15, delay: 0.9, op: 0.6 },
  { left: 46, top: 66, size: 2, dur: 11, delay: 3.2, op: 0.45 },
  // right side
  { left: 56, top: 30, size: 3, dur: 9, delay: 0, op: 0.7 },
  { left: 64, top: 62, size: 2, dur: 11, delay: 1.5, op: 0.5 },
  { left: 70, top: 18, size: 4, dur: 13, delay: 0.8, op: 0.8 },
  { left: 75, top: 48, size: 2, dur: 8, delay: 2.2, op: 0.55 },
  { left: 80, top: 72, size: 3, dur: 12, delay: 0.4, op: 0.65 },
  { left: 84, top: 26, size: 2, dur: 10, delay: 3, op: 0.5 },
  { left: 88, top: 56, size: 5, dur: 15, delay: 1, op: 0.75 },
  { left: 92, top: 38, size: 2, dur: 9, delay: 2.6, op: 0.45 },
  { left: 78, top: 88, size: 2, dur: 10, delay: 0.2, op: 0.5 },
  { left: 95, top: 70, size: 3, dur: 12, delay: 3.4, op: 0.6 },
  { left: 86, top: 84, size: 4, dur: 16, delay: 2, op: 0.7 },
];

export default function Embers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: `${e.left}%`,
              top: `${e.top}%`,
              width: e.size,
              height: e.size,
              "--p-dur": `${e.dur}s`,
              "--p-delay": `${e.delay}s`,
              "--p-op": e.op,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
