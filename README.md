# Safiyah Sohail - Mental Health Professional Portfolio

A modern, responsive portfolio website for Safiyah Sohail, a mental health and psychology professional specializing in ADHD assessment, emotional support, therapeutic interventions, and clinical research.

## Features

### 🎨 Design System
- **Purple-based calming theme** with elegant, glossy UI elements
- **Smooth animations** using Framer Motion
- **Mobile-first responsive design** with Tailwind CSS
- **Consistent component architecture** with reusable UI components
- **Accessibility compliant** (WCAG guidelines)

### 📱 Pages & Content
- **Home**: Hero section, about preview, professional highlights, call-to-action
- **About**: Professional summary, values & mission, therapeutic approach
- **Experience**: Work timeline, key achievements, specializations, professional development
- **Education**: Academic qualifications, certifications, research focus, ongoing development
- **Contact**: Contact form, services overview, FAQ, location & hours

### 🛠 Technical Features
- **Next.js 15+** with App Router and TypeScript
- **SCSS** with custom variables and modern syntax
- **SEO optimized** with next-seo, OpenGraph, and Twitter metadata
- **Component-based architecture** with reusable components
- **Form validation** and user feedback
- **Performance optimized** with proper loading and caching

### 🔧 Reusable Components
- **IconCard**: Cards with icons, titles, and descriptions
- **StatsCard**: Cards with numbers, titles, and descriptions
- **ContentCard**: Cards with titles, descriptions, and optional bullet lists
- **SectionHeader**: Consistent section headers with titles and subtitles
- **GridLayout**: Responsive grid layouts with customizable columns
- **Button**: Reusable buttons with variants and animations
- **Card**: Base card component with variants
- **Section**: Section wrapper with background variants
- **Container**: Layout container with max-width control

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: SCSS with Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: next-seo, next/head
- **Deployment**: Vercel/Netlify ready

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── experience/page.tsx # Experience page
│   ├── education/page.tsx # Education page
│   └── contact/page.tsx   # Contact page
├── components/            # React components
│   ├── common/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   ├── IconCard.tsx
│   │   ├── StatsCard.tsx
│   │   ├── ContentCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── GridLayout.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/             # Home page components
│   │   ├── Hero.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── StatsSection.tsx
│   │   └── CallToAction.tsx
│   ├── about/            # About page components
│   │   └── AboutSection.tsx
│   ├── experience/       # Experience page components
│   │   ├── ExperienceTimeline.tsx
│   │   ├── KeyAchievements.tsx
│   │   ├── Specializations.tsx
│   │   └── ProfessionalDevelopment.tsx
│   ├── education/        # Education page components
│   │   ├── EducationGrid.tsx
│   │   ├── AcademicHighlights.tsx
│   │   ├── ResearchFocus.tsx
│   │   └── OngoingDevelopment.tsx
│   ├── contact/          # Contact page components
│   │   ├── ContactForm.tsx
│   │   └── ServicesOverview.tsx
│   └── index.ts          # Barrel exports
├── styles/               # SCSS styles
│   ├── _variables.scss   # Design system variables
│   └── globals.scss      # Global styles
└── types/                # TypeScript type definitions
    └── index.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd safiyah-site

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## Page Descriptions

### Home Page (`/`)
- **Hero Section**: Animated introduction with call-to-action
- **About Preview**: Overview of services and expertise
- **Professional Highlights**: Key statistics and achievements
- **Call to Action**: Contact and navigation prompts

### About Page (`/about`)
- **Professional Summary**: Background and approach
- **Values & Mission**: Core principles and commitment
- **Therapeutic Approach**: Evidence-based methodologies
- **Call to Action**: Consultation and qualification links

### Experience Page (`/experience`)
- **Work Timeline**: Chronological work experience with details
- **Key Achievements**: Quantified accomplishments and impact
- **Areas of Specialization**: Detailed expertise breakdown
- **Professional Development**: Ongoing learning and certifications

### Education Page (`/education`)
- **Academic Qualifications**: Degrees and institutions
- **Professional Certifications**: Specialized training and credentials
- **Research Focus**: Areas of research interest and contributions
- **Ongoing Development**: Continuous learning and professional growth

