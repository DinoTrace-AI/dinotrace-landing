"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function EarlyAccessCTA() {
  return (
    <section id="early-access" className="relative overflow-hidden py-28 md:py-32">
      <Image
        src="/images/cta-background.jpeg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Ready to Deploy Your First Crew?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-4 text-lg text-white/80 max-w-lg mx-auto"
        >
          Get a personalized walkthrough of DinoTrace with our team. We&apos;ll
          show you how to deploy your first agents on a 30-minute call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10"
        >
          <div className="relative inline-flex">
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg animate-pulse" />
            <a
              href="mailto:hello@dinotrace.com?subject=Early%20Access%20Request%20%E2%80%94%20DinoTrace&body=Hi%20DinoTrace%20team%2C%0A%0AI%E2%80%99m%20interested%20in%20getting%20early%20access.%0A%0ACompany%3A%20%0ARole%3A%20%0AWhat%20I%E2%80%99m%20looking%20for%3A%20%0A%0AThanks!"
              className="relative rounded-full bg-white text-brand-blue font-semibold px-7 py-3 text-[15px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Request Early Access
            </a>
          </div>
          <p className="mt-4 text-xs text-white/60">
            Free · No commitment · We&apos;ll respond within 24 hours
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-white/70 text-sm"
        >
          Or email us directly at{" "}
          <a
            href="mailto:hello@dinotrace.com"
            className="underline underline-offset-4 decoration-white/30 hover:decoration-white/60 hover:text-white/80 transition-colors"
          >
            hello@dinotrace.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
