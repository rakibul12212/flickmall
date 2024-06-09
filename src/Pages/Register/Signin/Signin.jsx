import React from "react";
import Container from "../../../Component/Ui/Container";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Container>
      <div className="px-28 py-10">
        <div className="flex justify-center items-center gap-16 ">
          <div>
            <img
              src="https://i.ibb.co/F6YwCRN/Side-Image.png"
              alt="img"
              className="max-w-full h-[600px] hidden md:block"
            />
          </div>
          <div className="flex flex-col justify-center pr-20">
            <p className="font-semibold text-4xl">Log In to FlickMall</p>
            <p className="py-5">Enter your details below</p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                className="border-b-2 w-[300px] my-5 pb-2 outline-none"
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="border-b-2 w-[300px]  pb-2 outline-none"
              />
              <div className="pt-5 flex justify-between items-center gap-x-4">
                <button className="bg-red-500 text-white hover:bg-red-700 px-6 py-2">
                  Sign in
                </button>
                <a href="signin" className="text-red-500">forget password ?</a>
              </div>
              <div className="pt-5">
                <p>Don't have an account ? <a href="signup" className="text-red-500">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signin;
