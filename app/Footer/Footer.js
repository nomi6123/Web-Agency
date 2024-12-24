import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1D0505] p-5">
      <div className="bg-[#1D0505] p-10 md:p-[40px] py-10 w-full mx-auto max-w-[1300px] flex max-xl:flex-wrap justify-center items-center gap-8 text-white">
        {/* About Us Section */}
        <div className="text-white w-full md:w-[100%] lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-bold text-3xl relative  flex bg-gradient-to-r items-center from-blue-500 via-green-500 to-pink-500 bg-clip-text  text-transparent text-center select-auto">WEBING</h2>
          <p>
            We specialize in crafting seamless and engaging web solutions,
            combining innovative designs with cutting-edge technology to
            enhance user experiences and drive business growth.
          </p>
        </div>

        {/* Information Section */}
        <div className="text-white w-full md:w-[100%] lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl relative  flex bg-gradient-to-r items-center from-blue-500 via-green-500 to-pink-500 bg-clip-text  text-transparent text-center select-auto">INFORMATION</h2>
          <p>
            We design and develop cutting-edge, user-focused digital solutions
            that bring your vision to life online. Our team specializes in
            creating dynamic, responsive websites tailored to your business
            goals and audience needs.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex w-full md:w-[100%] lg:w-[20%] px-2 flex-col gap-6">
          <h2 className="font-semibold text-2xl relative  flex bg-gradient-to-r items-center from-blue-500 via-green-500 to-pink-500 bg-clip-text  text-transparent text-center select-auto">Contact Us</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <PiMapPinFill
                className="text-xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Address"
              />
              <h4>Lohare Punjab, Pakistan</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone
                className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Phone"
              />
              <h4>Call: +033229999766</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope
                className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Email"
              />
              <h4>demo@gmail.com</h4>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-white w-full md:w-[100%] lg:w-[25%] px-2 flex flex-col gap-5">
          <h2 className="font-semibold text-2xl relative  flex bg-gradient-to-r items-center from-blue-500 via-green-500 to-pink-500 bg-clip-text  text-transparent text-center select-auto">Newsletter</h2>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-[7px] placeholder:text-gray-700 text-black outline-none pr-5 rounded-md w-full"
            />
            <button
              className="mt-4 w-fit bg-white hover:bg-transparent text-black hover:text-white text-sm md:text-lg border border-white rounded-l-[22px] transition-transform duration-300 ease-in-out rounded-tr-[22px] px-6 md:px-10 py-2 text-nowrap"
            >
              Subscribe
            </button>
            <div className="flex mt-3 items-center gap-4">
              <FaFacebook
                className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Facebook"
              />
              <FaTwitter
                className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Twitter"
              />
              <FaYoutube
                className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="YouTube"
              />
              <FaInstagram
                className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110"
                aria-label="Instagram"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%] m-auto py-0 bg-white">
        <hr />
      </div>

      <div className="flex w-full items-center justify-center">
        <h1 className="relative py-4 flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-green-500 bg-clip-text text-xl font-bold text-transparent text-center select-auto">
          © {currentYear} All Rights Reserved. Designed by Frontend Developer
          Muhammad Noman.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
