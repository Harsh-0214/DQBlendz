"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { Instagram } from "./icons";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const rows = [
    { icon: MapPin, label: "Location", value: `${business.address.line1}, ${business.address.line2}`, href: business.address.mapsUrl },
    ...(business.phone ? [{ icon: Phone, label: "Call / Text", value: business.phone, href: business.phoneHref }] : []),
    { icon: Instagram, label: "Instagram", value: business.instagramHandle, href: business.instagram },
  ];

  return (
    <section id="contact" className="sec sec-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>05</span>
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>Book the Chair</span>
          <span className="rule" style={{ background: "var(--line-light)" }} />
        </motion.div>

        <motion.h2
          className="display mb-12"
          style={{ color: "var(--on-light)", fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 0.86 }}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
        >
          Reserve your <span style={{ color: "var(--accent)" }}>chair</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Booksy panel (ink on cream) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
          >
            <div className="relative h-full grain p-9 sm:p-11 flex flex-col justify-center" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
              <div
                className="glow"
                style={{ width: 260, height: 260, background: "radial-gradient(circle, rgba(191,139,60,0.22) 0%, transparent 70%)", top: -70, right: -70 }}
              />
              <div className="relative z-10">
                <span className="kicker" style={{ color: "var(--accent)" }}>Powered by Booksy</span>
                <h3 className="display mt-4 mb-3" style={{ color: "var(--on-dark)", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
                  Book in under a minute
                </h3>
                <p className="text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "var(--on-dark-muted)" }}>
                  Live availability, instant confirmation, friendly reminders.
                  Pick your cut and a time that works — done.
                </p>
                <a href={business.booksyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full py-4">
                  <Calendar size={16} />
                  Book on Booksy
                  <ArrowUpRight size={16} />
                </a>
                <p className="kicker text-center mt-5" style={{ color: "var(--on-dark-faint)", fontSize: "0.62rem" }}>
                  Questions? DM{" "}
                  <a href={business.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-soft)" }}>
                    {business.instagramHandle}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours receipt + contact */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.26 }}
          >
            <div className="p-7 sm:p-8" style={{ border: "1px solid var(--line-light)", borderRadius: "var(--radius)" }}>
              <div className="flex items-center justify-between mb-5">
                <span className="display" style={{ color: "var(--on-light)", fontSize: "1.6rem" }}>Hours</span>
                <span className="kicker" style={{ color: "var(--on-light-muted)" }}>Walk-in / Booked</span>
              </div>
              <div className="space-y-0">
                {business.hours.map((h) => {
                  const active = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-2 mono text-xs"
                      style={{ borderBottom: "1px dashed var(--line-light)", color: active ? "var(--accent)" : "var(--on-light-muted)", fontWeight: active ? 700 : 400 }}
                    >
                      <span className="uppercase tracking-wider">{h.day}{active ? " · Today" : ""}</span>
                      <span>{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-3">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5"
                  style={{ border: "1px solid var(--line-light)", borderRadius: "var(--radius)" }}
                >
                  <Icon size={17} style={{ color: "var(--accent)" }} />
                  <div className="min-w-0">
                    <div className="kicker" style={{ color: "var(--on-light-muted)", fontSize: "0.6rem" }}>{label}</div>
                    <div className="text-sm mt-0.5 transition-colors duration-200 group-hover:text-[var(--accent)] truncate" style={{ color: "var(--on-light)" }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
