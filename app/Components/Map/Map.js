"use client";
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Map = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[50vh]   '>
      {/* Header Section */}
      <div className='w-full lg:w-[50%] mb-6 flex flex-col justify-center items-center gap-4 px-4'>
        <div className='flex justify-center items-center gap-2 flex-wrap'>
          <span className='w-14 h-1 bg-yellow-600 hidden sm:block'></span>
          <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-center'>
            Directions to My Home
          </h2>
          <span className='w-14 h-1 bg-yellow-600 hidden sm:block'></span>
        </div>
      </div>

      {/* Slider Section */}
      <div className='w-[90%] sm:w-[90%] mb-8 '>
        <Slider {...sliderSettings}>
          <div>
            <Image
              src='/map-img.png'
              alt='Map Image 1'
              width={1200}
              height={800}
              className='w-full m-auto  rounded-md bg-gray-300
              '
            />
          </div>
          <div>
            <Image
              src='/map-img.png'
              alt='Map Image 2'
              width={1200}
              height={800}
              className='w-full rounded-md  bg-gray-300'
            />
          </div>
          <div>
            <Image
              src='/map-img.png'
              alt='Map Image 3'
              width={1200}
              height={800}
              className='w-full rounded-md bg-gray-300'
            />
          </div>
        </Slider>
      </div>

  
    </div>
  );
};

export default Map;
