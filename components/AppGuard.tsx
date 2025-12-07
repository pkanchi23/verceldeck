"use client";

import { useEffect, useState } from "react";

interface AppGuardProps {
  children: React.ReactNode;
}

const PASSWORD = "Vercel&GS";
const STORAGE_KEY = "verceldeck_pass";

export default function AppGuard({ children }: AppGuardProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === PASSWORD) {
      setUnlocked(true);
    }
    setHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      localStorage.setItem(STORAGE_KEY, PASSWORD);
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  if (!hydrated) return null;

  if (!unlocked) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <div className="w-full max-w-sm mx-auto p-6 rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-2xl">
          <h2 className="text-white text-xl font-semibold mb-4">Enter Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white"
                placeholder="Password"
                autoFocus
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Unlock
            </button>
          </form>
          <p className="mt-3 text-xs text-zinc-400">Content unlocks after correct password.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
