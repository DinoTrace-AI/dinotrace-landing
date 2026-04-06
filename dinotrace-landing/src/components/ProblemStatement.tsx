"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Globe, FileCheck } from "lucide-react";

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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const painPoints = [
  {
    icon: ShieldAlert,
    title: "Bonus Abuse Slipping Through",
    description:
      "Multi-accounting schemes and promo abuse cost operators millions annually. By the time your team spots a pattern, the damage is done.",
    bg: "bg-red-50/50",
    border: "border-red-100",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Globe,
    title: "Phishing Domains Targeting Your Players",
    description:
      "Fake versions of your casino site pop up every week. Your players lose money, you lose trust — and your team finds out too late.",
    bg: "bg-orange-50/50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: FileCheck,
    title: "Compliance Is a Full-Time Job",
    description:
      "AML checks, KYC reviews, regulatory reporting — your compliance team spends more time on paperwork than on actually catching bad actors.",
    bg: "bg-yellow-50/50",
    border: "border-yellow-100",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function ProblemStatement() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-dark"
        >
          Every hour your team spends on manual review is an hour fraudsters are ahead
        </motion.h2>
        <motion.p
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
        >
          Fraud, compliance, player safety, marketing — every function needs
          constant monitoring. Your team is stretched thin, your tools are
          disconnected, and threats evolve faster than your processes.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto mt-10 max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {painPoints.map((point) => (
          <motion.div
            key={point.title}
            variants={cardFadeUp}
            className={`rounded-2xl border ${point.border} ${point.bg} p-6 text-center h-full`}
          >
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${point.iconBg}`}
            >
              <point.icon className={`w-6 h-6 ${point.iconColor}`} />
            </div>
            <h3 className="font-semibold text-text-dark">{point.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="text-lg font-medium text-brand-blue inline-block"
          initial={{ backgroundSize: "0% 100%" }}
          whileInView={{ backgroundSize: "100% 100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(58,135,249,0.1) 0%, rgba(168,205,73,0.1) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 90%",
            padding: "4px 0",
          }}
        >
          DinoTrace lets you deploy AI agents for any operational challenge —
          without writing a single line of code.
        </motion.p>
      </motion.div>
    </section>
  );
}
