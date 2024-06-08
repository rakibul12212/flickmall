import React from "react";

const NewArrival = () => {
  return (
    <div className="pt-10 md:pt-28 px-2 md:px-24  ">
      <p className="text-red-500 border-l-8 border-rose-700 ps-3 py-2">
        Featured
      </p>
      <div className="flex flex-col md:flex-row  md:items-center gap-y-5 md:gap-x-16  py-5">
        <div>
          <p className="font-semibold text-4xl">New Arrival</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 pt-10">
        <div className="md:col-span-2 md:row-span-4 relative">
          <img
            src="https://i.ibb.co/CJJYLxF/Frame-684.png"
            alt=""
            className="w-full h-[300px] md:h-[600px]  2xl:md:h-[600px] "
          />
          <div className="absolute top-[100px] md:top-[450px] left-10 right-0">
            <p className="text-white font-semibold text-lg li">PlayStation 5</p>
            <p className="text-white text-xs  py-2 max-w-56 ">Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="text-white hover:border-b-2">Shop now</a>
          </div>
        </div>

        <div className="md:col-span-2 md:row-span-1 relative">
          <img
            src="https://i.ibb.co/GHfmVtg/Frame-685.png"
            alt=""
            className="w-full h-[300px] "
          />
          <div className="absolute top-[100px] left-10 right-0">
            <p className="text-white font-semibold text-lg li">Women’s Collections</p>
            <p className="text-white text-xs  py-2 max-w-56 ">Featured woman collections that give you another vibe.</p>
            <a href="#" className="text-white hover:border-b-2">Shop now</a>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 relative">
          <img
            src="https://i.ibb.co/fvfKJFZ/Frame-686.png"
            alt=""
            className="w-full h-[285px]  "
          />
          <div className="absolute top-[100px] left-10 right-0">
            <p className="text-white font-semibold text-lg li">Speakers</p>
            <p className="text-white text-xs  py-2 max-w-56 ">Amazon wireless speakers.</p>
            <a href="#" className="text-white hover:border-b-2">Shop now</a>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 relative">
          <img
            src="https://i.ibb.co/HB7tKH6/Frame-687.png"
            alt=""
            className="w-full h-[285px] "
          />
          <div className="absolute top-[100px] left-10 right-0">
            <p className="text-white font-semibold text-lg li">Perfume</p>
            <p className="text-white text-xs  py-2 max-w-56 ">GUCCI INTENSE OUD EDP.</p>
            <a href="#" className="text-white hover:border-b-2">Shop now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
