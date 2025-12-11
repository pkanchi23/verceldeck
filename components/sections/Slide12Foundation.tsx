"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

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

// Generate logo paths
const awsLogos = Array.from({ length: 22 }, (_, i) => `/Slide 12 Building Pyramid From Base/Square Logos/AWS Base Logos.png/Picture1.png-${i + 1}.png`);
const vercelLogos = Array.from({ length: 33 }, (_, i) => `/Slide 12 Building Pyramid From Base/Square Logos/Vercel Base Logos.png/Vercel Base Logos.png-${i + 1}.png`);

// Left pyramid (AWS) - smaller, 4 rows
const leftPyramidRows = [
  { count: 7, delay: 0, startIndex: 0 },      // Base row
  { count: 5, delay: 0.15, startIndex: 7 },   // Row 2
  { count: 3, delay: 0.3, startIndex: 12 },    // Row 3
  { count: 1, delay: 0.45, startIndex: 15 },   // Top row
];

// Right pyramid (Vercel) - larger, 5 rows
const rightPyramidRows = [
  { count: 9, delay: 0, startIndex: 0 },      // Base row
  { count: 7, delay: 0.15, startIndex: 9 },   // Row 2
  { count: 5, delay: 0.3, startIndex: 16 },    // Row 3
  { count: 3, delay: 0.45, startIndex: 21 },   // Row 4
  { count: 1, delay: 0.6, startIndex: 24 },    // Top row
];

export default function Slide12Foundation() {
  return (
    <Section id="slide-12" className="bg-black">
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

        {/* Main Content Container */}
        <div className="w-full px-4 md:px-8 pt-10 md:pt-14 pb-14">
          <SlideHeader
            title="The foundation of an entirely new product and ecosystem"
            className="mb-12 md:mb-16"
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 md:gap-8 lg:gap-10 w-full mx-auto">
            {/* Left Column (AWS) */}
            <div className="flex flex-col items-center gap-8 justify-between w-full">
              {/* AWS Categories */}
              <div
                className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4"
              >
                {awsCategories.map((category, index) => (
                  <motion.div
                    key={category}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 4.8 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="text-white text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap mb-1">
                      {category}
                    </p>
                    <div className="w-full h-[2px] bg-white" />
                  </motion.div>
                ))}
              </div>

              {/* Left Pyramid (AWS) */}
              <div className="flex flex-col items-center gap-2 w-full">
                {/* Pyramid Rows (bottom to top) */}
                <div className="flex flex-col-reverse items-center gap-1">
                  {leftPyramidRows.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: 0.8 + row.delay * 2, // Start slightly after base box (0.5s)
                        duration: 1.0,
                        ease: "easeOut",
                      }}
                      className="flex gap-1 justify-center"
                    >
                      {Array.from({ length: row.count }).map((_, boxIndex) => {
                        const logoSrc = awsLogos[row.startIndex + boxIndex];
                        return (
                          <div
                            key={boxIndex}
                            className="relative w-11 h-11 md:w-13 md:h-13 rounded bg-transparent overflow-hidden"
                          >
                            {logoSrc && (
                              <Image
                                src={logoSrc}
                                alt={`AWS Logo ${row.startIndex + boxIndex}`}
                                fill
                                className="object-contain p-1"
                              />
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  ))}
                </div>

                {/* AWS Base */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[1200px] h-16 md:h-20 border-2 border-yellow-500 rounded-lg bg-yellow-500/10 flex items-center justify-center mt-2"
                >
                  <div className="relative w-[100px] h-[40px]">
                    <Image
                      src="/Slide 12 Building Pyramid From Base/AWS logo.png"
                      alt="AWS Base"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column (Vercel) */}
            <div className="flex flex-col items-center gap-8 justify-between w-full">
              {/* Vercel Categories */}
              <div
                className="flex flex-nowrap justify-center gap-2 md:gap-4 mb-4"
              >
                {vercelCategories.map((category, index) => (
                  <motion.div
                    key={category}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 5.2 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="text-white text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap mb-1">
                      {category}
                    </p>
                    <div className="w-full h-[2px] bg-white" />
                  </motion.div>
                ))}
              </div>

              {/* Right Pyramid (Vercel) */}
              <div className="flex flex-col items-center gap-3 w-full">
                {/* Pyramid Rows (bottom to top) */}
                <div className="flex flex-col-reverse items-center gap-1">
                  {rightPyramidRows.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        delay: 2.8 + row.delay * 2, // Start slightly after base box (2.5s)
                        duration: 1.0,
                        ease: "easeOut",
                      }}
                      className="flex gap-1 justify-center"
                    >
                      {Array.from({ length: row.count }).map((_, boxIndex) => {
                        const logoSrc = vercelLogos[row.startIndex + boxIndex];
                        return (
                          <div
                            key={boxIndex}
                            className="relative w-13 h-13 md:w-16 md:h-16 rounded bg-transparent overflow-hidden"
                          >
                            {logoSrc && (
                              <Image
                                src={logoSrc}
                                alt={`Vercel Logo ${row.startIndex + boxIndex}`}
                                fill
                                className="object-contain p-1"
                              />
                            )}
                          </div>
                        );
                      })}
                    </motion.div>
                  ))}
                </div>

                {/* Vercel Base */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2.5, duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[1200px] h-16 md:h-20 border-2 border-white rounded-lg bg-zinc-900/40 flex items-center justify-center mt-2 px-6"
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
