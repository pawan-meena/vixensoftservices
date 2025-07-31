"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn";
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animation) {
        case "fadeIn":
          gsap.set(element, { opacity: 0 });
          break;
        case "slideUp":
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case "slideLeft":
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case "slideRight":
          gsap.set(element, { opacity: 0, x: 50 });
          break;
        case "scaleIn":
          gsap.set(element, { opacity: 0, scale: 0.8 });
          break;
        case "rotateIn":
          gsap.set(element, { opacity: 0, rotation: -10 });
          break;
      }
    };

    // Create animation based on type
    const createAnimation = () => {
      const animationProps: any = {
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: `top ${80 + threshold * 100}%`,
          end: "bottom 20%",
          toggleActions: triggerOnce ? "play none none reverse" : "play reverse play reverse",
        },
      };

      switch (animation) {
        case "fadeIn":
          break;
        case "slideUp":
          animationProps.y = 0;
          break;
        case "slideLeft":
          animationProps.x = 0;
          break;
        case "slideRight":
          animationProps.x = 0;
          break;
        case "scaleIn":
          animationProps.scale = 1;
          break;
        case "rotateIn":
          animationProps.rotation = 0;
          break;
      }

      gsap.to(element, animationProps);
    };

    setInitialState();
    createAnimation();

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, threshold, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
} 