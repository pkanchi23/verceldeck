"use client";

import Section from "@/components/Section";

export default function Slide30CustomerThresholdsFocus() {
  const companies = ["FIGMA", "GITLAB", "MONDAY", "DATADOG", "CLOUDFLARE"];

  const rowGroups = [
    "Key Customer Thresholds",
    "Significance",
    "% of Total Revenue / ARR",
    "% Total Customers",
    "Disclosure Language",
  ];

  return (
    <Section id="slide-35" className="bg-black">
      <div className="relative w-full h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-24">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              What is the right customer &quot;thresholds&quot; to focus on?
            </h1>

            {/* Subtitle */}
            <h2 className="text-base md:text-lg lg:text-xl font-medium text-white/70">
              Company disclosures at IPO
            </h2>
          </div>



          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
            {/* Left Column - Big Placeholder */}
            <div className="h-[500px] border border-zinc-700 rounded-lg bg-zinc-900/30 flex items-center justify-center">
              <span className="text-zinc-600 text-sm font-mono">
                BIG_RECTANGULAR_PLACEHOLDER
              </span>
            </div>

            {/* Right-Hand Callout Box */}
            <div className="h-[500px] border border-white rounded-lg p-6 bg-transparent flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-zinc-500 text-sm font-medium">
                  CALLOUT_SECTION_TITLE_PLACEHOLDER
                </span>
              </div>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-start gap-2">
                    <span className="text-white/40 text-sm">•</span>
                    <span className="text-zinc-500 text-xs">
                      BULLET_PLACEHOLDER_{num}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Footnote Placeholder */}
          <div className="mt-12">
            <p className="text-white/40 text-xs">FOOTNOTE_PLACEHOLDER</p>
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">GOLDMAN SACHS</span>
        </div>

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          30
        </div>
      </div>
    </Section>
  );
}
