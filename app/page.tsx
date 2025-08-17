"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-logo-pink/5 via-logo-purple/3 to-logo-blue/5 pointer-events-none"></div>
        
        {/* Floating animated circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-logo-pink/10 rounded-full" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-logo-purple/10 rounded-full" style={{ animation: 'float 4s ease-in-out infinite 1s' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-logo-blue/10 rounded-full" style={{ animation: 'float 4s ease-in-out infinite 2s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-logo-pink/8 rounded-full" style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}></div>
        
        {/* Gradient waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-logo-pink/30 to-transparent" style={{ animation: 'wave 3s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-logo-purple/30 to-transparent" style={{ animation: 'wave 3s ease-in-out infinite 1.5s' }}></div>
        </div>
        
        <div className="text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue rounded-2xl p-2 shadow-2xl animate-pulse">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/logo.png" 
                    alt="Vixensoftservices Logo" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-logo-pink/20 via-logo-purple/20 to-logo-blue/20 rounded-2xl blur-xl animate-pulse"></div>
            </div>
          </div>
          
          {/* Loading bar */}
          <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden mb-4 shadow-lg">
            <div className="h-full bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue rounded-full animate-pulse" style={{
              animation: 'loading 2s ease-in-out infinite'
            }}></div>
          </div>
          
          <p className="text-gray-600 font-medium text-lg">Welcome to Vixensoftservices</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      <div className="absolute inset-0 bg-gradient-to-br from-logo-pink/5 via-logo-purple/3 to-logo-blue/5 pointer-events-none"></div>
      <Navbar />
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}