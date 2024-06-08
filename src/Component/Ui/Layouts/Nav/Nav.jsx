import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import User from "../../User/User";
import Container from "../../Container";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 border-b-2">
      <div className="hidden md:block bg-black py-1">
        <div className="flex gap-x-3 justify-center items-center text-white">
          <p className="text-[14px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="font-semibold text-[14px] hover:text-red-500">
            <u>shopNow</u>
          </a>
        </div>
      </div>
      <Container>
        {" "}
        <nav className="bg-white shadow-sm">
          <div className="mx-auto px-2">
            <div className="flex justify-between md:px-20 font-semibold">
              <div className="flex items-center">
                <div>
                  <a
                    href="/"
                    className="flex items-center py-2 md:py-4 md:px-2"
                  >
                    <span className="font-bold text-xl">Exclusive</span>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-7">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-700 hover:border-b-4 hover:border-red-500"
                >
                  Home
                </Link>
                <Link
                  to="contact"
                  className="py-4 px-2 text-gray-700 hover:border-b-4 hover:border-red-500"
                >
                  Contact
                </Link>
                <Link
                  to="about"
                  className="py-4 px-2 text-gray-700 hover:border-b-4 hover:border-red-500"
                >
                  About
                </Link>
                <Link
                  to="signin"
                  className="py-4 px-2 text-gray-700 hover:border-b-4 hover:border-red-500"
                >
                  Sign in
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-5">
                <div className="flex items-center rounded border py-[7px] px-[12px] bg-slate-100">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="outline-none border-none text-gray-700 rounded bg-slate-100"
                  />
                  <button className="bg-transparent border-none outline-none ps-5">
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <User />
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="outline-none mobile-menu-button"
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown for Mobile */}
          <div className="md:hidden">
            {isOpen && (
              <div className="absolute top-110 left-0 w-full bg-slate-700 z-10">
                <div className="p-4">
                  <Link
                    to="about"
                    className="block text-white px-3 py-2 rounded-md hover:text-red-500"
                  >
                    About
                  </Link>
                  <Link
                    to="contact"
                    className="block text-white px-3 py-2 rounded-md hover:text-red-500"
                  >
                    Contact
                  </Link>

                  <Link
                    to="/"
                    className="block text-white px-3 py-2 rounded-md hover:text-red-500"
                  >
                    Cart
                  </Link>
                  <Link
                    to="/"
                    className="block text-white px-3 py-2 rounded-md hover:text-red-500"
                  >
                    WishList
                  </Link>
                  <Link
                    to="signin"
                    className="block text-white px-3 py-2 rounded-md hover:text-red-500"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Nav;
