// Standard libraries
import React from 'react';
// Components
import Button from '../ui/Button';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id='hero-section' }) => {

  return (
     <section
        id={id}
        className="relative py-20 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-2xl text-gray-100">Discover Amazing Features</p>
          <Button text='Get Started' className="mt-8" />
        </div>
      </section>
  );
};

export default Hero;