import React from 'react';
import Hero from '../components/ui/Hero';
import ImageGallery from '../components/ui/ImageGallery';
import AllProducts from '../components/ui/AllProducts';
import Benefits from '../components/ui/Benefits';

const Home: React.FC = () => {
  return (
    <>
      <title> Home</title>
      <Hero />
      <AllProducts />
      <ImageGallery />
      <Benefits />
    </>
  );
};

export default Home;
