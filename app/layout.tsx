import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "MergeFlow – Lightning-fast PDF mergers",
  description:
    "MergeFlow helps teams combine PDFs in seconds with AI-powered cleanup, secure storage, and automated delivery. Ship documents faster without breaking a sweat.",
  metadataBase: new URL("https://agentic-6101d45c.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://agentic-6101d45c.vercel.app",
    title: "MergeFlow – Lightning-fast PDF mergers",
    description:
      "Combine PDFs instantly with MergeFlow. AI cleanup, automations, and enterprise-grade security.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MergeFlow – Lightning-fast PDF mergers",
    description:
      "Combine PDFs instantly with MergeFlow. AI cleanup, automations, and enterprise-grade security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
