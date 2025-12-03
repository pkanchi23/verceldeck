"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

const awsCategories = [
  "SaaS Boom",
  "API Economy",
  "Marketplaces",
];

const vercelCategories = [
  "AI Native",
  "AI Boom",
  "Agent Economy",
  "Personalized UX at Scale",
];

// Left pyramid (AWS) - smaller, 4 rows
const leftPyramidRows = [
  { count: 7, delay: 0 },      // Base row
  { count: 5, delay: 0.15 },   // Row 2
  { count: 3, delay: 0.3 },    // Row 3
  { count: 1, delay: 0.45 },   // Top row
];

// Right pyramid (Vercel) - larger, 5 rows
const rightPyramidRows = [
  { count: 9, delay: 0 },      // Base row
  { count: 7, delay: 0.15 },   // Row 2
  { count: 5, delay: 0.3 },    // Row 3
  { count: 3, delay: 0.45 },   // Row 4
  { count: 1, delay: 0.6 },    // Top row
];

export default function Slide12Foundation() {
  return (
    <Section id="slide-12" className="bg-black">
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
        <div className="w-full px-4 md:px-8 pt-16 md:pt-20 pb-24">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16"
          >
            The foundation of an entirely new product and ecosystem
          </motion.h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 md:gap-8 lg:gap-12 w-full mx-auto">
            {/* Left Column (AWS) */}
            <div className="flex flex-col items-center gap-8 justify-between w-full">
              {/* AWS Categories */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4"
              >
                {awsCategories.map((category) => (
                  <div key={category} className="flex flex-col items-center">
                    <p className="text-white text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap mb-1">
                      {category}
                    </p>
                    <div className="w-full h-[2px] bg-white" />
                  </div>
                ))}
              </motion.div>

              {/* Left Pyramid (AWS) */}
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Pyramid Rows (bottom to top) */}
                <div className="flex flex-col-reverse items-center gap-3">
                  {leftPyramidRows.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: 0.6 + row.delay,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="flex gap-3 justify-center"
                    >
                      {Array.from({ length: row.count }).map((_, boxIndex) => (
                        <div
                          key={boxIndex}
                          className="w-12 h-12 md:w-14 md:h-14 border border-white rounded bg-transparent"
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* AWS Base */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[1200px] h-16 md:h-20 border-2 border-white rounded-lg bg-zinc-900/40 flex items-center justify-center mt-2"
                >
                  <p className="text-white text-sm md:text-base font-semibold">
                    [ AWS BASE ]
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column (Vercel) */}
            <div className="flex flex-col items-center gap-8 justify-between w-full">
              {/* Vercel Categories */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-nowrap justify-center gap-2 md:gap-4 mb-4"
              >
                {vercelCategories.map((category) => (
                  <div key={category} className="flex flex-col items-center">
                    <p className="text-white text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap mb-1">
                      {category}
                    </p>
                    <div className="w-full h-[2px] bg-white" />
                  </div>
                ))}
              </motion.div>

              {/* Right Pyramid (Vercel) */}
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Pyramid Rows (bottom to top) */}
                <div className="flex flex-col-reverse items-center gap-3">
                  {rightPyramidRows.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: 0.6 + row.delay,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="flex gap-3 justify-center"
                    >
                      {Array.from({ length: row.count }).map((_, boxIndex) => (
                        <div
                          key={boxIndex}
                          className="w-12 h-12 md:w-14 md:h-14 border border-white rounded bg-transparent"
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Vercel Base */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[1728px] h-16 md:h-20 border-2 border-white rounded-lg bg-zinc-900/40 flex items-center justify-center mt-2 px-8"
                >
                  <div className="relative w-[160px] h-[50px]">
                    <Image
                      src="/Vercel Logo.svg"
                      alt="Vercel"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
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
          12
        </motion.div>
      </div>
    </Section>
  );
}
