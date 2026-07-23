"use client";
import { Check } from "lucide-react";
import { ResponsivePortfolioImage } from "@/components/ui";

const beforeItems = [
  "Hard to read on mobile",
  "Unclear services and service areas",
  "Weak trust signals",
  "No clear quote request path",
];

const afterItems = [
  "Clean mobile-first layout",
  "Clear services, locations, and proof",
  "Reviews, trust cues, and project context",
  "Quote-focused calls-to-action",
];

export function BeforeAfter() {
  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            From Outdated to <span className="gradient-text">Trustworthy</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A better website should make your business easier to trust, easier to
            compare, and easier to contact from any device.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_auto_1.28fr] gap-6 items-stretch">
          <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <p className="text-text-muted text-sm font-semibold uppercase tracking-wide mb-2">
                Before
              </p>
              <h3 className="text-white font-semibold text-2xl">Hard to trust quickly</h3>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 mb-5 md:mb-6">
              <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="h-3 w-32 bg-white/15 rounded-full mb-4" />
                <div className="grid grid-cols-[1fr_0.6fr] gap-3 mb-4">
                  <div className="h-24 bg-white/10 rounded-lg" />
                  <div className="space-y-2">
                    <div className="h-5 bg-white/10 rounded" />
                    <div className="h-5 bg-white/10 rounded" />
                    <div className="h-5 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/15 rounded-full" />
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="text-text-secondary text-sm flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-text-muted flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center text-text-muted text-3xl px-2">→</div>

          <div className="glass-card relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 border-primary/40 shadow-lg shadow-primary/10 sm:shadow-[0_0_48px_rgba(104,86,227,0.16)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-pink/5 pointer-events-none" />

            <div className="relative z-10 mb-4 md:mb-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <p className="text-primary-light text-sm font-semibold uppercase tracking-wide">
                  After
                </p>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
                  Modern mobile-first presence
                </span>
              </div>
              <h3 className="text-white font-semibold text-2xl md:text-3xl">
                Ready for quote requests
              </h3>
            </div>

            <div className="relative z-10 rounded-2xl border border-primary/25 bg-primary/5 p-2 sm:p-3 mb-5 md:mb-6">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg shadow-black/20 sm:shadow-2xl sm:shadow-black/30">
                <ResponsivePortfolioImage
                  src="/portfolio/plumbing.webp"
                  alt="Modern professional plumbing website shown on desktop and mobile"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 720px, (min-width: 768px) 92vw, 100vw"
                  className="block w-full h-auto scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent p-3 sm:p-4">
                  <div className="inline-flex rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-white sm:backdrop-blur">
                    Desktop + mobile quote flow
                  </div>
                </div>
              </div>
            </div>

            <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {afterItems.map((item) => (
                <li key={item} className="text-text-secondary text-sm flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
