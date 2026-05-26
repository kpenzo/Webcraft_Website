"use client";
import { Button } from "@/components/ui";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-36">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-secondary text-sm font-medium mb-6">
            Websites for contractors, trades, and local services
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Websites Built to Help Local Businesses
            <span className="gradient-text"> Get More Calls</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-7 md:mb-8">
            Fast, professional websites for trades and service businesses that need
            more quote requests, stronger local trust, and a polished mobile experience
            for customers ready to call.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                Get My Website Plan
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See Pricing & Timeline
              </Button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-text-muted">
            Clear pricing. Fast turnaround. No tech stress.
          </p>
        </div>
      </div>
    </section>
  );
}
