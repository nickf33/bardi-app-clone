"use client";

import { motion } from "framer-motion";

const Animate = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const animate = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animate}
      viewport={{ once: true }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
