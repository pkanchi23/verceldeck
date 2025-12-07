"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";

export default function Slide33AtlassianMessaging() {
  const rightSections = [
    {
      title: "TAM",
      id: 1,
      bullets: [
        { text: "$67bn TAM broken down by end market and type:", indent: false },
        { text: "– Software development vs service management vs work management", indent: true },
        { text: "– Conversion vs existing customer vs new customer", indent: true },
        { text: "Targeting 100mm MAUs – disclosed 5mm MAUs at IPO, and 10mm cloud only MAUs in 2019, and consistently emplacing goal to reach 100mm", indent: false },
      ],
    },
    {
      title: "Multi-product / Persona Strategy",
      id: 2,
      bullets: [
        { text: "Jira service management (IT) is $600mm+ ARR, fastest at-scale offering", indent: false },
        { text: "Jira work management (knowledge workers) growing ARR 50%+ YoY", indent: false },
        { text: "Jira (developers) continues to grow faster than company growth rate", indent: false },
        { text: "Strong traction with new products (e.g., Product Discovery, Compass, Rovo)", indent: false },
      ],
    },
    {
      title: "Paid Seat Mix",
      id: 3,
      bullets: [
        { text: "Significant traction in Enterprise tier (~1/3 today) vs none 3 years ago, providing top-line tailwinds", indent: false },
        { text: "Provides upside for migrations from data center to cloud", indent: false },
      ],
    },
    {
      title: "Enterprise Traction",
      id: 4,
      bullets: [
        { text: "Enterprises (customers spending $500,000+) growing 55% YoY and represent 39% of TTM revenue vs 17% in FY20", indent: false },
        { text: "G2K penetration is 23% representing significant opportunity ahead", indent: false },
      ],
    },
    {
      title: "Unit Economics",
      id: 5,
      bullets: [
        { text: "Cloud business continues to have 120%+ net retention rate (despite being ~70% SMB)", indent: false },
        { text: "Despite ongoing migrations, data center revenue has remained stable with net retention rate of 130%+", indent: false },
      ],
    },
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center pb-20">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8">
            Atlassian&apos;s long-term opportunity messaging and key building blocks
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mt-12">
            {/* Left Column */}
            <div className="space-y-4 flex flex-col justify-end h-full">
              {/* Atlassian Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[240px] h-[64px]">
                  <Image
                    src="/Slide 33 TEAM Case Study/TEAM Logo.png"
                    alt="Atlassian Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Quote Box 1 */}
              <div className="h-[235px] border border-white rounded-lg p-4 bg-transparent flex items-center justify-center">
                <div className="text-white text-xs leading-relaxed text-center">
                  <p className="mb-4">
                    Based on our current markets, products, and strategy, <span className="font-bold underline">we have line of sight to surpassing $10 billion in annual revenue within the next five years.</span> We’re uniquely positioned in three massive and growing markets, with significant opportunities and increasing momentum in cloud, enterprise, service management, and now AI.
                  </p>
                  <p className="italic">
                    – Investor Day, May 2024
                  </p>
                </div>
              </div>

              {/* Quote Box 2 */}
              <div className="h-[235px] border border-white rounded-lg p-4 bg-transparent flex items-center justify-center">
                <div className="text-white text-xs leading-relaxed text-center">
                  <p className="mb-4">
                    Our <span className="font-bold underline">original BHAG was about 50,000 customers,</span> and that took us about a decade to get to. And we announced that around the time we went public, we’re now at 180-something thousand customers around the world, and so we blew through that BHAG. <span className="font-bold underline">Our current BHAG is to have 100 million active users of our products.</span> And so that’s the goal for us, and it will take us quite a few years to get there.
                  </p>
                  <p className="italic">
                    – Investor Day, November 2020
                  </p>
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
                  <h3 className="text-white font-bold text-sm mb-2">
                    {section.title}
                  </h3>

                  {/* Bullet List */}
                  <div className="space-y-1">
                    {section.bullets.map((bullet, idx) => (
                      <div key={idx} className={`flex items-start gap-2 ${bullet.indent ? "ml-4" : ""}`}>
                        {!bullet.indent && <span className="text-white/40 text-xs">•</span>}
                        <span className="text-white text-xs">
                          {bullet.text}
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
            <p className="text-white/40 text-xs"></p>
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
