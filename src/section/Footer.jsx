import React from 'react';
import compnylogo from '../assets/compnylogo.png';
import { SlEnvolope } from 'react-icons/sl';
import { IoCallOutline } from 'react-icons/io5';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo at top */}
        <img src={compnylogo} alt="Company Logo" className="h-12 mb-6 md:mb-8 mx-auto md:mx-0" />

        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
          
          {/* Important Links */}
          <div className="md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Product Engineering</li>
              <li>About Us</li>
              <li>Mission & Vision</li>
              <li>Leadership Team</li>
              <li>Career With Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Logistics</li>
              <li>Travel</li>
              <li>BPO</li>
              <li>KPO</li>
              <li>Healthcare</li>
              <li>Software Solution</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="md:w-1/5">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Management</li>
              <li>Terms Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="md:w-2/7">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            
            <div className="mb-5">
              <h4 className="font-medium text-sm">USA</h4>
              <p className="text-sm mt-1">Digrisys, Inc.</p>
              <p className="text-sm">@ The Green STE R, Dover, DE 19901</p>
              <div className="flex gap-2 mt-1">
                <SlEnvolope color='#F59E0B' size={24} className='border border-gray-400 rounded-full p-1 ' />
                <p className="text-sm">contact@digrisys.com</p>
              <IoCallOutline color='#F59E0B' size={24} className='border border-gray-400 rounded-full p-1 '/>
                
              <p className="text-sm mt-1">+1 (512) 817-0605</p>

              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-sm">INDIA</h4>
              <p className="text-sm mt-1">Digrisys Limited</p>
              <p className="text-sm">A.-r.U., Tower A, Research Business Tower, Sector - 66,</p>
              <p className="text-sm">Mvtail ROODS, FUJUBB</p>
               <div className="flex gap-2 mt-1">
                <SlEnvolope color='#F59E0B' size={24} className='border border-gray-400 rounded-full p-1 ' />
                <p className="text-sm">contact@digrisys.com</p>
              <IoCallOutline color='#F59E0B' size={24} className='border border-gray-400 rounded-full p-1 '/>
                
              <p className="text-sm mt-1">+1 (512) 817-0605</p>

              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-300" />
        
        {/* Copyright */}
        <div className="flex justify-between">
          <p className="text-sm">
            © Copyright 2021-2022. All Rights Reserved
          </p>
          <ul className='flex gap-5 float-right'>
            <li><FaLinkedin /></li>
            <li><FaFacebook  /></li>
            <li><FaXTwitter /></li>
          </ul>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;