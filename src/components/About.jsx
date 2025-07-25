import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";
const advantages = [
  "Sustainable and eco-friendly materials",
  "Custom designs for every business need",
  "Industry-leading manufacturing technology",
  "On-time delivery guarantee",
  "Cost-effective packaging solutions",
  "Quality control at every production stage",
  "FSC-certified for responsible forest management"
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            
<div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/src/assets/about.png"
                alt="Sri Vishnu Package facility"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-700 italic font-medium">
                "Committed to delivering sustainable packaging solutions since 2018."
              </p>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Sri Vishnu Package
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018 by Mr. Palanialagu, Sri Vishnu Package has grown to become a leading FSC-certified manufacturer of cardboard packaging solutions. We combine traditional craftsmanship with modern technology to deliver superior quality products.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to environmental sustainability and customer satisfaction has established us as a trusted partner for businesses across multiple industries.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {statsInView && <CountUp start={0} end={7} duration={3} suffix="+" />}
            </div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {statsInView && <CountUp start={0} end={250} duration={3.5} suffix="+" />}
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {statsInView && <CountUp start={0} end={15} duration={3.5} suffix="M+" />}
            </div>
            <div className="text-gray-600">Boxes Produced</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {statsInView && <CountUp start={0} end={98} duration={3} suffix="%" />}
            </div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
