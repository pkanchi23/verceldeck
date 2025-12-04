"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide16CreatingNewMarkets() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const glowColors = {
    A: "#FFD54A", // Yellow
    B: "#FF41B4", // Pink
    C: "#4FF2E4", // Turquoise
    D: "#FFFFFF", // White
  };

  const getGlowStyle = (id: string, isHovered: boolean) => {
    if (!isHovered) return {};
    const color = glowColors[id as keyof typeof glowColors];
    return {
      boxShadow: `0 0 20px ${color}, inset 0 0 10px ${color}40`,
      borderColor: color,
    };
  };

  return (
    <Section id="slide-16" className="bg-black text-white font-sans">
      <div className="relative w-full min-h-[calc(100vh-60px)] overflow-hidden flex flex-col">
        {/* Top-Right Logo (Vercel) */}
        <div className="absolute top-6 right-6 z-50">
          <div className="relative w-[120px] h-[30px]">
            <Image
              src="/Vercel Logo.svg"
              alt="Vercel Logo"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col px-12 pt-12 pb-12 max-w-[1600px] mx-auto w-full">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide"
          >
            ... and creating new markets
          </motion.h1>

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-16 h-full flex-1 items-center">
            {/* LEFT COLUMN - Nested Market Size Boxes */}
            <div className="relative w-full lg:w-[60%] h-[500px] flex items-end">
              {/* Container for nested boxes - aligned bottom-left */}
              <div className="relative w-full h-full flex items-end">

                {/* Box A (Largest) - 100% Height */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  onMouseEnter={() => setHoveredTier("A")}
                  onMouseLeave={() => setHoveredTier(null)}
                  className="absolute bottom-0 left-0 w-full h-full border border-white bg-transparent z-10 transition-all duration-300"
                  style={getGlowStyle("A", hoveredTier === "A")}
                >
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-5xl font-extrabold mb-1">1bn+</div>
                    <div className="text-base font-normal text-gray-300">Knowledge workers³</div>
                  </div>
                </motion.div>

                {/* Box B (Third Largest) - 75% Height */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredTier("B"); }}
                  onMouseLeave={() => setHoveredTier(null)}
                  className="absolute bottom-0 left-0 w-[75%] h-[75%] border border-white border-l-0 border-b-0 bg-transparent z-20 transition-all duration-300"
                  style={getGlowStyle("B", hoveredTier === "B")}
                >
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-4xl font-extrabold mb-1">100mm</div>
                    <div className="text-sm font-normal text-gray-300">+ Software builders</div>
                  </div>
                </motion.div>

                {/* Box C (Second Smallest) - 50% Height */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredTier("C"); }}
                  onMouseLeave={() => setHoveredTier(null)}
                  className="absolute bottom-0 left-0 w-[50%] h-[50%] border border-white border-l-0 border-b-0 bg-transparent z-30 transition-all duration-300"
                  style={getGlowStyle("C", hoveredTier === "C")}
                >
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-4xl font-extrabold mb-1">57mm+</div>
                    <div className="text-sm font-normal text-gray-300">Developers¹</div>
                  </div>
                </motion.div>

                {/* Box D (Smallest) - 25% Height */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  onMouseEnter={(e) => { e.stopPropagation(); setHoveredTier("D"); }}
                  onMouseLeave={() => setHoveredTier(null)}
                  className="absolute bottom-0 left-0 w-[25%] h-[25%] border border-white border-l-0 border-b-0 bg-transparent z-40 transition-all duration-300"
                  style={getGlowStyle("D", hoveredTier === "D")}
                >
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-extrabold mb-1">34mm+</div>
                    <div className="text-xs font-normal text-gray-300">Low- and no-code<br />developers¹</div>
                  </div>
                </motion.div>

                {/* Markers Layer - Rendered on top of all boxes */}
                <div className="absolute inset-0 z-50 pointer-events-none">
                  {/* Marker A - Top-Left of 100% Box (Top of container) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                    style={{
                      borderColor: hoveredTier === "A" ? glowColors.A : "white",
                      boxShadow: hoveredTier === "A" ? `0 0 15px ${glowColors.A}` : "none"
                    }}
                  >
                    <span className="text-xl font-bold text-white">A</span>
                  </motion.div>

                  {/* Marker B - Top-Left of 75% Box (25% from top) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute left-0 top-[25%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                    style={{
                      borderColor: hoveredTier === "B" ? glowColors.B : "white",
                      boxShadow: hoveredTier === "B" ? `0 0 15px ${glowColors.B}` : "none"
                    }}
                  >
                    <span className="text-xl font-bold text-white">B</span>
                  </motion.div>

                  {/* Marker C - Top-Left of 50% Box (50% from top) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                    style={{
                      borderColor: hoveredTier === "C" ? glowColors.C : "white",
                      boxShadow: hoveredTier === "C" ? `0 0 15px ${glowColors.C}` : "none"
                    }}
                  >
                    <span className="text-xl font-bold text-white">C</span>
                  </motion.div>

                  {/* Marker D - Top-Left of 25% Box (75% from top) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute left-0 top-[75%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                    style={{
                      borderColor: hoveredTier === "D" ? glowColors.D : "white",
                      boxShadow: hoveredTier === "D" ? `0 0 15px ${glowColors.D}` : "none"
                    }}
                  >
                    <span className="text-xl font-bold text-white">D</span>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN - Explanatory Text Boxes */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center gap-6">

              {/* Callout A */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                onMouseEnter={() => setHoveredTier("A")}
                onMouseLeave={() => setHoveredTier(null)}
                className="relative border border-white p-6 bg-transparent transition-all duration-300"
                style={getGlowStyle("A", hoveredTier === "A")}
              >
                <div
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                  style={{
                    borderColor: hoveredTier === "A" ? glowColors.A : "white",
                    boxShadow: hoveredTier === "A" ? `0 0 15px ${glowColors.A}` : "none"
                  }}
                >
                  <span className="text-lg font-bold">A</span>
                </div>
                <p className="text-sm leading-relaxed font-normal">
                  There are <span className="font-bold">1bn knowledge workers</span>. These potential customers represent the <span className="font-bold">largest whitespace opportunity</span> as Vercel democratizes web design and development for everyone
                </p>
              </motion.div>

              {/* Callout B */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                onMouseEnter={() => setHoveredTier("B")}
                onMouseLeave={() => setHoveredTier(null)}
                className="relative border border-white p-6 bg-transparent transition-all duration-300"
                style={getGlowStyle("B", hoveredTier === "B")}
              >
                <div
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                  style={{
                    borderColor: hoveredTier === "B" ? glowColors.B : "white",
                    boxShadow: hoveredTier === "B" ? `0 0 15px ${glowColors.B}` : "none"
                  }}
                >
                  <span className="text-lg font-bold">B</span>
                </div>
                <p className="text-sm leading-relaxed font-normal">
                  The <span className="font-bold">100mm</span> represents a subset of the broader knowledge worker segment and offer an attractive market entry point for Vercel&apos;s core products
                </p>
              </motion.div>

              {/* Callout C */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                onMouseEnter={() => setHoveredTier("C")}
                onMouseLeave={() => setHoveredTier(null)}
                className="relative border border-white p-6 bg-transparent transition-all duration-300"
                style={getGlowStyle("C", hoveredTier === "C")}
              >
                <div
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black transition-all duration-300"
                  style={{
                    borderColor: hoveredTier === "C" ? glowColors.C : "white",
                    boxShadow: hoveredTier === "C" ? `0 0 15px ${glowColors.C}` : "none"
                  }}
                >
                  <span className="text-lg font-bold">C</span>
                </div>
                <p className="text-sm leading-relaxed font-normal">
                  The <span className="font-bold">57mm+ developers</span> today represent the <span className="font-bold">core market opportunity</span> for Vercel. The number of developers continues to grow strongly across all regions
                </p>
              </motion.div>

            </div>
          </div>

          {/* Footer Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute bottom-6 left-[180px]"
          >
            <p className="text-white/40 text-xs">
              Source: IDC, 2024 | Note: ¹ 2028 Estimates from IDC. ³ Estimates from Gartner.
            </p>
          </motion.div>

          {/* Bottom-Left Logo (Goldman Sachs) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 left-6 w-[140px] h-[40px] flex items-center justify-start"
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

          {/* Page Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute bottom-6 right-6 text-white/70 text-sm"
          >
            16
          </motion.div>

        </div>
      </div>
    </Section>
  );
}

