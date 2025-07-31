"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;

    const updateCursor = () => {
      gsap.to(cursor, {
        x: cursorX,
        y: cursorY,
        duration: 0.3,
        ease: "power2.out",
      });
      
      gsap.to(cursorDot, {
        x: cursorDotX,
        y: cursorDotY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursorX = mouseX - 20;
      cursorY = mouseY - 20;
      cursorDotX = mouseX - 2;
      cursorDotY = mouseY - 2;
      
      updateCursor();
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
      gsap.to(cursorDot, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(cursorDot, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      });
    };

    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.5)",
        duration: 0.3,
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.3)",
        duration: 0.3,
      });
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], .interactive");
    
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHover);
      element.addEventListener("mouseleave", handleLinkLeave);
    });

    // Initial state
    gsap.set(cursor, { scale: 0, opacity: 0 });
    gsap.set(cursorDot, { scale: 0, opacity: 0 });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHover);
        element.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary/30 bg-primary/10 pointer-events-none z-50 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
} 