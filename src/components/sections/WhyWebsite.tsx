"use client";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "More Quote Requests",
    description: "Make it easy for homeowners to understand your services, trust your business, and request a quote.",
    icon: "☎️",
  },
  {
    title: "Trust-Building Design",
    description: "A polished website helps you look established without feeling overpriced or corporate.",
    icon: "✓",
  },
  {
    title: "Built for Phone Users",
    description: "Most local customers compare businesses on mobile. Your site should be fast, clear, and easy to contact from a phone.",
    icon: "📱",
  },
  {
    title: "Local SEO Foundations",
    description: "Service pages, city targeting, and local trust signals help customers find the right nearby option.",
    icon: "📍",
  },
  {
    title: "Clear Calls-to-Action",
    description: "Simple contact paths and quote-focused copy make it obvious what visitors should do next.",
    icon: "⚡",
  },
  {
    title: "Fast Loading",
    description: "Fast pages keep mobile visitors engaged and make your business feel easier to work with.",
    icon: "🎯",
  },
];

export function WhyWebsite() {
  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Why These Websites <span className="gradient-text">Convert Better</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Your website should do more than look nice. It should help people choose you,
            trust you, and contact you when they need the job done.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card rounded-2xl p-5 sm:p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="text-3xl mb-3 md:mb-4">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
