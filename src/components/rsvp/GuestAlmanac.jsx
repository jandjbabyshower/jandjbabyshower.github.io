const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { useQuery } from "@tanstack/react-query";
import BearAvatar from "./BearAvatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function GuestAlmanac() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { data: rsvps = [] } = useQuery({
    queryKey: ["rsvps"],
    queryFn: () => db.entities.RSVP.filter({ attendance: "honored" }, "-created_date", 50),
  });

  if (rsvps.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 overflow-hidden stripe-bg" ref={ref}>
      <div className="absolute inset-0 bg-background/85 pointer-events-none" />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary font-semibold mb-3">
              Who's Coming
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              The Cub Club 🐻
            </h2>
          </motion.div>
        </div>

        {/* Scrolling bear cards */}
        <div className="relative overflow-x-auto">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 px-8 py-4 w-max"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <TooltipProvider delayDuration={200}>
              {rsvps.map((rsvp, i) => (
                <motion.div
                  key={rsvp.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-card border-2 border-primary/15 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer min-w-[90px]">
                        <BearAvatar name={rsvp.name} size={52} />
                        <span className="font-body text-xs font-semibold text-foreground text-center whitespace-nowrap">
                          {rsvp.name.split(" ")[0]}
                        </span>
                        {rsvp.guest_count > 0 && (
                          <span className="font-body text-xs text-primary font-medium">
                            +{rsvp.guest_count}
                          </span>
                        )}
                      </div>
                    </TooltipTrigger>
                    {rsvp.message && (
                      <TooltipContent side="top" className="max-w-[180px] bg-foreground text-background font-body text-sm p-3 rounded-2xl">
                        <p className="italic">"{rsvp.message}"</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center font-body text-muted-foreground mt-6 text-sm"
        >
          <span className="font-heading text-2xl text-primary font-bold">{rsvps.length}</span>
          <span className="ml-2">friend{rsvps.length !== 1 ? "s" : ""} confirmed 🎉</span>
        </motion.p>
      </div>
    </section>
  );
}