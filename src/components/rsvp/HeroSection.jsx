import React from "react";
import { motion } from "framer-motion";

// Cute teddy bear SVG
function TeddyBear({ className = "" }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none">
      {/* Ears */}
      <circle cx="32" cy="28" r="18" fill="#C4956A" />
      <circle cx="88" cy="28" r="18" fill="#C4956A" />
      <circle cx="32" cy="28" r="11" fill="#D4A574" />
      <circle cx="88" cy="28" r="11" fill="#D4A574" />
      {/* Head */}
      <ellipse cx="60" cy="58" rx="38" ry="36" fill="#C4956A" />
      {/* Face shading */}
      <ellipse cx="60" cy="68" rx="22" ry="18" fill="#D4A574" opacity="0.6" />
      {/* Eyes */}
      <circle cx="46" cy="50" r="5" fill="#3D2B1F" />
      <circle cx="74" cy="50" r="5" fill="#3D2B1F" />
      <circle cx="47.5" cy="48.5" r="1.8" fill="white" />
      <circle cx="75.5" cy="48.5" r="1.8" fill="white" />
      {/* Nose */}
      <ellipse cx="60" cy="62" rx="6" ry="4.5" fill="#3D2B1F" />
      {/* Mouth */}
      <path d="M54 67 Q60 73 66 67" stroke="#3D2B1F" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="60" cy="108" rx="30" ry="28" fill="#C4956A" />
      {/* Tummy */}
      <ellipse cx="60" cy="108" rx="18" ry="16" fill="#D4A574" opacity="0.7" />
      {/* Arms */}
      <ellipse cx="22" cy="100" rx="12" ry="18" fill="#C4956A" transform="rotate(-15 22 100)" />
      <ellipse cx="98" cy="100" rx="12" ry="18" fill="#C4956A" transform="rotate(15 98 100)" />
      {/* Legs */}
      <ellipse cx="44" cy="132" rx="12" ry="9" fill="#C4956A" />
      <ellipse cx="76" cy="132" rx="12" ry="9" fill="#C4956A" />
      {/* Bow tie */}
      <path d="M48 88 L55 94 L48 100 Z" fill="#4A7A5A" />
      <path d="M72 88 L65 94 L72 100 Z" fill="#4A7A5A" />
      <circle cx="60" cy="94" r="4" fill="#3D6B4A" />
    </svg>
  );
}

function InviteCard() {
  return (
    <div className="relative w-72 sm:w-80 rounded-[2rem] bg-card p-4 shadow-2xl border border-primary/15">
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-[2rem] bg-foreground/10 blur-sm" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/10 bg-gradient-to-b from-[#fff9ef] via-[#f8f4e7] to-[#eef2e6] p-6">
        <div className="absolute -top-10 -right-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />

        <div className="relative text-center">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/80">
            Baby Shower
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
            Joanne &amp; Jin
          </h2>
          <p className="mt-2 font-body text-sm text-foreground/65">
            We Can Bearly Wait
          </p>

          <div className="my-6 flex justify-center">
            <TeddyBear className="h-28 w-24" />
          </div>

          <div className="space-y-2 rounded-[1.25rem] bg-white/70 px-4 py-4 backdrop-blur-sm">
            <p className="font-heading text-xl font-semibold text-primary">
              June 27, 2026
            </p>
            <p className="font-body text-sm text-foreground/75">
              2:00 PM to 5:00 PM
            </p>
            <p className="font-body text-sm text-foreground/75">
              East Williamsburg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden stripe-bg-strong flex flex-col items-center justify-center py-12 px-4">
      {/* Cream overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

        {/* Left: Invitation Image */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <InviteCard />
        </motion.div>

        {/* Right: Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="rounded-[2rem] border border-primary/15 bg-white/65 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-8">
            {/* Floating Teddy */}
            <motion.div
              className="inline-block mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <TeddyBear className="w-24 h-28 mx-auto lg:mx-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/15 bg-white/70 px-5 py-2 font-body text-sm font-semibold uppercase tracking-[0.25em] text-primary shadow-sm backdrop-blur-sm lg:justify-start"
            >
              You're invited!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3"
            >
              We Can{" "}
              <span className="text-primary italic">Bearly</span>{" "}
              Wait!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="font-body text-xl text-muted-foreground mb-2"
            >
              Join us for
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-1"
            >
              Joanne &amp; Jin's
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="font-body text-lg text-foreground/70 mb-8"
            >
              Baby Shower 🐻
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                🐾 RSVP Now
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground font-body font-semibold text-lg rounded-full border-2 border-primary/30 hover:border-primary/60 transition-colors duration-300"
              >
                Event Details
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
