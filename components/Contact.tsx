"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Instagram } from "./icons";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const cards = [
    {
      icon: MapPin,
      title: "Find the Shop",
      content: [business.address.line1, business.address.line2],
      href: business.address.mapsUrl,
    },
    ...(business.phone
      ? [{ icon: Phone, title: "Call or Text", content: [business.phone], href: business.phoneHref }]
      : []),
    {
      icon: Instagram,
      title: "Follow Along",
      content: [`${business.instagramHandle} on Instagram`],
      href: business.instagram,
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="hairline absolute top-0 left-0" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow centered justify-center mb-4">Book &amp; Visit</p>
          <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "var(--ivory)" }}>
            Reserve Your <span className="gold-text">Chair</span>
          </h2>
          <p className="mt-5 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Pick your service, choose a time, and you&apos;re locked in — booking
            takes under a minute on Booksy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
          {/* Booksy panel */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <div className="relative panel rounded-sm p-9 sm:p-11 h-full flex flex-col justify-center overflow-hidden">
              <div
                className="glow"
                style={{
                  width: 240,
                  height: 240,
                  background: "radial-gradient(circle, rgba(200,164,92,0.18) 0%, transparent 70%)",
                  top: -60,
                  right: -60,
                }}
              />
              <div className="relative">
                <p className="eyebrow mb-5">Powered by Booksy</p>
                <h3 className="font-display text-2xl sm:text-3xl mb-3" style={{ color: "var(--ivory)" }}>
                  Book in under a minute
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                  Real-time availability, instant confirmation, and friendly
                  reminders. Choose your cut and a time that works for you.
                </p>
                <a
                  href={business.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold w-full py-4 text-sm uppercase tracking-wider"
                >
                  <Calendar size={17} />
                  Book on Booksy
                  <ArrowUpRight size={17} />
                </a>
                <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
                  Got a question? DM{" "}
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                    style={{ color: "var(--brass-light)" }}
                  >
                    {business.instagramHandle}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-3.5"
            initial={{ opacity: 0, y: 22 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            {cards.map(({ icon: Icon, title, content, href }) => (
              <a
                key={title}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex gap-4 items-start panel rounded-sm p-5"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid var(--border)", background: "var(--surface-2)" }}
                >
                  <Icon size={17} style={{ color: "var(--brass)" }} />
                </div>
                <div>
                  <div className="font-display text-base mb-0.5" style={{ color: "var(--ivory)" }}>
                    {title}
                  </div>
                  {content.map((c) => (
                    <div
                      key={c}
                      className="text-sm transition-colors duration-200 group-hover:text-[var(--brass-light)]"
                      style={{ color: "var(--muted)" }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            <div className="panel rounded-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ border: "1px solid var(--border)", background: "var(--surface-2)" }}
                >
                  <Clock size={17} style={{ color: "var(--brass)" }} />
                </div>
                <div className="font-display text-base" style={{ color: "var(--ivory)" }}>
                  Hours
                </div>
              </div>
              <div className="space-y-1.5">
                {business.hours.map((h) => {
                  const active = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className="flex justify-between items-center text-xs rounded-sm px-2.5 py-1.5"
                      style={{
                        color: active ? "var(--brass-light)" : "var(--muted)",
                        fontWeight: active ? 600 : 400,
                        background: active ? "var(--surface-2)" : "transparent",
                      }}
                    >
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
