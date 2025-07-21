'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { ContactForm as ContactFormType } from '@/types';
import Button from '@/components/common/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormType>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<ContactFormType> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        organization: '',
        phone: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormType]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'safiyah.sohail@example.com',
      link: 'mailto:safiyah.sohail@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+44 123 456 789',
      link: 'tel:+44123456789',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'London, United Kingdom',
      link: null,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your message has been sent successfully. I&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="primary" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors"
                placeholder="Your organization (optional)"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors"
                placeholder="Your phone number (optional)"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a subject</option>
              <option value="ADHD Assessment">ADHD Assessment</option>
              <option value="Therapeutic Consultation">Therapeutic Consultation</option>
              <option value="Family Therapy">Family Therapy</option>
              <option value="Research Collaboration">Research Collaboration</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Please describe your inquiry or how I can help you..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center">
                <Send size={16} className="mr-2" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          I&apos;m here to help with your mental health needs. Whether you&apos;re looking for ADHD
          assessment, therapeutic support, or have questions about my services, please don&apos;t
          hesitate to reach out.
        </p>

        <div className="space-y-6">
          {contactInfo.map((info) => (
            <div key={info.title} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-primary-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary-purple transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-primary-purple/5 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
          <p className="text-gray-600 text-sm">
            I typically respond to all inquiries within 24 hours during business days. For urgent
            matters, please call directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
