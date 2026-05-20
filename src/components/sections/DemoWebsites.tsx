"use client";
import Image from "next/image";
import { Button } from "@/components/ui";

const demos = [
  {
    trade: "Plumbing",
    title: "Plumbing Company Demo",
    image: "/portfolio/plumbing.png",
    description:
      "Modern plumbing website focused on emergency calls, trust, and fast mobile contact.",
    cta: "View Example",
  },
  {
    trade: "Cleaning",
    title: "Cleaning Company Demo",
    image: "/portfolio/cleaning.png",
    description:
      "Clean, modern website designed to help cleaning businesses look more professional and trustworthy.",
    cta: "Explore Design",
  },
  {
    trade: "Painting",
    title: "Painting Company Demo",
    image: "/portfolio/painting.png",
    description:
      "Lead-focused painting company website designed to showcase quality work and generate quote requests.",
    cta: "See Demo",
  },
  {
    trade: "Landscaping",
    title: "Landscaping Company Demo",
    image: "/portfolio/landscaping.png",
    description:
      "Premium landscaping website focused on visual presentation and local credibility.",
    cta: "View Example",
  },
  {
    trade: "Electrical",
    title: "Electrical Company Demo",
    image: "/portfolio/electrical.png",
    description:
      "Professional electrical services website optimized for trust and quick customer contact.",
    cta: "Explore Design",
  },
  {
    trade: "Flooring",
    title: "Flooring Company Demo",
    image: "/portfolio/flooring.png",
    description:
      "Modern flooring website designed to highlight craftsmanship and premium results.",
    cta: "See Demo",
  },
  {
    trade: "HVAC",
    title: "HVAC Company Demo",
    image: "/portfolio/hvac.png",
    description:
      "Responsive HVAC website focused on service calls, maintenance plans, and local visibility.",
    cta: "View Example",
  },
  {
    trade: "Roofing",
    title: "Roofing Company Demo",
    image: "/portfolio/roofing.png",
    description:
      "Roofing website built to improve credibility, mobile conversion, and homeowner trust.",
    cta: "Explore Design",
  },
];

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
            Websites Built for <span className="gradient-text">Trades Businesses</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Realistic demo concepts mapped to the way local customers search,
            compare, and contact service businesses on desktop and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {demos.map((demo) => (
            <article
              key={demo.trade}
              className="glass-card group rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white mb-5 shadow-2xl shadow-black/20">
                <Image
                  src={demo.image}
                  alt={`${demo.title} desktop and mobile website mockup`}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 flex-1">
                <div>
                  <p className="text-primary-light text-xs font-semibold uppercase tracking-wide mb-2">
                    {demo.trade}
                  </p>
                  <h3 className="text-white font-semibold text-xl mb-2">{demo.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                    {demo.description}
                  </p>
                </div>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto flex-shrink-0">
                  {demo.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 lg:mt-10 glass-card rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-white font-semibold text-2xl mb-3">
            Want a demo direction for your trade?
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto mb-6">
            Send your business type, service area, and goals. We will recommend a
            practical website structure built around calls, quote requests, and local trust.
          </p>
          <Button href="/contact" variant="glow" size="lg" className="w-full sm:w-auto">
            Request a Similar Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
