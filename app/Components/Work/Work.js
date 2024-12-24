import React from 'react';
import Image from 'next/image';

const Work = () => {
  return (
    <div id="work" className="w-full p-4 max-lg:min-h-0  min-h-[70vh] bg-white flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex justify-center items-center gap-2">
          <span className="w-14 h-1 bg-yellow-600 max-sm:hidden"></span>
          <h2 className="font-bold text-2xl text-center lg:text-4xl">WHAT WE DO</h2>
          <span className="w-14 h-1 bg-yellow-600 max-sm:hidden"></span>
        </div>
        <p className="text-center text-base md:text-lg lg:text-[18px] px-4">
          We specialize in crafting seamless and engaging web solutions, combining innovative designs with cutting-edge technology to enhance user experiences and drive business growth.
        </p>
      </div>

      {/* Icons with curved arrows */}
      <div className="w-full flex justify-center items-center p-6 relative">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {/* Circle 1 */}
          <div className="group flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-800 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-yellow-400">
              <Image src="/d-1.png" alt="Marketing" width={50} height={50} />
            </div>
            <p className="mt-2 text-center text-sm md:text-base font-medium">Marketing</p>
          </div>

          {/* Circle 2 */}
          <div className="group flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-800 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-yellow-400">
              <Image src="/d-2.png" alt="Development" width={50} height={50} />
            </div>
            <p className="mt-2 text-center text-sm md:text-base font-medium">Development</p>
          </div>

          {/* Circle 3 */}
          <div className="group flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-800 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-yellow-400">
              <Image src="/d-3.png" alt="HTML5" width={50} height={50} />
            </div>
            <p className="mt-2 text-center text-sm md:text-base font-medium">HTML5</p>
          </div>

          {/* Circle 4 */}
          <div className="group flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-800 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-yellow-400">
              <Image src="/d-4.png" alt="CSS" width={50} height={50} />
            </div>
            <p className="mt-2 text-center text-sm md:text-base font-medium">CSS</p>
          </div>

          {/* Circle 5 */}
          <div className="group flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-gray-800 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-yellow-400">
              <Image src="/d-5.png" alt="WordPress" width={50} height={50} />
            </div>
            <p className="mt-2 text-center text-sm md:text-base font-medium">WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
