import React from "react";
import Container from "../../Component/Ui/Container";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <Container>
      <div className="py-10 md:py-20 px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-y-10 md:gap-y-0 gap-x-16">
          <div className="w-full md:w-1/2">
            <div className="border-b-2 pb-5">
              <div className="flex items-center gap-x-4">
                <FiPhoneCall className="text-2xl text-red-500" />
                <p className="font-medium text-lg">Call To Us</p>
              </div>
              <p className="pt-5 pb-2">We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="border-b-2 pt-10 pb-5">
              <div className="flex items-center gap-x-4">
                <HiOutlineMail className="text-2xl text-red-500" />
                <p className="font-medium text-lg">Write To Us</p>
              </div>
              <p className="w-full md:w-3/4 pt-5">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="py-2">Emails: customer@exclusive.com</p>
              <p>Emails: customer@exclusive.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4 py-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name *"
                  required
                  className="border-2 px-3 py-2 bg-slate-100 border-none outline-none rounded w-full md:w-1/3"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email *"
                  required
                  className="border-2 px-3 py-2 bg-slate-100 border-none outline-none rounded w-full md:w-1/3"
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Your Number *"
                  required
                  className="border-2 px-3 py-2 bg-slate-100 border-none outline-none rounded w-full md:w-1/3"
                />
              </div>
            </div>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Your Text"
              className="border-2 w-full px-3 py-2 pb-48 bg-slate-100 border-none outline-none rounded"
            />
            <button className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white flex mt-5">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
