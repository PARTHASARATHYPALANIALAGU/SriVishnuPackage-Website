import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Plain Boxes",
    description: "Simple, unbranded boxes ideal for basic packaging and shipping needs. Cost-effective and versatile.",
    image: "https://images.pexels.com/photos/4498135/pexels-photo-4498135.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Die-Cut Boxes",
    description: "Custom-shaped boxes cut to precise dimensions, perfect for fitting specific products securely and neatly.",
    image: "https://plus.unsplash.com/premium_photo-1731478338555-3c3023318982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZGJveCUyMG1hbnVmYWN0dXJlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Printed Boxes",
    description: "Boxes with branded designs, logos, or product info, enhancing presentation and customer experience.",
    image: "https://images.unsplash.com/photo-1573875133384-07fe039214a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByaW50ZWQlMjBjYXJkYm9hcmRib3hlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Fancy Boxes",
    description: "Premium packaging with decorative finishes, used for gifting, luxury products, or special occasions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pGIPCZWIgxjXMvjRbPUxsrsQyLk-VnQ9xA&s",
  }
];

const ProductCard = ({ product, index }) => {
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
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality cardboard packaging products designed to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