### Contact Page (`/contact`)
- **Contact Form**: Validated form with submission feedback
- **Services Overview**: Available services and offerings
- **FAQ Section**: Common questions and answers
- **Location & Hours**: Practice information and availability

## SEO Features

- **Meta tags** for all pages
- **OpenGraph** and **Twitter Card** metadata
- **Structured data** for better search engine understanding
- **Sitemap** generation
- **Robots.txt** configuration
- **Performance optimization** for Core Web Vitals

## Customization

### Colors & Theme
The design system uses SCSS variables defined in `src/styles/_variables.scss`:
- Primary purple colors
- Typography scale
- Spacing system
- Shadow definitions
- Animation durations

### Content Updates
- Update content in respective page components
- Modify data arrays in component files
- Update SEO metadata in page files
- Customize form handling in ContactForm component

### Styling Changes
- Modify SCSS variables for theme changes
- Update component styles in respective files
- Adjust responsive breakpoints in Tailwind config
- Customize animations in Framer Motion components

## Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layouts, optimized touch targets
- **Tablet**: Two-column grids, enhanced spacing
- **Desktop**: Multi-column layouts, hover effects
- **Large screens**: Maximum width containers, optimal readability

## Accessibility

- **WCAG 2.1 AA** compliance
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** ratios
- **Focus indicators** and states

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the 'out' directory or connect your repository
```

### Other Platforms
The project is compatible with any static hosting platform that supports Next.js.

## Performance

- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **CSS optimization** with Tailwind CSS
- **Bundle analysis** and optimization
- **Core Web Vitals** optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team.

## Changelog

### v1.2.0 - Component Consolidation & Refactoring
- **Added reusable components**:
  - `IconCard`: For cards with icons, titles, and descriptions
  - `StatsCard`: For cards with numbers, titles, and descriptions
  - `ContentCard`: For cards with titles, descriptions, and bullet lists
  - `SectionHeader`: For consistent section headers
  - `GridLayout`: For responsive grid layouts
- **Refactored existing components** to use new reusable components:
  - `AboutPreview`: Now uses IconCard, SectionHeader, and GridLayout
  - `StatsSection`: Now uses StatsCard, SectionHeader, and GridLayout
  - `ServicesOverview`: Now uses IconCard, SectionHeader, and GridLayout
  - `KeyAchievements`: Now uses StatsCard, SectionHeader, and GridLayout
  - `Specializations`: Now uses ContentCard, SectionHeader, and GridLayout
  - `ProfessionalDevelopment`: Now uses StatsCard, SectionHeader, and GridLayout
  - `AcademicHighlights`: Now uses StatsCard, SectionHeader, and GridLayout
  - `ResearchFocus`: Now uses ContentCard, SectionHeader, and GridLayout
  - `OngoingDevelopment`: Now uses StatsCard, SectionHeader, and GridLayout
- **Improved code maintainability** by reducing duplication
- **Enhanced component reusability** across different pages
- **Updated component exports** in index.ts
- **Maintained consistent styling** and functionality

### v1.1.0 - Component Extraction & Organization
- **Extracted inline JSX blocks** into dedicated functional components
- **Created page-specific component folders**:
  - `src/components/about/AboutSection.tsx`
  - `src/components/home/AboutPreview.tsx`
  - `src/components/home/StatsSection.tsx`
  - `src/components/home/CallToAction.tsx`
  - `src/components/experience/KeyAchievements.tsx`
  - `src/components/experience/Specializations.tsx`
  - `src/components/experience/ProfessionalDevelopment.tsx`
  - `src/components/education/AcademicHighlights.tsx`
  - `src/components/education/ResearchFocus.tsx`
  - `src/components/education/OngoingDevelopment.tsx`
  - `src/components/contact/ServicesOverview.tsx`
- **Improved code organization** and maintainability
- **Enhanced component reusability** and separation of concerns
- **Updated barrel exports** for better import management

### v1.0.0 - Initial Release
- **Complete portfolio website** with 5 main pages
- **Modern purple theme** with glossy UI elements
- **Framer Motion animations** throughout the site
- **Mobile-first responsive design**
- **SEO optimization** with comprehensive metadata
- **Contact form** with validation and feedback
- **Professional content** for mental health practice
- **TypeScript** implementation for type safety
- **SCSS styling** with custom variables
- **Component-based architecture** with reusable UI components
