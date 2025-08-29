import React from 'react';
import companysuccbg from '../assets/companysuccbg.png';

const CompanySuccess = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 px-4 sm:py-12">
      <h1 className='text-3xl sm:text-4xl md:text-4xl font-semibold text-[#000000] mb-8 sm:mb-12 md:mb-16'>Company Success</h1>

      <div className="relative w-full flex justify-center items-center max-w-6xl mx-auto">
        <img 
          src={companysuccbg} 
          alt="Company Success Background" 
          className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[50vh] sm:h-[60vh] md:h-[70vh] object-contain"
        />
        
        <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] mb-1 sm:mb-2">200</div>
              <div className="text-[#636363] font-medium text-xs sm:text-sm md:text-base lg:text-lg">Custom Apps</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] mb-1 sm:mb-2">45</div>
              <div className="text-[#636363] font-medium text-xs sm:text-sm md:text-base lg:text-lg">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] mb-1 sm:mb-2">3560</div>
              <div className="text-[#636363] font-medium text-xs sm:text-sm md:text-base lg:text-lg">Hours of Work</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000000] mb-1 sm:mb-2">750</div>
              <div className="text-[#636363] font-medium text-xs sm:text-sm md:text-base lg:text-lg">Development Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySuccess;