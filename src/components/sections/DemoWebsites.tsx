"use client";
import Image from "next/image";
import { Button } from "@/components/ui";

const demos = [
  {
    type: "Plumbing Company",
    result: "Emergency calls and quote requests",
    description: "Urgent service messaging, trust badges, and clear contact options for homeowners who need help fast.",
  },
  {
    type: "Cleaning Company",
    result: "Cleaner booking flow",
    description: "A bright, welcoming layout that explains services quickly and makes booking feel low-stress.",
  },
  {
    type: "Painting Company",
    result: "Stronger project trust",
    description: "Bold visuals, quality cues, and project-focused copy that helps customers feel confident before reaching out.",
  },
  {
    type: "Landscaping Company",
    result: "Seasonal service demand",
    description: "Outdoor transformation visuals paired with local service pages and easy quote calls-to-action.",
  },
  {
    type: "Flooring & Remodeling",
    result: "Premium estimate requests",
    description: "Warm, high-value presentation for craftsmanship, project proof, and homeowner confidence.",
  },
];

export function DemoWebsites() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Example Websites for <span className="gradient-text">Local Trades</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Demo concepts inspired by real contractor website patterns: strong first
            impressions, mobile layouts, trust signals, and clear quote paths.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-3 sm:p-4 lg:p-5 mb-8 lg:mb-10 overflow-hidden">
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
            <Image
              src="/demo-trades-showcase.png"
              alt="Demo website concepts for plumbing, cleaning, painting, landscaping, and flooring trade businesses"
              width={1536}
              height={1024}
              sizes="(min-width: 1280px) 1120px, 100vw"
              priority={false}
              className="w-full h-auto block"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2 sm:px-3 pt-4">
            <div>
              <p className="text-white font-semibold">Trade-specific demo concepts</p>
              <p className="text-text-secondary text-sm">
                Each example pairs a desktop and mobile experience so business owners can
                see how customers will compare and contact them on any device.
              </p>
            </div>
            <Button href="/contact" variant="glow" className="w-full md:w-auto">
              Request a Similar Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {demos.map((demo) => (
            <div key={demo.type} className="glass-card rounded-2xl p-5 flex flex-col">
              <p className="text-primary-light text-xs font-semibold uppercase tracking-wide mb-2">
                {demo.type}
              </p>
              <h3 className="text-white font-semibold text-lg mb-2">{demo.result}</h3>
              <p className="text-text-secondary text-sm mb-5 flex-1">{demo.description}</p>
              <Button href="/contact" variant="outline" fullWidth>
                View Example
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
