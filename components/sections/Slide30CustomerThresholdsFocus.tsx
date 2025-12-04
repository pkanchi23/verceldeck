"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide30CustomerThresholdsFocus() {
  const companies = ["FIGMA", "GITLAB", "MONDAY", "DATADOG", "CLOUDFLARE"];

  const rowGroups = [
    "Key Customer Thresholds",
    "Significance",
    "% of Total Revenue / ARR",
    "% Total Customers",
    "Disclosure Language",
  ];

  return (
    <Section id="slide-30" className="bg-black">
      <div className="relative w-full h-screen">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-24">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              What is the right customer &quot;thresholds&quot; to focus on?
            </h1>

            {/* Subtitle */}
            <h2 className="text-base md:text-lg lg:text-xl font-medium text-white/70">
              Company disclosures at IPO
            </h2>
          </div>



          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
            {/* Left Column - Customer Thresholds Table */}
            <div className="h-[500px] bg-transparent border-none flex items-center justify-center p-4 relative">
              <Image
                src="/Slide 30 Customer Threshold/Customer Thresholds Table.png"
                alt="Customer Thresholds Table"
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Right-Hand Callout Box */}
            <div className="h-[500px] border border-white rounded-lg p-6 bg-transparent flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-zinc-500 text-sm font-medium">
                  CALLOUT_SECTION_TITLE_PLACEHOLDER
                </span>
              </div>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start gap-2">
                    <span className="text-white/40 text-sm">•</span>
                    <span className="text-zinc-500 text-xs">
                      BULLET_PLACEHOLDER_{num}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Footnote Placeholder */}
          <div className="mt-12">
            <p className="text-white/40 text-xs">FOOTNOTE_PLACEHOLDER</p>
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
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          30
        </div>
      </div>
    </Section>
  );
}
