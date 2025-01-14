"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Trophy, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: Trophy,
    value: "250+",
    label: "Projects Completed",
  },
  {
    icon: CheckCircle2,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Rocket,
    value: "24/7",
    label: "Support Available",
  },
];

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Businesses Through Technology Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Vixensoftservices, we combine innovation with expertise to deliver cutting-edge solutions that drive your business forward. Our team of skilled professionals is dedicated to turning your vision into reality.
            </p>
            <ul className="space-y-4">
              {[
                "Custom software solutions tailored to your needs",
                "Agile development methodology for faster delivery",
                "Comprehensive technical support and maintenance",
                "Innovative approaches to complex challenges",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}