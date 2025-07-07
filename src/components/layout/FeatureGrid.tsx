// Standard libraries
import React from 'react';
import Image from "next/image";
// Types
import { CMSGridSection } from '@/types/cms';

interface FeatureGridProps {
  section: CMSGridSection
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ section }) => {
  const { layout, items } = section.attributes;

  return (
    <section id='feature-grid' className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

          <div className="grid grid-cols-1" 
            style={{
              gridTemplateColumns: `repeat(${layout?.columns}, 1fr)`,
              gap: layout?.gap,
              padding: layout?.padding
            }}
          >
          
            {items.map((item, idx) => {
              // Define an array of background and text color classes for feature icons
              const bgColors = [
                "bg-blue-100 text-blue-600",
                "bg-green-100 text-green-600",
                "bg-purple-100 text-purple-600",
              ];
              // Select a color class based on the current item's index
              const colorClass = bgColors[idx];
              // Render each feature card with its icon, title, and description
              return (
                <div
                  key={item?.id ?? idx}
                  id={ item?.id }
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className={`${colorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        
                    <Image
                      aria-hidden
                      src={`/${item?.content?.icon}.svg`}
                      alt="File icon"
                      width={36}
                      height={36}
                    /> 
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item?.content?.title}</h3>
                  <p className="text-gray-600">{item?.content?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default FeatureGrid;