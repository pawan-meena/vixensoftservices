"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackground from "@/components/AnimatedBackground";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActionButton from "@/components/FloatingActionButton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { gsap } = require("gsap");
      
      // Floating animation for stars
      const stars = document.querySelectorAll(".star");
      stars.forEach((star, index) => {
        gsap.to(star, {
          y: -20,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        });
      });

      // Shooting stars animation
      const shootingStars = document.querySelectorAll(".shooting-star");
      shootingStars.forEach((star, index) => {
        gsap.to(star, {
          x: "100vw",
          y: "100vh",
          duration: 2,
          repeat: -1,
          delay: index * 3,
          ease: "power1.in",
        });
      });
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <AnimatedBackground />
      <ScrollProgress />
      <FloatingActionButton />
      <main className="min-h-screen relative">
        {/* Global Background */}
        <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 -z-10">
          {/* Stars */}
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="star absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
          
          {/* Shooting Stars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="shooting-star absolute w-1 h-1 bg-white rounded-full opacity-80"
              style={{
                left: `-10px`,
                top: `${Math.random() * 50}%`,
                transform: "rotate(45deg)",
              }}
            />
          ))}

          {/* Nebula effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
        </div>
        
        <Navbar />
        <section id="home" className="relative">
          <Hero />
        </section>
        <section id="services" className="relative">
          <Services />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="team">
          <Team />
        </section> */}
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </SmoothScroll>
  );
}