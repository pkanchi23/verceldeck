"use client";

import { motion } from "framer-motion";

interface SlideHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function SlideHeader({ title, subtitle, className = "" }: SlideHeaderProps) {
  return (
    <div className={`mb-6 md:mb-8 ${className}`}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base text-white font-normal mt-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
