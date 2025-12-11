"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

const iconLabels = [
  { label: "Logic", image: "/Slide 10 Circle SVGs/Logic SVG.png", glowColor: "#FE02F1" },
  { label: "Personalization", image: "/Slide 10 Circle SVGs/Personalization SVG.png", glowColor: "#FE02F1" },
  { label: "CI/CD", image: "/Slide 10 Circle SVGs/CI and CD.png", glowColor: "#58F0D0" },
  { label: "Analytics", image: "/Slide 10 Circle SVGs/Analytics.svg", glowColor: "#58F0D0" },
  { label: "DevOps Software", image: "/Slide 10 Circle SVGs/DevOps.svg", glowColor: "#58F0D0" },
  { label: "Observability", image: "/Slide 10 Circle SVGs/Observability SVG.png", glowColor: "#58F0D0" },
  { label: "Global Scale", image: "/Slide 10 Circle SVGs/globe.png", glowColor: "#F9D65C" },
  { label: "Security", image: "/Slide 10 Circle SVGs/Security SVG.png", glowColor: "#F9D65C" },
  { label: "Edge Storage", image: "/Slide 10 Circle SVGs/Edge Storage.png", glowColor: "#FFFFFF" },
  { label: "Serverless Compute", image: "/Slide 10 Circle SVGs/Serverless Compute.png", glowColor: "#FFFFFF" },
];

// Extracted IconItem component to handle state-based transition switching
const IconItem = ({ item, index, iconCount, radius, isHighlighted }: { item: any, index: number, iconCount: number, radius: number, isHighlighted: boolean }) => {
  const [hasEntered, setHasEntered] = useState(false);

  const angle = (index / iconCount) * 2 * Math.PI - Math.PI / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: x * 0.8, y: y * 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x,
        y,
        filter: "drop-shadow(0 0 0px transparent)",
        zIndex: 1
      }}
      whileHover={{
        scale: 1.2,
        filter: `drop-shadow(0 0 15px ${item.glowColor})`,
        zIndex: 50,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      animate={isHighlighted ? {
        scale: 1.2,
        filter: `drop-shadow(0 0 15px ${item.glowColor})`,
        zIndex: 50,
        transition: { duration: 0.2, ease: "easeOut" }
      } : {
        scale: 1,
        filter: "drop-shadow(0 0 0px transparent)",
        zIndex: 1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={
        hasEntered
          ? { duration: 0.2, ease: "easeOut" } // Fast transition after entrance
          : {
            delay: 0.8 + index * 0.075,
            duration: 0.5,
            ease: "easeOut"
          } // Initial entrance with delay
      }
      onAnimationComplete={() => setHasEntered(true)}
      className="absolute cursor-pointer pointer-events-auto"
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
};

export default function Slide10VercelCloudInside() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Calculate positions for icons around the circle
  const radius = 220; // radius for icon placement
  const iconCount = iconLabels.length;

  const getHighlights = (category: string | null) => {
    if (!category) return [];
    switch (category) {
      case 'compute':
        return ['Edge Storage', 'Serverless Compute'];
      case 'ai':
        return ['Logic', 'Personalization'];
      case 'security':
        return ['Security', 'Global Scale'];
      case 'devtool':
        return ['Observability', 'DevOps Software', 'Analytics', 'CI/CD'];
      default:
        return [];
    }
  };

  const highlightedLabels = getHighlights(hoveredCategory);

  return (
    <Section id="slide-10" className="bg-black">
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

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-12">
          <SlideHeader
            title="What's inside the Vercel cloud"
            subtitle="From prompt to production, every primitive reimagined for the AI era"
            className="mb-6 md:mb-8"
          />

          {/* Central Circular System Diagram */}
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Purple Glow Background */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 40%)",
              }}
            />

            {/* Concentric Circles */}
            <div className="relative w-full h-full flex items-center justify-center z-50 pointer-events-none">
              {/* Outer Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute w-[480px] h-[480px] rounded-full border-2 border-white/30"
              />

              {/* Middle Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute w-[320px] h-[320px] rounded-full border border-white/20"
              />

              {/* Inner Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute w-[160px] h-[160px] rounded-full border border-white/20"
              />

              {/* Central Vercel Triangle Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute w-[80px] h-[80px] flex items-center justify-center"
              >
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-white font-bold" />
              </motion.div>

              {/* Icon Placeholders around Outer Ring */}
              {iconLabels.map((item, index) => (
                <IconItem
                  key={item.label}
                  item={item}
                  index={index}
                  iconCount={iconCount}
                  radius={radius}
                  isHighlighted={highlightedLabels.includes(item.label)}
                />
              ))}
            </div>

            {/* Quadrant Content Panels */}
            {/* Panel 1 - Top Left (Compute & Deployment) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute top-[0%] left-[0%] w-[290px] h-[230px] border border-white/30 rounded-xl p-6 bg-zinc-900/80 flex flex-col cursor-pointer z-40"
              onMouseEnter={() => setHoveredCategory('compute')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="text-white font-bold text-xl mb-4">Compute & Deployment</h3>
              <ul className="space-y-2 text-white text-base">
                <li className="flex items-center gap-2">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image src="/Vercel Logo.svg" alt="Vercel" fill className="object-contain" />
                  </div>
                  <span>Agent</span>
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
              className="absolute top-[0%] right-[0%] w-[290px] h-[230px] border border-pink-500/40 rounded-xl p-6 bg-zinc-900/80 flex flex-col cursor-pointer z-40"
              onMouseEnter={() => setHoveredCategory('ai')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="font-bold text-xl mb-4" style={{ color: "#FE02F1" }}>
                AI & Personalization
              </h3>
              <ul className="space-y-2 text-base" style={{ color: "#FE02F1" }}>
                <li>• AI Gateway</li>
                <li>• Rolling releases</li>
                <li>• Micro-frontend support</li>
                <li>• v0 Agent Showcase</li>
              </ul>
            </motion.div>

            {/* Panel 3 - Bottom Left (Security / Reliability) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="absolute bottom-[4%] left-[0%] w-[290px] h-[230px] border border-yellow-500/40 rounded-xl p-6 bg-zinc-900/80 flex flex-col cursor-pointer z-40"
              onMouseEnter={() => setHoveredCategory('security')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="font-bold text-xl mb-4" style={{ color: "#F9D65C" }}>
                Security / Reliability
              </h3>
              <ul className="space-y-2 text-base" style={{ color: "#F9D65C" }}>
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
              className="absolute bottom-[4%] right-[0%] w-[290px] h-[230px] border border-teal-500/40 rounded-xl p-6 bg-zinc-900/80 flex flex-col cursor-pointer z-40"
              onMouseEnter={() => setHoveredCategory('devtool')}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="font-bold text-xl mb-4" style={{ color: "#58F0D0" }}>
                Dev Tooling and Insights
              </h3>
              <ul className="space-y-1 text-base" style={{ color: "#58F0D0" }}>
                <li className="flex items-center gap-2">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image src="/Vercel Logo.svg" alt="Vercel" fill className="object-contain" />
                  </div>
                  <span>Sandbox</span>
                </li>
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
