"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import Image from 'next/image';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    // Simple fade-in animation
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-20px)';
    
    const timer = setTimeout(() => {
      navbar.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      navbar.style.opacity = '1';
      navbar.style.transform = 'translateY(0)';
    }, 100);

    // Handle scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav 
      ref={navbarRef} 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Image src="/assets/logo.png" alt="Logo" width={100} height={80} />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-logo-pink hover:bg-logo-pink/5 transition-all duration-300"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="default"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:bg-logo-pink/5 hover:text-logo-pink"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:bg-logo-pink/5 hover:text-logo-pink transition-all duration-300"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}