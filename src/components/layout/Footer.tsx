"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerContent, navContent, type Locale } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const content = footerContent[locale];
  const nav = navContent[locale];

  return (
    <footer className="bg-surface border-t border-border py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-8 lg:gap-10">
          <div>
            <Link href={locale === "es" ? "/es" : "/"} className="text-2xl font-bold text-white inline-block">
              NextGen <span className="gradient-text">Web</span>
            </Link>
            <p className="text-text-secondary mt-4 max-w-md leading-relaxed">{content.description}</p>
            <p className="text-text-muted text-sm mt-5">{content.locationLine}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{content.explore}</h4>
            <ul className="space-y-3 text-sm">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{content.demos}</h4>
            <ul className="space-y-3 text-sm">
              {content.demoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{content.contact}</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">{content.email}</span>
                <a href="mailto:karen.penzo.ca@gmail.com" className="hover:text-white transition-colors">karen.penzo.ca@gmail.com</a>
              </li>
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">{content.location}</span>
                {content.locationValue}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} NextGen Web Development.</p>
          <p>{content.bottom}</p>
        </div>
      </div>
    </footer>
  );
}
