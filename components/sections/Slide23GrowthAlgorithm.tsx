"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";



// Background Icon Component
const BackgroundIcon = ({ x, y, delay }: { x: string; y: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03, y: [0, -5, 0] }}
      transition={{
        opacity: { delay, duration: 1 },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute text-white/10 text-6xl font-bold pointer-events-none"
      style={{ left: x, top: y }}
    >
      AI
    </motion.div>
  );
};

export default function Slide23GrowthAlgorithm() {
  return (
    <Section id="slide-23" className="bg-black">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Icons */}
        <BackgroundIcon x="10%" y="20%" delay={0.2} />
        <BackgroundIcon x="25%" y="60%" delay={0.4} />
        <BackgroundIcon x="50%" y="15%" delay={0.6} />
        <BackgroundIcon x="70%" y="50%" delay={0.8} />
        <BackgroundIcon x="85%" y="25%" delay={1.0} />

        {/* Top-Right Logo (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end z-10"
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-10 pb-16">
          {/* Header Section */}
          <div className="mb-6 md:mb-8 relative z-30">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-left"
            >
              The Vercel Growth Algorithm
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-base lg:text-lg font-bold text-white text-left"
            >
              From Idea → Prototype → Deployed App → Scaled Enterprise Adoption
            </motion.h2>
          </div>

          {/* Total Funnel Image */}
          <div className="w-full flex justify-center mb-0 -mt-12 md:-mt-24 relative z-10">
            <div className="relative w-full max-w-[1400px] h-[400px] md:h-[700px]">
              <Image
                src="/Slide 23 Funnel Sections.png/Total Funnel.png"
                alt="Vercel Growth Funnel"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="relative w-full -mt-24 bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 md:p-4 text-center z-20"
          >
            <p className="text-white text-sm md:text-base lg:text-lg font-bold">
              Top of funnel grows fast. Platform monetization compounds are huge.
            </p>
          </motion.div>
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
          23
        </motion.div>
      </div>
    </Section>
  );
}
