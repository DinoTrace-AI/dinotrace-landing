"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Radar, Megaphone, Headphones, Puzzle } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import type { LucideIcon } from "lucide-react";

interface Crew {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  live: boolean;
  image: string;
  alt: string;
}

const liveCrew: Crew[] = [
  {
    icon: Shield,
    title: "Fraud Detection Crew",
    description:
      "Autonomous agents monitoring transactions, detecting bonus abuse, and flagging suspicious behavior in real-time.",
    tags: ["Bonus Abuse Analyst", "Transaction Monitor", "VIP Risk Assessor", "AML Watchdog"],
    live: true,
    image: "/images/crew-fraud-detection.jpeg",
    alt: "Fraud detection agents scanning transactions",
  },
  {
    icon: Radar,
    title: "Anti-Phishing Crew",
    description:
      "Proactive brand protection agents scanning for phishing domains, fake sites, and SSL anomalies targeting your players.",
    tags: ["Domain Scanner", "SSL Monitor", "Threat Reporter", "Brand Guardian"],
    live: true,
    image: "/images/crew-anti-phishing.jpeg",
    alt: "Anti-phishing radar scanning domains",
  },
];

const comingSoonCrews: Crew[] = [
  {
    icon: Megaphone,
    title: "Marketing Crew",
    description: "Campaign automation, player segmentation, and retention workflows powered by intelligent agents.",
    live: false,
    image: "/images/crew-marketing.jpeg",
    alt: "Marketing automation agents",
  },
  {
    icon: Headphones,
    title: "Customer Service Crew",
    description: "Automated support, smart escalation, and proactive player engagement — 24/7.",
    live: false,
    image: "/images/crew-customer-service.jpeg",
    alt: "Customer service AI agents",
  },
  {
    icon: Puzzle,
    title: "Build Your Own Crew",
    description: "Define your problem. DinoTrace builds the agents, equips the skills, and connects the tools.",
    live: false,
    image: "/images/crew-custom.jpeg",
    alt: "Build your own agent crew",
  },
];

function CrewCard({ crew, index, isLive }: { crew: Crew; index: number; isLive: boolean }) {
  return (
    <AnimateOnScroll delay={0.15 * (index + 1)}>
      <motion.div
        className={`rounded-2xl overflow-hidden h-full ${
          isLive
            ? "border border-border-light border-l-4 border-l-brand-green bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default"
            : "border border-dashed border-border-light bg-white/60 pointer-events-none cursor-default"
        }`}
      >
        <div className="w-full h-44 overflow-hidden">
          <Image
            src={crew.image}
            alt={crew.alt}
            width={600}
            height={176}
            loading="lazy"
            className={`w-full h-full object-cover ${!isLive ? "opacity-60 grayscale" : ""}`}
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
              <crew.icon className="h-5 w-5 text-brand-blue" />
            </div>
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse-green" />
                Live
              </span>
            ) : (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-400">
                Coming Soon
              </span>
            )}
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
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}

export default function CrewsShowcase() {
  return (
    <section id="crews" className="bg-bg-section py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
              Meet the Crews
            </h2>
            <p className="mt-4 text-text-body">
              Purpose-built agent teams ready to deploy
            </p>
          </div>
        </AnimateOnScroll>

        {/* Live crews — 2 column featured */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {liveCrew.map((crew, i) => (
            <CrewCard key={crew.title} crew={crew} index={i} isLive />
          ))}
        </div>

        {/* Coming soon crews — 3 column smaller */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {comingSoonCrews.map((crew, i) => (
            <CrewCard key={crew.title} crew={crew} index={i + 2} isLive={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
