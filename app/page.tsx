'use client';

import { useState } from 'react';
import PDFUploader from '@/components/PDFUploader';
import PDFViewer from '@/components/PDFViewer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setPdfFile(file);
  };

  const handleReset = () => {
    setPdfFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <AnimatePresence mode="wait">
        {!pdfFile ? (
          <PDFUploader key="uploader" onFileSelect={handleFileSelect} />
        ) : (
          <motion.div
            key="viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Header with reset button */}
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
            >
              <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    VercelDeck
                  </h1>
                  <p className="text-sm text-gray-600">
                    {pdfFile.name}
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
                >
                  Upload New PDF
                </button>
              </div>
            </motion.div>

            {/* PDF Content */}
            <div className="py-16">
              <PDFViewer file={pdfFile} />
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-gray-400"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span className="text-xs mt-1 block">Scroll to explore</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
