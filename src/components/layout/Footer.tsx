import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              NextGen <span className="gradient-text">Web</span>
            </Link>
            <p className="text-text-secondary mt-4 max-w-md">
              Professional websites for tradespeople and small businesses. 
              Get online in just 3 days - no tech skills needed.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
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
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>Email: karen.penzo.us@gmail.com</li>
              <li>Phone: 403 888 2052</li>
              <li>Calgary, AB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} NextGen Web Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}