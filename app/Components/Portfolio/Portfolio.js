import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full ">
      <div className="max-w-[1300px] mx-auto max-lg:min-h-0 px-4 py-5 w-full flex justify-center  items-center flex-col">
        {/* Header Section */}
        <div className="w-full lg:w-[95%] mb-6 flex flex-col justify-start items-start gap-5 p-4">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="w-12 h-1 bg-yellow-600 md:w-14 max-sm:hidden"></span>
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
              CREATIVE WORKS
            </h2>
            <span className="w-12 h-1 bg-yellow-600 md:w-14 max-sm:hidden"></span>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
            We design and develop cutting-edge, user-focused digital solutions
            that bring your vision to life online. Our team specializes in
            creating dynamic, responsive, and engaging websites tailored to your
            business goals and audience needs.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative w-full lg:w-[95%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
          <Image
            src="/port.png"
            alt="About Us"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
