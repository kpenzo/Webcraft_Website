import {
  Hero,
  Packages,
  WhyWebsite,
  HowItWorks,
  BusinessesWeHelp,
  Testimonials,
  FinalCTA,
  ContactForm,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Packages />
      <WhyWebsite />
      <HowItWorks />
      <BusinessesWeHelp />
      <Testimonials />
      <FinalCTA />
      <ContactForm />
    </>
  );
}