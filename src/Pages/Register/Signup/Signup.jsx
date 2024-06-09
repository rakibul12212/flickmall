import React from 'react';
import Container from '../../../Component/Ui/Container';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Container>
        <div className="px-28 py-10 ">
          <div className="flex justify-center items-center gap-16 ">
            <div>
              <img
                src="https://i.ibb.co/F6YwCRN/Side-Image.png"
                alt="img"
                className="max-w-full h-[600px] hidden md:block"
              />
            </div>
            <div className="flex flex-col justify-center pr-20">
              <p className="font-semibold text-4xl">Create an account</p>
              <p className="py-5">Enter your details below</p>
              <div>
                <input type="text" name="name" id="name"  placeholder="name"
                  className="border-b-2 w-[300px] outline-none pb-2"/>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="border-b-2 w-[300px] outline-none pb-2 my-5"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="border-b-2 w-[300px] outline-none pb-2"
                />
                <div className="pt-5">
                  <button className="bg-red-500 text-white hover:bg-red-700 w-[300px] py-3 mb-2">
                    Sign Up
                  </button>
                  <button className="bg-transparent hover:bg-red-700  text-black hover:text-white border-2  w-[300px] py-3">
                    <div className='flex justify-center items-center gap-2'><img src="https://i.ibb.co/G7StqsP/Icon-Google.png" alt="" /> <p>Sign Up with google</p></div>
                  </button>
                </div>
                <div className='pt-5'>
                    <p>Already have an account ? <Link to="/signin" className='text-red-500'>Sign in</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Signup;