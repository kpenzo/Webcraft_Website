import type { Metadata } from "next";
import { ContactForm } from "@/components/sections";
import { DOMAIN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Pide tu propuesta | NextGen Web Development",
  description: "Cuéntanos qué necesita tu negocio y recibe una propuesta clara para una web profesional enfocada a llamadas y presupuestos.",
  alternates: {
    canonical: DOMAIN + "/es/contact",
    languages: {
      en: DOMAIN + "/contact",
      es: DOMAIN + "/es/contact",
      "x-default": DOMAIN + "/contact",
    },
  },
};

export default function SpanishContactPage() {
  return (
    <>
      <section className="pt-24 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Pide tu propuesta</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Cuéntanos tu oficio, zona de trabajo y objetivos. Te responderemos con el camino más sencillo para una web que ayude a conseguir solicitudes de presupuesto.
          </p>
        </div>
      </section>
      <ContactForm locale="es" />
    </>
  );
}
