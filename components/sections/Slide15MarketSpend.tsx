"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

const marketCategories = [
  {
    label: "CDN / Edge",
    tam: "$37B",
    cagr: "'23–'28 CAGR: 15%",
    logos: [
      { name: "CLOUDFLARE", file: "Cloudflare Logo.png" },
      { name: "AKAMAI", file: "Akamai Logo.png" },
      { name: "FASTLY", file: "Fastly Logo.png" },
    ],
  },
  {
    label: "Serverless Compute",
    tam: "$18B",
    cagr: "'23–'28 CAGR: 16%",
    logos: [
      { name: "AWS LAMBDA", file: "AWS Lambda Functions.png" },
      { name: "AZURE FUNCTIONS", file: "Azure Functions.png" },
    ],
  },
  {
    label: "DevOps Software Tools",
    tam: "$23B",
    cagr: "'23–'28 CAGR: 16%",
    logos: [
      { name: "GITHUB", file: "Github Logo.png" },
      { name: "GITLAB", file: "Gitlab logo.png" },
      { name: "CIRCLECI", file: "CirlceCI Logo.png" },
    ],
  },
  {
    label: "Observability",
    tam: "$48B",
    cagr: "'23–'28 CAGR: 11%",
    logos: [
      { name: "DATADOG", file: "Datadog Logo.png" },
      { name: "DYNATRACE", file: "Dynatrace Logo.png" },
      { name: "NEW RELIC", file: "New Relic Logo.png" },
    ],
  },
  {
    label: "Software Design",
    tam: "$33B",
    cagr: "",
    logos: [
      { name: "FIGMA", file: "Figma Logo.png" },
      { name: "ADOBE", file: "Adobe Logo.png" },
    ],
  },
  {
    label: "AI Coding",
    tam: "$5B",
    cagr: "'24–'29 CAGR: 23%",
    logos: [
      { name: "CURSOR", file: "Cursor Logo.png" },
      { name: "REPLIT", file: "Replit Logo.png" },
    ],
  },
];

export default function Slide15MarketSpend() {
  return (
    <Section id="slide-15" className="bg-black">
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-18">
          <SlideHeader
            title="Abstracting away existing market spend…"
            className="mb-8 md:mb-10"
          />

          {/* Central Cloud Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-3xl mx-auto mb-4 md:mb-6 mt-6 md:mt-8 relative z-20"
          >
            <div
              className="h-[240px] md:h-[300px] border-2 border-white rounded-2xl bg-black flex items-center justify-center relative"
              style={{
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
                filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))",
              }}
            >
              <div className="relative w-[80%] h-[80%]">
                <Image
                  src="/Slide 9/Vercel Cloud.png"
                  alt="Vercel Cloud"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Market Category Bars */}
          <div className="relative max-w-6xl mx-auto mb-6">


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative z-10">
              {marketCategories.map((category, index) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.8 + index * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="border border-white rounded-xl p-4 bg-black flex flex-col items-center"
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

                  {/* Company Logos */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.8 + index * 0.12 + 0.3, duration: 0.4 }}
                    className="flex flex-wrap gap-2 justify-center mt-auto"
                  >
                    {category.logos.map((logo) => (
                      <div
                        key={logo.name}
                        className="w-10 h-10 border border-white/60 rounded bg-transparent flex items-center justify-center relative p-1"
                        title={logo.name}
                      >
                        <Image
                          src={`/Slide 15 Existing Market Spend Logos.png/${logo.file}`}
                          alt={logo.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <div className="max-w-6xl mx-auto text-white/40 text-[10px] leading-relaxed mt-4">
            Note: Figures show 2023 TAM. 1 IDC Worldwide Content Delivery Networks Forecast, 2024; IDC Worldwide Edge Enterprise Spending Forecast (excl. Infrastructure spend), 2024. 2 Markets and Markets Severless Computing Market Forecast, 2024. 3 IDC DevOps Software Tools Forecast, 2024. 4 Gartner IT Operations Management Software Forecast, 2024. 5 Figma S-1 filing. 6 Technavio Global AI Code Tools Market Forecast, 2025.
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
          15
        </motion.div>
      </div>
    </Section>
  );
}
