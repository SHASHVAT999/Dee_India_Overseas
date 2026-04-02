# Dee India Overseas - Premium Frontend Architecture

> [!WARNING]
> **This project is currently UNDER DEVELOPMENT.**
> Features, design, and architecture are subject to change without notice.

A high-performance Next.js 14 Web Application built for an international automotive B2B enterprise. Designed with a sleek, "Dark Blueprint" technical aesthetic utilizing deep backgrounds, scrolling ambient glows, and robust multilingual capabilities. The site is structured to progressively feel more like an engineering terminal the deeper you dive into the product catalog.

## Tech Stack
*   **Framework**: Next.js 14 (App Router)
*   **Styling**: Tailwind CSS + shadcn/ui (customized)
*   **Animations**: Framer Motion
*   **Mapping**: `react-simple-maps`, `d3-geo`, and `topojson-client`
*   **Internationalization**: `next-intl`
*   **Language Support**: English (en), Spanish (es), Chinese (zh)

## Key Features
1.  **Immersive Dark Aesthetic**: Global scroll-reactive ambient glows and rigorous blueprint-style framing for data presentation.
2.  **Multilingual Architecture**: Dynamic routing across `[locale]`, driven by deep translation matrices.
3.  **Dynamic Mega Menu**: Complex 12-column architecture featuring bespoke sub-categories.
4.  **Hierarchical Product Terminal**: A progressive catalog that transitions from visual cards to detailed technical specification views (`[model]`).
5.  **International SEO**: Fully mapped JSON-LD `Organization` schemas, `hreflang` translation alternate canonicals, dynamic `next/image` sizing, and GA4 integration.

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
*   **Hover States**: Enforce clear, responsive transition states to maintain a vibrant, modern aesthetic profile.
