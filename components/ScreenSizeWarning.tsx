"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScreenSizeWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        // Check dimensions only on initial mount
        const checkDimensions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Thresholds for "traditional computer monitor"
            // Width < 1024px (typically tablets/mobile)
            // Height < 600px (very short screens)
            if (width < 1024 || height < 600) {
                setShowWarning(true);
            }
        };

        checkDimensions();
    }, []);

    const handleContinue = () => {
        setShowWarning(false);
    };

    return (
        <AnimatePresence>
            {showWarning && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-6 text-center"
                >
                    <div className="max-w-md space-y-6">
                        <h2 className="text-2xl font-bold text-white">
                            Desktop View Recommended
                        </h2>
                        <p className="text-zinc-400">
                            This experience is intended to be viewed on a traditional computer
                            monitor.
                        </p>
                        <button
                            onClick={handleContinue}
                            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            Continue Anyway
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
