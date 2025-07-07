// Standard libraries
import React, { useContext } from 'react';
// Components
import Button from '../ui/Button';
// Types
import { CMSHeroSection } from '@/types/cms';
// Context
import { LandingContext } from '@/contexts/LandingContext';

const Hero: React.FC = () => {
  // Data from LandingContext
  // Find the hero section from context data
  const contextHeroData = useContext(LandingContext);
  const heroSection = contextHeroData?.find(section => section.type === 'hero') as CMSHeroSection;
  
  // Return null if hero section not found
  if (!heroSection) {
    return null;
  }
  
  const { background, content } = heroSection.attributes;

  return (
     <section
        id="hero-section"
        className="relative py-20 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {background?.overlay?.enabled && (
            <div className="absolute inset-0" style={{ background: background?.overlay?.color}}></div>
          )}
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="mb-4" style={{ 
              fontSize: content?.title?.style?.fontSize, 
              color: content?.title?.style?.color, 
              fontWeight: content?.title?.style?.fontWeight 
          }}>
            {content?.title?.text}
          </h1>
          <p style={{ 
              fontSize: content?.subtitle?.style?.fontSize, 
              color: content?.subtitle?.style?.color, 
          }}>
            {content?.subtitle?.text}
          </p>
          <Button text='Get Started' className="mt-8" />
        </div>
      </section>
  );  
};

export default Hero;