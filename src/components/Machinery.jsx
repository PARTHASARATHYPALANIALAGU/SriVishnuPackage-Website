import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const machines = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dfO8bgxL29TFJP7zj6muY-fWXhBfrbAd2A&s",
    title: "Corrugation Machine",
    description: "Produces corrugated sheets by bonding fluted and liner paper for packaging.",
  },
  {
    src: "https://img1.exportersindia.com/product_images/bc-full/2020/3/737233/water-based-flexo-printer-slotter-1585631999-5352167.jpeg",
    title: "Printer Slotter Machine",
    description: "Prints and cuts slots on corrugated sheets for box making.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVX3XQHK9m01J7Yo3tHY9sHmlZfI95AZjPJA&s",
    title: "Die-Cutter",
    description: "Precision cutting of shapes with die tooling.",
  },
  
];

const MachineCard = ({ machine, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src={machine.src}
        alt={machine.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-0 w-full bg-black/60 text-white text-center py-2 text-base font-semibold">
        {machine.title}
      </div>
      <div className="absolute bottom-0 w-full bg-black/80 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {machine.description}
      </div>
    </motion.div>
  );
};

export default function MachinesGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="machineries" className="max-w-6xl mx-auto py-16 px-4">
    
      <motion.div
        ref={ref}
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Machinery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We use state-of-the-art machinery to ensure your packaging is
          produced efficiently and with precision. Here are some of our key machines.
        </p>
      </motion.div>

    
      <div className="grid grid-cols-3 gap-6">
        {machines.slice(0, 3).map((machine, index) => (
          <MachineCard key={index} machine={machine} index={index} />
        ))}
      </div>

      
    </div>
  );
}
