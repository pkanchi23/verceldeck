"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";



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

import { useState } from "react";

export default function Slide23GrowthAlgorithm() {
  const [hasEntered, setHasEntered] = useState(false);
  return (
    <Section id="slide-23" className="bg-black">
      <div className="relative w-full h-full">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-10 pb-12">
          <SlideHeader
            title="The Vercel Growth Algorithm"
            subtitle="From Idea → Prototype → Deployed App → Scaled Enterprise Adoption"
            className="mb-6 md:mb-8 relative z-30"
          />

          {/* Total Funnel Image */}
          <div className="w-full flex justify-center mb-8 md:mb-12 -mt-4 md:-mt-10 relative z-10">
            <div className="relative w-full max-w-[1000px] h-[280px] md:h-[480px]">
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
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(255, 255, 255, 0.5)",
              transition: { duration: 0.1 }
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={
              hasEntered
                ? { duration: 0.1 }
                : { delay: 0.8, duration: 0.6 }
            }
            onAnimationComplete={() => setHasEntered(true)}
            className="relative w-full -mt-16 md:-mt-14 bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 md:p-4 text-center z-20 cursor-pointer transition-colors"
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
