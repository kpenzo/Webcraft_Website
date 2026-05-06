"use client";
import { Button } from "@/components/ui";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "$199",
    description: "Perfect for small businesses just getting started",
    features: [
      "3 custom pages",
      "Contact form integration",
      "Mobile responsive design",
      "Basic SEO setup",
      "Social media links",
      "1 round of revisions",
    ],
  },
  {
    name: "Standard",
    price: "$299",
    description: "Best value for growing businesses",
    featured: true,
    features: [
      "5 custom pages",
      "Contact form with email",
      "Image gallery",
      "Advanced SEO",
      "Google Maps integration",
      "3 rounds of revisions",
      "Priority support",
    ],
  },
  {
    name: "Custom",
    price: "$99",
    perPage: true,
    description: "Additional pages and features",
    features: [
      "Custom page design",
      "Any functionality",
      "Custom forms",
      "E-commerce ready",
      "API integrations",
      "Ongoing support",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Everything you need to get online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass-card rounded-2xl p-8 transition-all duration-300 ${
                pkg.featured
                  ? "border-primary/50 shadow-[0_0_40px_rgba(104,86,227,0.15)]"
                  : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-xl mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.perPage && <span className="text-text-muted">/page</span>}
                </div>
                <p className="text-text-secondary text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
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
                  Get Started
                </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}