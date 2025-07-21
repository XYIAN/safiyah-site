'use client';

import React from 'react';
import Section from './Section';

interface PageHeroProps {
  title: string;
  subtitle: string;
  highlightedWord?: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  highlightedWord,
  className = ''
}) => {
  const renderTitle = () => {
    if (highlightedWord) {
      const parts = title.split(highlightedWord);
      return (
        <>
          {parts[0]}
          <span className="text-primary-purple">{highlightedWord}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <Section className={`section--hero ${className}`}>
      <div className="text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          {renderTitle()}
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
          {subtitle}
        </p>
      </div>
    </Section>
  );
};

export default PageHero; 