"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const tocItems = [
  {
    number: "1",
    title: "Introducing the AI Cloud",
  },
  {
    number: "2",
    title: "Model Build Framework",
  },
];

export default function Slide2Context() {
  return (
    <Section id="slide-2" className="bg-black">
      <div className="relative w-full h-screen flex flex-col justify-center -mt-20">
        {/* Top Left: Title */}
        <div className="absolute top-8 left-0 md:top-12 md:left-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            Table of Contents
          </motion.h1>
        </div>

        {/* Top Right: Vercel Logo in Box */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="border border-white/20 px-6 py-4">
            <svg
              className="h-6 md:h-8"
              viewBox="0 0 283 64"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16.25c-7.68 0-12.83 2.8-15.34 6.99l-1.55-5.49h-9.04V64h10.12V45.11c2.48 3.81 6.99 6.14 13.94 6.14 11.27 0 19.9-7.2 19.9-18s-8.63-17.99-19.03-17.99zm-1.63 27.6c-4.79 0-8.86-2.5-10.37-6.5h-.14V23.15h.14c1.51-4 5.58-6.5 10.37-6.5 6.33 0 10.88 3.81 10.88 10.5 0 6.7-4.55 10.5-10.88 10.5zM200.24 2.29c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-12.03 9.46h10.12v33.75h-10.12V11.75zm-61.7 1.5c-3.13 0-5.84.94-8.07 2.68l-1.55-1.68h-9.04v44.5h10.12V32.98c0-5.84 3.86-9.04 8.86-9.04 4.99 0 8.07 3.13 8.07 8.86v18.7h10.12V30.8c0-9.8-5.84-16.05-14.51-16.05zM90.92 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM36.54 17.24l-10.88 33.75h-10.12L4.66 17.24h10.87l6.5 21.99 6.5-21.99h8.01zm231.3-1.99c-3.13 0-5.84.94-8.07 2.68l-1.55-1.68h-9.04v44.5h10.12V32.98c0-5.84 3.86-9.04 8.86-9.04 4.99 0 8.07 3.13 8.07 8.86v18.7h10.12V30.8c0-9.8-5.84-16.05-14.51-16.05z"/>
            </svg>
          </div>
        </div>

        {/* Center: TOC Items */}
        <div className="space-y-12 md:space-y-16 max-w-4xl">
          {tocItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="flex items-center gap-8 md:gap-12"
            >
              {/* Number Box */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 border-white/40 rounded-2xl flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Bottom Left: Goldman Sachs Logo */}
        <div className="absolute bottom-8 left-0 md:bottom-12 md:left-0">
          <svg
            className="h-8 md:h-10"
            viewBox="0 0 200 40"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="28"
              fontWeight="bold"
              fill="white"
            >
              Goldman
            </text>
            <text
              x="0"
              y="38"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              letterSpacing="0.1em"
            >
              Sachs
            </text>
          </svg>
        </div>

        {/* Bottom Right: Page Number */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white font-light"
          >
            2
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
