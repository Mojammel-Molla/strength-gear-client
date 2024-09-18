import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover our journey, mission, and vision.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Company Overview
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Established in 2024, our company has grown from a small startup to a
            global leader in Fitness. We are committed to delivering
            high-quality products and services that meet the evolving needs of
            our customers. With a passionate team and a relentless drive for
            innovation, we strive to create lasting value and impact in every
            project we undertake.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower individuals and businesses through
            innovative solutions and exceptional customer service. We aim to be
            the leading provider of Fitness products, improving the lives of our
            customers and contributing positively to our community.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to revolutionize the Fitness industry by setting new
            standards for excellence and innovation. We envision a future where
            our products and services are recognized globally for their quality,
            reliability, and positive impact on society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
