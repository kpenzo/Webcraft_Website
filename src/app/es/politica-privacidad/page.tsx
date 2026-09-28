import type { Metadata } from "next";
import Link from "next/link";
import { DOMAIN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Política de privacidad | NextGen Web Development",
  description: "Política de privacidad de NextGen Web Development para formularios de contacto y solicitud de propuesta en España.",
  alternates: {
    canonical: DOMAIN + "/es/politica-privacidad",
    languages: {
      es: DOMAIN + "/es/politica-privacidad",
      "x-default": DOMAIN + "/es/politica-privacidad",
    },
  },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: ["El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:"],
    list: [
      "Nombre comercial: NextGen Web Development",
      "Titular: [NOMBRE COMPLETO]",
      "NIF: [NIF]",
      "Domicilio fiscal/profesional: [DOMICILIO FISCAL/PROFESIONAL]",
      "Email de contacto para privacidad: [EMAIL]",
    ],
  },
  {
    title: "2. Datos que se recogen",
    body: ["Actualmente, el sitio web recoge datos personales únicamente cuando el usuario rellena y envía voluntariamente un formulario de contacto o solicitud de propuesta."],
    list: [
      "Nombre",
      "Nombre del negocio",
      "Dirección de email",
      "Mensaje o información que el usuario decida incluir sobre su negocio, servicios, zona de trabajo u objetivos",
      "Idioma del formulario",
      "Campo antispam técnico oculto (_gotcha)",
      "Datos técnicos mínimos asociados al envío que puedan ser tratados por el proveedor del formulario, como dirección IP, fecha/hora o metadatos técnicos necesarios para prevenir abuso y entregar el mensaje",
    ],
  },
  {
    title: "3. Finalidades del tratamiento",
    body: ["Los datos se tratan para las siguientes finalidades:"],
    list: [
      "Responder a solicitudes de información o propuestas enviadas por el usuario",
      "Preparar una recomendación o propuesta comercial relacionada con servicios web",
      "Gestionar la comunicación previa a una posible contratación",
      "Prevenir spam, abuso o envíos automatizados",
      "Cumplir obligaciones legales aplicables, si correspondiera",
    ],
  },
  {
    title: "4. Base jurídica",
    body: ["La base jurídica principal para responder a las solicitudes enviadas mediante formulario es la aplicación de medidas precontractuales solicitadas por el propio usuario o, en su caso, el interés legítimo en responder comunicaciones recibidas. Cuando sea necesario conservar determinada información por obligación legal, la base será el cumplimiento de obligaciones legales aplicables."],
  },
  {
    title: "5. Plazo de conservación",
    body: ["Los datos se conservarán durante el tiempo necesario para responder a la solicitud y gestionar la relación comercial o precontractual. Si no se inicia una relación profesional, se conservarán solo durante el plazo razonablemente necesario para hacer seguimiento de la consulta y atender posibles responsabilidades. Cuando exista obligación legal de conservación, se conservarán durante los plazos legalmente exigidos."],
  },
  {
    title: "6. Encargados y terceros utilizados",
    body: ["Según la implementación actual auditada, este sitio utiliza los siguientes servicios que pueden tratar datos en relación con el funcionamiento de la web o los formularios:"],
    list: [
      "Formspree: proveedor externo utilizado para recibir y gestionar los envíos de formularios de contacto. Los datos introducidos en el formulario se envían a Formspree cuando el usuario pulsa el botón de envío.",
      "Cloudflare Pages / Cloudflare: proveedor de alojamiento, entrega de contenido, seguridad y servicios técnicos asociados al sitio web. Puede tratar datos técnicos de conexión necesarios para entregar la web y proteger el servicio.",
      "GitHub: repositorio de código y flujo de despliegue del sitio. No recibe los datos introducidos por los usuarios en los formularios por el mero hecho de navegar o enviar el formulario.",
    ],
  },
  {
    title: "7. Transferencias internacionales",
    body: ["Algunos proveedores técnicos, como Formspree, Cloudflare o GitHub, pueden estar ubicados fuera del Espacio Económico Europeo o utilizar infraestructura internacional. En esos casos, las transferencias se realizarán conforme a las garantías previstas por la normativa aplicable, como cláusulas contractuales tipo, decisiones de adecuación u otros mecanismos válidos. El usuario puede solicitar más información escribiendo a [EMAIL]."],
  },
  {
    title: "8. Derechos de las personas usuarias",
    body: ["El usuario puede ejercer los derechos reconocidos por la normativa de protección de datos, incluyendo acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, cuando procedan."],
  },
  {
    title: "9. Cómo ejercer los derechos",
    body: ["Para ejercer derechos, el usuario puede enviar una solicitud a [EMAIL], indicando el derecho que desea ejercer y aportando la información necesaria para verificar su identidad si fuera preciso. También puede escribir al domicilio indicado en esta política cuando dicho dato esté completado."],
  },
  {
    title: "10. Reclamación ante la AEPD",
    body: ["Si el usuario considera que el tratamiento de sus datos no se ajusta a la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de https://www.aepd.es/."]
  },
  {
    title: "11. Actualizaciones",
    body: ["Esta política puede actualizarse para reflejar cambios normativos, técnicos o de servicios utilizados. La versión publicada en esta página será la vigente en cada momento."],
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <article className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/es" prefetch={false} className="inline-flex text-text-secondary hover:text-white transition-colors mb-8">Volver al inicio</Link>
        <header className="mb-10">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-wide mb-3">Protección de datos</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Política de privacidad</h1>
          <p className="text-text-secondary text-lg">Esta política describe cómo se tratan los datos enviados a través de los formularios de contacto y solicitud de propuesta.</p>
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
