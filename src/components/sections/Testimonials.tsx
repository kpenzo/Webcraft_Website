"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike's Plumbing",
    owner: "Mike Thompson",
    text: "The new site made us look established and gave customers a simple way to ask for quotes.",
    rating: 5,
  },
  {
    name: "Elite Electric",
    owner: "Sarah Chen",
    text: "Clear service pages, better mobile layout, and no confusing tech process. It felt easy from the start.",
    rating: 5,
  },
  {
    name: "Fresh Paint Co",
    owner: "James Wilson",
    text: "We finally have a professional place to send homeowners before estimates. The quote form is doing its job.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built Around <span className="gradient-text">Real Business Goals</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            More trust, clearer services, and fewer barriers between a visitor and a quote request.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-pink text-accent-pink" />
                ))}
              </div>
              <p className="text-text-secondary mb-4">&quot;{testimonial.text}&quot;</p>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-text-muted text-sm">{testimonial.owner}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
