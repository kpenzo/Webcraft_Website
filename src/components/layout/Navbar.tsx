"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { alternatePath, navContent, type Locale } from "@/lib/i18n";

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function LanguageSelector({ locale, onClick }: { locale: Locale; onClick?: () => void }) {
  const pathname = usePathname() || "/";
  const enHref = alternatePath(pathname, "en");
  const esHref = alternatePath(pathname, "es");

  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-text-muted">
      <Link href={enHref} prefetch={false} onClick={onClick} className={cn("transition-colors hover:text-white", locale === "en" ? "text-white" : undefined)}>
        EN
      </Link>
      <span className="text-white/20">|</span>
      <Link href={esHref} prefetch={false} onClick={onClick} className={cn("transition-colors hover:text-white", locale === "es" ? "text-white" : undefined)}>
        ES
      </Link>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const content = navContent[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent")}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={locale === "es" ? "/es" : "/"} prefetch={false} className="text-2xl font-bold text-white">
            NextGen <span className="gradient-text">Web</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {content.links.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false} className="text-text-secondary hover:text-white font-medium transition-colors">
                {link.label}
              </Link>
            ))}
            <LanguageSelector locale={locale} />
            <Link href={locale === "es" ? "/es/contact" : "/contact"} prefetch={false} className="bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(104,86,227,0.4)] transition-all">
              {content.cta}
            </Link>
          </div>
          <button type="button" className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label={locale === "es" ? "Abrir navegación" : "Open navigation"}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={cn("md:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-80" : "max-h-0")}>
          <div className="py-4 space-y-4">
            {content.links.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false} className="block text-text-secondary hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <LanguageSelector locale={locale} onClick={() => setIsOpen(false)} />
            <Link href={locale === "es" ? "/es/contact" : "/contact"} prefetch={false} className="block bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-xl font-medium text-center" onClick={() => setIsOpen(false)}>
              {content.cta}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
