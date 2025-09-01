"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Send, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  Phone,
  Mail,
  Calendar,
  Target,
  Lightbulb,
  Zap,
  Shield,
  TrendingUp,
  Code2,
  Smartphone,
  Tv,
  Server,
  Database,
  Laptop,
  Play,
  Gamepad2,
  Volume2,
  Cloud,
  GitBranch,
  Monitor,
  Layers,
  Code,
  Globe,
  Lock,
  BookOpen,
  Briefcase,
  Bell,
  Search
} from "lucide-react";

// Icon mapping helper
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Code2,
    Smartphone,
    Tv,
    Server,
    Database,
    Laptop,
    Target,
    Lightbulb,
    Zap,
    Shield,
    Play,
    Gamepad2,
    Volume2,
    Cloud,
    GitBranch,
    Monitor,
    Layers,
    Code,
    Globe,
    Lock,
    BookOpen,
    Briefcase,
    Bell,
    TrendingUp,
    Users,
    Search
  };
  return iconMap[iconName] || Target; // Default to Target if icon not found
};
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  shortDescription: string;
  color: string;
  iconColor: string;
  gradientClass: string;
  techStack: string[];
  features: string[];
  pricing: string;
  timeline: string;
  stats: {
    projects: string;
    rating: string;
    clients: string;
  };
  detailedFeatures?: {
    iconName: string;
    title: string;
    description: string;
  }[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  portfolio?: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

interface ServicePageTemplateProps {
  serviceData: ServiceData;
}

export default function ServicePageTemplate({ serviceData }: ServicePageTemplateProps) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    service: serviceData.title,
    budget: "",
    timeline: "",
    description: ""
  });

  // Get icon components
  const ServiceIcon = getIconComponent(serviceData.iconName);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setIsContactFormOpen(false);
    setContactForm({
      name: "",
      email: "",
      company: "",
      service: serviceData.title,
      budget: "",
      timeline: "",
      description: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const defaultDetailedFeatures = [
    {
      iconName: "Target",
      title: "Goal-Oriented Approach",
      description: "We focus on delivering solutions that align with your business objectives and drive measurable results."
    },
    {
      iconName: "Lightbulb",
      title: "Innovative Solutions",
      description: "Leveraging cutting-edge technologies and creative thinking to solve complex challenges."
    },
    {
      iconName: "Zap",
      title: "Fast Delivery",
      description: "Efficient development processes that deliver high-quality results within agreed timelines."
    },
    {
      iconName: "Shield",
      title: "Secure & Reliable",
      description: "Industry-standard security practices and robust architecture for reliable performance."
    }
  ];

  const defaultProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, understand your goals, and create a detailed project roadmap."
    },
    {
      step: 2,
      title: "Design & Prototype",
      description: "Creating wireframes, mockups, and prototypes to visualize the final solution."
    },
    {
      step: 3,
      title: "Development",
      description: "Building your solution using best practices and modern technologies."
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Thorough testing followed by deployment and ongoing support."
    }
  ];

  const detailedFeatures = serviceData.detailedFeatures || defaultDetailedFeatures;
  const process = serviceData.process || defaultProcess;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-r ${serviceData.gradientClass} opacity-20 rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r ${serviceData.gradientClass} opacity-15 rounded-full blur-3xl`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/#services" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${serviceData.color} shadow-lg`}>
                  <ServiceIcon className={`h-10 w-10 ${serviceData.iconColor}`} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {serviceData.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {serviceData.shortDescription}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {serviceData.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="text-xl font-bold text-gray-900">{serviceData.stats.rating}</span>
                  </div>
                  <div className="text-sm text-gray-500">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Users className="h-5 w-5 text-gray-600" />
                    <span className="text-xl font-bold text-gray-900">{serviceData.stats.clients}</span>
                  </div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-xl font-bold text-gray-900">{serviceData.stats.projects}</span>
                  </div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className={`flex-1 bg-gradient-to-r ${serviceData.gradientClass} hover:shadow-xl transition-all duration-300 text-white`}
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Get Started
                  <Send className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="lg:order-2">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Project Overview</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Pricing</div>
                      <div className="text-gray-600">{serviceData.pricing}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Timeline</div>
                      <div className="text-gray-600">{serviceData.timeline}</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="font-semibold text-gray-900 mb-3">Technology Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {serviceData.techStack.slice(0, 6).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {serviceData.techStack.length > 6 && (
                        <Badge variant="secondary" className="text-xs">
                          +{serviceData.techStack.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${serviceData.gradientClass} text-white`}
                    onClick={() => setIsContactFormOpen(true)}
                  >
                    Request Quote
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our {serviceData.title}?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our proven approach and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {detailedFeatures.map((feature, index) => {
              const FeatureIcon = getIconComponent(feature.iconName);
              return (
                <Card key={index} className="p-6 text-center h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-full ${serviceData.color} mb-4`}>
                    <FeatureIcon className={`h-6 w-6 ${serviceData.iconColor}`} />
                  </div>
                                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Core Features */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
              Core Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${serviceData.gradientClass} text-white font-bold text-lg mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </Card>
                
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-logo-pink to-logo-purple rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-logo-purple to-logo-blue rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together. 
            Get a free consultation and project estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-logo-pink via-logo-purple to-logo-blue hover:from-logo-pink/90 hover:via-logo-purple/90 hover:to-logo-blue/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
              onClick={() => setIsContactFormOpen(true)}
            >
              <Send className="h-5 w-5 mr-2" />
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8"
              onClick={() => setIsContactFormOpen(true)}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Mail className="h-8 w-8 mx-auto mb-3 text-logo-pink" />
              <div className="font-semibold">Email Response</div>
              <div className="text-gray-300 text-sm">Within 2 hours</div>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-3 text-logo-purple" />
              <div className="font-semibold">Free Consultation</div>
              <div className="text-gray-300 text-sm">30 minutes call</div>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-logo-blue" />
              <div className="font-semibold">Project Proposal</div>
              <div className="text-gray-300 text-sm">Within 48 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Get a Quote for {serviceData.title}
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
              <Button type="submit" className={`flex-1 bg-gradient-to-r ${serviceData.gradientClass} text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
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
    </div>
  );
} 