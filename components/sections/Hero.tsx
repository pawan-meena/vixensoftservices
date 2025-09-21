"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Star, Sparkles, Zap, Target, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel data with project screenshots
  const carouselItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping platform with advanced features",
      image: "https://i.ytimg.com/vi/l5UVK0o9KRA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDOj-xZL-K9g9stuV_Lhflr5L2ymw",
      category: "Web Development",
      technologies: ["React", "Next.js", "Stripe"],
      stats: { projects: "150+", rating: "4.9" },
      projectUrl: "https://demo-ecommerce.com",
      clientName: "RetailTech Solutions"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Cross-platform app connecting restaurants with customers",
      image: "https://shyamfuture.com/wp-content/uploads/2024/09/food-delivery-app-development-company-.jpg",
      category: "App Development",
      technologies: ["React Native", "Firebase", "Maps API"],
      stats: { projects: "80+", rating: "4.8" },
      projectUrl: "https://fooddelivery-app.com",
      clientName: "QuickBites Ltd"
    },
    {
      id: 3,
      title: "Streaming TV Platform",
      description: "Smart TV app for video streaming with 4K support",
      image: "https://www.contus.com/blog/wp-content/uploads/2023/02/create-video-streaming-app-1024x536.png",
      category: "TV Apps",
      technologies: ["Kotlin", "Android TV", "ExoPlayer"],
      stats: { projects: "35+", rating: "4.9" },
      projectUrl: "https://streamtv-platform.com",
      clientName: "MediaStream Corp"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable microservices architecture on AWS",
      image: "https://www.bombaysoftwares.com/_next/image?url=https%3A%2F%2Fbs-cms-media-prod.s3.ap-south-1.amazonaws.com%2FCloud_Computing_5d607feecb.png&w=1200&q=75",
      category: "DevOps",
      technologies: ["AWS", "Docker", "Kubernetes"],
      stats: { projects: "95+", rating: "4.9" },
      projectUrl: "https://cloud-infrastructure.com",
      clientName: "TechScale Inc"
    },
    {
      id: 5,
      title: "Healthcare Management",
      description: "Complete patient management system with analytics",
      image: "https://d1y41eupgbwbb2.cloudfront.net/images/hospital-management-2048w.webp",
      category: "Full Stack",
      technologies: ["React", "Node.js", "PostgreSQL"],
      stats: { projects: "110+", rating: "4.8" },
      projectUrl: "https://healthcare-system.com",
      clientName: "MedCare Solutions"
    },
    {
      id: 6,
      title: "Financial Dashboard",
      description: "Real-time trading and portfolio management platform",
      image: "https://img.freepik.com/free-vector/gradient-dashboard-template-user-panel_23-2148378209.jpg",
      category: "Web Development",
      technologies: ["Vue.js", "Python", "WebSockets"],
      stats: { projects: "150+", rating: "4.9" },
      projectUrl: "https://fintech-dashboard.com",
      clientName: "InvestPro Ltd"
    }
  ];

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Simple fade-in animation
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    const timer = setTimeout(() => {
      hero.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Change slide every 6 seconds for better readability

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleProjectClick = (projectUrl: string) => {
    // Open project in new tab or navigate to project detail page
    window.open(projectUrl, '_blank');
  };

  return (
    <div ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 pt-20 pb-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-logo-pink/3 via-logo-purple/2 to-logo-blue/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Floating Sparkles */}
            <motion.div
              className="absolute -top-4 -left-4 text-logo-pink/30"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Transform Your Ideas Into
              <motion.span 
                className="block bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Digital Reality
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              We deliver cutting-edge technology solutions that drive innovation and growth for businesses worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-logo-pink/30 text-logo-pink hover:bg-logo-pink/5 hover:border-logo-pink/50 px-6 sm:px-8 py-3 transition-all duration-300"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Target className="mr-2 h-4 w-4" />
                  Our Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Additional Info Section */}
            <motion.div 
              className="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              <motion.div 
                className="flex items-center gap-3 justify-center lg:justify-start"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-logo-pink to-logo-purple rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">5+</span>
                </motion.div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Years Experience</div>
                  <div className="text-xs sm:text-sm text-gray-600">In Tech Industry</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 justify-center lg:justify-start"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-logo-purple to-logo-blue rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white" />
                </motion.div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Premium Quality</div>
                  <div className="text-xs sm:text-sm text-gray-600">100% Satisfaction</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 justify-center lg:justify-start"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-logo-blue to-logo-pink rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">24/7</span>
                </motion.div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Support</div>
                  <div className="text-xs sm:text-sm text-gray-600">Always Available</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Carousel Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-200"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Carousel Container */}
              <motion.div 
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {carouselItems.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="w-full flex-shrink-0 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                      {/* Project Screenshot */}
                      <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          unoptimized={true}
                          onLoad={(e) => {
                            // Fade in when image loads
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '1';
                          }}
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            console.log('Image failed to load, using fallback gradient:', item.image);
                          }}
                          style={{ opacity: 0 }}
                        />
                      </motion.div>
                      
                      {/* Fallback gradient background */} 
                      
                      {/* Hover Overlay - Shows all content only on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10 opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer group"
                        onClick={() => handleProjectClick(item.projectUrl)}
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                      >
                        {/* Content that appears on hover */}
                        <motion.div 
                          className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Top Section */}
                          <motion.div 
                            className="flex items-start justify-between"
                            initial={{ y: -20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-logo-pink/90 backdrop-blur-sm rounded-full text-xs font-medium">
                                {item.category}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{item.stats.rating}</span>
                              </div>
                            </div>
                            <motion.button 
                              className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleProjectClick(item.projectUrl);
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.button>
                          </motion.div>

                          {/* Center Content */}
                          <motion.div 
                            className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">View Project</div>
                            <div className="text-sm sm:text-base opacity-80">Click to see live demo</div>
                          </motion.div>

                          {/* Bottom Section */}
                          <motion.div 
                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{item.title}</h3>
                              <div className="text-xs sm:text-sm font-medium text-gray-200">
                                {item.clientName}
                              </div>
                            </div>
                            
                            <p className="text-gray-200 text-sm sm:text-base mb-3 leading-relaxed">{item.description}</p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                              {item.technologies.slice(0, 4).map((tech, techIndex) => (
                                <motion.span 
                                  key={techIndex}
                                  className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                                  whileHover={{ scale: 1.05, y: -2, opacity: 1 }}
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  transition={{ duration: 0.2, delay: techIndex * 0.1 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                              {item.technologies.length > 4 && (
                                <motion.span 
                                  className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  whileHover={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.4 }}
                                >
                                  +{item.technologies.length - 4}
                                </motion.span>
                              )}
                            </div>
                            
                            {/* Project Stats */}
                            <motion.div 
                              className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 }}
                            >
                              <span>📊 {item.stats.projects} Projects</span>
                              <span>⭐ {item.stats.rating}/5 Rating</span>
                              <span>👥 {item.clientName}</span>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Arrows - Hidden by default, shown on container hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm rounded-full p-2 hover:bg-black/60 transition-all duration-300 z-30 pointer-events-auto"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm rounded-full p-2 hover:bg-black/60 transition-all duration-300 z-30 pointer-events-auto"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </motion.button>
              </motion.div>

              {/* Dots Indicator - Always visible but subtle */}
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                {carouselItems.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Bar Below Carousel */}
            <motion.div 
              className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            >
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-lg sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-lg sm:text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-600">Rating</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-lg sm:text-2xl font-bold text-gray-900">300+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}