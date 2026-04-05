"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Describe Your Problem",
    description: "Tell DinoTrace what you need in plain language.",
    quote: "I want to detect bonus abuse across multiple accounts.",
    image: "/images/step-describe.jpeg",
    alt: "Conversational AI interface",
  },
  {
    number: "02",
    title: "Agent Builder Configures",
    description:
      "Our AI Agent Builder asks smart follow-up questions, extracts your business rules, and generates a complete crew configuration.",
    image: "/images/step-configure.jpeg",
    alt: "AI agents building a workflow",
  },
  {
    number: "03",
    title: "Deploy & Monitor",
    description:
      "Your crew goes live. Agents work autonomously, report findings, and learn from feedback. You stay in control.",
    image: "/images/step-deploy.jpeg",
    alt: "Agent deployment dashboard",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dot-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
              From Problem to Production in Minutes
            </h2>
            <p className="mt-4 text-text-body">
              No code. No configurations. Just conversation.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 flex flex-col md:flex-row items-start gap-6 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="contents">
              <AnimateOnScroll delay={0.2 * (i + 1)} className="flex-1">
                <div className="relative text-center">
                  {/* Watermark number */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-bold text-brand-blue/10 select-none pointer-events-none leading-none">
                    {step.number}
                  </span>

                  <div className="relative">
                    <motion.div
                      className="w-full h-48 rounded-xl overflow-hidden mb-6 shadow-sm border border-border-light"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        width={400}
                        height={192}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>

                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-body max-w-xs mx-auto">
                    {step.description}
                  </p>
                  {step.quote && (
                    <div className="mt-3 mx-auto max-w-xs bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-3 text-sm italic text-text-body">
                      &ldquo;{step.quote}&rdquo;
                    </div>
                  )}
                </div>
              </AnimateOnScroll>

              {/* Desktop connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center px-2 pt-20">
                  <div className="w-8 border-t-2 border-dashed border-brand-blue/20" />
                  <ChevronRight className="w-5 h-5 text-brand-blue/30 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
