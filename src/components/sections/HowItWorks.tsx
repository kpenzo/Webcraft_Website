"use client";
import { GlassCard } from "@/components/ui";

const steps = [
  {
    step: 1,
    title: "Choose Your Package",
    description: "Select a package that fits your needs. We offer Basic, Standard, or Custom options.",
  },
  {
    step: 2,
    title: "Share Your Info",
    description: "Tell us about your business, services, and what pages you need.",
  },
  {
    step: 3,
    title: "We Build Your Site",
    description: "Our team creates your professional website in just 3 days.",
  },
  {
    step: 4,
    title: "Launch & Grow",
    description: "Review, make changes, and launch. We'll help you get found online.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-accent-pink/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get your professional website in just 4 simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
              {item.step < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-text-muted">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}