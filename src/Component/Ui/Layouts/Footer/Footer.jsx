import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 md:py-10 px-2 md:px-20  bg-black text-white">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 2xl:grid-cols-5 justify-evenly gap-y-8 2xl:gap-48 md:justify-items-center ">
        <div className="flex flex-col leading-loose ">
          <a href="/" className="text-2xl font-semibold">
            Exclusive
          </a>
          <a href="#" className="pt-5 text-lg font-medium">
            Subscribe
          </a>
          <a href="#">Get 10% off your first order</a>
        </div>
        <div className="flex flex-col leading-loose">
          <a href="#" className="text-lg font-medium pb-2">
            Support
          </a>
          <a href="#">
            <span>111 Bijoy sarani,</span>
            <br />
            <span>Dhaka, DH 1515, Bangladesh.</span>
          </a>
          <a href="#">exclusive@gmail.com</a>
          <a href="#">+88015-88888-9999</a>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col leading-loose">
            <a href="#" className="text-lg font-medium pb-2">
              Account
            </a>
            <a href="#">My Account</a>
            <a href="#">Login / Register</a>
            <a href="#">Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Shop</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col leading-loose ">
            <a href="#" className="text-lg font-medium pb-2">
              Quick Link
            </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex flex-col leading-loose pb-10">
          <a href="#" className="text-lg font-medium pb-2">
            Download App
          </a>
          <a href="#" className="font-sm text-xs pb-2">
            Save $3 with App New User Only
          </a>
          <div className="flex">
            <div>
              <img src="https://i.ibb.co/02Q5nJf/Qrcode-1.png" alt="qrcode" />
            </div>
            <div className="flex flex-col gap-2">
              <img
                src="https://i.ibb.co/dQr4x3F/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                alt="play store"
              />
              <img
                src="https://i.ibb.co/X8swP7V/AppStore.png"
                alt="app store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
