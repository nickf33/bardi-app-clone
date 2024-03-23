"use client";

import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const ScrollWords = ({ text, padding }: { text: string; padding: string }) => {
  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "start start"],
  });
  let words: string[] | undefined;
  if (text) {
    words = text.split(" ");
  } else {
    words = []; // Provide a default empty array when text is null or undefined
  }

  return (
    <div ref={wrapper} className={`relative flex flex-wrap border ${padding}`}>
      <motion.h2
        className="flex flex-wrap text-[2.2rem] leading-tight font-semibold max-w-[30rem]"
        style={{ opacity: scrollYProgress }}
      >
        {(words || []).map((word, i) => {
          const start = i / (words?.length || 1);
          const end = start + 1 / (words?.length || 1);
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </motion.h2>
    </div>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateY = useTransform(progress, [0, 1], [0, -10]);
  return (
    <span className="relative">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className="mr-[12px]">
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollWords;
