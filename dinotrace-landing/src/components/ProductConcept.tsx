"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Bot, Brain, Wrench, ChevronRight, ChevronDown as ChevronDownIcon } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const steps = [
  {
    icon: Users,
    title: "Crews",
    image: "/images/concept-crews.jpeg",
    alt: "Agent crews working in formation",
    description:
      "Orchestrated teams of agents aligned around a mission — fraud detection, compliance, marketing, and more.",
  },
  {
    icon: Bot,
    title: "Agents",
    image: "/images/concept-agents.jpeg",
    alt: "AI agent analyzing data",
    description:
      "Autonomous AI agents within each crew, each with a defined role and responsibility.",
  },
  {
    icon: Brain,
    title: "Skills",
    image: "/images/concept-skills.jpeg",
    alt: "Neural network of agent skills",
    description:
      "The capabilities each agent possesses — pattern recognition, regulatory checks, anomaly detection.",
  },
  {
    icon: Wrench,
    title: "Tools",
    image: "/images/concept-tools.jpeg",
    alt: "Connected integration tools",
    description:
      "Concrete integrations and actions — query databases, send alerts, flag accounts, generate reports.",
  },
];

export default function ProductConcept() {
  return (
    <section id="features" className="py-24 bg-dot-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
              How DinoTrace Works
            </h2>
            <p className="mt-4 text-text-body">
              A layered intelligence system — from strategy to execution
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-start">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              <AnimateOnScroll delay={0.1 * (i + 1)}>
                <motion.div
                  className="rounded-2xl border border-border-light bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={128}
                    height={128}
                    loading="lazy"
                    className="w-24 h-24 object-contain mx-auto mb-4 rounded-xl"
                  />
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10">
                    <step.icon className="h-4 w-4 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-body">{step.description}</p>
                </motion.div>
              </AnimateOnScroll>

              {/* Desktop arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center">
                  <ChevronRight className="w-5 h-5 text-brand-blue/30" />
                </div>
              )}
              {/* Mobile arrow connector */}
              {i < steps.length - 1 && (
                <div className="flex md:hidden items-center justify-center py-2">
                  <ChevronDownIcon className="w-5 h-5 text-brand-blue/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <AnimateOnScroll delay={0.5}>
          <p className="mt-12 text-center">
            <span className="inline-block rounded-full bg-brand-blue/5 border border-brand-blue/10 px-5 py-2 text-sm text-text-muted italic">
              Describe your problem in plain English. DinoTrace builds the crew.
            </span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
