"use client";
import { Button } from "@/components/ui";

const demos = [
  {
    type: "Plumbing Company",
    title: "Emergency plumbing site",
    description: "Clear service areas, urgent repair messaging, and a quote form built for mobile visitors.",
    accent: "from-blue-500/40 to-primary/20",
  },
  {
    type: "Cleaning Company",
    title: "Residential cleaning site",
    description: "Simple package explanations, trust cues, and quick booking prompts for busy homeowners.",
    accent: "from-emerald-400/35 to-primary/20",
  },
  {
    type: "Painting Company",
    title: "Interior painting site",
    description: "Before/after proof, room-specific services, and a quote path that feels easy to start.",
    accent: "from-accent-pink/35 to-primary/20",
  },
  {
    type: "Landscaping Company",
    title: "Seasonal services site",
    description: "Service-area pages, project visuals, and clear calls for lawn care, cleanup, and installs.",
    accent: "from-green-500/35 to-primary/20",
  },
  {
    type: "Flooring & Remodeling",
    title: "Project-focused site",
    description: "Trust-building project sections, service pages, and stronger first impressions for estimates.",
    accent: "from-amber-400/35 to-primary/20",
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
            Demo concepts for the kind of clear, conversion-focused pages local
            customers expect when comparing service businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {demos.map((demo) => (
            <div key={demo.type} className="glass-card rounded-2xl p-5 flex flex-col">
              <div className={`rounded-xl bg-gradient-to-br ${demo.accent} border border-white/10 p-3 mb-5`}>
                <div className="rounded-lg bg-background/70 border border-white/10 p-3">
                  <div className="h-2 w-20 rounded-full bg-white/30 mb-3" />
                  <div className="h-16 rounded-lg bg-white/10 mb-3" />
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2/3 rounded-full bg-white/15" />
                  </div>
                </div>
              </div>
              <p className="text-primary-light text-xs font-semibold uppercase tracking-wide mb-2">
                {demo.type}
              </p>
              <h3 className="text-white font-semibold text-lg mb-2">{demo.title}</h3>
              <p className="text-text-secondary text-sm mb-5 flex-1">{demo.description}</p>
              <Button href="/contact" variant="outline" fullWidth>
                See Demo
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
