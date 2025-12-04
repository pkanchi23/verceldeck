"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

// Reusable placeholder components
const LabelBox = ({
  label,
  delay,
}: {
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="border border-zinc-700 rounded-lg bg-zinc-900/30 p-1 text-center"
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="border border-zinc-700 rounded-lg bg-zinc-900/30 p-2"
    >
      <div className="space-y-0.5">
        <p className="text-white text-[10px] md:text-xs font-medium mb-2">
          {label}
        </p>
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-1.5">
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/70 text-[10px] md:text-xs">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Slide25DisclosuresKPIs() {
  return (
    <Section id="slide-25" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4 md:pt-6 pb-24">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2"
          >
            Disclosures and KPIs to support model building blocks
          </motion.h1>

          {/* Revenue Header with A/B Markers */}
          <div className="mb-1 md:mb-2">
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full max-w-5xl border-2 border-zinc-700 rounded-full bg-zinc-900/30 p-2 text-center"
              >
                <span className="text-white text-sm md:text-base">
                  REVENUE_HEADER_PLACEHOLDER
                </span>
              </motion.div>

              {/* A Marker */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute left-[25%] -translate-x-1/2 -bottom-16 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white text-sm font-bold"
              >
                A
              </motion.div>

              {/* B Marker */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute right-[25%] translate-x-1/2 -bottom-16 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center text-white text-sm font-bold"
              >
                B
              </motion.div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            {/* LEFT COLUMN - User-Based Framework (Path A) */}
            <div className="space-y-3">
              {/* Q Label */}
              <LabelBox
                label="DISCLOSURE_FRAMEWORK_Q_LABEL_PLACEHOLDER"
                delay={0.9}
              />

              {/* Q Support Metrics */}
              <BulletListBox
                label="Q_SUPPORT_METRICS_PLACEHOLDER"
                items={[
                  "Number of Free Users",
                  "Number of Paying Users¹",
                  "Number of Paying Users by Persona",
                ]}
                delay={1.0}
              />

              {/* P Label */}
              <LabelBox
                label="DISCLOSURE_FRAMEWORK_P_LABEL_PLACEHOLDER"
                delay={1.1}
              />

              {/* P Support Metrics */}
              <BulletListBox
                label="P_SUPPORT_METRICS_PLACEHOLDER"
                items={[
                  "Mix of Users by Pricing Tier / License Type / Persona",
                  "Average Number of Products per User",
                  "ARPU",
                ]}
                delay={1.2}
              />
            </div>

            {/* RIGHT COLUMN - Customer-Centric Framework (Path B) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="border-2 border-dashed rounded-xl p-4 space-y-2"
              style={{ borderColor: "rgba(234, 179, 8, 0.6)", backgroundColor: "rgba(234, 179, 8, 0.03)" }}
            >
              {/* Q Label */}
              <LabelBox
                label="DISCLOSURE_FRAMEWORK_Q_LABEL_PLACEHOLDER_RIGHT"
                delay={1.4}
              />

              {/* Q Support - Customer-Centric */}
              <BulletListBox
                label="Q_SUPPORT_CUSTOMER_CENTRIC_PLACEHOLDER"
                items={[
                  "Number of Customers¹",
                  'Discussion of "base" customers subset',
                  "Number of Customers over [$X]¹",
                ]}
                delay={1.5}
              />

              {/* P Support - Customer-Centric */}
              <BulletListBox
                label="P_SUPPORT_CUSTOMER_CENTRIC_PLACEHOLDER"
                items={[
                  "Net Dollar Retention¹",
                  "Gross Dollar Retention",
                  "Average Revenue per Customer >[$X]",
                  "Mix of Business by Pricing Tier",
                  "Number of Customers with >[X] Products",
                ]}
                delay={1.6}
              />

              <p className="text-sm md:text-base font-medium text-center mt-4" style={{ color: "#eab308" }}>
                Most common approach for public software companies
              </p>
            </motion.div>
          </div>



          {/* Bottom-Left Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-12"
          >
            <p className="text-white/40 text-xs">
              ¹ Key ongoing metric.
            </p>
          </motion.div>
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
