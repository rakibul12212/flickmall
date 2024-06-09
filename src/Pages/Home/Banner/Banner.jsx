
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
 import img from "../../../../public/iphone.jpg"
 import img1 from "../../../../public/iphone1.jpg"
 import img2 from "../../../../public/iphone2.jpg"


const Banner = () => {
  return (
    <div className="md:ps-[75px] md:pe-[100px]  flex justify-between  ">
      <div className="max-w-[250px] md:pt-2 border-r-2 hidden md:block">
        <div className="flex flex-col items-start px-4  font-semibold">
          <select
            id="category"
            name="category"
            className=" py-2 lg:pb-4 outline-none rounded text-base w-48 bg-white"
          >
            <option value="womans-fashion" className="font-semibold ">
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
            className=" lg:pb-4 outline-none rounded text-base w-48 bg-white"
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
        <div className="flex flex-col items-start px-5">
          <a href="/" className=" lg:pb-4  font-semibold  hover:text-red-500">
            Electronics
          </a>
          <a href="/" className=" lg:pb-4 font-semibold hover:text-red-500">
            Home & Lifestyle
          </a>
          <a href="/" className="lg:pb-4 font-semibold hover:text-red-500">
            Medicine
          </a>
          <a href="/" className="lg:pb-4 font-semibold hover:text-red-500">
            Sports & Outdoor
          </a>
          <a href="/" className="lg:pb-4 font-semibold hover:text-red-500">
            Baby&apos;s & Toys
          </a>
          <a href="/" className="lg:pb-4 font-semibold hover:text-red-500">
            Groceries & Pets
          </a>
          <a href="/" className=" font-semibold hover:text-red-500">
            Health & Beauty
          </a>
        </div>
      </div>
      <div className=" md:pt-5 max-w-[960px] overflow-hidden sm:ps-5 md:ps-5 lg:ps-5">
        <Swiper
           autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img
              src={img}
              className="h-[240px] md:h-[340px] w-[960px]"
            />
            <p className="absolute text-white  text-sm md:font-semibold md:text-2xl top-20 left-5 px-2 md:top-16 md:left-5 md:px-5 ">
              iPhone 14 series
            </p>
            <p className="absolute text-white font-medium text-2xl sm:text-3xl md:text-5xl top-20 left-5 px-2 pt-7  md:top-16 md:left-5 md:px-5 md:pt-10 ">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-white top-40 left-5 px-2 pt-5 md:top-48 md:left-5 md:px-5 md:pt-5  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-xl hover:border-b-3">
                    Shop Now
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" sm:size-6 md:size-8 pt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
          <img
              src={img1}
            className="h-[240px] md:h-[340px] w-[960px]"
            />
          <p className="absolute text-black  text-sm md:font-semibold md:text-2xl top-20 left-5 px-2 md:top-16 md:left-5 md:px-5 ">
              iPhone 14 series
            </p>
            <p className="absolute text-black font-medium text-2xl sm:text-3xl md:text-5xl top-20 left-5 px-2 pt-7  md:top-16 md:left-5 md:px-5 md:pt-10 ">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-black top-40 left-5 px-2 pt-5 md:top-48 md:left-5 md:px-5 md:pt-5  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-xl hover:border-b-3">
                    Shop Now
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" sm:size-6 md:size-8 pt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
          <img
              src={img2}
              className="h-[240px] md:h-[340px] w-[960px]"
            />
           <p className="absolute text-white  text-sm md:font-semibold md:text-2xl top-20 left-5 px-2 md:top-16 md:left-5 md:px-5 ">
              iPhone 14 series
            </p>
            <p className="absolute text-white font-medium text-2xl sm:text-3xl md:text-5xl top-20 left-5 px-2 pt-7  md:top-16 md:left-5 md:px-5 md:pt-10 ">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-white top-40 left-5 px-2 pt-5 md:top-48 md:left-5 md:px-5 md:pt-5  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-xl hover:border-b-3">
                    Shop Now
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" sm:size-6 md:size-8 pt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
