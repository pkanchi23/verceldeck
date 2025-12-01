"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

// Reusable Column Placeholder Component
const ColumnPlaceholder = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="w-full aspect-square border-2 border-zinc-600 rounded-lg bg-zinc-900/30 flex items-center justify-center"
    >
      <span className="text-zinc-500 text-sm md:text-base font-medium">
        {label}
      </span>
    </motion.div>
  );
};

// Reusable Value Placeholder Component
const ValuePlaceholder = ({
  value,
  delay,
}: {
  value: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="text-center mt-4 md:mt-6"
    >
      <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">
        {value}
      </span>
    </motion.div>
  );
};

// Reusable Label Placeholder Component
const LabelPlaceholder = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="text-center mt-2 md:mt-3"
    >
      <span className="text-white/70 text-sm md:text-base font-medium">
        {label}
      </span>
    </motion.div>
  );
};

// Reusable Arrow Placeholder Component
const ArrowPlaceholder = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-center px-4"
    >
      <div className="w-16 h-16 border border-zinc-600 rounded bg-zinc-900/30 flex items-center justify-center">
        <span className="text-zinc-500 text-xs">{label}</span>
      </div>
    </motion.div>
  );
};

export default function Slide24NextLayerAbstraction() {
  return (
    <Section id="slide-24" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Header Section */}
        <div className="flex items-start justify-between px-6 md:px-12 pt-16 md:pt-20 mb-12 md:mb-16">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white max-w-4xl"
          >
            AI cloud for Vercel is the next layer of abstraction
          </motion.h1>

          {/* Top-Right Logo Placeholder (Vercel) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:flex w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent items-center justify-center flex-shrink-0 ml-6"
          >
            <span className="text-zinc-600 text-xs">VERCEL</span>
          </motion.div>
        </div>

        {/* Three-Column Layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 lg:hidden">
            {/* Column 1 */}
            <div className="flex flex-col">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_1" delay={0.0} />
              <ValuePlaceholder value="~$900bn" delay={0.1} />
              <LabelPlaceholder label="Hardware" delay={0.2} />
            </div>

            {/* Arrow 1 (Hidden on mobile as per original design, or add if needed) */}

            {/* Column 2 */}
            <div className="flex flex-col">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_2" delay={0.4} />
              <ValuePlaceholder value="~$2 Trillion" delay={0.5} />
              <LabelPlaceholder
                label="Backend Cloud Infrastructure"
                delay={0.6}
              />
            </div>

            {/* Arrow 2 */}

            {/* Column 3 */}
            <div className="flex flex-col">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_3" delay={0.8} />
              <ValuePlaceholder value="$???" delay={0.9} />
              <LabelPlaceholder label="Frontend Cloud" delay={1.0} />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
            {/* Row 1: Placeholders and Arrows (Vertically Centered) */}
            <div className="flex items-center justify-center">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_1" delay={0.0} />
            </div>
            <div className="flex items-center justify-center">
              <ArrowPlaceholder label="ARROW_1" delay={0.3} />
            </div>
            <div className="flex items-center justify-center">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_2" delay={0.4} />
            </div>
            <div className="flex items-center justify-center">
              <ArrowPlaceholder label="ARROW_2" delay={0.7} />
            </div>
            <div className="flex items-center justify-center">
              <ColumnPlaceholder label="COLUMN_PLACEHOLDER_3" delay={0.8} />
            </div>

            {/* Row 2: Details (Values + Labels) */}
            <div className="flex flex-col">
              <ValuePlaceholder value="~$900bn" delay={0.1} />
              <LabelPlaceholder label="Hardware" delay={0.2} />
            </div>
            <div>{/* Spacer under Arrow 1 */}</div>
            <div className="flex flex-col">
              <ValuePlaceholder value="~$2 Trillion" delay={0.5} />
              <LabelPlaceholder
                label="Backend Cloud Infrastructure"
                delay={0.6}
              />
            </div>
            <div>{/* Spacer under Arrow 2 */}</div>
            <div className="flex flex-col">
              <ValuePlaceholder value="$???" delay={0.9} />
              <LabelPlaceholder label="Frontend Cloud" delay={1.0} />
            </div>
          </div>

          {/* Mobile Arrow Indicators */}
          <div className="lg:hidden flex flex-col items-center gap-4 my-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-zinc-500 text-2xl"
            >
              ↓
            </motion.div>
          </div>
        </div>

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          24
        </motion.div>
      </div>
    </Section>
  );
}
