"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide7StackParadigm() {
  return (
    <Section id="slide-7" className="bg-black">
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
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20"
          >
            The stack wasn't built for this paradigm
          </motion.h1>

          {/* Central Stack Visualization */}
          <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[700px] flex items-center justify-center">
            {/* Center Column - Stack Slabs (40-50% width, centered) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] space-y-12 z-10">
              {/* Slab 1: ORCHESTRATION */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative w-[75%] h-[140px] mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                  transform: 'perspective(600px) rotateX(5deg)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-base md:text-lg uppercase tracking-wide">
                    ORCHESTRATION
                  </span>
                </div>
              </motion.div>

              {/* Slab 2: DEVELOPER TOOLS */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative w-[75%] h-[140px] mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                  transform: 'perspective(600px) rotateX(5deg)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-base md:text-lg uppercase tracking-wide">
                    DEVELOPER TOOLS
                  </span>
                </div>
              </motion.div>

              {/* Slab 3: CORE INFRASTRUCTURE */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative w-[75%] h-[140px] mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                  transform: 'perspective(600px) rotateX(5deg)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-base md:text-lg uppercase tracking-wide">
                    CORE INFRASTRUCTURE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Red Callouts - Left Side (z-30) */}
            {/* Red Callout 1 - No native AI abstractions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-[5%] top-[calc(50%-180px)] z-30"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.3, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[240px]"
              >
                <p className="text-red-500 text-sm md:text-base font-medium whitespace-nowrap">
                  No native AI abstractions
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-12 w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 2 - Siloed, unbundled */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute left-[5%] top-[50%] -translate-y-1/2 z-30"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.5, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[240px] max-w-[280px]"
              >
                <p className="text-red-500 text-sm md:text-base font-medium">
                  Siloed, unbundled, slow feedback loops
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-12 w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 3 - CPU centric */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute left-[5%] top-[calc(50%+180px)] z-30"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.7, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[240px]"
              >
                <p className="text-red-500 text-sm md:text-base font-medium whitespace-nowrap">
                  CPU centric
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-12 w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Pink Wedges - AI Agents and LLMs (z-20) */}
            {/* AI AGENTS Wedge - Between slab 1 and 2 */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
              className="absolute left-1/2 top-[calc(50%-90px)] -translate-x-1/2 w-[33.75%] h-[70px] z-20"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(5deg)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-base md:text-lg uppercase tracking-wide">
                  AI AGENTS
                </span>
              </div>
            </motion.div>

            {/* LLMS Wedge - Between slab 2 and 3 */}
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2.1, duration: 0.6, ease: "easeOut" }}
              className="absolute left-1/2 top-[calc(50%+90px)] -translate-x-1/2 w-[33.75%] h-[70px] z-20"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(5deg)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-base md:text-lg uppercase tracking-wide">
                  LLMS
                </span>
              </div>
            </motion.div>

            {/* Right Side - Pink Callouts (z-30) */}
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="absolute top-[calc(50%-220px)] right-[8%] z-30"
            >
              <p className="text-pink-400 font-semibold text-base md:text-lg">
                The New AI Wedges
              </p>
            </motion.div>

            {/* Pink Callout 1 - AI AGENTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="absolute top-[calc(50%-90px)] right-[8%] -translate-y-1/2 z-30"
            >
              <div className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px]">
                <p className="text-white text-sm md:text-base">
                  Dynamic, autonomous web workflows
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-12 w-10 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-13 w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
            </motion.div>

            {/* Pink Callout 2 - LLMS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="absolute top-[calc(50%+90px)] right-[8%] -translate-y-1/2 z-30"
            >
              <div className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px]">
                <p className="text-white text-sm md:text-base">
                  Context-aware, natural language apps
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-12 w-10 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-13 w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
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
          7
        </motion.div>
      </div>
    </Section>
  );
}
