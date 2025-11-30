"use client";

import Section from "@/components/Section";

export default function Slide39Disclaimer() {
  return (
    <Section id="slide-39" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-16">
            Disclaimer
          </h1>

          {/* Body Text Area - Full Width Disclaimer Placeholder */}
          <div className="max-w-full">
            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
              DISCLAIMER_TEXT_PLACEHOLDER
            </p>
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">GS_LOGO_PLACEHOLDER</span>
        </div>

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          39
        </div>
      </div>
    </Section>
  );
}
