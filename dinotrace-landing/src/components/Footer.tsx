import { Link2, MessageCircle } from "lucide-react";

const productLinks = [
  { label: "Fraud Detection Crew", href: "#crews" },
  { label: "Anti-Phishing Crew", href: "#crews" },
  { label: "Agent Builder", href: "#features" },
  { label: "Pricing (Coming Soon)", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Blog (Coming Soon)", href: "#" },
  { label: "Careers (Coming Soon)", href: "#" },
  { label: "Contact", href: "mailto:hello@dinotrace.com" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/dinotrace-logo-color.png"
              alt="DinoTrace"
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/60">
              The Agent Factory for iGaming
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/40 hover:text-white hover:bg-white/20 transition-colors"
              >
                <Link2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/40 hover:text-white hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-xs text-white/40">
            © 2025 DinoTrace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
