import React, { useState } from 'react';

const User = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    return (
        <div className='User'>
             <div className="relative">
      <button
        id="avatarButton"
        className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-300 focus:outline-none"
        onClick={() => setTooltipVisible(!tooltipVisible)}
      >
        <img
          className="h-full w-full rounded-full"
          src="https://i.ibb.co/bgyhtLS/user.jpg"
          alt="Avatar"
        />
      </button>
      {tooltipVisible && (
        <div className="absolute right-0 mt-2 w-40 bg-slate-100 shadow-lg rounded-lg">
          <ul className="p-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white"
              >
                Wishlist
              </a>
            </li>
            <li>
              <a
                href="signin"
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white"
              >
                Sign in
              </a>
            </li>
            
          </ul>
        </div>
      )}
    </div>
        </div>
    );
};

export default User;