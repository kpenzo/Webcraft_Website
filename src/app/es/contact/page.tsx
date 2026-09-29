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
          <div className="mt-8 mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-4">
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Email</p>
              <a href="mailto:info@nextgenwebdevelopment.com" className="text-white text-sm hover:text-primary-light transition-colors">info@nextgenwebdevelopment.com</a>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Dirección</p>
              <p className="text-white text-sm">Loreto 34, 08029 Barcelona</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Área de servicio</p>
              <p className="text-white text-sm">España</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm locale="es" />
    </>
  );
}
