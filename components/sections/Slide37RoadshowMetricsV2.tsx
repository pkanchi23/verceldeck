"use client";

import Section from "@/components/Section";

export default function Slide37RoadshowMetricsV2() {
  const leftCategories = [
    {
      number: 3,
      title: "Multi-Product Adoption",
    },
    {
      number: 4,
      title: "ARR / Customer Breakdown by Tier",
    },
  ];

  const examples = [
    { company: "CROWDSTRIKE" },
    { company: "DATADOG" },
    { company: "GITLAB" },
    { company: "ATLASSIAN" },
  ];

  return (
    <Section id="slide-37" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-16">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8">
            Key components of roadshow / analyst day metrics disclosures
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
            {/* Left Column - Category Boxes */}
            <div className="space-y-4">
              {leftCategories.map((category) => (
                <div
                  key={category.number}
                  className="border border-white rounded-lg p-4 bg-transparent"
                >
                  <div className="flex items-start gap-3">
                    {/* Circle Number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {category.number}
                      </span>
                    </div>

                    {/* Section Title */}
                    <div className="flex-1">
                      <p className="text-white font-medium text-xs md:text-sm">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Example Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="border border-white rounded-lg p-4 bg-transparent flex flex-col items-center"
                >
                  {/* Logo Placeholder */}
                  <div className="w-full h-[30px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center mb-4">
                    <span className="text-zinc-500 text-[10px]">
                      {example.company}_LOGO
                    </span>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full aspect-[4/3] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center">
                    <span className="text-zinc-500 text-xs">
                      IMAGE_PLACEHOLDER
                    </span>
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

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          37
        </div>
      </div>
    </Section>
  );
}
