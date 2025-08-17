"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Tv, Server, Database, Laptop } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Simple fade-in animation
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    const timer = setTimeout(() => {
      hero.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: Code2, label: "Web Development", color: "bg-blue-100" },
    { icon: Smartphone, label: "App Development", color: "bg-purple-100" },
    { icon: Tv, label: "TV Apps", color: "bg-green-100" },
    { icon: Server, label: "DevOps", color: "bg-orange-100" },
    { icon: Database, label: "Full Stack", color: "bg-indigo-100" },
    { icon: Laptop, label: "Tech Consulting", color: "bg-teal-100" },
  ];

  return (
    <div ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-logo-pink/3 via-logo-purple/2 to-logo-blue/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Transform Your Ideas Into
              <span className="block bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We deliver cutting-edge technology solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-logo-pink/30 text-logo-pink hover:bg-logo-pink/5 hover:border-logo-pink/50 px-8 py-3 transition-all duration-300">
                Our Services
              </Button>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-200`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-white rounded-full mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{service.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}