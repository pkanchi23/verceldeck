'use client';

import { Page } from 'react-pdf';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedPageProps {
  pageNumber: number;
  pageProgress: number;
  width?: number;
}

export default function AnimatedPage({ pageNumber, pageProgress, width = 800 }: AnimatedPageProps) {
  const { scrollYProgress } = useScroll();

  // Create scroll-based animations for this page
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, pageProgress - 0.2),
      pageProgress,
      Math.min(1, pageProgress + 0.2)
    ],
    [0.3, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, pageProgress - 0.2),
      pageProgress,
      Math.min(1, pageProgress + 0.2)
    ],
    [0.85, 1, 0.85]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [
      Math.max(0, pageProgress - 0.3),
      pageProgress,
      Math.min(1, pageProgress + 0.3)
    ],
    [15, 0, -15]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        rotateY,
      }}
      className="shadow-2xl rounded-lg overflow-hidden bg-white"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
    >
      <Page
        pageNumber={pageNumber}
        width={width}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </motion.div>
  );
}
