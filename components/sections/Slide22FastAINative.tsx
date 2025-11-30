"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";

// Reusable animated placeholder component
const AnimatedPlaceholder = ({
  text,
  delay,
  withHover = false,
}: {
  text: string;
  delay: number;
  withHover?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => withHover && setIsHovered(true)}
      onMouseLeave={() => withHover && setIsHovered(false)}
      className="inline-block px-3 py-1 border border-white/40 rounded bg-transparent transition-all duration-200"
      style={{
        boxShadow: isHovered ? "0 0 20px rgba(255, 255, 255, 0.4)" : "none",
      }}
    >
      <span className="text-white font-bold">{text}</span>
    </motion.span>
  );
};

// Reusable animated text component
const AnimatedText = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

// Reusable logo placeholder component
const LogoPlaceholder = ({
  delay,
  width = 120,
  height = 40,
}: {
  delay: number;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="inline-block border border-white/30 rounded bg-transparent ml-3"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

// Static corner logo placeholder
const CornerLogoPlaceholder = ({
  delay,
  label,
}: {
  delay: number;
  label: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="border border-zinc-700 rounded bg-transparent flex items-center justify-center w-[120px] h-[40px]"
    >
      <span className="text-white/30 text-xs">{label}</span>
    </motion.div>
  );
};

export default function Slide22FastAINative() {
  return (
    <Section id="slide-22" className="bg-black">
      <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* Main Content Container */}
        <div className="text-center px-6 md:px-12">
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AnimatedText delay={0.0}>
              <span className="text-white font-bold">If its</span>
            </AnimatedText>

            <AnimatedPlaceholder text="FAST" delay={0.1} withHover={true} />

            <AnimatedText delay={0.2}>
              <span className="text-white font-bold">its on</span>
            </AnimatedText>

            <LogoPlaceholder delay={0.3} width={140} height={45} />
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AnimatedText delay={0.45}>
              <span className="text-white font-bold">and if its</span>
            </AnimatedText>

            <AnimatedPlaceholder
              text="AI-NATIVE"
              delay={0.55}
              withHover={true}
            />

            <AnimatedText delay={0.65}>
              <span className="text-white font-bold">its on</span>
            </AnimatedText>

            <LogoPlaceholder delay={0.75} width={140} height={45} />
          </div>

          {/* Triangle Graphic Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.95, duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center mt-8 md:mt-12"
          >
            <div className="w-[200px] md:w-[280px] h-[160px] md:h-[220px] border border-white/30 rounded bg-transparent flex items-center justify-center">
              <span className="text-white/40 text-sm">Triangle Mark</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom-Left Logo Placeholder (Vercel) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <CornerLogoPlaceholder delay={1.1} label="VERCEL" />
        </div>

        {/* Bottom-Right Logo Placeholder (V0) */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
          <CornerLogoPlaceholder delay={1.2} label="V0" />
        </div>
      </div>
    </Section>
  );
}
