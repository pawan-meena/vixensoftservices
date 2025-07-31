"use client";

import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    value: "99%",
    label: "Success Rate",
    description: "Project completion rate",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !title || !subtitle || !content || !stats) return;

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

    // Animate content
    gsap.fromTo(content,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate stats
    const statElements = stats.querySelectorAll(".stat-card");
    statElements.forEach((stat, index) => {
      gsap.fromTo(stat,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animations
      stat.addEventListener("mouseenter", () => {
        gsap.to(stat, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      stat.addEventListener("mouseleave", () => {
        gsap.to(stat, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About VixenSoft Services
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div ref={contentRef}>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Transforming Ideas Into Digital Reality
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                At VixenSoft Services, we believe in the power of technology to transform businesses and create meaningful impact. Our team combines creativity with technical expertise to deliver solutions that exceed expectations.
              </p>
              <p>
                With years of experience in web development, mobile applications, and cloud solutions, we help businesses of all sizes achieve their digital goals. From startups to enterprise-level organizations, we provide tailored solutions that drive growth and innovation.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction sets us apart. We don't just build applications; we create digital experiences that inspire and engage users while delivering measurable business results.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold mb-4 text-white">Our Mission</h4>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth in the digital age.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-white">Our Vision</h4>
              <p className="text-gray-300">
                To be the leading technology partner for businesses worldwide, known for our innovative solutions, exceptional service, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card p-6 text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
              <div className="p-3 bg-primary/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-primary font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}