"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import { useState } from "react";

export default function Slide13AImoment() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<number | null>(null);
  return (
    <Section id="slide-13" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-12">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8"
          >
            The only platform built for this AI moment
          </motion.h1>

          {/* Main Graph Region with Axis Labels */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left Axis Labels (Vertical) */}
            <div className="absolute left-0 top-0 bottom-0 w-[100px] md:w-[140px] flex flex-col justify-between -translate-x-full pr-6 md:pr-8">
              {/* Top label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-sm md:text-base font-medium text-right"
              >
                Complete Platform
              </motion.div>

              {/* Middle label (rotated) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 origin-center"
                style={{ transform: 'translateY(-50%) rotate(-90deg)', whiteSpace: 'nowrap' }}
              >
                <p className="text-white text-sm md:text-base font-medium">
                  AI-Native Full Stack Delivery
                </p>
              </motion.div>

              {/* Bottom label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-white text-sm md:text-base font-medium text-right"
              >
                Partial / Fragmented
              </motion.div>
            </div>

            {/* Main Graph Placeholder - 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full aspect-[21/7] border-none bg-transparent p-0 grid grid-cols-2 grid-rows-2 gap-4"
            >
              {/* Top-left quadrant: Hyperscalers (White glow) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                onMouseEnter={() => setHoveredQuadrant(0)}
                onMouseLeave={() => setHoveredQuadrant(null)}
                className="relative flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/Slide 13 Graph Quadrants.png/Graph Quadrants.png-1.png"
                    alt="Hyperscalers"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Top-right quadrant: Vercel (Neon pink glow) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                onMouseEnter={() => setHoveredQuadrant(1)}
                onMouseLeave={() => setHoveredQuadrant(null)}
                className="relative flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/Slide 13 Graph Quadrants.png/Graph Quadrants.png-2.png"
                    alt="Vercel"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Bottom-left quadrant: (Turquoise glow) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onMouseEnter={() => setHoveredQuadrant(2)}
                onMouseLeave={() => setHoveredQuadrant(null)}
                className="relative flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/Slide 13 Graph Quadrants.png/Graph Quadrants.png-4.png"
                    alt="Tools and Platforms"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Bottom-right quadrant: IDEs, Vibe tools (Neon yellow glow) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                onMouseEnter={() => setHoveredQuadrant(3)}
                onMouseLeave={() => setHoveredQuadrant(null)}
                className="relative flex items-center justify-center p-2"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/Slide 13 Graph Quadrants.png/Graph Quadrants.png-3.png"
                    alt="IDEs and Vibe tools"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Axis Labels (Horizontal) */}
            <div className="flex justify-between mt-6 md:mt-8 px-4 md:px-8">
              {/* Left label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-white text-sm md:text-base font-medium"
              >
                Infrastructure First
              </motion.div>

              {/* Center label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="text-white text-sm md:text-base font-medium"
              >
                Where the Idea Starts
              </motion.div>

              {/* Right label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-white text-sm md:text-base font-medium"
              >
                Idea First
              </motion.div>
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
          13
        </motion.div>
      </div>
    </Section>
  );
}
