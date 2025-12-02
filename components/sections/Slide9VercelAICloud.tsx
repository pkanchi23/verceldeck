"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide9VercelAICloud() {
  return (
    <Section id="slide-9" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
          {/* Header Section */}
          <div className="mb-8 md:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3"
            >
              Enter the Vercel AI cloud
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-white font-normal"
            >
              A new platform for the AI-native loop
            </motion.p>
          </div>

          {/* Central Cloud Graphic Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-[50%] mx-auto mb-10 md:mb-12 mt-6 md:mt-8"
          >
            <div className="aspect-[16/9] border-2 border-zinc-700 rounded-2xl bg-zinc-900/40 flex items-center justify-center">
              <p className="text-zinc-400 text-base md:text-lg">
                [ CLOUD GRAPHIC GOES HERE ]
              </p>
            </div>
          </motion.div>

          {/* Bottom Three Component Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Box 1 - Design → Deploy → Monitor → Evolve */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="border border-white rounded-2xl p-4 md:p-5 bg-black/40 flex items-center gap-3"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon Placeholder */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 border border-white/40 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 border-2 border-white/60 rounded" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-white font-bold text-sm md:text-base leading-relaxed">
                  Design → Deploy → Monitor → Evolve
                </p>
              </div>
            </motion.div>

            {/* Box 2 - Natural Language UI, etc. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="border border-white rounded-2xl p-6 md:p-8 bg-black/40 flex items-start gap-4"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon Placeholder */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 border border-white/40 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7">
                  <div className="w-full h-3 border border-white/60 rounded-sm mb-1" />
                  <div className="w-4 h-3 border border-white/60 rounded-full ml-auto" />
                </div>
              </div>

              {/* Text Block with Bullets */}
              <div className="flex-1">
                <ul className="space-y-2 text-white text-sm md:text-base">
                  <li>• Supports natural language UI</li>
                  <li>• Usage-based compute</li>
                  <li>• Observability and secure by default</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 3 - Developers Delight, etc. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="border border-white rounded-2xl p-6 md:p-8 bg-black/40 flex items-start gap-4"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon Placeholder */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 border border-white/40 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7">
                  <div className="w-3 h-4 border border-white/60 rounded-sm" />
                  <div className="w-4 h-2 border border-white/60 ml-1 mt-0.5" />
                </div>
              </div>

              {/* Text Block with Bullets */}
              <div className="flex-1">
                <ul className="space-y-2 text-white text-sm md:text-base">
                  <li>• Developers delight</li>
                  <li>• Product innovation and enterprise control</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

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
          9
        </motion.div>
      </div>
    </Section>
  );
}
