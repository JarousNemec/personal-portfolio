import { useCallback } from "react";

export const useScrollToSection = (offset: number = 54) => {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Check if buffer already exists
    let buffer = document.getElementById("__scroll_buffer__") as HTMLDivElement | null;

    // Calculate buffer height dynamically
    const bufferHeight = window.innerHeight - el.offsetHeight;

    if (!buffer) {
      buffer = document.createElement("div");
      buffer.id = "__scroll_buffer__";
      buffer.style.height = `${bufferHeight > 0 ? bufferHeight : 0}px`; // never negative
      buffer.style.pointerEvents = "none"; // so it doesn't interfere
      document.body.appendChild(buffer);
    } else {
      // If buffer already exists, update its height in case the element changed size
      buffer.style.height = `${bufferHeight > 0 ? bufferHeight : 0}px`;
    }

    // Scroll after layout
    requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  }, [offset]);
};





