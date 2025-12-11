"use client";

import { useEffect } from "react";

export default function SlideNavigator() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        return;
      }

      e.preventDefault();

      const container = document.getElementById("main-scroll-container");
      if (!container) return;

      // Helper to get offset relative to the scrolling container
      const getOffsetTop = (element: HTMLElement, targetParent: HTMLElement) => {
        let offset = 0;
        let current = element;

        while (current && current !== targetParent && targetParent.contains(current)) {
          offset += current.offsetTop;
          current = current.offsetParent as HTMLElement;
        }
        return offset;
      };

      // Get all slide elements and sort by calculated global offset
      const slides = Array.from(document.querySelectorAll('[id^="slide-"]'))
        .map(slide => ({
          id: slide.id,
          element: slide as HTMLElement,
          offsetTop: getOffsetTop(slide as HTMLElement, container)
        }))
        .sort((a, b) => a.offsetTop - b.offsetTop);

      if (slides.length === 0) return;

      const currentScrollTop = container.scrollTop;

      // Find currently active slide (closest to top)
      let currentSlideIndex = 0;
      for (let i = 0; i < slides.length; i++) {
        // Find the last slide that starts at or above the current scroll position
        if (slides[i].offsetTop <= currentScrollTop + 10) {
          currentSlideIndex = i;
        } else {
          break;
        }
      }

      let targetIndex = currentSlideIndex;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        targetIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        targetIndex = Math.max(currentSlideIndex - 1, 0);
      }

      if (targetIndex !== currentSlideIndex) {
        container.scrollTo({
          top: slides[targetIndex].offsetTop,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null; // This component doesn't render anything visible
}
