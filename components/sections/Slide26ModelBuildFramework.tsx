"use client";

import Section from "@/components/Section";

export default function Slide26ModelBuildFramework() {
  return (
    <Section id="slide-26" className="bg-black">
      <div className="relative w-full min-h-screen flex items-center justify-center">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">VERCEL</span>
        </div>

        {/* Center Title */}
        <div className="px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center">
            Model Build Framework
          </h1>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center">
          <span className="text-zinc-600 text-xs">GOLDMAN SACHS</span>
        </div>

        {/* Page Number - Bottom-Right */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70">
          26
        </div>
      </div>
    </Section>
  );
}
