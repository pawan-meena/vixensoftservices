"use client";

import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
  },
  {
    icon: Award,
    value: "50+",
    label: "Projects Completed",
    description: "Successful project deliveries",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
  {
    icon: Target,
    value: "100%",
    label: "Success Rate",
    description: "Project completion rate",
  },
];

export default function About() {
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
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">
            About VixenSoft Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Transforming Ideas Into Digital Reality
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                At VixenSoft Services, we believe in the power of technology to transform businesses and create meaningful impact. Our team combines creativity with technical expertise to deliver solutions that exceed expectations.
              </p>
              <p>
                With years of experience in web development, mobile applications, and cloud solutions, we help businesses of all sizes achieve their digital goals. From startups to enterprise-level organizations, we provide tailored solutions that drive growth and innovation.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction sets us apart. We don&apos;t just build applications; we create digital experiences that inspire and engage users while delivering measurable business results.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h4>
              <p className="text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in the digital age.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h4>
              <p className="text-gray-600">
                To be the leading technology partner for businesses worldwide, known for our innovative solutions, exceptional service, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-3 bg-logo-pink/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-logo-pink" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-logo-pink font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}