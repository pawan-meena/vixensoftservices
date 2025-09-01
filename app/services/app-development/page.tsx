import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Smartphone, Target, Lightbulb, Zap, Shield, Bell, Globe, Users, Database } from "lucide-react";

const appDevData = {
  id: "app-development",
  iconName: "Smartphone",
  title: "App Development",
  description: "Build powerful mobile applications that engage users and drive business growth. We develop native and cross-platform apps with exceptional performance, intuitive user interfaces, and robust backend integration.",
  shortDescription: "Cross-platform mobile apps with native performance",
  color: "bg-gradient-to-br from-purple-50 to-purple-100/50",
  iconColor: "text-purple-600",
  gradientClass: "from-purple-500 to-purple-700",
  techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "Node.js", "MongoDB", "Redux", "TypeScript", "Jest", "Detox", "Expo", "GraphQL"],
  features: [
    "Cross-platform development (iOS & Android)",
    "Native performance optimization",
    "Offline functionality and data sync",
    "Push notifications and messaging",
    "App store optimization (ASO)",
    "Analytics and user tracking",
    "Social media integrations",
    "Payment gateway integration",
    "Biometric authentication",
    "Real-time features and chat",
    "GPS and location services",
    "Camera and media handling"
  ],
  pricing: "Starting from $5,000",
  timeline: "4-12 weeks",
  stats: {
    projects: "80+",
    rating: "4.8",
    clients: "65+"
  },
  detailedFeatures: [
    {
      iconName: "Globe",
      title: "Cross-Platform Excellence",
      description: "One codebase for both iOS and Android, reducing development time and costs while maintaining native performance."
    },
    {
      iconName: "Bell",
      title: "Smart Notifications",
      description: "Intelligent push notification system with personalization, scheduling, and advanced targeting capabilities."
    },
    {
      iconName: "Zap",
      title: "Real-Time Features",
      description: "Live chat, real-time updates, and instant synchronization across devices for enhanced user engagement."
    },
    {
      iconName: "Shield",
      title: "Enterprise Security",
      description: "Advanced security measures including encryption, secure API calls, and compliance with industry standards."
    }
  ],
  process: [
    {
      step: 1,
      title: "Concept & Strategy",
      description: "Define app concept, target audience, platform strategy, and create detailed functional specifications."
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Create intuitive user interfaces with wireframes, prototypes, and design systems optimized for mobile."
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build the app using best practices, implement features, and conduct thorough testing on real devices."
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "App store submission, launch support, and ongoing maintenance with updates and feature enhancements."
    }
  ],
  faqs: [
    {
      question: "Should I build a native or cross-platform app?",
      answer: "It depends on your specific needs. Cross-platform apps are cost-effective and faster to develop, while native apps offer maximum performance. We'll help you choose the best approach."
    },
    {
      question: "How much does app development cost?",
      answer: "Costs vary based on complexity, features, and platforms. Simple apps start from $5,000, while complex enterprise apps can range from $25,000 to $100,000+."
    },
    {
      question: "How long does it take to get approval from app stores?",
      answer: "Apple App Store typically takes 24-48 hours, while Google Play Store can take up to 3 days. We handle the entire submission process for you."
    },
    {
      question: "Do you provide app maintenance after launch?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, OS updates, feature additions, and performance monitoring."
    }
  ]
};

export default function AppDevelopmentPage() {
  return <ServicePageTemplate serviceData={appDevData} />;
} 