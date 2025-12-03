"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide33AtlassianMessaging() {
  const rightSections = [
    { title: "TAM", id: 1 },
    { title: "Multi-product / Persona Strategy", id: 2 },
    { title: "Paid Seat Mix", id: 3 },
    { title: "Enterprise Traction", id: 4 },
    { title: "Unit Economics", id: 5 },
  ];

  return (
    <Section id="slide-33" className="bg-black">
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-16">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8">
            Atlassian&apos;s long-term opportunity <br />
            messaging and key building blocks
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Logo Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-[140px] h-[36px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center">
                  <span className="text-zinc-500 text-[10px]">
                    ATLASSIAN_LOGO
                  </span>
                </div>
              </div>

              {/* Quote Box 1 */}
              <div className="h-[350px] border border-white rounded-lg p-4 bg-transparent flex items-center justify-center">
                <div className="text-zinc-500 text-xs leading-relaxed text-center">
                  TEXT_BLOCK_PLACEHOLDER_1
                </div>
              </div>

              {/* Quote Box 2 */}
              <div className="h-[350px] border border-white rounded-lg p-4 bg-transparent flex items-center justify-center">
                <div className="text-zinc-500 text-xs leading-relaxed text-center">
                  TEXT_BLOCK_PLACEHOLDER_2
                </div>
              </div>
            </div>

            {/* Right Column - Five Sections */}
            <div className="space-y-3">
              {rightSections.map((section) => (
                <div
                  key={section.id}
                  className="border border-white rounded-lg p-3 bg-transparent"
                >
                  {/* Section Title */}
                  <h3 className="text-white font-bold text-sm md:text-base mb-2">
                    {section.title}
                  </h3>

                  {/* Bullet List Placeholder */}
                  <div className="space-y-1">
                    {[1, 2, 3].map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2">
                        <span className="text-white/40 text-xs">•</span>
                        <span className="text-zinc-500 text-xs">
                          BULLET_LIST_PLACEHOLDER_{section.id}_{bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="mt-6">
            <p className="text-white/40 text-xs">FOOTNOTE_PLACEHOLDER</p>
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
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          33
        </div>
      </div>
    </Section>
  );
}
