import "./Banner.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="px-[80px] flex justify-between  ">
      <div className="max-w-[300px] pt-4 border-r-2">
        <div className="flex flex-col items-start px-4  font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 py-4 md:pb-4 lg:pb-8 outline-none rounded text-base w-64 bg-white"
          >
            <option value="womans-fashion" className="font-semibold">
              Womans Fashion
            </option>
            <option value="item-1" className="font-semibold">
              Item-1
            </option>
            <option value="item-2" className="font-semibold">
              Item-2
            </option>
          </select>
        </div>
        <div className="flex flex-col items-start px-4 font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 md:pb-4 lg:pb-8 outline-none rounded text-base w-64 bg-white"
          >
            <option value="mans-fashion" className="font-semibold">
              Mans Fashion
            </option>
            <option value="item-1" className="font-semibold">
              Item-1
            </option>
            <option value="item-2" className="font-semibold">
              Item-2
            </option>
          </select>
        </div>
        <div className="flex flex-col items-start px-7">
          <a href="/" className="md:pb-4 lg:pb-8  font-semibold">
            Electronics
          </a>
          <a href="/" className="md:pb-4 lg:pb-8 font-semibold">
            Home & Lifestyle
          </a>
          <a href="/" className="md:pb-4 lg:pb-8 font-semibold">
            Medicine
          </a>
          <a href="/" className="md:pb-4 lg:pb-8 font-semibold">
            Sports & Outdoor
          </a>
          <a href="/" className="md:pb-4 lg:pb-8 font-semibold">
            Baby&apos;s & Toys
          </a>
          <a href="/" className="md:pb-4 lg:pb-8 font-semibold">
            Groceries & Pets
          </a>
          <a href="/" className=" font-semibold">
            Health & Beauty
          </a>
        </div>
      </div>
      <div className="max-w-full max-h-[500px] pt-5 overflow-hidden sm:ps-5 md:ps-5 lg:ps-10">
        <Swiper
          pagination={{
            dynamicBullets: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img
              src="https://appletoolbox.com/wp-content/uploads/2020/10/iPhone-12-Pro-Max-Camera-System.png"
              alt="iPhone 14 Series"
            />
            <p className="absolute md:top-20 md:left-10 md:px-10 text-white  font-semibold text-4xl ">
              iPhone 14 series
            </p>
            <p className="absolute md:top-28 md:left-10 md:px-10 md:pt-10 text-white  font-bold text-6xl">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute md:top-56 md:left-10 md:px-10 md:pt-20 text-white flex justify-center items-center gap-2">
              <a href="/" className="font-medium text-2xl hover:border-b-2">Shop Now</a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://media.glamour.com/photos/65cce0375ea0c25e5b06764f/master/w_2560%2Cc_limit/spring%25202024%2520fashion%2520trends.jpg"
              alt=""
            />
             <p className="absolute md:top-20 md:left-10 md:px-10 text-black  font-semibold text-4xl ">
              Womans Fashion
            </p>
            <p className="absolute md:top-28 md:left-10 md:px-10 md:pt-10 text-black  font-bold text-6xl">
              Up to 24% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute md:top-56 md:left-10 md:px-10 md:pt-20 text-black flex justify-center items-center gap-2">
              <a href="/" className="font-medium text-2xl hover:border-b-2 hover:border-black">Shop Now</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/295/652/non_2x/successful-businessman-in-leather-jacket-observing-documents-outside-office-empty-space-for-copy-free-photo.jpg"
              alt=""
            />
             <p className="absolute md:top-20 md:left-10 md:px-10 text-gray-700  font-semibold text-4xl ">
              Mans Fashion
            </p>
            <p className="absolute md:top-28 md:left-10 md:px-10 md:pt-10 text-white  font-bold text-6xl">
              Up to 15% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute md:top-56 md:left-10 md:px-10 md:pt-20 text-white flex justify-center items-center gap-2">
              <a href="/" className="font-medium text-2xl hover:border-b-2">Shop Now</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="container px-5 md:px-20 flex border">
      
      <div className="pt-5 border-r-2 ">
        <div className="flex flex-col items-start px-4 font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 py-4 outline-none rounded text-base w-64 bg-white"
          >
            <option value="womans-fashion" className="font-semibold">
              Womans Fashion
            </option>
            <option value="item-1" className="font-semibold">
              Item-1
            </option>
            <option value="item-2" className="font-semibold">
              Item-2
            </option>
          </select>
        </div>
        <div className="flex flex-col items-start px-4 font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 pb-4 outline-none rounded text-base w-64 bg-white"
          >
            <option value="mans-fashion" className="font-semibold">
              Mans Fashion
            </option>
            <option value="item-1" className="font-semibold">
              Item-1
            </option>
            <option value="item-2" className="font-semibold">
              Item-2
            </option>
          </select>
        </div>
        <div className="flex flex-col items-start px-7">
          <a href="/" className="pb-4 font-semibold">
            Electronics
          </a>
          <a href="/" className="pb-4 font-semibold">
            Home & Lifestyle
          </a>
          <a href="/" className="pb-4 font-semibold">
            Medicine
          </a>
          <a href="/" className="pb-4 font-semibold">
            Sports & Outdoor
          </a>
          <a href="/" className="pb-4 font-semibold">
            Baby&apos;s & Toys
          </a>
          <a href="/" className="pb-4 font-semibold">
            Groceries & Pets
          </a>
          <a href="/" className="pb-4 font-semibold">
            Health & Beauty
          </a>
        </div>
      </div>
      <div className="ps-10 border w-full"> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, odit vero. Odio ab autem, voluptatem cum aliquid velit doloremque assumenda ea, tempora accusamus reprehenderit? Pariatur.</p>
      </div>
    
  </div> */
}
