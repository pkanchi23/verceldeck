"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide1Hero() {
  return (
    <Section
      id="slide-1"
      className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950"
    >
      <div className="flex flex-col justify-between min-h-[70vh]">
        {/* Top: Supertitle */}
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-12">
            SLIDE_1_SUPERTITLE
          </p>
        </div>

        {/* Center: Main Title & Subtitle */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold leading-tight text-slate-50 mb-6"
          >
            SLIDE_1_TITLE
          </motion.h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed">
            SLIDE_1_SUBTITLE
          </p>

          {/* Meta Tag */}
          <div className="mt-8">
            <span className="inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
              SLIDE_1_META
            </span>
          </div>
        </div>

        {/* Bottom: Scroll Hint */}
        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-zinc-500"
          >
            Scroll to begin ↓
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
