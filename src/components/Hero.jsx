import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-40 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }} 
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1677340725070-0f11edc53d48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmRib3hlcyUyMGluJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D')`,
          }}
        />
      </motion.div>

    
      


      <div className="section-container relative z-10 flex flex-col items-start text-left max-w-5xl px-6">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sustainable Cardboard Packaging Solutions
            </h1>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 mb-10 max-w-3xl">
              Sri Vishnu Package delivers high-quality, eco-friendly cardboard
              packaging solutions that protect your products and our planet.
            </p>
          </motion.div>

        
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#products"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Our Products
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#products"
            className="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
