import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-8 lg:gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold text-white inline-block">
              NextGen <span className="gradient-text">Web</span>
            </Link>
            <p className="text-text-secondary mt-4 max-w-md leading-relaxed">
              Lead-ready websites for trades and local service companies that need
              more calls, more quote requests, and a stronger professional image.
            </p>
            <p className="text-text-muted text-sm mt-5">
              Calgary based. Building for local businesses across North America.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-text-secondary hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-text-secondary hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-text-secondary hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Demos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/examples/plumbing" className="text-text-secondary hover:text-white transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/examples/cleaning" className="text-text-secondary hover:text-white transition-colors">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="/examples/roofing" className="text-text-secondary hover:text-white transition-colors">
                  Roofing
                </Link>
              </li>
              <li>
                <Link href="/examples/hvac" className="text-text-secondary hover:text-white transition-colors">
                  HVAC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">Email</span>
                <a href="mailto:karen.penzo.ca@gmail.com" className="hover:text-white transition-colors">
                  karen.penzo.ca@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-text-muted text-xs uppercase tracking-wide mb-1">Location</span>
                Calgary, AB
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} NextGen Web Development.</p>
          <p>Websites for trades, service companies, and local business growth.</p>
        </div>
      </div>
    </footer>
  );
}
