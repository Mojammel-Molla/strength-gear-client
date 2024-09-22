import React from 'react';
import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'John has over 20 years of experience in the fitness industry and is passionate about helping people achieve their health goals.',
    image: 'https://source.unsplash.com/random/200x200?person1', // Example image, replace with actual
  },
  {
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    bio: 'Jane specializes in strategic marketing and branding, ensuring the company’s products are always at the forefront of the industry.',
    image: 'https://source.unsplash.com/random/200x200?person2',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Trainer',
    bio: 'Michael is a certified fitness trainer with a passion for building personalized workout plans and ensuring top-notch customer satisfaction.',
    image: 'https://source.unsplash.com/random/200x200?person3',
  },
  // Add more team members as needed
];

const Team: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mt-4">
            Introducing the key people who make everything happen.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map(member => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {member.name}
              </h3>
              <p className="text-center text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
