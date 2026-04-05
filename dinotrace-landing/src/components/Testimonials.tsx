"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "DinoTrace cut our fraud investigation time by 60%. The agents catch patterns our team would have missed.",
    name: "Fraud Manager",
    company: "Leading European Sportsbook",
    initials: "FM",
  },
  {
    quote:
      "We deployed a full anti-phishing crew in under an hour. No engineering required.",
    name: "Head of Security",
    company: "Asian Casino Operator",
    initials: "HS",
  },
  {
    quote:
      "The Agent Factory concept is game-changing. We're building custom crews for use cases we hadn't even considered.",
    name: "CTO",
    company: "Multi-brand iGaming Group",
    initials: "CT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-section py-20">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark md:text-4xl">
              What Operators Are Saying
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-end">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={0.15 * (i + 1)}>
              <div
                className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                  i === 0
                    ? "border-l-4 border-l-brand-blue border-border-light"
                    : "border-border-light"
                } ${i === 1 ? "md:-translate-y-2" : ""}`}
              >
                <span className="absolute top-4 left-4 text-6xl text-brand-blue/10 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="relative mt-8 text-sm leading-relaxed text-text-body">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue/70 text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-dark">
                      {t.name}
                    </p>
                    <p className="text-xs text-text-muted">{t.company}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
