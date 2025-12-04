"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScreenSizeWarning() {
    const [showWarning, setShowWarning] = useState(false);
    const [warningType, setWarningType] = useState<'small' | 'large' | null>(null);

    useEffect(() => {
        // Check dimensions only on initial mount
        const checkDimensions = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Thresholds for "standard laptop screen"
            // Acceptable range: 1280-1920px width, 720-1200px height
            // This covers most common laptop resolutions and browser viewport sizes
            if (width < 1280 || height < 720) {
                setShowWarning(true);
                setWarningType('small');
            } else if (width > 1920 || height > 1200) {
                setShowWarning(true);
                setWarningType('large');
            }
        };

        checkDimensions();
    }, []);

    const handleContinue = () => {
        setShowWarning(false);
    };

    const warningContent = warningType === 'small' ? {
        title: 'Laptop Screen Recommended',
        message: 'This experience is optimized for standard laptop displays.'
    } : {
        title: 'Screen Too Large',
        message: 'This experience is optimized for standard laptop displays. Please use a laptop or reduce your browser window size.'
    };

    return (
        <AnimatePresence>
            {showWarning && warningContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-6 text-center"
                >
                    <div className="max-w-md space-y-6">
                        <h2 className="text-2xl font-bold text-white">
                            {warningContent.title}
                        </h2>
                        <p className="text-zinc-400">
                            {warningContent.message}
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
