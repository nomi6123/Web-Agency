"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { FiMenu } from "react-icons/fi"; // Hamburger Icon
import { AiOutlineClose } from "react-icons/ai"; // Close Icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu Handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close Menu Handler
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-[#1D0505] text-white sticky top-0 z-50">
      {/* Main Header Container */}
      <div className="max-w-[1300px] mx-auto p-4 lg:p-6 flex justify-between items-center px-2 lg:px-3">
        {/* Logo */}
        <a href="#home">
          <h2 className="text-white font-bold text-2xl">Webing</h2>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden block">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-3xl text-white" />
            ) : (
              <FiMenu className="text-3xl text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:flex-row flex-col 
           justify-center items-center absolute
            lg:static top-[68px] left-0 w-full lg:w-auto
             bg-[#1D0505] lg:bg-transparent z-40 lg:z-auto lg:gap-9`}
        >
          {/* Links */}
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#work", label: "What We Do" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#contact", label: "Contact Us" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-2 lg:py-0 hover:text-yellow-500 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-lg">{link.label}</span>
            </a>
          ))}

          {/* Icons */}
          {!isMenuOpen && (
            <div className="flex gap-4 mt-4 lg:mt-0 px-4 lg:px-0">
              <FaSearch className="text-[20px] max-lg:hidden cursor-pointer hover:text-yellow-500 transition-colors" />
              <IoIosPerson className="text-[20px] max-lg:hidden cursor-pointer hover:text-yellow-500 transition-colors" />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
