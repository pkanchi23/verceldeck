"use client";

import { useEffect, useRef, useState } from "react";

const MAX_SLIDE = 34;

export default function SlideJump() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const goToSlide = (n: number) => {
    const target = document.getElementById(`slide-${n}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setValue("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = Number(value);
    if (!Number.isNaN(n) && n >= 1 && n <= MAX_SLIDE) {
      goToSlide(n);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
        <h2 className="text-white text-lg font-semibold mb-3 text-center">Jump to slide</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            ref={inputRef}
            type="number"
            min={1}
            max={MAX_SLIDE}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white text-center text-lg focus:outline-none focus:border-white"
            placeholder={`Enter 1 - ${MAX_SLIDE}`}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            Go
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-3 text-center">Ctrl/Cmd + L to toggle • Esc to close</p>
      </div>
    </div>
  );
}
