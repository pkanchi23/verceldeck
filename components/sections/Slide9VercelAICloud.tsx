"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide9VercelAICloud() {
  return (
    <Section id="slide-9" className="bg-black">
      <div className="relative w-full min-h-screen">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
          <SlideHeader
            title="Enter the Vercel AI cloud"
            subtitle="A new platform for the AI-native loop"
            className="mb-8 md:mb-10"
          />

          {/* Central Cloud Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-[40%] mx-auto mb-10 md:mb-12 mt-6 md:mt-8"
          >
            <motion.div
              className="relative aspect-[16/9]"
              animate={{
                filter: [
                  "drop-shadow(0 0 60px rgba(255, 255, 255, 0.4))",
                  "drop-shadow(0 0 100px rgba(255, 255, 255, 0.6))",
                  "drop-shadow(0 0 60px rgba(255, 255, 255, 0.4))",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/Slide 9/Vercel Cloud.png"
                alt="Vercel AI Cloud"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Three Component Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Box 1 - Design → Deploy → Monitor → Evolve */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="border border-white rounded-2xl p-6 md:p-8 bg-black/40 flex items-center gap-3"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 relative">
                <Image
                  src="/Slide 9/Design-> SVG.svg"
                  alt="Design Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-white font-bold text-sm md:text-base leading-relaxed">
                  Design → Deploy → Monitor → Evolve
                </p>
              </div>
            </motion.div>

            {/* Box 2 - Natural Language UI, etc. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="border border-white rounded-2xl p-6 md:p-8 bg-black/40 flex items-center gap-4"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 relative">
                <Image
                  src="/Slide 9/Supports Natural Language.svg"
                  alt="Natural Language Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Block with Bullets */}
              <div className="flex-1">
                <ul className="space-y-2 text-white text-sm md:text-base">
                  <li>• Supports natural language UI</li>
                  <li>• Usage-based compute</li>
                  <li>• Observability and secure by default</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 3 - Developers Delight, etc. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="border border-white rounded-2xl p-6 md:p-8 bg-black/40 flex items-center gap-4"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 relative">
                <Image
                  src="/Slide 9/Developers Delight SVG.svg"
                  alt="Developers Delight Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Block with Bullets */}
              <div className="flex-1">
                <ul className="space-y-2 text-white text-sm md:text-base">
                  <li>• Developers delight</li>
                  <li>• Product innovation and enterprise control</li>
                </ul>
              </div>
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
          9
        </motion.div>
      </div>
    </Section>
  );
}
