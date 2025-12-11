"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/Section";
import SlideHeader from "@/components/SlideHeader";

export default function Slide8InterfaceStrategic() {
  return (
    <Section id="slide-8" className="bg-black">
      <div className="relative w-full h-full">
        {/* Top-Right Logo (Vercel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-[140px] h-[40px] flex items-center justify-end z-50"
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

        {/* Main Content */}
        <div className="relative w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-1">
          <SlideHeader
            title="The interface has become strategic"
            subtitle="Where intent becomes execution"
            className="mb-4 md:mb-6 relative z-20 flex-shrink-0"
          />

          {/* Main Diagram Area */}
          <div className="relative w-full max-w-6xl mx-auto h-[550px] md:h-[600px] flex-shrink-0">
            {/* Left Column - New AI Dev Stack Arrow */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="absolute left-[8%] top-[40%] -translate-y-1/2 z-10 w-[160px] md:w-[200px] h-[320px] md:h-[400px]"
            >
              <Image
                src="/Slide 8 Pyramid/The New AI Dev Stack v2.png"
                alt="New AI Dev Stack"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Center Column - Pyramid Diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-[35%] md:left-[40%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-0"
            >
              <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                <Image
                  src="/Slide 8 Pyramid/Pyramid.png"
                  alt="Interface Strategic Pyramid"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - Explanatory Panel */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 3.6, duration: 0.6 }}
              className="absolute right-0 top-[40%] -translate-y-1/2 w-[300px] md:w-[340px] h-[80%] z-20"
            >
              <div
                className="border rounded-2xl p-6 md:p-8 bg-zinc-900/40 h-full flex flex-col justify-center"
                style={{ borderColor: "#FE02F1" }}
              >
                {/* Bullet 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 3.8, duration: 0.6 }}
                  className="mb-8"
                >
                  <p
                    className="font-medium text-sm md:text-base leading-relaxed"
                    style={{ color: "#FE02F1" }}
                  >
                    UIs now trigger intelligence and AI-native apps start with the front end not the backend
                  </p>
                </motion.div>

                {/* Bullet 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 4.0, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative w-[80px] h-[20px] flex-shrink-0">
                      <Image
                        src="/Vercel Logo.svg"
                        alt="Vercel Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <p
                      className="font-medium text-sm md:text-base leading-relaxed"
                      style={{ color: "#FE02F1" }}
                    >
                      owns the AI surface area
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom-Left Logo (Goldman Sachs) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-[140px] h-[40px] flex items-center justify-start z-50"
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
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-sm md:text-base font-light text-white/70 z-50"
        >
          8
        </motion.div>
      </div>
    </Section>
  );
}
