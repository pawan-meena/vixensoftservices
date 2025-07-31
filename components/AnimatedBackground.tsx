"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const particles = particlesRef.current;

    if (!background || !particles) return;

    // Create floating particles
    const createParticles = () => {
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute w-1 h-1 bg-primary/20 rounded-full";
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        gsap.set(particle, {
          x,
          y,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });

        // Animate particle
        gsap.to(particle, {
          y: y - 100,
          x: x + (Math.random() - 0.5) * 50,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 2,
        });

        particles.appendChild(particle);
      }
    };

    // Gradient animation
    const animateGradient = () => {
      gsap.to(background, {
        background: "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 25%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 75%, rgba(147, 51, 234, 0.05) 100%)",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    };

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to(background, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out",
      });
    };

    // Create animated grid
    const createGrid = () => {
      const grid = document.createElement("div");
      grid.className = "absolute inset-0 opacity-10";
      grid.style.backgroundImage = `
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
      `;
      grid.style.backgroundSize = "50px 50px";
      
      background.appendChild(grid);

      // Animate grid
      gsap.to(grid, {
        backgroundPosition: "50px 50px",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    };

    // Initialize animations
    createParticles();
    animateGradient();
    createGrid();

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Scroll-triggered animations
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;
      
      gsap.to(background, {
        y: rate,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
      }}
    >
      <div ref={particlesRef} className="absolute inset-0" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
    </div>
  );
} 