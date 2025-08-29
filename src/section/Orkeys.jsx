import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const data = [
    {
        id: 1,
        title: "Broad Expertise & Versatility",
        description: "Founded by professionals with deep experience across technology, travel, logistics, shipping, software development, federal contracting, BPO management, and tech enablement — enabling them to deliver consistent, high-quality services tailored to diverse business needs."
    },
    {
        id: 2,
        title: "Cost-Effective, Timely, and Efficient Services",
        description: "A startup committed to offering cost-effective, timely solutions that help clients enhance business operations and achieve their objectives with efficiency."
    },
    {
        id: 3,
        title: "Efficiency, Trust & Technology-Driven Execution",
        description: "Our logistics network leverages clear, effective communication, process optimization, and modern tech to maximize freight efficiency and reduce back-haul wastage."
    },
    {
        id: 4,
        title: "Convenience, Affordability & 24/7 Support",
        description: "Positioned as a cutting-edge travel reservation service, offering affordable pricing, safe booking systems, and round-the-clock travel agent support."
    },
]

const Orkeys = () => {
    return (
        <div className='bg-[#163053] py-12 md:py-16'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
                    {/* Left Section */}
                    <div className='lg:w-2/5'>
                        <h2 className='text-[#FED322] mb-2 font-semibold text-lg'>OUR KEY USP'S</h2>
                        <h3 className='text-white text-3xl md:text-4xl font-bold mb-8 lg:mb-0'>Why Choose Us</h3>
                    </div>
                    
                    {/* Right Section */}
                    <div className='lg:w-3/5 space-y-8 md:space-y-10'>
                        {data.map((item) => (
                            <div key={item.id} className=''>
                                <div className='flex items-start'>
                                    <div className='p-1 mr-3 mt-1 md:mr-4 flex-shrink-0'>
                                        <FaArrowRightLong className="text-[#FED322]  " size={22}/>
                                    </div>
                                    <h2 className='text-white font-semibold text-xl md:text-xl'>{item.title}</h2>
                                </div>
                                <p className='text-gray-400 pl-8 md:pl-10 mt-2 md:mt-3 text-sm md:text-sm'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orkeys