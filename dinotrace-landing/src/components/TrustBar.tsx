"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

const operators = [
  "Operator 1",
  "Operator 2",
  "Operator 3",
  "Operator 4",
  "Operator 5",
  "Operator 6",
];

export default function TrustBar() {
  const doubled = [...operators, ...operators];

  return (
    <AnimateOnScroll>
      <section className="border-y border-border-light py-8 overflow-hidden">
        <p className="text-center text-sm text-text-muted mb-6">
          Built for the world&apos;s leading iGaming operators
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-white to-transparent z-10" />

          <div className="flex animate-marquee-slow w-max gap-20 px-8">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex h-12 w-40 shrink-0 items-center justify-center text-text-muted/40 font-semibold text-lg tracking-wider uppercase select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
