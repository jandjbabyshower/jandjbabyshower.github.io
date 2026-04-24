import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";

const detailItems = [
  { icon: Calendar, label: "Date", value: "June 27, 2026", emoji: "📅" },
  { icon: Clock, label: "Time", value: "2:00 PM – 5:00 PM", emoji: "⏰" },
  { icon: MapPin, label: "Location", value: "East Williamsburg", emoji: "📍" },
  { icon: Heart, label: "Address", value: "361 Stagg St. 4th FL RM 408", emoji: "🏠" },
];

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="details" className="relative py-20 sm:py-28 overflow-hidden stripe-bg" ref={ref}>
      <div className="absolute inset-0 bg-background/85 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary font-semibold mb-3">
            Mark Your Calendar
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground">
            The Details 🎀
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-lg">
            Come celebrate the little one on the way!
          </p>
        </motion.div>

        {/* Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {detailItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-card border-2 border-primary/15 hover:border-primary/35 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl flex-shrink-0">{item.emoji}</div>
              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-primary font-semibold mb-1">
                  {item.label}
                </p>
                <p className="font-heading text-xl font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cute message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 p-6 rounded-3xl bg-primary/8 border-2 border-primary/20 text-center"
        >
          <p className="font-body text-base text-foreground/80 leading-relaxed">
            🐻 We're so excited to celebrate this new little cub with you!
            Please join us for an afternoon filled with love, laughter, and lots of cuddles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}