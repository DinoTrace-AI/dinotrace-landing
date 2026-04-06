"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Crews", href: "#crews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isForced = mobileOpen || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isForced
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-[72px]">
        <a href="#" className="flex items-center">
          <img
            src="/dinotrace-logo-color.png"
            alt="DinoTrace"
            className={`h-8 w-auto transition-all duration-500 ${
              isForced ? "" : "brightness-0 invert"
            }`}
            style={{ maxWidth: 160 }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-500 ${
                  isActive
                    ? isForced
                      ? "text-brand-blue font-semibold"
                      : "text-white font-semibold"
                    : isForced
                      ? "text-text-body hover:text-text-dark"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <a
            href="#early-access"
            className={`text-[13px] font-semibold rounded-full px-5 py-2.5 transition-all duration-500 ${
              isForced
                ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                : "bg-white/15 text-white border border-white/25 backdrop-blur-sm hover:bg-white/25"
            }`}
          >
            Request Early Access
          </a>
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${
            isForced ? "text-text-dark" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border-light px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[15px] font-medium text-text-body hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block w-full rounded-full bg-brand-blue px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Request Early Access
          </a>
        </div>
      )}
    </header>
  );
}
