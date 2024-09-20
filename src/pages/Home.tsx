import React from 'react';
import Hero from '../components/ui/Hero';
import ImageGallery from '../components/ui/ImageGallery';
import AllProducts from '../components/ui/AllProducts';

const Home: React.FC = () => {
  return (
    <>
      <title> Home</title>
      <Hero />
      <AllProducts />
      <ImageGallery />
    </>
  );
};

export default Home;
