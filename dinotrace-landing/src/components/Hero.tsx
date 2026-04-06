"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <motion.video
        style={{ y: videoY }}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-main.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20"
      >
        <motion.div variants={heroItem} className="mb-8">
          <a
            href="#early-access"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            Now in Early Access — Fraud Detection &amp; Anti-Phishing are live
            <span className="text-white/40 group-hover:text-white/60 transition-colors">→</span>
          </a>
        </motion.div>

        <motion.h1
          variants={heroItem}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white text-hero-shadow drop-shadow-[0_4px_32px_rgba(58,135,249,0.4)]"
        >
          The Agent Factory
          <br />
          <span className="bg-gradient-to-r from-brand-blue via-blue-300 to-brand-green bg-clip-text text-transparent">
            for iGaming
          </span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl text-hero-shadow"
        >
          AI agents that detect fraud, stop phishing, and automate operations
          across your iGaming platform — deployed in minutes, not months.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-3 text-[15px] font-semibold text-white shadow-md shadow-brand-blue/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Request Early Access
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-7 py-3 text-[15px] font-medium text-white hover:bg-white/15 transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.p
          variants={heroItem}
          className="mt-6 text-sm text-white/50 text-hero-shadow"
        >
          Built for iGaming operators · No code required · Deploy in under 60 minutes
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
