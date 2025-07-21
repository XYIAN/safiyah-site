// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  skills: string[];
  achievements?: string[];
}

// Education types
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevantCoursework?: string[];
  honors?: string[];
  logo?: string;
}

// Certification types
export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

// Skill types
export interface Skill {
  name: string;
  category: 'clinical' | 'assessment' | 'research' | 'technology' | 'soft-skills';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  duration: string;
  outcomes: string[];
  technologies?: string[];
  image?: string;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  organization?: string;
  phone?: string;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: 'onScroll' | 'onMount' | 'onHover';
}

// Component props types
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'primary' | 'secondary' | 'accent';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glossy' | 'elevated';
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

// Timeline types
export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  category: 'education' | 'experience' | 'certification';
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating?: number;
  image?: string;
}

// Blog/Article types (for future use)
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  image?: string;
  readTime?: number;
}

// Social media types
export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'email' | 'phone';
  url: string;
  label: string;
  icon: string;
}

// Theme types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  values: Record<string, unknown>;
  errors: ValidationError[];
  touched: Record<string, boolean>;
  isSubmitting: boolean;
} 