"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide32RoadshowMetricsV2() {
  const leftCategories = [
    {
      number: 3,
      title: "Multi-Product Adoption",
    },
    {
      number: 4,
      title: "ARR / Customer Breakdown by Tier",
    },
  ];

  const examples = [
    { company: "CROWDSTRIKE" },
    { company: "DATADOG" },
    { company: "GITLAB" },
    { company: "ATLASSIAN" },
  ];

  return (
    <Section id="slide-32" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-16">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8">
            Key components of roadshow / analyst day metrics disclosures
          </h1>

          {/* Main Grid Layout */}
          <div className="space-y-6 mt-24 md:mt-32">
            {/* Row 1: Multi-Product Adoption */}
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-center">
              {/* Left Box */}
              <div className="h-[120px] border border-white/40 rounded-lg p-4 bg-transparent flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-xs md:text-sm">
                      Multi-Product Adoption
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CrowdStrike */}
                <div className="rounded-lg bg-transparent flex flex-col items-center h-[200px] relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <div className="w-full h-full relative">
                    <Image
                      src="/Slide 31-32 Key Roadshow Components/Key Roadshow Component CRWD.png"
                      alt="CrowdStrike Metric"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Datadog */}
                <div className="rounded-lg bg-transparent flex flex-col items-center h-[200px] relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <div className="w-full h-full relative">
                    <Image
                      src="/Slide 31-32 Key Roadshow Components/Key Roadshow Component DDOG 2.png"
                      alt="Datadog Metric"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: ARR / Customer Breakdown by Tier */}
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-center">
              {/* Left Box */}
              <div className="h-[120px] border border-white/40 rounded-lg p-4 bg-transparent flex flex-col justify-center">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-xs">4</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-xs md:text-sm">
                      ARR / Customer Breakdown by Tier
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GitLab */}
                <div className="rounded-lg bg-transparent flex flex-col items-center h-[200px] relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <div className="w-full h-full relative">
                    <Image
                      src="/Slide 31-32 Key Roadshow Components/Key Roadshow Component GTLB 2.png"
                      alt="GitLab Metric"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Atlassian */}
                <div className="rounded-lg bg-transparent flex flex-col items-center h-[200px] relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <div className="w-full h-full relative">
                    <Image
                      src="/Slide 31-32 Key Roadshow Components/Key Roadshow Component TEAM 2.png"
                      alt="Atlassian Metric"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="mt-6">
            <p className="text-white/40 text-xs">
            Source: Public filings, IPO roadshow presentations
            </p>
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
          32
        </div>
      </div>
    </Section>
  );
}
