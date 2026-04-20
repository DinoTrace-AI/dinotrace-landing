"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export default function EarlyAccessCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

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
          className="mt-10 mx-auto max-w-md"
        >
          {submitted ? (
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <p className="text-xl font-semibold text-white">
                Thanks! We&apos;ll be in touch soon. 🎉
              </p>
              <p className="mt-2 text-sm text-white/70">
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full sm:flex-1 rounded-full px-6 py-3 text-sm text-text-dark bg-white border-2 border-transparent shadow-xl focus:outline-none focus:ring-0 focus:border-brand-blue placeholder:text-gray-400"
                />
                <div className="relative inline-flex w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg animate-pulse" />
                  <button
                    type="submit"
                    className="relative w-full rounded-full bg-white text-brand-blue font-semibold px-7 py-3 text-[15px] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
                  >
                    Request Access
                  </button>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Free · No commitment · We&apos;ll reach out within 24 hours to schedule
              </p>
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-white/70 text-sm"
        >
          Prefer to chat? Email us at{" "}
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
