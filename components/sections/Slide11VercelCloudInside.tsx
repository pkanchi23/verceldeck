"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const iconLabels = [
  "Serverless Compute",
  "Logic",
  "Personalization",
  "CI/CD",
  "Analytics",
  "DevOps Software",
  "Observability",
  "Global Scale",
  "Security",
  "Edge Storage",
];

export default function Slide11VercelCloudInside() {
  // Calculate positions for icons around the circle
  const radius = 280; // radius for icon placement
  const iconCount = iconLabels.length;

  return (
    <Section id="slide-11" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4"
            >
              What's inside the Vercel cloud
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-white font-normal"
            >
              From prompt to production, every primitive reimagined for the AI era
            </motion.p>
          </div>

          {/* Central Circular System Diagram */}
          <div className="relative w-full max-w-6xl mx-auto h-[700px] md:h-[800px] flex items-center justify-center">
            {/* Purple Glow Background */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 60%)",
              }}
            />

            {/* Concentric Circles */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute w-[600px] h-[600px] rounded-full border-2 border-purple-500/30"
              />

              {/* Middle Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/20"
              />

              {/* Inner Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute w-[200px] h-[200px] rounded-full border border-purple-500/20"
              />

              {/* Central Vercel Triangle Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute w-[80px] h-[80px] border border-white/40 rounded-lg flex items-center justify-center bg-zinc-900/60"
              >
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-white/60" />
              </motion.div>

              {/* Icon Placeholders around Outer Ring */}
              {iconLabels.map((label, index) => {
                const angle = (index / iconCount) * 2 * Math.PI - Math.PI / 2; // Start from top
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9, x: x * 0.8, y: y * 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, x, y }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: 0.8 + index * 0.075,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      {/* Icon Box */}
                      <div className="w-12 h-12 border border-purple-400/60 rounded-lg bg-purple-900/20 flex items-center justify-center mb-2">
                        <div className="w-6 h-6 border border-purple-300/60 rounded" />
                      </div>
                      {/* Label */}
                      <p className="text-white text-xs text-center whitespace-nowrap max-w-[100px]">
                        {label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quadrant Content Panels */}
            {/* Panel 1 - Top Left (Compute & Deployment) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute top-[8%] left-[2%] w-[220px] border border-white/30 rounded-xl p-6 bg-zinc-900/80"
            >
              <h3 className="text-white font-bold text-sm mb-3">Compute & Deployment</h3>
              <ul className="space-y-2 text-white text-xs">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-white/40 rounded-sm flex-shrink-0" />
                  <span>Vercel Agent</span>
                </li>
                <li>• Fluid Compute with Active CPU pricing</li>
              </ul>
            </motion.div>

            {/* Panel 2 - Top Right (AI & Personalization) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute top-[8%] right-[2%] w-[220px] border border-pink-500/40 rounded-xl p-6 bg-zinc-900/80"
            >
              <h3 className="font-bold text-sm mb-3" style={{ color: "#FF32FF" }}>
                AI & Personalization
              </h3>
              <ul className="space-y-2 text-white text-xs">
                <li>• AI Gateway</li>
                <li>• Rolling releases</li>
                <li>• Micro-frontend support</li>
                <li>• VO Agent Showcase</li>
              </ul>
            </motion.div>

            {/* Panel 3 - Bottom Left (Security / Reliability) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="absolute bottom-[8%] left-[2%] w-[220px] border border-yellow-500/40 rounded-xl p-6 bg-zinc-900/80"
            >
              <h3 className="font-bold text-sm mb-3" style={{ color: "#F9D65C" }}>
                Security / Reliability
              </h3>
              <ul className="space-y-2 text-white text-xs">
                <li>• BotID (w/ Kasada)</li>
                <li>• Real-time DDoS mitigation</li>
                <li>• Web Application Firewall</li>
              </ul>
            </motion.div>

            {/* Panel 4 - Bottom Right (Dev Tooling and Insights) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="absolute bottom-[8%] right-[2%] w-[220px] border border-teal-500/40 rounded-xl p-6 bg-zinc-900/80"
            >
              <h3 className="font-bold text-sm mb-3" style={{ color: "#58F0D0" }}>
                Dev Tooling and Insights
              </h3>
              <ul className="space-y-2 text-white text-xs">
                <li>• Vercel Sandbox</li>
                <li>• Leading frontend dev frameworks</li>
                <li>• Web Analytics for Docs & Products teams</li>
              </ul>
            </motion.div>
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
          11
        </motion.div>
      </div>
    </Section>
  );
}
