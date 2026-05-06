"use client";
import { Button } from "@/components/ui";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-secondary text-sm font-medium mb-6">
            Professional Websites in 3 Days
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Get a professional<br />
            <span className="gradient-text">website in 3 days</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Affordable websites for trades and small businesses. Mobile-friendly, fast, 
            and built to help customers contact you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="glow" size="lg">
                Get My Website
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}