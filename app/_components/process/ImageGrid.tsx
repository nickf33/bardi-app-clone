"use client";

import { motion } from "framer-motion";
import ImgOne from "@/app/assets/images/process/plug.jpg";
import ImgTwo from "@/app/assets/images/process/heater.jpg";
import Image from "next/image";

const ImageGrid = () => {
  const animate = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 1000,
        damping: 10,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };

  return (
    <div className="relative grid grid-cols-6 gap-10 h-72 my-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animate}
        viewport={{ once: true }}
        className="col-span-4 rounded-lg mobile_xl:col-span-6 overflow-hidden"
      >
        <Image
          src={ImgOne}
          alt="Image of something"
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animate}
        viewport={{ once: true }}
        className="col-span-2 rounded-lg mobile_xl:col-span-6 overflow-hidden mobile_xl:hidden"
      >
        <Image
          src={ImgTwo}
          alt="Image of something"
          width={1500}
          height={1500}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ImageGrid;
