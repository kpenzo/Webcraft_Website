import type { Metadata } from "next";
import {
  Hero,
  TrustBar,
  Packages,
  DemoWebsites,
  BeforeAfter,
  BusinessesWeHelp,
  Testimonials,
  ContactForm,
} from "@/components/sections";
import { DOMAIN, pageMeta } from "@/lib/i18n";

export const metadata: Metadata = {
  title: pageMeta.es.title,
  description: pageMeta.es.description,
  alternates: {
    canonical: DOMAIN + "/es",
    languages: {
      en: DOMAIN,
      es: DOMAIN + "/es",
      "x-default": DOMAIN,
    },
  },
  openGraph: {
    title: pageMeta.es.title,
    description: pageMeta.es.description,
    url: DOMAIN + "/es",
    siteName: "NextGen Web Development",
    locale: pageMeta.es.locale,
    type: "website",
  },
};

export default function SpanishHomePage() {
  return (
    <>
      <Hero locale="es" />
      <TrustBar locale="es" />
      <Packages locale="es" />
      <DemoWebsites locale="es" />
      <BeforeAfter locale="es" />
      <BusinessesWeHelp locale="es" />
      <Testimonials locale="es" />
      <ContactForm locale="es" />
    </>
  );
}
