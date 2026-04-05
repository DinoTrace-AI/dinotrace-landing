"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-24">
      {/* Background image */}
      <Image
        src="/images/cta-background.jpeg"
        alt=""
        aria-hidden
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Build Your First Crew?
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <p className="mt-4 text-white/80 text-lg">
            See DinoTrace in action. Book a personalized demo with our team.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="mt-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
              <a
                href="mailto:hello@dinotrace.com"
                className="relative inline-flex items-center rounded-full bg-white px-12 py-5 text-lg font-bold text-brand-blue shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Book a Demo
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Or email us at{" "}
              <a
                href="mailto:hello@dinotrace.com"
                className="underline underline-offset-4 decoration-white/30 hover:decoration-white/60 hover:text-white transition-colors"
              >
                hello@dinotrace.com
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
