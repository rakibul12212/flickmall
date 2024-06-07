import React from "react";
import "./HighlightCategories.css";
import img from '../../../../public/jbl.png'

const HighlightCategories = () => {
  return (
    <div className="pt-10 md:py-28 px-2 md:px-24 ">
      <div className="highlightCategoriesBg ">
        <div className="py-10 px-5 flex flex-col md:flex-row justify-evenly items-center">
          <div>
          <p className=" py-5 text-green-400">Categories</p>
          <p className="text-white font-bold text-4xl sm:text-3xl md:text-6xl">
            <span>Enhance Your </span>
            <br />
            <span>Music Experience</span>
          </p>
          <div className="flex flex-row items-center gap-x-4 py-8">
            <div className=" bg-white py-3 px-4 flex flex-col justify-center rounded-full">
              <p>23</p>
              <p className="text-xs ">Hours</p>
            </div>
            <div className=" bg-white py-3 px-5 flex flex-col justify-center rounded-full">
              <p>05</p>
              <p className="text-xs">Days</p>
            </div>
            <div className=" bg-white py-3 px-5 flex flex-col justify-center rounded-full">
              <p>59</p>
              <p className="text-xs">Mins</p>
            </div>
            <div className=" bg-white py-3 px-5 flex flex-col justify-center rounded-full">
              <p>35</p>
              <p className="text-xs">Secs</p>
            </div>
          </div>
          <div className="pb-8">
            <button className="px-5 py-2 text-white bg-green-500 hover:bg-green-600">
              Buy Now !
            </button>
          </div>
          </div>
          <div>
            <img src={img} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCategories;
