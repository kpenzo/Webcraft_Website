"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent")}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            NextGen <span className="gradient-text">Web</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-text-secondary hover:text-white font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(104,86,227,0.4)] transition-all"
            >
              Get a Quote
            </Link>
          </div>
          <button 
            type="button" 
            className="md:hidden p-2 text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={cn("md:hidden transition-all duration-300 overflow-hidden", isOpen ? "max-h-64" : "max-h-0")}>
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block text-text-secondary hover:text-white font-medium py-2" 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="block bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-xl font-medium text-center" 
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
