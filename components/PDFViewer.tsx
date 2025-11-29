'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, useScroll, useTransform } from 'framer-motion';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string | File;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const { scrollYProgress } = useScroll();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="relative">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex flex-col items-center gap-8"
      >
        {Array.from(new Array(numPages), (_, index) => {
          // Calculate when each page should be in view (0 to 1)
          const pageProgress = index / Math.max(numPages - 1, 1);

          // Create scroll-based animations for each page
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
              key={`page_${index + 1}`}
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
                pageNumber={index + 1}
                width={800}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </motion.div>
          );
        })}
      </Document>
    </div>
  );
}
