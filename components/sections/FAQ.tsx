"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in a wide range of modern technologies including React, Next.js, Node.js, Python, Flutter, React Native, and various cloud platforms like AWS and Azure.",
  },
  {
    question: "How long does it typically take to develop a custom website?",
    answer: "The timeline varies depending on the project scope and complexity. A basic website might take 4-6 weeks, while more complex platforms could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions remain up-to-date and perform optimally. This includes regular updates, security patches, and technical support.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular client communication. This includes requirements gathering, design, development, testing, and deployment phases, with continuous feedback and iterations.",
  },
  {
    question: "Can you help with existing projects or only new ones?",
    answer: "We can assist with both new projects and existing ones. Our team is experienced in code review, optimization, and taking over maintenance of existing applications.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}