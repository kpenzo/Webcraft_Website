import type { Metadata } from "next";
import { DOMAIN, pageMeta } from "@/lib/i18n";

export const metadata: Metadata = {
  title: pageMeta.es.title,
  description: pageMeta.es.description,
  openGraph: {
    title: pageMeta.es.title,
    description: pageMeta.es.description,
    url: DOMAIN + "/es",
    siteName: "NextGen Web Development",
    locale: pageMeta.es.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageMeta.es.title,
    description: pageMeta.es.description,
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
