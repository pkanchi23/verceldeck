"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const cards = [
  {
    title: "Customers",
    description: "Customers want personalized, real-time, intelligent interfaces",
    glowColor: "cyan", // Neon turquoise
    borderHoverClass: "hover:border-cyan-400",
    glowClass: "hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]",
  },
  {
    title: "Developers (Builders)",
    description: "Developers (Builders) want abstraction, instant deploys and AI-native workflows",
    glowColor: "pink", // Neon pink
    borderHoverClass: "hover:border-pink-400",
    glowClass: "hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]",
  },
  {
    title: "Enterprises",
    description: "Enterprises want agility without compromising security & control",
    glowColor: "yellow", // Neon yellow
    borderHoverClass: "hover:border-yellow-400",
    glowClass: "hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]",
  },
];

export default function Slide4AIEraExpectations() {
  return (
    <Section id="slide-4" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 pt-12 md:pt-16 pb-20">
          {/* Headline + Subheadline */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5"
            >
              The AI era has changed expectations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white font-normal"
            >
              Customers, developers & enterprises are all demanding more
            </motion.p>
          </div>

          {/* Three-Column Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={`
                  border border-zinc-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10
                  flex flex-col h-full cursor-pointer
                  transition-all duration-300 ease-out
                  ${card.borderHoverClass}
                  ${card.glowClass}
                `}
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed mb-6 md:mb-8">
                  {card.description}
                </p>

                {/* Icon Placeholder */}
                <div className="mt-auto flex justify-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 border border-zinc-700 rounded flex items-center justify-center" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          4
        </motion.div>
      </div>
    </Section>
  );
}
