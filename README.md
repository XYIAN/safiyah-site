# Safiyah Sohail - Mental Health Professional Portfolio

A modern, responsive portfolio website for **Safiyah Sohail**, a mental health and psychology professional specializing in ADHD assessment, emotional support, therapeutic interventions, and clinical research.

## 🌟 Features

- **Modern Design**: Purple-based calming theme with elegant, glossy UI elements
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion and Anime.js for engaging user experience
- **SEO Optimized**: Comprehensive meta tags, OpenGraph, and Twitter metadata
- **Professional Content**: Showcases qualifications, experience, and services
- **Contact Form**: Interactive form with validation and smooth user feedback
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## 🎨 Design System

- **Color Palette**: Purple-based theme (#6b46c1, #8b5cf6, #a855f7)
- **Typography**: Inter font family with clear hierarchy
- **Components**: Reusable cards, buttons, and sections with consistent styling
- **Animations**: Smooth transitions and hover effects throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: SCSS with custom variables and mixins
- **Animations**: Framer Motion + Anime.js
- **Icons**: Lucide React
- **SEO**: Next.js built-in SEO with custom metadata
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── education/         # Education page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── common/            # Reusable components
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage components
│   ├── about/             # About page components
│   ├── experience/        # Experience components
│   ├── education/         # Education components
│   └── contact/           # Contact components
├── styles/                # SCSS stylesheets
│   ├── globals.scss       # Global styles
│   └── _variables.scss    # Design system variables
└── types/                 # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/safiyah-site.git
   cd safiyah-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with animated elements
- Professional highlights and statistics
- Service overview with call-to-action

### About (`/about`)
- Professional summary and background
- Values and mission statement
- Therapeutic approach and methodologies

### Experience (`/experience`)
- Interactive timeline of work experience
- Key achievements and specializations
- Professional development highlights

### Education (`/education`)
- Academic qualifications and degrees
- Professional certifications
- Research focus and publications

### Contact (`/contact`)
- Interactive contact form with validation
- Contact information and office hours
- FAQ section and service overview

## 🎯 SEO Features

- **Meta Tags**: Comprehensive title, description, and keyword optimization
- **OpenGraph**: Rich social media sharing cards
- **Twitter Cards**: Optimized for Twitter sharing
- **Structured Data**: Ready for schema markup implementation
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling instructions

## 🔧 Customization

### Colors
Edit `src/styles/_variables.scss` to customize the color palette:

```scss
$primary-purple: #6b46c1;
$primary-purple-light: #8b5cf6;
$secondary-purple: #a855f7;
```

### Content
Update content in respective page components:
- Personal information in `src/app/layout.tsx`
- Professional details in page components
- Contact information in `src/components/contact/ContactForm.tsx`

### Styling
Modify `src/styles/globals.scss` for global style changes and component-specific styles in their respective files.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy from Git or drag-and-drop

### Other Platforms
The site can be deployed to any static hosting platform that supports Next.js.

## 📈 Performance

- Optimized images and assets
- Code splitting and lazy loading
- Efficient animations
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- Email: safiyah.sohail@example.com
- Phone: +44 123 456 789

---

**Built with ❤️ for mental health professionals**

---

## 📋 Changelog

### Version 1.0.0 (2024-12-19)
#### ✨ Initial Release
- **Added**: Complete portfolio website for Safiyah Sohail
- **Added**: Modern purple-based design system
- **Added**: Responsive layout with mobile-first approach
- **Added**: 5 main pages: Home, About, Experience, Education, Contact
- **Added**: Interactive components with Framer Motion animations
- **Added**: SEO optimization with comprehensive meta tags
- **Added**: Contact form with validation and user feedback
- **Added**: Professional content showcasing mental health expertise
- **Added**: Accessibility features and WCAG compliance
- **Added**: TypeScript for type safety
- **Added**: SCSS for advanced styling capabilities
- **Added**: Component-based architecture for maintainability

#### 🎨 Design Features
- Purple theme with calming color palette
- Glossy UI elements and smooth transitions
- Professional typography with Inter font
- Consistent spacing and layout system
- Hover effects and micro-interactions

#### 📱 Technical Features
- Next.js 15+ with App Router
- Framer Motion for animations
- Anime.js for additional animation effects
- Lucide React for icons
- Responsive design with Tailwind CSS utilities
- TypeScript for type safety
- SCSS for advanced styling

#### 🔧 Components
- Header with responsive navigation
- Footer with social links and contact info
- Hero section with animated elements
- Timeline component for experience
- Education grid with certifications
- Contact form with validation
- Reusable card and button components

#### 📄 Pages
- **Home**: Hero, about preview, stats, call-to-action
- **About**: Professional summary, values, therapeutic approach
- **Experience**: Timeline, achievements, specializations
- **Education**: Qualifications, certifications, research focus
- **Contact**: Form, FAQ, location, hours

#### 🚀 Performance & SEO
- Optimized for search engines
- Fast loading times
- Mobile-friendly design
- Social media sharing optimization
- Structured data ready
- Accessibility compliant

#### 🛠️ Development
- Clean code architecture
- Component reusability
- Type safety with TypeScript
- Modular SCSS structure
- Easy customization
- Deployment ready
