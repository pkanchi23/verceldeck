"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  number: number;
  title: string;
  id: string;
}

const slides: Slide[] = [
  { number: 1, title: "Hero", id: "slide-1" },
  { number: 2, title: "Context", id: "slide-2" },
  { number: 3, title: "Agenda", id: "slide-3" },
  { number: 4, title: "AI Era Expectations", id: "slide-4" },
  { number: 5, title: "AI Still Unfinished", id: "slide-5" },
  { number: 6, title: "So What Is Going On", id: "slide-6" },
  { number: 7, title: "Stack Paradigm", id: "slide-7" },
  { number: 8, title: "Interface Strategic", id: "slide-8" },
  { number: 9, title: "Enter the Vercel AI Cloud", id: "slide-9" },
  { number: 11, title: "What's Inside the Vercel Cloud", id: "slide-11" },
  { number: 12, title: "Setting Up a New Class of Infrastructure", id: "slide-12" },
  { number: 13, title: "The Foundation of an Entirely New Product", id: "slide-13" },
  { number: 14, title: "The Only Platform Built for This AI Moment", id: "slide-14" },
  { number: 17, title: "Vercel's Differentiation", id: "slide-17" },
  { number: 18, title: "Abstracting Away Existing Market Spend", id: "slide-18" },
  { number: 19, title: "Creating New Markets", id: "slide-19" },
  { number: 21, title: "The Builders of the New Era Are Here", id: "slide-21" },
  { number: 22, title: "Fast and AI-Native", id: "slide-22" },
  { number: 24, title: "Next Layer of Abstraction", id: "slide-24" },
  { number: 25, title: "Platform Companies for the AI Era", id: "slide-25" },
  { number: 26, title: "Model Build Framework", id: "slide-26" },
  { number: 27, title: "Illustrative Long-Term Framework", id: "slide-27" },
  { number: 28, title: "The Vercel Growth Algorithm", id: "slide-28" },
  { number: 29, title: "Building Blocks for Vercel's Model", id: "slide-29" },
  { number: 30, title: "Disclosures and KPIs", id: "slide-30" },
  { number: 31, title: "What Do Most Companies Disclose at IPO?", id: "slide-31" },
  { number: 32, title: "Deep Dive Into Model Builds", id: "slide-32" },
  { number: 33, title: "Customer Thresholds", id: "slide-33" },
  { number: 34, title: "Customer Thresholds V2", id: "slide-34" },
  { number: 35, title: "Customer Thresholds Focus", id: "slide-35" },
  { number: 36, title: "Roadshow Metrics Disclosures", id: "slide-36" },
  { number: 37, title: "Roadshow Metrics Disclosures V2", id: "slide-37" },
  { number: 38, title: "Atlassian Messaging", id: "slide-38" },
];

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl-K (Windows/Linux) or Cmd-K (Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navigateToSlide = (slideId: string) => {
    const element = document.getElementById(slideId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Keyboard Shortcut Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-6 left-6 z-40 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-4 py-2 text-xs text-white/60"
      >
        Press{" "}
        <kbd className="px-2 py-1 bg-zinc-800 rounded border border-zinc-600 text-white/80 font-mono">
          {navigator?.platform?.includes("Mac") ? "⌘" : "Ctrl"}
        </kbd>{" "}
        +{" "}
        <kbd className="px-2 py-1 bg-zinc-800 rounded border border-zinc-600 text-white/80 font-mono">
          K
        </kbd>{" "}
        for navigation
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-[400px] bg-zinc-950 border-r border-zinc-800 z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-white">
                    Table of Contents
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-white/50">
                  {slides.length} slides
                </p>
              </div>

              {/* Slide List */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                  {slides.map((slide, index) => (
                    <motion.button
                      key={slide.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      onClick={() => navigateToSlide(slide.id)}
                      className="w-full text-left px-4 py-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white/80 text-sm font-medium group-hover:bg-zinc-700 group-hover:border-zinc-600 transition-all">
                          {slide.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white/90 truncate group-hover:text-white transition-colors">
                            {slide.title}
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-zinc-800">
                <p className="text-xs text-white/40 text-center">
                  Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-white/60">ESC</kbd> to close
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
