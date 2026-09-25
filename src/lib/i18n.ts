export type Locale = "en" | "es";

export const DOMAIN = "https://nextgenwebdevelopment.com";

export const defaultLocale: Locale = "en";

export const spanishSlugToEnglish: Record<string, string> = {
  fontaneria: "plumbing",
  limpieza: "cleaning",
  pintura: "painting",
  jardineria: "landscaping",
  electricistas: "electrical",
  suelos: "flooring",
  climatizacion: "hvac",
  tejados: "roofing",
};

export const englishSlugToSpanish = Object.fromEntries(
  Object.entries(spanishSlugToEnglish).map(([es, en]) => [en, es]),
) as Record<string, string>;

export function localizedPath(path: string, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return "/es";
  }

  return `/es${path}`;
}

export function alternatePath(pathname: string, targetLocale: Locale) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const isSpanish = cleanPath === "/es" || cleanPath.startsWith("/es/");

  if (targetLocale === "es") {
    if (isSpanish) return cleanPath;
    const exampleMatch = cleanPath.match(/^\/examples\/([^/]+)$/);
    if (exampleMatch) {
      return `/es/examples/${englishSlugToSpanish[exampleMatch[1]] ?? exampleMatch[1]}`;
    }
    return localizedPath(cleanPath, "es");
  }

  if (!isSpanish) return cleanPath;
  const withoutLocale = cleanPath.replace(/^\/es/, "") || "/";
  const exampleMatch = withoutLocale.match(/^\/examples\/([^/]+)$/);
  if (exampleMatch) {
    return `/examples/${spanishSlugToEnglish[exampleMatch[1]] ?? exampleMatch[1]}`;
  }
  return withoutLocale;
}

export const navContent = {
  en: {
    links: [
      { href: "/", label: "Home" },
      { href: "/packages", label: "Packages" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/contact", label: "Contact" },
    ],
    cta: "Get a Quote",
  },
  es: {
    links: [
      { href: "/es", label: "Inicio" },
      { href: "/es/packages", label: "Precios" },
      { href: "/es/how-it-works", label: "Proceso" },
      { href: "/es/contact", label: "Contacto" },
    ],
    cta: "Pide presupuesto",
  },
} as const;

export const footerContent = {
  en: {
    description:
      "Lead-ready websites for trades and local service companies that need more calls, more quote requests, and a stronger professional image.",
    locationLine: "Calgary based. Building for local businesses across North America.",
    explore: "Explore",
    demos: "Demos",
    contact: "Contact",
    email: "Email",
    location: "Location",
    locationValue: "Calgary, AB",
    bottom: "Websites for trades, service companies, and local business growth.",
    demoLinks: [
      { href: "/examples/plumbing", label: "Plumbing" },
      { href: "/examples/cleaning", label: "Cleaning" },
      { href: "/examples/roofing", label: "Roofing" },
      { href: "/examples/hvac", label: "HVAC" },
    ],
  },
  es: {
    description:
      "Webs preparadas para captar contactos para autónomos, profesionales y pequeñas empresas de servicios que necesitan más llamadas y solicitudes de presupuesto.",
    locationLine: "Trabajamos con negocios locales y profesionales de servicios en España.",
    explore: "Explorar",
    demos: "Ejemplos",
    contact: "Contacto",
    email: "Email",
    location: "Área",
    locationValue: "España",
    bottom: "Webs para oficios, empresas de servicios y crecimiento local.",
    demoLinks: [
      { href: "/es/examples/fontaneria", label: "Fontanería" },
      { href: "/es/examples/limpieza", label: "Limpieza" },
      { href: "/es/examples/tejados", label: "Tejados" },
      { href: "/es/examples/climatizacion", label: "Climatización" },
    ],
  },
} as const;

export const pageMeta = {
  en: {
    title: "NextGen Web Development",
    description:
      "Lead-ready websites for contractors, trades, and local service companies. Built to help generate more calls, quote requests, and local trust.",
    locale: "en_CA",
  },
  es: {
    title: "NextGen Web Development | Webs para negocios locales",
    description:
      "Webs profesionales para autónomos, oficios y pequeñas empresas de servicios en España. Diseñadas para conseguir más llamadas, presupuestos y confianza local.",
    locale: "es_ES",
  },
} as const;
