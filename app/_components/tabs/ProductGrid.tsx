"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// animation variants for stagger
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ProductGrid = ({ productsData }: { productsData: Product[] }) => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-5"
      >
        {productsData.map((product, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col justify-between items-center border rounded-xl text-xs text-center p-4 overflow-hidden h-48 transiton duration-300 hover:scale-105 hover:shadow-xl"
            variants={item}
          >
            <p className=""> {product.title}</p>
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-3/5"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProductGrid;
