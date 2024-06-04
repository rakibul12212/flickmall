import React from "react";

const categories = [
  {
    imageSrc: "https://i.ibb.co/kMSvJWV/Category-Cell-Phone.png",
    CategoryName: "Phones",
  },

  {
    imageSrc: "https://i.ibb.co/XJjg1BJ/Category-Computer.png",
    CategoryName: "Computers",
  },

  {
    imageSrc: "https://i.ibb.co/mRdLjgk/Category-Smart-Watch.png",
    CategoryName: "SmartWatches",
  },

  {
    imageSrc: "https://i.ibb.co/w4Zn13c/Category-Camera.png",
    CategoryName: "Camera",
  },

  {
    imageSrc: "https://i.ibb.co/JQgB8s6/Category-Headphone.png",
    CategoryName: "HeadPhones",
  },

  {
    imageSrc: "https://i.ibb.co/2yJTxpk/Category-Gamepad.png",
    CategoryName: "Gaming",
  },
];

const Category = () => {
  return (
    <div className="pt-10 md:pt-28 px-2 md:px-24">
      <p className="text-red-500 border-l-8 border-rose-700 ps-3 py-2 ">
        Categories
      </p>

      <p className="font-semibold text-4xl pt-5">Browse By Category</p>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6 gap-4 lg:gap-10 pt-10 justify-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border-2 hover:border-red-500 hover:text-red-500 p-6 w-40 flex flex-col items-center "
            >
              <img
                src={category.imageSrc}
                alt={category.CategoryName}
                className="h-20 transform transition-transform duration-300 ease-in-out hover:scale-110 "
              />
              <p className="mt-2 text-center">{category.CategoryName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
