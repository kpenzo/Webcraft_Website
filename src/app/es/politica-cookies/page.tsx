import type { Metadata } from "next";
import Link from "next/link";
import { DOMAIN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Política de cookies | NextGen Web Development",
  description: "Política de cookies de la versión española de NextGen Web Development.",
  alternates: {
    canonical: DOMAIN + "/es/politica-cookies",
    languages: {
      es: DOMAIN + "/es/politica-cookies",
      "x-default": DOMAIN + "/es/politica-cookies",
    },
  },
};

const auditedItems = [
  "No se ha detectado Google Analytics, Google Tag Manager, Meta Pixel ni herramientas equivalentes de seguimiento en el código de la versión española.",
  "No se han detectado cookies propias no esenciales creadas por el sitio durante la navegación pública auditada.",
  "No se ha detectado carga de cookies antes del consentimiento en las páginas españolas auditadas.",
  "Los formularios se envían a Formspree únicamente cuando el usuario pulsa el botón de envío.",
  "Cloudflare Pages se utiliza para alojamiento y entrega del sitio; durante la auditoría no se observó cabecera Set-Cookie en las páginas españolas públicas.",
];

export default function PoliticaCookiesPage() {
  return (
    <article className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/es" prefetch={false} className="inline-flex text-text-secondary hover:text-white transition-colors mb-8">Volver al inicio</Link>
        <header className="mb-10">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">Cookies y tecnologías similares</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Política de cookies</h1>
          <p className="text-text-secondary text-lg">Esta página describe la situación real de cookies y tecnologías similares en la versión española del sitio.</p>
        </header>
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">1. Uso actual de cookies</h2>
            <p className="text-text-secondary leading-relaxed">Según la auditoría técnica realizada sobre la implementación actual, la versión española de este sitio no utiliza cookies propias de análisis, publicidad, personalización ni seguimiento comportamental.</p>
            <p className="text-text-secondary leading-relaxed">Por este motivo, no se muestra un banner de consentimiento de cookies: añadirlo sería innecesario si no existen cookies no esenciales que aceptar o rechazar.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">2. Resultado de la auditoría técnica</h2>
            <ul className="list-disc pl-5 text-text-secondary space-y-2">
              {auditedItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">3. Cookies técnicas o estrictamente necesarias</h2>
            <p className="text-text-secondary leading-relaxed">Los proveedores técnicos de alojamiento, seguridad o entrega de contenido podrían utilizar tecnologías estrictamente necesarias para prestar el servicio, proteger la web o gestionar tráfico legítimo. Estas tecnologías, cuando sean imprescindibles para el funcionamiento o seguridad, no requieren consentimiento previo conforme a la normativa aplicable.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">4. Formularios y terceros</h2>
            <p className="text-text-secondary leading-relaxed">Los formularios de contacto se procesan mediante Formspree solo cuando el usuario decide enviarlos. Formspree puede aplicar medidas técnicas propias para prevención de abuso, seguridad y entrega del mensaje. El tratamiento de datos personales asociado al formulario se describe en la Política de privacidad.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">5. Cambios futuros</h2>
            <p className="text-text-secondary leading-relaxed">Si en el futuro se incorporan cookies de analítica, publicidad, personalización u otras tecnologías no estrictamente necesarias, se actualizará esta política y se implementará un mecanismo de consentimiento con opciones equivalentes para aceptar, rechazar y configurar antes de cargar dichas cookies.</p>
          </section>
          <section className="space-y-3">
            <h2 className="text-white text-xl font-semibold">6. Contacto</h2>
            <p className="text-text-secondary leading-relaxed">Para cualquier duda sobre esta política, puedes escribir a info@nextgenwebdevelopment.com.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
