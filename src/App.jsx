import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Machinery from "./components/Machinery";
import BoxSizeCalculator from "./components/Boxsizecalculator";

const App = () => {
  useEffect(() => {
    
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("is-visible");
        }
      });
    };
    
    window.addEventListener("scroll", animateElements);
    animateElements(); // Run once on initial load
    
    return () => {
      window.removeEventListener("scroll", animateElements);
    };
  }, []);
  
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Process />
      <Machinery/>
      <BoxSizeCalculator/>
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
