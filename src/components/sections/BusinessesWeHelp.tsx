"use client";

const businesses = [
  { name: "Plumbers", icon: "🔧" },
  { name: "Electricians", icon: "⚡" },
  { name: "HVAC Techs", icon: "❄️" },
  { name: "Roofers", icon: "🏠" },
  { name: "Painters", icon: "🎨" },
  { name: "Cleaners", icon: "🧹" },
  { name: "Flooring", icon: "▦" },
  { name: "Landscaping", icon: "🌿" },
  { name: "Remodelers", icon: "⌂" },
  { name: "Handyman", icon: "✦" },
  { name: "Pest Control", icon: "◆" },
  { name: "Garage Doors", icon: "▣" },
  { name: "And More", icon: "+" },
];

export function BusinessesWeHelp() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Made for <span className="gradient-text">Local Trades</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We design around how real local customers search, compare, and contact service businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {businesses.map((biz) => (
            <div
              key={biz.name}
              className="glass-card rounded-xl p-4 text-center hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-2">{biz.icon}</div>
              <div className="text-white font-medium text-sm">{biz.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
