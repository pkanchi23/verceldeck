"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

const iconLabels = [
  { label: "Serverless Compute", image: "/Slide 10 Circle SVGs/Serverless Compute.png" },
  { label: "Logic", image: "/Slide 10 Circle SVGs/Logic SVG.png" },
  { label: "Personalization", image: "/Slide 10 Circle SVGs/Personalization SVG.png" },
  { label: "CI/CD", image: "/Slide 10 Circle SVGs/CI and CD.png" },
  { label: "Analytics", image: "/Slide 10 Circle SVGs/Analytics SVG.png" },
  { label: "DevOps Software", image: "/Slide 10 Circle SVGs/DevOps Software.png" },
  { label: "Observability", image: "/Slide 10 Circle SVGs/Observability SVG.png" },
  { label: "Global Scale", image: "/Slide 10 Circle SVGs/globe.svg" },
  { label: "Security", image: "/Slide 10 Circle SVGs/Security SVG.png" },
  { label: "Edge Storage", image: "/Slide 10 Circle SVGs/Edge Storage.png" },
];

export default function Slide10VercelCloudInside() {
  // Calculate positions for icons around the circle
  const radius = 220; // radius for icon placement
  const iconCount = iconLabels.length;

  return (
    <Section id="slide-10" className="bg-black">
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

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-16">
          {/* Header Section */}
          <div className="mb-6 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3"
            >
              What's inside the Vercel cloud
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-base text-white font-normal"
            >
              From prompt to production, every primitive reimagined for the AI era
            </motion.p>
          </div>

          {/* Central Circular System Diagram */}
          <div className="relative w-full max-w-6xl mx-auto h-[520px] md:h-[580px] flex items-center justify-center">
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
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute w-[480px] h-[480px] rounded-full border-2 border-purple-500/30"
              />

              {/* Middle Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute w-[320px] h-[320px] rounded-full border border-purple-500/20"
              />

              {/* Inner Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute w-[160px] h-[160px] rounded-full border border-purple-500/20"
              />

              {/* Central Vercel Triangle Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute w-[80px] h-[80px] border border-white/40 rounded-lg flex items-center justify-center bg-zinc-900/60"
              >
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-white/60" />
              </motion.div>

              {/* Icon Placeholders around Outer Ring */}
              {iconLabels.map((item, index) => {
                const angle = (index / iconCount) * 2 * Math.PI - Math.PI / 2; // Start from top
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9, x: x * 0.8, y: y * 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, x, y }}
                    viewport={{ once: true, amount: 0.5 }}
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
                      <div className="relative w-12 h-12 mb-2">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Label */}
                      <p className="text-white text-xs text-center whitespace-nowrap max-w-[100px]">
                        {item.label}
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute top-[6%] left-[2%] w-[180px] border border-white/30 rounded-xl p-4 bg-zinc-900/80"
            >
              <h3 className="text-white font-bold text-xs mb-2">Compute & Deployment</h3>
              <ul className="space-y-1 text-white text-[10px]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 border border-white/40 rounded-sm flex-shrink-0" />
                  <span>Vercel Agent</span>
                </li>
                <li>• Fluid Compute with Active CPU pricing</li>
              </ul>
            </motion.div>

            {/* Panel 2 - Top Right (AI & Personalization) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute top-[6%] right-[2%] w-[180px] border border-pink-500/40 rounded-xl p-4 bg-zinc-900/80"
            >
              <h3 className="font-bold text-xs mb-2" style={{ color: "#FF32FF" }}>
                AI & Personalization
              </h3>
              <ul className="space-y-1 text-white text-[10px]">
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="absolute bottom-[6%] left-[2%] w-[180px] border border-yellow-500/40 rounded-xl p-4 bg-zinc-900/80"
            >
              <h3 className="font-bold text-xs mb-2" style={{ color: "#F9D65C" }}>
                Security / Reliability
              </h3>
              <ul className="space-y-1 text-white text-[10px]">
                <li>• BotID (w/ Kasada)</li>
                <li>• Real-time DDoS mitigation</li>
                <li>• Web Application Firewall</li>
              </ul>
            </motion.div>

            {/* Panel 4 - Bottom Right (Dev Tooling and Insights) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="absolute bottom-[6%] right-[2%] w-[180px] border border-teal-500/40 rounded-xl p-4 bg-zinc-900/80"
            >
              <h3 className="font-bold text-xs mb-2" style={{ color: "#58F0D0" }}>
                Dev Tooling and Insights
              </h3>
              <ul className="space-y-1 text-white text-[10px]">
                <li>• Vercel Sandbox</li>
                <li>• Leading frontend dev frameworks</li>
                <li>• Web Analytics for Docs & Products teams</li>
              </ul>
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
          10
        </motion.div>
      </div>
    </Section>
  );
}
