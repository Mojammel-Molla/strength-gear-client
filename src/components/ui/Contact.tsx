import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineLocationOn, MdOutlineMarkEmailRead } from 'react-icons/md';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 mx-auto w-7xl">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            We'd love to hear from you! Feel free to reach out with any
            questions or feedback.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Phone Contact */}
          <div className="flex items-center space-x-4">
            <FaPhone className="size-7 text-gray-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Email Contact */}
          <div className="flex items-center space-x-4">
            <MdOutlineMarkEmailRead className="size-9 text-gray-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">contact@yourcompany.com</p>
            </div>
          </div>

          {/* Address Contact */}
          <div className="flex items-center space-x-4">
            <MdOutlineLocationOn className="size-9 text-gray-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">123 Fitness Avenue, Gym City, USA</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            You can also follow us on our social media channels for updates and
            news. We are available 24/7 to assist you with any queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
