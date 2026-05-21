"use client";
import { Button } from "@/components/ui";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$199",
    description: "A clean lead-ready site for newer or smaller service businesses",
    features: [
      "Up to 3 core pages",
      "Mobile-first quote form",
      "Clear service and trust copy",
      "Basic local SEO setup",
      "Click-to-contact layout",
      "1 revision round",
    ],
  },
  {
    name: "Growth",
    price: "$299",
    description: "Best fit for contractors who want more local quote requests",
    featured: true,
    features: [
      "Up to 5 conversion-focused pages",
      "Service-area and local SEO sections",
      "Quote request form with email",
      "Google profile and map placement",
      "Review and trust sections",
      "3 revision rounds",
      "Priority launch support",
    ],
  },
  {
    name: "Add-Ons",
    price: "$99",
    perPage: true,
    description: "Expand your site as your services and locations grow",
    features: [
      "Extra service pages",
      "City or service-area pages",
      "Before/after project sections",
      "Gallery or project portfolio",
      "Additional form questions",
      "Ongoing updates available",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-16 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Clear Packages for <span className="gradient-text">Local Growth</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Fixed starting prices, clear deliverables, and optional add-ons when
            you need more pages, service areas, or project proof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass-card rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                pkg.featured
                  ? "border-primary/50 shadow-[0_0_40px_rgba(104,86,227,0.15)]"
                  : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Best for lead generation
                  </span>
                </div>
              )}
              
              <div className="text-center mb-5 lg:mb-6">
                <h3 className="text-white font-semibold text-xl mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.perPage && <span className="text-text-muted">/page</span>}
                </div>
                <p className="text-text-secondary text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6 lg:mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-text-secondary text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                  href="/contact"
                  variant={pkg.featured ? "glow" : "outline"} 
                  fullWidth
                >
                  {pkg.featured ? "Get My Website Plan" : "Ask About This Package"}
                </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8 max-w-3xl mx-auto">
          Hosting, domain, paid ads, and third-party subscriptions are separate when needed.
          We keep the website scope clear before work starts.
        </p>
      </div>
    </section>
  );
}
