"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";

const tiers = [
  {
    id: "D",
    label: "D",
    population: "34mm+",
    description: ["Low- and no-", "code", "developers¹"],
    glowColor: "#FFFFFF",
    hasCard: false,
    size: { width: "28%", height: "200px" },
    position: { bottom: "0%", left: "12%" },
  },
  {
    id: "C",
    label: "C",
    population: "57mm+",
    description: ["Developers¹"],
    glowColor: "#4FF2E4", // turquoise
    hasCard: true,
    cardText:
      "The 57mm+ developers today represent the core market opportunity for Vercel. The number of developers continues to grow strongly across all regions",
    size: { width: "32%", height: "240px" },
    position: { bottom: "18%", left: "18%" },
  },
  {
    id: "B",
    label: "B",
    population: "100mm",
    description: ["+ Software", "builders"],
    glowColor: "#FF41B4", // pink/magenta
    hasCard: true,
    cardText:
      "The 100mm represents a subset of the broader knowledge worker segment and offer an attractive market entry point for Vercel's core products",
    size: { width: "36%", height: "280px" },
    position: { bottom: "36%", left: "24%" },
  },
  {
    id: "A",
    label: "A",
    population: "1bn+",
    description: ["Knowledge", "workers³"],
    glowColor: "#FFD54A", // yellow
    hasCard: true,
    cardText:
      "There are 1bn knowledge workers. These potential customers represent the largest whitespace opportunity as Vercel democratizes web design and development for everyone",
    size: { width: "24%", height: "500px" },
    position: { bottom: "10%", right: "8%" },
  },
];

export default function Slide16CreatingNewMarkets() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <Section id="slide-16" className="bg-black">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center z-50"
        />

        {/* Main Content Container */}
        <div className="relative w-full h-screen flex items-center justify-center px-6 md:px-12">
          {/* Split Layout: Left (60%) + Right (40%) */}
          <div className="relative w-full max-w-[1400px] h-[700px] flex">
            {/* LEFT COLUMN - Stair-step Boxes + Vertical Rail */}
            <div className="relative w-[60%] h-full">
              {/* Vertical Rail on Far Left */}
              <div className="absolute left-0 top-[5%] bottom-[5%] w-px bg-white" />

              {/* A-D Circle Labels on Vertical Rail */}
              {["A", "B", "C", "D"].map((letter, index) => {
                const tier = tiers.find((t) => t.id === letter);
                const positions = { A: "15%", B: "35%", C: "55%", D: "75%" };

                return (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute"
                    style={{ top: positions[letter as keyof typeof positions], left: "-20px" }}
                  >
                    {/* Circle */}
                    <div
                      className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300"
                      style={{
                        boxShadow:
                          hoveredTier === letter
                            ? `0 0 30px ${tier?.glowColor}`
                            : "none",
                      }}
                    >
                      <span className="text-white font-bold text-sm">{letter}</span>
                    </div>

                    {/* Horizontal connecting line */}
                    <div
                      className="absolute top-1/2 left-10 h-px bg-white transition-all duration-300"
                      style={{
                        width: letter === "D" ? "60px" : letter === "C" ? "100px" : letter === "B" ? "140px" : "180px",
                        boxShadow:
                          hoveredTier === letter
                            ? `0 0 10px ${tier?.glowColor}`
                            : "none",
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Stair-Step Rectangles */}
              {tiers.map((tier, index) => {
                const delays = { D: 0.5, C: 0.7, B: 0.9, A: 1.1 };

                return (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: delays[tier.id as keyof typeof delays],
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    onMouseEnter={() => setHoveredTier(tier.id)}
                    onMouseLeave={() => setHoveredTier(null)}
                    className="absolute border-2 border-white bg-transparent cursor-pointer transition-all duration-300"
                    style={{
                      width: tier.size.width,
                      height: tier.size.height,
                      bottom: tier.position.bottom,
                      left: tier.position.left,
                      right: tier.position.right,
                      boxShadow:
                        hoveredTier === tier.id
                          ? `0 0 40px ${tier.glowColor}, inset 0 0 20px ${tier.glowColor}20`
                          : "none",
                    }}
                  >
                    {/* Content inside rectangle */}
                    <div className="absolute bottom-6 left-6 flex flex-col items-start">
                      <p className="text-white text-4xl md:text-5xl font-bold mb-2">
                        {tier.population}
                      </p>
                      {tier.description.map((line, i) => (
                        <p
                          key={i}
                          className="text-white text-sm md:text-base font-light italic"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT COLUMN - Explanation Cards (A, B, C only) */}
            <div className="relative w-[40%] h-full flex flex-col justify-center gap-6 pl-12">
              {tiers
                .filter((tier) => tier.hasCard)
                .reverse()
                .map((tier, index) => {
                  const cardDelays = { A: 1.4, B: 1.6, C: 1.8 };

                  return (
                    <motion.div
                      key={tier.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: cardDelays[tier.id as keyof typeof cardDelays],
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setHoveredTier(tier.id)}
                      onMouseLeave={() => setHoveredTier(null)}
                      className="relative flex items-center gap-4"
                    >
                      {/* Circle Label */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 30px ${tier.glowColor}`
                              : "none",
                        }}
                      >
                        <span className="text-white font-bold text-sm">
                          {tier.label}
                        </span>
                      </div>

                      {/* Connecting line from circle to card */}
                      <div
                        className="absolute left-10 w-8 h-px bg-white transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 10px ${tier.glowColor}`
                              : "none",
                        }}
                      />

                      {/* Card Content */}
                      <div
                        className="flex-1 border-2 border-white rounded-lg p-6 bg-black/40 ml-8 cursor-pointer transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 40px ${tier.glowColor}, inset 0 0 20px ${tier.glowColor}20`
                              : "none",
                        }}
                      >
                        <p className="text-white text-sm leading-relaxed">
                          {tier.cardText}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="absolute bottom-20 left-6 md:left-12"
        >
          <p className="text-white text-xs opacity-40">
            Source: IDC, 2024 | Note: ¹ 2028 Estimates from IDC. ³ Estimates from Gartner.
          </p>
        </motion.div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">GOLDMAN SACHS</span>
        </div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          16
        </motion.div>
      </div>
    </Section>
  );
}
