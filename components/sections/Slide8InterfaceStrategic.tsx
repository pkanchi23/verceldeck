"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide8InterfaceStrategic() {
  return (
    <Section id="slide-8" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-16">
          {/* Title and Subtitle */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              The interface has become strategic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white font-normal"
            >
              Where intent becomes execution
            </motion.p>
          </div>

          {/* Main Diagram Area */}
          <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[650px]">
            {/* Left Column - Diagonal Arrows */}
            <div className="absolute left-0 top-0 bottom-0 w-[140px] md:w-[180px]">
              {/* Arrow 1 - New AI Development Stack (closer to pyramid) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-[50%] top-[15%] h-[70%]"
              >
                <svg
                  viewBox="0 0 100 500"
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom left' }}
                >
                  {/* Arrow shaft */}
                  <line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="white"
                    strokeWidth="3"
                    opacity="0.9"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="50,0 40,25 60,25"
                    fill="white"
                    opacity="0.9"
                  />
                  {/* Animated energy flow */}
                  <motion.line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="url(#energyGradient1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "480 480", strokeDashoffset: 480 }}
                    animate={{ strokeDashoffset: [480, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <defs>
                    <linearGradient id="energyGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label text */}

              </motion.div>

              {/* Arrow 2 - Traditional Development Stack (farther left) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute left-[10%] top-[15%] h-[70%]"
              >
                <svg
                  viewBox="0 0 100 500"
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom left' }}
                >
                  {/* Arrow shaft */}
                  <line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="rgb(161, 161, 170)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="50,0 40,25 60,25"
                    fill="rgb(161, 161, 170)"
                    opacity="0.6"
                  />
                  {/* Animated energy flow */}
                  <motion.line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="url(#energyGradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "480 480", strokeDashoffset: 480 }}
                    animate={{ strokeDashoffset: [480, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <defs>
                    <linearGradient id="energyGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(161, 161, 170, 0)" />
                      <stop offset="50%" stopColor="rgba(161, 161, 170, 0.5)" />
                      <stop offset="100%" stopColor="rgba(161, 161, 170, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label text */}

              </motion.div>
            </div>

            {/* Center Column - Pyramid Diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-[16%] top-[50%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-[700px] h-[700px]">
                <Image
                  src="/Slide 8 Pyramid/Pyramid.png"
                  alt="Interface Strategic Pyramid"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - Explanatory Panel */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[340px] h-[600px]"
            >
              <div className="border border-zinc-700 rounded-2xl p-6 md:p-8 bg-zinc-900/40 h-full flex flex-col justify-center">
                {/* Bullet 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="mb-6"
                >
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    UIs now trigger intelligence and AI-native apps start with the front end not the backend
                  </p>
                </motion.div>

                {/* Bullet 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    ▲Vercel owns the new AI surface area
                  </p>
                </motion.div>
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
          8
        </motion.div>
      </div>
    </Section>
  );
}
