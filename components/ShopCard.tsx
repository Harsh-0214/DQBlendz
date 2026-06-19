"use client";

import { Clock, MapPin } from "lucide-react";
import { business } from "@/app/config";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-soft)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-3.5">
      <Icon size={16} style={{ color: "var(--accent)" }} className="flex-shrink-0" />
      <div className="min-w-0">
        <div className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.58rem" }}>
          {label}
        </div>
        <div className="text-sm mt-0.5 truncate" style={{ color: "var(--on-dark)" }}>
          {value}
        </div>
      </div>
    </div>
  );
}

export default function ShopCard() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = business.hours.find((h) => h.day === today)?.time ?? "By appointment";

  return (
    <div
      className="relative w-[300px] overflow-hidden"
      style={{
        border: "1px solid var(--line-dark)",
        borderRadius: "var(--radius)",
        background: "rgba(20, 18, 15, 0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--accent)" }} />

      <div className="p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="pulse-dot" />
            <span className="kicker" style={{ color: "var(--accent-soft)" }}>
              Now Booking
            </span>
          </div>
          <span className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.58rem" }}>
            {today}
          </span>
        </div>

        <Row icon={Clock} label="Today's Hours" value={todayHours} />
        <div className="h-px" style={{ background: "var(--line-dark)" }} />
        <Row icon={MapPin} label="The Studio" value={`${business.address.line1}, ON`} />
        <div className="h-px mb-2" style={{ background: "var(--line-dark)" }} />

        <div className="flex items-end justify-between pt-3">
          <div>
            <div className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.58rem" }}>
              Rated
            </div>
            <div className="display" style={{ color: "var(--accent-soft)", fontSize: "2rem", lineHeight: 1 }}>
              {business.rating}
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-end">
              <Stars />
            </div>
            <div className="kicker mt-1.5" style={{ color: "var(--on-dark-muted)", fontSize: "0.58rem" }}>
              {business.reviewCount} reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
