"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, AtSign, Calendar, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const contactCards = [
    {
      icon: MapPin,
      title: "Find the Shop",
      content: [business.address.line1, business.address.line2],
      href: business.address.mapsUrl,
    },
    {
      icon: Phone,
      title: "Call or Text",
      content: [business.phone],
      href: business.phoneHref,
    },
    {
      icon: AtSign,
      title: "Follow Along",
      content: [`${business.instagramHandle} on Instagram`],
      href: business.instagram,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--surface)" }} />
      <div className="accent-divider absolute top-0 left-0 right-0" />
      <div
        className="glow-orb absolute"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(214,40,57,0.1) 0%, transparent 70%)",
          top: "0",
          right: "-20%",
          animationDelay: "0.5s",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="section-heading-label">Book & Visit</p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            Reserve Your <span className="gradient-text">Chair</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Booking is fast and easy on Booksy — pick your service, choose a
            time, and you&apos;re locked in. See you in the chair.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Booksy booking panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <div
              className="relative glass rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-center overflow-hidden"
              style={{ border: "1px solid rgba(214,40,57,0.25)" }}
            >
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(214,40,57,0.22) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-5"
                  style={{
                    background: "rgba(214,40,57,0.12)",
                    border: "1px solid rgba(214,40,57,0.3)",
                    color: "var(--red-light)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--red-light)" }}
                  />
                  Powered by Booksy
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
                >
                  Book in under a minute
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                  Real-time availability, instant confirmation, and easy
                  reminders. Tap below to choose your cut and a time that works
                  for you.
                </p>

                <motion.a
                  href={business.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-base tracking-wide text-white"
                  style={{ background: "var(--red)", boxShadow: "0 6px 24px rgba(214,40,57,0.4)" }}
                  whileHover={{ y: -2, boxShadow: "0 10px 32px rgba(214,40,57,0.55)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Calendar size={18} />
                  Book on Booksy
                  <ArrowUpRight size={18} />
                </motion.a>

                <p className="text-xs text-center mt-4" style={{ color: "var(--muted)" }}>
                  Prefer to talk? Call or text{" "}
                  <a
                    href={business.phoneHref}
                    className="font-medium"
                    style={{ color: "var(--red-light)" }}
                  >
                    {business.phone}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location, contact, hours */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.22 }}
          >
            {contactCards.map(({ icon: Icon, title, content, href }) => (
              <a
                key={title}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex gap-4 items-start glass rounded-xl p-5 transition-colors duration-200 group"
                style={{ border: "1px solid rgba(214,40,57,0.14)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(214,40,57,0.12)",
                    border: "1px solid rgba(214,40,57,0.28)",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--red-light)" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                    {title}
                  </div>
                  {content.map((c) => (
                    <div
                      key={c}
                      className="text-sm transition-colors duration-200 group-hover:text-[var(--red-light)]"
                      style={{ color: "var(--muted)" }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            <div
              className="glass rounded-xl p-5"
              style={{ border: "1px solid rgba(214,40,57,0.14)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(214,40,57,0.12)",
                    border: "1px solid rgba(214,40,57,0.28)",
                  }}
                >
                  <Clock size={18} style={{ color: "var(--red-light)" }} />
                </div>
                <div className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                  Hours of Operation
                </div>
              </div>
              <div className="space-y-2">
                {business.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center text-xs rounded-md px-2 py-1 transition-colors duration-150"
                    style={{
                      color: h.day === today ? "var(--red-light)" : "var(--muted)",
                      fontWeight: h.day === today ? "600" : "400",
                      background: h.day === today ? "rgba(214,40,57,0.08)" : "transparent",
                    }}
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
