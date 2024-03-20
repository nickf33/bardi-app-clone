"use client";

import { motion } from "framer-motion";

const TabsNav = ({
  groupNames,
  activeTab,
  handleClick,
}: {
  groupNames: string[];
  activeTab: number;
  handleClick: (index: number) => void;
}) => {
  return (
    <>
      <div className="flex w-full border-b-2 gap-10 justify-center">
        {groupNames.map((groupName, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleClick(index)}
            style={{ position: "relative" }}
          >
            <p className={`text-2xs my-2`}>{groupName}</p>
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: activeTab === index ? "100%" : "0%",
                transition: { duration: 0.2 },
              }}
              className={`absolute bottom-[-0.10rem] left-0 bg-gray-800 h-[3px]`}
            ></motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabsNav;
