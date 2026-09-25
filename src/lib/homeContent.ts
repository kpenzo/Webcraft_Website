import type { Locale } from "./i18n";

export const homeContent = {
  en: {
    hero: {
      eyebrow: "Websites for contractors, trades, and local services",
      title: "Websites Built to Help Local Businesses",
      highlight: " Get More Calls",
      subtitle:
        "Fast, professional websites for trades and service businesses that need more quote requests, stronger local trust, and a polished mobile experience for customers ready to call.",
      primaryCta: "Get My Website Plan",
      secondaryCta: "See Pricing & Timeline",
      trustLine: "Clear pricing. Fast turnaround. No tech stress.",
      contactHref: "/contact",
      packagesHref: "/packages",
    },
    trustBar: [
      "Built for Local Businesses",
      "Mobile Optimized",
      "Fast Turnaround",
      "SEO Foundations Included",
      "Calgary Based",
    ],
    packages: {
      title: "Clear Packages for",
      highlight: "Local Growth",
      subtitle:
        "Fixed starting prices, clear deliverables, and optional add-ons when you need more pages, service areas, or project proof.",
      note:
        "Hosting, domain, paid ads, and third-party subscriptions are separate when needed. We keep the website scope clear before work starts.",
      items: [
        {
          name: "Starter",
          price: "$199",
          description: "A clean lead-ready site for newer or smaller service businesses",
          features: [
            "Up to 3 core pages",
            "Mobile-first quote form",
            "Clear service and trust copy",
            "Basic local SEO setup",
            "Click-to-contact layout",
            "1 revision round",
          ],
          cta: "Ask About This Package",
        },
        {
          name: "Growth",
          price: "$299",
          description: "Best fit for contractors who want more local quote requests",
          featured: true,
          badge: "Best for lead generation",
          features: [
            "Up to 5 conversion-focused pages",
            "Service-area and local SEO sections",
            "Quote request form with email",
            "Google profile and map placement",
            "Review and trust sections",
            "3 revision rounds",
            "Priority launch support",
          ],
          cta: "Get My Website Plan",
        },
        {
          name: "Add-Ons",
          price: "$99",
          perPage: true,
          description: "Expand your site as your services and locations grow",
          features: [
            "Extra service pages",
            "City or service-area pages",
            "Before/after project sections",
            "Gallery or project portfolio",
            "Additional form questions",
            "Ongoing updates available",
          ],
          cta: "Ask About This Package",
        },
      ],
    },
    why: {
      title: "Why These Websites",
      highlight: "Convert Better",
      subtitle:
        "Your website should do more than look nice. It should help people choose you, trust you, and contact you when they need the job done.",
      items: [
        {
          title: "More Quote Requests",
          description:
            "Make it easy for homeowners to understand your services, trust your business, and request a quote.",
          icon: "☎️",
        },
        {
          title: "Trust-Building Design",
          description:
            "A polished website helps you look established without feeling overpriced or corporate.",
          icon: "✓",
        },
        {
          title: "Built for Phone Users",
          description:
            "Most local customers compare businesses on mobile. Your site should be fast, clear, and easy to contact from a phone.",
          icon: "📱",
        },
        {
          title: "Local SEO Foundations",
          description:
            "Service pages, city targeting, and local trust signals help customers find the right nearby option.",
          icon: "📍",
        },
        {
          title: "Clear Calls-to-Action",
          description:
            "Simple contact paths and quote-focused copy make it obvious what visitors should do next.",
          icon: "⚡",
        },
        {
          title: "Fast Loading",
          description:
            "Fast pages keep mobile visitors engaged and make your business feel easier to work with.",
          icon: "🎯",
        },
      ],
    },
    demos: {
      eyebrow: "Portfolio examples",
      title: "Websites Built for",
      highlight: "Local Businesses",
      subtitle:
        "Example demo websites for different trades and service companies, designed to show how customers experience your business on desktop and mobile.",
      alt: "Collage of desktop and mobile website examples for local trades businesses",
      previewTitle: "Portfolio preview",
      previewText:
        "A cleaner overview of trade-specific demo directions, with dedicated pages for each business type below.",
      cta: "Request a Similar Demo",
      note: "Explore trade-specific examples in the local trades section below.",
    },
    beforeAfter: {
      title: "From Outdated to",
      highlight: "Trustworthy",
      subtitle:
        "A better website should make your business easier to trust, easier to compare, and easier to contact from any device.",
      beforeLabel: "Before",
      beforeTitle: "Hard to trust quickly",
      beforeItems: [
        "Hard to read on mobile",
        "Unclear services and service areas",
        "Weak trust signals",
        "No clear quote request path",
      ],
      afterLabel: "After",
      afterBadge: "Modern mobile-first presence",
      afterTitle: "Ready for quote requests",
      afterImageAlt: "Modern professional plumbing website shown on desktop and mobile",
      afterImageLabel: "Desktop + mobile quote flow",
      afterItems: [
        "Clean mobile-first layout",
        "Clear services, locations, and proof",
        "Reviews, trust cues, and project context",
        "Quote-focused calls-to-action",
      ],
    },
    trades: {
      title: "Made for",
      highlight: "Local Trades",
      subtitle:
        "We design around how real local customers search, compare, and contact service businesses. Choose a trade to view a dedicated demo.",
      viewDemo: "View demo",
      items: [
        { name: "Plumbing", icon: "🔧", href: "/examples/plumbing" },
        { name: "Cleaning", icon: "🧹", href: "/examples/cleaning" },
        { name: "Painting", icon: "🎨", href: "/examples/painting" },
        { name: "Landscaping", icon: "🌿", href: "/examples/landscaping" },
        { name: "Electrical", icon: "⚡", href: "/examples/electrical" },
        { name: "Flooring", icon: "▦", href: "/examples/flooring" },
        { name: "HVAC", icon: "❄️", href: "/examples/hvac" },
        { name: "Roofing", icon: "⌂", href: "/examples/roofing" },
      ],
    },
    visibility: {
      eyebrow: "Local visibility",
      title: "Help Customers Find You",
      highlight: "Locally",
      subtitle:
        "Your website should support how people search: by service, city, problem, and trust. We build the local foundations into the page structure instead of treating SEO as an afterthought.",
      cta: "Book a Free Website Review",
      items: [
        "Service pages for the work you want more of",
        "City and service-area targeting for local searches",
        "Google Maps and Google profile placement",
        "Basic SEO foundations for titles, descriptions, and page structure",
        "Clear local trust language so customers know where you work",
      ],
    },
    testimonials: {
      title: "Built Around",
      highlight: "Real Business Goals",
      subtitle:
        "More trust, clearer services, and fewer barriers between a visitor and a quote request.",
      items: [
        {
          name: "Mike's Plumbing",
          owner: "Mike Thompson",
          text: "We started getting more quote requests from people finding us on their phones, which was exactly what we needed.",
          rating: 5,
        },
        {
          name: "Elite Electric",
          owner: "Sarah Chen",
          text: "The site finally makes us look as professional online as we are when we show up for a job.",
          rating: 5,
        },
        {
          name: "Fresh Paint Co",
          owner: "James Wilson",
          text: "Customers understand what we offer faster now, and it is easier for them to ask for an estimate.",
          rating: 5,
        },
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Webs para autónomos, oficios y empresas de servicios",
      title: "Webs profesionales para conseguir más llamadas",
      highlight: " y presupuestos",
      subtitle:
        "Webs rápidas y profesionales para oficios y negocios de servicios que quieren más solicitudes de presupuesto, más confianza local y una experiencia móvil clara para clientes listos para contactar.",
      primaryCta: "Pide tu propuesta",
      secondaryCta: "Ver precios",
      trustLine: "Precios claros. Entrega rápida. Sin líos técnicos.",
      contactHref: "/es/contact",
      packagesHref: "/es/packages",
    },
    trustBar: [
      "Pensado para negocios locales",
      "Optimizado para móvil",
      "Entrega rápida",
      "Base SEO incluida",
      "Enfoque para España",
    ],
    packages: {
      title: "Paquetes claros para",
      highlight: "crecer localmente",
      subtitle:
        "Precios de inicio transparentes, entregables definidos y extras opcionales si necesitas más páginas, zonas de servicio o pruebas de trabajos realizados.",
      note:
        "Dominio, hosting, publicidad de pago y herramientas externas se presupuestan aparte si hacen falta. Siempre sabrás el alcance antes de empezar.",
      items: [
        {
          name: "Starter",
          price: "78 €",
          description: "Una web clara para empezar a captar contactos con más confianza",
          features: [
            "Hasta 3 páginas principales",
            "Formulario pensado para presupuestos",
            "Textos claros de servicios y confianza",
            "Base SEO local",
            "Diseño fácil de contactar desde móvil",
            "1 ronda de cambios",
          ],
          cta: "Pide información",
        },
        {
          name: "Growth",
          price: "148 €",
          description: "Para negocios que quieren más solicitudes y presencia local",
          featured: true,
          badge: "Más elegido para captar contactos",
          features: [
            "Hasta 5 páginas enfocadas a conversión",
            "Secciones para servicios y zonas de trabajo",
            "Formulario de presupuesto por email",
            "Ubicación y presencia en Google",
            "Secciones de reseñas y confianza",
            "3 rondas de cambios",
            "Soporte prioritario de lanzamiento",
          ],
          cta: "Pide tu propuesta",
        },
        {
          name: "Extras",
          price: "49 €",
          perPage: true,
          description: "Amplía la web a medida que crecen tus servicios o zonas",
          features: [
            "Páginas extra de servicio",
            "Páginas para ciudades o zonas",
            "Secciones antes/después",
            "Galería o portfolio de trabajos",
            "Preguntas adicionales en el formulario",
            "Actualizaciones continuas disponibles",
          ],
          cta: "Consultar extras",
        },
      ],
    },
    why: {
      title: "Por qué estas webs",
      highlight: "convierten mejor",
      subtitle:
        "Tu web debe hacer más que verse bonita. Tiene que ayudar a que los clientes te entiendan, confíen en ti y contacten cuando necesitan el servicio.",
      items: [
        {
          title: "Más solicitudes de presupuesto",
          description:
            "Haz que sea fácil entender tus servicios, confiar en tu negocio y pedir presupuesto.",
          icon: "☎️",
        },
        {
          title: "Diseño que genera confianza",
          description:
            "Una web cuidada te ayuda a parecer más profesional sin transmitir una imagen fría o demasiado corporativa.",
          icon: "✓",
        },
        {
          title: "Pensada para usuarios de móvil",
          description:
            "Muchos clientes comparan opciones desde el teléfono. Tu web debe ser rápida, clara y fácil de contactar.",
          icon: "📱",
        },
        {
          title: "Base SEO local",
          description:
            "Páginas de servicios, zonas de trabajo y señales de confianza para que te encuentren mejor.",
          icon: "📍",
        },
        {
          title: "Llamadas a la acción claras",
          description:
            "Rutas simples hacia contacto y textos orientados a presupuesto para que el siguiente paso sea evidente.",
          icon: "⚡",
        },
        {
          title: "Carga rápida",
          description:
            "Las páginas rápidas mantienen la atención en móvil y hacen que tu negocio parezca más fácil de contratar.",
          icon: "🎯",
        },
      ],
    },
    demos: {
      eyebrow: "Ejemplos de portfolio",
      title: "Webs diseñadas para",
      highlight: "negocios locales",
      subtitle:
        "Ejemplos de webs demo para distintos oficios y empresas de servicios, creadas para mostrar cómo te verían tus clientes en ordenador y móvil.",
      alt: "Collage de ejemplos de webs de escritorio y móvil para negocios de oficios",
      previewTitle: "Vista previa del portfolio",
      previewText:
        "Una muestra visual de diferentes direcciones para negocios de servicios, con páginas dedicadas para cada sector.",
      cta: "Quiero algo similar",
      note: "Explora ejemplos por sector en la sección de oficios de abajo.",
    },
    beforeAfter: {
      title: "De una web anticuada a una presencia",
      highlight: "profesional",
      subtitle:
        "Una buena web debe hacer que tu negocio parezca más fiable, sea más fácil de comparar y permita contactar desde cualquier dispositivo.",
      beforeLabel: "Antes",
      beforeTitle: "Difícil de confiar rápido",
      beforeItems: [
        "Difícil de leer en móvil",
        "Servicios y zonas poco claros",
        "Pocas señales de confianza",
        "Sin camino claro para pedir presupuesto",
      ],
      afterLabel: "Después",
      afterBadge: "Presencia moderna para móvil",
      afterTitle: "Lista para recibir presupuestos",
      afterImageAlt: "Web moderna de fontanería mostrada en ordenador y móvil",
      afterImageLabel: "Flujo de presupuesto en ordenador y móvil",
      afterItems: [
        "Diseño limpio pensado para móvil",
        "Servicios, zonas y pruebas claras",
        "Reseñas, confianza y contexto de trabajos",
        "Llamadas a la acción enfocadas a presupuesto",
      ],
    },
    trades: {
      title: "Webs para profesionales y",
      highlight: "empresas de oficios",
      subtitle:
        "Diseñamos pensando en cómo los clientes locales buscan, comparan y contactan a empresas de servicios. Elige un sector para ver una demo.",
      viewDemo: "Ver demo",
      items: [
        { name: "Fontanería", icon: "🔧", href: "/es/examples/fontaneria" },
        { name: "Limpieza", icon: "🧹", href: "/es/examples/limpieza" },
        { name: "Pintura", icon: "🎨", href: "/es/examples/pintura" },
        { name: "Jardinería", icon: "🌿", href: "/es/examples/jardineria" },
        { name: "Electricistas", icon: "⚡", href: "/es/examples/electricistas" },
        { name: "Suelos", icon: "▦", href: "/es/examples/suelos" },
        { name: "Climatización", icon: "❄️", href: "/es/examples/climatizacion" },
        { name: "Tejados", icon: "⌂", href: "/es/examples/tejados" },
      ],
    },
    visibility: {
      eyebrow: "Visibilidad local",
      title: "Ayuda a que tus clientes te encuentren",
      highlight: "en tu zona",
      subtitle:
        "Tu web debe apoyar cómo buscan los clientes: por servicio, ciudad, problema y confianza. Construimos esa base local dentro de la estructura de la página.",
      cta: "Pide una revisión gratuita",
      items: [
        "Páginas de servicios para los trabajos que quieres captar",
        "Enfoque por ciudad o zona de trabajo",
        "Ubicación, mapa y presencia de Google",
        "Base SEO para títulos, descripciones y estructura",
        "Mensajes de confianza para explicar dónde trabajas",
      ],
    },
    testimonials: {
      title: "Pensadas para",
      highlight: "objetivos reales",
      subtitle:
        "Más confianza, servicios más claros y menos barreras entre un visitante y una solicitud de presupuesto.",
      items: [
        {
          name: "Fontanería Martín",
          owner: "Javier Martín",
          text: "Ahora muchos clientes nos contactan directamente desde el móvil después de ver la web.",
          rating: 5,
        },
        {
          name: "Electricidad Nova",
          owner: "Laura Sánchez",
          text: "La web hace que el negocio se vea mucho más profesional cuando nos buscan en la zona.",
          rating: 5,
        },
        {
          name: "Pinturas Alba",
          owner: "Carlos Ruiz",
          text: "Los clientes entienden antes qué hacemos y nos resulta más fácil recibir solicitudes de presupuesto.",
          rating: 5,
        },
      ],
    },
  },
} satisfies Record<Locale, unknown>;

export type HomeContent = typeof homeContent.en;
