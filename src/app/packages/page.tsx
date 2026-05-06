"use client";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const packages = [
  {
    name: "Basic",
    price: 199,
    tagline: "Perfect for small businesses",
    pages: 3,
    features: [
      { name: "Up to 3 pages", included: true },
      { name: "Mobile responsive design", included: true },
      { name: "Contact form", included: true },
      { name: "Fast delivery (3 days)", included: true },
      { name: "Modern design", included: true },
      { name: "SEO basics", included: false },
      { name: "Google Maps integration", included: false },
      { name: "Social media links", included: false },
      { name: "E-commerce ready", included: false },
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: 299,
    tagline: "Most popular choice",
    pages: 5,
    features: [
      { name: "Up to 5 pages", included: true },
      { name: "Mobile responsive design", included: true },
      { name: "Contact form", included: true },
      { name: "Fast delivery (3 days)", included: true },
      { name: "Modern design", included: true },
      { name: "SEO basics", included: true },
      { name: "Google Maps integration", included: true },
      { name: "Social media links", included: true },
      { name: "E-commerce ready", included: false },
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: 99,
    tagline: "Tailored to your needs",
    pages: null,
    perPage: true,
    features: [
      { name: "Unlimited pages", included: true },
      { name: "Mobile responsive design", included: true },
      { name: "Contact form", included: true },
      { name: "Fast delivery (3 days)", included: true },
      { name: "Modern design", included: true },
      { name: "SEO basics", included: true },
      { name: "Google Maps integration", included: true },
      { name: "Social media links", included: true },
      { name: "E-commerce ready", included: true },
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
            Our Packages
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose the perfect package for your business. All packages include fast
            delivery and professional design.
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
                      Most Popular
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
                    {pkg.pages ? `${pkg.pages} pages` : "Unlimited pages"}
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
                      ? "Get Started"
                      : "Contact Us"}
                  </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Contact us and we will help you find the perfect solution.
          </p>
          <Link href="/contact">
            <Button variant="glow" size="lg">
              Contact Us <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}