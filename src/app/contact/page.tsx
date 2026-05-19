"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Send, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdwlgrv";

const businessTypes = [
  "",
  "Plumber",
  "Electrician",
  "HVAC Technician",
  "Contractor",
  "Roofer",
  "Landscaper",
  "Painter",
  "Cleaner",
  "Flooring",
  "Remodeler",
  "Handyman",
  "Other",
];

export default function ContactPage() {
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
    <>
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get a Website Plan
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tell us about your trade, service area, and goals. We will reply with
            the simplest path to a website that helps generate quote requests.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-white font-semibold text-xl mb-2">Request Sent</h2>
              <p className="text-text-secondary mb-6">
                We will review your business and get back to you within 24 hours.
              </p>
              <Link href="/">
                <Button variant="outline">
                  Back to Home <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="glass-card rounded-2xl p-8">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" hidden />
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
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

                <div>
                  <label htmlFor="businessType" className="block text-white font-medium mb-2">
                    Trade or Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-surface">
                        {type === "" ? "Select your business type" : type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    What should the website help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us your service area, main services, current website if you have one, and what kind of leads you want more of."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                <Button type="submit" variant="glow" fullWidth disabled={loading}>
                  <span className="flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    {loading ? "Sending..." : "Get My Website Plan"}
                  </span>
                </Button>
                <p className="text-text-muted text-xs text-center">
                  No spam and no pressure. We only use your details to reply to your request.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
