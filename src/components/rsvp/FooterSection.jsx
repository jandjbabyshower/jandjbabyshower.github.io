import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative overflow-hidden stripe-bg-strong py-16" ref={ref}>
      <div className="absolute inset-0 bg-primary/80 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl mx-auto px-6 text-center"
      >
        <div className="rounded-[2rem] border border-white/20 bg-white/10 px-6 py-8 shadow-xl backdrop-blur-sm">
          <p className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">
            Joanne &amp; Jin's Baby Shower
          </p>
          <p className="font-body text-primary-foreground/80 mb-1">
            June 27, 2026 · 2:00–5:00 PM
          </p>
          <p className="font-body text-primary-foreground/70 text-sm mb-6">
            361 Stagg St. 4th FL RM 408, East Williamsburg
          </p>

          <div className="w-16 h-px bg-primary-foreground/30 mx-auto mb-6" />

          <p className="font-body text-xs text-primary-foreground/50">
            We Can Bearly Wait to See You! 🐻 · {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
