import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/sections";
import { ResponsivePortfolioImage } from "@/components/ui";
import { portfolioDemos } from "@/lib/portfolioDemos";

export function generateStaticParams() {
  return portfolioDemos.map((demo) => ({
    slug: demo.slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExamplePage({ params }: PageProps) {
  const { slug } = await params;
  const demo = portfolioDemos.find((item) => item.slug === slug);

  if (!demo) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-6 md:pt-32 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-text-secondary hover:text-white transition-colors mb-7"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to portfolio
          </Link>

          <div className="max-w-4xl">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
              {demo.trade} portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Website Examples for {demo.trade} Businesses
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl">
              {demo.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {demo.galleryImages.map((image, index) => (
              <a
                key={image.src}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group block glass-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.32)] sm:shadow-2xl"
                aria-label={`Open ${demo.trade} website example ${index + 1}`}
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <ResponsivePortfolioImage
                    src={image.src}
                    alt={`${demo.trade} website portfolio example ${index + 1}`}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1280px) 1180px, (min-width: 768px) 92vw, 100vw"
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-white font-semibold">
                      {demo.trade} website concept {index + 1}
                    </p>
                    <p className="text-text-muted text-sm">
                      Large desktop and mobile mockup for a local {demo.trade.toLowerCase()} business.
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-text-secondary transition-colors group-hover:border-primary/30 group-hover:text-primary-light">
                    Open preview
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-7">
            <h2 className="text-white text-2xl font-semibold mb-5">
              Why this design works
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Mobile-first layout",
                "Clear quote request path",
                "Trust-building service sections",
                "Fast contact options",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-text-secondary">
                  <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
