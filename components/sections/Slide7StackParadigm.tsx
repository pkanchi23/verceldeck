"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide7StackParadigm() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [animationsComplete, setAnimationsComplete] = useState(false);

  // Remove setTimeout to prevent premature "completion" before the slide is even viewed.
  // Instead, we will trigger setAnimationsComplete(true) after the last element (Heading) finishes.

  const getTransition = (entranceDelay: number, entranceDuration: number) => {
    if (animationsComplete) {
      return { duration: 0.2, ease: "easeOut" as const };
    }
    return { delay: entranceDelay, duration: entranceDuration, ease: "easeOut" as const };
  };

  const glowImage = { filter: "brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.3))" };
  const glowImageTransition = { duration: 0.2 };

  const glowRedBox = { boxShadow: "0 0 15px rgba(239, 68, 68, 0.6)", scale: 1.05, borderColor: "rgba(239, 68, 68, 1)" };
  const glowPinkBox = { boxShadow: "0 0 15px rgba(244, 114, 182, 0.6)", scale: 1.05, borderColor: "rgba(244, 114, 182, 1)" };

  return (
    <Section id="slide-7" className="bg-black">
      <div className="relative w-full h-full">
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
          <div className="relative w-full max-w-6xl mx-auto flex-grow flex flex-col items-center justify-center -mt-16 md:-mt-24">
            {/* Stack Images Container */}
            <div className="relative w-full md:w-[70%] flex flex-col items-center z-10 scale-[0.85] origin-center">

              {/* 1. Orchestration (Top) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  ...(activeHighlight === 'orchestration' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" })
                }}
                transition={getTransition(0.4, 0.6)}
                whileHover={{ x: -15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('orchestration')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] z-50 cursor-pointer"
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
                animate={activeHighlight === 'agents' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                viewport={{ once: true }}
                transition={getTransition(1.8, 1.0)}
                whileHover={{ x: 15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('agents')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-40 cursor-pointer"
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
                animate={{
                  opacity: 1,
                  y: 0,
                  ...(activeHighlight === 'devtools' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" })
                }}
                transition={getTransition(0.5, 0.6)}
                whileHover={{ x: -15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('devtools')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-30 cursor-pointer"
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
                animate={activeHighlight === 'llms' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                viewport={{ once: true }}
                transition={getTransition(1.8, 1.0)}
                whileHover={{ x: 15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('llms')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-20 cursor-pointer"
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
                animate={{
                  opacity: 1,
                  y: 0,
                  ...(activeHighlight === 'infra' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" })
                }}
                transition={getTransition(0.6, 0.6)}
                whileHover={{ x: -15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('infra')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-10 cursor-pointer"
              >
                <Image
                  src="/Slide 7 Platform Slide/Core Infrastructure Platform.png"
                  alt="Core Infrastructure Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* 6. GPU Platform (Slides in from right, lowest) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={activeHighlight === 'gpus' ? glowImage : { filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                viewport={{ once: true }}
                transition={getTransition(1.8, 1.0)}
                whileHover={{ x: 15, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setActiveHighlight('gpus')}
                onHoverEnd={() => setActiveHighlight(null)}
                className="relative w-full h-[200px] md:h-[240px] -mt-32 md:-mt-40 z-0 cursor-pointer"
              >
                <Image
                  src="/Slide 7 Platform Slide/GPUs platform.png"
                  alt="GPUs Platform"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Red Callouts - Left Side (z-30) */}
            {/* Red Callout 1 - Orchestration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[26%] z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={activeHighlight === 'orchestration' ? glowRedBox : { scale: 1, opacity: 1 }}
                whileHover={glowRedBox}
                onHoverStart={() => setActiveHighlight('orchestration')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px] cursor-pointer"
              >
                <p className="text-red-500 text-sm font-medium whitespace-nowrap">
                  No native AI abstractions
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-[2.25rem] w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 2 - Developer Tools */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[45%] -translate-y-1/2 z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={activeHighlight === 'devtools' ? glowRedBox : { scale: 1, opacity: 1 }}
                whileHover={glowRedBox}
                onHoverStart={() => setActiveHighlight('devtools')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px] max-w-[260px] cursor-pointer"
              >
                <p className="text-red-500 text-sm font-medium">
                  Siloed, unbundled, slow feedback loops
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-red-500" />
              <div className="absolute top-1/2 -right-[2.25rem] w-2 h-2 rounded-full bg-red-500 -translate-y-1/2" />
            </motion.div>

            {/* Red Callout 3 - Core Infra */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute left-[-2%] md:left-[0%] top-[61%] z-30 hidden md:flex justify-end w-[260px]"
            >
              <motion.div
                animate={activeHighlight === 'infra' ? glowRedBox : { scale: 1, opacity: 1 }}
                whileHover={glowRedBox}
                onHoverStart={() => setActiveHighlight('infra')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-red-500 rounded-lg px-4 py-2 bg-black/60 min-w-[200px] cursor-pointer"
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
              onAnimationComplete={() => setAnimationsComplete(true)}
              className="absolute top-[28%] right-[3.5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <p className="text-pink-400 font-bold text-xl md:text-2xl">
                The New AI Platforms
              </p>
            </motion.div>

            {/* Pink Callout 1 - AI AGENTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 3.3, duration: 0.6 }}
              className="absolute top-[37%] right-[5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <motion.div
                animate={activeHighlight === 'agents' ? glowPinkBox : { scale: 1, opacity: 1 }}
                whileHover={glowPinkBox}
                onHoverStart={() => setActiveHighlight('agents')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px] cursor-pointer"
              >
                <p className="text-pink-400 text-sm">
                  Dynamic, autonomous web workflows
                </p>
              </motion.div>
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
              className="absolute top-[54%] right-[5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <motion.div
                animate={activeHighlight === 'llms' ? glowPinkBox : { scale: 1, opacity: 1 }}
                whileHover={glowPinkBox}
                onHoverStart={() => setActiveHighlight('llms')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px] cursor-pointer"
              >
                <p className="text-pink-400 text-sm">
                  Context-aware, natural language apps
                </p>
              </motion.div>
              {/* Connector line */}
              <div className="absolute top-1/2 -left-8 w-8 h-px bg-pink-400" />
              <div className="absolute top-1/2 -left-[2.25rem] w-2 h-2 rounded-full bg-pink-400 -translate-y-1/2" />
            </motion.div>

            {/* Pink Callout 3 - GPUs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 3.3, duration: 0.6 }}
              className="absolute top-[71%] right-[5%] -translate-y-1/2 z-30 hidden md:block"
            >
              <motion.div
                animate={activeHighlight === 'gpus' ? glowPinkBox : { scale: 1, opacity: 1 }}
                whileHover={glowPinkBox}
                onHoverStart={() => setActiveHighlight('gpus')}
                onHoverEnd={() => setActiveHighlight(null)}
                transition={{ duration: 0.2 }}
                className="border-2 border-pink-400 rounded-lg px-4 py-2 bg-black/60 max-w-[220px] cursor-pointer"
              >
                <p className="text-pink-400 text-sm">
                  Specialized high-performance hardware
                </p>
              </motion.div>
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
