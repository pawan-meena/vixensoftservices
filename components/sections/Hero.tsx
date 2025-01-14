"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Laptop, Smartphone, Tv, Server, Database } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Ideas Into
              <span className="text-primary"> Digital Reality</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We deliver cutting-edge technology solutions that drive innovation and growth for businesses worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Web Development" },
                { icon: Smartphone, label: "App Development" },
                { icon: Tv, label: "TV Apps" },
                { icon: Server, label: "DevOps" },
                { icon: Database, label: "Full Stack" },
                { icon: Laptop, label: "Tech Consulting" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-card rounded-lg shadow-lg flex flex-col items-center text-center"
                >
                  <item.icon className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}