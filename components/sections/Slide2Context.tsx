"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide2Context() {
  return (
    <Section id="slide-2" className="bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Grid Container - 95% of viewport, centered */}
        <div className="relative w-[95%] h-[95%] max-w-[1800px]">
          {/* Grid Background Overlay - 6 columns x 4 rows */}
          {/* <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: 'calc(100% / 6) calc(100% / 4)',
            }}
          /> */}

          {/* Content Area - positioned in upper-left quadrant */}
          <div className="absolute top-[calc(100%/4*1)] left-[calc(100%/6*1)] z-10 max-w-[70%]">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20"
            >
              Table of Contents
            </motion.h1>

            {/* TOC Entries */}
            <div className="space-y-12 md:space-y-16">
              {/* Entry 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-6"
              >
                {/* Number Box */}
                <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl font-semibold text-white">
                    1
                  </span>
                </div>
                {/* Title */}
                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-white">
                  Introducing the AI Cloud
                </h2>
              </motion.div>

              {/* Entry 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center gap-6"
              >
                {/* Number Box */}
                <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl font-semibold text-white">
                    2
                  </span>
                </div>
                {/* Title */}
                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-white">
                  Model Build Framework
                </h2>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Top-Right Logo (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Vercel Logo.svg"
              alt="Vercel Logo"
              fill
              className="object-contain object-right"
            />
          </div>
        </motion.div>

        {/* Bottom-Left Logo (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] flex items-center justify-start"
        >
          <div className="relative w-full h-full">
            <Image
              src="/Goldman Sachs Logo.svg"
              alt="Goldman Sachs Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </motion.div>

        {/* Page Number - outside grid, bottom-right of viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          2
        </motion.div>
      </div>
    </Section>
  );
}
