"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { GlassCard } from "@/components/ui";

const steps = [
  {
    step: 1,
    title: "Tell Us Your Trade",
    description: "Share your services, service areas, ideal jobs, and what customers usually ask before booking.",
  },
  {
    step: 2,
    title: "Get a Clear Plan",
    description: "We map the pages, local trust points, quote flow, and timeline before anything is built.",
  },
  {
    step: 3,
    title: "We Build the Website",
    description: "Your site is written and arranged to help visitors understand, trust, and contact your business.",
  },
  {
    step: 4,
    title: "Launch & Get Found",
    description: "Review the site, request edits, then launch with contact forms, mobile layouts, and local SEO basics ready.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple Process. No Stress.
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A clear path from first message to live website, built for busy trade
            and local service business owners.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <GlassCard>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </GlassCard>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-text-muted">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get more quote requests?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Send your trade, service area, and goals. We will recommend a clear plan.
          </p>
          <Link href="/contact">
            <Button variant="glow" size="lg">
              Get My Website Plan <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
