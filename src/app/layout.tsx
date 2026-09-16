import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://mailhos.info";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FAQ Vape — Straight answers to common vaping questions",
    template: "%s | FAQ Vape",
  },
  description:
    "Direct, no-fluff answers to the specific vaping questions UK vapers actually search for, plus a plain-English glossary of vaping terms.",
  openGraph: {
    type: "website",
    siteName: "FAQ Vape",
    title: "FAQ Vape — Straight answers to common vaping questions",
    description:
      "Direct, no-fluff answers to the specific vaping questions UK vapers actually search for, plus a plain-English glossary of vaping terms.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: "FAQ Vape — Straight answers to common vaping questions",
    description:
      "Direct, no-fluff answers to the specific vaping questions UK vapers actually search for, plus a plain-English glossary of vaping terms.",
  },
  verification: {
    google: "KoUfidhw6gpKWNWF-Dd4ZHmlrrdhqvaF7btomKTeRXg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FAQ Vape",
    url: SITE_URL,
    description:
      "Direct, no-fluff answers to the specific vaping questions UK vapers actually search for, plus a plain-English glossary of vaping terms.",
  };

  return (
    <html lang="en" className={`${workSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
