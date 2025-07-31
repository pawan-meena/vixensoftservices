"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loading = loadingRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;
    const text = textRef.current;

    if (!loading || !logo || !progress || !text) return;

    // Initial setup
    gsap.set([logo, progress, text], { opacity: 0, y: 20 });

    // Loading animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide loading screen after animation
        gsap.to(loading, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setIsLoading(false),
        });
      },
    });

    // Animate logo
    tl.to(logo, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(logo, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.inOut",
    })
    .to(logo, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Animate progress bar
    tl.to(progress, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
    .to(progress.querySelector(".progress-fill"), {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    }, "-=0.2");

    // Animate text
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=1.5");

    // Simulate loading progress
    const loadingTexts = [
      "Initializing...",
      "Loading assets...",
      "Preparing experience...",
      "Almost ready...",
      "Welcome!",
    ];

    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (text && currentIndex < loadingTexts.length) {
        gsap.to(text, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            if (text) {
              text.textContent = loadingTexts[currentIndex];
              gsap.to(text, {
                opacity: 1,
                duration: 0.2,
                ease: "power2.inOut",
              });
            }
          },
        });
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 400);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div ref={logoRef} className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-2xl overflow-hidden">
            <img 
              src="/assets/logo.png" 
              alt="VixenSoft Services Logo" 
              className="w-15 h-15 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            VixenSoft Services
          </h1>
        </div>

        {/* Progress bar */}
        <div ref={progressRef} className="w-64">
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="progress-fill h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0" />
          </div>
        </div>

        {/* Loading text */}
        <div ref={textRef} className="text-muted-foreground text-sm font-medium">
          Initializing...
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
} 