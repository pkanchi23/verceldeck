"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide26DisclosureIPO() {
  return (
    <Section id="slide-26" className="bg-black">
      <div className="relative w-full h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        >
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-6 pb-24">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8"
          >
            What do most companies disclose at IPO?
          </motion.h1>

          {/* Large Centered Disclosure Table Placeholder */}
          <div className="flex items-center justify-center py-4 md:py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="w-[80%] md:w-[85%] h-[400px] md:h-[500px] lg:h-[600px] border border-white rounded-lg flex items-center justify-center bg-transparent"
            >
              <p className="text-white/60 text-base md:text-lg font-light text-center">
                DISCLOSURE_TABLE_PLACEHOLDER
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Footnote Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6"
        >
          <p className="text-white/40 text-xs">
            FOOTNOTE_PLACEHOLDER
          </p>
        </motion.div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">GOLDMAN SACHS</span>
        </div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          26
        </motion.div>
      </div>
    </Section>
  );
}
