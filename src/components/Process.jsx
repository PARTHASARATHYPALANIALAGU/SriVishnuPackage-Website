import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Design",
    description: "Our team works with you to create custom packaging designs that meet your specific requirements.",
    icon: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Production",
    description: "Using advanced machinery and quality materials, we manufacture your packaging with precision.",
    icon: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Quality Control",
    description: "Every product undergoes rigorous testing to ensure it meets our high standards.",
    icon: "https://media.licdn.com/dms/image/v2/C4E12AQER6gUUyjHFWQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633414884889?e=2147483647&v=beta&t=xdSeR2-yYTvztug6FGMOhjK6dv352ru_QZ-SB0zld1c",
  },
  {
    id: 4,
    title: "Delivery",
    description: "We ensure timely delivery of your packaging solutions directly to your specified location.",
    icon: "https://img.freepik.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.jpg?ga=GA1.1.1133822280.1738124060&semt=ais_hybrid&w=740",
  },
];

const ProcessStep = ({ step, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative mb-6">
        <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-primary-100">
          <img 
            src={step.icon} 
            alt={step.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
          {index + 1}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
      <p className="text-center text-gray-600 max-w-xs">{step.description}</p>
    </motion.div>
  );
};

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality and precision at every step of our cardboard manufacturing process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
