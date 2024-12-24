"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id='home'>
      <div className='w-full min-h-screen bg-[url("/hero-bg.jpg")] bg-center bg-cover flex justify-center items-center'>
        <div className='p-5 w-full max-w-4xl'>
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className='text-center text-white flex flex-col items-center gap-10 px-4 md:px-10'>
              <h2 className='text-3xl md:text-5xl mb-2'>Welcome to</h2>
              <h2 className='text-4xl md:text-7xl uppercase mb-5'>Web Agency</h2>
              <p className='text-base md:text-lg mb-5'>We craft beautiful and functional websites to elevate your online presence.</p>
              <button className='bg-white hover:bg-transparent text-black
               hover:text-white text-sm md:text-lg border border-white rounded-l-[22px] transition transform
               duration-300 ease-in-out
                rounded-tr-[22px] px-6 md:px-10 py-2 text-nowrap'>
                Contact Us
              </button>
            </div>

            {/* Slide 2 */}
            <div className='text-center text-white flex flex-col items-center gap-4 px-4 md:px-10'>
              <h2 className='text-3xl md:text-5xl mb-2'>Your Partner in</h2>
              <h2 className='text-4xl md:text-7xl uppercase mb-5'>Digital Growth</h2>
              <p className='text-base md:text-lg mb-5'>We provide cutting-edge solutions to help your business thrive online.</p>
              <button className='bg-white hover:bg-transparent transition transform
               duration-300 ease-in-out
               text-black hover:text-white text-sm md:text-lg border border-white rounded-l-[22px]
                rounded-tr-[22px] px-6 md:px-10 py-2 text-nowrap'>
                Learn More
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
