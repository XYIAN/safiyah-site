'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Users } from 'lucide-react';
import Button from '@/components/common/Button';

const Hero: React.FC = () => {
  return (
    <section
      className="section section--hero relative overflow-hidden"
      style={{ background: 'rgba(177,156,217,0.18)', backdropFilter: 'blur(12px)' }}
    >
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
              ease: 'easeInOut',
            },
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
              ease: 'easeInOut',
            },
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
              ease: 'easeInOut',
            },
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-column align-items-center justify-content-center min-h-screen py-6 gap-6">
          {/* Left Content (now top) */}
          <motion.div
            className="w-full text-center mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex align-items-center gap-2 bg-primary-purple/10 text-primary-purple px-4 py-2 border-round text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart size={16} />
              <span>Mental Health Professional</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 line-height-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gray-900">Safiyah</span>
              <br />
              <span className="text-primary-purple">Sohail</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-6 max-w-30rem mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specializing in ADHD assessment, emotional support, and therapeutic interventions.
              Dedicated to providing compassionate mental health care and clinical research.
            </motion.p>

            {/* Safiyah Image */}
            <motion.div
              className="flex justify-content-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <img
                src="/saf.jpeg"
                alt="Safiyah Sohail"
                style={{
                  width: 160,
                  height: 160,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 24px 0 rgba(177,156,217,0.18)',
                  border: '4px solid #fff',
                }}
              />
            </motion.div>

            <motion.div
              className="flex flex-column sm:flex-row gap-4 justify-content-center mt-4"
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
              className="flex justify-content-center gap-6 mt-6"
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

          {/* Visual Elements (now below text) */}
          <motion.div
            className="w-full flex justify-content-center mt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="w-20rem h-24rem bg-gradient-to-br from-primary-purple to-secondary-purple border-round-3xl shadow-2xl relative overflow-hidden mb-4"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute inset-0 flex align-items-center justify-content-center">
                  <div className="text-center text-white">
                    <Brain size={80} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Clinical Psychology</h3>
                    <p className="text-white/80">ADHD Specialist</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-3 -left-3 w-8rem h-8rem bg-white border-round-2xl shadow-lg flex align-items-center justify-content-center mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Users size={40} className="text-primary-purple" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 w-7rem h-7rem bg-white border-round-2xl shadow-lg flex align-items-center justify-content-center"
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
      </div>
    </section>
  );
};

export default Hero;
