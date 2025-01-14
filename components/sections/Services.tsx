"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Smartphone, Tv, Server, Database, Laptop } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Custom web solutions using cutting-edge technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Tv,
    title: "Android TV Apps",
    description: "Engaging smart TV applications optimized for the big screen experience.",
  },
  {
    icon: Server,
    title: "DevOps Services",
    description: "Streamlined deployment and infrastructure management for optimal performance.",
  },
  {
    icon: Database,
    title: "Full Stack Development",
    description: "End-to-end development solutions covering both frontend and backend technologies.",
  },
  {
    icon: Laptop,
    title: "Tech Consulting",
    description: "Expert guidance on technology strategy and implementation for business growth.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}