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

      // Get all slide elements (sections or divs used as anchors)
      const slides = Array.from(document.querySelectorAll('[id^="slide-"]'));

      if (slides.length === 0) return;

      // Find the currently visible slide
      // We'll consider a slide "visible" if it's closest to the top of the viewport
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      let currentSlideIndex = 0;
      let minDistance = Infinity;

      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.top); // Distance from top of viewport

        if (distance < minDistance) {
          minDistance = distance;
          currentSlideIndex = index;
        }
      });

      let targetIndex = currentSlideIndex;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        targetIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        targetIndex = Math.max(currentSlideIndex - 1, 0);
      }

      if (targetIndex !== currentSlideIndex) {
        slides[targetIndex].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null; // This component doesn't render anything visible
}
