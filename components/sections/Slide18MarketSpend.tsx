"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const marketCategories = [
  {
    label: "CDN / Edge",
    tam: "$37B",
    cagr: "'23–'28 CAGR: 15%",
    logos: ["CLOUDFLARE", "AKAMAI", "FASTLY"],
  },
  {
    label: "Serverless Compute",
    tam: "$18B",
    cagr: "'23–'28 CAGR: 16%",
    logos: ["AWS LAMBDA", "AZURE FUNCTIONS"],
  },
  {
    label: "DevOps Software Tools",
    tam: "$23B",
    cagr: "'23–'28 CAGR: 16%",
    logos: ["GITHUB", "GITLAB", "CIRCLECI"],
  },
  {
    label: "Observability",
    tam: "$48B",
    cagr: "'23–'28 CAGR: 11%",
    logos: ["DATADOG", "DYNATRACE", "NEW RELIC"],
  },
  {
    label: "Software Design",
    tam: "$33B",
    cagr: "",
    logos: ["FIGMA", "ADOBE"],
  },
  {
    label: "AI Coding",
    tam: "$5B",
    cagr: "'24–'29 CAGR: 23%",
    logos: ["CURSOR", "REPLIT"],
  },
];

export default function Slide18MarketSpend() {
  return (
    <Section id="slide-18" className="bg-black">
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
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16"
          >
            Abstracting away existing market spend…
          </motion.h1>

          {/* Central Cloud Box Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <div
              className="aspect-[16/9] border-2 border-white rounded-2xl bg-black flex items-center justify-center"
              style={{
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
              }}
            >
              <p className="text-white text-base md:text-lg">
                [ VERCEL CLOUD GRAPHIC PLACEHOLDER ]
              </p>
            </div>
          </motion.div>

          {/* Bottom Market Category Bars */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto mb-8">
            {marketCategories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.8 + index * 0.12,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="border border-white rounded-xl p-4 bg-black/40 flex flex-col items-center"
              >
                {/* Category Label */}
                <h3 className="text-white text-sm md:text-base font-semibold mb-2 text-center min-h-[40px] flex items-center">
                  {category.label}
                </h3>

                {/* TAM */}
                <p className="text-white text-2xl md:text-3xl font-bold mb-1">
                  {category.tam}
                </p>

                {/* CAGR */}
                {category.cagr && (
                  <p className="text-white text-xs md:text-sm mb-3 text-center opacity-80">
                    {category.cagr}
                  </p>
                )}

                {/* Logo Placeholders */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.8 + index * 0.12 + 0.3, duration: 0.4 }}
                  className="flex flex-wrap gap-2 justify-center mt-auto"
                >
                  {category.logos.map((logo) => (
                    <div
                      key={logo}
                      className="w-10 h-10 border border-white/60 rounded bg-transparent flex items-center justify-center"
                      title={logo}
                    >
                      <p className="text-white/40 text-[6px] text-center leading-tight px-1">
                        {logo}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note Placeholder */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white text-xs opacity-40">
              [ SMALL FOOTNOTE TEXT PLACEHOLDER — MULTI-LINE ALLOWED ]
            </p>
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
          18
        </motion.div>
      </div>
    </Section>
  );
}
