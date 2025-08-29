import React from 'react'
import BPO from '../assets/icon/BPO.png'
import Healthcare from '../assets/icon/Healthcare.png'
import KPO from '../assets/icon/KPO.png'
import Travel from '../assets/icon/Travel.png'
import SoftwareServices from '../assets/icon/SoftwareServices.png'
import Logistics from '../assets/icon/Logistics.png'
import { FaArrowRight } from 'react-icons/fa'




const servicesData = [
  {
    id: 1,
    title: "Logistics",
    description: "Dignisys Limited provides cutting-edge technology offerings apart from providing great and unique customer service and time-saving products.",
    icon: BPO,
    buttonText: "Know more"
  },
  {
    id: 2,
    title: "Travel",
    description: "Dignisys Limited. is providing excellent Domestic and International Holidays travel based on your requirement on planning a honeymoon, solo trip.",
    icon: Logistics,
    buttonText: "Know more"
  },
  {
    id: 3,
    title: "BPO",
    description: " Intelligent Finance Operations Sourcing and Procurement  Supply Chain  Compliance as a Service ",
    icon:BPO ,
    buttonText: "Know more"
  },
  {
    id: 4,
    title: "KPO",
    description: "The scope of KPO business includes preparation of accounts, tax returns, computer aided simulation, engineering and development, financial services.",
    icon: KPO,
    buttonText: "Know more"
  },
  {
    id: 5,
    title: "Healthcare Services",
    description: "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease,",
    icon:Healthcare ,
    buttonText: "Know more"
  },
  {
    id: 6,
    title: "Software Solution",
    description: "The market is booming every day with continuous demand for creative and customised software development.",
    icon: SoftwareServices,
    buttonText: "Know more"
  },
];



const ServiceCard = () => {
  return (
   <div className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {servicesData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#f6f6f6] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col items-start  flex-grow">
                <div className="bg-white rounded-full p-4 shadow-md mb-4">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300">
                  {item.buttonText}
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard ;
