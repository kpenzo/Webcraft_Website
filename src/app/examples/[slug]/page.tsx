import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { ContactForm } from "@/components/sections";
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
      <section className="pt-24 pb-8 md:pt-32 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-text-secondary hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
                {demo.trade} website example
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                {demo.title}
              </h1>
              <p className="text-text-secondary text-lg">
                {demo.description}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-3 sm:p-4 overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-2xl shadow-black/25">
                <Image
                  src={demo.image}
                  alt={`${demo.title} desktop and mobile mockup`}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="block h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 lg:gap-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Built around how customers decide
              </h2>
              <p className="text-text-secondary mb-6">
                This demo pairs a strong desktop first impression with a mobile layout
                built for fast scanning, trust, and quote requests. The goal is to make
                the business feel credible before the customer ever reaches out.
              </p>
              <ul className="space-y-4">
                {demo.focus.map((item) => (
                  <li key={item} className="flex gap-3 text-text-secondary">
                    <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-white text-2xl font-semibold mb-4">
                What this shows
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Clear service positioning helps visitors understand what the company
                  does and why they should trust it.
                </p>
                <p>
                  The mobile view keeps the quote action close, readable, and easy to use
                  for customers comparing providers from their phone.
                </p>
                <p>
                  Local cues, service sections, and visible proof make the design feel
                  more established and commercially useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-7 md:mb-10">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">
              Portfolio preview
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Website Examples for {demo.trade} Businesses
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Three polished example layouts showing how a local {demo.trade.toLowerCase()}
              {" "}business can present services, build trust, and make quote requests easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {demo.galleryImages.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer"
                className="group glass-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                aria-label={`Open ${demo.trade} website example ${index + 1}`}
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <Image
                    src={image}
                    alt={`${demo.trade} website portfolio example ${index + 1}`}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 100vw"
                    className="block aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-4">
                  <div>
                    <p className="text-white font-semibold">
                      {demo.trade} concept {index + 1}
                    </p>
                    <p className="text-text-muted text-sm">
                      Click to preview
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-text-secondary transition-colors group-hover:border-primary/30 group-hover:text-primary-light">
                    View
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
