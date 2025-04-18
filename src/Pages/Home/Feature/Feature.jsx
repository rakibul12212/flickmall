import React from "react";

const Feature = () => {
  return (
    <div className=" py-5 md:py-16 px-2 md:px-24  ">
      <div className="flex flex-col md:flex-row justify-evenly items-center ">
        <div className="flex flex-col justify-center items-center py-5">
          <img
            src="https://i.ibb.co/vmkjTyC/Services.png"
            alt="img-delivery"
            className="w-20"
          />
          <p className="pt-5 font-bold">FREE AND FAST DELIVERY</p>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-center items-center py-5">
          <img
            src="https://i.ibb.co/7Xww8Hy/Services1.png"
            alt="img-CUSTOMER SERVICE"
            className="w-20"
          />
          <p className="pt-5 font-bold">24/7 CUSTOMER SERVICE</p>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col justify-center items-center py-5">
          <img
            src="https://i.ibb.co/8DNjVPw/Services2.png"
            alt="img-MONEY BACK"
            className="w-20"
          />
          <p className="pt-5 font-bold">MONEY BACK GUARANTEE</p>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
