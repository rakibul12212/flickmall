import React from "react";
import Container from "../../Container";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
      <div className="pt-10 md:py-10 px-2 md:ps-20 2xl:ps-32 md:pe-28 text-white">
  <div className="grid sm:grid-cols-2 md:grid-cols-5 2xl:grid-cols-5 justify-evenly gap-y-8 2xl:gap-28 md:justify-items-center">
    <div className="flex flex-col leading-loose">
      <a href="/" className="text-2xl font-semibold hover:text-red-500">Exclusive</a>
      <a href="#" className="pt-5 text-lg font-medium">Subscribe</a>
      <p className="pb-5">Get 10% off your first order</p>
      <div className="flex items-center rounded border py-[5px] px-[12px] bg-transparent">
        <input
          type="text"
          placeholder="subscribe"
          className="outline-none border-none text-gray-700 rounded bg-transparent max-w-[100px]"
        />
        <button className="bg-transparent border-none  outline-none ps-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-6 hover:text-red-500"
          >
            <path d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5"/>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex flex-col leading-loose">
      <p className="text-lg font-medium pb-2">Support</p>
      <p>
        <span>111 Bijoy Sarani,</span>
        <br />
        <span>Dhaka, DH 1515, Bangladesh.</span>
      </p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>
    <div className="hidden md:block">
      <div className="flex flex-col leading-loose">
        <a href="#" className="text-lg font-medium pb-2">Account</a>
        <a href="#" className="hover:text-red-500">My Account</a>
        <a href="#" className="hover:text-red-500">Login / Register</a>
        <a href="#" className="hover:text-red-500">Cart</a>
        <a href="#" className="hover:text-red-500">Wishlist</a>
        <a href="#" className="hover:text-red-500">Shop</a>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="flex flex-col leading-loose">
        <a href="#" className="text-lg font-medium pb-2">Quick Link</a>
        <a href="#" className="hover:text-red-500">Privacy Policy</a>
        <a href="#" className="hover:text-red-500">Terms Of Use</a>
        <a href="#" className="hover:text-red-500">FAQ</a>
        <a href="#" className="hover:text-red-500">Contact</a>
      </div>
    </div>
    <div className="flex flex-col leading-loose pb-10">
      <a href="#" className="text-lg font-medium pb-2 hover:text-red-500">Download App</a>
      <p className="text-xs pb-2">Save $3 with App New User Only</p>
      <div className="flex">
        <div>
          <img src="https://i.ibb.co/02Q5nJf/Qrcode-1.png" alt="QR code" />
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://i.ibb.co/dQr4x3F/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
            alt="Google Play Store"
          />
          <img
            src="https://i.ibb.co/X8swP7V/AppStore.png"
            alt="App Store"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </Container>
    </div>
  );
};

export default Footer;
