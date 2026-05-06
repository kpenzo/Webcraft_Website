"use client";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Get More Customers",
    description: "A professional website helps you reach more customers searching for your services online.",
    icon: "🌐",
  },
  {
    title: "Looks Professional",
    description: "Build trust with potential customers using a polished, expert website.",
    icon: "✨",
  },
  {
    title: "Works on Mobile",
    description: "95% of customers search on phones. We make sure your site looks great everywhere.",
    icon: "📱",
  },
  {
    title: "Easy to Update",
    description: "Simple dashboard to update your content. No coding needed.",
    icon: "🔄",
  },
  {
    title: "Fast Loading",
    description: "Lightning-fast sites that keep visitors engaged and convert to customers.",
    icon: "⚡",
  },
  {
    title: "SEO Ready",
    description: "Built for search engines so customers can find your business.",
    icon: "🎯",
  },
];

export function WhyWebsite() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why You Need a <span className="gradient-text">Website</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            In today&apos;s digital world, your website is your best salesperson - working 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}