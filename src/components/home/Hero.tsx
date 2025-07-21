'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Brain, Users } from 'lucide-react';
import Button from '@/components/common/Button';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section--hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-purple/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-purple/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ 
            duration: 1, 
            delay: 0.7,
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-purple/10 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ 
            duration: 1, 
            delay: 0.9,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-purple/10 text-primary-purple px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart size={16} />
              <span>Mental Health Professional</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-900">Safiyah</span>
              <br />
              <span className="text-primary-purple">Sohail</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specializing in ADHD assessment, emotional support, and therapeutic interventions. 
              Dedicated to providing compassionate mental health care and clinical research.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Get in Touch
              </Button>
              <Button variant="secondary" size="lg" href="/about">
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">200+</div>
                <div className="text-sm text-gray-600">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">15+</div>
                <div className="text-sm text-gray-600">Research Papers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="w-80 h-96 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-3xl shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain size={80} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Clinical Psychology</h3>
                    <p className="text-white/80">ADHD Specialist</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Users size={40} className="text-primary-purple" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Heart size={32} className="text-secondary-purple" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToContent}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-gray-700" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 