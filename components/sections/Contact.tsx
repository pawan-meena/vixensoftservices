"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@vixensoftservices.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 8690888321",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 8690888322",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Jaipur, Rajasthan, India",
    description: "Come say hello at our office",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Simple fade-in animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    
    const timer = setTimeout(() => {
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-white border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-logo-pink/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-logo-pink" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-logo-pink font-medium mb-1 break-words">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-logo-pink/5 border border-logo-pink/20">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-logo-pink rounded-full"></div>
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-logo-pink rounded-full"></div>
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-logo-pink rounded-full"></div>
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-logo-pink rounded-full"></div>
                  <span>Competitive pricing and transparent communication</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
