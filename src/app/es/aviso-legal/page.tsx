import type { Metadata } from "next";
import Link from "next/link";
import { DOMAIN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Aviso legal | NextGen Web Development",
  description: "Aviso legal de NextGen Web Development para España.",
  alternates: {
    canonical: DOMAIN + "/es/aviso-legal",
    languages: {
      es: DOMAIN + "/es/aviso-legal",
      "x-default": DOMAIN + "/es/aviso-legal",
    },
  },
};

const sections = [
  {
    title: "1. Identificación del titular",
    body: [
      "En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y comercio electrónico, se facilita la siguiente información identificativa del titular de este sitio web:",
    ],
    list: [
      "Nombre comercial: NextGen Web Development",
      "Titular: [NOMBRE COMPLETO]",
      "NIF: [NIF]",
      "Domicilio fiscal/profesional: [DOMICILIO FISCAL/PROFESIONAL]",
      "Email de contacto: [EMAIL]",
      "Sitio web: https://nextgenwebdevelopment.com/es/",
    ],
  },
  {
    title: "2. Finalidad del sitio web",
    body: [
      "Este sitio web tiene como finalidad presentar servicios profesionales de diseño y desarrollo web para autónomos, profesionales y pequeñas empresas de servicios, así como facilitar que las personas interesadas soliciten información o una propuesta a través de los formularios de contacto.",
      "La información publicada tiene carácter informativo y comercial, y no constituye asesoramiento legal, fiscal ni técnico personalizado.",
    ],
  },
  {
    title: "3. Propiedad intelectual e industrial",
    body: [
      "Salvo que se indique lo contrario, los textos, diseños, estructura, logotipos, imágenes, elementos gráficos, código y demás contenidos de este sitio web pertenecen al titular o se utilizan con licencia o autorización suficiente.",
      "No se permite reproducir, distribuir, transformar, comunicar públicamente o utilizar los contenidos de este sitio web sin autorización previa y por escrito del titular, salvo en los casos permitidos por la normativa aplicable.",
    ],
  },
  {
    title: "4. Responsabilidad",
    body: [
      "El titular procura que la información del sitio web sea clara, actualizada y correcta. No obstante, no se garantiza la ausencia absoluta de errores, interrupciones, fallos técnicos o desactualizaciones puntuales.",
      "El usuario utiliza este sitio web bajo su propia responsabilidad. El titular no será responsable de daños derivados del uso indebido del sitio, de decisiones tomadas exclusivamente con base en la información publicada o de problemas técnicos ajenos a su control razonable.",
    ],
  },
  {
    title: "5. Enlaces externos",
    body: [
      "Este sitio web puede incluir enlaces a páginas o servicios de terceros, como servicios de formularios o herramientas necesarias para prestar el servicio. El titular no controla el contenido ni las políticas de dichos terceros y no asume responsabilidad por ellos, sin perjuicio de retirar enlaces si tiene conocimiento efectivo de contenidos ilícitos o inadecuados.",
    ],
  },
  {
    title: "6. Protección de datos",
    body: [
      "El tratamiento de datos personales realizado a través de este sitio web se describe en la Política de privacidad.",
    ],
  },
  {
    title: "7. Legislación aplicable",
    body: [
      "Este aviso legal se rige por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.",
    ],
  },
];

export default function AvisoLegalPage() {
  return (
    <article className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/es" prefetch={false} className="inline-flex text-text-secondary hover:text-white transition-colors mb-8">Volver al inicio</Link>
        <header className="mb-10">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">Información legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Aviso legal</h1>
          <p className="text-text-secondary text-lg">Documento informativo sobre la titularidad y condiciones generales de uso de este sitio web.</p>
        </header>
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-white text-xl font-semibold">{section.title}</h2>
              {section.body?.map((paragraph) => <p key={paragraph} className="text-text-secondary leading-relaxed">{paragraph}</p>)}
              {section.list && (
                <ul className="list-disc pl-5 text-text-secondary space-y-2">
                  {section.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
