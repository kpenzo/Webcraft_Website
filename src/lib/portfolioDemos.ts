export const portfolioDemos = [
  {
    slug: "plumbing",
    trade: "Plumbing",
    title: "Plumbing Company Demo",
    image: "/portfolio/plumbing.png",
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
