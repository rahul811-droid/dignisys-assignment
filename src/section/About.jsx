import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className='container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16'>
      <header className='text-[#F9A826] font-semibold text-lg  mb-4 md:mb-6 px-2 md:px-4'>
        ABOUT US
      </header>

      <div className='flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12'>
        {/* Left Column */}
        <div className='w-full lg:w-1/2 p-4 md:p-6 lg:p-8'>
          <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 leading-tight text-[#000000]'>
            Dignisys is a start-up venture by a team of investors and professionals with multitude of experience.
          </h1>
          <div className='overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
            <img 
              src={about} 
              alt="Dignisys team" 
              className='w-full h-auto object-cover'
              loading='lazy'
            />
          </div>
        </div>
        
        {/* Right Column */}
        <div className='w-full lg:w-1/2 flex flex-col p-2 md:p-8'>
          <p className='text-base md:text-lg mb-6 md:mb-8 lg:mb-12 leading-relaxed  p-4'>
            Experience in technology, travel, logistics, shipping, software development, federal contracting, BPO management and technology enablers. 
          </p>
          <p className='text-base md:text-lg leading-relaxed  p-2 md:p-4'>
            Using this vast pool of knowledge and experience Dignisys has the skills and backing to deliver outstanding and consistent services to our business partners and clients, enabling them to expand their business and maximize their efficiencies to achieve their organizational mission & goals. We say its start of something big and you are welcome to join us in our journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;