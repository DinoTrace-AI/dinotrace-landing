"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const tabs = [
  {
    number: "01",
    label: "Describe",
    description:
      'Tell DinoTrace what you need in plain language. "I want to detect bonus abuse across multiple accounts."',
    image: "/images/step-describe.jpeg",
    alt: "Conversational AI interface",
    caption: "Chat with DinoTrace to describe your detection needs",
  },
  {
    number: "02",
    label: "Configure",
    description:
      "Our AI Agent Builder asks follow-up questions, extracts your business rules, and generates a complete crew configuration.",
    image: "/images/step-configure.jpeg",
    alt: "AI agents building a workflow",
    caption: "AI auto-generates your agent configuration",
  },
  {
    number: "03",
    label: "Deploy",
    description:
      "Your crew goes live. Agents work autonomously, report findings, and learn from feedback. You stay in control.",
    image: "/images/step-deploy.jpeg",
    alt: "Agent deployment dashboard",
    caption: "Your agents are live and monitoring in real-time",
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function ProductDemo() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % tabs.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance();
          return 0;
        }
        return prev + 100 / (AUTO_ADVANCE_MS / 50);
      });
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active, advance]);

  const selectTab = (i: number) => {
    setActive(i);
    setProgress(0);
    setPaused(true);
    setTimeout(() => setPaused(false), AUTO_ADVANCE_MS);
  };

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-bg-section">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark">
            From Problem to Production in Minutes
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text-muted max-w-xl mx-auto">
            No code. No configurations. Just conversation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Tab buttons */}
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={tab.number}
                onClick={() => selectTab(i)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden ${
                  active === i
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-white text-text-body border border-border-light hover:border-brand-blue/30"
                }`}
              >
                {active === i && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 bg-white/40"
                    style={{ width: `${progress}%`, transition: "none" }}
                  />
                )}
                <span className="font-bold opacity-60">{tab.number}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Description — crossfade */}
          <div className="text-center mb-6 min-h-[3rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-text-muted text-sm max-w-lg mx-auto"
              >
                {tabs[active].description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Mock browser window — scale entrance */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="rounded-2xl border border-border-light bg-white shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-border-light">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="mx-auto text-xs text-text-muted font-mono">
                app.dinotrace.com
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden bg-bg-section">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={tabs[active].image}
                    alt={tabs[active].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    loading="lazy"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 z-10">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium text-white text-center"
                  >
                    {tabs[active].caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
