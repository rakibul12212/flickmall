import React from "react";
import Container from "../../Container";

const Footer = () => {
  return (
    <div className="bg-black text-white px-1 md:px-20 2xl:px-20">
      <Container>
        <div className="px-4   pt-10 pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-y-10 gap-x-8">
            {/* Logo & Subscription */}
            <div className="flex flex-col leading-loose">
              <a href="/" className="text-2xl font-semibold hover:text-red-500">
                FlickMall
              </a>
              <p className="pt-5 text-lg font-medium">Subscribe</p>
              <p className="pb-3 text-sm">Get 10% off your first order</p>
              <div className="flex items-center border rounded-md bg-white max-w-xs">
                <input
                  type="text"
                  placeholder="Your email"
                  className="flex-grow px-2 py-2 text-black bg-transparent outline-none"
                />
                <button
                  className="p-2 text-black hover:text-red-500"
                  aria-label="Subscribe"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Support Info */}
            <div className="flex flex-col leading-loose text-sm">
              <p className="text-lg font-medium pb-2">Support</p>
              <p>
                111 Bijoy Sarani,
                <br />
                Dhaka, DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>

            {/* Account Links */}
            <div className="hidden md:flex flex-col leading-loose">
              <p className="text-lg font-medium pb-2">Account</p>
              <a href="#" className="hover:text-red-500">
                My Account
              </a>
              <a href="#" className="hover:text-red-500">
                Login / Register
              </a>
              <a href="#" className="hover:text-red-500">
                Cart
              </a>
              <a href="#" className="hover:text-red-500">
                Wishlist
              </a>
              <a href="#" className="hover:text-red-500">
                Shop
              </a>
            </div>

            {/* Quick Links */}
            <div className="hidden md:flex flex-col leading-loose">
              <p className="text-lg font-medium pb-2">Quick Link</p>
              <a href="#" className="hover:text-red-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500">
                Terms Of Use
              </a>
              <a href="#" className="hover:text-red-500">
                FAQ
              </a>
              <a href="#" className="hover:text-red-500">
                Contact
              </a>
            </div>

            {/* App Download */}
            <div className="flex flex-col leading-loose">
              <p className="text-lg font-medium pb-2 hover:text-red-500 cursor-pointer">
                Download App
              </p>
              <p className="text-xs pb-2">Save $3 with App New User Only</p>
              <div className="pt-2">
                <img
                  src="https://i.ibb.co/02Q5nJf/Qrcode-1.png"
                  alt="QR Code"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
