# Safiyah Sohail - Mental Health Professional Portfolio

A modern, responsive portfolio website for Safiyah Sohail, a mental health professional specializing in ADHD assessment and therapeutic interventions.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Component-Based Architecture**: Modular, reusable components
- **TypeScript**: Full type safety and better development experience
- **SEO Optimized**: Built with Next.js 15+ and proper meta tags
- **Performance**: Fast loading with static generation and optimization

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
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
│   │   ├── GridLayout.tsx
│   │   ├── PageHero.tsx
│   │   └── PageCallToAction.tsx
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
│   │   ├── ContactFormSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── FAQSection.tsx
│   │   └── LocationHours.tsx
│   └── index.ts          # Barrel exports
├── styles/               # Global styles
│   └── globals.scss
└── types/                # TypeScript type definitions
    └── index.ts
```

## 🎨 Component Architecture

### Reusable Components (`/common`)
- **IconCard**: Cards with icons, titles, and descriptions
- **StatsCard**: Cards with numbers, titles, and descriptions
- **ContentCard**: Cards with titles, descriptions, and bullet lists
- **SectionHeader**: Consistent section headers with title and subtitle
- **GridLayout**: Responsive grid layouts with customizable columns
- **PageHero**: Reusable hero sections for all pages
- **PageCallToAction**: Reusable call-to-action sections

### Page-Specific Components
Each page has its own folder with components specific to that page's content and layout.

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: SCSS with Tailwind CSS utility classes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: next-seo
- **Build Tool**: Turbopack (development)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd safiyah-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

The site is optimized for static deployment. Build for production:

```bash
npm run build
```

## 📝 Changelog

### [Latest] - Complete Component Extraction & Consolidation
- **✅ FULLY EXTRACTED**: All inline JSX blocks converted to functional components
- **✅ REUSABLE COMPONENTS**: Created 7 new reusable components in `/common`
- **✅ PAGE COMPONENTS**: Created 5 new page-specific components
- **✅ CLEAN ARCHITECTURE**: All pages now use extracted components
- **✅ TYPE SAFETY**: Full TypeScript implementation with proper interfaces
- **✅ PERFORMANCE**: Optimized bundle size with shared components
- **✅ MAINTAINABILITY**: Consistent patterns across all components

#### New Components Created:
- **PageHero**: Reusable hero sections for all pages
- **PageCallToAction**: Reusable call-to-action sections
- **FAQSection**: Contact page FAQ section
- **LocationHours**: Contact page location and hours
- **ContactFormSection**: Contact form wrapper

#### Pages Updated:
- **Home**: Uses AboutPreview, StatsSection, CallToAction
- **About**: Uses PageHero, AboutSection
- **Experience**: Uses PageHero, KeyAchievements, Specializations, ProfessionalDevelopment, PageCallToAction
- **Education**: Uses PageHero, AcademicHighlights, ResearchFocus, OngoingDevelopment, PageCallToAction
- **Contact**: Uses PageHero, ContactFormSection, ServicesOverview, FAQSection, LocationHours, PageCallToAction

### Previous Updates
- Initial portfolio setup with Next.js 15+
- Responsive design implementation
- SEO optimization
- Animation integration with Framer Motion
- Contact form functionality
- Professional content for mental health practice

## 🎯 Key Features

### Professional Content
- **ADHD Assessment**: Comprehensive evaluation and diagnosis
- **Therapeutic Support**: Individual and family therapy
- **Research Focus**: Academic contributions to mental health
- **Professional Development**: Continuous learning and certifications

### Technical Excellence
- **Component Reusability**: Shared components reduce code duplication
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized loading and rendering
- **Accessibility**: WCAG compliant design
- **SEO**: Search engine optimized content

## 📞 Contact

For questions about the codebase or to discuss mental health services, please reach out through the contact form on the website.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
