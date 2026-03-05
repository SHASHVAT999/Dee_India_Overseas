# Dee India Overseas - Premium Frontend Architecture

> [!WARNING]
> **This project is currently UNDER DEVELOPMENT.**
> Features, design, and architecture are subject to change without notice.

A high-performance, cinematic Next.js 14 Web Application built for an international automotive B2B enterprise. Designed with a strict "dark automotive luxury" aesthetic, extensive micro-interactions, and robust multilingual capabilities.

## Tech Stack
*   **Framework**: Next.js 14 (App Router)
*   **Styling**: Tailwind CSS + shadcn/ui (customized)
*   **Animations**: Framer Motion & Embla Carousel
*   **Internationalization**: `next-intl`
*   **Language Support**: English (en), Spanish (es), Chinese (zh)

## Key Features
1.  **Cinematic Performance**: Relies heavily on custom `cubic-bezier` timing functions combined with Framer Motion scroll and viewport tracking for smooth, organic element entries.
2.  **Multilingual Architecture**: Dynamic routing across `[locale]`, driven by deep translation matrixes mapping over 200 custom text nodes.
3.  **Dynamic Mega Menu**: Complex 12-column architecture featuring bespoke sub-category breakdowns with custom hover micro-interactions.
4.  **B2B Catalog Simulation**: A static-generated deep-linked catalog structured precisely: `Category -> Brand -> Model -> Product Specifications`.
5.  **International SEO**: Fully mapped JSON-LD `Organization` schemas, `hreflang` translation alternate canonicals, dynamic `next/image` sizing logic, and GA4 integration natively linked into the Layout block.

## Installation & Setup

```bash
# 1. Clone the repository
# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

## Localization & Content Management
All heavy textual nodes are managed strictly within:
*   `src/data/translations/en.json` (English)
*   `src/data/translations/es.json` (Spanish)
*   `src/data/translations/zh.json` (Simplified Chinese)

To modify product databases, navigate to `src/data/products.ts`. The strict `Product`, `Model`, `Brand`, and `Category` typescript definitions enforce absolute structure across the catalog hierarchy.

## Production Deployment
The application is entirely static and edge-ready.

```bash
# 1. Build the production application
npm run build

# 2. Start the production server
npm run start
```

## Architectural Guidelines
*   **Image Management**: Use only `<Image />` tags enforcing strict `sizes` and `fill` parameters to maintain LCP scores.
*   **Routing**: All routes must be strictly wrapped within the `[locale]` dynamic routing parameter format `app/[locale]/...`.
*   **Hover States**: Strictly enforce `.transition-all .duration-500` or higher to maintain the luxury, slow-moving aesthetic profile.
