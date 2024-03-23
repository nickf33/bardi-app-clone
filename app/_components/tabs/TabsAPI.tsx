"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabsNav from "./TabsNav";
import MainProduct from "./MainProduct";
import ProductGrid from "./ProductGrid";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const groupNames = [
  "Our Recommendations",
  "Smart Home",
  "Home Security",
  "Kitchen Essentials",
];

const TabsAPI = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productGroups, setProductGroups] = useState<Product[][]>([]);

  const [activeTab, setActiveTab] = useState(0);

  // fetch api data from fakestoreapi.com using async
  // split data into chunks of 5 and set to state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        const chunkSize = 5;
        const groups = [];
        for (let i = 0; i < data.length; i += chunkSize) {
          const chunk = data.slice(i, i + chunkSize);
          groups.push(chunk);
        }
        setProductGroups(groups);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div id="products" className="w-full mb-20">
        <div className="w-[90%] max-w-custom mx-auto">
          <h2 className="text-[2.2rem] font-semibold text-center my-8">
            Start your system.
          </h2>
          <TabsNav
            groupNames={groupNames}
            activeTab={activeTab}
            handleClick={handleClick}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 h-96 gap-5 my-8 mobile_xl:grid-cols-1 mobile_xl:h-auto"
            >
              {productGroups[activeTab] && productGroups[activeTab] && (
                <MainProduct productData={productGroups[activeTab][0]} />
              )}
              {productGroups[activeTab] &&
                productGroups[activeTab].length > 1 && (
                  <ProductGrid
                    productsData={productGroups[activeTab].slice(1)}
                  />
                )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default TabsAPI;
