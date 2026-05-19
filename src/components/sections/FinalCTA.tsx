"use client";
import { Button } from "@/components/ui";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready for a Website That <span className="gradient-text">Helps Customers Contact You?</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
          Get a clear plan, simple pricing, and a website built for local service
          businesses that need more calls and quote requests.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="glow" size="lg" className="w-full sm:w-auto">
              Get a Fixed-Price Quote
            </Button>
          </Link>
          <Link href="/packages">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Compare Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
