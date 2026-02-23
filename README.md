# SATORI — Premium Kenyan Fashion

A luxury, minimal fashion website for **Satori**, a Kenyan fashion brand rooted in culture and crafted for the modern world.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)

## ✨ Features

- **Cinematic Hero** — Full-screen crossfade image carousel with auto-advance and progress indicators
- **Product Catalog** — 6 featured pieces with hover effects and product detail pages
- **Product Pages** — Individual product pages with size selector, add to cart, wishlist, and shipping info
- **Smooth Scroll** — Lenis-powered smooth scrolling synced with GSAP ScrollTrigger
- **Lookbook Gallery** — Masonry-style grid with hover overlays
- **Newsletter** — Email subscription with inline validation
- **Fully Responsive** — Mobile-first layout with hamburger navigation
- **All Functional Buttons** — Every link and button navigates or scrolls to the correct section

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | React 18 + Vite                   |
| Styling     | Tailwind CSS v3                   |
| Animations  | GSAP + ScrollTrigger              |
| Scroll      | Lenis                             |
| Routing     | React Router v7                   |
| Fonts       | Cormorant Garamond + Inter        |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Sticky nav with scroll-aware styling
│   ├── Hero.jsx              # Full-screen image carousel
│   ├── FeaturedCollection.jsx # Product grid with Quick View
│   ├── ProductDetail.jsx     # Individual product page
│   ├── AboutBrand.jsx        # Brand story section
│   ├── Lookbook.jsx          # Photo gallery grid
│   ├── Newsletter.jsx        # Email subscription
│   └── Footer.jsx            # Site footer with navigation
├── data/
│   └── products.js           # Shared product catalog data
├── hooks/
│   └── useSmoothScroll.js    # Lenis scroll hook
├── App.jsx                   # Router + page layout
├── main.jsx                  # Entry point
└── index.css                 # Global styles + Tailwind
```

## 🎨 Brand Palette

| Token         | Color     | Usage              |
|---------------|-----------|---------------------|
| Brand Brown   | `#5C4033` | Text, accents       |
| Brand Beige   | `#F5F5DC` | Backgrounds         |
| Brand White   | `#FFFFFF` | Cards, overlays     |
| Brand Cream   | `#FFFDD0` | Page background     |

## 📄 License

© 2025 Satori. All rights reserved.
