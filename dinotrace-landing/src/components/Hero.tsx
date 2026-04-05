"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Full-bleed background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-main.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Lighter dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-block rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-semibold text-white">
            AI-Powered Agent Orchestration
          </span>
        </motion.div>

        <motion.h1
          className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white drop-shadow-[0_4px_32px_rgba(58,135,249,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          The Agent Factory
          <br />
          <span className="bg-gradient-to-r from-brand-blue via-blue-300 to-brand-green bg-clip-text text-transparent">
            for iGaming
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Deploy intelligent agent crews that detect fraud, ensure compliance,
          and automate operations — through conversation, not code.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-blue px-10 py-4 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Book a Demo
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 px-10 py-4 text-base font-semibold text-white hover:bg-white/15 hover:border-white/50 transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
