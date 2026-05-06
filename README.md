# WebCraft - Website Creation Service

A modern, responsive website for a web design service targeting trades (plumbers, electricians, contractors) and small businesses.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Features

- Fully responsive (mobile-first design)
- Sticky navigation with mobile menu
- 3 pages: Home, Packages, Contact
- 3 pricing packages: Basic ($199), Standard ($299), Custom
- Contact form with validation
- Smooth animations
- SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
webcraft-website/
├── src/
│   ├── app/                    # App router pages
│   │   ├── layout.tsx          # Root layout with Navbar/Footer
│   │   ├── page.tsx           # Home page
│   │   ├── packages/          # Packages page
│   │   ├── contact/           # Contact page
│   │   └── globals.css        # Global styles
│   └── components/           # Reusable components
│       ├── layout/            # Navbar, Footer
│       │   ├── Navbar.tsx    # Sticky navigation
│       │   ├── Footer.tsx    # Site footer
│       │   └── index.ts     # Exports
│       └── ui/              # UI components
│           ├── Button.tsx   # Button with variants
│           ├── Card.tsx     # Card component
│           └── index.ts    # Exports
├── package.json             # Dependencies
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json          # TypeScript config
└── postcss.config.js       # PostCSS config
```

## Pages

### Home (`/`)
- Hero section with headline and CTAs
- Packages preview (3 pricing cards)
- How It Works (3 steps)
- Benefits section
- CTA section

### Packages (`/packages`)
- Detailed package comparison
- Feature comparison table
- CTA to contact

### Contact (`/contact`)
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone (required)
  - Business Type (dropdown)
  - Message (required)
- Form validation
- Success/error states

## Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: {
    600: "#2563eb", // Change primary color
  },
},
```

### Packages
Edit the `packages` array in `src/app/page.tsx` or `src/app/packages/page.tsx`.

### Contact Information
Edit `src/components/layout/Footer.tsx`.

## Scripts

```bash
npm run dev      # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint   # Run ESLint
```

## License
MIT