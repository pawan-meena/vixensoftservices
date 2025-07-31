"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register TextPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  effect?: "typewriter" | "fadeIn" | "slideUp" | "splitChars";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 1,
  effect = "typewriter",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Clear previous content
    element.textContent = "";

    const tl = gsap.timeline({ delay });

    switch (effect) {
      case "typewriter":
        tl.to(element, {
          duration,
          text: text,
          ease: "none",
        });
        break;

      case "fadeIn":
        element.textContent = text;
        gsap.set(element, { opacity: 0, y: 20 });
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration,
          ease: "power2.out",
        });
        break;

      case "slideUp":
        element.textContent = text;
        gsap.set(element, { opacity: 0, y: 50 });
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
        });
        break;

      case "splitChars":
        // Split text into characters
        const chars = text.split("").map((char, index) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          element.appendChild(span);
          return span;
        });

        tl.to(chars, {
          opacity: 1,
          y: 0,
          duration: duration / chars.length,
          stagger: 0.05,
          ease: "power2.out",
        });
        break;
    }
  }, [text, delay, duration, effect]);

  return <div ref={textRef} className={className} />;
} 