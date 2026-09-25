"use client";
import { Button } from "@/components/ui";
import { Check } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/lib/homeContent";

export function Packages({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale].packages;
  const contactHref = locale === "es" ? "/es/contact" : "/contact";

  return (
    <section id="packages" className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {content.title} <span className="gradient-text">{content.highlight}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.items.map((pkg) => (
            <div
              key={pkg.name}
              className={[
                "glass-card rounded-2xl p-6 lg:p-8 transition-all duration-300",
                pkg.featured ? "border-primary/50 shadow-[0_0_40px_rgba(104,86,227,0.15)]" : "",
              ].join(" ")}
            >
              {pkg.featured && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {pkg.badge}
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
              <Button href={contactHref} variant={pkg.featured ? "glow" : "outline"} fullWidth>
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-sm mt-8 max-w-3xl mx-auto">{content.note}</p>
      </div>
    </section>
  );
}
