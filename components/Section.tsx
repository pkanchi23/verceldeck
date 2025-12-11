"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full h-[830px] flex-shrink-0 flex items-center px-20 overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-full max-w-7xl mx-auto relative"
      >
        {children}
      </motion.div>
    </section>
  );
}
