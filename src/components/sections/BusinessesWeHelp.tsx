"use client";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/lib/homeContent";

export function BusinessesWeHelp({ locale = "en" }: { locale?: Locale }) {
  const content = homeContent[locale].trades;

  return (
    <section className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {content.title} <span className="gradient-text">{content.highlight}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {content.items.map((biz) => (
            <Link key={biz.name} href={biz.href} className="glass-card rounded-xl p-4 sm:p-5 text-center hover:bg-white/[0.06] transition-all duration-300 group">
              <div className="text-3xl mb-2">{biz.icon}</div>
              <div className="text-white font-medium text-sm">{biz.name}</div>
              <div className="text-text-muted text-xs mt-2 group-hover:text-text-secondary transition-colors">
                {content.viewDemo}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
