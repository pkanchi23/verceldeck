"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide13AImoment() {
  return (
    <Section id="slide-13" className="bg-black">
      <div className="relative w-full h-screen">
        {/* Top-Right Logo (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end z-20"
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-24 flex flex-col h-full pointer-events-none">
          <SlideHeader
            title="The only platform built for this AI moment"
            className="mb-8 md:mb-12 pointer-events-auto"
          />

          {/* Central Content Area - Entire Graph */}
          <div className="flex items-center justify-center py-4 md:py-8 flex-1 -mt-6 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1.1 }} // Increased scale to 1.1
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="relative max-h-[720px]"
            >
              <Image
                src="/Slide 13 Graph Quadrants.png/Entire Graph.png"
                alt="AI Moment Graph"
                width={1000}
                height={1000}
                className="w-auto h-auto max-w-full max-h-[720px] object-contain"
              />
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
          13
        </motion.div>
      </div>
    </Section>
  );
}
