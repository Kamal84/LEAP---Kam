// Standard libraries
import React from 'react';
import Image from "next/image";

interface FeatureGridProps {
  id?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ id='feature-grid' }) => {

  return (
    <section id={id} className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              id="feature-1"
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
    
                <Image
                    aria-hidden
                    src="/icon-fast-performance.svg"
                    alt="File icon"
                    width={36}
                    height={36}
                    /> 
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">Lightning quick loading times</p>
            </div>

            <div
              id="feature-2"
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                    aria-hidden
                    src="/icon-secure-platform.svg"
                    alt="File icon"
                    width={36}
                    height={36}
                    /> 
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                    aria-hidden
                    src="/icon-scalable-solution.svg"
                    alt="File icon"
                    width={36}
                    height={36}
                    /> 
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solution</h3>
              <p className="text-gray-600">Grows with your business needs</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeatureGrid;