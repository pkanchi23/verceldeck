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
      if (!container) return; // Should navigate relative to the main scroll container

      // Get all slide elements (sections or divs used as anchors)
      // Sort them by offsetTop to ensuring ordered navigation
      const slides = Array.from(document.querySelectorAll('[id^="slide-"]'))
        .map(slide => ({
          id: slide.id,
          element: slide as HTMLElement,
          offsetTop: (slide as HTMLElement).offsetTop
        }))
        .sort((a, b) => a.offsetTop - b.offsetTop);

      if (slides.length === 0) return;

      const currentScrollTop = container.scrollTop;

      // Find the slide that is currently "active" / closest to the top
      // We use a small threshold (e.g., 50px) to handle slight misalignments
      // Iterate to find the last slide that has offsetTop <= currentScrollTop + buffer
      let currentSlideIndex = 0;
      for (let i = 0; i < slides.length; i++) {
        // If the slide's top is "above" or "at" the current scroll position (within a small margin)
        // then it is a candidate for being the current slide.
        if (slides[i].offsetTop <= currentScrollTop + 10) {
          currentSlideIndex = i;
        } else {
          break; // Since slides are sorted, once we pass the scroll point, we stop
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
