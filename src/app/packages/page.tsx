"use client";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const packages = [
  {
    name: "Starter",
    price: 199,
    tagline: "For newer local service businesses",
    pages: 3,
    features: [
      { name: "Up to 3 core pages", included: true },
      { name: "Mobile-first layout", included: true },
      { name: "Quote request form", included: true },
      { name: "Fast delivery (3 days)", included: true },
      { name: "Service and trust copy", included: true },
      { name: "Basic local SEO setup", included: true },
      { name: "Google map placement", included: false },
      { name: "City or service-area pages", included: false },
      { name: "Project gallery", included: false },
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: 299,
    tagline: "Most popular for quote requests",
    pages: 5,
    features: [
      { name: "Up to 5 conversion-focused pages", included: true },
      { name: "Mobile-first layout", included: true },
      { name: "Quote request form", included: true },
      { name: "Fast delivery (3 days)", included: true },
      { name: "Service and trust copy", included: true },
      { name: "Local SEO sections", included: true },
      { name: "Google map placement", included: true },
      { name: "Review and trust sections", included: true },
      { name: "Project gallery", included: false },
    ],
    popular: true,
  },
  {
    name: "Add-Ons",
    price: 99,
    tagline: "For more services, cities, and proof",
    pages: null,
    perPage: true,
    features: [
      { name: "Extra service pages", included: true },
      { name: "City or service-area pages", included: true },
      { name: "Before/after project sections", included: true },
      { name: "Project gallery", included: true },
      { name: "Extra form questions", included: true },
      { name: "Ongoing updates available", included: true },
      { name: "Ad landing pages", included: true },
      { name: "Seasonal promotion pages", included: true },
    ],
    popular: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Website Packages for Local Service Businesses
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Clear starting prices for trades businesses that need a professional
            website, better local trust, and more quote requests.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass-card rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "border-primary/50 shadow-[0_0_40px_rgba(104,86,227,0.15)]"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Best for lead generation
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h2>
                  <p className="text-text-secondary text-sm mb-4">{pkg.tagline}</p>
                  <div className="mb-4">
                    {pkg.price ? (
                      <div>
                        <span className="text-5xl font-bold gradient-text">
                          ${pkg.price}
                        </span>
                        {pkg.perPage && (
                          <span className="text-text-muted">/page</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-5xl font-bold gradient-text">
                        Custom
                      </span>
                    )}
                  </div>
                  <span className="inline-block bg-white/5 text-text-secondary text-sm font-medium px-4 py-1 rounded-full border border-white/10">
                    {pkg.pages ? `${pkg.pages} pages included` : "Add as needed"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      <Check
                        size={20}
                        className={`mr-3 flex-shrink-0 ${
                          feature.included
                            ? "text-primary"
                            : "text-text-muted"
                        }`}
                      />
                      <span
                        className={
                          feature.included ? "text-text-secondary" : "text-text-muted"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                    href="/contact"
                    variant={pkg.popular ? "glow" : "outline"}
                    fullWidth
                  >
                    {pkg.price && !pkg.perPage
                      ? "Get My Website Plan"
                      : "Ask About Add-Ons"}
                  </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-white font-semibold text-xl mb-3">
              What is not included in the starting price?
            </h2>
            <p className="text-text-secondary">
              Domain registration, hosting upgrades, paid ads, email accounts, and
              third-party tools are separate if your business needs them. You will
              know the scope before work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Send your trade, service area, and current website link if you have one.
            We will recommend the simplest plan that makes sense.
          </p>
          <Link href="/contact">
            <Button variant="glow" size="lg">
              Book a Free Website Review <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
