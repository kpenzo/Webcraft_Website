import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/sections";
import { ResponsivePortfolioImage } from "@/components/ui";
import { DOMAIN, spanishSlugToEnglish } from "@/lib/i18n";

type SpanishContent = {
  trade: string;
  title: string;
  description: string;
};

type SpanishPortfolioImage = {
  src: string;
  width: number;
  height: number;
  label: string;
  alt: string;
};

const spanishContent: Record<string, SpanishContent> = {
  plumbing: {
    trade: "Fontanería",
    title: "Portfolio de webs para fontanería",
    description: "Ejemplos visuales para fontaneros y empresas de fontanería en España.",
  },
  cleaning: {
    trade: "Limpieza",
    title: "Portfolio de webs para limpieza",
    description: "Ejemplos visuales para empresas de limpieza, oficinas, comunidades y servicios locales.",
  },
  painting: {
    trade: "Pintura",
    title: "Portfolio de webs para pintura",
    description: "Ejemplos visuales para pintores, decoración, comunidades y reformas ligeras.",
  },
  landscaping: {
    trade: "Jardinería",
    title: "Portfolio de webs para jardinería",
    description: "Ejemplos visuales para jardineros, mantenimiento exterior y servicios de jardín.",
  },
  electrical: {
    trade: "Electricistas",
    title: "Portfolio de webs para electricistas",
    description: "Ejemplos visuales para electricistas, instalaciones, reparaciones y servicios urgentes.",
  },
  flooring: {
    trade: "Suelos",
    title: "Portfolio de webs para suelos",
    description: "Ejemplos visuales para instaladores de suelos, revestimientos y pequeñas reformas.",
  },
  hvac: {
    trade: "Climatización",
    title: "Portfolio de webs para climatización",
    description: "Ejemplos visuales para climatización, aire acondicionado, calefacción y mantenimiento.",
  },
  roofing: {
    trade: "Tejados",
    title: "Portfolio de webs para tejados",
    description: "Ejemplos visuales para cubiertas, tejados, impermeabilización y reparación.",
  },
};

const image = (src: string, width: number, height: number, label: string, alt: string): SpanishPortfolioImage => ({
  src,
  width,
  height,
  label,
  alt,
});

const spanishPortfolioImages: Record<string, SpanishPortfolioImage[]> = {
  plumbing: [
    image(
      "/portfolio/fontaneros-espana.webp",
      1312,
      1199,
      "Conceptos para fontaneros en España",
      "Ejemplos de webs para empresas de fontanería en España",
    ),
  ],
  electrical: [
    image(
      "/portfolio/electricistas-espana.webp",
      2256,
      1032,
      "Conceptos para electricistas en España",
      "Ejemplos de webs para electricistas en España",
    ),
  ],
  cleaning: [
    image(
      "/portfolio/limpieza_es.webp",
      512,
      512,
      "Web para empresa de limpieza",
      "Web española para empresa de limpieza",
    ),
  ],
  painting: [
    image(
      "/portfolio/pintura1.webp",
      1024,
      1536,
      "Web completa para pintura y decoración",
      "Web española completa para empresa de pintura y decoración",
    ),
    image(
      "/portfolio/pintura_es.webp",
      512,
      512,
      "Concepto compacto para pintores",
      "Web española para pintores profesionales",
    ),
  ],
  landscaping: [
    image(
      "/portfolio/jardineria_es.webp",
      512,
      512,
      "Web para jardinería y mantenimiento",
      "Web española para empresa de jardinería",
    ),
  ],
  flooring: [
    image(
      "/portfolio/suelos_es.webp",
      512,
      512,
      "Web para suelos y revestimientos",
      "Web española para empresa de suelos y revestimientos",
    ),
  ],
  hvac: [
    image(
      "/portfolio/climatizacion_es.webp",
      512,
      512,
      "Web para climatización y confort",
      "Web española para empresa de climatización",
    ),
  ],
  roofing: [
    image(
      "/portfolio/tejados_es.webp",
      512,
      512,
      "Web para cubiertas y tejados",
      "Web española para empresa de tejados y cubiertas",
    ),
  ],
};

export function generateStaticParams() {
  return Object.keys(spanishSlugToEnglish).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const englishSlug = spanishSlugToEnglish[slug];
  const content = englishSlug ? spanishContent[englishSlug] : undefined;

  if (!englishSlug || !content) {
    return {};
  }

  return {
    title: content.title + " | NextGen Web Development",
    description: content.description,
    alternates: {
      canonical: DOMAIN + "/es/examples/" + slug,
      languages: {
        en: DOMAIN + "/examples/" + englishSlug,
        es: DOMAIN + "/es/examples/" + slug,
        "x-default": DOMAIN + "/examples/" + englishSlug,
      },
    },
  };
}

export default async function SpanishExamplePage({ params }: PageProps) {
  const { slug } = await params;
  const englishSlug = spanishSlugToEnglish[slug];
  const content = englishSlug ? spanishContent[englishSlug] : undefined;
  const images = englishSlug ? spanishPortfolioImages[englishSlug] : undefined;

  if (!content || !englishSlug || !images?.length) notFound();

  return (
    <>
      <section className="pt-24 pb-6 md:pt-32 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/es" prefetch={false} className="inline-flex items-center text-text-secondary hover:text-white transition-colors mb-7">
            <ArrowLeft size={18} className="mr-2" />
            Volver al portfolio
          </Link>
          <div className="max-w-4xl">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">Portfolio de {content.trade}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{content.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-5 lg:px-8">
          <div className="space-y-6 md:space-y-10">
            {images.map((portfolioImage, index) => (
              <a
                key={portfolioImage.src}
                href={portfolioImage.src}
                target="_blank"
                rel="noreferrer"
                className="group block glass-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 shadow-lg shadow-black/15 transition-all duration-300 hover:border-primary/35 sm:shadow-2xl"
                aria-label={"Abrir imagen " + (index + 1) + " del portfolio de " + content.trade}
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <ResponsivePortfolioImage
                    src={portfolioImage.src}
                    alt={portfolioImage.alt}
                    width={portfolioImage.width}
                    height={portfolioImage.height}
                    sizes="(min-width: 1400px) 1380px, (min-width: 768px) 94vw, 100vw"
                    eager={index === 0}
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-white font-semibold">{portfolioImage.label}</p>
                  <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-text-secondary transition-colors group-hover:border-primary/30 group-hover:text-primary-light">
                    Abrir imagen completa
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm locale="es" />
    </>
  );
}
