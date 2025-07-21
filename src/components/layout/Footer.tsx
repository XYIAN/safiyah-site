'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { SocialLink } from '@/types';

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/safiyah-sohail',
      label: 'LinkedIn',
      icon: 'linkedin'
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/safiyah_sohail',
      label: 'Twitter',
      icon: 'twitter'
    },
    {
      platform: 'email',
      url: 'mailto:safiyah.sohail@example.com',
      label: 'Email',
      icon: 'mail'
    },
    {
      platform: 'phone',
      url: 'tel:+44123456789',
      label: 'Phone',
      icon: 'phone'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      case 'phone':
        return <Phone size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary-purple-light mb-4">
              Safiyah Sohail
            </h3>
            <p className="text-gray-300 mb-4">
              Mental health professional specializing in ADHD assessment, 
              emotional support, and therapeutic interventions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-purple transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: 'easeOut' 
                  }}
                  aria-label={link.label}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Experience', href: '/experience' },
                { label: 'Education', href: '/education' },
                { label: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: 'easeOut' 
                  }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-purple-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-purple-light" />
                <a 
                  href="mailto:safiyah.sohail@example.com"
                  className="text-gray-300 hover:text-primary-purple-light transition-colors duration-200"
                >
                  safiyah.sohail@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-purple-light" />
                <a 
                  href="tel:+44123456789"
                  className="text-gray-300 hover:text-primary-purple-light transition-colors duration-200"
                >
                  +44 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-purple-light" />
                <span className="text-gray-300">
                  London, United Kingdom
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Safiyah Sohail. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Mental Health Professional | ADHD Specialist | Clinical Psychologist
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 