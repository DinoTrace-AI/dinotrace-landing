"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function Credibility() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 border-t border-border-light"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm text-text-muted uppercase tracking-widest font-medium mb-6">
          Built by a team with deep iGaming expertise
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-text-muted">
          <span className="text-sm">10+ years in iGaming</span>
          <span className="text-sm text-border-light">·</span>
          <span className="text-sm">Multi-jurisdiction experience</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-text-muted">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium">
            <Lock className="w-3.5 h-3.5" />
            Security-first architecture
          </span>
          <span className="text-xs text-border-light">·</span>
          <span className="text-xs font-medium">GDPR ready</span>
          <span className="text-xs text-border-light">·</span>
          <span className="text-xs font-medium">End-to-end encryption</span>
        </div>
      </div>
    </motion.section>
  );
}
