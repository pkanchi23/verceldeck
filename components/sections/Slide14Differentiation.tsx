"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

const vercelFeatures = [
  {
    title: "Fluid compute dynamic",
    description: "Per-request shifting CPU, GPU matching cost to workload intent with provisioning",
  },
  {
    title: "Ephemeral yet stateful",
    description: "UI micro-frontends that spin up on demand, pull from AI-generated content",
  },
  {
    title: "Inference at the edge",
    description: "Co-locating model execution with user proximity (no latency)",
  },
  {
    title: "AI-native scaling primitives",
    description: "Burst capacity for unpredictable model call patterns",
  },
  {
    title: "Seamless developer experience abstraction",
    description: "Composable building blocks, so developers (builders) can focus on shipping not infrastructure",
  },
  {
    title: "Economic wedge",
    description: "Fine-grained pricing that makes AI features viable at scale vs. hyperscalers' grids designed for generic use",
  },
];

export default function Slide14Differentiation() {
  return (
    <Section id="slide-14" className="bg-black">
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

        {/* Main Content Container */}
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-12">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4"
          >
            Vercel's differentiation
          </motion.h1>

          {/* Two-Column Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Left Column - Vercel Section */}
            <div className="border border-white rounded-2xl p-3 md:p-4 flex flex-col">
              {/* Title */}
              <div className="flex flex-col items-center mb-2">
                <h2 className="text-white font-bold text-2xl md:text-3xl">
                  Vercel
                </h2>
              </div>

              {/* 6 Feature Rows */}
              <div className="space-y-2">
                {vercelFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      delay: 0.4 + index * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="border border-white rounded-xl p-2 md:p-3 flex gap-3"
                  >
                    {/* Icon Placeholder */}
                    <div className="flex-shrink-0 w-10 h-10 border border-white rounded bg-transparent" />

                    {/* Text Block */}
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-sm md:text-base mb-0.5">
                        {feature.title}
                      </h3>
                      <p className="text-white text-xs md:text-sm font-light opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Others Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="border-2 border-red-500 rounded-2xl p-3 md:p-4 flex flex-col"
            >
              {/* Title */}
              <h2 className="text-red-500 font-bold text-2xl md:text-3xl mb-4">
                Others
              </h2>

              {/* Subsections */}
              <div className="space-y-2 flex-1 flex flex-col justify-around">
                {/* 1. Hyperscalers */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="flex gap-4"
                >
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0 w-12 h-12 border border-red-400 rounded-lg bg-transparent flex items-center justify-center">
                    <p className="text-red-400 text-[10px] text-center px-1">
                      [ HYPERSCALER ]
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                      Hyperscalers
                    </h3>
                    <ul className="space-y-1 text-white text-sm md:text-base">
                      <li>• Ops-first platforms designed for generalized compute</li>
                      <li>• AI workloads require complex provisioning and DevOps effort</li>
                      <li>• Developer experience is an afterthought</li>
                    </ul>
                  </div>
                </motion.div>

                {/* 2. Cloudflare */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex gap-4"
                >
                  {/* Logo Placeholder */}
                  <div className="flex-shrink-0 w-12 h-12 border border-red-400 rounded-lg bg-transparent flex items-center justify-center">
                    <p className="text-red-400 text-[10px] text-center px-1">
                      [ CLOUDFLARE ]
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                      Cloudflare
                    </h3>
                    <ul className="space-y-1 text-white text-sm md:text-base">
                      <li>• Strong edge network, but limited in AI-native orchestration and developer-first workflows</li>
                      <li>• Lacks deep inference integration and frontend/backend fusion</li>
                    </ul>
                  </div>
                </motion.div>

                {/* 3. Vibe Coding Tools */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="flex gap-4"
                >
                  {/* Icon Placeholder */}
                  <div className="flex-shrink-0 w-12 h-12 border border-red-400 rounded-lg bg-transparent flex items-center justify-center">
                    <p className="text-red-400 text-[10px] text-center px-1">
                      [ VIBE TOOLS ]
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                      Vibe Coding Tools
                    </h3>
                    <ul className="space-y-1 text-white text-sm md:text-base">
                      <li>• Great for prototyping but not scalable for enterprise-grade, globally distributed applications</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          14
        </motion.div>
      </div>
    </Section>
  );
}
