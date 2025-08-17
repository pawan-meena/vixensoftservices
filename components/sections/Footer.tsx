"use client";

import { Code2, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "App Development", href: "#services" },
    { name: "TV Apps", href: "#services" },
    { name: "DevOps", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/vixensoftservices1", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Simple fade-in animation
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(30px)';
    
    const timer = setTimeout(() => {
      footer.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      footer.style.opacity = '1';
      footer.style.transform = 'translateY(0)';
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <div className="p-2 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white group-hover:text-logo-pink transition-colors duration-300">
                Vixensoftservices
              </span>
            </div>
            <div>
              <p className="text-gray-300 max-w-md mb-6">
                Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-4 w-4 text-logo-pink group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="mailto:info@vixensoftservices.com" 
                    className="text-sm text-gray-300 hover:text-logo-pink transition-colors duration-300"
                  >
                    info@vixensoftservices.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-4 w-4 text-logo-pink group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="tel:+918690888321" 
                    className="text-sm text-gray-300 hover:text-logo-pink transition-colors duration-300"
                  >
                    +91 8690888321
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-4 w-4 text-logo-pink group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="tel:+918690888322" 
                    className="text-sm text-gray-300 hover:text-logo-pink transition-colors duration-300"
                  >
                    +91 8690888322
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-4 w-4 text-logo-pink group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-logo-pink">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-logo-pink transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-logo-pink">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-logo-pink transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-logo-pink hover:via-logo-purple hover:to-logo-blue hover:text-white transition-all duration-300 group"
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