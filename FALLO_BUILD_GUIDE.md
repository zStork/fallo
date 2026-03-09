# Fallo Corporation - Hydrogen Storefront Build Guide

## Project Overview

This is a luxury Shopify Hydrogen 2.x storefront for Fallo Corporation - a premium product design and development company specializing in OEM luxury bags, lifestyle garments, and accessories.

## Tech Stack

- **Framework**: Shopify Hydrogen 2.x (Remix-based, React, TypeScript)
- **Styling**: Tailwind CSS v3 with custom Fallo design tokens
- **Animation**: Framer Motion (to be installed)
- **State**: Remix loaders/actions + Shopify Storefront API
- **Fonts**: Cormorant Garamond, Inter, Montserrat (via Google Fonts)
- **Icons**: Lucide React (to be installed)

## Design System

### Colors
- **fallo-black**: #0a0a0a (primary background)
- **fallo-charcoal**: #141414 (secondary dark)
- **fallo-graphite**: #1e1e1e (card backgrounds)
- **fallo-gold**: #c9a96e (primary accent)
- **fallo-cream**: #f0ebe2 (text on dark)
- **fallo-khaki**: #b5a27f (category panels)

### Typography
- **Display/Headings**: Cormorant Garamond (300, 400)
- **Body**: Inter (300, 400)
- **Labels/UI**: Montserrat (300, 400, 600)

## Installation Steps

1. **Install additional dependencies**:
```bash
npm install framer-motion lucide-react
```

2. **Set up environment variables**:
Create `.env` file with:
```
SESSION_SECRET="your-secret-here"
PUBLIC_STOREFRONT_API_TOKEN="your-token"
PUBLIC_STORE_DOMAIN="your-store.myshopify.com"
```

3. **Run development server**:
```bash
npm run dev
```

## Project Structure

```
fallo/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroFullscreen.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryPanel.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── TestimonialSlider.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── ContactForm.tsx
│   │   ├── CustomCursor.tsx
│   │   └── ui/
│   ├── routes/
│   │   ├── _index.tsx (Homepage)
│   │   ├── collections.$handle.tsx
│   │   ├── products.$handle.tsx
│   │   ├── pages.work.tsx
│   │   ├── pages.services.tsx
│   │   ├── pages.company.tsx
│   │   ├── pages.testimonials.tsx
│   │   └── pages.contact.tsx
│   ├── lib/
│   │   ├── fragments.ts
│   │   ├── queries.ts
│   │   └── utils.ts
│   └── styles/
│       └── app.css
├── public/
├── tailwind.config.ts
└── package.json
```

## Key Features to Build

### Components (Priority Order)
1. ✅ Tailwind config with Fallo design system
2. ✅ Custom CSS with fonts and cursor
3. ⏳ Header with transparent-to-solid scroll effect
4. ⏳ HeroFullscreen component
5. ⏳ Footer
6. ⏳ ProductCard with hover effects
7. ⏳ CategoryPanel (alternating layout)
8. ⏳ LogoMarquee (infinite scroll)
9. ⏳ TestimonialSlider
10. ⏳ ProcessSteps (Services page)
11. ⏳ ContactForm
12. ⏳ CustomCursor component

### Pages (Priority Order)
1. ⏳ Homepage (_index.tsx) - 6 sections
2. ⏳ Product Detail (products.$handle.tsx)
3. ⏳ Collection (collections.$handle.tsx)
4. ⏳ Work/Portfolio (pages.work.tsx)
5. ⏳ Services (pages.services.tsx)
6. ⏳ Company (pages.company.tsx)
7. ⏳ Testimonials (pages.testimonials.tsx)
8. ⏳ Contact (pages.contact.tsx)

### Shopify Integration
- Cart API with optimistic UI
- Predictive Search
- Customer Account
- GraphQL queries for products/collections

### Animations
- Scroll-triggered reveals (Framer Motion)
- Page transitions
- Custom magnetic cursor
- Parallax effects
- Staggered children animations

## Brand Copy

**Brand Definition**:
> fàl·lo — verb | Italian — The quality of being focused, innovative & results driven. "GET IT DONE"

**Philosophy**:
> We admire the risk takers, the entrepreneur that changes our perspective, the artists who alter our lens. Let's make our mark. Be determined to make a difference.

## Next Steps

This is a comprehensive build requiring:
- 12+ reusable components
- 8+ page routes
- Full Shopify Storefront API integration
- Advanced animations and interactions
- Performance optimization (Lighthouse ≥95)
- WCAG AA accessibility compliance

The project is scaffolded and ready for development. Components and pages need to be built systematically following the design specifications in the original prompt.
