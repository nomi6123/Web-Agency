import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Stats from "./Components/Stats/Stats";
import Map from "./Components/Map/Map";

const page = () => {
  return (
    <div className="">
      <Home />
      <About />
      <Work />
      <Portfolio />
      <Stats/>
      <Contact />
      <Map/>
    </div>
  );
};

export default page;
