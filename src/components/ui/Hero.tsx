import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[93vh] flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://shop.lifefitness.com/cdn/shop/files/HOMEPAGE_clubseriesplus-cardio_021224.jpg?v=1707766353&width=2800)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
      {/* Overlay for better contrast */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Welcome to Our Strength Gear
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 mb-8">
          Get the best equipment and accessories to keep you fit, healthy, and
          strong.
        </p>
        <a
          href="#shop-now"
          className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
