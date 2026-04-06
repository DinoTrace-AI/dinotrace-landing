"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquareText, Brain, Layers, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const headingAnim = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardScaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const benefits: Benefit[] = [
  {
    icon: MessageSquareText,
    title: "Tell, Don't Build",
    description:
      "Describe what you need in plain English. No coding, no rule engines, no ticket to your dev team.",
    image: "/images/concept-crews.jpeg",
    alt: "Conversational agent setup",
  },
  {
    icon: Brain,
    title: "Agents That Learn",
    description:
      "Our AI agents monitor patterns 24/7 and adapt as threats evolve. They get smarter the longer they run.",
    image: "/images/concept-agents.jpeg",
    alt: "AI agents learning and adapting",
  },
  {
    icon: Layers,
    title: "One Platform, Every Use Case",
    description:
      "Fraud, phishing, compliance, marketing — one platform that connects all your operational needs.",
    image: "/images/concept-skills.jpeg",
    alt: "Unified platform for all operations",
  },
  {
    icon: Zap,
    title: "Live in Minutes",
    description:
      "Go from problem description to deployed agents in under an hour. No integrations sprint required.",
    image: "/images/concept-tools.jpeg",
    alt: "Fast deployment dashboard",
  },
];

export default function ProductConcept() {
  return (
    <section id="features" className="py-24 md:py-28 bg-dot-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">
            What Makes DinoTrace Different
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Built for operators, not engineers
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={cardScaleIn}
              className="rounded-2xl border border-border-light bg-white p-6 text-center shadow-sm h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300"
            >
              <Image
                src={b.image}
                alt={b.alt}
                width={128}
                height={128}
                loading="lazy"
                className="w-28 h-28 object-contain mx-auto mb-4 rounded-xl animate-gentle-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10">
                <b.icon className="h-4 w-4 text-brand-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-text-muted flex-grow">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
