const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSee8YaMw13LDwemZoRn1eSyYzGeQ9UZ_X9hRe8Lgvy7YMspIw/formResponse";

const FIELD_IDS = {
  name: "entry.430196529",
  attendance: "entry.877086558",
  plusOne: "entry.1498135098",
};

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

function TeddySuccess() {
  return (
    <svg viewBox="0 0 120 140" className="w-28 h-32 mx-auto" fill="none">
      <circle cx="32" cy="28" r="18" fill="#C4956A" />
      <circle cx="88" cy="28" r="18" fill="#C4956A" />
      <ellipse cx="60" cy="58" rx="38" ry="36" fill="#C4956A" />
      <circle cx="46" cy="50" r="5" fill="#3D2B1F" />
      <circle cx="74" cy="50" r="5" fill="#3D2B1F" />
      <ellipse cx="60" cy="62" rx="6" ry="4.5" fill="#3D2B1F" />
      <path d="M53 67 Q60 75 67 67" stroke="#3D2B1F" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export default function RSVPForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    plusOne: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.attendance) {
      toast.error("Please fill in your name and RSVP!");
      return;
    }

    setSubmitting(true);

    try {
      const form = new FormData();

      form.append(FIELD_IDS.name, formData.name);

      // map your UI values → Google Form EXACT values
      const attendanceValue =
        formData.attendance === "honored"
          ? "Yes,  I'll be there"
          : "No, I can't make it";

      form.append(FIELD_IDS.attendance, attendanceValue);
      form.append(FIELD_IDS.plusOne, formData.plusOne ? "Yes" : "No");

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: form,
      });

      setTimeout(() => setSubmitted(true), 500);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-[2rem] border border-primary/15 bg-white/70 px-6 py-16 text-center shadow-lg backdrop-blur-sm"
            >
              <TeddySuccess />
              <h3 className="text-3xl font-bold mt-4">
                {formData.attendance === "honored"
                  ? "Yay! See you there! 🎉"
                  : "We'll miss you! 🐻"}
              </h3>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="space-y-5 rounded-[2rem] border border-primary/15 bg-white/70 p-6 shadow-lg backdrop-blur-sm sm:p-8"
            >
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Select
                value={formData.attendance}
                onValueChange={(v) => setFormData({ ...formData, attendance: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select RSVP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honored">Yes, I'll be there</SelectItem>
                  <SelectItem value="unable">Can't make it</SelectItem>
                </SelectContent>
              </Select>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-primary text-white rounded-2xl"
              >
                {submitting ? "Sending..." : "Send RSVP"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
