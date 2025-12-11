"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

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
      <div className="relative w-full h-full">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 md:pt-10 pb-20">
          {/* Header Section */}
          <SlideHeader
            title='What is the right customer "thresholds" to focus on?'
            subtitle="Company disclosures at IPO"
            className="mb-8 md:mb-12 whitespace-nowrap"
          />



          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-6 lg:gap-8">
            {/* Left Column - Customer Thresholds Table */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-[500px] bg-transparent border-none flex items-center justify-center p-4 relative"
            >
              <Image
                src="/Slide 30 Customer Threshold/Customer Thresholds Table.png"
                alt="Customer Thresholds Table"
                fill
                className="object-contain p-4"
              />
            </motion.div>

            {/* Right-Hand Callout Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }} // Starts after image finishes (0.2 + 0.6 = 0.8)
              className="h-[300px] self-center border border-white rounded-lg p-6 bg-transparent flex flex-col justify-center"
            >
              <div className="mb-4">
                <span className="text-white text-sm font-medium">
                  Other Factors to Consider
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white text-sm">
                    Meaningful uptick in net expansion metrics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white text-sm">
                    Meaningful downtick in churn
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white text-sm">
                    GTM / S&M alignment based on customer size / spend
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white text-sm">
                    Meaningful uptick in user engagement
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Footer Footnote */}
          <div className="-mt-6 mb-6">
            <p className="text-white/40 text-xs">
              Source: Public filings, IPO roadshow presentations, Goldman Sachs Investment Research; ¹ Defined as customers with $50k+ ARR.
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
          30
        </div>
      </div>
    </Section>
  );
}
