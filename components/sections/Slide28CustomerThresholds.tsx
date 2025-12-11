"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide28CustomerThresholds() {
  return (
    <Section id="slide-28" className="bg-black">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-8 pb-40">
          <SlideHeader
            title="Deep dive into model builds of key comps for Vercel"
            subtitle="Best-in-class with certain customer thresholds"
            className="mb-4 md:mb-6"
          />

          {/* Two Side-by-Side Placeholder Boxes */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[5%] items-stretch justify-center">
            {/* Left Box - monday.com */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] bg-transparent p-0 border-none h-[320px] md:h-[420px] lg:h-[500px]"
            >
              <div className="flex flex-col items-center h-full">
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <Image
                    src="/Model Builds/Model Build MNDY.png"
                    alt="Monday.com Model"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Box - GitLab */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="flex-1 lg:w-[40%] bg-transparent p-0 border-none h-[320px] md:h-[420px] lg:h-[500px]"
            >
              <div className="flex flex-col items-center h-full">
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <Image
                    src="/Model Builds/Model Build GLTB.png"
                    alt="GitLab Model"
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
            className="mt-8 mb-6"
          >
            <p className="text-white/40 text-xs">

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
          28
        </motion.div>
      </div>
    </Section>
  );
}
