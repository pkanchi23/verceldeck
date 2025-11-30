"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide1Hero() {
  return (
    <Section id="slide-1" className="bg-black">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Grid Container - 95% of viewport, centered */}
        <div className="relative w-[95vw] h-[95vh] max-w-[1800px]">
          {/* Grid Background Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: 'calc(100% / 6) calc(100% / 4)',
            }}
          />

          {/* Title Block - positioned in upper-left quadrant */}
          <div className="absolute top-[calc(100%/4*1.5)] left-[calc(100%/6*1)] z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Discussion Materials
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white font-normal mt-16 md:mt-20"
            >
              September 2025
            </motion.p>
          </div>

          {/* Top-Right Logo Placeholder (Vercel) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-0 right-0 w-[140px] h-[40px] border border-white/20 rounded"
            style={{
              backgroundColor: 'transparent',
            }}
          />

          {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-0 left-0 w-[140px] h-[40px] border border-white/20 rounded"
            style={{
              backgroundColor: 'transparent',
            }}
          />
        </div>

        {/* Page Number - outside grid, bottom-right of viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-6 right-6 text-sm md:text-base font-light text-white/60"
        >
          1
        </motion.div>
      </div>
    </Section>
  );
}
