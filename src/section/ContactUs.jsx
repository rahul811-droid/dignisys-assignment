import React from "react";
import connectgirl from "../assets/connectgirl.png";

const ContactUs = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${connectgirl})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-12 py-8  md:py-20">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center md:pl-8 mt-4 md:mt-0 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug">
            Optimize your IT infrastructure - Get a free consultation today!
          </h2>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-[45%] lg:w-[40%] bg-white rounded-2xl shadow-lg p-5 md:p-6 lg:p-8">
          <form className="flex flex-col ">
            <div className="mb-3">
              <label className="block text-sm text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm text-gray-700">Mobile No</label>
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm text-gray-700">Country</label>
              <input
                type="text"
                placeholder="Your Country"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
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