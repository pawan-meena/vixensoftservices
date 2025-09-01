import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Server, Target, Lightbulb, Zap, Shield, Cloud, GitBranch, Monitor, Database } from "lucide-react";

const devopsData = {
  id: "devops-services",
  iconName: "Server",
  title: "DevOps Services",
  description: "Streamline your development workflow and infrastructure with modern DevOps practices. We implement CI/CD pipelines, cloud infrastructure, monitoring solutions, and automated deployment processes to accelerate your development cycle.",
  shortDescription: "Cloud infrastructure and deployment automation",
  color: "bg-gradient-to-br from-orange-50 to-orange-100/50",
  iconColor: "text-orange-600",
  gradientClass: "from-orange-500 to-orange-700",
  techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack", "AWS", "Azure", "GCP", "GitHub Actions", "ArgoCD"],
  features: [
    "CI/CD pipeline setup and optimization",
    "Infrastructure as Code (IaC)",
    "Container orchestration with Kubernetes",
    "Monitoring and alerting systems",
    "Auto-scaling and load balancing",
    "Security compliance and auditing",
    "Disaster recovery planning",
    "Performance optimization",
    "Cost optimization strategies",
    "Multi-cloud deployments",
    "Backup and restore automation",
    "Log aggregation and analysis"
  ],
  pricing: "Starting from $3,500",
  timeline: "2-6 weeks",
  stats: {
    projects: "95+",
    rating: "4.9",
    clients: "75+"
  },
  detailedFeatures: [
    {
      iconName: "GitBranch",
      title: "Advanced CI/CD",
      description: "Automated pipelines for testing, building, and deploying applications with rollback capabilities and quality gates."
    },
    {
      iconName: "Cloud",
      title: "Cloud-Native Solutions",
      description: "Scalable infrastructure on AWS, Azure, or GCP with microservices architecture and serverless capabilities."
    },
    {
      iconName: "Monitor",
      title: "Comprehensive Monitoring",
      description: "Real-time monitoring, alerting, and observability with custom dashboards and automated incident response."
    },
    {
      iconName: "Shield",
      title: "Security & Compliance",
      description: "Security scanning, compliance automation, and infrastructure hardening with industry best practices."
    }
  ],
  process: [
    {
      step: 1,
      title: "Infrastructure Assessment",
      description: "Analyze current infrastructure, identify bottlenecks, and design scalable architecture solutions."
    },
    {
      step: 2,
      title: "Pipeline Development",
      description: "Set up CI/CD pipelines, infrastructure as code, and automated testing frameworks."
    },
    {
      step: 3,
      title: "Implementation & Migration",
      description: "Deploy infrastructure, migrate applications, and implement monitoring and security measures."
    },
    {
      step: 4,
      title: "Optimization & Training",
      description: "Fine-tune performance, provide team training, and establish ongoing maintenance procedures."
    }
  ],
  faqs: [
    {
      question: "What cloud platforms do you work with?",
      answer: "We work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and also support hybrid and multi-cloud environments."
    },
    {
      question: "How long does it take to set up a CI/CD pipeline?",
      answer: "Basic CI/CD pipelines can be set up in 1-2 weeks, while complex enterprise pipelines with multiple environments may take 4-6 weeks."
    },
    {
      question: "Do you provide ongoing support for DevOps infrastructure?",
      answer: "Yes, we offer managed DevOps services including 24/7 monitoring, incident response, and ongoing optimization of your infrastructure."
    },
    {
      question: "Can you help migrate from on-premises to cloud?",
      answer: "Absolutely! We specialize in cloud migration strategies, helping you move from on-premises infrastructure to cloud platforms with minimal downtime."
    }
  ]
};

export default function DevopsServicesPage() {
  return <ServicePageTemplate serviceData={devopsData} />;
} 