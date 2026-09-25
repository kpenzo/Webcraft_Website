import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { DOMAIN } from "@/lib/i18n";

const packages = [
  {
    name: "Starter",
    price: "78 €",
    tagline: "Para autónomos y negocios que quieren empezar con una web clara",
    pages: 3,
    features: [
      { name: "Hasta 3 páginas principales", included: true },
      { name: "Diseño pensado para móvil", included: true },
      { name: "Formulario de presupuesto", included: true },
      { name: "Entrega rápida", included: true },
      { name: "Textos de servicios y confianza", included: true },
      { name: "Base SEO local", included: true },
      { name: "Mapa o ubicación de Google", included: false },
      { name: "Páginas por ciudad o zona", included: false },
      { name: "Galería de trabajos", included: false },
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "148 €",
    tagline: "El más elegido para captar solicitudes de presupuesto",
    pages: 5,
    features: [
      { name: "Hasta 5 páginas enfocadas a conversión", included: true },
      { name: "Diseño pensado para móvil", included: true },
      { name: "Formulario de presupuesto", included: true },
      { name: "Entrega rápida", included: true },
      { name: "Textos de servicios y confianza", included: true },
      { name: "Secciones de SEO local", included: true },
      { name: "Mapa o ubicación de Google", included: true },
      { name: "Reseñas y señales de confianza", included: true },
      { name: "Galería de trabajos", included: false },
    ],
    popular: true,
  },
  {
    name: "Extras",
    price: "49 €",
    tagline: "Para más servicios, zonas y pruebas visuales",
    pages: null,
    perPage: true,
    features: [
      { name: "Páginas extra de servicio", included: true },
      { name: "Páginas por ciudad o zona", included: true },
      { name: "Secciones antes/después", included: true },
      { name: "Galería o portfolio de trabajos", included: true },
      { name: "Preguntas extra en el formulario", included: true },
      { name: "Actualizaciones continuas disponibles", included: true },
      { name: "Landing pages para campañas", included: true },
      { name: "Páginas de promociones temporales", included: true },
    ],
    popular: false,
  },
];

export const metadata: Metadata = {
  title: "Precios | NextGen Web Development",
  description: "Paquetes claros para webs profesionales de autónomos, oficios y pequeñas empresas de servicios en España. Starter 78 € y Growth 148 €.",
  alternates: {
    canonical: DOMAIN + "/es/packages",
    languages: {
      en: DOMAIN + "/packages",
      es: DOMAIN + "/es/packages",
      "x-default": DOMAIN + "/packages",
    },
  },
};

export default function SpanishPackagesPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Precios para negocios locales y empresas de servicios</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Precios de inicio claros para profesionales que necesitan una web seria, más confianza local y más solicitudes de presupuesto.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={["glass-card rounded-2xl p-8 transition-all duration-300", pkg.popular ? "border-primary/50 shadow-[0_0_40px_rgba(104,86,227,0.15)]" : ""].join(" ")}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold px-3 py-1 rounded-full">Mejor para captar contactos</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{pkg.name}</h2>
                  <p className="text-text-secondary text-sm mb-4">{pkg.tagline}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold gradient-text">{pkg.price}</span>
                    {pkg.perPage && <span className="text-text-muted">/página</span>}
                  </div>
                  <span className="inline-block bg-white/5 text-text-secondary text-sm font-medium px-4 py-1 rounded-full border border-white/10">
                    {pkg.pages ? pkg.pages + " páginas incluidas" : "Añade lo que necesites"}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      <Check size={20} className={["mr-3 flex-shrink-0", feature.included ? "text-primary" : "text-text-muted"].join(" ")} />
                      <span className={feature.included ? "text-text-secondary" : "text-text-muted"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/es/contact" variant={pkg.popular ? "glow" : "outline"} fullWidth>
                  {pkg.perPage ? "Consultar extras" : "Pide tu propuesta"}
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-white font-semibold text-xl mb-3">¿Qué no está incluido en el precio inicial?</h2>
            <p className="text-text-secondary">
              Dominio, hosting, publicidad de pago, cuentas de email y herramientas externas se presupuestan aparte si tu negocio las necesita. El alcance queda claro antes de empezar.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿No sabes qué paquete encaja mejor?</h2>
          <p className="text-text-secondary text-lg mb-8">Envíanos tu oficio, zona de trabajo y web actual si tienes una. Te recomendaremos el plan más sencillo.</p>
          <Link href="/es/contact" prefetch={false}>
            <Button variant="glow" size="lg">Pide una revisión gratuita <ArrowRight size={20} className="ml-2" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
