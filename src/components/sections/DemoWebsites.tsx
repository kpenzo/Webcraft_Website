"use client";
import { Button, ResponsivePortfolioImage } from "@/components/ui";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/lib/homeContent";

export function DemoWebsites({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale].demos;
  const contactHref = locale === "es" ? "/es/contact" : "/contact";

  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {content.title} <span className="gradient-text">{content.highlight}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="glass-card rounded-2xl p-3 sm:p-4 lg:p-5 mb-5 lg:mb-8 overflow-hidden">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white shadow-lg shadow-black/20 sm:shadow-2xl sm:shadow-black/30">
            <ResponsivePortfolioImage
              src="/portfolio/trades.webp"
              alt={content.alt}
              width={1200}
              height={800}
              sizes="(min-width: 1280px) 1120px, (min-width: 768px) 92vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2 sm:px-3 pt-4">
            <div>
              <p className="text-white font-semibold">{content.previewTitle}</p>
              <p className="text-text-secondary text-sm">{content.previewText}</p>
            </div>
            <Button href={contactHref} variant="glow" className="w-full md:w-auto">
              {content.cta}
            </Button>
          </div>
        </div>
        <p className="text-center text-text-muted text-sm mt-5">{content.note}</p>
      </div>
    </section>
  );
}
