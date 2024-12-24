"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 35,
    text: "Projects Delivered",
  },
  {
    num: 33,
    text: "Satisfied Customers",
  },
  {
    num: 40,
    text: "Cups of Coffee",
  },
];

const Stats = () => {
  return (
    <div className="w-full bg-[url(/target-bg.jpg)] bg-cover bg-center mb-4 mt-4">
      <div className="max-w-[1300px] mx-auto h-full p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-md"
            >
              <CountUp
                end={item.num}
                duration={5}
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
              />
              <p className="text-sm sm:text-lg md:text-xl mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
