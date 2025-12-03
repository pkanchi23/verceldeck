"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

// Chart Block Component
const ChartBlock = ({
  title,
  color,
  colorClass,
}: {
  title: string;
  color: string;
  colorClass: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Block Title */}
      <h3 className="text-white text-sm md:text-base font-medium mb-4">
        {title}
      </h3>

      {/* Bars */}
      <div className="flex items-end gap-3 md:gap-4 mb-4">
        {/* Q1 Bar */}
        <div className="flex flex-col items-center h-28 md:h-32 justify-end">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "5rem" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className={`w-12 md:w-16 ${colorClass} rounded-t`}
          />
        </div>

        {/* Q2 Bar */}
        <div className="flex flex-col items-center relative h-28 md:h-32 justify-end">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "7rem" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className={`w-12 md:w-16 ${colorClass} rounded-t`}
          />
        </div>
      </div>

      {/* Quarter Labels */}
      <div className="flex gap-3 md:gap-4 mb-4">
        <span className="text-white/70 text-xs w-12 md:w-16 text-center">
          Q1'25
        </span>
        <span className="text-white/70 text-xs w-12 md:w-16 text-center">
          Q2'25
        </span>
      </div>

      {/* Metrics Table */}
      <div className="w-full border border-zinc-700 rounded-lg overflow-hidden">
        <table className="w-full text-xs">
          <tbody>
            <tr className="border-b border-zinc-800">
              <td className="text-white/70 p-2 text-left">% Penetration</td>
              <td className="text-white/50 p-2 text-center">[%]</td>
              <td className="text-white/50 p-2 text-center">[%]</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="text-white/70 p-2 text-left">% Contribution of ARR</td>
              <td className="text-white/50 p-2 text-center">[%]</td>
              <td className="text-white/50 p-2 text-center">[%]</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="text-white/70 p-2 text-left">Avg. ARR / Customer</td>
              <td className="text-white/50 p-2 text-center">[$]</td>
              <td className="text-white/50 p-2 text-center">[$]</td>
            </tr>
            <tr>
              <td className="text-white/70 p-2 text-left text-[10px]">
                % at $50k who become $100k
              </td>
              <td className="text-white/50 p-2 text-center">[%]</td>
              <td className="text-white/50 p-2 text-center">[%]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Revenue Row Component
const RevenueRow = ({
  label,
  todayValue,
  futureValue,
}: {
  label: string;
  todayValue: string;
  futureValue: string;
}) => {
  return (
    <div className="border border-zinc-700 rounded-lg p-3 md:p-4 mb-3">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="text-white/80 text-xs md:text-sm">{label}</div>
        <div className="text-white text-xs md:text-sm text-center">
          {todayValue}
        </div>
        <div className="text-white text-xs md:text-sm text-right">
          {futureValue}
        </div>
      </div>
    </div>
  );
};

export default function Slide22IllustrativeFramework() {
  return (
    <Section id="slide-22" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Header Section */}
        <div className="flex items-start justify-between px-6 md:px-12 pt-16 md:pt-20 mb-8 md:mb-12">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="underline">Illustrative</span> long-term framework
          </h1>

          {/* Top-Right Logo (Vercel) */}
          <motion.div className="hidden md:flex w-[140px] h-[40px] items-center justify-end flex-shrink-0 ml-6">
            <div className="relative w-full h-full">
              <Image
                src="/Vercel Logo.svg"
                alt="Vercel Logo"
                fill
                className="object-contain object-right"
              />
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12">
            {/* Left Column - Customer Charts */}
            <div>
              {/* Column Subtitle */}
              <div className="mb-6">
                <h2 className="text-white text-lg md:text-xl font-medium text-center mb-2">
                  Illustrative Number of Customers
                </h2>
                <div className="border-b border-zinc-700" />
              </div>

              {/* Three Chart Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                <ChartBlock
                  title="Total"
                  color="#a855f7"
                  colorClass="bg-purple-500"
                />
                <ChartBlock
                  title=">$50k ARR"
                  color="#eab308"
                  colorClass="bg-yellow-500"
                />
                <ChartBlock
                  title=">$100k ARR"
                  color="#14b8a6"
                  colorClass="bg-teal-500"
                />
              </div>
            </div>

            {/* Center Divider with Arrow */}
            <div className="hidden lg:flex flex-col items-center justify-center relative">
              <div className="w-px h-full bg-zinc-700" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="absolute top-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 border border-zinc-600 rounded bg-black flex items-center justify-center">
                  <span className="text-white text-2xl">→</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Long-Term Revenue */}
            <div>
              {/* Column Subtitle */}
              <div className="mb-6">
                <h2 className="text-white text-lg md:text-xl font-medium text-center mb-2">
                  Illustrative Long-Term Revenue
                </h2>
                <div className="border-b border-zinc-700" />
              </div>

              {/* Column Headers */}
              <div className="grid grid-cols-3 gap-4 mb-4 px-3 md:px-4">
                <div className="text-white/60 text-xs md:text-sm"></div>
                <div className="text-white font-medium text-xs md:text-sm text-center">
                  Today
                </div>
                <div className="text-white font-medium text-xs md:text-sm text-right">
                  2030
                </div>
              </div>

              {/* Revenue Rows */}
              <RevenueRow
                label="Total Revenue"
                todayValue="$200M"
                futureValue="[$2B]"
              />
              <RevenueRow
                label="Target % of Rev >[$50k]"
                todayValue="50%"
                futureValue="[70%]"
              />
              <RevenueRow
                label="Target ARPC"
                todayValue="[$]"
                futureValue="[$]"
              />
              <RevenueRow
                label="Implied # of Customers >[$50k]"
                todayValue="[#]"
                futureValue="[#]"
              />
              <RevenueRow
                label="Percent of Total Customers"
                todayValue="[%]"
                futureValue="[%]"
              />
            </div>
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
        <motion.div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          22
        </motion.div>
      </div>
    </Section>
  );
}
