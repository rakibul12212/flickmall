import React from "react";
import Container from "../../Component/Ui/Container";
import Feature from "../Home/Feature/Feature";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center gap-16 items-center py-10 md:py-10 px-2 md:px-24">
        <div className="md:w-1/2">
          <p className="font-semibold text-4xl">Our Story</p>
          <div className="pt-10">
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands, and serves
              3 million customers across the region.
            </p>
            <p className="pt-5">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer electronics to household goods.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/SdLV1xs/about-Side-Image.png"
            alt="About Side"
            className="hidden md:block w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-x-2 2xl:gap-x-16 py-1 md:py-20 hidden md:block">
        <div className="flex flex-col justify-center items-center py-5 border-2 p-5 w-60 h-60 hover:bg-red-500 hover:text-white">
          <img
            src="https://i.ibb.co/8bPy6gn/Services-4.png"
            alt=""
            className="h-16 mb-4"
          ></img>
          <p className="text-xl font-bold">10.5k</p>
          <p className="text-center">Sellers active on our site</p>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border-2 p-5 w-60 h-60 hover:bg-red-500 hover:text-white">
          <img
            src="https://i.ibb.co/k03kdG1/Services-1.png"
            alt=""
            className="h-16 mb-4 bg-black rounded-full"
          ></img>
          <p className="text-xl font-bold">33k</p>
          <p className="text-center">Monthly Product Sale</p>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border-2 p-5 w-60 h-60 hover:bg-red-500 hover:text-white">
          <img
            src="https://i.ibb.co/tQgN4HC/Services-2.png"
            alt=""
            className="h-16 mb-4"
          ></img>
          <p className="text-xl font-bold">45.5k</p>
          <p className="text-center">Customers active on site</p>
        </div>
        <div className="flex flex-col justify-center items-center py-5 border-2 p-5 w-60 h-60 hover:bg-red-500 hover:text-white">
          <img
            src="https://i.ibb.co/jyWz9pJ/Services-3.png"
            alt=""
            className="h-16 mb-4"
          ></img>
          <p className="text-xl font-bold">23k</p>
          <p className="text-center">Annual gross sale on site</p>
        </div>
      </div>
      <div className="hidden md:block">
        <Feature></Feature>
      </div>
    </Container>
  );
};

export default About;
