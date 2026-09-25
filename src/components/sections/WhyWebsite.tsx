"use client";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/lib/homeContent";

export function WhyWebsite({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale].why;

  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {content.title} <span className="gradient-text">{content.highlight}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((benefit) => (
            <div key={benefit.title} className="glass-card rounded-2xl p-5 sm:p-6 hover:bg-white/[0.06] transition-all duration-300">
              <div className="text-3xl mb-3 md:mb-4">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
