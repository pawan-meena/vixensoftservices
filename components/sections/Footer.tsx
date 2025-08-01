"use client";

import { Code2, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "App Development", href: "#services" },
    { name: "TV Apps", href: "#services" },
    { name: "DevOps", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/vixensoftservices1", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const logo = logoRef.current;
    const content = contentRef.current;
    const links = linksRef.current;
    const social = socialRef.current;

    if (!footer || !logo || !content || !links || !social) return;

    // Animate logo
    gsap.fromTo(logo,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logo,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate content
    gsap.fromTo(content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate links
    const linkElements = links.querySelectorAll("li");
    linkElements.forEach((link, index) => {
      gsap.fromTo(link,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: link,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate social links
    const socialElements = social.querySelectorAll("a");
    socialElements.forEach((socialLink, index) => {
      gsap.fromTo(socialLink,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: socialLink,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });



  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div ref={logoRef} className="flex items-center mb-4 group">
              <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                Vixensoftservices
              </span>
            </div>
            <div ref={contentRef}>
              <p className="text-gray-300 max-w-md mb-6">
                Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="mailto:info@vixensoftservices.com" 
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    info@vixensoftservices.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="tel:+918690888321" 
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    +91 8690888321
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="tel:+918690888322" 
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    +91 8690888322
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div ref={linksRef}>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div ref={linksRef}>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-gray-300">
              © {new Date().getFullYear()} Vixensoftservices. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}