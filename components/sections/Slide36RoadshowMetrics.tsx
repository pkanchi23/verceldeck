"use client";

import Section from "@/components/Section";

export default function Slide36RoadshowMetrics() {
  const leftCategories = [
    {
      number: 1,
      title: "One-Time User / Engagement Metrics",
    },
    {
      number: 2,
      title: "Customers / Customers Over Threshold",
    },
  ];

  const examples = [
    { company: "ATLASSIAN" },
    { company: "SLACK" },
    { company: "GITLAB" },
    { company: "DATADOG" },
  ];

  return (
    <Section id="slide-36" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16">
            Key components of roadshow / analyst day metrics disclosures
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            {/* Left Column - Category Boxes */}
            <div className="space-y-6">
              {leftCategories.map((category) => (
                <div
                  key={category.number}
                  className="border border-white rounded-lg p-6 bg-transparent"
                >
                  <div className="flex items-start gap-4">
                    {/* Circle Number */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {category.number}
                      </span>
                    </div>

                    {/* Section Title */}
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm md:text-base">
                        {category.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Example Blocks (2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="border border-white rounded-lg p-6 bg-transparent flex flex-col items-center"
                >
                  {/* Logo Placeholder */}
                  <div className="w-full h-[40px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center mb-6">
                    <span className="text-zinc-500 text-xs">
                      {example.company}_LOGO
                    </span>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full aspect-[4/3] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center">
                    <span className="text-zinc-500 text-sm">
                      IMAGE_PLACEHOLDER
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="mt-12">
            <p className="text-white/40 text-xs">FOOTNOTE_PLACEHOLDER</p>
          </div>
        </div>

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          36
        </div>
      </div>
    </Section>
  );
}
