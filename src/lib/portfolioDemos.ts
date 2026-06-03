export const portfolioDemos = [
  {
    slug: "plumbing",
    trade: "Plumbing",
    title: "Plumbing Company Demo",
    image: "/portfolio/plumbing.png",
    galleryImages: [
      "/portfolio/plumbing_1.png",
      "/portfolio/plumbing_2.png",
      "/portfolio/plumbing_3.png",
    ],
    description:
      "Modern plumbing website focused on emergency calls, trust, and fast mobile contact.",
    focus: [
      "Emergency service calls",
      "Fast mobile contact",
      "Trust and upfront pricing cues",
    ],
  },
  {
    slug: "cleaning",
    trade: "Cleaning",
    title: "Cleaning Company Demo",
    image: "/portfolio/cleaning.png",
    galleryImages: [
      "/portfolio/cleaning_1.png",
      "/portfolio/cleaning_2.png",
      "/portfolio/cleaning_3.png",
    ],
    description:
      "Clean, modern website designed to help cleaning businesses look more professional and trustworthy.",
    focus: [
      "Residential and commercial service clarity",
      "Flexible scheduling prompts",
      "Friendly trust-building presentation",
    ],
  },
  {
    slug: "painting",
    trade: "Painting",
    title: "Painting Company Demo",
    image: "/portfolio/painting.png",
    galleryImages: [
      "/portfolio/painting_1.png",
      "/portfolio/painting_2.png",
      "/portfolio/painting_3.png",
    ],
    description:
      "Lead-focused painting company website designed to showcase quality work and generate quote requests.",
    focus: [
      "Project quality and craftsmanship",
      "Quote-focused contact paths",
      "Professional exterior and interior positioning",
    ],
  },
  {
    slug: "landscaping",
    trade: "Landscaping",
    title: "Landscaping Company Demo",
    image: "/portfolio/landscaping.png",
    galleryImages: [
      "/portfolio/landscaping_1.png",
      "/portfolio/landscaping_2.png",
      "/portfolio/landscaping_3.png",
    ],
    description:
      "Premium landscaping website focused on visual presentation and local credibility.",
    focus: [
      "Outdoor transformation visuals",
      "Seasonal service promotion",
      "Local credibility and service-area clarity",
    ],
  },
  {
    slug: "electrical",
    trade: "Electrical",
    title: "Electrical Company Demo",
    image: "/portfolio/electrical.png",
    galleryImages: [
      "/portfolio/electric_1.png",
      "/portfolio/electric_2.png",
      "/portfolio/electric_3.png",
    ],
    description:
      "Professional electrical services website optimized for trust and quick customer contact.",
    focus: [
      "Licensed and insured trust cues",
      "Quick contact for urgent service",
      "Residential and commercial service structure",
    ],
  },
  {
    slug: "flooring",
    trade: "Flooring",
    title: "Flooring Company Demo",
    image: "/portfolio/flooring.png",
    galleryImages: [
      "/portfolio/flooring_1.png",
      "/portfolio/flooring_2.png",
      "/portfolio/flooring_3.png",
    ],
    description:
      "Modern flooring website designed to highlight craftsmanship and premium results.",
    focus: [
      "Premium product presentation",
      "Craftsmanship and project proof",
      "Estimate requests for high-value work",
    ],
  },
  {
    slug: "hvac",
    trade: "HVAC",
    title: "HVAC Company Demo",
    image: "/portfolio/hvac.png",
    galleryImages: [
      "/portfolio/hvac_1.png",
      "/portfolio/hvac_2.png",
      "/portfolio/hvac_3.png",
    ],
    description:
      "Responsive HVAC website focused on service calls, maintenance plans, and local visibility.",
    focus: [
      "Heating and cooling service calls",
      "Maintenance plan visibility",
      "Seasonal local search intent",
    ],
  },
  {
    slug: "roofing",
    trade: "Roofing",
    title: "Roofing Company Demo",
    image: "/portfolio/roofing.png",
    galleryImages: [
      "/portfolio/roofing_1.png",
      "/portfolio/roofing_2.png",
      "/portfolio/roofing_3.png",
    ],
    description:
      "Roofing website built to improve credibility, mobile conversion, and homeowner trust.",
    focus: [
      "Homeowner trust and protection",
      "Inspection and repair requests",
      "Mobile quote conversion",
    ],
  },
] as const;

export type PortfolioDemo = (typeof portfolioDemos)[number];
