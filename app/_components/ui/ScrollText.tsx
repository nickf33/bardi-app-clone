"use client";

// animate a block of text from 0-1 opacity

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const ScrollText = ({ text, padding }: { text: string; padding: string }) => {
  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start 0.6", "start 0.2"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1], // Input range
    [20, 0] // Output range: move up by 20px when scroll progress is 0, return to original position when progress is 1
  );

  return (
    <div ref={wrapper} className={`relative ${padding}`}>
      <motion.h2
        className="text-[2.2rem] font-semibold max-w-[30rem]"
        style={{ opacity: scrollYProgress, y: translateY }}
      >
        {text}
      </motion.h2>
    </div>
  );
};

export default ScrollText;
