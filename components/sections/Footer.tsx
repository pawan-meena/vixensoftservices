"use client";

import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Vixensoftservices</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into digital reality.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#services">Web Development</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#services">App Development</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#services">TV Apps</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#services">DevOps</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#about">About Us</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#contact">Contact</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#faq">FAQ</a>
              </li>
              <li className="text-muted-foreground hover:text-foreground transition-colors">
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Vixensoftservices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}