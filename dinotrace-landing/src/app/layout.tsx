import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DinoTrace — The Agent Factory for iGaming",
  description:
    "Deploy intelligent agent crews that detect fraud, ensure compliance, and automate operations — through conversation, not code.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DinoTrace — The Agent Factory for iGaming",
    description:
      "Deploy intelligent agent crews that detect fraud, ensure compliance, and automate operations — through conversation, not code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
