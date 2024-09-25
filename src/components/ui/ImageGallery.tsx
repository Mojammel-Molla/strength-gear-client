import React from 'react';
import { images } from './../../../public/index';

const ImageGallery: React.FC = () => {
  return (
    <div className="p-5 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8">Image Gallery</h2>
      <div className="columns-2  gap-2 md:gap-5 lg:gap-3 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-6">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
