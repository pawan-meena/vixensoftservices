"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code2, Smartphone, Tv, Server, Database, Laptop, Send, ArrowRight, Star, Users, Clock, CheckCircle, Bot, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "website-development",
    icon: Code2,
    title: "Website Development",
    description: "Custom web solutions using cutting-edge technologies for optimal performance and user experience.",
    shortDescription: "Modern, responsive websites that drive results",
    color: "bg-gradient-to-br from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
    gradientClass: "from-blue-500 to-blue-700",
    techStack: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Netlify"],
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Performance optimization",
      "Security best practices",
      "Content management systems",
      "E-commerce integration"
    ],
    pricing: "Starting from $2,500",
    timeline: "2-8 weeks",
    stats: { projects: "150+", rating: "4.9", clients: "120+" }
  },
  {
    id: "mobile-tv-app-development",
    icon: Smartphone,
    title: "Mobile & TV App Development",
    description: "Comprehensive mobile and smart TV applications that deliver exceptional user experiences across all platforms.",
    shortDescription: "Complete mobile and TV app solutions for maximum reach",
    color: "bg-gradient-to-br from-purple-50 to-purple-100/50",
    iconColor: "text-purple-600",
    gradientClass: "from-purple-500 to-purple-700",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Android TV SDK", "Firebase", "AWS", "Node.js", "MongoDB", "ExoPlayer", "Redux", "TypeScript", "Jetpack Compose"],
    features: [
      "Cross-platform mobile development",
      "Android TV & Smart TV apps",
      "Native performance optimization",
      "TV-optimized UI/UX design",
      "Remote control navigation",
      "Offline functionality",
      "Push notifications",
      "4K video support",
      "App store optimization",
      "Multi-language support"
    ],
    pricing: "Starting from $6,000",
    timeline: "4-16 weeks",
    stats: { projects: "115+", rating: "4.9", clients: "93+" }
  },
  {
    id: "ai-automation-workflow",
    icon: Bot,
    title: "AI Automation & Workflow",
    description: "Custom AI-powered automation solutions and intelligent workflows designed to boost productivity and streamline business operations.",
    shortDescription: "AI-driven automation for maximum productivity and efficiency",
    color: "bg-gradient-to-br from-emerald-50 to-emerald-100/50",
    iconColor: "text-emerald-600",
    gradientClass: "from-emerald-500 to-emerald-700",
    techStack: ["Python", "OpenAI API", "LangChain", "Azure AI", "AWS AI", "TensorFlow", "PyTorch", "RPA Tools", "Zapier", "Microsoft Power Automate", "Custom APIs", "Machine Learning"],
    features: [
      "Custom AI workflow automation",
      "Intelligent document processing",
      "Chatbot and virtual assistants",
      "Data analysis and insights",
      "Process optimization",
      "Integration with existing systems",
      "Real-time monitoring and alerts",
      "Scalable AI solutions",
      "Training and support",
      "ROI measurement and reporting"
    ],
    pricing: "Starting from $4,500",
    timeline: "3-10 weeks",
    stats: { projects: "45+", rating: "4.9", clients: "38+" }
  },
  {
    id: "devops-services",
    icon: Server,
    title: "DevOps Services",
    description: "Streamlined deployment and infrastructure management for optimal performance.",
    shortDescription: "Cloud infrastructure and deployment automation",
    color: "bg-gradient-to-br from-orange-50 to-orange-100/50",
    iconColor: "text-orange-600",
    gradientClass: "from-orange-500 to-orange-700",
    techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack", "AWS", "Azure", "GCP"],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring and alerting",
      "Auto-scaling",
      "Security compliance",
      "Disaster recovery"
    ],
    pricing: "Starting from $3,500",
    timeline: "2-6 weeks",
    stats: { projects: "95+", rating: "4.9", clients: "75+" }
  },
  {
    id: "full-stack-development",
    icon: Database,
    title: "Full Stack Development",
    description: "End-to-end development solutions covering both frontend and backend technologies.",
    shortDescription: "Complete web solutions from frontend to backend",
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100/50",
    iconColor: "text-indigo-600",
    gradientClass: "from-indigo-500 to-indigo-700",
    techStack: ["React", "Angular", "Vue.js", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Microservices"],
    features: [
      "Complete system architecture",
      "API development",
      "Database design",
      "Authentication & authorization",
      "Third-party integrations",
      "Performance optimization"
    ],
    pricing: "Starting from $8,000",
    timeline: "6-16 weeks",
    stats: { projects: "110+", rating: "4.8", clients: "85+" }
  },
  {
    id: "tech-consulting",
    icon: Laptop,
    title: "Tech Consulting",
    description: "Expert guidance on technology strategy and implementation for business growth.",
    shortDescription: "Strategic technology guidance for business success",
    color: "bg-gradient-to-br from-teal-50 to-teal-100/50",
    iconColor: "text-teal-600",
    gradientClass: "from-teal-500 to-teal-700",
    techStack: ["Architecture Design", "Technology Selection", "Security Audits", "Performance Analysis", "Scalability Planning", "Migration Strategies"],
    features: [
      "Technology assessment",
      "Architecture review",
      "Security audits",
      "Performance optimization",
      "Scalability planning",
      "Migration strategies"
    ],
    pricing: "Starting from $150/hour",
    timeline: "1-4 weeks",
    stats: { projects: "200+", rating: "4.9", clients: "150+" }
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: ""
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = section.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openServiceModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const openContactForm = (serviceTitle: string) => {
    setContactForm(prev => ({ ...prev, service: serviceTitle }));
    setIsContactFormOpen(true);
    setIsModalOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setIsContactFormOpen(false);
    setContactForm({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      description: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-logo-pink/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-logo-blue/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-logo-purple/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 mb-6">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent leading-tight">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions tailored to transform your business and drive digital success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group cursor-pointer opacity-0 transform translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`relative h-full ${service.color} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02]`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 bg-white/90 backdrop-blur-sm rounded-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{service.stats.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="h-3 w-3 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">{service.stats.clients}</span>
                      </div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span className="text-sm font-semibold text-gray-900">{service.stats.projects}</span>
                      </div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                  </div>

                                      {/* Tech Stack Preview */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-3">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-2 py-1 bg-white/70 text-gray-600 rounded-md text-xs font-medium hover:bg-white transition-colors border border-gray-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-white/70 text-gray-600 rounded-md text-xs font-medium border border-gray-200/50">
                            +{service.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                  {/* Pricing & Timeline */}
                  <div className="mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Starting Price</div>
                        <div className="text-sm font-semibold text-gray-900">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Timeline</div>
                        <div className="text-sm font-semibold text-gray-900">{service.timeline}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <Link href={`/services/${service.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full group/btn bg-white/80 hover:bg-white border-gray-200/50 hover:border-gray-300"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.gradientClass} hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-white border-0`}
                      onClick={() => openContactForm(service.title)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-logo-pink/10 via-logo-purple/10 to-logo-blue/10 rounded-3xl p-12 border border-white/50 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in creating tailored technology solutions that perfectly fit your unique business requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-3"
            onClick={() => setIsContactFormOpen(true)}
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className={`p-3 rounded-full ${selectedService.color}`}>
                    <selectedService.icon className={`h-6 w-6 ${selectedService.iconColor}`} />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Description</h4>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>

                {/* Tech Stack */}
                                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedService.iconColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                    <p className="text-gray-600">{selectedService.pricing}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                    <p className="text-gray-600">{selectedService.timeline}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4 space-y-4">
                  <Link href={`/services/${selectedService.id}`}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="mr-4"
                    >
                      View Full Details
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    onClick={() => openContactForm(selectedService.title)}
                    className={`px-8 bg-gradient-to-r ${selectedService.gradientClass} hover:shadow-xl transition-all duration-300 text-white`}
                  >
                    Get Started with {selectedService.title}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Form Modal */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Get a Quote for {contactForm.service || "Our Services"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Enter company name (optional)"
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={contactForm.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Under $5,000">Under $5,000</SelectItem>
                    <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                    <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                    <SelectItem value="Over $50,000">Over $50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select value={contactForm.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASAP">ASAP</SelectItem>
                  <SelectItem value="1-2 months">1-2 months</SelectItem>
                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                  <SelectItem value="6+ months">6+ months</SelectItem>
                  <SelectItem value="Flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                value={contactForm.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                required
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Send className="h-4 w-4 mr-2" />
                Send Inquiry
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsContactFormOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}