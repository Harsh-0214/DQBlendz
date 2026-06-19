"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 95);
      setProgress(p);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => setHidden(true), 500);
        }, 200);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "var(--background)",
        opacity: done ? 0 : 1,
        transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1)",
        pointerEvents: done ? "none" : "auto",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(13,148,136,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              border: "2px solid rgba(13,148,136,0.4)",
              background: "rgba(13,148,136,0.06)",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8C8 8 14 14 18 18M18 18C22 14 28 8 28 8M18 18L8 28M18 18L28 28"
                stroke="var(--teal-light)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8" cy="8" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
              <circle cx="28" cy="8" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
              <circle cx="8" cy="28" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
              <circle cx="28" cy="28" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
            </svg>
          </div>
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              border: "2px solid transparent",
              borderTopColor: "var(--teal-primary)",
              borderRightColor: "rgba(13,148,136,0.2)",
            }}
          />
        </div>

        <div className="text-center">
          <h1
            className="text-3xl font-bold tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--teal-light)",
              letterSpacing: "0.3em",
            }}
          >
            DQBlendz
          </h1>
          <p
            className="text-xs tracking-[0.4em] uppercase mt-1"
            style={{ color: "var(--muted)" }}
          >
            Premium Barber Studio
          </p>
        </div>

        <div className="w-48 flex flex-col items-center gap-2">
          <div
            className="w-full h-[2px] rounded-full overflow-hidden"
            style={{ background: "rgba(13,148,136,0.15)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--teal-primary), var(--teal-light))",
                transition: "width 100ms linear",
                boxShadow: "0 0 8px rgba(45, 212, 191, 0.6)",
              }}
            />
          </div>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
