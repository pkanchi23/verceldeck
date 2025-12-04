"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide36RoadshowMetrics() {
  const leftCategories = [
    {
      number: 1,
      title: "One-Time User / Engagement Metrics",
    },
    {
      number: 2,
      title: "Customers / Customers Over Threshold",
    },
  ];

  const examples = [
    { company: "ATLASSIAN" },
    { company: "SLACK" },
    { company: "GITLAB" },
    { company: "DATADOG" },
  ];

  return (
    <Section id="slide-31" className="bg-black">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-16">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8">
            Key components of roadshow / analyst day metrics disclosures
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
            {/* Left Column - Category Boxes */}
            <div className="space-y-4 flex flex-col justify-center">
              {leftCategories.map((category) => (
                <div
                  key={category.number}
                  className="h-[200px] border border-white rounded-lg p-4 bg-transparent flex flex-col justify-center"
                >
                  <div className="flex items-start gap-3">
                    {/* Circle Number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {category.number}
                      </span>
                    </div>

                    {/* Section Title */}
                    <div className="flex-1">
                      <p className="text-white font-medium text-xs md:text-sm">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Example Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="border border-white rounded-lg p-4 bg-transparent flex flex-col items-center h-[200px]"
                >
                  {/* Logo Placeholder */}
                  <div className="w-full h-[30px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center mb-3">
                    <span className="text-zinc-500 text-[10px]">
                      {example.company}_LOGO
                    </span>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full h-[150px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center">
                    <span className="text-zinc-500 text-xs">
                      IMAGE_PLACEHOLDER
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="mt-6">
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
          31
        </div>
      </div>
    </Section>
  );
}
