# Sbzee Next.js Project

A modern, responsive Next.js website for Sbzee with Tailwind CSS, animations, and parallax effects.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Parallax effects** on hero and seasonal sections
- **Reveal animations** on scroll
- **Responsive design** for all devices
- **SEO optimized** with metadata and structured data
- **Accessibility features** including skip links and ARIA labels

## 📁 Project Structure

```
sbzee.com_nextjs/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── privacy-policy/    # Privacy policy page
│   └── terms/             # Terms & conditions page
├── components/            # React components
│   ├── layout/           # Header, Footer components
│   ├── providers/        # Context providers
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── assets/          # Images, icons, etc.
└── types/               # TypeScript type definitions
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   cd sbzee.com_nextjs
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Footer**: Company info, social links, app download buttons
- **BackToTop**: Smooth scroll to top button

### Animation Components
- **RevealOnScroll**: Intersection Observer based reveal animations
- **ParallaxSection**: Parallax background effects
- **SmoothScrollProvider**: Lenis smooth scrolling

### Page Sections
- **HeroSection**: Parallax hero with call-to-action buttons
- **WhySection**: Benefits of fresh produce with animated cards
- **ScienceSection**: Scientific backing with reveal animations
- **SeasonalSection**: Seasonal eating guide with parallax background
- **EverydaySection**: Daily life applications
- **SustainabilitySection**: Environmental benefits
- **GenerationsSection**: Benefits for all age groups
- **TipsSection**: Practical tips for healthy eating
- **FAQSection**: Expandable FAQ accordion

## 🎭 Animations & Effects

### Reveal Animations
- Fade in from bottom with staggered delays
- Intersection Observer for performance
- Customizable direction and distance

### Parallax Effects
- Hero section background parallax
- Seasonal section with overlay
- Smooth performance with throttled scroll handlers

### Smooth Scrolling
- Lenis for buttery smooth scrolling
- Custom easing functions
- Touch-friendly on mobile

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible grid** layouts
- **Touch-friendly** interactions

## 🔍 SEO & Performance

- **Metadata API** for each page
- **Structured data** (JSON-LD)
- **Open Graph** tags
- **Twitter Cards**
- **Semantic HTML**
- **Image optimization** with Next.js Image component
- **Bundle optimization** with dynamic imports

## 🎨 Styling

### Color Palette
- **Primary**: `#1fbf6a` (Fresh Green)
- **Primary Dark**: `#159a53`
- **Primary Light**: `#e9f8f0`
- **Text**: `#0f172a` (Slate 900)
- **Secondary**: `#6b7280` (Gray 500)

### Typography
- **Font Stack**: System fonts for performance
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Readable line heights and spacing

## 🚀 Build & Deploy

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

3. **Type checking:**
   ```bash
   npm run type-check
   ```

4. **Linting:**
   ```bash
   npm run lint
   ```

## 📊 Performance Optimizations

- **Image optimization** with WebP/AVIF formats
- **Code splitting** with dynamic imports
- **Bundle analysis** with Next.js analyzer
- **Lazy loading** for images and components
- **Throttled scroll handlers** for smooth animations

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new components
3. Add proper accessibility attributes
4. Test on multiple devices and browsers
5. Optimize images before adding to assets

## 📄 License

This project is proprietary to Sbzee/JVFPL.
