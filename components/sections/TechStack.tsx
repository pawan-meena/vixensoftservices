"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techCategories = [
  {
    id: "frontend",
    title: "Frontend Technologies",
    icon: "🎨",
    description: "Modern web development frameworks and libraries",
    technologies: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-gray-500 to-black" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "from-blue-600 to-blue-800" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-yellow-600" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-red-500" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "from-cyan-400 to-blue-500" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "from-purple-500 to-purple-700" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "from-green-500 to-green-700" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "from-red-500 to-red-700" },
    ]
  },
  {
    id: "backend",
    title: "Backend Technologies",
    icon: "⚙️",
    description: "Server-side technologies and frameworks",
    technologies: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-green-700" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-500 to-gray-700" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-500 to-yellow-500" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "from-green-600 to-green-800" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "from-gray-400 to-gray-600" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-red-500 to-red-700" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", color: "from-green-500 to-green-700" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "from-purple-500 to-purple-700" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", color: "from-red-500 to-red-700" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", color: "from-blue-500 to-blue-700" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "🗄️",
    description: "Data storage and management solutions",
    technologies: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "from-red-500 to-red-700" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "from-orange-500 to-yellow-500" },
      { name: "AWS S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "from-orange-500 to-orange-700" },
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: "☁️",
    description: "Cloud infrastructure and deployment tools",
    technologies: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "from-blue-500 to-blue-700" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "from-orange-500 to-orange-700" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "from-red-500 to-red-700" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "from-gray-500 to-gray-700" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "from-purple-500 to-purple-700" },
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", color: "from-red-500 to-red-700" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "from-green-500 to-green-700" },
    ]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Artificial intelligence and data science tools",
    technologies: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "from-orange-500 to-orange-700" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "from-red-500 to-red-700" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-orange-500 to-orange-700" },
      { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", color: "from-green-500 to-green-700" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg", color: "from-yellow-500 to-yellow-700" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", color: "from-orange-500 to-orange-700" },
    ]
  },
  {
    id: "mobile",
    title: "Mobile & Cross-Platform",
    icon: "📱",
    description: "Mobile app development frameworks",
    technologies: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-blue-500 to-cyan-500" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg", color: "from-purple-500 to-purple-700" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", color: "from-orange-500 to-orange-700" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "from-purple-500 to-purple-700" },
    ]
  }
];

// Advanced Image Preloader Hook
const useImagePreloader = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const preloadImage = useCallback((src: string) => {
    if (loadedImages.has(src) || loadingImages.has(src)) return;

    setLoadingImages(prev => new Set(prev).add(src));
    
    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set(prev).add(src));
      setLoadingImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(src);
        return newSet;
      });
    };
    img.onerror = () => {
      setLoadingImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(src);
        return newSet;
      });
    };
    img.src = src;
  }, [loadedImages, loadingImages]);

  const preloadCategoryImages = useCallback((category: typeof techCategories[0]) => {
    category.technologies.forEach(tech => {
      preloadImage(tech.icon);
    });
  }, [preloadImage]);

  const isImageLoaded = useCallback((src: string) => {
    return loadedImages.has(src);
  }, [loadedImages]);

  return { preloadImage, preloadCategoryImages, isImageLoaded, loadedImages, loadingImages };
};

// Carousel State Management Hook
const useCarousel = (categories: typeof techCategories) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % categories.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [categories.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [categories.length, isTransitioning]);

  const goToIndex = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  const stopAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const startAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      autoPlayIntervalRef.current = setInterval(goToNext, 4000);
    } else {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, isTransitioning, goToNext]);

  return {
    currentIndex,
    isAutoPlaying,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToIndex,
    toggleAutoPlay,
    stopAutoPlay,
    startAutoPlay,
  };
};

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const categoryButtonsRef = useRef<HTMLDivElement>(null);

  // Advanced state management
  const { preloadImage, preloadCategoryImages, isImageLoaded, loadedImages } = useImagePreloader();
  const carousel = useCarousel(techCategories);

  // Preload all images on mount
  useEffect(() => {
    techCategories.forEach(category => {
      preloadCategoryImages(category);
    });
  }, [preloadCategoryImages]);

  // Preload next category images
  useEffect(() => {
    const nextIndex = (carousel.currentIndex + 1) % techCategories.length;
    preloadCategoryImages(techCategories[nextIndex]);
  }, [carousel.currentIndex, preloadCategoryImages]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const carousel = carouselRef.current;
    const categoryButtons = categoryButtonsRef.current;

    if (!section || !title || !subtitle || !carousel || !categoryButtons) return;

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

    // Animate category buttons
    gsap.fromTo(categoryButtons,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoryButtons,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate carousel
    gsap.fromTo(carousel,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carousel,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

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

  // Animate tech items when category changes
  useEffect(() => {
    const techItems = carouselRef.current?.querySelectorAll(".tech-item");
    if (!techItems) return;

    techItems.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );

      // Hover animations
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, [carousel.currentIndex]);

  const currentCategory = techCategories[carousel.currentIndex];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Technology Stack
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies and tools we use to build exceptional digital solutions
          </p>
        </div>

        {/* Category Navigation Buttons */}
        <div ref={categoryButtonsRef} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {techCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => carousel.goToIndex(index)}
                onMouseEnter={carousel.stopAutoPlay}
                onMouseLeave={carousel.startAutoPlay}
                className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                  index === carousel.currentIndex
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-semibold">{category.title}</span>
                </div>
                {/* Active indicator */}
                {index === carousel.currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Auto-play Controls */}
        <div className="flex justify-center mb-8">
          <button
            onClick={carousel.toggleAutoPlay}
            onMouseEnter={carousel.stopAutoPlay}
            onMouseLeave={carousel.startAutoPlay}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              carousel.isAutoPlaying
                ? "bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30"
                : "bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30"
            }`}
          >
            <span className="text-sm font-semibold">
              {carousel.isAutoPlaying ? "Stop Auto-play" : "Start Auto-play"}
            </span>
            <div className={`w-2 h-2 rounded-full ${carousel.isAutoPlaying ? "bg-red-400 animate-pulse" : "bg-green-400"}`} />
          </button>
        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="relative">
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 mb-6">
              <span className="text-3xl">{currentCategory.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
                <p className="text-sm text-gray-400">{currentCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={carousel.goToPrevious}
            onMouseEnter={carousel.stopAutoPlay}
            onMouseLeave={carousel.startAutoPlay}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={carousel.goToNext}
            onMouseEnter={carousel.stopAutoPlay}
            onMouseLeave={carousel.startAutoPlay}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {currentCategory.technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="tech-item group relative cursor-pointer"
              >
                {/* Modern Tech Item Design */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 p-6 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon Container */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        {isImageLoaded(tech.icon) ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-600 rounded animate-pulse" />
                        )}
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>
                    
                    {/* Tech Name */}
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {tech.name}
                      </h4>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-${tech.color.split('-')[1]}-500 group-hover:to-${tech.color.split('-')[3]}-500 transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {techCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => carousel.goToIndex(index)}
                onMouseEnter={carousel.stopAutoPlay}
                onMouseLeave={carousel.startAutoPlay}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === carousel.currentIndex
                    ? "bg-primary scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              We have the expertise and technology stack to bring your vision to life. Let&apos;s discuss your project and create something extraordinary together.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}