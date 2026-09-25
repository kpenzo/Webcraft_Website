import type { Metadata } from "next";
import {
  Hero,
  TrustBar,
  Packages,
  WhyWebsite,
  DemoWebsites,
  BeforeAfter,
  BusinessesWeHelp,
  LocalVisibility,
  Testimonials,
  ContactForm,
} from "@/components/sections";
import { DOMAIN, pageMeta } from "@/lib/i18n";

export const metadata: Metadata = {
  title: pageMeta.en.title,
  description: pageMeta.en.description,
  alternates: {
    canonical: DOMAIN,
    languages: {
      en: DOMAIN,
      es: DOMAIN + "/es",
      "x-default": DOMAIN,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Packages />
      <WhyWebsite />
      <DemoWebsites />
      <BeforeAfter />
      <BusinessesWeHelp />
      <LocalVisibility />
      <Testimonials />
      <ContactForm />
    </>
  );
}
