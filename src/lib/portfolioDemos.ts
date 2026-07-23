type PortfolioImage = {
  src: string;
  width: number;
  height: number;
};

const image = (src: string, width: number, height: number): PortfolioImage => ({
  src,
  width,
  height,
});

const plumbingImages = [
  image("/portfolio/plumbing_1.webp", 900, 514),
  image("/portfolio/plumbing_2.webp", 900, 600),
  image("/portfolio/plumbing_3.webp", 900, 600),
];

const cleaningImages = [
  image("/portfolio/cleaning_1.webp", 512, 512),
  image("/portfolio/cleaning_2.webp", 512, 512),
  image("/portfolio/cleaning_3.webp", 512, 512),
];

const paintingImages = [
  image("/portfolio/painting_1.webp", 512, 1024),
  image("/portfolio/painting_2.webp", 512, 1024),
  image("/portfolio/painting_3.webp", 512, 1024),
];

const landscapingImages = [
  image("/portfolio/landscaping_1.webp", 512, 1024),
  image("/portfolio/landscaping_2.webp", 512, 1024),
  image("/portfolio/landscaping_3.webp", 512, 1024),
];

const electricalImages = [
  image("/portfolio/electric_1.webp", 512, 1024),
  image("/portfolio/electric_2.webp", 512, 1024),
  image("/portfolio/electric_3.webp", 512, 1024),
];

const flooringImages = [
  image("/portfolio/flooring_1.webp", 512, 1024),
  image("/portfolio/flooring_2.webp", 512, 1024),
  image("/portfolio/flooring_3.webp", 512, 1024),
];

const hvacImages = [
  image("/portfolio/hvac_1.webp", 512, 1024),
  image("/portfolio/hvac_2.webp", 512, 1024),
  image("/portfolio/hvac_3.webp", 512, 1024),
];

const roofingImages = [
  image("/portfolio/roofing_1.webp", 512, 512),
  image("/portfolio/roofing_2.webp", 512, 512),
  image("/portfolio/roofing_3.webp", 512, 512),
];

export const portfolioDemos = [
  {
    slug: "plumbing",
    trade: "Plumbing",
    title: "Plumbing Company Demo",
    image: image("/portfolio/plumbing.webp", 1200, 800),
    galleryImages: plumbingImages,
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
    image: image("/portfolio/cleaning.webp", 1200, 800),
    galleryImages: cleaningImages,
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
    image: image("/portfolio/painting.webp", 1200, 800),
    galleryImages: paintingImages,
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
    image: image("/portfolio/landscaping.webp", 1200, 800),
    galleryImages: landscapingImages,
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
    image: image("/portfolio/electrical.webp", 1200, 800),
    galleryImages: electricalImages,
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
    image: image("/portfolio/flooring.webp", 1200, 800),
    galleryImages: flooringImages,
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
    image: image("/portfolio/hvac.webp", 1200, 800),
    galleryImages: hvacImages,
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
    image: image("/portfolio/roofing.webp", 1200, 800),
    galleryImages: roofingImages,
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
