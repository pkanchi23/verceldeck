"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide7StackParadigm() {
  return (
    <Section id="slide-7" className="bg-black">
      <div className="relative w-full h-full overflow-hidden">
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

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 h-full flex flex-col">
          <SlideHeader
            title="The stack wasn't built for this paradigm"
            className="px-8 flex-shrink-0 mb-4"
          />

          {/* Central Stack Visualization */}
          <div className="relative w-full max-w-6xl mx-auto flex-grow flex flex-col items-center justify-center">
            {/* Stack Images Container */}
            <div className="relative w-full md:w-[70%] flex flex-col items-center z-10 scale-[0.85] origin-center">

              {/* 1. Orchestration (Top) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative w-full h-[200px] md:h-[240px] z-50"
              >
                <Image
                  src="/Slide 7 Platform Slide/Orchestration Platform.png"
                  alt="Orchestration Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 2. AI Agents (Slides in from right) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 1.0, ease: "easeOut" }}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-40"
              >
                <Image
                  src="/Slide 7 Platform Slide/AI Agents Platform.png"
                  alt="AI Agents Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 3. Developer Tools */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-30"
              >
                <Image
                  src="/Slide 7 Platform Slide/Developer Tools Platfornm.png"
                  alt="Developer Tools Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 4. LLMs (Slides in from right) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 1.0, ease: "easeOut" }}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-20"
              >
                <Image
                  src="/Slide 7 Platform Slide/LLMs platform.png"
                  alt="LLMs Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 5. Core Infrastructure (Bottom) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-10"
              >
                <Image
                  src="/Slide 7 Platform Slide/Core Infrastructure Platform.png"
                  alt="Core Infrastructure Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Red Callouts - Left Side (z-30) */}
            {/* Red Callout 1 - No native AI abstractions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[30%] z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.3, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px]"
              >
                <p className="text-red-500 text-sm font-medium whitespace-nowrap">
                  No native AI abstractions
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-[2.25rem] w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 2 - Siloed, unbundled */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[50%] -translate-y-1/2 z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.5, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px] max-w-[260px]"
              >
                <p className="text-red-500 text-sm font-medium">
                  Siloed, unbundled, slow feedback loops
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-[2.25rem] w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 3 - CPU centric */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[64%] z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ delay: 1.7, duration: 0.6, times: [0, 0.5, 1] }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px]"
              >
                <p className="text-red-500 text-sm font-medium whitespace-nowrap">
                  CPU centric
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-[2.25rem] w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Right Side - Pink Callouts (z-30) */}
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 4.4, duration: 0.6 }}
              className="absolute top-[28%] right-[8%] -translate-y-1/2 z-30 hidden md:block"
            >
              <p className="text-pink-400 font-semibold text-base md:text-lg">
                The New AI Platforms
              </p>
            </motion.div>

            {/* Pink Callout 1 - AI AGENTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 3.3, duration: 0.6 }}
              className="absolute top-[38%] right-[5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <div className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px]">
                <p className="text-pink-400 text-sm">
                  Dynamic, autonomous web workflows
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-8 w-8 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-[2.25rem] w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
            </motion.div>

            {/* Pink Callout 2 - LLMS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 3.3, duration: 0.6 }}
              className="absolute top-[61%] right-[5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <div className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px]">
                <p className="text-pink-400 text-sm">
                  Context-aware, natural language apps
                </p>
              </div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-8 w-8 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-[2.25rem] w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
            </motion.div>
          </div>
        </div>

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
