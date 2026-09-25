import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, GlassCard } from "@/components/ui";
import { DOMAIN } from "@/lib/i18n";

const steps = [
  {
    step: 1,
    title: "Cuéntanos tu negocio",
    description: "Comparte tus servicios, zona de trabajo, clientes ideales y lo que suelen preguntar antes de contratar.",
  },
  {
    step: 2,
    title: "Preparamos un plan claro",
    description: "Definimos páginas, mensajes de confianza, flujo de presupuesto y tiempos antes de construir.",
  },
  {
    step: 3,
    title: "Construimos y ajustamos",
    description: "Creamos una web clara para que los visitantes entiendan, confíen y contacten con tu negocio.",
  },
  {
    step: 4,
    title: "Lanzas y empiezas a enviarla a clientes",
    description: "Revisas la web, pides ajustes y la lanzamos con formularios, móvil y base SEO listos.",
  },
];

export const metadata: Metadata = {
  title: "Proceso | NextGen Web Development",
  description: "Un proceso claro para crear una web profesional para autónomos y pequeñas empresas de servicios en España.",
  alternates: {
    canonical: DOMAIN + "/es/how-it-works",
    languages: {
      en: DOMAIN + "/how-it-works",
      es: DOMAIN + "/es/how-it-works",
      "x-default": DOMAIN + "/how-it-works",
    },
  },
};

export default function SpanishHowItWorksPage() {
  return (
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Proceso claro. Sin complicaciones.</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Un camino sencillo desde el primer mensaje hasta la web publicada, pensado para profesionales ocupados.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="relative">
                <GlassCard>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-bold text-xl mb-4">{item.step}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </GlassCard>
                {item.step < 4 && <div className="hidden lg:block absolute top-1/2 -right-3 text-text-muted">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres recibir más solicitudes de presupuesto?</h2>
          <p className="text-text-secondary text-lg mb-8">Envíanos tu oficio, zona de trabajo y objetivos. Te recomendaremos un plan claro.</p>
          <Link href="/es/contact" prefetch={false}>
            <Button variant="glow" size="lg">Pide tu propuesta <ArrowRight size={20} className="ml-2" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
