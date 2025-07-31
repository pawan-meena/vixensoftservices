"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      gsap.to(progress, {
        width: `${scrollPercent}%`,
        duration: 0.1,
        ease: "none",
      });
    };

    // Initial update
    updateProgress();

    // Add scroll listener
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-r-full w-0"
        style={{
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
        }}
      />
    </div>
  );
} 