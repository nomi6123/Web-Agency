import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="max-w-[1300px] mx-auto mb-5 min-h-[80vh] flex flex-col lg:flex-row justify-center items-center gap-8 p-5">
        {/* Image Section */}
        <div className="relative w-full lg:w-[35%] h-[300px] lg:h-[500px]">
          <Image
            src="/about.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* About Section */}
        <div className="w-full lg:w-[45%] flex flex-col justify-start items-start gap-5 p-4">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="w-14 h-1 bg-yellow-600 max-sm:hidden"></span>
            <h2 className="font-bold text-2xl lg:text-4xl text-center lg:text-left">
              WHO WE ARE?
            </h2>
            <span className="w-14 h-1 bg-yellow-600 max-sm:hidden"></span>
          </div>
          <p className="text-sm lg:text-lg text-center lg:text-left">
            We create innovative and user-centric digital solutions that elevate
            your online presence. Our team is dedicated to crafting exceptional
            web experiences tailored to your business needs.
          </p>
          {/* Button */}
          <button
            className="
            bg-[#353434] text-white text-sm lg:text-lg
            hover:bg-transparent hover:text-[#353434]
            border border-[#353434] rounded-l-[22px] rounded-tr-[22px]
            transition transform duration-300 ease-in-out
            px-5 py-2 lg:px-10 lg:py-2"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
