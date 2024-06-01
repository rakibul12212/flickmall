import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <div className="hidden md:block bg-black py-1">
      <div className="flex gap-x-3 justify-center items-center text-white">
        <p className="max-w-[474px] max-h-[18px] text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="#" className="font-semibold text-[14px]">
          <u>shopNow</u>
        </a>
      </div>
    </div>
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 md:px-2">
                <span className="font-bold text-xl">Exclusive</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-4 px-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="/" className="py-4 px-2 text-gray-700 hover:text-gray-900">Contact</a>
            <a href="/" className="py-4 px-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="/" className="py-4 px-2 text-gray-700 hover:text-gray-900">Sign Up</a>
          </div>
          <div className="hidden md:flex items-center space-x-5">
            <div className="flex items-center bg-white rounded border py-[7px] px-[12px]">
              <input
                type="text"
                placeholder="What are you looking ?"
                className="outline-none border-none text-gray-700 rounded"
              />
              <button className="bg-transparent border-none outline-none">
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
                viewBox="0 0 24 24"
                fill="red"
                className="w-6 h-6"
                width="48"
                height="48"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                width="48"
                height="48"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0 2c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm10-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm0 2c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-13.83-6.91l.03.07L6 14.25V21h2v-6.75h8V21h2v-6.75l1.9-5.66c.08-.23.13-.48.13-.75 0-.83-.68-1.5-1.5-1.5H5.5L4.75 4H1V6h2l2.28 6.91zM6 12l1.1-3.4L19 8.27 17.9 12H6z" />
              </svg>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
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
      <div className={`${isOpen ? '' : 'hidden'} mobile-menu`}>
        <ul className="">
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Home</a></li>
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Contact</a></li>
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">About</a></li>
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Cart</a></li>
          <li><a href="/" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Nav;
