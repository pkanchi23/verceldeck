"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Slide5And6Combined() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Slide 5 opacity: 1 -> 0
    // We want it to stay visible for the first part, then fade out
    const slide5Opacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);

    // Slide 6 opacity: 0 -> 1
    // We want it to fade in after Slide 5 starts fading out
    const slide6Opacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);

    // Image opacity: 1 -> 0.6 for Slide 6
    const imageOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0.6]);

    // Page number transition
    const pageNumber = useTransform(scrollYProgress, [0.49, 0.51], [5, 6]);
    const pageNumberOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [1, 0, 1]);

    return (
        <div ref={containerRef} className="relative h-[175vh] bg-black">
            {/* Anchor for Slide 5 navigation */}
            <div id="slide-5" className="absolute top-0 w-full h-px" />

            {/* Anchor for Slide 6 navigation - placed halfway */}
            <div id="slide-6" className="absolute top-[35%] w-full h-px" />

            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Top-Right Logo (Vercel) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/Vercel Logo.svg"
                                alt="Vercel Logo"
                                fill
                                className="object-contain object-right"
                            />
                        </div>
                    </motion.div>

                    {/* Main Content Container - Shared Layout */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
                        {/* Headline + Subheadline (Static) */}
                        <div className="relative z-10 mb-6 md:mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5"
                            >
                                But AI still feels...unfinished
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg md:text-xl text-white font-normal"
                            >
                                AI is transformative, but most teams struggle to ship with it
                            </motion.p>
                        </div>

                        {/* Main Visual Area */}
                        <div className="relative -mt-8 md:-mt-16 w-full max-w-[100%] mx-auto h-[60vh] md:h-[70vh]">
                            {/* Central Cube Graphic */}
                            <motion.div style={{ opacity: imageOpacity }} className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[120%] h-[120%]">
                                    <Image
                                        src="/Slide 5/Slide 5 Background Graphic.png"
                                        alt="AI Graphic"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* SLIDE 5 CONTENT: Red Floating Text Boxes */}
                            <motion.div style={{ opacity: slide5Opacity }} className="absolute inset-0">
                                {/* Red Label 1: Top-Right - "Data Siloed" */}
                                <motion.div
                                    className="absolute top-6 right-4 md:top-6 md:right-16 max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.4 },
                                        y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        x: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                    }}
                                >
                                    <p className="text-red-500 font-semibold text-lg md:text-xl">
                                        Data Siloed
                                    </p>
                                    <p className="text-red-400 text-xs md:text-sm mt-1">
                                        Multitude of Tools to Stich Things Together
                                    </p>
                                </motion.div>

                                {/* Red Label 2: Right-Center - "LLMs" */}
                                <motion.div
                                    className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.5 },
                                        y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        x: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                    }}
                                >
                                    <p className="text-red-500 font-semibold text-lg md:text-xl">
                                        LLMs
                                    </p>
                                    <p className="text-red-400 text-xs md:text-sm mt-1">
                                        Painful Integration and Orchestration
                                    </p>
                                </motion.div>

                                {/* Red Label 3: Bottom-Right - "Fragmented Stacks" */}
                                <motion.div
                                    className="absolute bottom-8 right-4 md:bottom-10 md:right-16 max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.6 },
                                        y: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        x: { duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                    }}
                                >
                                    <p className="text-red-500 font-semibold text-lg md:text-xl">
                                        Fragmented Stacks
                                    </p>
                                    <p className="text-red-400 text-xs md:text-sm mt-1">
                                        Slow Iteration
                                    </p>
                                </motion.div>

                                {/* Red Label 4: Left-Center - "Vibe Coding Apps" */}
                                <motion.div
                                    className="absolute top-1/3 left-4 md:left-14 max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.7 },
                                        y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        x: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                    }}
                                >
                                    <p className="text-red-500 font-semibold text-lg md:text-xl">
                                        Vibe Coding Apps
                                    </p>
                                    <p className="text-red-400 text-xs md:text-sm mt-1">
                                        Can't Ship to Enterprise Production
                                    </p>
                                </motion.div>

                                {/* Red Label 5: Bottom-Left - "Dynamic Rendering" */}
                                <motion.div
                                    className="absolute bottom-10 left-4 md:bottom-12 md:left-14 max-w-xs"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.8 },
                                        y: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                        x: { duration: 4.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                                    }}
                                >
                                    <p className="text-red-500 font-semibold text-lg md:text-xl">
                                        Dynamic Rendering
                                    </p>
                                    <p className="text-red-400 text-xs md:text-sm mt-1">
                                        Poor UI/UX Latency
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* SLIDE 6 CONTENT: Central Question */}
                            <motion.div
                                style={{ opacity: slide6Opacity }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
                                        <span className="text-red-400">So, What is </span>
                                        <span
                                            className="text-red-500 italic"
                                            style={{
                                                textShadow: `
                          0 0 10px rgba(239, 68, 68, 0.6),
                          0 0 20px rgba(239, 68, 68, 0.3)
                        `,
                                            }}
                                        >
                                            Going On
                                        </span>
                                        <span className="text-white">?</span>
                                    </h2>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom-Left Logo (Goldman Sachs) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] flex items-center justify-start"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/Goldman Sachs Logo.svg"
                                alt="Goldman Sachs Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </motion.div>

                    {/* Page Number - Bottom-Right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        style={{ opacity: pageNumberOpacity }}
                        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
                    >
                        <motion.span>{pageNumber}</motion.span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
