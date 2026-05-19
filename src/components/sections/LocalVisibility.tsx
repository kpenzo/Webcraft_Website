"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui";

const visibilityItems = [
  "Service pages for the work you want more of",
  "City and service-area targeting for local searches",
  "Google Maps and Google profile placement",
  "Basic SEO foundations for titles, descriptions, and page structure",
  "Clear local trust language so customers know where you work",
];

export function LocalVisibility() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
                Local visibility
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
                Help Customers Find You <span className="gradient-text">Locally</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Your website should support how people search: by service, city,
                problem, and trust. We build the local foundations into the page
                structure instead of treating SEO as an afterthought.
              </p>
              <Button href="/contact" variant="glow" size="lg" className="w-full sm:w-auto">
                Book a Free Website Review
              </Button>
            </div>

            <ul className="space-y-4">
              {visibilityItems.map((item) => (
                <li key={item} className="flex gap-3 text-text-secondary">
                  <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
