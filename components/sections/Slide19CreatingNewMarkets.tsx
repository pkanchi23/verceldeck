"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";

const tiers = [
  {
    id: "D",
    label: "D",
    population: "34mm+",
    description: "Low- and no-code developers¹",
    glowColor: "rgba(255, 255, 255, 0.6)",
    hasCard: false,
  },
  {
    id: "C",
    label: "C",
    population: "57mm+",
    description: "Developers¹",
    glowColor: "rgba(34, 211, 238, 0.6)", // turquoise
    hasCard: true,
    cardText:
      "The 57mm+ developers today represent the core market opportunity for Vercel. The number of developers continues to grow strongly across all regions",
  },
  {
    id: "B",
    label: "B",
    population: "100mm",
    description: "Software builders",
    glowColor: "rgba(236, 72, 153, 0.6)", // pink/magenta
    hasCard: true,
    cardText:
      "The 100mm represents a subset of the broader knowledge worker segment and offer an attractive market entry point for Vercel's core products",
  },
  {
    id: "A",
    label: "A",
    population: "1bn+",
    description: "Knowledge workers³",
    glowColor: "rgba(234, 179, 8, 0.6)", // yellow
    hasCard: true,
    cardText:
      "There are 1bn knowledge workers. These potential customers represent the largest whitespace opportunity as Vercel democratizes web design and development for everyone",
  },
];

export default function Slide19CreatingNewMarkets() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <Section id="slide-19" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16"
          >
            … and creating new markets
          </motion.h1>

          {/* Main Content: Left Tiers + Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Tiered Population Boxes */}
            <div className="flex flex-col gap-4">
              {tiers
                .slice()
                .reverse()
                .map((tier, index) => {
                  const reversedIndex = tiers.length - 1 - index;
                  const baseDelay = 0.5;
                  const stagger = 0.18;
                  const tierDelay = baseDelay + reversedIndex * stagger;

                  // Calculate relative widths (D smallest, A largest)
                  const widthPercentages = {
                    D: "70%",
                    C: "80%",
                    B: "90%",
                    A: "100%",
                  };

                  return (
                    <motion.div
                      key={tier.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: tierDelay,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setHoveredTier(tier.id)}
                      onMouseLeave={() => setHoveredTier(null)}
                      className="relative flex items-center gap-4"
                      style={{
                        width: widthPercentages[tier.id as keyof typeof widthPercentages],
                        marginLeft: tier.id === "A" ? "0" : "auto",
                      }}
                    >
                      {/* Circle Label */}
                      <div
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 20px ${tier.glowColor}`
                              : "none",
                        }}
                      >
                        <span className="text-white font-bold text-sm md:text-base">
                          {tier.label}
                        </span>
                      </div>

                      {/* Tier Box */}
                      <div
                        className="flex-1 border border-white rounded-lg p-4 md:p-6 bg-black/40 transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 30px ${tier.glowColor}`
                              : "none",
                        }}
                      >
                        <div className="flex flex-col items-end">
                          <p className="text-white text-2xl md:text-3xl font-bold mb-1">
                            {tier.population}
                          </p>
                          <p className="text-white text-sm md:text-base font-medium">
                            {tier.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>

            {/* Right Side - Explanatory Cards */}
            <div className="flex flex-col gap-4">
              {tiers
                .filter((tier) => tier.hasCard)
                .reverse()
                .map((tier, index) => {
                  const reversedIndex = tiers.filter((t) => t.hasCard).length - 1 - index;
                  const tierIndex = tiers.findIndex((t) => t.id === tier.id);
                  const baseDelay = 0.5;
                  const stagger = 0.18;
                  const tierDelay = baseDelay + tierIndex * stagger + 0.2;

                  return (
                    <motion.div
                      key={tier.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        delay: tierDelay,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-4"
                    >
                      {/* Circle Label */}
                      <div
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 20px ${tier.glowColor}`
                              : "none",
                        }}
                      >
                        <span className="text-white font-bold text-sm md:text-base">
                          {tier.label}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div
                        className="flex-1 border border-white rounded-lg p-4 md:p-6 bg-black/40 transition-all duration-300"
                        style={{
                          boxShadow:
                            hoveredTier === tier.id
                              ? `0 0 30px ${tier.glowColor}`
                              : "none",
                        }}
                      >
                        <p className="text-white text-sm md:text-base leading-relaxed">
                          {tier.cardText}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>

          {/* Footer Notes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-12 md:mt-16"
          >
            <p className="text-white text-xs opacity-40">
              Source: IDC, 2024 | Note: ¹ 2028 Estimates from IDC. ² Estimates
              from Gartner.
            </p>
          </motion.div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          19
        </motion.div>
      </div>
    </Section>
  );
}
