"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide8InterfaceStrategic() {
  return (
    <Section id="slide-8" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24">
          {/* Title and Subtitle */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              The interface has become strategic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white font-normal"
            >
              Where intent becomes execution
            </motion.p>
          </div>

          {/* Main Diagram Placeholder */}
          <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full h-full border-2 border-zinc-700 rounded-2xl bg-zinc-900/40 flex items-center justify-center"
            >
              <div className="text-center px-8">
                <p className="text-zinc-400 text-lg md:text-xl mb-4">
                  Interface Strategy Visualization
                </p>
                <p className="text-zinc-500 text-sm md:text-base">
                  [Graphics Placeholder]
                </p>
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

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          8
        </motion.div>
      </div>
    </Section>
  );
}
