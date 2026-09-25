"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/lib/homeContent";

export function LocalVisibility({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale].visibility;
  const contactHref = locale === "es" ? "/es/contact" : "/contact";

  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-center">
            <div>
              <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">{content.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
                {content.title} <span className="gradient-text">{content.highlight}</span>
              </h2>
              <p className="text-text-secondary text-lg mb-6 md:mb-8">{content.subtitle}</p>
              <Button href={contactHref} variant="glow" size="lg" className="w-full sm:w-auto">{content.cta}</Button>
            </div>
            <ul className="space-y-4">
              {content.items.map((item) => (
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
