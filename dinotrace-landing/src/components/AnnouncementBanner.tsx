"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(localStorage.getItem("banner-dismissed") === "true");
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem("banner-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div className="bg-brand-blue text-white text-center py-2.5 px-4 text-sm relative z-[60]">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
        <span className="font-medium">Now in Early Access</span>
        <span className="text-white/60 mx-1">—</span>
        <span className="text-white/80">Fraud Detection &amp; Anti-Phishing Crews are live.</span>
        <a
          href="#early-access"
          className="ml-2 underline underline-offset-2 font-semibold hover:text-white/80 transition-opacity"
        >
          Request Access →
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
