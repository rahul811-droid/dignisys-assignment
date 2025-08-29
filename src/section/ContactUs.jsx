import React from "react";
import connectgirl from "../assets/connectgirl.png";

const ContactUs = () => {
  return (
    <div
      className="relative w-full h-screen "
      style={{ backgroundImage: `url(${connectgirl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container relative z-10  flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-12 ">
        
        {/* Left Text */}
        <div className="md:w-1/2 text-white flex flex-col justify-center md:pl-8 mt-10 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold mt-10 leading-snug">
            Optimize your IT infrastructure - Get a free consultation today!
          </h2>
        
        </div>

        {/* Right Form */}
        <div className="md:w-[40%] w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-10 md:mt-0 mb-10 md:mb-0 ">
          <form className="flex flex-col  ">
            
            <div>
              <label className="block text-sm  text-[#000000]">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-400 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-400 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="w-full border border-gray-400 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                placeholder="Your Country"
                className="w-full border border-gray-400 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-400 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-black  py-3 mb-3 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
