"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

// Reusable placeholder components
const PlaceholderBox = ({
  label,
  delay,
  className = "",
}: {
  label: string;
  delay: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className={`border border-zinc-700 rounded-lg bg-zinc-900/30 p-4 flex items-center justify-center ${className}`}
    >
      <span className="text-zinc-500 text-xs md:text-sm text-center">
        {label}
      </span>
    </motion.div>
  );
};

const TimesIcon = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center justify-center text-white/60 text-xl font-bold"
    >
      ×
    </motion.div>
  );
};

export default function Slide29BuildingBlocks() {
  return (
    <Section id="slide-29" className="bg-black">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
            >
              Building blocks for Vercel&apos;s model as a public company
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl font-medium text-white/70"
            >
              Different paths investors could take to evaluate P*Q for Vercel
            </motion.h2>
          </div>

          {/* Revenue Header with A/B Markers */}
          <div className="mb-8 md:mb-12">
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full max-w-5xl border-2 border-zinc-700 rounded-full bg-zinc-900/30 p-4 text-center"
              >
                <span className="text-zinc-500 text-sm md:text-base">
                  REVENUE_HEADER_PLACEHOLDER
                </span>
              </motion.div>

              {/* A Marker */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute left-[15%] -bottom-8 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white text-sm font-bold"
              >
                A
              </motion.div>

              {/* B Marker */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute right-[15%] -bottom-8 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white text-sm font-bold"
              >
                B
              </motion.div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* LEFT COLUMN - User-Centric Path (Section A) */}
            <div className="space-y-6">
              {/* A1. Label */}
              <PlaceholderBox
                label="P*Q_ONGOING_LABEL_PLACEHOLDER"
                delay={0.9}
                className="h-16"
              />

              {/* A2. Ongoing P*Q Boxes */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <PlaceholderBox
                  label="PAID_USERS_PLACEHOLDER"
                  delay={1.0}
                  className="h-20"
                />
                <TimesIcon delay={1.1} />
                <PlaceholderBox
                  label="ARPU_PLACEHOLDER"
                  delay={1.2}
                  className="h-20"
                />
              </div>

              {/* A3. Disclosure Framework */}
              <PlaceholderBox
                label="USER_CENTRIC_DISCLOSURE_PLACEHOLDER"
                delay={1.3}
                className="h-24"
              />

              {/* A4. P*Q Longer-Term */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <PlaceholderBox
                  label="TARGET_PAID_USERS_PLACEHOLDER"
                  delay={1.4}
                  className="h-20"
                />
                <TimesIcon delay={1.5} />
                <PlaceholderBox
                  label="ARPU_PLACEHOLDER"
                  delay={1.6}
                  className="h-20"
                />
              </div>
            </div>

            {/* RIGHT COLUMN - Customer-Centric Path (Section B) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="border-2 border-dashed border-yellow-600/60 rounded-xl p-6 bg-yellow-900/5 space-y-6"
            >
              {/* B1. Label */}
              <PlaceholderBox
                label="P*Q_ONGOING_LABEL_PLACEHOLDER_RIGHT"
                delay={1.8}
                className="h-16"
              />

              {/* B2. Ongoing P*Q Boxes */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <PlaceholderBox
                  label="NUM_CUSTOMERS_PLACEHOLDER"
                  delay={1.9}
                  className="h-20"
                />
                <TimesIcon delay={2.0} />
                <PlaceholderBox
                  label="ARPC_PLACEHOLDER"
                  delay={2.1}
                  className="h-20"
                />
              </div>

              {/* B3. Disclosure Framework */}
              <PlaceholderBox
                label="CUSTOMER_CENTRIC_DISCLOSURE_PLACEHOLDER"
                delay={2.2}
                className="h-24"
              />

              {/* B4. P*Q Longer-Term */}
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                <PlaceholderBox
                  label="TARGET_NUM_CUSTOMERS_PLACEHOLDER"
                  delay={2.3}
                  className="h-20"
                />
                <TimesIcon delay={2.4} />
                <PlaceholderBox
                  label="ARPC_PLACEHOLDER"
                  delay={2.5}
                  className="h-20"
                />
              </div>
            </motion.div>
          </div>

          {/* Footer Highlight Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="mt-6 flex justify-center lg:justify-end"
          >
            <p className="text-yellow-500 text-sm md:text-base font-medium">
              Most common approach for public software companies
            </p>
          </motion.div>
        </div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          29
        </motion.div>
      </div>
    </Section>
  );
}
