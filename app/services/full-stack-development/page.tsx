import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Database, Target, Lightbulb, Zap, Shield, Layers, Code, Globe, Lock } from "lucide-react";

const fullStackData = {
  id: "full-stack-development",
  iconName: "Database",
  title: "Full Stack Development",
  description: "Complete end-to-end web application development covering both frontend and backend technologies. We build scalable, secure, and performant web applications with modern architectures, APIs, and database design.",
  shortDescription: "Complete web solutions from frontend to backend",
  color: "bg-gradient-to-br from-indigo-50 to-indigo-100/50",
  iconColor: "text-indigo-600",
  gradientClass: "from-indigo-500 to-indigo-700",
  techStack: ["React", "Angular", "Vue.js", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Microservices", "GraphQL", "REST APIs"],
  features: [
    "Complete system architecture design",
    "RESTful and GraphQL API development",
    "Database design and optimization",
    "User authentication and authorization",
    "Third-party service integrations",
    "Performance optimization",
    "Scalable microservices architecture",
    "Real-time features with WebSockets",
    "Payment gateway integration",
    "Admin dashboards and CMS",
    "API documentation and testing",
    "Deployment and hosting setup"
  ],
  pricing: "Starting from $8,000",
  timeline: "6-16 weeks",
  stats: {
    projects: "110+",
    rating: "4.8",
    clients: "85+"
  },
  detailedFeatures: [
    {
      iconName: "Layers",
      title: "Modern Architecture",
      description: "Scalable architecture patterns including microservices, serverless, and event-driven designs for optimal performance."
    },
    {
      iconName: "Code",
      title: "API-First Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation, versioning, and robust error handling."
    },
    {
      iconName: "Globe",
      title: "Frontend Excellence",
      description: "Modern frontend frameworks with responsive design, state management, and optimized user experiences."
    },
    {
      iconName: "Lock",
      title: "Security & Performance",
      description: "Enterprise-grade security measures, performance optimization, and scalability planning for growth."
    }
  ],
  process: [
    {
      step: 1,
      title: "Architecture Planning",
      description: "Design system architecture, database schema, API structure, and technology stack selection."
    },
    {
      step: 2,
      title: "Backend Development",
      description: "Build robust APIs, implement business logic, set up databases, and create admin interfaces."
    },
    {
      step: 3,
      title: "Frontend Development",
      description: "Develop responsive user interfaces, integrate with APIs, and implement interactive features."
    },
    {
      step: 4,
      title: "Integration & Deployment",
      description: "System integration, testing, deployment setup, and performance optimization."
    }
  ],
  faqs: [
    {
      question: "What's included in full-stack development?",
      answer: "Full-stack development includes frontend (user interface), backend (server logic and APIs), database design, and deployment infrastructure - everything needed for a complete web application."
    },
    {
      question: "How do you choose the right technology stack?",
      answer: "We select technologies based on your project requirements, scalability needs, team expertise, and long-term maintenance considerations."
    },
    {
      question: "Can you work with existing systems and APIs?",
      answer: "Yes, we can integrate with existing systems, legacy databases, third-party APIs, and gradually modernize existing applications."
    },
    {
      question: "Do you provide database design and optimization?",
      answer: "Absolutely! We design efficient database schemas, optimize queries, implement caching strategies, and ensure data integrity and security."
    }
  ]
};

export default function FullStackDevelopmentPage() {
  return <ServicePageTemplate serviceData={fullStackData} />;
} 