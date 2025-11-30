"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

interface FunnelStage {
  id: number;
  title: string;
  items: string[];
  caption: string;
  delay: number;
}

const stages: FunnelStage[] = [
  {
    id: 1,
    title: "Create Prototype",
    items: ["V0 Templates", "Quick Starts"],
    caption: "Inspiration becomes action instantly",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Build, Integrated AI",
    items: ["AI SDK", "Edge Functions", "Next.JS, others", "Gateway"],
    caption: "Apps assembled with AI-first logic, perfect frontend",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Deploy & Serve at Scale",
    items: ["Edge Networks", "Blob Fluid Compute", "Observability", "Analytics"],
    caption: "Apps go live instantly, usage begins to scale",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Collaborate, Expand Teams",
    items: [
      "Previews",
      "Advanced Git Workflows",
      "Edge Computing",
      "Agent Teams",
      "Rolling Releases",
      "Micro Trends",
    ],
    caption: "More users join, complexity grows, higher tiers",
    delay: 1.2,
  },
  {
    id: 5,
    title: "Enterprise Scale",
    items: [
      "SSO",
      "Compliance & SCA Sandbox",
      "DDoS Mitigation",
      "Firewall",
    ],
    caption: "Security, governance, & scale readiness\nEnterprises commit",
    delay: 1.5,
  },
];

// Funnel Stage Component
const FunnelStage = ({ stage }: { stage: FunnelStage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: stage.delay, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {/* Stage Title */}
      <h3 className="text-white text-sm md:text-base font-bold mb-4 text-center px-2">
        {stage.title}
      </h3>

      {/* Funnel Shape Placeholder */}
      <div className="relative w-full max-w-[180px] md:max-w-[200px] mb-4">
        <div
          className="border-2 border-white/40 bg-zinc-900/30 rounded-lg p-4 md:p-6 h-[320px] md:h-[360px] flex items-center justify-center"
          style={{
            clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="text-center space-y-2">
            {stage.items.map((item, index) => (
              <div
                key={index}
                className="text-white/80 text-xs md:text-sm flex items-center justify-center gap-2"
              >
                <span className="text-white/40">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-white/60 text-xs md:text-sm text-center max-w-[180px] md:max-w-[200px] leading-relaxed whitespace-pre-line">
        {stage.caption}
      </p>
    </motion.div>
  );
};

// Background Icon Component
const BackgroundIcon = ({ x, y, delay }: { x: string; y: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03, y: [0, -5, 0] }}
      transition={{
        opacity: { delay, duration: 1 },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute text-white/10 text-6xl font-bold pointer-events-none"
      style={{ left: x, top: y }}
    >
      AI
    </motion.div>
  );
};

export default function Slide28GrowthAlgorithm() {
  return (
    <Section id="slide-28" className="bg-black">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Icons */}
        <BackgroundIcon x="10%" y="20%" delay={0.2} />
        <BackgroundIcon x="25%" y="60%" delay={0.4} />
        <BackgroundIcon x="50%" y="15%" delay={0.6} />
        <BackgroundIcon x="70%" y="50%" delay={0.8} />
        <BackgroundIcon x="85%" y="25%" delay={1.0} />

        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center z-10"
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-left"
            >
              The Vercel Growth Algorithm
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl font-medium text-white/80 text-center"
            >
              From Idea → Prototype → Deployed App → Scaled Enterprise Adoption
            </motion.h2>
          </div>

          {/* Five Funnel Stages */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
            {stages.map((stage) => (
              <FunnelStage key={stage.id} stage={stage} />
            ))}
          </div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 md:p-6 text-center"
          >
            <p className="text-white text-sm md:text-base lg:text-lg font-bold">
              Top of funnel grows fast. Platform monetization compounds are huge.
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
          28
        </motion.div>
      </div>
    </Section>
  );
}
