import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DOMAIN, pageMeta } from "@/lib/i18n";

export const metadata: Metadata = {
  title: pageMeta.en.title,
  description: pageMeta.en.description,
  metadataBase: new URL(DOMAIN),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageMeta.en.title,
    description: pageMeta.en.description,
    url: DOMAIN,
    siteName: "NextGen Web Development",
    locale: pageMeta.en.locale,
    type: "website",
  },
  alternates: {
    canonical: DOMAIN,
    languages: {
      en: DOMAIN,
      es: DOMAIN + "/es",
      "x-default": DOMAIN,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
