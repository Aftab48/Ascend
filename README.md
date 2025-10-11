# Ascend Tech Agency Website

A modern, full-featured tech agency website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized page structure
- **Dynamic Routing**: Case study pages with dynamic routes
- **Component Library**: Shadcn UI components for consistent design
- **Performance**: Optimized images, fonts, and code splitting

## 📁 Project Structure

```
ascend/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── services/            # Services page
│   ├── portfolio/           # Portfolio pages
│   │   └── [slug]/         # Dynamic case study pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── layout.tsx          # Root layout
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── ProjectCard.tsx     # Project card component
│   ├── TestimonialCard.tsx # Testimonial component
│   ├── FAQItem.tsx         # FAQ accordion item
│   └── ui/                 # Shadcn UI components
├── constants/              # Data constants
│   ├── projects.ts         # Project data
│   ├── testimonials.ts     # Testimonial data
│   ├── faqs.ts            # FAQ data
│   ├── teamInfo.ts        # Team and company info
│   └── services.ts        # Service data
└── lib/                   # Utility functions

```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1D2D50` - Deep, professional blue
- **Accent Cyan**: `#00CFFF` - Vibrant, energetic cyan
- **Accent Orange**: `#FF6F3C` - Electric, attention-grabbing orange

### Typography
- **Font**: Poppins (400, 500, 600, 700)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 📄 Pages

- **Home** (`/`) - Hero, services overview, featured projects, testimonials, FAQ
- **Services** (`/services`) - Detailed service offerings and descriptions
- **Portfolio** (`/portfolio`) - Grid of all projects
- **Case Studies** (`/portfolio/[slug]`) - Individual project details
- **About** (`/about`) - Company story, mission, values, team
- **Contact** (`/contact`) - Contact form and information

## 🧩 Key Components

### Navbar
- Responsive navigation with mobile menu
- Smooth scrolling to sections
- Call-to-action button

### Footer
- Company information
- Quick links
- Social media links
- Contact information

### ProjectCard
- Project thumbnail
- Category badge
- Title and tagline
- Link to case study

### TestimonialCard
- Client quote
- Star rating
- Client information with avatar

### FAQItem
- Accordion-based FAQ
- Smooth expand/collapse animations

## 🎯 Customization

### Adding New Projects

Edit `constants/projects.ts`:

```typescript
{
  id: "7",
  slug: "your-project-slug",
  title: "Project Title",
  tagline: "Brief description",
  // ... other fields
}
```

### Adding New Services

Edit `constants/services.ts` to add or modify services.

### Updating Team Members

Edit `constants/teamInfo.ts` to update team information.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 License

This project is built for Ascend Tech Agency.

## 🤝 Support

For any questions or issues, please contact hello@ascendtech.agency
