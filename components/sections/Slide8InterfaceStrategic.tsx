"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function Slide8InterfaceStrategic() {
  return (
    <Section id="slide-8" className="bg-black">
      <div className="relative w-full min-h-screen">
        {/* Top-Right Logo Placeholder (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-24">
          {/* Title and Subtitle */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            >
              The interface has become strategic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white font-normal"
            >
              Where intent becomes execution
            </motion.p>
          </div>

          {/* Main Diagram Area */}
          <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[700px]">
            {/* Left Column - Diagonal Arrows */}
            <div className="absolute left-0 top-0 bottom-0 w-[140px] md:w-[180px]">
              {/* Arrow 1 - New AI Development Stack (closer to pyramid) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute left-[50%] top-[15%] h-[70%]"
              >
                <svg
                  viewBox="0 0 100 500"
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom left' }}
                >
                  {/* Arrow shaft */}
                  <line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="white"
                    strokeWidth="3"
                    opacity="0.9"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="50,0 40,25 60,25"
                    fill="white"
                    opacity="0.9"
                  />
                  {/* Animated energy flow */}
                  <motion.line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="url(#energyGradient1)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "480 480", strokeDashoffset: 480 }}
                    animate={{ strokeDashoffset: [480, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <defs>
                    <linearGradient id="energyGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label text */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white text-xs md:text-sm font-medium"
                  style={{ transform: 'translate(-50%, -50%) rotate(-65deg)', width: '200px' }}
                >
                  The new AI development stack
                </div>
              </motion.div>

              {/* Arrow 2 - Traditional Development Stack (farther left) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute left-[10%] top-[15%] h-[70%]"
              >
                <svg
                  viewBox="0 0 100 500"
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom left' }}
                >
                  {/* Arrow shaft */}
                  <line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="rgb(161, 161, 170)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="50,0 40,25 60,25"
                    fill="rgb(161, 161, 170)"
                    opacity="0.6"
                  />
                  {/* Animated energy flow */}
                  <motion.line
                    x1="50"
                    y1="500"
                    x2="50"
                    y2="20"
                    stroke="url(#energyGradient2)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "480 480", strokeDashoffset: 480 }}
                    animate={{ strokeDashoffset: [480, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <defs>
                    <linearGradient id="energyGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(161, 161, 170, 0)" />
                      <stop offset="50%" stopColor="rgba(161, 161, 170, 0.5)" />
                      <stop offset="100%" stopColor="rgba(161, 161, 170, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Label text */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-zinc-400 text-xs md:text-sm font-medium"
                  style={{ transform: 'translate(-50%, -50%) rotate(-65deg)', width: '220px' }}
                >
                  The traditional development stack
                </div>
              </motion.div>
            </div>

            {/* Center Column - 3-Tier Pyramid (50% width) */}
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[50%]">
              {/* Top Tier - Front End */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative mx-auto mb-3"
                style={{
                  width: '60%',
                  height: '120px',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #71717a 0%, #52525b 100%)',
                    transform: 'perspective(400px) rotateX(5deg)',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {/* Icon placeholder */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-4 h-4 border border-white/60" />
                  </div>
                  {/* Tier label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Front End</p>
                  </div>
                </div>
                {/* Right-side capabilities */}
                <div className="absolute right-[-110px] top-1/2 -translate-y-1/2 space-y-2">
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">UI/UX</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[180px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Authentication / Authorization</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[180px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Integration & Messaging</p>
                  </div>
                </div>
              </motion.div>

              {/* Middle Tier - Back End */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative mx-auto mb-3"
                style={{
                  width: '75%',
                  height: '120px',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #52525b 0%, #3f3f46 100%)',
                    transform: 'perspective(400px) rotateX(5deg)',
                    clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {/* Icon placeholder */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-2 border-white/60" />
                  </div>
                  {/* Tier label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Back End</p>
                  </div>
                </div>
                {/* Right-side capabilities */}
                <div className="absolute right-[-110px] top-1/2 -translate-y-1/2 space-y-2">
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Business Logic</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">API Layer</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Monitoring</p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Tier - Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative mx-auto"
                style={{
                  width: '90%',
                  height: '120px',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #3f3f46 0%, #27272a 100%)',
                    transform: 'perspective(400px) rotateX(5deg)',
                    clipPath: 'polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  {/* Icon placeholder */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-4 h-2 border border-white/60 rounded-sm" />
                  </div>
                  {/* Tier label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <p className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Infrastructure</p>
                  </div>
                </div>
                {/* Right-side capabilities */}
                <div className="absolute right-[-110px] top-1/2 -translate-y-1/2 space-y-2">
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">DevOps Pipeline</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Runtime</p>
                  </div>
                  <div className="border border-zinc-600 rounded-full px-3 py-1.5 bg-black/20 w-[160px] h-[36px] flex items-center justify-center">
                    <p className="text-white text-xs whitespace-nowrap">Data Storage</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Explanatory Panel */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[340px]"
            >
              <div className="border border-zinc-700 rounded-2xl p-6 md:p-8 bg-zinc-900/40">
                {/* Bullet 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="mb-6"
                >
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    UIs now trigger intelligence and AI-native apps start with the front end not the backend
                  </p>
                </motion.div>

                {/* Bullet 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    ▲Vercel owns the new AI surface area
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Logo Placeholder (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] border border-zinc-700 rounded bg-transparent flex items-center justify-center"
        />

        {/* Page Number - Bottom-Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70"
        >
          8
        </motion.div>
      </div>
    </Section>
  );
}
