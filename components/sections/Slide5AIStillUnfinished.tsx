"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide5AIStillUnfinished() {
  return (
    <Section id="slide-5" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
          {/* Headline + Subheadline */}
          <div className="mb-10 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5"
            >
              But AI still feels...unfinished
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white font-normal"
            >
              AI is transformative, but most teams struggle to ship with it
            </motion.p>
          </div>

          {/* This block mirrors the original slide: central AI cube graphic with surrounding problem labels.
              The placeholder box should be replaced with the actual graphic, while the red labels stay as animated text. */}
          <div className="relative mt-10 md:mt-16 w-full max-w-6xl mx-auto h-[420px] md:h-[480px]">
            {/* TODO: Replace this placeholder box with the actual AI cube graphic (SVG/image) matching the deck. */}
            {/* Central Cube Graphic Placeholder */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[320px] aspect-[4/3] border border-zinc-700/70 rounded-xl bg-zinc-900/40 flex items-center justify-center">
              <p className="text-xs md:text-sm text-zinc-400 text-center px-4">
                AI graphic placeholder
              </p>
            </div>

            {/* Red Label 1: Top-Right - "Data Siloed" */}
            <motion.div
              className="absolute top-6 right-4 md:top-6 md:right-16 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                x: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
            >
              <p className="text-red-500 font-semibold text-lg md:text-xl">
                Data Siloed
              </p>
              <p className="text-red-400 text-xs md:text-sm mt-1">
                Multitude of Tools to Stich Things Together
              </p>
            </motion.div>

            {/* Red Label 2: Right-Center - "LLMs" */}
            <motion.div
              className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                x: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
            >
              <p className="text-red-500 font-semibold text-lg md:text-xl">
                LLMs
              </p>
              <p className="text-red-400 text-xs md:text-sm mt-1">
                Painful Integration and Orchestration
              </p>
            </motion.div>

            {/* Red Label 3: Bottom-Right - "Fragmented Stacks" */}
            <motion.div
              className="absolute bottom-8 right-4 md:bottom-10 md:right-16 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                x: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
            >
              <p className="text-red-500 font-semibold text-lg md:text-xl">
                Fragmented Stacks
              </p>
              <p className="text-red-400 text-xs md:text-sm mt-1">
                Slow Iteration
              </p>
            </motion.div>

            {/* Red Label 4: Left-Center - "Vibe Coding Apps" */}
            <motion.div
              className="absolute top-1/3 left-4 md:left-14 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ y: [0, -7, 0], x: [0, 5, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.7 },
                y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                x: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
            >
              <p className="text-red-500 font-semibold text-lg md:text-xl">
                Vibe Coding Apps
              </p>
              <p className="text-red-400 text-xs md:text-sm mt-1">
                Can't Ship to Enterprise Production
              </p>
            </motion.div>

            {/* Red Label 5: Bottom-Left - "Dynamic Rendering" */}
            <motion.div
              className="absolute bottom-10 left-4 md:bottom-12 md:left-14 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                y: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                x: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              }}
            >
              <p className="text-red-500 font-semibold text-lg md:text-xl">
                Dynamic Rendering
              </p>
              <p className="text-red-400 text-xs md:text-sm mt-1">
                Poor UI/UX Latency
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-2xl md:text-3xl font-light text-white/70"
        >
          5
        </motion.div>
      </div>
    </Section>
  );
}
