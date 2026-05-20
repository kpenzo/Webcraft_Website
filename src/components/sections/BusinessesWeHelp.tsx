"use client";
import Link from "next/link";

const businesses = [
  { name: "Plumbing", icon: "🔧", href: "/examples/plumbing" },
  { name: "Cleaning", icon: "🧹", href: "/examples/cleaning" },
  { name: "Painting", icon: "🎨", href: "/examples/painting" },
  { name: "Landscaping", icon: "🌿", href: "/examples/landscaping" },
  { name: "Electrical", icon: "⚡", href: "/examples/electrical" },
  { name: "Flooring", icon: "▦", href: "/examples/flooring" },
  { name: "HVAC", icon: "❄️", href: "/examples/hvac" },
  { name: "Roofing", icon: "⌂", href: "/examples/roofing" },
];

export function BusinessesWeHelp() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Made for <span className="gradient-text">Local Trades</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We design around how real local customers search, compare, and contact
            service businesses. Choose a trade to view a dedicated demo.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {businesses.map((biz) => (
            <Link
              key={biz.name}
              href={biz.href}
              className="glass-card rounded-xl p-4 text-center hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="text-3xl mb-2">{biz.icon}</div>
              <div className="text-white font-medium text-sm">{biz.name}</div>
              <div className="text-text-muted text-xs mt-2 group-hover:text-text-secondary transition-colors">
                View demo
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
