"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code2, Smartphone, Tv, Server, Database, Laptop, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Custom web solutions using cutting-edge technologies for optimal performance and user experience.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    techStack: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Netlify"],
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Performance optimization",
      "Security best practices",
      "Content management systems",
      "E-commerce integration"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "Node.js", "MongoDB", "Redux", "TypeScript", "Jest", "Detox"],
    features: [
      "Cross-platform development",
      "Native performance",
      "Offline functionality",
      "Push notifications",
      "App store optimization",
      "Analytics integration"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
  },
  {
    icon: Tv,
    title: "Android TV Apps",
    description: "Engaging smart TV applications optimized for the big screen experience.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    techStack: ["Kotlin", "Android TV SDK", "ExoPlayer", "Firebase", "Room Database", "Retrofit", "Dagger Hilt", "Jetpack Compose", "Coroutines"],
    features: [
      "TV-optimized UI/UX",
      "Remote control navigation",
      "4K video support",
      "Offline content",
      "Multi-language support",
      "Parental controls"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Streamlined deployment and infrastructure management for optimal performance.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack", "AWS", "Azure", "GCP"],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring and alerting",
      "Auto-scaling",
      "Security compliance",
      "Disaster recovery"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
  },
  {
    icon: Database,
    title: "Full Stack Development",
    description: "End-to-end development solutions covering both frontend and backend technologies.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    techStack: ["React", "Angular", "Vue.js", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Microservices"],
    features: [
      "Complete system architecture",
      "API development",
      "Database design",
      "Authentication & authorization",
      "Third-party integrations",
      "Performance optimization"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
  },
  {
    icon: Laptop,
    title: "Tech Consulting",
    description: "Expert guidance on technology strategy and implementation for business growth.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    techStack: ["Architecture Design", "Technology Selection", "Security Audits", "Performance Analysis", "Scalability Planning", "Migration Strategies"],
    features: [
      "Technology assessment",
      "Architecture review",
      "Security audits",
      "Performance optimization",
      "Scalability planning",
      "Migration strategies"
    ],
    pricing: "Depends upon project requirements",
    timeline: "Depends upon project requirements"
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

    // Simple fade-in animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    
    const timer = setTimeout(() => {
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 200);

    return () => clearTimeout(timer);
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
    // Here you would typically send the form data to your backend
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`p-6 h-full ${service.color} border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 bg-white rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Tech Stack Preview */}
                  <div className="mb-4 w-full">
                    <div className="text-sm text-gray-500 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {service.techStack.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="mb-4 w-full text-center">
                    <div className="text-sm font-medium text-gray-900">Price : {service.pricing}</div>
                    <div className="text-xs text-gray-500">Timeline: {service.timeline}</div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => openServiceModal(service)}
                    >
                      Learn More
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
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
                <div className="text-center pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => openContactForm(selectedService.title)}
                    className="px-8 bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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