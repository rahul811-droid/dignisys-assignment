import React, { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { SlEnvolope } from 'react-icons/sl';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import compnylogo from '../assets/compnylogo.png';
import herosection from '../assets/herosection.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      {/* Address/Contact Section - Hidden on mobile */}
      <div className='bg-white py-3 hidden md:block'>
        <div className='container mx-auto px-4'>
          <ul className='flex justify-end items-center gap-3 lg:gap-5 text-xs lg:text-sm'>
            <li className='flex justify-center items-center gap-1 lg:gap-2'>
              <SlEnvolope className='text-yellow-500 text-sm lg:text-base'/>
              <span className='text-gray-800'>contact@dignisys.com</span>
            </li>
            <li className='flex justify-center items-center gap-1 lg:gap-2'>
              <IoCallOutline className='text-yellow-500 text-sm lg:text-base'/>
              <span className='text-gray-800'>US: +1 (512) 817-0605</span>
            </li>
            <li>
              <span className='text-gray-800'>IN: +1 (845) 213-1121</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Hero Section with Full-Width Background Image */}
      <div className="relative w-full">
        {/* Background Image Container */}
        <div 
          className="relative min-h-screen w-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${herosection})` }}
        >
          <div className='container mx-auto px-4 relative z-10'>
            <div className='flex justify-between items-center py-4'>
              <img src={compnylogo} alt="Company Logo" className='h-16 w-32 md:h-20 md:w-40 object-contain'/>
              
              <nav className='hidden lg:block'>
                <ul className='flex gap-6 xl:gap-8 text-black text-sm xl:text-base'>
                  <li className='hover:text-yellow-500 cursor-pointer transition'>Home</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition'>About Us</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition'>Services</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition'>Industries</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition'>Career</li>
                  <li className='text-black'>
                    <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 border-none rounded-full transition flex gap-2 justify-center items-center'>
                      Contact Us  <span><FaArrowRight /></span>
                    </button>
                  </li>
                </ul> 
              </nav>

              <button 
                className="lg:hidden text-black text-2xl"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white rounded-lg shadow-lg p-4 absolute top-full left-4 right-4 z-20">
                <ul className='flex flex-col gap-4 text-black'>
                  <li className='hover:text-yellow-500 cursor-pointer transition py-2'>Home</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition py-2'>About Us</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition py-2'>Services</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition py-2'>Industries</li>
                  <li className='hover:text-yellow-500 cursor-pointer transition py-2'>Career</li>
                  <li className='pt-2'>
                    <button className='bg-yellow-500 hover:bg-yellow-600 w-full px-4 py-2 border-none rounded-full transition flex gap-2 justify-center items-center'>
                      Contact Us  <span><FaArrowRight /></span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Hero Text Content */}
          <div className="container mx-auto px-4 relative z-10 flex items-center pt-10 md:pt-20 lg:pt-0 lg:min-h-[80vh]">
            <div className="max-w-2xl text-black mt-8 md:mt-16 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Accelerating Your Business with Integrated Tech, BPM & Logistics Solutions.
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                Dignisys bridges software development, process optimization, travel, logistics, BPO/KPO, and healthcare services—empowering
                 organizations to operate smarter, scale faster, and embrace an AI-ready future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full transition mb-10 md:mb-0">
                  Get In Touch <span><FaArrowRight /></span>
                </button>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;