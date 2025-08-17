"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Users, Award, Clock, ExternalLink, Github, Globe } from "lucide-react";

// Stats data
const stats = [
  { icon: CheckCircle, value: "150+", label: "Projects Completed", color: "text-green-600" },
  { icon: Users, value: "80+", label: "Happy Clients", color: "text-blue-600" },
  { icon: Award, value: "100%", label: "Client Satisfaction", color: "text-yellow-600" },
  { icon: Clock, value: "5+", label: "Years Experience", color: "text-purple-600" },
];

// Service categories for filtering
const serviceCategories = [
  "All",
  "Website Development",
  "App Development", 
  "Android TV Apps",
  "DevOps Services",
  "Full Stack Development",
  "Tech Consulting"
];

// Projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced features including payment integration, inventory management, and analytics dashboard.",
    category: "Website Development",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "/api/placeholder/400/300",
    client: "TechCorp Inc.",
    duration: "3 months",
    features: [
      "Responsive design for all devices",
      "Advanced search and filtering",
      "Real-time inventory tracking",
      "Multi-payment gateway support",
      "Admin dashboard with analytics"
    ],
    challenges: "Implementing real-time inventory synchronization across multiple warehouses",
    solution: "Used Redis pub/sub for real-time updates and implemented conflict resolution algorithms",
    results: "Increased conversion rate by 35% and reduced cart abandonment by 28%",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
    category: "App Development",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB", "JWT"],
    image: "/api/placeholder/400/300",
    client: "BankSecure Ltd.",
    duration: "4 months",
    features: [
      "Biometric authentication (Face ID, Touch ID)",
      "Real-time transaction monitoring",
      "Bill payment and transfers",
      "Investment portfolio tracking",
      "Push notifications for security alerts"
    ],
    challenges: "Ensuring high security standards while maintaining excellent user experience",
    solution: "Implemented multi-layer security with encryption, biometric auth, and secure API endpoints",
    results: "Achieved 99.9% uptime and 4.8/5 user rating on app stores",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 3,
    title: "Smart TV Streaming App",
    description: "Android TV application for streaming content with personalized recommendations and offline viewing capabilities.",
    category: "Android TV Apps",
    techStack: ["Kotlin", "Android TV SDK", "Firebase", "ExoPlayer", "Room Database"],
    image: "/api/placeholder/400/300",
    client: "StreamView",
    duration: "2.5 months",
    features: [
      "4K video streaming support",
      "Offline content download",
      "Personalized recommendations",
      "Multi-language support",
      "Parental controls"
    ],
    challenges: "Optimizing video playback for various network conditions and TV hardware",
    solution: "Implemented adaptive bitrate streaming and hardware acceleration for smooth playback",
    results: "Reduced buffering by 60% and increased user engagement by 45%",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 4,
    title: "CI/CD Pipeline Automation",
    description: "Complete DevOps solution with automated testing, deployment, and monitoring for microservices architecture.",
    category: "DevOps Services",
    techStack: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
    image: "/api/placeholder/400/300",
    client: "CloudTech Solutions",
    duration: "1.5 months",
    features: [
      "Automated testing and deployment",
      "Infrastructure as Code (IaC)",
      "Real-time monitoring and alerting",
      "Auto-scaling capabilities",
      "Disaster recovery setup"
    ],
    challenges: "Managing complex microservices deployment with zero-downtime updates",
    solution: "Implemented blue-green deployment strategy with automated rollback mechanisms",
    results: "Reduced deployment time by 80% and achieved 99.99% uptime",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 5,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
    category: "Full Stack Development",
    techStack: ["Vue.js", "Python", "PostgreSQL", "Redis", "Docker"],
    image: "/api/placeholder/400/300",
    client: "HealthCare Plus",
    duration: "5 months",
    features: [
      "Patient portal and appointment booking",
      "Electronic health records (EHR)",
      "Telemedicine integration",
      "Billing and insurance management",
      "Analytics and reporting dashboard"
    ],
    challenges: "Ensuring HIPAA compliance while maintaining system performance",
    solution: "Implemented role-based access control, audit logging, and data encryption at rest and in transit",
    results: "Improved patient satisfaction by 40% and reduced administrative overhead by 30%",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 6,
    title: "AI-Powered Analytics Platform",
    description: "Business intelligence platform with machine learning capabilities for predictive analytics and data visualization.",
    category: "Tech Consulting",
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    image: "/api/placeholder/400/300",
    client: "DataInsight Corp",
    duration: "6 months",
    features: [
      "Predictive analytics models",
      "Interactive data visualization",
      "Real-time data processing",
      "Custom ML model training",
      "API integration capabilities"
    ],
    challenges: "Building scalable ML models that can handle large datasets efficiently",
    solution: "Implemented distributed computing with Apache Spark and model versioning with MLflow",
    results: "Improved prediction accuracy by 25% and reduced processing time by 70%",
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    
    const timer = setTimeout(() => {
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise and innovation
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-3 text-logo-pink">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg" 
                    : "hover:bg-logo-pink/5 hover:text-logo-pink hover:border-logo-pink/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-logo-pink/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Globe className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Project Preview</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-logo-pink transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.client}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Globe className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category or check back later.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Globe className="h-16 w-16 mx-auto mb-2" />
                    <p>Project Preview</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-semibold">{selectedProject.client}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-semibold">{selectedProject.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-semibold">{selectedProject.category}</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Description</h4>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Challenges</h4>
                    <p className="text-gray-600">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Solution</h4>
                    <p className="text-gray-600">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Results & Impact</h4>
                  <p className="text-gray-600">{selectedProject.results}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.links.live && (
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.links.github && (
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
