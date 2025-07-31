"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What services does VixenSoft Services offer?",
    answer: "We offer comprehensive technology solutions including web development, mobile app development, Android TV apps, DevOps services, full-stack development, and technology consulting. Our services are tailored to meet the specific needs of businesses across various industries.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, bug fixes, security patches, performance monitoring, and technical support. We ensure your applications remain secure, up-to-date, and perform optimally.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Django, Flutter, React Native, AWS, Docker, Kubernetes, and many more. We choose the best technology stack based on your project requirements.",
  },
  {
    question: "Can you work with existing systems and integrate with third-party services?",
    answer: "Absolutely! We have extensive experience in integrating with existing systems, APIs, and third-party services. We can work with your current infrastructure and ensure seamless integration with tools like payment gateways, CRM systems, and other business applications.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology that includes requirement analysis, design, development, testing, and deployment. We maintain regular communication with clients, provide progress updates, and involve you in key decision-making processes throughout the project.",
  },
  {
    question: "Do you provide hosting and deployment services?",
    answer: "Yes, we offer complete hosting and deployment solutions. We can set up cloud infrastructure, configure servers, handle SSL certificates, and ensure your applications are deployed securely and efficiently on platforms like AWS, Azure, or Google Cloud.",
  },
  {
    question: "What makes VixenSoft Services different from other development companies?",
    answer: "Our commitment to quality, innovation, and customer satisfaction sets us apart. We combine technical expertise with creative problem-solving, provide transparent communication, offer competitive pricing, and ensure long-term support for all our projects.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const accordion = accordionRef.current;

    if (!section || !title || !subtitle || !accordion) return;

    // Animate title and subtitle
    gsap.fromTo(title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(subtitle,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate accordion items
    const accordionItems = accordion.querySelectorAll("[data-state]");
    accordionItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Floating animation for stars
    const stars = section.querySelectorAll(".star");
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
    const shootingStars = section.querySelectorAll(".shooting-star");
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

  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen">
      {/* Space/Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and development process
          </p>
        </div>

        <div ref={accordionRef} className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-primary transition-colors duration-300 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}