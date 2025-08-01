"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Laptop, Smartphone, Tv, Server, Database } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register TextPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const grid = gridRef.current;

    if (!hero || !title || !subtitle || !buttons || !grid) return;

    // Create timeline for staggered animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate title with text reveal
    tl.fromTo(title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(title.querySelectorAll("span"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      "-=0.5"
    )
    .fromTo(subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )
    .fromTo(buttons,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.2"
    )
    .fromTo(grid.querySelectorAll("div"),
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 },
      "-=0.4"
    );

    // Floating animation for grid items
    const gridItems = grid.querySelectorAll("div");
    gridItems.forEach((item, index) => {
      gsap.to(item, {
        x: 10,
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.1,
      });
    });

    // Hover effects for grid items
    gridItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;

      gsap.to(hero, {
        y: rate,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);



    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pb-20">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight text-white">
              <span className="block">Transform Your Ideas Into</span>
              <span className="text-primary block">Digital Reality</span>
            </h1>
            <p ref={subtitleRef} className="mt-6 text-lg text-gray-300">
              We deliver cutting-edge technology solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>
              <Button variant="outline" size="lg" className="group border-white/20 text-white hover:bg-white/10">
                <span className="group-hover:text-primary transition-colors">Our Services</span>
              </Button>
            </div>
          </div>

          <div ref={gridRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Web Development", color: "from-blue-500/20 to-cyan-500/20" },
                { icon: Smartphone, label: "App Development", color: "from-purple-500/20 to-pink-500/20" },
                { icon: Tv, label: "TV Apps", color: "from-green-500/20 to-emerald-500/20" },
                { icon: Server, label: "DevOps", color: "from-orange-500/20 to-red-500/20" },
                { icon: Database, label: "Full Stack", color: "from-indigo-500/20 to-blue-500/20" },
                { icon: Laptop, label: "Tech Consulting", color: "from-teal-500/20 to-cyan-500/20" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-lg shadow-lg flex flex-col items-center text-center border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group`}
                >
                  <div className="relative">
                    <item.icon className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}