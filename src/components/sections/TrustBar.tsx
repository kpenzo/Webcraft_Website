"use client";

const trustItems = [
  "Built for Local Businesses",
  "Mobile Optimized",
  "Fast Turnaround",
  "SEO Foundations Included",
  "Calgary Based",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-xs sm:text-sm font-medium text-text-secondary">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
