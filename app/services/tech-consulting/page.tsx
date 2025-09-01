import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Laptop, Target, Lightbulb, Zap, Shield, Users, TrendingUp, BookOpen, Briefcase } from "lucide-react";

const techConsultingData = {
  id: "tech-consulting",
  iconName: "Laptop",
  title: "Tech Consulting",
  description: "Strategic technology guidance to accelerate your business growth. We provide expert advice on technology selection, architecture design, digital transformation, and implementation strategies tailored to your business goals.",
  shortDescription: "Strategic technology guidance for business success",
  color: "bg-gradient-to-br from-teal-50 to-teal-100/50",
  iconColor: "text-teal-600",
  gradientClass: "from-teal-500 to-teal-700",
  techStack: ["Architecture Design", "Technology Selection", "Security Audits", "Performance Analysis", "Scalability Planning", "Migration Strategies", "Cloud Strategy", "Digital Transformation"],
  features: [
    "Technology assessment and recommendations",
    "Architecture review and optimization",
    "Security audits and vulnerability assessment",
    "Performance analysis and optimization",
    "Scalability planning and roadmaps",
    "Digital transformation strategies",
    "Legacy system modernization",
    "Cloud migration planning",
    "Team training and knowledge transfer",
    "Technical due diligence",
    "Vendor selection and evaluation",
    "Technology roadmap development"
  ],
  pricing: "Starting from $150/hour",
  timeline: "1-4 weeks",
  stats: {
    projects: "200+",
    rating: "4.9",
    clients: "150+"
  },
  detailedFeatures: [
    {
      iconName: "TrendingUp",
      title: "Strategic Planning",
      description: "Comprehensive technology roadmaps aligned with business goals, market trends, and growth objectives."
    },
    {
      iconName: "BookOpen",
      title: "Expert Knowledge",
      description: "Deep expertise across modern technologies, industry best practices, and emerging trends in software development."
    },
    {
      iconName: "Users",
      title: "Team Enablement",
      description: "Training programs, workshops, and knowledge transfer sessions to upskill your development teams."
    },
    {
      iconName: "Briefcase",
      title: "Business-Focused Solutions",
      description: "Technology recommendations that balance technical excellence with business requirements and budget constraints."
    }
  ],
  process: [
    {
      step: 1,
      title: "Current State Analysis",
      description: "Comprehensive assessment of existing technology infrastructure, processes, and team capabilities."
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Create detailed recommendations, roadmaps, and implementation strategies based on business objectives."
    },
    {
      step: 3,
      title: "Implementation Planning",
      description: "Develop actionable plans with timelines, resource requirements, and risk mitigation strategies."
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Provide guidance during implementation, monitor progress, and adjust strategies as needed."
    }
  ],
  faqs: [
    {
      question: "What types of businesses benefit from tech consulting?",
      answer: "Any business looking to modernize their technology, scale their operations, improve efficiency, or navigate digital transformation can benefit from our consulting services."
    },
    {
      question: "How do you approach technology selection?",
      answer: "We evaluate options based on your specific requirements, team capabilities, scalability needs, budget, and long-term strategic goals to recommend the best fit."
    },
    {
      question: "Can you help with legacy system modernization?",
      answer: "Yes, we specialize in legacy modernization strategies including gradual migration approaches, API integration, and cloud-native transformations."
    },
    {
      question: "Do you provide ongoing technical advisory services?",
      answer: "Absolutely! We offer retainer-based advisory services for ongoing strategic guidance, architecture reviews, and technology decision support."
    }
  ]
};

export default function TechConsultingPage() {
  return <ServicePageTemplate serviceData={techConsultingData} />;
} 