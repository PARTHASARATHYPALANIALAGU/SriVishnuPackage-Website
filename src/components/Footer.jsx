import React from "react";
import { ChevronUp } from "lucide-react";
import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <img
                src={Logo} 
                alt="Sri Vishnu Package Logo"
                className="h-10 w-10 object-contain gap-2"
                          />
            <h3 className="text-xl font-semibold mb-4">Sri Vishnu Package</h3>
            <p className="text-gray-400 mb-4">
              Manufacturing high-quality cardboard packaging solutions since 2015. Dedicated to sustainable practices and customer satisfaction.
            </p>
            <p className="text-gray-400">
              FSC Certified Company
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-300 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary-300 transition-colors">Products</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary-300 transition-colors">Process</a></li>
              <li><a href="#machineries" className="text-gray-400 hover:text-primary-300 transition-colors">Machinery</a></li>
              <li><a href="#tool" className="text-gray-400 hover:text-primary-300 transition-colors">Tool</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-300 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>2/129,Pudhu Nagar,karuppampalayam,</p>
              <p>Karur, Tamil Nadu 639003</p>
              <p>India</p>
              <p>Phone: +91 97894 99050</p>
              <p>Email: srivishnupackage@gmail.com</p>
            </address>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 9am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        
        <div className="flex justify-center mt-12">
          <a
            href="#home"
            className="bg-gray-800 p-3 rounded-full text-white hover:bg-primary-600 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </a>
        </div>
      </div>

  
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          Sri Vishnu Package.Developed by Parthasarathy Palanialagu.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
