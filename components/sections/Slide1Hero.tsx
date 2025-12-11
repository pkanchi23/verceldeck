"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide1Hero() {
  return (
    <Section id="slide-1" className="bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Grid Container - 95% of viewport, centered */}
        <div className="relative w-[95%] h-[95%] max-w-[1800px]">
          {/* Grid Background Overlay */}
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

          {/* Title Block - positioned in upper-left quadrant */}
          <div className="absolute top-[calc(100%/4*1.5)] left-[calc(100%/6*1)] z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Discussion Materials
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white font-normal mt-16 md:mt-20"
            >
              December 2025
            </motion.p>
          </div>

          {/* Bottom-Middle "Made with" text */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                  "drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))",
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-8 h-8 -mx-1"
            >
              <Image
                src="/V0 Logo.svg"
                alt="v0"
                fill
                className="object-contain scale-125"
              />
            </motion.div>
            <span>. Deployed with</span>
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                  "drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))",
                  "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-24 h-12"
            >
              <Image
                src="/Vercel Logo.svg"
                alt="Vercel"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
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

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          1
        </motion.div>
      </div>
    </Section >
  );
}
