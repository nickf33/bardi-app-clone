"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import products from "./products";

const TabsNav = ({
  activeTab,
  handleClick,
}: {
  activeTab: number;
  handleClick: (index: number) => void;
}) => {
  return (
    <>
      <div className="flex w-full border-b-2 gap-10 justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className=""
            onClick={() => handleClick(index)}
            style={{ position: "relative" }}
          >
            <p className={`text-2xs my-2`}>{product.title}</p>
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: activeTab === index ? "100%" : "0%",
                transition: { duration: 0.2 },
              }}
              className={`absolute bottom-[-1] left-0 bg-gray-800 h-[3px]`}
            ></motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

//  take in the index from activetab.
//   display the details based on the active tab number.
//   work out how to animate based on the onclick function.
//   start by fading in each tab, then work on fading out each.

const ProductDisplay = ({
  activeTab,
  handleClick,
}: {
  activeTab: number;
  handleClick: (index: number) => void;
}) => {
  return (
    <>
      <div className="w-full h-64">
        <div className="grid grid-cols-2 gap-10 py-10">
          <div className="h-64 w-full bg-cyan-500">
            <div className="">{products[activeTab].items[0].name}</div>
          </div>
          <div className="h-64 w-full bg-cyan-500"></div>
        </div>
      </div>
    </>
  );
};

const TabsWrap = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="w-[90%] max-w-custom mx-auto">
          <h2 className="text-[2.2rem] font-semibold text-center my-8">
            Start your system.
          </h2>
          <TabsNav activeTab={activeTab} handleClick={handleClick} />
          <ProductDisplay activeTab={activeTab} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default TabsWrap;
