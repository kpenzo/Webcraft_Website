"use client";
import Image from "next/image";
import { Button } from "@/components/ui";
import { portfolioDemos } from "@/lib/portfolioDemos";

export function DemoWebsites() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
            Portfolio examples
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Websites Built for <span className="gradient-text">Local Businesses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Example demo websites for different trades and service companies,
            designed to show how customers experience your business on desktop and mobile.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-3 sm:p-4 lg:p-5 mb-8 lg:mb-10 overflow-hidden">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white shadow-2xl shadow-black/30">
            <Image
              src="/portfolio/trades.png"
              alt="Collage of desktop and mobile website examples for local trades businesses"
              width={1536}
              height={1024}
              sizes="(min-width: 1280px) 1120px, 100vw"
              className="block h-auto w-full"
              priority={false}
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {portfolioDemos.map((demo) => (
            <Button
              key={demo.slug}
              href={`/examples/${demo.slug}`}
              variant="outline"
              className="min-h-14 w-full px-4 py-3 text-sm sm:text-base"
            >
              {demo.trade}
            </Button>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-5">
          Explore a trade to see the larger desktop and mobile presentation.
        </p>
      </div>
    </section>
  );
}
