"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide21ModelBuildFramework() {
  return (
    <Section id="slide-21" className="bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
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

        {/* Center Title */}
        <div className="px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center">
            Model Build Framework
          </h1>
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
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          21
        </div>
      </div>
    </Section>
  );
}
