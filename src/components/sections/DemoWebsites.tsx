"use client";
import { Button, ResponsivePortfolioImage } from "@/components/ui";

export function DemoWebsites() {
  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
            Portfolio examples
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Websites Built for <span className="gradient-text">Local Businesses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Example demo websites for different trades and service companies,
            designed to show how customers experience your business on desktop and mobile.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-3 sm:p-4 lg:p-5 mb-5 lg:mb-8 overflow-hidden">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white shadow-lg shadow-black/20 sm:shadow-2xl sm:shadow-black/30">
            <ResponsivePortfolioImage
              src="/portfolio/trades.webp"
              alt="Collage of desktop and mobile website examples for local trades businesses"
              width={1200}
              height={800}
              sizes="(min-width: 1280px) 1120px, (min-width: 768px) 92vw, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2 sm:px-3 pt-4">
            <div>
              <p className="text-white font-semibold">Portfolio preview</p>
              <p className="text-text-secondary text-sm">
                A cleaner overview of trade-specific demo directions, with dedicated
                pages for each business type below.
              </p>
            </div>
            <Button href="/contact" variant="glow" className="w-full md:w-auto">
              Request a Similar Demo
            </Button>
          </div>
        </div>

        <p className="text-center text-text-muted text-sm mt-5">
          Explore trade-specific examples in the local trades section below.
        </p>
      </div>
    </section>
  );
}
