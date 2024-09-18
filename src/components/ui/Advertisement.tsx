import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Advertisement: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Custom Next Arrow Component
  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <AiOutlineRight className="text-white text-xl md:text-2xl" />
      </div>
    );
  }

  // Custom Prev Arrow Component
  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <AiOutlineLeft className="text-white text-xl md:text-2xl" />
      </div>
    );
  }

  return (
    <div className="bg-gray-800 h-8 md:h-16">
      <div className="max-w-full overflow-hidden relative">
        <Slider {...settings}>
          <div className="relative">
            <img
              src="https://via.placeholder.com/1920x100.png?text=Ad+1"
              alt="Ad 1"
              className="w-full h-12 md:h-16 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xs md:text-sm font-semibold">
                Ad 1: Limited Time Offer - Get 10% Off All Equipment!
              </h2>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/1920x100.png?text=Ad+2"
              alt="Ad 2"
              className="w-full h-12 md:h-16 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xs md:text-sm font-semibold">
                Ad 2: Buy One Get One Free on Selected Accessories!
              </h2>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/1920x100.png?text=Ad+3"
              alt="Ad 3"
              className="w-full h-12 md:h-16 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xs md:text-sm font-semibold">
                Ad 3: Free Shipping on Orders Over $50!
              </h2>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Advertisement;
