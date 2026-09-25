import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/sections";
import { ResponsivePortfolioImage } from "@/components/ui";
import { portfolioDemos } from "@/lib/portfolioDemos";
import { DOMAIN, englishSlugToSpanish, spanishSlugToEnglish } from "@/lib/i18n";

const spanishContent: Record<string, { trade: string; title: string; description: string }> = {
  plumbing: {
    trade: "Fontanería",
    title: "Ejemplos de webs para empresas de fontanería",
    description: "Web moderna para fontaneros, enfocada en llamadas urgentes, confianza y contacto rápido desde móvil.",
  },
  cleaning: {
    trade: "Limpieza",
    title: "Ejemplos de webs para empresas de limpieza",
    description: "Web limpia y profesional para que empresas de limpieza transmitan confianza y reciban solicitudes claras.",
  },
  painting: {
    trade: "Pintura",
    title: "Ejemplos de webs para pintores profesionales",
    description: "Web enfocada a mostrar calidad, trabajos realizados y solicitudes de presupuesto para pintura interior y exterior.",
  },
  landscaping: {
    trade: "Jardinería",
    title: "Ejemplos de webs para jardinería y paisajismo",
    description: "Web visual y cuidada para presentar servicios de jardín, exteriores y mantenimiento con una imagen más premium.",
  },
  electrical: {
    trade: "Electricistas",
    title: "Ejemplos de webs para electricistas",
    description: "Web profesional para servicios eléctricos, pensada para generar confianza y facilitar el contacto rápido.",
  },
  flooring: {
    trade: "Suelos",
    title: "Ejemplos de webs para suelos y reformas",
    description: "Web moderna para destacar acabados, trabajos de calidad y solicitudes de presupuesto de mayor valor.",
  },
  hvac: {
    trade: "Climatización",
    title: "Ejemplos de webs para climatización",
    description: "Web responsive para servicios de climatización, mantenimiento e instalaciones con enfoque local.",
  },
  roofing: {
    trade: "Tejados",
    title: "Ejemplos de webs para tejados y cubiertas",
    description: "Web para mejorar credibilidad, conversión móvil y confianza de propietarios que necesitan reparación o instalación.",
  },
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
  const demo = portfolioDemos.find((item) => item.slug === englishSlug);
  const content = englishSlug ? spanishContent[englishSlug] : undefined;

  if (!demo || !content) notFound();

  return (
    <>
      <section className="pt-24 pb-6 md:pt-32 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/es" prefetch={false} className="inline-flex items-center text-text-secondary hover:text-white transition-colors mb-7">
            <ArrowLeft size={18} className="mr-2" />
            Volver al portfolio
          </Link>
          <div className="max-w-4xl">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">Portfolio de {content.trade}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{content.title}</h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl">{content.description}</p>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {demo.galleryImages.map((image, index) => (
              <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className="group block glass-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.32)] sm:shadow-2xl" aria-label={"Abrir ejemplo " + (index + 1) + " de " + content.trade}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <ResponsivePortfolioImage
                    src={image.src}
                    alt={"Ejemplo de web para " + content.trade + " " + (index + 1)}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1280px) 1180px, (min-width: 768px) 92vw, 100vw"
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-white font-semibold">Concepto de web para {content.trade} {index + 1}</p>
                    <p className="text-text-muted text-sm">Mockup grande de escritorio y móvil para un negocio local de {content.trade.toLowerCase()}.</p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-text-secondary transition-colors group-hover:border-primary/30 group-hover:text-primary-light">
                    Abrir vista previa
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
            <h2 className="text-white text-2xl font-semibold mb-5">Por qué funciona este diseño</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Diseño pensado para móvil", "Camino claro para pedir presupuesto", "Secciones que generan confianza", "Opciones rápidas de contacto"].map((item) => (
                <li key={item} className="flex gap-3 text-text-secondary">
                  <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactForm locale="es" />
    </>
  );
}
