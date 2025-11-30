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
          <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px]">
            {/* Grey Stack Layers */}
            {/* Top Layer - ORCHESTRATION */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] h-[60px] md:h-[70px]"
              style={{
                background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                  ORCHESTRATION
                </span>
              </div>
            </motion.div>

            {/* Middle Layer - DEVELOPER TOOLS */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] h-[60px] md:h-[70px]"
              style={{
                background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                  DEVELOPER TOOLS
                </span>
              </div>
            </motion.div>

            {/* Bottom Layer - CORE INFRASTRUCTURE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-[71%] left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] h-[60px] md:h-[70px]"
              style={{
                background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                  CORE INFRASTRUCTURE
                </span>
              </div>
            </motion.div>

            {/* Red Callouts - Left Side (with pulse) */}
            {/* Red Callout 1 - No native AI abstractions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-[5%] left-[2%] md:left-[5%]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.7, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-3 py-2 bg-transparent"
              >
                <p className="text-red-500 text-xs md:text-sm font-medium whitespace-nowrap">
                  No native AI abstractions
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 md:-right-12 w-6 md:w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-9 md:-right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 2 - Siloed, unbundled */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute top-[38%] left-[2%] md:left-[5%]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 2.0, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-3 py-2 bg-transparent max-w-[180px]"
              >
                <p className="text-red-500 text-xs md:text-sm font-medium">
                  Siloed, unbundled, slow feedback loops
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 md:-right-12 w-6 md:w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-9 md:-right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 3 - CPU centric */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute top-[71%] left-[2%] md:left-[5%]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 2.3, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-3 py-2 bg-transparent"
              >
                <p className="text-red-500 text-xs md:text-sm font-medium whitespace-nowrap">
                  CPU centric
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 md:-right-12 w-6 md:w-10 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-9 md:-right-13 w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Pink Wedges - AI Agents and LLMs */}
            {/* AI AGENTS Wedge */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8, duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-[21%] left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] h-[40px] md:h-[45px]"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                  AI AGENTS
                </span>
              </div>
            </motion.div>

            {/* LLMS Wedge */}
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2, duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-[54%] left-1/2 -translate-x-1/2 w-[280px] md:w-[350px] h-[40px] md:h-[45px]"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                transform: 'translateX(-50%) perspective(600px) rotateX(8deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base uppercase tracking-wide">
                  LLMS
                </span>
              </div>
            </motion.div>

            {/* Right Side - Pink Callouts */}
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.0, duration: 0.6 }}
              className="absolute top-[8%] right-[2%] md:right-[8%]"
            >
              <p className="text-pink-400 font-semibold text-sm md:text-base">
                The New AI Wedges
              </p>
            </motion.div>

            {/* Pink Callout 1 - AI AGENTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.2, duration: 0.6 }}
              className="absolute top-[19%] right-[2%] md:right-[8%]"
            >
              <div className="border-2 border-pink-400 rounded-lg px-3 py-2 bg-transparent max-w-[200px]">
                <p className="text-white text-xs md:text-sm">
                  Dynamic, autonomous web workflows
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-8 md:-left-12 w-6 md:w-10 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-9 md:-left-13 w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
            </motion.div>

            {/* Pink Callout 2 - LLMS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.4, duration: 0.6 }}
              className="absolute top-[52%] right-[2%] md:right-[8%]"
            >
              <div className="border-2 border-pink-400 rounded-lg px-3 py-2 bg-transparent max-w-[200px]">
                <p className="text-white text-xs md:text-sm">
                  Context-aware, natural language apps
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-8 md:-left-12 w-6 md:w-10 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-9 md:-left-13 w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
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
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-2xl md:text-3xl font-light text-white/70"
        >
          7
        </motion.div>
      </div>
    </Section>
  );
}
