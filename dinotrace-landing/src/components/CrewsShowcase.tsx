"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Radar, Megaphone, Headphones, Puzzle } from "lucide-react";
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

const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

interface Crew {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  image: string;
  alt: string;
  integrations?: string;
  timeline?: string;
}

const liveCrews: Crew[] = [
  {
    icon: Shield,
    title: "Fraud Detection Crew",
    description:
      "Autonomous agents monitoring transactions, detecting bonus abuse, and flagging suspicious behavior in real-time.",
    tags: ["Bonus Abuse Analyst", "Transaction Monitor", "VIP Risk Assessor", "AML Watchdog"],
    image: "/images/crew-fraud-detection.jpeg",
    alt: "Fraud detection agents scanning transactions",
    integrations: "Works with: Player databases · Payment gateways · Slack · Email alerts",
  },
  {
    icon: Radar,
    title: "Anti-Phishing Crew",
    description:
      "Proactive brand protection agents scanning for phishing domains, fake sites, and SSL anomalies targeting your players.",
    tags: ["Domain Scanner", "SSL Monitor", "Threat Reporter", "Brand Guardian"],
    image: "/images/crew-anti-phishing.jpeg",
    alt: "Anti-phishing radar scanning domains",
    integrations: "Connects via API or standalone — no engineering required for basic setup",
  },
];

const comingSoonCrews: Crew[] = [
  {
    icon: Megaphone,
    title: "Marketing Crew",
    description: "Campaign automation, player segmentation, and retention workflows.",
    image: "/images/crew-marketing.jpeg",
    alt: "Marketing automation agents",
    timeline: "2026",
  },
  {
    icon: Headphones,
    title: "Customer Service Crew",
    description: "Automated support, smart escalation, and proactive player engagement.",
    image: "/images/crew-customer-service.jpeg",
    alt: "Customer service AI agents",
    timeline: "2026",
  },
  {
    icon: Puzzle,
    title: "Build Your Own Crew",
    description: "Define your problem. DinoTrace builds the agents, skills, and tools.",
    image: "/images/crew-custom.jpeg",
    alt: "Build your own agent crew",
    timeline: "2026",
  },
];

export default function CrewsShowcase() {
  return (
    <section id="crews" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">
            What You Can Deploy
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Agent crews built for iGaming — with more on the way
          </p>
        </motion.div>

        {/* Live crews — slide from left/right */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {liveCrews.map((crew, i) => (
            <motion.div
              key={crew.title}
              variants={i === 0 ? slideFromLeft : slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-2xl overflow-hidden border border-border-light border-l-4 border-l-brand-green bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default h-full"
            >
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src={crew.image}
                  alt={crew.alt}
                  width={600}
                  height={224}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
                    <crew.icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse-green" />
                    Live
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-dark">{crew.title}</h3>
                <p className="mt-2 text-sm text-text-body">{crew.description}</p>
                {crew.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {crew.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-blue/5 text-brand-blue text-xs px-2.5 py-1 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {crew.integrations && (
                  <p className="mt-4 pt-4 border-t border-border-light text-xs text-text-muted">
                    {crew.integrations}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[80px] bg-border-light" />
          <span className="text-xs font-semibold text-text-muted uppercase tracking-widest">
            On the Roadmap
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-border-light" />
        </div>

        {/* Coming soon crews — staggered fade up */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {comingSoonCrews.map((crew) => (
            <motion.div
              key={crew.title}
              variants={cardFadeUp}
              className="rounded-2xl overflow-hidden border border-dashed border-border-light bg-white/60 pointer-events-none cursor-default h-full opacity-60 grayscale"
            >
              <div className="w-full h-20 overflow-hidden">
                <Image
                  src={crew.image}
                  alt={crew.alt}
                  width={400}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                    <crew.icon className="h-4 w-4 text-text-muted" />
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-400">
                    {crew.timeline || "Coming Soon"}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-text-dark">{crew.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{crew.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
