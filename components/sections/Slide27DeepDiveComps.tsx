"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide27DeepDiveComps() {
  return (
    <Section id="slide-27" className="bg-black">
      <div className="relative w-full min-h-screen">
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
          {/* Header Section */}
          <div className="mb-4 md:mb-6">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              Deep dive into model builds of key comps for Vercel
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl font-medium text-white/70"
            >
              Best-in-class multi-product companies
            </motion.h2>
          </div>

          {/* Two Side-by-Side Placeholder Boxes */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-stretch justify-center">
            {/* Left Box - Datadog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] border border-white rounded-lg p-4 bg-transparent"
              style={{ minHeight: "200px" }}
            >
              {/* Datadog Logo Placeholder at Top */}
              <div className="flex flex-col items-center h-full">
                <div className="w-[120px] h-[40px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center mb-3">
                  <span className="text-zinc-500 text-xs">DATADOG_LOGO</span>
                </div>

                {/* Main Section Placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm text-center">
                    DATADOG_SECTION_PLACEHOLDER
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Box - CrowdStrike */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] border border-white rounded-lg p-4 bg-transparent"
              style={{ minHeight: "200px" }}
            >
              {/* CrowdStrike Logo Placeholder at Top */}
              <div className="flex flex-col items-center h-full">
                <div className="w-[120px] h-[40px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center mb-3">
                  <span className="text-zinc-500 text-xs">CROWDSTRIKE_LOGO</span>
                </div>

                {/* Main Section Placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm text-center">
                    CROWDSTRIKE_SECTION_PLACEHOLDER
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Footnote Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12"
          >
            <p className="text-white/40 text-xs">
              FOOTNOTE_PLACEHOLDER
            </p>
          </motion.div>
        </div>

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
          27
        </motion.div>
      </div>
    </Section>
  );
}
