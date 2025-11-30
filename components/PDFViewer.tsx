'use client';

import { useState } from 'react';
import { Document, pdfjs } from 'react-pdf';
import AnimatedPage from './AnimatedPage';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string | File;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);

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

          return (
            <AnimatedPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              pageProgress={pageProgress}
              width={800}
            />
          );
        })}
      </Document>
    </div>
  );
}
