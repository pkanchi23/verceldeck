"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide6SoWhatIsGoingOn() {
  return (
    <Section id="slide-6" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
          {/* Headline + Subheadline */}
          <div className="mb-10 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5"
            >
              But AI still feels...unfinished
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white font-normal"
            >
              AI is transformative, but most teams struggle to ship with it
            </motion.p>
          </div>

          {/* Main Visual Area: AI cube placeholder with central question */}
          <div className="relative mt-10 md:mt-16 w-full max-w-6xl mx-auto h-[420px] md:h-[480px]">
            {/* TODO: Replace this placeholder box with the actual AI cube graphic (SVG/image) matching the deck. */}
            {/* Central Cube Graphic Placeholder */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[320px] aspect-[4/3] border border-zinc-700/70 rounded-xl bg-zinc-900/40 flex items-center justify-center">
              <p className="text-xs md:text-sm text-zinc-400 text-center px-4">
                AI graphic placeholder
              </p>
            </div>

            {/* Central Question Text: "So, What is Going On?" */}
            <motion.div
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              animate={{ y: [-3, 3, -3] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                <span className="text-red-400">So, What is </span>
                <span
                  className="text-red-500 italic"
                  style={{
                    textShadow: `
                      0 0 10px rgba(239, 68, 68, 0.6),
                      0 0 20px rgba(239, 68, 68, 0.3)
                    `,
                  }}
                >
                  Going On
                </span>
                <span className="text-white">?</span>
              </h2>
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
          6
        </motion.div>
      </div>
    </Section>
  );
}
