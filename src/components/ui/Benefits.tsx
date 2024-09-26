import React from 'react';
import { benefits } from '../../../public';

const Benefits: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Why Choose Our Products?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mx-auto max-w-7xl md:my-4">
        {benefits.map(benefit => (
          <div
            key={benefit.id}
            className="flex flex-col items-center text-center max-w-lg"
          >
            <img
              src={benefit.imageUrl}
              alt={benefit.altText}
              className="size-80 mb-4"
            />
            <h3 className="font-bold text-xl">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
