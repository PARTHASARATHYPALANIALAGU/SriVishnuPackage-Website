import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/logo.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Machinery", href: "#machineries" },
    {name: "Tool", href: "#tool"},
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : " backdrop-blur-md bg-white/70 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
            <img
                src={Logo} 
                alt="Sri Vishnu Package Logo"
                className="h-10 w-10 object-contain gap-2"
              />
              <span className="text-2xl font-bold text-primary-700">
                Sri Vishnu Package
              </span>
            </a>
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 text-center bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
