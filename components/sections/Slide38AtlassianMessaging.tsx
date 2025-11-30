"use client";

import Section from "@/components/Section";

export default function Slide38AtlassianMessaging() {
  const rightSections = [
    { title: "TAM", id: 1 },
    { title: "Multi-product / Persona Strategy", id: 2 },
    { title: "Paid Seat Mix", id: 3 },
    { title: "Enterprise Traction", id: 4 },
    { title: "Unit Economics", id: 5 },
  ];

  return (
    <Section id="slide-38" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16">
            Atlassian&apos;s long-term opportunity <br />
            messaging and key building blocks
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Logo Placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-[180px] h-[50px] border border-zinc-700 rounded bg-zinc-900/30 flex items-center justify-center">
                  <span className="text-zinc-500 text-xs">
                    ATLASSIAN_LOGO
                  </span>
                </div>
              </div>

              {/* Quote Box 1 */}
              <div className="border border-white rounded-lg p-6 bg-transparent">
                <div className="text-zinc-500 text-sm leading-relaxed">
                  TEXT_BLOCK_PLACEHOLDER_1
                </div>
              </div>

              {/* Quote Box 2 */}
              <div className="border border-white rounded-lg p-6 bg-transparent">
                <div className="text-zinc-500 text-sm leading-relaxed">
                  TEXT_BLOCK_PLACEHOLDER_2
                </div>
              </div>
            </div>

            {/* Right Column - Five Sections */}
            <div className="space-y-4">
              {rightSections.map((section) => (
                <div
                  key={section.id}
                  className="border border-white rounded-lg p-5 bg-transparent"
                >
                  {/* Section Title */}
                  <h3 className="text-white font-bold text-base md:text-lg mb-3">
                    {section.title}
                  </h3>

                  {/* Bullet List Placeholder */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((bullet) => (
                      <div key={bullet} className="flex items-start gap-2">
                        <span className="text-white/40 text-sm">•</span>
                        <span className="text-zinc-500 text-sm">
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
          <div className="mt-12">
            <p className="text-white/40 text-xs">FOOTNOTE_PLACEHOLDER</p>
          </div>
        </div>

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          38
        </div>
      </div>
    </Section>
  );
}
