"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui";
import { Send, Check } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwlgrv";

const content = {
  en: {
    title: "Get a",
    highlight: "Website Plan",
    intro: "Tell us what you do, where you work, and what kind of jobs you want more of. We'll reply with a clear next step.",
    successTitle: "Request Sent",
    successText: "We'll review your business and get back to you within 24 hours.",
    name: "Your Name",
    namePlaceholder: "John Smith",
    business: "Business Name",
    businessPlaceholder: "Smith Plumbing",
    email: "Email",
    emailPlaceholder: "john@example.com",
    message: "What do you want the website to help with?",
    messagePlaceholder: "Example: more quote requests for roofing repairs, better Google presence, and a clearer project gallery.",
    error: "Something went wrong. Please try again.",
    sending: "Sending...",
    submit: "Get My Website Plan",
    privacy: "No spam and no pressure. We only use your details to reply to your request.",
  },
  es: {
    title: "Pide tu",
    highlight: "propuesta web",
    intro: "Cuéntanos qué haces, dónde trabajas y qué tipo de clientes quieres captar. Te responderemos con el siguiente paso claro.",
    successTitle: "Solicitud enviada",
    successText: "Revisaremos tu negocio y te responderemos en menos de 24 horas laborables.",
    name: "Tu nombre",
    namePlaceholder: "Juan García",
    business: "Nombre del negocio",
    businessPlaceholder: "Fontanería García",
    email: "Email",
    emailPlaceholder: "hola@tuempresa.es",
    message: "¿En qué quieres que te ayude la web?",
    messagePlaceholder: "Ejemplo: más solicitudes de presupuesto para reformas, mejor presencia en Google y una galería de trabajos más clara.",
    error: "Algo ha fallado. Inténtalo de nuevo.",
    sending: "Enviando...",
    submit: "Pide tu propuesta",
    privacy: "Sin spam y sin presión. Solo usamos tus datos para responder a tu solicitud.",
  },
} as const;

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const copy = content[locale];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = formRef.current;
    if (!form) return;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 lg:py-28">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent-pink/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {copy.title} <span className="gradient-text">{copy.highlight}</span>
          </h2>
          <p className="text-text-secondary text-lg">{copy.intro}</p>
        </div>
        {submitted ? (
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">{copy.successTitle}</h3>
            <p className="text-text-secondary">{copy.successText}</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="glass-card rounded-2xl p-6 sm:p-8">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden />
            <input type="hidden" name="language" value={locale} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
              <div>
                <label htmlFor={"name-" + locale} className="block text-white font-medium mb-2">{copy.name}</label>
                <input type="text" id={"name-" + locale} name="name" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors" placeholder={copy.namePlaceholder} />
              </div>
              <div>
                <label htmlFor={"business-" + locale} className="block text-white font-medium mb-2">{copy.business}</label>
                <input type="text" id={"business-" + locale} name="business" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors" placeholder={copy.businessPlaceholder} />
              </div>
            </div>
            <div className="mb-5 md:mb-6">
              <label htmlFor={"email-" + locale} className="block text-white font-medium mb-2">{copy.email}</label>
              <input type="email" id={"email-" + locale} name="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors" placeholder={copy.emailPlaceholder} />
            </div>
            <div className="mb-5 md:mb-6">
              <label htmlFor={"message-" + locale} className="block text-white font-medium mb-2">{copy.message}</label>
              <textarea id={"message-" + locale} name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none" placeholder={copy.messagePlaceholder} />
            </div>
            {error && <p className="text-red-400 text-sm mb-4">{copy.error}</p>}
            <Button type="submit" variant="glow" fullWidth disabled={loading}>
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                {loading ? copy.sending : copy.submit}
              </span>
            </Button>
            <p className="text-text-muted text-xs text-center mt-4">{copy.privacy}</p>
          </form>
        )}
      </div>
    </section>
  );
}
