"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

// Reusable placeholder components
const LabelBox = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.1 }
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={
        hasEntered
          ? { duration: 0.1 }
          : { delay, duration: 0.4, ease: "easeOut" }
      }
      onAnimationComplete={() => setHasEntered(true)}
      className="border border-white rounded-lg bg-zinc-900/50 p-1.5 text-center cursor-pointer transition-colors"
    >
      <span className="text-white text-[10px] md:text-xs font-medium">
        {label}
      </span>
    </motion.div>
  );
};

const BulletListBox = ({
  label,
  items,
  delay,
}: {
  label: string;
  items: string[];
  delay: number;
}) => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.1 }
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={
        hasEntered
          ? { duration: 0.1 }
          : { delay, duration: 0.4, ease: "easeOut" }
      }
      onAnimationComplete={() => setHasEntered(true)}
      className="border border-white rounded-lg bg-zinc-900/50 p-2 cursor-pointer transition-colors"
    >
      <div className="space-y-0.5">
        <p className="text-white text-[10px] md:text-xs font-medium mb-2">
          {label}
        </p>
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-1.5">
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white text-[10px] md:text-xs">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Revenue Header Component
const RevenueHeader = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 0.5)",
          transition: { duration: 0.1 }
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={
          hasEntered
            ? { duration: 0.1 }
            : { delay: 0.5, duration: 0.5 }
        }
        onAnimationComplete={() => setHasEntered(true)}
        className="w-full max-w-5xl border-2 border-white rounded-full bg-zinc-900/50 p-2 text-center cursor-pointer transition-colors"
      >
        <span className="text-white text-sm md:text-base font-bold">Revenue</span>
      </motion.div>

      {/* A Marker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute left-[25%] -translate-x-1/2 -bottom-16 w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center text-black text-sm font-bold"
      >
        A
      </motion.div>

      {/* B Marker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute right-[25%] translate-x-1/2 -bottom-16 w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center text-black text-sm font-bold"
      >
        B
      </motion.div>
    </div>
  );
};

export default function Slide25DisclosuresKPIs() {
  return (
    <Section id="slide-25" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-20">
          <SlideHeader
            title="Disclosures and KPIs to support model building blocks"
            className="mb-8 md:mb-12"
          />

          {/* Revenue Header with A/B Markers */}
          <div className="mb-8 md:mb-12">
            <RevenueHeader />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-20">
            {/* LEFT COLUMN - User-Based Framework (Path A) */}
            <div className="space-y-6 pt-6 border-t-2 border-transparent">
              {/* Q Label */}
              <LabelBox label="Disclosure Framework to Support Q" delay={0.9} />

              {/* Q Support Metrics */}
              <BulletListBox
                label=""
                items={[
                  "Number of Free Users",
                  "Number of Paying Users¹",
                  "Number of Paying Users by Persona",
                ]}
                delay={1.0}
              />

              {/* P Label */}
              <LabelBox label="Disclosure Framework to Support P" delay={1.1} />

              {/* P Support Metrics */}
              <BulletListBox
                label=""
                items={[
                  "Mix of Users by Pricing Tier / License Type / Persona",
                  "Average Number of Products per User",
                  "ARPU",
                ]}
                delay={1.2}
              />
            </div>

            {/* RIGHT COLUMN - Customer-Centric Framework (Path B) */}
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="border-2 border-dashed rounded-xl p-6 space-y-6"
                style={{ borderColor: "rgba(234, 179, 8, 0.6)", backgroundColor: "rgba(234, 179, 8, 0.03)" }}
              >
                {/* Q Label */}
                <LabelBox label="Disclosure Framework to Support Q" delay={1.4} />

                {/* Q Support - Customer-Centric */}
                <BulletListBox
                  label=""
                  items={[
                    "Number of Customers¹",
                    "Discuss potential for subset of paying customers as “base” customers (e.g., customers $1k+ ARR or over X users)",
                    "Number of Customers over [$X]¹",
                  ]}
                  delay={1.5}
                />

                {/* P Support - Customer-Centric */}
                <BulletListBox
                  label=""
                  items={[
                    "Net Dollar Retention¹",
                    "Gross Dollar Retention",
                    "Average Revenue per Customer >[$X]",
                    "Mix of Business by Pricing Tier",
                    "Number of Customers with >[X] Products",
                  ]}
                  delay={1.6}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="text-sm md:text-base font-medium text-center"
                style={{ color: "#eab308" }}
              >
                Most common approach for public software companies
              </motion.p>
            </div>
          </div>



          {/* Bottom-Left Footnote */}
          <div className="-mt-4 mb-6">
            <p className="text-white/40 text-xs">
              ¹ Key ongoing metric.
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
          25
        </div>
      </div>
    </Section>
  );
}
