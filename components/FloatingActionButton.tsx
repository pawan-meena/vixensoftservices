"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUp, MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);
  const mainButtonRef = useRef<HTMLButtonElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fab = fabRef.current;
    const mainButton = mainButtonRef.current;
    const actionButtons = actionButtonsRef.current;

    if (!fab || !mainButton || !actionButtons) return;

    // Show/hide FAB based on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        if (!isVisible) {
          setIsVisible(true);
          gsap.fromTo(fab, 
            { opacity: 0, scale: 0, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
          );
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
          gsap.to(fab, {
            opacity: 0,
            scale: 0,
            y: 50,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Hover animations for main button
    mainButton.addEventListener("mouseenter", () => {
      gsap.to(mainButton, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    mainButton.addEventListener("mouseleave", () => {
      gsap.to(mainButton, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const toggleExpanded = () => {
    const actionButtons = actionButtonsRef.current;
    if (!actionButtons) return;

    if (!isExpanded) {
      setIsExpanded(true);
      gsap.to(actionButtons, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    } else {
      setIsExpanded(false);
      gsap.to(actionButtons, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAction = (action: string) => {
    // Handle different actions
    switch (action) {
      case "message":
        // Open contact form or chat
        break;
      case "phone":
        window.location.href = "tel:+1234567890";
        break;
      case "email":
        window.location.href = "mailto:contact@vixensoftservices.com";
        break;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={fabRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4"
    >
      {/* Action buttons */}
      <div
        ref={actionButtonsRef}
        className="flex flex-col space-y-3 opacity-0 scale-0"
      >
        <button
          onClick={() => handleAction("message")}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          onClick={() => handleAction("phone")}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          onClick={() => handleAction("email")}
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Main FAB button */}
      <button
        ref={mainButtonRef}
        onClick={isExpanded ? toggleExpanded : scrollToTop}
        className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowUp 
          className={`h-6 w-6 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`} 
        />
      </button>
    </div>
  );
} 