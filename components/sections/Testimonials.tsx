"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Vixensoftservices transformed our digital presence with their exceptional web development services. Their team's expertise and dedication to quality are unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateTech",
    content: "The mobile app they developed for us exceeded our expectations. Their technical expertise and project management made the entire process smooth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, StreamFlix",
    content: "Their Android TV app development skills are outstanding. They delivered a complex project on time and with excellent attention to detail.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
];

export default function Testimonials() {
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
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 flex-grow leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}