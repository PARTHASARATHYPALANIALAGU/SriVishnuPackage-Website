import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const machinesData = [
  {
    id: 1,
    title: "Corrugation Machine",
    description: "Produces corrugated sheets by bonding fluted and liner paper for packaging.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dfO8bgxL29TFJP7zj6muY-fWXhBfrbAd2A&s",
  },
  {
    id: 2,
    title: "Printer Slotter Machine",
    description: "Prints and cuts slots on corrugated sheets for box making.",
    src: "https://img1.exportersindia.com/product_images/bc-full/2020/3/737233/water-based-flexo-printer-slotter-1585631999-5352167.jpeg",
  },
  {
    id: 3,
    title: "Die-Cutter",
    description: "Precision cutting of shapes with die tooling.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVX3XQHK9m01J7Yo3tHY9sHmlZfI95AZjPJA&s",
  },
  {
  id: 4,
  title: "Automatic Folder Gluer",
  description: "Efficiently glues box flaps, ensuring strong, accurate joints for final carton formation.",
  src: "https://2.wlimg.com/product_images/bc-full/dir_40/1191409/semi-automatic-folder-gluer-machine-850482.jpg",
}

];

const MachineCard = ({ machine, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={machine.src}
          alt={machine.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{machine.title}</h3>
        <p className="text-gray-600">{machine.description}</p>
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
    <section id="machineries" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Machinery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use state-of-the-art machinery to ensure your packaging is produced efficiently and precisely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {machinesData.map((machine, index) => (
            <MachineCard key={machine.id} machine={machine} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
