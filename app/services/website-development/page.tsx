import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code2, Target, Lightbulb, Zap, Shield, Smartphone, Search, Globe, TrendingUp } from "lucide-react";

const websiteDevData = {
  id: "website-development",
  iconName: "Code2",
  title: "Website Development",
  description: "Transform your digital presence with custom web solutions that drive results. We create responsive, SEO-optimized websites using cutting-edge technologies to deliver exceptional user experiences and help your business grow online.",
  shortDescription: "Modern, responsive websites that drive results",
  color: "bg-gradient-to-br from-blue-50 to-blue-100/50",
  iconColor: "text-blue-600",
  gradientClass: "from-blue-500 to-blue-700",
  techStack: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Netlify", "Tailwind CSS", "TypeScript"],
  features: [
    "Responsive design for all devices",
    "SEO optimization for better rankings",
    "Performance optimization",
    "Security best practices",
    "Content management systems",
    "E-commerce integration",
    "Third-party API integrations",
    "Analytics and tracking setup",
    "SSL certificates and security",
    "Mobile-first development approach",
    "Cross-browser compatibility",
    "Progressive Web App (PWA) capabilities"
  ],
  pricing: "Starting from $2,500",
  timeline: "2-8 weeks",
  stats: {
    projects: "150+",
    rating: "4.9",
    clients: "120+"
  },
  detailedFeatures: [
    {
      iconName: "Smartphone",
      title: "Mobile-First Design",
      description: "Every website we build is designed mobile-first, ensuring perfect functionality across all devices and screen sizes."
    },
    {
      iconName: "Search",
      title: "SEO Optimized",
      description: "Built-in SEO best practices including meta tags, structured data, and optimized loading speeds for better search rankings."
    },
    {
      iconName: "Zap",
      title: "Lightning Fast",
      description: "Optimized for speed with modern techniques like lazy loading, image optimization, and efficient code architecture."
    },
    {
      iconName: "Shield",
      title: "Security First",
      description: "Enterprise-grade security measures including SSL certificates, secure coding practices, and regular security updates."
    }
  ],
  process: [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project plan."
    },
    {
      step: 2,
      title: "Design & Wireframing",
      description: "Creating detailed wireframes and mockups that align with your brand identity and user experience goals."
    },
    {
      step: 3,
      title: "Development & Integration",
      description: "Building your website using modern technologies and integrating all necessary third-party services and APIs."
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Comprehensive testing across devices and browsers, followed by deployment and post-launch monitoring."
    }
  ],
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. Simple websites take 2-4 weeks, while complex web applications can take 6-12 weeks or more."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer ongoing maintenance packages that include security updates, content updates, and technical support."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices."
    },
    {
      question: "Can you help with hosting and domain setup?",
      answer: "Yes, we can help you choose the right hosting solution and assist with domain registration and DNS configuration."
    }
  ]
};

export default function WebsiteDevelopmentPage() {
  return <ServicePageTemplate serviceData={websiteDevData} />;
} 