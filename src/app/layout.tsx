import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const DOMAIN = "https://nextgenwebdevelopment.com";

export const metadata: Metadata = {
  title: "NextGen Web Development",
  description:
    "Lead-ready websites for contractors, trades, and local service companies. Built to help generate more calls, quote requests, and local trust.",
  metadataBase: new URL(DOMAIN),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "NextGen Web Development",
    description: "Lead-ready websites for contractors, trades, and local service companies. Built to help generate more calls, quote requests, and local trust.",
    url: DOMAIN,
    siteName: "NextGen Web Development",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: DOMAIN,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
