import React from "react";

const NewArrival = () => {
  return (
    <div className="pt-10 md:pt-28 px-2 md:px-24  ">
      <p className="text-red-500 border-l-8 border-rose-700 ps-3 py-2">
        Our Products
      </p>
      <div className="flex flex-col md:flex-row  md:items-center gap-y-5 md:gap-x-16  py-5">
        <div>
          <p className="font-semibold text-4xl">Explore Our Products </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4">
        <div className="md:col-span-2 md:row-span-4">
          <img
            src="https://i.ibb.co/CJJYLxF/Frame-684.png"
            alt=""
            className="w-full h-[300px] md:h-[600px]  2xl:md:h-[800px]"
          />
        </div>

        <div className="md:col-span-2 md:row-span-1">
          <img
            src="https://i.ibb.co/GHfmVtg/Frame-685.png"
            alt=""
            className="w-full h-[300px] 2xl:md:h-[500px]"
          />
        </div>

        <div className="md:col-span-1 md:row-span-1">
          <img
            src="https://i.ibb.co/fvfKJFZ/Frame-686.png"
            alt=""
            className="w-full h-[285px] "
          />
        </div>

        <div className="md:col-span-1 md:row-span-1">
          <img
            src="https://i.ibb.co/HB7tKH6/Frame-687.png"
            alt=""
            className="w-full h-[285px] "
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
