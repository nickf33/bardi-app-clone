"use client";

import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollCharacters = ({
  text,
  padding,
}: {
  text: string;
  padding: string;
}) => {
  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start 0.6", "start start"],
  });

  let words: string[] | undefined;
  if (text) {
    words = text.split(" ");
  } else {
    words = [];
  }

  return (
    <div ref={wrapper} className={`relative flex flex-wrap ${padding}`}>
      <motion.h2 className="relative flex flex-wrap text-[2.2rem] leading-tight font-semibold max-w-[30rem]">
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
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-1.5">
      {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateY = useTransform(progress, range, [20, 0]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{ opacity, y: translateY }}
        className="relative inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollCharacters;
