"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const layers = [
  {
    heading: "Ecosystem & Enterprise",
    subtext: "Marketplace  •  Governance  •  Compliance  •  Observability",
    bgColor: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
  },
  {
    heading: "Inference Primitives",
    subtext: "Multi Modal Edge Inference  •  Adaptive Compute  •  Model Routine",
    bgColor: "linear-gradient(135deg, #374151 0%, #1f2937 100%)",
  },
  {
    heading: "Machine Learning Pipelines",
    subtext: "Ingestion  •  Training Orchestration  •  Evaluation",
    bgColor: "linear-gradient(135deg, #4b5563 0%, #374151 100%)",
  },
  {
    heading: "AI Agent Infrastructure",
    subtext: "State Management  •  Tool Registry  •  Multi-Agent Routine",
    bgColor: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
  },
  {
    heading: "Durable Orchestration",
    subtext: "Workflows  •  Event-Driven DAGs  •  TBU in the Loop",
    bgColor: "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)",
  },
  {
    heading: "Execution Fabric",
    subtext: "Fluid Compute  •  Global Edge  •  AI Gateway",
    bgColor: "linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)",
  },
];

export default function Slide12InfrastructureLayers() {
  return (
    <Section id="slide-12" className="bg-black">
      <div className="relative w-full h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20"
          >
            Setting up a new class of infrastructure
          </motion.h1>

          {/* Vertical Layer Stack */}
          <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.heading}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: 0.4 + index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="rounded-2xl md:rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[120px] md:min-h-[140px]"
                style={{
                  background: layer.bgColor,
                }}
              >
                {/* Heading */}
                <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">
                  {layer.heading}
                </h2>

                {/* Subtext */}
                <p className="text-white text-sm md:text-base lg:text-lg font-normal opacity-90">
                  {layer.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          12
        </motion.div>
      </div>
    </Section>
  );
}
