"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui";
import { Send, Check } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwlgrv";

export function ContactForm() {
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
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
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
            Get a <span className="gradient-text">Website Plan</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Tell us what you do, where you work, and what kind of jobs you want more of.
            We&apos;ll reply with a clear next step.
          </p>
        </div>
        
        {submitted ? (
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Request Sent</h3>
            <p className="text-text-secondary">
              We&apos;ll review your business and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="glass-card rounded-2xl p-6 sm:p-8">
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-white font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                  placeholder="Smith Plumbing"
                />
              </div>
            </div>
            
            <div className="mb-5 md:mb-6">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-5 md:mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                What do you want the website to help with?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Example: more quote requests for roofing repairs in Calgary, better Google presence, and a clearer project gallery."
              />
            </div>
            
            {error && (
              <p className="text-red-400 text-sm mb-4">Something went wrong. Please try again.</p>
            )}
            
            <Button type="submit" variant="glow" fullWidth disabled={loading}>
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                {loading ? "Sending..." : "Get My Website Plan"}
              </span>
            </Button>
            <p className="text-text-muted text-xs text-center mt-4">
              No spam and no pressure. We only use your details to reply to your request.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
