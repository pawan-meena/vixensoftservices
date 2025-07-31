"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ParticleSystemProps {
  count?: number;
  className?: string;
}

export default function ParticleSystem({ count = 50, className = "" }: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = "";

    // Create particles
    const particles: HTMLDivElement[] = [];
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-primary/30 rounded-full";
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      gsap.set(particle, {
        x: `${x}%`,
        y: `${y}%`,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });

      // Animate particle
      gsap.to(particle, {
        y: `${y - 20}%`,
        x: `${x + (Math.random() - 0.5) * 10}%`,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 2,
      });

      container.appendChild(particle);
      particles.push(particle);
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

      particles.forEach((particle, index) => {
        const distance = Math.sqrt(
          Math.pow(mouseX - parseFloat(particle.style.left || "0"), 2) +
          Math.pow(mouseY - parseFloat(particle.style.top || "0"), 2)
        );

        if (distance < 20) {
          gsap.to(particle, {
            scale: 2,
            opacity: 0.8,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(particle, {
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
      });
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
} 