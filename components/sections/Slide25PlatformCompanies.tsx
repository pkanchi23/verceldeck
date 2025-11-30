"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

// Card data structure
const companies = [
  {
    id: 1,
    name: "STRIPE",
    category: "Digital Payments",
    people: ["Patrick Collison — Co-founder and CEO", "John Collison — Co-founder and President"],
    photoLabel: "PHOTO_PLACEHOLDER_PATRICK_JOHN",
    delay: 0.0,
    highlight: false,
  },
  {
    id: 2,
    name: "OPENAI",
    category: "Intelligence",
    people: ["Sam Altman — Co-founder and CEO"],
    photoLabel: "PHOTO_PLACEHOLDER_SAM",
    delay: 0.1,
    highlight: false,
  },
  {
    id: 3,
    name: "DATABRICKS",
    category: "Data",
    people: ["Ali Ghodsi — Co-founder and CEO"],
    photoLabel: "PHOTO_PLACEHOLDER_ALI",
    delay: 0.2,
    highlight: false,
  },
  {
    id: 4,
    name: "NVIDIA",
    category: "Compute",
    people: ["Jensen Huang — Founder, President and CEO"],
    photoLabel: "PHOTO_PLACEHOLDER_JENSEN",
    delay: 0.3,
    highlight: false,
  },
  {
    id: 5,
    name: "VERCEL",
    category: "AI cloud",
    people: ["Guillermo Rauch — Co-founder and CEO"],
    photoLabel: "PHOTO_PLACEHOLDER_GUILLERMO",
    delay: 0.4,
    highlight: true,
  },
];

// Reusable Company Card Component
const CompanyCard = ({
  name,
  category,
  people,
  photoLabel,
  delay,
  highlight,
}: {
  name: string;
  category: string;
  people: string[];
  photoLabel: string;
  delay: number;
  highlight: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: delay + 0.5, duration: 0.5, ease: "easeOut" }}
      className="flex-1 min-w-[200px] max-w-[280px]"
    >
      <div
        className="h-full border border-white rounded-xl p-6 flex flex-col items-center"
        style={{
          backgroundColor: "#0a0a0a",
          boxShadow: highlight ? "0 0 30px rgba(34, 211, 238, 0.3)" : "none",
        }}
      >
        {/* Logo Placeholder */}
        <div className="w-full h-16 border border-zinc-700 rounded bg-transparent flex items-center justify-center mb-6">
          <span className="text-zinc-600 text-xs font-medium">{name}</span>
        </div>

        {/* Category Pill */}
        <div className="px-4 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-full mb-6">
          <span className="text-white text-xs font-medium">{category}</span>
        </div>

        {/* Photo Placeholder */}
        <div className="w-24 h-24 border border-zinc-700 rounded-full bg-zinc-900/30 flex items-center justify-center mb-4">
          <span className="text-zinc-600 text-[10px] text-center px-2">
            {photoLabel}
          </span>
        </div>

        {/* People Info */}
        <div className="text-center space-y-1">
          {people.map((person, index) => (
            <p
              key={index}
              className="text-white/90 text-xs md:text-sm font-light leading-relaxed"
            >
              {person}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Slide25PlatformCompanies() {
  return (
    <Section id="slide-25" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        >
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </motion.div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              The new breed of platform companies for the AI era
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl font-medium text-white/70"
            >
              Breaking the mold
            </motion.h2>
          </div>

          {/* Five Company Cards Row */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-6 justify-center items-stretch">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                name={company.name}
                category={company.category}
                people={company.people}
                photoLabel={company.photoLabel}
                delay={company.delay}
                highlight={company.highlight}
              />
            ))}
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        >
          <span className="text-zinc-600 text-xs">GOLDMAN SACHS</span>
        </motion.div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          25
        </motion.div>
      </div>
    </Section>
  );
}
