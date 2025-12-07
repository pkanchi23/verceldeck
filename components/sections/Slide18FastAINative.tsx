"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

// Reusable animated image component for words
const AnimatedWordImage = ({
  src,
  alt,
  delay,
  withHover = false,
  width = 200,
  height = 80,
  className = "",
}: {
  src: string;
  alt: string;
  delay: number;
  withHover?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => withHover && setIsHovered(true)}
      onMouseLeave={() => withHover && setIsHovered(false)}
      className={`inline-block relative transition-all duration-200 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        filter: isHovered
          ? "drop-shadow(0 0 28px rgba(255, 255, 255, 0.75))"
          : "none",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
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
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

// Reusable logo component
const LogoImage = ({
  src,
  alt,
  delay,
  width = 140,
  height = 45,
}: {
  src: string;
  alt: string;
  delay: number;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="inline-block relative ml-3"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

// Static corner logo
const CornerLogo = ({
  src,
  alt,
  delay,
  width = 120,
  height = 40,
}: {
  src: string;
  alt: string;
  delay: number;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

export default function Slide18FastAINative() {
  // Gentle pulsing glow for the triangle background
  const trianglePulse = {
    initial: { opacity: 0, filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" },
    animate: {
      opacity: 1,
      filter: "drop-shadow(0 0 32px rgba(255,255,255,0.6))",
    },
    transition: {
      delay: 1.5,
      duration: 0.9,
      ease: "easeOut" as const,
    },
  };

  return (
    <Section id="slide-18" className="bg-black">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Triangle Graphic - Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0 -mt-24">
          <motion.div
            {...trianglePulse}
            className="relative w-[230px] md:w-[320px] h-[185px] md:h-[250px]"
          >
            <Image
              src="/Slide 18 Billboard/Vercel billboard Logo.svg"
              alt="Vercel Billboard Logo"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Main Content Container */}
        <div className="text-center px-6 md:px-12 relative z-10">
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AnimatedText delay={1.0}>
              <span className="text-white font-bold">If its</span>
            </AnimatedText>

            <AnimatedWordImage
              src="/Slide 18 Billboard/Fast Billboard.png"
              alt="Fast"
              delay={1.1}
              withHover={true}
              width={360}
              height={120}
              className="-mx-24 translate-y-[5px]"
            />

            <AnimatedText delay={1.2}>
              <span className="text-white font-bold">its on</span>
            </AnimatedText>

            <LogoImage
              src="/Vercel Logo.svg"
              alt="Vercel"
              delay={1.3}
              width={168}
              height={54}
            />
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <AnimatedText delay={1.45}>
              <span className="text-white font-bold">and if its</span>
            </AnimatedText>

            <AnimatedWordImage
              src="/Slide 18 Billboard/AI-Native Billboard.png"
              alt="AI-Native"
              delay={1.55}
              withHover={true}
              width={360}
              height={120}
              className="-mx-12 translate-y-[5px]"
            />

            <AnimatedText delay={1.65}>
              <span className="text-white font-bold">its on</span>
            </AnimatedText>

            <LogoImage
              src="/Vercel Logo.svg"
              alt="Vercel"
              delay={1.75}
              width={168}
              height={54}
            />
          </div>
        </div>

        {/* Bottom-Left Logo (Vercel) */}
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-6">
          <CornerLogo
            src="/Vercel Logo.svg"
            alt="Vercel"
            delay={2.0}
          />
        </div>

        {/* Bottom-Right Logo (v0) */}
        <div className="absolute bottom-16 right-4 md:bottom-20 md:right-6">
          <CornerLogo
            src="/v0 Logo.svg"
            alt="v0"
            delay={2.05}
            width={96}
            height={32}
          />
        </div>

        {/* Page Number - Bottom-Right (lower position) */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          18
        </div>
      </div>
    </Section>
  );
}
