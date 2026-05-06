"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
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

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get your professional website in just 4 simple steps. No tech skills needed.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <GlassCard>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </GlassCard>
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Let&apos;s build your professional website today.
          </p>
          <Link href="/contact">
            <Button variant="glow" size="lg">
              Get Started <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}