import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="md:px-[80px] flex justify-between  ">
      <div className="max-w-[300px] md:pt-4 border-r-2 hidden md:block">
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
      <div className="max-w-full max-h-[500px] md:pt-5 overflow-hidden sm:ps-5 md:ps-5 lg:ps-10">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img
              src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/09/22190343/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907-1-scaled.jpg"
              alt="iPhone 14 Series"
              className="h-full"
            />
            <p className="absolute text-white font-medium text-xl md:font-semibold md:text-4xl top-10 left-5 px-2 md:top-28 md:left-10 md:px-10 ">
              iPhone 14 series
            </p>
            <p className="absolute text-white top-14 left-5 px-2 pt-5  font-bold text-4xl sm:text-3xl md:top-36 md:left-10 md:px-10 md:pt-10 md:text-6xl">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-white top-36 left-5 px-2 pt-5 md:top-64 md:left-10 md:px-10 md:pt-20  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-2xl hover:border-b-3">
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
              src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/09/22190343/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907-1-scaled.jpg"
              alt="iPhone 14 Series"
              className="h-full"
            />
            <p className="absolute text-white font-medium text-xl md:font-semibold md:text-4xl top-10 left-5 px-2 md:top-28 md:left-10 md:px-10 ">
              iPhone 14 series
            </p>
            <p className="absolute text-white top-14 left-5 px-2 pt-5  font-bold text-4xl sm:text-3xl md:top-36 md:left-10 md:px-10 md:pt-10 md:text-6xl">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-white top-36 left-5 px-2 pt-5 md:top-64 md:left-10 md:px-10 md:pt-20  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-2xl hover:border-b-3">
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
              src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/09/22190343/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907-1-scaled.jpg"
              alt="iPhone 14 Series"
              className="h-full"
            />
            <p className="absolute text-white font-medium text-xl md:font-semibold md:text-4xl top-10 left-5 px-2 md:top-28 md:left-10 md:px-10 ">
              iPhone 14 series
            </p>
            <p className="absolute text-white top-14 left-5 px-2 pt-5  font-bold text-4xl sm:text-3xl md:top-36 md:left-10 md:px-10 md:pt-10 md:text-6xl">
              Up to 10% <br /> <span>off Voucher</span>
            </p>
            <div className="absolute text-white top-36 left-5 px-2 pt-5 md:top-64 md:left-10 md:px-10 md:pt-20  flex justify-center items-center gap-2 ">
              <button className=" flex items-center gap-2">
                <div>
                  <p className="font-normal text-sm md:text-2xl hover:border-b-3">
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
