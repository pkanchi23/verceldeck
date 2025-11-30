"use client";

import Section from "@/components/Section";

export default function Slide35CustomerThresholdsFocus() {
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
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
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

          {/* Row of Company Logo Placeholders */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12 overflow-x-auto">
            {companies.map((company) => (
              <div
                key={company}
                className="flex-shrink-0 w-[100px] md:w-[120px] h-[35px] md:h-[40px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center"
              >
                <span className="text-zinc-500 text-[10px] md:text-xs">
                  {company}_LOGO
                </span>
              </div>
            ))}
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
            {/* Table Area */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-zinc-700">
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="border-r border-zinc-700 p-3 text-left bg-zinc-900/30">
                      <span className="text-zinc-500 text-xs">
                        ROW_HEADER
                      </span>
                    </th>
                    {companies.map((company, idx) => (
                      <th
                        key={idx}
                        className="border-r border-zinc-700 p-3 text-center bg-zinc-900/30 min-w-[120px]"
                      >
                        <span className="text-zinc-500 text-xs">
                          COLUMN_{idx + 1}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {rowGroups.map((rowGroup, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-zinc-700">
                      <td className="border-r border-zinc-700 p-3 bg-zinc-900/20">
                        <span className="text-white/60 text-xs md:text-sm font-medium">
                          {rowGroup}
                        </span>
                      </td>
                      {companies.map((_, colIdx) => (
                        <td
                          key={colIdx}
                          className="border-r border-zinc-700 p-3 text-center"
                        >
                          <span className="text-zinc-500 text-xs">
                            CELL_PLACEHOLDER
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right-Hand Callout Box */}
            <div className="border border-white rounded-lg p-6 bg-transparent h-fit">
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

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          35
        </div>
      </div>
    </Section>
  );
}
