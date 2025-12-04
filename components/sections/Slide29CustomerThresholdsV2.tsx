"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide29CustomerThresholdsV2() {
  return (
    <Section id="slide-29" className="bg-black">
      <div className="relative w-full h-screen">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-6 pb-24">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              Deep dive into model builds of key comps for Vercel
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl font-medium text-white/70"
            >
              Best-in-class with certain customer thresholds
            </motion.h2>
          </div>

          {/* Two Side-by-Side Placeholder Boxes */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-stretch justify-center">
            {/* Left Box - Cloudflare */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] bg-transparent p-0 border-none h-[360px] md:h-[450px] lg:h-[540px]"
            >
              <div className="flex flex-col items-center h-full">
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <Image
                    src="/Model Builds/Model Build NET.png"
                    alt="Cloudflare Model"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Box - Figma */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] bg-transparent p-0 border-none h-[360px] md:h-[450px] lg:h-[540px]"
            >
              <div className="flex flex-col items-center h-full">
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <Image
                    src="/Model Builds/Model Build FIG.png"
                    alt="Figma Model"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Footnote Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12"
          >
            <p className="text-white/40 text-xs">
              FOOTNOTE_PLACEHOLDER
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
          29
        </motion.div>
      </div>
    </Section>
  );
}
