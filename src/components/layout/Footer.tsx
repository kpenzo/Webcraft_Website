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
            <Link href={locale === "es" ? "/es" : "/"} prefetch={false} className="text-2xl font-bold text-white inline-block">
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
                  <Link href={link.href} prefetch={false} className="text-text-secondary hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{content.demos}</h4>
            <ul className="space-y-3 text-sm">
              {content.demoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch={false} className="text-text-secondary hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{content.contact}</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">{content.email}</span>
                {locale === "es" ? (
                  <a href="mailto:info@nextgenwebdevelopment.com" className="hover:text-white transition-colors">info@nextgenwebdevelopment.com</a>
                ) : (
                  <a href="mailto:karen.penzo.ca@gmail.com" className="hover:text-white transition-colors">karen.penzo.ca@gmail.com</a>
                )}
              </li>
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">{content.location}</span>
                {content.locationValue}
              </li>
              {locale === "es" && (
                <li className="pt-2 text-text-muted leading-relaxed">
                  <span className="block text-white font-medium">NextGen Web Development</span>
                  <span className="block">Titular: KP Studio</span>
                  <span className="block">Loreto 34, 08029 Barcelona</span>
                  <span className="block">Área de servicio: España</span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col gap-4 text-text-muted text-sm">
          {locale === "es" && (
            <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/es/aviso-legal" prefetch={false} className="hover:text-white transition-colors">Aviso legal</Link>
              <Link href="/es/politica-privacidad" prefetch={false} className="hover:text-white transition-colors">Política de privacidad</Link>
              <Link href="/es/politica-cookies" prefetch={false} className="hover:text-white transition-colors">Política de cookies</Link>
            </nav>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} NextGen Web Development.</p>
            <p>{content.bottom}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
