# Build Ascend Tech Agency Website

## 1. Setup & Configuration

> Shadcn is preinstalled.

### Add Poppins Font

- Download Poppins font in woff2 format (Regular, Medium, SemiBold, Bold weights)
- Create `/public/fonts` directory
- Add font files and configure in `app/layout.tsx`

### Configure Tailwind v4 Theme

- Update `app/globals.css` with custom color palette:
- Primary: #1D2D50 (Deep Blue)
- Accent 1: #00CFFF (Vibrant Cyan)
- Accent 2: #FF6F3C (Electric Orange)
- Neutral backgrounds and text colors
- Add gradient utilities for hero sections

## 2. Create Reusable Components

### Core Components (`/components`)

- **Navbar.tsx**: Responsive navigation with logo, links, mobile menu
- **Footer.tsx**: Links, contact info, copyright
- **ProjectCard.tsx**: Thumbnail, title, tagline, link to case study
- **TestimonialCard.tsx**: Client quote, name, company
- **FAQItem.tsx**: Accordion-based FAQ using shadcn Accordion

## 3. Build Pages

### Home Page (`app/page.tsx`)

- Hero section with headline and gradient background
- Services overview (4 service cards)
- Featured projects grid (3 projects linking to case studies)
- Testimonials section (2-3 cards)
- FAQ section (3-5 questions)
- CTA buttons throughout

### Services Page (`app/services/page.tsx`)

- Detailed service breakdowns:
- Web Development (Static, Full-Stack, eCommerce, SaaS, Web3)
- App Development (React Native)
- UI/UX & Branding
- Integrations & Custom Software
- Each service with description, benefits, and CTA

### Portfolio Page (`app/portfolio/page.tsx`)

- Grid layout of 6 sample projects
- ProjectCard components with thumbnails
- Filter/category options (optional)

### Case Study Pages (`app/portfolio/[slug]/page.tsx`)

- Dynamic routing for individual projects
- Structure: Overview, Challenges, Solution, Tech Stack, Screenshots, Results
- Sample projects with realistic content
- CTA to contact for similar projects

### About Page (`app/about/page.tsx`)

- Company story, mission, vision
- Team section with placeholder cards
- Values/principles section

### Contact Page (`app/contact/page.tsx`)

- Contact form (Name, Email, Message) using shadcn Input/Textarea
- Email and WhatsApp links
- Optional location/social links

## 4. Create Sample Data

### Organize Data in `/constants` Folder

- **`/constants/projects.ts`**: 6 sample projects with title, tagline, description, tech stack, goals, challenges, solutions, placeholder images, unique slugs
- **`/constants/testimonials.ts`**: 3-4 client testimonials with quotes, names, companies, roles
- **`/constants/faqs.ts`**: 3-4 frequently asked questions with answers
- **`/constants/teamInfo.ts`**: Team members data, company mission, vision, values
- **`/constants/services.ts`**: Detailed service descriptions and features

## 5. Final Polish

- Ensure full responsive design (mobile, tablet, desktop)
- Add smooth scrolling for anchor links
- Optimize for SEO (meta tags, proper heading hierarchy)
- Add loading states and transitions
- Verify all internal links work correctly

## Key Files to Create/Modify

- `app/layout.tsx` - Add Poppins font, update metadata
- `app/globals.css` - Custom Tailwind theme with color palette
- `app/page.tsx` - Home page (replace default)
- `app/services/page.tsx` - New
- `app/portfolio/page.tsx` - New
- `app/portfolio/[slug]/page.tsx` - New dynamic route
- `app/about/page.tsx` - New
- `app/contact/page.tsx` - New
- `components/*` - All 5 component files
- `lib/projects.ts` - Sample data