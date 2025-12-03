"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

const layers = [
  {
    heading: "Ecosystem & Enterprise",
    subtext: "Marketplace  •  Governance  •  Compliance  •  Observability",
    bgColor: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
  },
  {
    heading: "Inference Primitives",
    subtext: "Multi Modal Edge Inference  •  Adaptive Compute  •  Model Routine",
    bgColor: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
  },
  {
    heading: "Machine Learning Pipelines",
    subtext: "Ingestion  •  Training Orchestration  •  Evaluation",
    bgColor: "linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)",
  },
  {
    heading: "AI Agent Infrastructure",
    subtext: "State Management  •  Tool Registry  •  Multi-Agent Routine",
    bgColor: "linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)",
  },
  {
    heading: "Durable Orchestration",
    subtext: "Workflows  •  Event-Driven DAGs  •  TBU in the Loop",
    bgColor: "linear-gradient(135deg, #5a5a5a 0%, #4a4a4a 100%)",
  },
  {
    heading: "Execution Fabric",
    subtext: "Fluid Compute  •  Global Edge  •  AI Gateway",
    bgColor: "linear-gradient(135deg, #6a6a6a 0%, #5a5a5a 100%)",
  },
];

export default function Slide11InfrastructureLayers() {
  return (
    <Section id="slide-11" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
          {/* Header Section */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12"
          >
            Setting up a new class of infrastructure
          </motion.h1>

          {/* Vertical Layer Stack */}
          <div className="space-y-2 md:space-y-2.5 max-w-6xl mx-auto">
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
                className="p-3 md:p-4 flex flex-col items-center justify-center text-center min-h-[45px] md:min-h-[52px]"
                style={{
                  background: layer.bgColor,
                }}
              >
                {/* Heading */}
                <h2 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-0.5 md:mb-1">
                  {layer.heading}
                </h2>

                {/* Subtext */}
                <p className="text-white text-xs md:text-sm lg:text-base font-normal opacity-90">
                  {layer.subtext}
                </p>
              </motion.div>
            ))}
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
          11
        </motion.div>
      </div>
    </Section>
  );
}
