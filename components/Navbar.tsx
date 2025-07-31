"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Image from 'next/image';
import { gsap } from "gsap";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "About", href: "#about" },
  // { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const navItems = navItemsRef.current;

    if (!navbar || !logo || !navItems) return;

    // Initial animation for logo and nav items
    gsap.fromTo(logo,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(navItems,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // Animate nav items on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);

      if (scrolled) {
        gsap.to(navbar, {
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbar, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
          borderBottom: "none",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu animation
  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenu,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenu, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed navbar
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
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div ref={logoRef} className="flex items-center group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="relative overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Image src="/assets/logo.png" alt="Logo" width={100} height={80} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          <div ref={navItemsRef} className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="group relative overflow-hidden hover:bg-transparent text-white hover:text-primary"
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Button>
              ))}
              <Button
                variant="default"
                onClick={() => scrollToSection("#contact")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Button>
              {/* <ThemeToggle /> */}
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            {navItems.map((item, index) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start group hover:bg-primary/10 transition-all duration-300 text-white hover:text-primary"
                onClick={() => scrollToSection(item.href)}
              >
                <span className="group-hover:text-primary transition-colors duration-300 group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
              </Button>
            ))}
            <Button
              variant="default"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => scrollToSection("#contact")}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}